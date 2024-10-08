// https://cloud.mongodb.com/v2/66e1821cc4cd8c0e0dcab30e#/metrics/replicaSet/66e182b630cc2925ff3b333b/explorer/test/users/find
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const cart=require('./routes/cartRoute')
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', auth);
app.use('/api/v1',cart);
app.use('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); 
    }
};

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
