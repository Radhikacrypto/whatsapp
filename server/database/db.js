
import mongoose from 'mongoose';

// new Client = mongoose.connect




const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@clone-whatsapp.44uuxs6.mongodb.net/?retryWrites=true&w=majority&appName=clone-whatsapp`
    try {
        
       await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;