import React, { useState } from 'react';

function CommandInput() {
  const [command, setCommand] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle command submission
    setCommand('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 bg-gray-800">
      <input
        className="w-full p-2 rounded bg-gray-700 text-white"
        placeholder="Enter command..."
        value={command}
        onChange={(e) => setCommand(e.target.value)}
      />
    </form>
  );
}

export default CommandInput;
