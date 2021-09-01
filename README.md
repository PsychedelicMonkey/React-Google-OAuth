# React-Google-OAuth

Boilerplate MERN Stack application with passport.js user authentication.

Passport is configured to simultaneously use Local and Google authentication strategies.

## NOTE
Google authentication is only set up to work for production builds. The React client must be compiled into static assets using ```npm run build```.

## Commands

#### Run the app in production mode
```
npm run start
```

#### Run the app in debug mode
```
npm run dev
```

## Required environment variables
- SECRET={secret key for express-session}
- MONGO_URI={MongoDB uri}
- GOOGLE_CLIENT_ID={Your Google client ID}
- GOOGLE_CLIENT_SECRET={Your Google client secret}
