import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import memoryRouter from './routers/memoryRouter.js';

dotenv.config();

const app = express();

app.use(express.json({ limit: '20mb' }));

app.use('/memories', memoryRouter)

mongoose.set("strictQuery", false);
app.listen(process.env.PORT, () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to db'))
    .catch((err) => console.log(err));
})



 