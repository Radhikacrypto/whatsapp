import React, { useContext } from 'react';
import LoginDialog from './accounts/LoginDialog';
import { AppBar, Box, Toolbar } from '@mui/material';
import ChatDialog from '../chat/ChatDialog';
import { AccountContext } from '../context/AccountProvider';


const Messenger = () => {

  const {account} = useContext(AccountContext)
  return (
    
      <Box style={{backgroundColor:'#DCDCDC' , height:'100vh'}}>
        {
          account?
          <>
          <AppBar style={{ backgroundColor: '#00A884', height: '200px', boxShadow: 'none' }}>
          <Toolbar>
           
          </Toolbar>
        </AppBar>
          <ChatDialog/>
          
          </>:
         <>
         <AppBar style={{ backgroundColor: '#00A884', height: '200px', boxShadow: 'none' }}>
         <Toolbar>
          
         </Toolbar>
       </AppBar>
       <LoginDialog/>
         </>
        }
     
      </Box>
      
    
  );
};

export default Messenger;
