# sampleNodeApp
Sample application for beginners to understand nodejs with mongodb

Prerequisite:  
Kindly install these two softwares in your system  
1. nodejs  
2. mongodb  

Steps to run the app:  
1. Clone the project  
2. Run npm install  
3. Run the mongo server with 127.0.0.1 and port number 27071  
4. Use mongodb --dbpath <mongodb installed path>  
4. Create a database 'tryout'   
5. Then create three tables namely 'basicInfo', 'profInfo', 'otherInfo'  
6. Fill up the tables with necessary values by going through the routes/myRoutes.js file  
7. Each tables must have 'id' as unique value so that nodejs can check and return the proper response back from mongodb  
  
Note:  
This project is a very basic one tested in vagrant (virtual machine) with linux operating system. This will help you understand the concepts of routing, DB connection used in nodejs. Also helps you understand the basic commands used in mongodb.
