const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer'); 

const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const path = require('path')


dotenv.config()
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, '/images')))

// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).then(console.log('Connect to mongoDb')) 
// .catch((err) => console.log(err));
mongoose.connect('mongodb://localhost:27017/my_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,

}).then(console.log('Connect to mongoDb')) 
  .catch((err) => console.log(err));

// app.use('/nghiahoang',(req, res) => {
//     console.log("Hey this is Nghia Hoang url");
// })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename:(req, file, cb) => {
    cb(null, req.body.name);
  }
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), 
  (req, res) => {
    res.status(200).json("file has been uploaded")
  }
)

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// console.log('hello nghia hoang win every ');
app.listen("5000", ()=> {
    console.log('Backend is running...');
});
