var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    articleOne: {
    title: "Article One|Bishal Sharma",
    heading: "Article One",
    date: "November 30th, 2016",
    content:`
    <h4>
        This is my first article.
    </h4>
    
    <p>
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
 </p>
    <p>
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
 </p>
 <p>
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
    I want to see how my first article runs.
 </p>`
},
    articleTwo:{
     title: "Article Two|Bishal Sharma",
    heading: "Article ",
    date: "November 30th, 2016",
    content:`
    <h4>
        This is my first article.
    </h4>
     <p>
    I want to see how my first article runs.
    </p>`
},
};
    


function createTemplate(data){
        var title=data.title;
        var heading=data.heading;
        var date=data.heading;
        var content=data.content;
        
        
       var htmlTemplate=`
        <html>
            <head>
                <title>
                ${title};
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                 <div class="container">     
                <div>
                <a href="/">HOME</a>
                </div>
                <h2>
                ${heading};
                </h2>
                <div>
                    ${date};
                </div> 
                ${content};
         </div>
            </body>
            
        </html>

`;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});
 
 app.get('/article-two', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
 
 app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
 
 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
