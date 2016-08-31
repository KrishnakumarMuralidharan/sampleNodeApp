# sampleNodeApp
Sample application for beginners to understand nodejs with mongodb

<b>Prerequisite:</b>    
Kindly install these two softwares in your system  
1. nodejs  
2. mongodb  

<b>Steps to run the app:</b>    
1. Clone the project  
2. Run npm install  
3. Run the mongo server with http://127.0.0.1 and port number 27071      
4. Use mongodb --dbpath \<mongodb installed path>  
5. Create a database 'tryout'   
6. Then create three tables namely 'basicInfo', 'profInfo', 'otherInfo'    
7. Fill up the tables with necessary values by going through the routes/myRoutes.js file  
8. Each tables must have 'id' as unique value so that nodejs can check and return the proper response back from mongodb  
  
<b>Note:</b>    
This project is a very basic one tested in vagrant (virtual machine) with linux operating system. This will help you understand the concepts of routing, DB connection used in nodejs. Also helps you understand the basic commands used in mongodb.
