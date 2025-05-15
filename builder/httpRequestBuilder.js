class HttpRequest {
    constructor() {
        this.method = 'GET';
        this.url = '';
        this.headers = {};
        this.body = null;
    }
}

class HttpRequestBuilder {
    constructor() {
        this.request = new HttpRequest();
    }

    setMethod(method) {
        this.request.method = method;
        return this;
    }

    setURL(url) {
        this.request.url = url;
        return this;
    }
    
    setHeader(key, value) {
        this.request.headers[key] = value;
        return this;
    }

    setBody(body) {
        this.request.body = body;
        return this;
    }

    build() {
        return this.request;
    }
}

module.exports = HttpRequestBuilder;

