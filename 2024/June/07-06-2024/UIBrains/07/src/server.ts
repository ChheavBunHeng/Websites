// import http from "http";
// import os from "os";
// const hostname: string = "127.0.0.1";
// const port: number = 3000;
// const server = http.createServer((req, res) => {
//     if (req.url === '/') 
//     {
//         const dataOS:{Name:string ,OS:string} ={
//             Name: os.hostname(),
//             OS: os.platform()
//         }
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end(JSON.stringify(dataOS));
//     } 
//     else 
//     {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('404 - Not Found');
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
