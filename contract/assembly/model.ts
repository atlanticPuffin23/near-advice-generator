import { generateUniqueID } from './helper';
import { Context, PersistentUnorderedMap } from 'near-sdk-as';

export const quizzes = new PersistentUnorderedMap<string, Quiz>('quiz_map2');
export const questions_map = new PersistentUnorderedMap<string, Question[]>('questions_map2');

@nearBindgen
export class Choice {
  isCorrect: boolean;
  choice: string;
}

@nearBindgen
export class Question {
  quiestion: string;
  choices: Choice[];
}

@nearBindgen
export class Quiz {
  id: u32;
  title: string;
  owner: string;
  questionsCount: number;
  questionsId: u32;

  constructor(title: string, questions: Question[]) {
    this.id = generateUniqueID();
    this.title = title;
    this.owner = Context.sender;
    this.questionsCount = questions.length;
    this.questionsId = this.saveQuestions(questions);
  }

  saveQuestions(questions: Question[]): u32 {
    const questionsId = generateUniqueID();
    questions_map.set(`${questionsId}`, questions);

    return questionsId;
  }
}
