import Messenger from "./components/Messenger"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientId } from "./constants/data";


function App() {

  const clientId='796654048612-vfhvh8887qrdfm1dkums1r4shsba800t.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>

      <Messenger/>


    </GoogleOAuthProvider>
  )
}

export default App
