import React, { useState } from 'react';
import { Script, ScriptInput } from '../types';

interface ScriptFormProps {
  script: Script;
  onSubmit: (scriptId: string, inputs: Record<string, string>) => void;
}

const ScriptForm: React.FC<ScriptFormProps> = ({ script, onSubmit }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
    validateInput(name, value);
  };

  const validateInput = (name: string, value: string) => {
    const input = script.inputs.find((i) => i.name === name);
    if (input) {
      if (input.required && !value) {
        setErrors((prev) => ({ ...prev, [name]: 'This field is required' }));
      } else if (input.validation && !input.validation.test(value)) {
        setErrors((prev) => ({ ...prev, [name]: 'Invalid input' }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(errors).every((error) => !error)) {
      onSubmit(script.id, inputs);
    }
  };

  return (
    <div className="bg-[#F4F6FF] p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-[#536493]">{script.name}</h2>
      <form onSubmit={handleSubmit}>
        {script.inputs.map((input: ScriptInput) => (
          <div key={input.name} className="mb-4">
            <label className="block text-sm font-medium text-[#536493] mb-1">
              {input.name}
              {input.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={input.type}
              name={input.name}
              value={inputs[input.name] || ''}
              onChange={(e) => handleInputChange(input.name, e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[#7CF5FF]"
              required={input.required}
            />
            {errors[input.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[input.name]}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-[#536493] text-[#F4F6FF] px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
        >
          Run Script
        </button>
      </form>
    </div>
  );
};

export default ScriptForm;