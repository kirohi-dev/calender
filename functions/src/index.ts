import * as functions from 'firebase-functions';

import { cors } from '@/middleware/cors';

import { routers } from '@/router';

const express = require('express');

const app = express();

app.use(cors);

routers.forEach((routerObj) => {
  app.use(routerObj.path, routerObj.router);
});

export const api = functions.https.onRequest(app);
