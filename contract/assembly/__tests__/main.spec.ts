import { createQuiz, getAllQuizzes, getQuizById, getQuizQuestions } from '..';
import { Question, Quiz, quizzes, questions_map, QuestionToAnswer } from '../model';

const testQuiz = new Quiz('test_quiz_name', 1, 2);

const TEST_CHOICE_1 = { order: 1, title: 'test_choice_1', isCorrect: false };
const TEST_CHOICE_2 = { order: 1, title: 'test_choice_1', isCorrect: false };

const testQuestion = new Question(1, 'test_question_title', [TEST_CHOICE_1, TEST_CHOICE_2]);

describe('Quiz', () => {
  it('getAllQuizzes - should return all quizzes', () => {
    // setup
    quizzes.set(testQuiz.id, testQuiz);

    // test
    const allQuizzes = getAllQuizzes();

    // verify
    expect(allQuizzes.length).toBe(1);
  });

  it('getQuizById - should return quiz by id', () => {
    // setup
    quizzes.set(testQuiz.id, testQuiz);

    // test
    const foundQuiz = getQuizById(testQuiz.id);

    // verify
    expect(foundQuiz).toStrictEqual(testQuiz);
  });

  it('createQuiz - should create quiz and questions', () => {
    expect(quizzes.length).toBe(0);
    expect(questions_map.length).toBe(0);

    const newQuiz = createQuiz(testQuiz.name, [testQuestion]);

    // verify
    expect(quizzes.length).toBe(1);
    expect(questions_map.length).toBe(1);

    const savedNewQuiz = getQuizById(newQuiz.id);
    expect(savedNewQuiz).toStrictEqual(newQuiz);

    const savedNewQuestions = questions_map.getSome(newQuiz.id);
    expect(savedNewQuestions).toStrictEqual([testQuestion]);
  });
});

describe('Questions', () => {
  it('getQuizQuestions - should return all quiz questions', () => {
    const testQuestionToAnswer: QuestionToAnswer = {
      order: 1,
      title: 'test_question_title',
      choices: [
        { order: 1, title: 'test_choice_1' },
        { order: 2, title: 'test_choice_2' },
      ],
    };

    // setup
    questions_map.set(testQuiz.id, [testQuestion]);

    // test
    const quizQuestions = getQuizQuestions(testQuiz.id);

    // verify
    expect(quizQuestions.length).toBe(1);
    expect(quizQuestions).toStrictEqual([testQuestionToAnswer]);
  });
});
