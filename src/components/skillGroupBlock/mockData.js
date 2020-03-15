import { calculateTotals } from '../../utils';

const data = {
  skillGroup: {
    label: 'athletics (str+dex)',
    skillId: 'athletics',
    cost: 5,
    baseScore: 0,
    calculate: ({ str, dex }) => (calculateTotals(str) + calculateTotals(dex)),
  },
  skills: [
    {
      label: 'acrobatics',
      skillId: 'acrobatics',
    },
    {
      label: 'dodge (+20-siz)',
      skillId: 'dodge',
      calculate: ({ siz }) => ((20 - calculateTotals(siz))),
    },
    {
      label: 'pilot',
      skillId: 'pilot',
    },
    {
      label: 'stealth (+20-siz)',
      skillId: 'stealth',
      calculate: ({ siz }) => ((20 - calculateTotals(siz))),
    },
  ],
};

export default data;
