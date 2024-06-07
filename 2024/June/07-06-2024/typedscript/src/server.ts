// let printNumber = (start: number, end: number): void => {
//     let temp:string = '';
//     for(let i: number = start; i <= end; i++) {
//         temp += i;
//     }
//     console.log(temp);
// };
// printNumber(1,3);

// lesson 2

import http, {Server ,IncomingMessage, ServerResponse} from 'http';

const hostname:string = '127.0.0.1';
const port:number = 3000;

const server:Server = http.createServer((req:IncomingMessage, res:ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World this is the new update');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
