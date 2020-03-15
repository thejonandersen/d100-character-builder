import statBlock from '../statBlock/mockData';
import { calculateTotals } from '../../utils';

const stats = statBlock.scores;

const fieldProps = {
  shortName: 'HP',
  longName: 'Hit Points',
  formula: '(CON+SIZ)/2',
  calculate: ({ con, siz }) => Math.abs((calculateTotals(con) + calculateTotals(siz)) / 2),
};

export {
  fieldProps,
  stats,
};
