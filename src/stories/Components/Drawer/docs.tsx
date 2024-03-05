import { Typography, Button } from '../../../../components';

export const argTypes = {
  empty: {
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  }
}

export const args = {
  children: [
    <div className='flex flex-col gap-2'>
      <Typography size="base">The quick brown fox jumps over the lazy dog.</Typography>
      <Button>Click me</Button>
    </div>,
  ]
};