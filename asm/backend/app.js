import express from 'express'

import morgan from 'morgan'

import dotenv from 'dotenv';
import productRouter from'./routes/product.js'

const app = express();

dotenv.config();
app.use(morgan('dev'));

const port = process.env.PORT || 8000
app.use('/api',productRouter);


app.listen(port, () => {
    console.log("connect ok ")
})