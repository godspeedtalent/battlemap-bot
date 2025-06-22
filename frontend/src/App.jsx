import React from 'react';
import ChatFeed from './components/ChatFeed.jsx';
import CommandInput from './components/CommandInput.jsx';
import MapGrid from './components/MapGrid.jsx';

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1">
        <ChatFeed />
        <CommandInput />
      </div>
      <div className="w-1/2 bg-gray-700">
        <MapGrid />
      </div>
    </div>
  );
}

export default App;
