document.body.onload = () => {
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
    Ajax.get("http://127.0.0.1:3000/index/slide").then(result => {
        result = JSON.parse(result);
        var showImg = document.getElementsByClassName("showImg")[0]
        var str = "";
        for (var elem of result) {
            str += `<li>
        <a :href="${elem.href}">
            <img src="${elem.img}">
            <div class="slideTitle">
                <img src="../img/login/shiping.png">
                <h1>${elem.vname}</h1>
                <p>${elem.brief}</p>
            </div>
        </a>
    </li>`
        };
        str += `<li>
    <a :href="${result[0].href}">
        <img src="${result[0].img}">
        <div class="slideTitle">
            <img src="../img/login/shiping.png">
            <h1>${elem.vname}</h1>
            <p>${elem.brief}</p>
        </div>
    </a>
</li>`
        showImg.innerHTML = str;
        //console.log(showImg)

    })
    Ajax.get("http://127.0.0.1:3000/index/new").then(result => {
        result = JSON.parse(result);
        result = result.result;
        var newVideo = document.querySelector("#newVideo .last ul");
        var str = "";
        for (let el of result) {
            str += `
            <li>
                <div>
                    <div class="qq">
                        <p>${el.title}</p>                               
                        <p>${el.brief}</p>
                    </div>
                    <div>
                        <img src="${el.img}">
                    </div>
                </div>
                <div>
            <p style="margin-bottom:5px;width:159px;height:25px;overflow: hidden;">${el.vname}</p>
            <p class="color-3a4a5a font-12">${el.actor}</p>
        </div>
    </li>
        `
        };
        newVideo.innerHTML = str;
    })
    Ajax.get("http://127.0.0.1:3000/index/film").then(result => {
        result = JSON.parse(result);
        result = result.result;
        var films = document.querySelector("#films .last ul");
        var str = "";
        for (let el of result) {
            str += `
            <li>
                <div>
                    <div class="qq">
                        <p>${el.title}</p>                               
                        <p>${el.brief}</p>
                    </div>
                    <div>
                        <img src="${el.img}">
                    </div>
                </div>
                <div>
            <p style="margin-bottom:5px;width:159px;height:25px;overflow: hidden;">${el.vname}</p>
            <p class="color-3a4a5a font-12">${el.actor}</p>
        </div>
    </li>
        `
        };
        films.innerHTML = str;
    })
    Ajax.get("http://127.0.0.1:3000/index/sitcom").then(result => {
        result = JSON.parse(result);
        result = result.result;
        var sitcom = document.querySelector("#sitcom .last ul");
        var str = "";
        for (let el of result) {
            str += `
            <li>
                <div>
                    <div class="qq">
                        <p>${el.title}</p>                               
                        <p>${el.brief}</p>
                    </div>
                    <div>
                        <img src="${el.img}">
                    </div>
                </div>
                <div>
            <p style="margin-bottom:5px;width:159px;height:25px;overflow: hidden;">${el.vname}</p>
            <p class="color-3a4a5a font-12">${el.actor}</p>
        </div>
    </li>
        `
        };
        sitcom.innerHTML = str;
    })
    Ajax.get("http://127.0.0.1:3000/index/variety").then(result => {
        result = JSON.parse(result);
        result = result.result;
        var variety = document.querySelector("#variety .last ul");
        var str = "";
        for (let el of result) {
            str += `
            <li>
                <div>
                    <div class="qq">
                        <p>${el.title}</p>                               
                        <p>${el.brief}</p>
                    </div>
                    <div>
                        <img src="${el.img}">
                    </div>
                </div>
                <div>
            <p style="width:159px;overflow: hidden;">${el.vname}</p>
            <p class="color-3a4a5a font-12">${el.actor}</p>
        </div>
    </li>
        `
        };
        variety.innerHTML = str;
    })
}