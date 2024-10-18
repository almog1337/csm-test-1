import React from 'react';
import { User } from '../types';
import { FileText } from 'lucide-react';

interface HeaderProps {
  currentUser: User;
  onUserChange: (userId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentUser, onUserChange }) => {
  return (
    <header className="bg-[#536493] text-[#F4F6FF] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FileText size={24} className="mr-2" />
          <h1 className="text-2xl font-bold">CSM Scripts</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Current User:</span>
          <select
            value={currentUser.id}
            onChange={(e) => onUserChange(e.target.value)}
            className="bg-[#F4F6FF] text-[#536493] p-1 rounded"
          >
            <option value="1">Admin User</option>
            <option value="2">Regular User</option>
            <option value="3">Limited User</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;