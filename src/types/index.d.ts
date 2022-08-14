import { Contract, WalletConnection } from 'near-api-js';
import { IQuiz, IQuestion } from '../components/pages/Home/Home';

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
    walletConnection: WalletConnection;
    contract: ContractWithMethods;
  }
}
