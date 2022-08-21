export interface IChoice {
  order: number;
  title: string;
  isCorrect: boolean;
}

export interface IQuestion {
  order: number;
  title: string;
  choices: IChoice[];
}

export interface IQuiz {
  id: number;
  name: string;
  owner: string;
  questionsId: number;
  questionsCount: string;
}

// form values
export type ICreateQuizQuestion = Omit<IQuestion, 'id'>;

export interface ICreateQuizQuestionValues extends ICreateQuizQuestion {
  correctChoice: string;
}

export interface ICreateQuizValues {
  name: string;
  questions: ICreateQuizQuestionValues[];
}

export type ITakeQuizValues = Omit<ICreateQuizValues, 'name'>;

// methods params
export interface IQuizByIdParams {
  id: number;
}

export interface IScoreParams {
  questionsId: number;
  answeredQuestions: IQuestion[];
}

export interface IQuizQuestionsParams {
  id: number;
}

export interface ICreateQuizParams {
  name: string;
  questions: ICreateQuizQuestion[];
}
