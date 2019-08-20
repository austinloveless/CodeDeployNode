const port = process.env.PORT || 80;
const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
    res.send('success');
});

app.get('/test', (req, res) => {
    res.send('testing application');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});