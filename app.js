
const multer = require("multer");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const File = require("./model/fileSchema");


const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.set("view engine", "ejs");
app.set('view engine', 'html');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));


    
const upload = multer({ dest: "public/files" });

app.post("/api/uploadFile", upload.array("myFile"), (req, res) => {

     console.log(req.file);
  });



app.use("/", (req, res) => {
    res.status(200).render("index.ejs");
  });

module.exports = app;