const fs = require('fs');
const express = require('express')
const app  = express()
const deepai = require('deepai');
const multer = require('multer'); 
const path = require('path');

deepai.setApiKey('02c1f25c-55f9-48e4-9588-167cf548475a');

 let id = 100
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, id + path.extname(file.originalname))
    }
})

app.post('/color', upload.single('image'), async (req, res) => {
    var resp = await deepai.callStandardApi("colorizer", {
                image: fs.createReadStream("./images/100.jpg"),
    });
    setTimeout(async function () {
        res.send(resp.output_url);
        (fs.unlinkSync('/Users/sania/desktop/deepai/images/100.jpg'))
    }, 3)
})

app.post('/toonify', upload.single('image'), async (req, res) => {
    var resp = await deepai.callStandardApi("toonify", {
            image: fs.createReadStream("./images/100.jpg"),
    });
    setTimeout(async function () {
        res.send(resp.output_url);
        (fs.unlinkSync('/Users/sania/desktop/deepai/images/100.jpg'))
    }, 3)
})


app.listen(2500, () => {
    console.log('server is up')
})