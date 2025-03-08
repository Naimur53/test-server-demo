 
import express from 'express'; 
import cors from 'cors'; 
import router from './src/app/route/route.js';
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing JSON bodies
app.use(express.json());

app.use('/api/v1', router);
// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express server!' });
});

// Start server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});