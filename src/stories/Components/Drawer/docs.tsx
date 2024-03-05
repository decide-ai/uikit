import { Typography, Button } from '../../../../components';

export const argTypes = {
  skin: {
    control: 'select',
    options: ['standard', 'grey'],
    table: {
      defaultValue: { summary: 'standard' }
    }
  },
  empty: {
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  }
}

export const args = {
  skin: 'standard',
  children: [
    <div className='flex flex-col gap-2'>
      <Typography size="base">The quick brown fox jumps over the lazy dog.</Typography>
      <Button>Click me</Button>
    </div>,
  ]
};