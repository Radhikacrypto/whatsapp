import express from 'express'
import dotenv from 'dotenv'
import Connection from './database/db.js';

dotenv.config();

const username=process.env.USERNAME;
const password=process.env.PASSWORD;
const PORT=process.env.PORT||8000;
Connection(username,password)


const app = express();



app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));