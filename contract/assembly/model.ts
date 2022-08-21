import { generateUniqueID } from './helper';
import { Context, PersistentUnorderedMap } from 'near-sdk-as';

// To DO: update name before finish
export const quizzes = new PersistentUnorderedMap<u32, Quiz>('quiz_map4');
export const questions_map = new PersistentUnorderedMap<u32, Question[]>('questions_map4');

@nearBindgen
export class Choice {
  order: u32;
  title: string;
  isCorrect: boolean;
}

@nearBindgen
export class ChoiceToAnswer {
  order: u32;
  title: string;
}

@nearBindgen
export class QuestionToAnswer {
  order: u32;
  title: string;
  choices: ChoiceToAnswer[];
}

@nearBindgen
export class Question {
  order: u32;
  title: string;
  choices: Choice[];

  constructor(order: u32, title: string, choices: Choice[]) {
    this.order = order;
    this.title = title;
    this.choices = choices;
  }
}

@nearBindgen
export class Quiz {
  id: u32;
  name: string;
  owner: string;
  questionsCount: number;
  questionsId: u32;

  constructor(name: string, questionsId: u32, questionsCount: number) {
    this.id = generateUniqueID();
    this.name = name;
    this.owner = Context.sender;
    this.questionsCount = questionsCount;
    this.questionsId = questionsId;
  }
}
