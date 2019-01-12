const express = require('express'); 
const tf = require('@tensorflow/tfjs');
const PORT = 5000;
const app = express();

app.listen(PORT, () => {
    console.log("Server started on 5000")
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/views/index.html`)
})

app.get('/scripts/client.js', (req, res) => {
    res.sendFile(`${__dirname}/public/scripts/client.js`)
})

app.get('/data/model.json', (req, res) => {
    res.sendFile(`${__dirname}/public/data/model.json`)
})
app.get('/data/group1-shard1of10', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard1of10`)
})

app.get('/data/group1-shard2of10', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard1of10`)
})

app.get('/data/group1-shard3of10', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard1of10`)
})

app.get('/data/group1-shard4of10', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard1of10`)
})

app.get('/data/group1-shard5of10', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard5of10`)
})
app.get('/data/group1-shard6of10', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard6of10`)
})
app.get('/data/group1-shard7of10', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard7of10`)
})
app.get('/data/group1-shard8of10', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard8of10`)
})
app.get('/data/group1-shard9of10', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard9of10`)
})
app.get('/data/group1-shard9of10', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard9of10`)
})
app.get('/data/group1-shard10of10', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard9of10`)
})