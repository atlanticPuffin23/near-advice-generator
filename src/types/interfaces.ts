export interface IChoice {
  title: string;
  isCorrect: boolean;
}

export interface IQuestion {
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

// methods params
export interface IQuizByIdParams {
  id: number;
}

export interface IScoreParams {
  questionsId: number;
  answeredQuestions: IQuestion[];
}

export interface IQuizQuestionsParams {
  questionsId: number;
}

export interface ICreateQuizParams {
  name: string;
  questions: IQuestion[];
}
