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

    // return (
    //     <div className='App'>
    //         {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //     </div>
    // );
}

export default App;
