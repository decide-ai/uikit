import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table as TableComponent, Timer } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Table',
  component: TableComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes,
  args,
} as Meta<typeof TableComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Table: Story = {
  args: {
    records: [
      {
        name: `Light grey hoodie`,
        SKU: '00224239',
        price: '$59.00',
        inventory: 'In stock',
      },
      {
        name: `Black watch`,
        SKU: '00352464',
        price: '$229.00',
        inventory: 'In stock',
      },
      {
        name: 'Reading glasses',
        SKU: '00486430',
        price: '$69.00',
        inventory: 'In stock',
      },
      {
        name: 'Leather shoes',
        SKU: '00515642',
        price: '$129.00',
        inventory: 'Out of stock'
      }
    ],
    columns: [
      {
        title: 'Name',
        render: (row) => row.name,
      },
      {
        title: 'SKU',
        render: (row) => row.SKU,
      },
      {
        title: 'Inventory',
        render: (row) => row.inventory,
      },
      {
        title: 'Price',
        render: (row) => row.price,
      }
    ],
  }
};

export const TableWithButton: Story = {
  args: {
    records: [
      {
        id: '1',
        name: `Light grey hoodie`,
        SKU: '00224239',
        price: '$59.00',
        inventory: 'In stock',
        buttonText: 'Reserve',
      },
      {
        id: '2',
        name: `Black watch`,
        SKU: '00352464',
        price: '$229.00',
        inventory: 'In stock',
        buttonText: 'Reserve',
      },
      {
        id: '3',
        name: 'Reading glasses',
        SKU: '00486430',
        price: '$69.00',
        inventory: 'In stock',
        buttonText: 'Reserve'
      },
      {
        id: '4',
        name: 'Leather shoes',
        SKU: '00515642',
        price: '$129.00',
        inventory: 'Out of stock',
        buttonText: 'Reserve'
      }
    ],
    columns: [
      {
        title: 'Name',
        render: (row) => row.name,
      },
      {
        title: 'SKU',
        render: (row) => row.SKU,
      },
      {
        title: 'Inventory',
        render: (row) => row.inventory,
      },
      {
        title: 'Price',
        render: (row) => row.price,
      },
      {
        title: "",
        render: (row) => row.buttonText,
        isShowButton: true,
      },
    ],
  }
};

export const TableWithAdditionalComponent: Story = {
  args: {
    records: [
      {
        id: '1',
        name: `Light grey hoodie`,
        SKU: '00224239',
        price: '$59.00',
        inventory: 'In stock',
        buttonText: 'Reserve',
        additionalComponent: (
          <Timer 
            callback={() => {}}
            deadline={2}
            durationMinutes={5}
          />
        )
      },
      {
        id: '2',
        name: `Black watch`,
        SKU: '00352464',
        price: '$229.00',
        inventory: 'In stock',
        buttonText: 'Reserve',
      },
      {
        id: '3',
        name: 'Reading glasses',
        SKU: '00486430',
        price: '$69.00',
        inventory: 'In stock',
        buttonText: 'Reserve'
      },
      {
        id: '4',
        name: 'Leather shoes',
        SKU: '00515642',
        price: '$129.00',
        inventory: 'Out of stock',
        buttonText: 'Reserve'
      }
    ],
    columns: [
      {
        title: 'Name',
        render: (row) => row.name,
      },
      {
        title: 'SKU',
        render: (row) => row.SKU,
      },
      {
        title: 'Inventory',
        render: (row) => row.inventory,
      },
      {
        title: 'Price',
        render: (row) => row.price,
      },
      {
        title: "",
        render: (row) => row.buttonText,
        isShowButton: true,
      },
    ],
  }
};

export const TableHighLight: Story = {
  args: {
    highlightedRows: ['1', '4'],
    records: [
      {
        id: '1',
        name: `Light grey hoodie`,
        SKU: '00224239',
        price: '$59.00',
        inventory: 'In stock',
      },
      {
        id: '2',
        name: `Black watch`,
        SKU: '00352464',
        price: '$229.00',
        inventory: 'In stock',
      },
      {
        id: '3',
        name: 'Reading glasses',
        SKU: '00486430',
        price: '$69.00',
        inventory: 'In stock',
      },
      {
        id: '4',
        name: 'Leather shoes',
        SKU: '00515642',
        price: '$129.00',
        inventory: 'Out of stock'
      }
    ],
    columns: [
      {
        title: 'Name',
        render: (row) => row.name,
      },
      {
        title: 'SKU',
        render: (row) => row.SKU,
      },
      {
        title: 'Inventory',
        render: (row) => row.inventory,
      },
      {
        title: 'Price',
        render: (row) => row.price,
      }
    ],
  }
};

