import React from 'react';
import { Script } from '../types';

interface ScriptListProps {
  scripts: Script[];
  onSelectScript: (script: Script) => void;
}

const ScriptList: React.FC<ScriptListProps> = ({ scripts, onSelectScript }) => {
  return (
    <div className="bg-[#F4F6FF] p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-[#536493]">Available Scripts</h2>
      <ul>
        {scripts.map((script) => (
          <li key={script.id} className="mb-2">
            <button
              onClick={() => onSelectScript(script)}
              className="w-full text-left p-2 rounded hover:bg-[#7CF5FF] transition-colors"
            >
              <span className="font-semibold">{script.name}</span>
              <p className="text-sm text-[#B7B7B7]">{script.description}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScriptList;