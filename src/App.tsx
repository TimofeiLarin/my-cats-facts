import React from 'react';

import { Header, AppRouter } from './components';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
