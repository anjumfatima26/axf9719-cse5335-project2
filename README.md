# axf9719-cse5335-project2
A Food Consumption dashboard application which uses Mongodb, Express JS, Angular JS and Node JS  with charts.js. Application allows user to click on dashboard which consists of home, tables and charts. On clicking tables user gets the food consumption data of all countries.Tables tab consists of 5 pages. Each page shows 20 records. On clicking Charts, user gets to see different statistics via charts.


![appimage](https://raw.githubusercontent.com/anjumfatima26/axf9719-cse5335-project2/master/public/images/app_image.png)

## Server side Framework
It uses Node JS and Express JS as server side framework. Express is the most common Node JS web application framework that deals with exploring various code  which we need on a frequent basis like POST body / query string parsing. Express JS basically helps you manage everything, from routes, to handling requests and views.

##Client side Framework
It uses Angular JS as client side framework. Angular JS has better data binding, DOM manipulation and it is light and very clean and involves simple manipulations.Good frameworks can help architect our code so that it is modular (therefore reusable), DRY, readable, performant and secure. 

##Other components installed
For running locally it requires a mongodb for running mongod command in background. It uses heroku mongolab db for storing the documents. Refer heroku mongolab documention to connect to the database and importing data from the csv or json file.

## Steps to run
This github code can be used to deploy on Heroku. It fetches data from a MongoLab database. Or it can be run on local machine with mongodb running and server running on port 8002.

Steps to run using git:  
Install the Heroku Toolbelt  

Download and install the Heroku Toolbelt or learn more about the Heroku Command Line Interface.  
If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.  
$ heroku login  

Clone the repository  
Use Git to clone cse5335-axf9719-2's source code to your local machine.  
$ heroku git:clone -a cse5335-axf9719-2  
$ cd cse5335-axf9719-2  

Deploy your changes  
Make some changes to the code you just cloned and deploy them to Heroku using Git.  
$ git add .  
$ git commit -am "make it better"  
$ git push heroku master  


Steps to run using github:  
On heroku dashboard select the project and click on deploy using github.Connect to github repository and manual deploy branch.  

Steps to run on local machine:  
Run mongod command from mongodb server bin folder installed.  
Run server.js -It will listen on port 8002.  
On browser go to http://localhost:8002  

 
