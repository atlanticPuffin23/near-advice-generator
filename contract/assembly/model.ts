import { Context, math, PersistentVector } from 'near-sdk-as';

@nearBindgen
export class Quiz {
  id: u32;
  title: string;
  owner: string;
  questions: string[];

  constructor(title: string, questions: string[]) {
    this.id = Quiz.generateUniqueID();
    this.title = title;
    this.owner = Context.contractName;
    this.questions = questions;
  }

  // To DO: left static? or move to helper functions?
  static getAllQuizzes(): PersistentVector<Quiz> {
    return quizzes;
  }

  static addNewQuiz(title: string, questions: string[]): number {
    const newQuiz = new Quiz(title, questions);
    return quizzes.push(newQuiz);
  }

  // To DO: move it to utils?
  private static generateUniqueID(): u32 {
    return math.hash32(Context.sender + '-' + Context.blockIndex.toString());
  }
}

export const quizzes = new PersistentVector<Quiz>('quizzes');
