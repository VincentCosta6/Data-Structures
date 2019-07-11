class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        const value = this.get(key);

        delete this.map.key;
        
        return value;
    }

    removeByValue(value) {
        const arr = this.getSet();

        for(let i of arr) {
            if(value === this.map[i]) {
                const obj = { [i]: value };

                delete this.map.i;

                return obj;
            }
        }
    }

    getSet() {
        return Object.keys(this.map);
    }
}

module.exports = HashMap;