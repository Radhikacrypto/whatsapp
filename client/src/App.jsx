import Messenger from "./components/Messenger"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientId } from "./constants/data";
import AccountProvider from "./context/AccountProvider";


function App() {

  const clientId='796654048612-vfhvh8887qrdfm1dkums1r4shsba800t.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>

      <AccountProvider>
      <Messenger/>
      </AccountProvider>
      
    </GoogleOAuthProvider>
  )
}

export default App
