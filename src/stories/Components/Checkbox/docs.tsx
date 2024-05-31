export const argTypes = {
  them: {
    control: 'select',
    options: [
      "black",
      "darkGreen",
      "lightGreen",
      "blue",
    ],
    table: {
      defaultValue: { summary: 'darkGreen' }
    }
  },
  size: {
    control: 'select',
    options: [
      "large",
      "medium",
      "small",
    ],
    table: {
      defaultValue: { summary: 'medium' }
    }
  },
  rounded: {
    control: 'select',
    options: [
      "md",
      "lg",
      "xl",
      "2xl",
    ],
    table: {
      defaultValue: { summary: 'md' }
    }
  },
}
export const args = {};