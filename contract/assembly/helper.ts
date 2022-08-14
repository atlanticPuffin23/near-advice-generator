import { Context, math } from 'near-sdk-as';
import { Choice, Question, questions_map, quizzes } from './model';

export function generateUniqueID(): u32 {
  return math.hash32(Context.sender + '-' + Context.blockIndex.toString());
}

function getChoiceByTitle(title: string, choices: Choice[]): Choice {
  let choice: Choice;

  for (let i = 0; i < choices.length; i++) {
    if (choices[i].choice == title) {
      choice = choices[i];
    }
  }

  return choice;
}

function getQuestionByTitle(title: string, questions: Question[]): Question {
  let question: Question;

  for (let i = 0; i < questions.length; i++) {
    if (questions[i].quiestion == title) {
      question = questions[i];
    }
  }

  return question;
}

export function calculateScore(id: u32, answeredQuestions: Question[]): number {
  let score = 0;

  const questionsId = quizzes.getSome(`${id}`).questionsId;
  const questions = questions_map.getSome(`${questionsId}`);

  for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    const answeredQuestion = getQuestionByTitle(currentQuestion.quiestion, answeredQuestions);

    for (let n = 0; n < currentQuestion.choices.length; n++) {
      const currentChoice = currentQuestion.choices[n];
      const answeredChoice = getChoiceByTitle(currentChoice.choice, answeredQuestion.choices);

      if (currentChoice.isCorrect && answeredChoice.isCorrect) {
        ++score;
      }
    }
  }

  return score;
}
