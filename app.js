const express = require('express');
const app = express();

app.use("./dist", express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));


app.listen(3000,"127.0.0.1", function(){
  console.log("Listening on port 3000!")

});

app.get('/', function(req, res){
  res.sendFile('dist/index.html' , { root : __dirname});

}); 
app.get('/file', (req, res) => {
  res.sendFile('dist/site/js/app.js' , { root : __dirname});
});

app.get('/style', (req, res) => {
  res.sendFile('dist/site/css/app.css' , { root : __dirname});
});

app.get('/img', (req, res) => {
  res.sendFile('images/demo.png' , { root : __dirname});
});