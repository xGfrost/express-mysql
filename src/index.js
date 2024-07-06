const express = require('express');

const usersRoutes = require('./routes/users.js');

const app = express();

app.use((req, res, next) =>{
    console.log('log terjadi request ke API ini');
    next();
}) 

app.use((req, res, next)=> {
    console.log('middleware ke dua')
    next();
});

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    res.send('Hello Get Method');
});

app.post("/", (req, res) => {
    res.send('Hello POST Method');
});




app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000')
})