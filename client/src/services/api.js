import axios from 'axios'

const url ='';

const addUser= async(data)=>{
   try {

    await axios.post(url, data);
    
   } catch (error) {
    console.log(error);
   }
}