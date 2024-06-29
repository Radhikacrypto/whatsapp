import React from 'react';
import LoginDialog from './accounts/LoginDialog';
import { AppBar, Box, Toolbar } from '@mui/material';


const Messenger = () => {
  return (
    
      <Box style={{backgroundColor:'#DCDCDC' , height:'100vh'}}>
      <AppBar style={{ backgroundColor: '#00A884', height: '200px', boxShadow: 'none' }}>
        <Toolbar>
         
        </Toolbar>
      </AppBar>
      <LoginDialog/>
      </Box>
      
    
  );
};

export default Messenger;
