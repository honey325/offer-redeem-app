import express, { Application } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { generateDocs } from './utils/GenerateDocs';
import { PrismaClient } from '@prisma/client';
import { router } from './routes/index';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app: Application = express();
config();
app.use(cookieParser());

export const prisma = new PrismaClient({ log: ['query'] });

const port = process.env.PORT || 8000;

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

generateDocs(app);
