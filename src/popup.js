var path = require('path'),
    $ = require('jquery');

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var tab = tabs[0];
    var name = path.basename(tab.url, '.js')
    chrome.tabs.sendRequest(tab.id, {method: "getText"}, function(response) {
        if(response.method=="getText"){
            var code = 'javascript:(function(){' + encodeURIComponent(response.data) +  '}())';
            $('#bookmarklet').attr('href', code)
            $('#bookmarklet').text(name)
        }
    });
});
