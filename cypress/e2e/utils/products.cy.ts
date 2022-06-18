import { toPriceWithTwoDecimal } from '@/utils/adapters/products';

describe('toPriceWithTwoDecimal', () => {
  const cases = [
      ['', ''],
      ['2', '2.00'],
      [2, '2.00'],
      ['3.45', '3.45'],
      ['4.50', '4.50'],
      [4.6, '4.60'],
  ];
  cases.forEach((testCase) => {
      it(`given ${testCase[0]} as argument, returns ${testCase[1]}`, () => {
          expect(toPriceWithTwoDecimal(testCase[0])).to.equal(testCase[1]);
      });
  });
});
