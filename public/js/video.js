var head = document.getElementsByTagName("head")[0]
Ajax.get("http://127.0.0.1:3000/html/footer.html").then(result => {
  
        var footer = document.getElementById("footer");
        footer.innerHTML = result;
        head.innerHTML += '<link rel="stylesheet" href="../css/footer.css">'
        
    })
    Ajax.get("http://127.0.0.1:3000/html/header.html").then(result => {
        var header = document.getElementById("header");
        var jsDemo = document.getElementById("jsDemo");
        header.innerHTML = result;
        head.innerHTML += '<link rel="stylesheet" href="../css/header.css">';
        var script=document.createElement("script");
        script.setAttribute("src","../js/header.js")
        //document.body.append('<script scr="../js/header.js"></script>')
        //jsDemo.innerHTML+=
        document.body.appendChild(script)
    })