import { calculateTotals } from '../../utils';

const fieldProps = [
  {
    shortName: 'STAMINA',
    longName: 'Stamina Roll',
    formula: '(STR+CON)x2',
    calculate: ({ con, str }) => (calculateTotals(con) + calculateTotals(str)) * 2,
  },
  {
    shortName: 'AGILITY',
    longName: 'Agility Roll',
    formula: '(DEX+INT)x2',
    calculate: ({ dex, int }) => (calculateTotals(dex) + calculateTotals(int)) * 2,
  },
  {
    shortName: 'WILL',
    longName: 'Will Roll',
    formula: '(POW+CHA)x2',
    calculate: ({ pow, cha }) => (calculateTotals(pow) + calculateTotals(cha)) * 2,
  },
];

export default fieldProps;
