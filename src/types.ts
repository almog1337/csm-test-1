export interface Script {
  id: string;
  name: string;
  description: string;
  inputs: ScriptInput[];
}

export interface ScriptInput {
  name: string;
  type: 'text' | 'number' | 'date';
  required: boolean;
  validation?: RegExp;
}

export interface ScriptExecution {
  id: string;
  scriptId: string;
  status: 'about to run' | 'running' | 'completed' | 'failed';
  result?: string;
  startTime: Date;
  endTime?: Date;
}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'user';
  permissions: string[];
}