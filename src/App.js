import {ThemeProvider} from '@mui/material';
import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import React from 'react';
import './App.css';
import HeaderComponent from './app/components/header/HeaderComponent';
import Quiz from './app/views/Quiz';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HeaderComponent />
            <Quiz />
        </ThemeProvider>
    );
}

export default App;
