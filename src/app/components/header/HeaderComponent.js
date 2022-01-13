import {AppBar, Container, Toolbar, Typography} from '@mui/material';
import React from 'react';

// Header of the app
const HeaderComponent = () => (
    <AppBar position='static' color='primary'>
        <Container maxWidth='xl'>
            <Toolbar disableGutters>
                <Typography
                    variant='h4'
                    noWrap
                    component='div'
                    sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}>
                    QUIZ
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
);

export default HeaderComponent;
