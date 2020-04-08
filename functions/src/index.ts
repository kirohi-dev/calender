import * as functions from 'firebase-functions';
import { Response } from 'express';

import { cors } from '@/middleware/cors';

import { routers } from '@/router';
import { errorHandling } from '@/domain/Error.service';

const express = require('express');

const app = express();

app.use(cors);

routers.forEach((routerObj) => {
  app.use(routerObj.path, routerObj.router);
});

app.use((err: Error, res: Response) => {
  errorHandling(err, res);
});

export const api = functions.https.onRequest(app);
