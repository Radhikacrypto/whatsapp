import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRoutes from './routes/AuthRoutes.js'

// Load environment variables from a .env file
dotenv.config();

const app = express();


// Middleware
app.use(cors());  // Enable CORS for all requests
app.use(express.json());  // Parse JSON request bodies

app.use("/api/auth", AuthRoutes)


// Start server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);  // Use backticks for string interpolation
});

// Error handling
server.on('error', (err) => {
    console.error(`Server error: ${err}`);
});
