var uglify = require('uglify-js')

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getText"){
            var code = uglify.minify(document.all[0].innerText, {fromString: true}).code
            sendResponse({data: code, method: "getText"}); //same as innerText
        }
    }
);
