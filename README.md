# [Introduction to the Basic Node and Express Challenges](https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/)


##NOTE

*dirname*  
__dirname === . (before "/")  
  
exemple : __dirname + "/views/index.html" === "./views/index.html"

*To serve a file*  

absolutePath = __dirname + relativePath/file.ext  
```const absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath);
```  

*Directory accessible by a user*  
1) Use the use methode  
2) Use express.static(PATH)  
exemple : ```app.use('/public', express.static(__dirname + "/public"))```  
  
*Create an API*  
1) Use get methode  
2) Select the path
3) Use json format with response  
4) Serve the JSON file  
exemple:  
```
app.get("/json", (req, res) => {
    const jsonObj = { "message": "Hello json" };
    res.json(jsonObj);
})
```   

*Use process.env to hid variable*  
1) require('dotenv').config();  
2) creat .env file in the root  
3) update the file with the variable inside without declaration, no space, no string type and the variable name will be uppercase exemple : VARIABLE_NAME=value  
4) use it with process.env.VARIABLE_NAME  
exemple:  
```  
    require('dotenv').config();
    app.get("/json", (req, res) => {
    let response = "Hello json"

    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = response.toUpperCase();
        console.log(response);
    }

    res.json({ "message": response });
})
```  

*MiddleWare*  
This is the function with ```(req, res, next)=>{next();}```;  
*Chaine middleware*
This is to separate the differents step's function  
exemple:  
```
app.get("/now", (req, res, next) => {
    let timeNow = new Date();
    timeNow = timeNow.toString();
    req.time = timeNow;
    next();
}, (req, res) => {
    const jsonTime = { "time": req.time };
    res.json(jsonTime);
})  
```  

*Route paramater: Get route input from client*  
This is the info that we had between slash inside the path 
We need to use the 2 dots ":NAME" => req.params.NAME  
```route_path: '/user/:userId/book/:bookId'``` 
exemple:  
```actual_request_URL: '/user/546/book/6754'```  

exemple 2:  
```
app.get("/:word/echo", (req, res) => {
    const ans = req.params.word;
    res.json({ "word": ans });
})
``` 
*Route parameter: Get Query Paramater from the client*  
Query paramter are used to get info from the client  
Query string is delimited by a question mark  
It include field=value paire  
Each couple is delimited by a ampersand(&)  
The methode used to get the info is the req.query  
Exemple:  
```  
app.get("/name", (req, res) => {
    const firstName = req.query.firstname;
    const lastName = req.query.lastname;
    res.json({ "name": firstName + " " + lastName });
})  
```  
URL=> **/name?firstname=anthony&lastname=VDO**  
