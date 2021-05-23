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

  
