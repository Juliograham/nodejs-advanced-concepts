const https = require('https');

const start = Date.now();

function doRequest () {
    
https.request('https://www.google.com', (res) => {
    res.on('data', () => {
        //console.log(Date.now() - start);
    });
    res.on('end', () => {
        console.log(Date.now() - start);
    });
})
.end();

};

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();