## Nodejs mongoose connection
this program allow us to consume a mongoDB to set and get some parameters in the form.
this application is still under development 

### instructions:
1. clone the repo in your local environment
2. create an mlab account and set a document for your information
3. set the connection details in the .env file:
```bash
CONNECTION_URL=mongodb://yourUser:yourPassword@xxx666.mlab.com:19406/yourDatabase
```

I'll including changes to have all in a container even the database 
and be independent of mlab,

read here to have some advises:
https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md

Happy Coding ;)