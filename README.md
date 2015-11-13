# tweetcost
## My first foray into API calling, Meteor and javascript frameworks with a MongoDB lite backend

Tweetcost keeps a running total of any tweets I've made with #paid and a number, then it totals it. The tweet can be any length, but the only rule is that the value following "#paid" must be a plain number. It can be either an integer (3) or a double (4.27).

The app runs a twitter api query every 2 minutes (don't want to exceed my badwidth) to pull every new tweet since the last time the API was called. Once the backend obtains this large chunk of JSON from twitter, the app then parses the JSON (which contains 0-many tweets) looking for any tweets with the keyword of "#paid".

Upon discovering the "#paid" keyword in a tweet, the app stores the tweet as a new database entry (incase I need to reference history) as well as a running total.

The total is then reflected on the front end using the flapper project, which is refreshed every minute.

###In conjunction with Meteor, this project uses a few libraries, of which are listed below:

https://github.com/ttezel/twit
https://github.com/jayKayEss/Flapper
