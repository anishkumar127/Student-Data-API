import express from 'express';
const app = express();
import { APP_PORT } from './config';
import routes from './routes';
import { connectionDB } from './models';
//database 
connectionDB();

// middleware
app.use(express.json());
app.use('/api', routes);
// app.use(routes);

app.listen(APP_PORT, () => console.log(`server listen at PORT ${APP_PORT}.`));