import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Calculator from './components/Calculator.jsx';
import { ThemeProvider, createTheme } from '@mui/material';

const App = () => {

  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;