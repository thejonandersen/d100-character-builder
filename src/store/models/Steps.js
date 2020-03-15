const steps = {
  state: [
    {
      path: '/',
      label: 'Select Tier',
      componentName: 'Tier',
      enabled: true,
    },
    {
      path: '/race',
      label: 'Select Race',
      componentName: 'Race',
      enabled: false,
    },
    {
      path: '/stats',
      label: 'Assign Stats',
      componentName: 'Stats',
      enabled: false,
    },
    {
      path: '/character-points',
      label: 'Spend Character Points',
      componentName: 'CharacterPoints',
      enabled: false,
    },
    {
      path: '/equipment',
      label: 'Buy Equipment',
      componentName: 'Equipment',
      enabled: false,
    },
  ],
  reducers: {

  },
};

export default steps;
