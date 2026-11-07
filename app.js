import express from 'express';
import log from './middlewares/logger.js';
import messagesRoutes from './routes/api/V1/messages.js';
import usersRoutes from './routes/api/V1/users.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// connect to MongoDB
mongoose.connect(process.env.MONGODB)

.then(()=> {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const app = express();

app.use(log);
app.use(express.json());
app.use('/api/v1/messages', messagesRoutes);
app.use('/api/v1/users', usersRoutes);


export default app;
