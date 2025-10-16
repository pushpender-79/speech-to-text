// // server/index.js
// import express from 'express';
// import cors from 'cors';
// import multer from 'multer';
// import path from 'path';
// import dotenv from 'dotenv';

// dotenv.config();

// import connectDB from './db.js';

// // Connect to MongoDB
// connectDB();


// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// // Test route
// app.get('/', (req, res) => {
//   res.send('Backend is running 🚀');
// });

// // File upload route
// app.post('/upload', upload.single('audio'), (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }
//     res.status(200).json({
//       message: 'File uploaded successfully',
//       file: req.file,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// server/index.js
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

import connectDB from './db.js';
import Audio from './models/Audio.js';

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// File upload route
app.post('/upload', upload.single('audio'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Create a new Audio document
    const newAudio = new Audio({
      filename: req.file.filename,   // store the uploaded file name
      transcription: '',             // empty for now, will fill after Speech-to-Text
    });

    // Save the record to MongoDB
    await newAudio.save();

    // Send response
    res.status(200).json({
      message: 'File uploaded successfully',
      file: req.file,       // info about uploaded file
      dbRecord: newAudio,   // record saved in MongoDB
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
