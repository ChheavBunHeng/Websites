
import http, {Server ,IncomingMessage, ServerResponse} from 'http';
import os, { homedir, platform } from "os";
import { cpuUsage } from 'process';
const hostname:string = '127.0.0.1';
const port:number = 3000;


const server:Server = http.createServer((req:IncomingMessage, res:ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    let osDATA = {
        platform : platform(),
        totalMemory : os.totalmem(),
        homedir : os.homedir(),
        computerName :os.hostname(),
        cpuUsage : os.machine(),
        cpuCores : os.cpus().length
    };

    res.end(JSON.stringify(osDATA));
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
