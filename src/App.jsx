import React from 'react';
import Home from './Pages/Home';
import UserProvider from './contexts/component';

function App() {
  return (
    <UserProvider>
      <div>
        <Home />
      </div>
    </UserProvider>
  );
}

export default App;
