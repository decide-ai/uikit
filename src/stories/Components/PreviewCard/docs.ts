export const argTypes = {
  status: {
    control: 'select',
    options: [
      "active",
      "voted",
      "standard"
    ],
    table: {
      defaultValue: { summary: 'standard' }
    }
  },
  hrefTarget: {
    control: 'select',
    options: [
      "_self",
      "_blank"
    ],
    table: {
      defaultValue: { summary: '_self' }
    }
  }
}

export const args = {};