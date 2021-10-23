import { task1, task2 } from './part-3';

describe('#Part3', () => {
  it('task 1 should meet the expected data', () => {
    expect(task1()).toStrictEqual([
      {
        label:
          'When does your current Commercial Auto policy renew, if you have one?',
        name: 'commercialAutoInsuranceRenewalDate',
        trigger: { commercialAutoInsurance: 'yes' },
        type: 'date',
      },
      {
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
    ]);
  });

  it('task 2 should meet the expected data', () => {
    expect(task2()).toStrictEqual(3);
  });
});
