const cloudinary = require('cloudinary');
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require('multer');

cloudinary.config({
 cloud_name: process.env.CLOUDINARY_NAME,
 api_key: process.env.CLOUDINARY_KEY,
 api_secret: process.env.CLOUDINARY_SECRET
});

var storage = cloudinaryStorage({
 cloudinary,
 folder: 'ChordList/Music', // The name of the folder in cloudinary
 allowedFormats: ['mp3'],
 filename: function (req, file, cb) {
   cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
 },
 resource_type:'video'
});

// const uploadCloud = multer({ storage: storage }).single(‘file’);
const uploadCloud = multer({ storage: storage })
module.exports = uploadCloud;