import { generateUniqueID } from './helper';
import { Context, PersistentUnorderedMap } from 'near-sdk-as';

// To DO: update name before finish
export const quizzes = new PersistentUnorderedMap<u32, Quiz>('quiz_map3');
export const questions_map = new PersistentUnorderedMap<u32, Question[]>('questions_map3');

@nearBindgen
export class Choice {
  title: string;
  isCorrect: boolean;
}

@nearBindgen
export class Question {
  id: u32;
  title: string;
  choices: Choice[];

  constructor(title: string, choices: Choice[]) {
    this.title = title;
    this.choices = choices;
    this.id = generateUniqueID();
  }
}

@nearBindgen
export class Quiz {
  id: u32;
  name: string;
  owner: string;
  questionsCount: number;
  questionsId: u32;

  constructor(name: string, questions: Question[]) {
    this.id = generateUniqueID();
    this.name = name;
    this.owner = Context.sender;
    this.questionsCount = questions.length;
    this.questionsId = this.saveQuestions(questions);
  }

  // To DO: ???
  saveQuestions(questions: Question[]): u32 {
    const questionsId = generateUniqueID();

    questions_map.set(
      questionsId,
      questions.map<Question>((question: Question) => new Question(question.title, question.choices))
    );

    return questionsId;
  }
}
