export const argTypes = {
  indicator: {
    control: 'select',
    options: [
      null,
      "red",
      "green",
      "grey",
      "yellow"
    ]
  },
  textSize: {
    control: 'select',
    options: [
      "2xs",
      "xs",
      "sm",
      "base",
      "lg"
    ],
    table: {
      defaultValue: { summary: "sm" }
    }
  },
  textColor: {
    control: 'text',
    table: {
      defaultValue: { summary: 'A00' }
    }
  }
}

export const args = {};