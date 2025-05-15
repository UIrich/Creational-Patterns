class AccessCounter {
    constructor() {
        if(AccessCounter.instance) 
            return AccessCounter.instance;

        this.count = 0;
        AccessCounter.instance = this;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    getCount() {
        return this.count;
    }
}

module.exports = new AccessCounter;