const express = require("express");
const { auth } = require('express-oauth2-jwt-bearer');
const errHandler = require("./middleware/errorHandler");
const bookHandlerRouter = require("./router/bookHandler");

const app = express();
const port = 3000;


const jwtCheck = auth({
    audience: 'https://nose',
    issuerBaseURL: 'https://dev-je3a1gvesx7lffy0.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

app.use(errHandler);
app.use(express.static("public"));
app.use("/books", jwtCheck ,bookHandlerRouter);






  
// enforce on all endpoints
app.use(jwtCheck);

app.get("/", jwtCheck, (req, res) =>{
    res.send("Server is running as instructed");
});
  
app.get('/authorized', jwtCheck, function (req, res) {
    res.send('Secured Resource');
});



app.listen(3000, "127.0.0.1" , ()=>{
    console.log("Server is running");
})

