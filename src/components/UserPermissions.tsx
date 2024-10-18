import React from 'react';
import { User } from '../types';
import { Check, X } from 'lucide-react';

interface UserPermissionsProps {
  user: User;
}

const UserPermissions: React.FC<UserPermissionsProps> = ({ user }) => {
  const allPermissions = ['run_scripts', 'approve_requests'];

  return (
    <div className="bg-[#F4F6FF] p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-[#536493]">User Permissions</h2>
      <p className="mb-2">
        <strong>Name:</strong> {user.name}
      </p>
      <p className="mb-4">
        <strong>Role:</strong> {user.role}
      </p>
      <ul>
        {allPermissions.map((permission) => (
          <li key={permission} className="flex items-center mb-2">
            {user.permissions.includes(permission) ? (
              <Check className="text-green-500 mr-2" size={20} />
            ) : (
              <X className="text-red-500 mr-2" size={20} />
            )}
            {permission}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPermissions;