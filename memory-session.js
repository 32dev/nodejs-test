const http = require("http");
const express = require('express');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const app = express();
const server = http.createServer(app);
const PORT = 8080;
app.use(
    session({
        secret: "secret key",
        resave: false,
        saveUninitialized: true,
        store: new MemoryStore({
            checkPeriod: 86400000, // 24 hours (= 24 * 60 * 60 * 1000 ms)
        }),
        cookie: { maxAge: 86400000 },
    })
);
app.get("/", (req, res) => {
    console.log(req.session);
    if (req.session.num === undefined) {
        req.session.num = 1;
    } else {
        req.session.num += 1;
    }

    res.send(`View: ${req.session.num}`);
});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
