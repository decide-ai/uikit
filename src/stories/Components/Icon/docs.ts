export const argTypes = {
  fill: {
    control: 'color',
    description: 'Fill svg icon',
    table: {
      defaultValue: { summary: 'none' },
    },
  },
  stroke: {
    control: 'color',
    description: 'Sroke svg icon',
    table: {
      defaultValue: { summary: 'none' },
    },
  },
  strokeWidth: {
    control: 'number',
    description: 'Sroke width for svg icon',
    table: {
      defaultValue: { summary: 1.2 },
    },
  },
  size: {
    control: 'number',
    description: 'Svg icon size',
    table: {
      defaultValue: { summary: 24 },
    }
  },
  ratio: {
    control: 'number',
    description: 'Svg ratio',
    table: {
      defaultValue: { summary: 1 },
    }
  }
};

export const args = {
  fill: "none",
  stroke: "#000",
  strokeWidth: 1.2,
  size: 24,
  ratio: 1,
}