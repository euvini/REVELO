import 'reflect-metadata'
import express from 'express';
import "./database";
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(8283, () => console.log("server is running"!));

