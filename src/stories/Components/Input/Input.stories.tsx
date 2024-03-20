import type { Meta, StoryObj } from '@storybook/react';
import { TextInput as InputComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/TextInput',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof InputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;


export const TextInputWithClearText: Story = {
  args: {
    type: 'input',
    inputId: 'TextInputWithClearText',
    label: 'Input label',
    placeholder: 'Input placeholder',
    clearText: true,
  }
};

export const TextInputError: Story = {
  args: {
    type: 'input',
    inputId: 'TextInputError',
    label: 'Input label',
    placeholder: 'Input placeholder',
    isError: true,
    errorMessage: 'This input has an error',
  }
};

export const TextInputRequire: Story = {
  args: {
    type: 'input',
    inputId: 'TextInputRequire',
    label: 'Input label',
    placeholder: 'Input placeholder',
    require: true,
  }
};

export const TextInputRequireChecked: Story = {
  args: {
    type: 'input',
    inputId: 'TextInputRequireChecked',
    label: 'Input label',
    placeholder: 'Input placeholder',
    require: true,
    checked: true,
  }
};

export const TextInputWithInputText: Story = {
  args: {
    type: 'input',
    inputId: 'TextInputWithInputText',
    label: 'Input label',
    placeholder: 'Input placeholder',
    inputText: 'MOD'
  }
};

export const TextInputViewOnly: Story = {
  args: {
    type: 'input',
    inputId: 'TextInputViewOnly',
    label: 'Input label',
    placeholder: 'Input placeholder',
    viewOnly: true,
  }
};

export const TextInputWithTextareaType: Story = {
  args: {
    type: 'textarea',
    inputId: 'TextInputViewOnly',
    label: 'Input label',
    placeholder: 'Input placeholder',
  }
};

export const TextInputWithTextareaHeight: Story = {
  args: {
    type: 'textarea',
    inputId: 'TextInputViewOnly',
    label: 'Input label',
    placeholder: 'Input placeholder',
    height: '150px'
  }
};