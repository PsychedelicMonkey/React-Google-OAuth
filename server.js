const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

dotenv.config();
const app = express();

// Passport config
require('./config/passport')(passport);

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongoUrl: process.env.MONGO_URI }),
}));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected....'))
.catch(err => console.log(err));

// Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/auth/google', require('./routes/auth/google'));

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
