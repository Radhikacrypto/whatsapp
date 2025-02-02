import React from 'react'
import { Dialog, Box, styled } from '@mui/material'
import Menu from './menu/Menu';
import Header from './menu/Header';
import EmptyChat from './chat/EmptyChat';


const dialogStyle = {
  height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
  
}


const LeftComponent=styled(Box)`
    min-width: 450px;

`;

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;
const ChatDialog = () => {
  return (
  <Dialog
  open = {true}
  BackdropProps={{style: {BackgroundColor:'unset'}}}
  PaperProps={{sx: dialogStyle}}
  mazWidth={'md'}
  >
    <Box style={{display:'flex'}}>
                <LeftComponent>
                  <Menu/>
                </LeftComponent>
                <RightComponent>
                    <EmptyChat/>
                </RightComponent>
    </Box>

  </Dialog>

  )
}

export default ChatDialog