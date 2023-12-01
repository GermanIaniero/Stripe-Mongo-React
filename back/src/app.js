import express from 'express';
import cors from 'cors';
import paymentRouter from './routes/payments.router.js'

const app = express();
app.use ('/api/payments', paymentRouter)
app.use(cors())
app.listen(8080,() => console.log('listening on'))