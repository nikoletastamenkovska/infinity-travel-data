// const jsonServer = require('json-server')
// const cors = require('cors')
// const path = require('path')

// const server = jsonServer.create()
// const router = jsonServer.router(path.join('db.json'))
// const middlewares = jsonServer.defaults()

// server.use(cors({
//     origin: 'http://localhost:3000',
// }));
// server.use(jsonServer.bodyParser)
// server.use(middlewares)
// server.use(router)

// const PORT = 8000

// server.listen(PORT, () => {
//     console.log(`JSON Server is running on http://localhost:${PORT}`)
// })

const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join('db.json'));
const middlewares = jsonServer.defaults();

const allowedOrigins = ['http://localhost:3000'];

server.use(
    cors({
        origin: function (origin, callback) {
            if (origin === 'http://localhost:3000') {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
    })
);


server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
