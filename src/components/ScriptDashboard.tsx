import React from 'react';
import { ScriptExecution } from '../types';
import { Download } from 'lucide-react';

interface ScriptDashboardProps {
  executions: ScriptExecution[];
  onDownload: (execution: ScriptExecution) => void;
}

const ScriptDashboard: React.FC<ScriptDashboardProps> = ({ executions, onDownload }) => {
  const getStatusColor = (status: ScriptExecution['status']) => {
    switch (status) {
      case 'about to run':
        return 'bg-yellow-200 text-yellow-800';
      case 'running':
        return 'bg-blue-200 text-blue-800';
      case 'completed':
        return 'bg-green-200 text-green-800';
      case 'failed':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="bg-[#F4F6FF] p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-[#536493]">Script Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#536493] text-[#F4F6FF]">
              <th className="p-2">ID</th>
              <th className="p-2">Script</th>
              <th className="p-2">Status</th>
              <th className="p-2">Start Time</th>
              <th className="p-2">End Time</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {executions.map((execution) => (
              <tr key={execution.id} className="border-b border-gray-200">
                <td className="p-2">{execution.id}</td>
                <td className="p-2">{execution.scriptId}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded ${getStatusColor(execution.status)}`}>
                    {execution.status}
                  </span>
                </td>
                <td className="p-2">{execution.startTime.toLocaleString()}</td>
                <td className="p-2">{execution.endTime?.toLocaleString() || '-'}</td>
                <td className="p-2">
                  {execution.status === 'completed' && (
                    <button
                      onClick={() => onDownload(execution)}
                      className="text-[#536493] hover:text-[#7CF5FF] transition-colors"
                    >
                      <Download size={20} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScriptDashboard;