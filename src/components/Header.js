import React from 'react';
import  AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import  Button  from '@mui/material/Button';
import { Box } from '@mui/material';
import './styles/Header.css';

const Header = () => {
    return(
        <AppBar position="static" className="header">
            <Toolbar>
                <Typography variant='h6' className='logo'>
                    Jobet
                </Typography>
                <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
                    <Button href="#home" color="inherit" className="nav-button">
                        Home
                    </Button>
                    <Button href="#about" color="inherit" className="nav-button">
                        About
                    </Button>
                    <Button href="#projects" color="inherit" className="nav-button">
                        Projects
                    </Button>
                    <Button href="#contact" color="inherit" className="nav-button">
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;