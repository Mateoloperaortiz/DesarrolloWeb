import express from 'express';
import type { Application } from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import Routes from './routes/Routes.js';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, '..');

class Index {
  static startServer(): void {
    const app: Application = express();
    const port = process.env.PORT || 3000;

    app.set('view engine', 'ejs');
    app.set('views', path.join(projectRoot, 'src/views'));
    app.use(express.static(path.join(projectRoot, 'src/public')));

    app.use(expressLayouts);
    app.set('layout', 'layouts/app');

    app.use(Routes.initializeRoutes());

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }
}

Index.startServer();
