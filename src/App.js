import React from 'react';
import Content from './components/Content';
import { AppProvider } from './context/AppProvider';
import './styles/global.css';

function App() {
  return (
    <AppProvider>
      <Content />
    </AppProvider>
  );
}

export default App;