export const TableColumnInfo: Story = {
  args: {
    records: [
      {
        id: '1',
        name: `Light grey hoodie`,
        price: '$59.00',
        inventory: 'In stock',
      },
      {
        id: '2',
        name: `Black watch`,
        price: '$229.00',
        inventory: 'In stock',
      },
      {
        id: '3',
        name: 'Reading glasses',
        price: '$69.00',
        inventory: 'In stock',
      },
      {
        id: '4',
        name: 'Leather shoes',
        price: '$129.00',
        inventory: 'Out of stock'
      }
    ],
    columns: [
      {
        title: 'Name',
        render: (row) => row.name,
        infoTooltipProps: 'Info explaining what this column data is about'
      },
      {
        title: 'Inventory',
        render: (row) => row.inventory,
        infoTooltipProps: 'Info explaining what this column data is about'
      },
      {
        title: 'Price',
        render: (row) => row.price,
      }
    ],
  }
};

export const TableColumnCallback: Story = {
  args: {
    records: [
      {
        id: '1',
        name: `Light grey hoodie`,
        price: '$59.00',
        inventory: 'In stock',
      },
      {
        id: '2',
        name: `Black watch`,
        price: '$229.00',
        inventory: 'In stock',
      },
      {
        id: '3',
        name: 'Reading glasses',
        price: '$69.00',
        inventory: 'In stock',
      },
      {
        id: '4',
        name: 'Leather shoes',
        price: '$129.00',
        inventory: 'Out of stock'
      }
    ],
    columns: [
      {
        title: 'Name',
        render: (row) => row.name,
        onSortClick: () => { console.log('Name') },
        sortIconName: 'ArrowUpIcon',
      },
      {
        title: 'Inventory',
        render: (row) => row.inventory,
        infoTooltipProps: 'Info explaining what this column data is about'
      },
      {
        title: 'Price',
        render: (row) => row.price,
        onSortClick: () => { console.log('Price') },
      }
    ],
  }
};

export const TruncateText: Story = {
  args: {
    truncate: true,
    records: [
      {
        id: '1',
        name: `Light grey hoodie`,
        price: '$59.00',
        inventory: 'In stock',
        fieldOne: 'field one',
        fieldTwo: 'field two',
        fieldThree: 'field three',
        fieldFour: 'field four',
        fieldFive: 'field five',
      },
      {
        id: '2',
        name: `Black watch with diamond`,
        price: '$229.00',
        inventory: 'In stock',
        fieldOne: 'field one',
        fieldTwo: 'field two',
        fieldThree: 'field three',
        fieldFour: 'field four',
        fieldFive: 'field five',
      },
      {
        id: '3',
        name: 'Reading glasses',
        price: '$69.00',
        inventory: 'In stock',
        fieldOne: 'field one',
        fieldTwo: 'field two',
        fieldThree: 'field three',
        fieldFour: 'field four',
        fieldFive: 'field five',
      },
      {
        id: '4',
        name: 'Leather shoes',
        price: '$129.00',
        inventory: 'Out of stock',
        fieldOne: 'field one',
        fieldTwo: 'field two',
        fieldThree: 'field three',
        fieldFour: 'field four',
        fieldFive: 'field five',
      }
    ],
    columns: [
      {
        title: 'Name',
        render: (row) => row.name,
      },
      {
        title: 'Inventory',
        render: (row) => row.inventory,
      },
      {
        title: 'Price',
        render: (row) => row.price,
      },
      {
        title: 'FieldOne',
        render: (row) => row.fieldOne,
      },
      {
        title: 'FieldTwo',
        render: (row) => row.fieldTwo,
      },
      {
        title: 'FieldThree',
        render: (row) => row.fieldThree,
      },
      {
        title: 'FieldFour',
        render: (row) => row.fieldFour,
      },
      {
        title: 'FieldFive',
        render: (row) => row.fieldFive,
      }
    ],
  }
};

export const EmptyTable: Story = {
  args: {
    records: [],
    stubSubTitle: "The quick brown fox, full of curiosity, leaped over a lazy dog that was basking in the warm afternoon sun.",
    stubTitle: "Table is empty",
    columns: [
      {
        title: 'Name',
        render: (row) => row.name,
      },
      {
        title: 'Inventory',
        render: (row) => row.inventory,
      },
      {
        title: 'Price',
        render: (row) => row.price,
      }
    ],
  }
};