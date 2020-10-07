require('dotenv').config();
const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const massive = require('massive');
const session = require('express-session');

const { DB_STRING, SESSION_SECRET } = process.env;

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massive({
    connectionString: DB_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
        app.set('db', db);
        console.log('DB connected')
    })
    .catch(err => console.log(err));

app.use(express.json());

// auth endpoints
app.post('/auth/register', async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get('db');

    const foundUser = await db.check_email(email)

    if (foundUser[0]) {
        return res.status(400).send('Email taken');
    }

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await db.add_user(email, hash);
    delete newUser[0].hash;

    req.session.user = {
        ...newUser[0]
    }

    res.status(200).send(req.session.user);
})

app.post('/auth/login', (req, res) => {
    const { email, password } = req.body;
})

app.post('/auth/logout', (req, res) => {

})

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => console.log(`Server running on an empty tank on ${SERVER_PORT}`))