import { Context, math } from 'near-sdk-as';
import { Choice, Question, questions_map } from './model';

export function generateUniqueID(): u32 {
  return math.hash32(Context.sender + '-' + Context.blockIndex.toString());
}

function getChoiceByTitle(title: string, choices: Choice[]): Choice {
  let choice: Choice;

  for (let i = 0; i < choices.length; i++) {
    if (choices[i].title == title) {
      choice = choices[i];
    }
  }

  return choice;
}

// To DO: ???
function getQuestionById(questionId: u32, answeredQuestions: Question[]): Question {
  let question: Question;

  for (let i = 0; i < answeredQuestions.length; i++) {
    if (answeredQuestions[i].id == questionId) {
      question = answeredQuestions[i];
    }
  }

  return question;
}

export function calculateScore(questionsId: u32, answeredQuestions: Question[]): number {
  let score = 0;

  const quizQuestions = questions_map.getSome(questionsId);

  for (let i = 0; i < quizQuestions.length; i++) {
    const quizQuestion = quizQuestions[i];
    const answeredQuestion = getQuestionById(quizQuestion.id, answeredQuestions);

    for (let n = 0; n < quizQuestion.choices.length; n++) {
      const quizChoice = quizQuestion.choices[n];
      const answeredChoice = getChoiceByTitle(quizChoice.title, answeredQuestion.choices);

      if (quizChoice.isCorrect && answeredChoice.isCorrect) {
        ++score;
      }
    }
  }

  return score;
}
