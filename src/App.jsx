import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { MediaProvider } from './contexts/MediaContext';
import {ThemeProvider} from './contexts/ThemeContext';
import Rotas from './Rotas';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <MediaProvider>
          <Rotas/>
        </MediaProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
