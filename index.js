import express from 'express';
import appRouter from './routes/index.js';
import { config } from 'dotenv';
import {connectionToDatabase} from './db/index.js'

config();

const app = express();

app.use(express.json());

app.use("/api/v1/products",appRouter)



const PORT = process.env.PORT || 5000;
connectionToDatabase().then(()=>{

    app.listen(PORT,()=>{
        console.log('server open at port : ', PORT);
    })

}).catch((err)=>{

    console.log('db connection  error')
    process.exit(0);
})


