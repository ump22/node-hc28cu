/**
 * Implement a class 'QuestionBank' as a base class
 * which can be used to define a particular question bank for an industry.
 * This class should have the ability provide accessors to retreive total Number of questions
 */

export type QuestionBankData = {
  name: string;
  label?: string;
  body?: string;
  values?: string;
  format?: string;
  type: string;
  trigger?: {
    [key in string]: any;
  };
};

export class QuestionBank {
  constructor(private questionBank: QuestionBankData[]) {}
  /**
   * Implement an accessort getAllQuestionBank() so that
   * current questionbank for that particulat industry could be retrieved.
   */
  public getAllQuestionBank() {
    /**
     * TODO: Your body goes here.
     */
  }

  /**
   * Implement a body for this method so that
   */
  public getTotalNumberOfQuestions() {
    /**
     * TODO: Your body goes here.
     */
    return this.questionBank.length;
  }

  /**
   * Implement an ability in this class such that the derived
   * classes should be including 2 mandatory questions for each new question bank for
   * a particular industry. Note that the order of the questions do not matter.
   * 
   * The question bank data is as follows:
   * 
   * {
        body: 'What was your gross revenue for the past 12 months?',
        format: 'dollar',
        name: 'revenueLastYear',
        type: 'range',
      },
      {
        body: '"What is your projected gross revenue over the coming 12 months?',
        format: 'dollar',
        name: 'revenueProjectedYear',
        type: 'range',
      },
   */
}

export class ContractorQuestionBank extends QuestionBank {
  constructor(contractQuestionBank: QuestionBankData[]) {
    super(contractQuestionBank);
  }
}

const contractorQuestionBank = new ContractorQuestionBank([
  {
    type: 'date',
    name: 'commercialAutoInsuranceRenewalDate',
    label:
      'When does your current Commercial Auto policy renew, if you have one?',
    trigger: {
      commercialAutoInsurance: 'yes',
    },
  },
]);

/**
 * NOTE: Below are written functions that are being used in part-3.spec.ts file to test the results.
 * No action required. However, please feel free to use them for debugging purposes.
 * Please check part3-spec.ts for the expected outcomes of each task function.
 */

export function task1() {
  return contractorQuestionBank.getAllQuestionBank();
}

export function task2() {
  return contractorQuestionBank.getTotalNumberOfQuestions();
}
