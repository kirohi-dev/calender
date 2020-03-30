import * as functions from 'firebase-functions';

import { cors } from '@/middleware/cors';

import { routers } from '@/router';

const express = require('express');

const app = express();

routers.forEach((routerObj) => {
  app.use(cors);
  app.use(routerObj.path, routerObj.router);
});

export const api = functions.https.onRequest(app);
