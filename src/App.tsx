import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GistDemo from './demo/GistDemo';
import CSSDashboard from './basic/CSSDashboard';

function App() {
  return (
    <>
      <CSSDashboard></CSSDashboard>
      <GistDemo></GistDemo>
    </>
  );
}

export default App;
