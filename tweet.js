var express= require("express");
var app= express();
var bodyParser=require('body-parser')
app.use(express.static(__dirname + '/public'));
var Twitter = require('twitter');
var mongojs = require('mongojs');
var db = mongojs("tweetSchema",["tweetdb"])
 
var client = new Twitter({
  consumer_key: 'WpNqAenT5anVHQRoIVyg3PCcy',
  consumer_secret: 'd24hLlvGdHWRTwKTRLyJGXHy6UojyyxZesqIRf7E3XmAWps9a0',
  access_token_key: '2997059396-FqrK3MTkjKXsYSA69XuJJ4SqhOTZO4uXMbl9APq',
  access_token_secret: '42n4i0Pn8q2Tv5BHMBvexlDDMFzTytnwncTRYIARsENbV'
});
 
app.get("/tweet", function (req, res) { 
params = {q: 'obama', count:5};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
  	console.log(tweets.statuses.length);
  	for(i=0;i<tweets.statuses.length;i++){
	db.tweetdb.insert({text :tweets.statuses[i].text});
  		//console.log(tweets.statuses[i].entities.hashtags);
  		console.log(tweets.statuses[i].text);
  		//console.log(tweets.statuses[i].favorites_count);
  			
  	}
  //	res.json({text :tweets.statuses[0].text});
  	res.json(tweets);
  	/*db.tweetdb.find(function(err,doc){
  		res.json({text :"doc",count:"4"});
  	});*/
  }else{
  		console.log(error);
    
  }
});
}); 

app.listen(3000);
