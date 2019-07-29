## Nodejs mongoose connection
this program allow us to consume a mongoDB to set and get some parameters in the form.
this application is still under development 

I'm using an [anAPIofIceAndFire](https://www.anapioficeandfire.com/api/characters) to fullfill all the information and save it later in a mongoDB also I store the data and a way to test your API using VSCode API Rest extention so take a look to that folder in order to understand the schema of the data that we are managing and use it when  you define your schema with mongoose.

### instructions:
* clone the repo in your local environment
* install the depedencies 
* create an mlab account and set a document for your information
* set the connection details in the .env file:
```bash
CONNECTION_URL=mongodb://yourUser:yourPassword@xxx666.mlab.com:19406/yourDatabase
```
### client side:
we are going to use react for the ui side, first we are going to need a proper package to create the project, the best is create-react-app:

* npx create-react-app client  (you do not need to run this step again)


I'll including changes to have all in a container even the database 
and be independent of mlab,

read here to have some advises:
https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md

Happy Coding ;)