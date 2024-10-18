import { User } from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'Admin User',
    role: 'admin',
    permissions: ['run_scripts', 'approve_requests'],
  },
  {
    id: '2',
    name: 'Regular User',
    role: 'user',
    permissions: ['run_scripts'],
  },
  {
    id: '3',
    name: 'Limited User',
    role: 'user',
    permissions: [],
  },
];