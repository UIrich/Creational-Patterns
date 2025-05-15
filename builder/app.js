const HttpRequestBuilder = require('./httpRequestBuilder');

const request = new HttpRequestBuilder()
    .setMethod('POST')
    .setURL('/api/users')
    .setHeader('Content-Type', 'applcation/json')
    .setBody( { name: 'João', email: 'joao@gmail.com' })
    .build();

console.log(request);