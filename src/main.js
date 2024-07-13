const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const os = require('os');
const postgres = require('pg');



//init app 
const port = process.env.port || 4000 ;
const app = express();
// connect to postgres sql 
// const pool = new postgres.Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'mydb',
//     password: 'password',
//     port: 5432
//     });
// const DB_User = 'root';
// const DB_Password = 'example';
// const DB_Port = 5432 ;
// const DB_Host = "postgres";

// const connectionString = `postgresql://${DB_User}:${DB_Password}@${DB_Host}:${DB_Port}`;

// const pool = new Pool({
//     URI : connectionString,
// })
// pool
// .connect()
// .then(() => console.log('connect to DB ... '))
// .catch((err) => console.log('failed to connect to db',err));

// mongoose.connect('mongodb://username:password@host:port/database?options...');

// connect to redis
const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';

const client = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}` // Replace with your Redis server URL if different
});

client.on('connect', () => {
    console.log('Connected to Redis');
});

client.on('error', err => { 
    console.log('Redis Client Error', err)
});

client.connect();


// // connect to mongodb
const DB_User = 'root';
const DB_Password = 'example';
const DB_Port = 27017 ;
const DB_Host = "mongo"

// const DB_Host = "172.26.0.2"
const URI = `mongodb://${DB_User}:${DB_Password}@${DB_Host}:${DB_Port}`;

mongoose
.connect(URI)
.then(() => console.log('connect to DB ... '))
.catch((err) => console.log('failed to connect to db',err));

// mongoose.connect('mongodb://username:password@host:port/database?options...');
app.get('/', (req, res) => {
    client.set('products','products...');
    console.log(`traffic from ${os.hostname}`)
    res.send('<h1> Hello Boska ! watchtower</h1>');
});

app.get('/data',async (req, res) => {
    const products = await client.get('products');
    res.send(`<h1> Hello World !</h1><h2>${products}<h2>`);
});

app.listen(port, () => console.log(`app is up and run in port : ${port}`));
