import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ScriptList from './components/ScriptList';
import ScriptForm from './components/ScriptForm';
import ScriptDashboard from './components/ScriptDashboard';
import UserPermissions from './components/UserPermissions';
import { scripts } from './data/scripts';
import { users } from './data/users';
import { Script, ScriptExecution, User } from './types';

function App() {
  const [currentUser, setCurrentUser] = useState<User>(users[0]);
  const [selectedScript, setSelectedScript] = useState<Script | null>(null);
  const [executions, setExecutions] = useState<ScriptExecution[]>([]);

  const handleUserChange = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    if (user) {
      setCurrentUser(user);
    }
  };

  const handleScriptSubmit = (scriptId: string, inputs: Record<string, string>) => {
    if (currentUser.permissions.includes('run_scripts')) {
      const newExecution: ScriptExecution = {
        id: Date.now().toString(),
        scriptId,
        status: 'about to run',
        startTime: new Date(),
      };
      setExecutions((prev) => [...prev, newExecution]);

      // Simulate script execution
      setTimeout(() => {
        setExecutions((prev) =>
          prev.map((exe) =>
            exe.id === newExecution.id
              ? { ...exe, status: 'running' }
              : exe
          )
        );

        setTimeout(() => {
          setExecutions((prev) =>
            prev.map((exe) =>
              exe.id === newExecution.id
                ? {
                    ...exe,
                    status: 'completed',
                    result: 'Script executed successfully',
                    endTime: new Date(),
                  }
                : exe
            )
          );
        }, 3000);
      }, 1000);
    } else {
      alert('You do not have permission to run scripts.');
    }
  };

  const handleDownload = (execution: ScriptExecution) => {
    // Simulate file download
    const content = `Script ID: ${execution.scriptId}\nStatus: ${execution.status}\nResult: ${execution.result}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `script_execution_${execution.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#536493]">
      <Header currentUser={currentUser} onUserChange={handleUserChange} />
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ScriptList scripts={scripts} onSelectScript={setSelectedScript} />
            {selectedScript && (
              <ScriptForm script={selectedScript} onSubmit={handleScriptSubmit} />
            )}
          </div>
          <div>
            <ScriptDashboard executions={executions} onDownload={handleDownload} />
            <UserPermissions user={currentUser} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;