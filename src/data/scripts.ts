import { Script } from '../types';

export const scripts: Script[] = [
  {
    id: '1',
    name: 'User Report',
    description: 'Generate a report of all users',
    inputs: [
      { name: 'startDate', type: 'date', required: true },
      { name: 'endDate', type: 'date', required: true },
    ],
  },
  {
    id: '2',
    name: 'Sales Analysis',
    description: 'Analyze sales data for a given period',
    inputs: [
      { name: 'quarter', type: 'number', required: true, validation: /^[1-4]$/ },
      { name: 'year', type: 'number', required: true, validation: /^\d{4}$/ },
    ],
  },
  {
    id: '3',
    name: "Test Big Script",
    description: 'Test several inputs',
    inputs: [
      { name: 'data', type: 'date', required: true },
      { name: 'number', type: 'number', required: true, validation: /^-?\d+$/ },
      { name: 'text', type: 'text', required: true },
    ],
  }
];