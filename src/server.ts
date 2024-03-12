import { Server } from 'http';
import app from './app.js';










const port = process.env.PORT || 3000;
const base_url = process.env.BASE_URL || 'http://localhost';

let server:Server;


server = app.listen(port, () => {
    console.log(`Server listening on ${base_url}/${port}/api/v1`);
})