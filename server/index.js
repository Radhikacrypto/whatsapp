import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables from a .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3500

// Middleware
app.use(cors());  // Enable CORS for all requests
app.use(express.json());  // Parse JSON request bodies

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!');  // Send a response to the client
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);  // Use backticks for string interpolation
});

// Error handling
server.on('error', (err) => {
    console.error(`Server error: ${err}`);
});
