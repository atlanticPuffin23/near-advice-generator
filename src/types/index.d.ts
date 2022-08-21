import { Contract, WalletConnection } from 'near-api-js';
import {
  IQuiz,
  IQuestion,
  ICreateQuizParams,
  IQuizQuestionsParams,
  IScoreParams,
  IQuizByIdParams,
} from '../types/interfaces';

export interface ContractWithMethods extends Contract {
  getAllQuizzes: () => Promise<IQuiz[]>;
  getQuizById: ({ id }: IQuizByIdParams) => Promise<IQuiz>;
  getScore: ({ questionsId, answeredQuestions }: IScoreParams) => Promise<number>;
  getQuizQuestions: ({ questionsId }: IQuizQuestionsParams) => Promise<IQuestion[]>;
  createQuiz: ({ name, questions }: ICreateQuizParams) => Promise<IQuiz>;
}

declare global {
  interface Window {
    accountId: string;
    contract: ContractWithMethods;
    nearInitPromise: Promise<void>;
    walletConnection: WalletConnection;
  }
}
