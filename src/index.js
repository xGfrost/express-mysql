require('dotenv').config()

const PORT = process.env.PORT || 5000;

const express = require('express');


const usersRoutes = require('./routes/users');

const middlewareLogRequest = require('./middleware/logs');

const upload = require('./middleware/multer');



const app = express();

app.use(middlewareLogRequest); 
app.use(express.json());
app.use('/assets', express.static('./public/images'))

app.use((req, res, next)=> {
    console.log('middleware ke dua')
    next();
});

app.use('/users', usersRoutes);
app.post('/upload',upload.single('photo'),(req, res) => {
    res.json({
        message: 'Upload Berhasil'
    })
})


app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

// app.get("/", (req, res) => {
//     res.send('Hello Get Method');
// });

// app.post("/", (req, res) => {
//     res.json({
//         nama: "Prawito",
//         email: "prawitohudoro@gmail.com"
//     });
// });

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`)
})