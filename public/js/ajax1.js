var Ajax = {
    get: function Ajax(url) {
        return new Promise(function (open) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var result = xhr.responseText;
                    open(result)
                }
            }
            xhr.open('get', url, true);
            xhr.send();
        })
    }
}