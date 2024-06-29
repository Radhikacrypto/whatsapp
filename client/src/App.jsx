import Messenger from "./components/Messenger"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientId } from "./constants/data";


function App() {

  const clientId=''
  return (
    <GoogleOAuthProvider clientId={clientId}>

      <Messenger/>


    </GoogleOAuthProvider>
  )
}

export default App
