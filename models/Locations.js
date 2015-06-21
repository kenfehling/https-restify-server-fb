import _ from 'lodash';

let instance = null;

// TODO: Memory-backed locations store.
// TODO: Could this be swapped out with a database implementation?
// TODO: On the client this would be fine to represent the model,
// TODO: but with 100,000 users on the server it wouldn't be.

// TODO: On the other hand, this could be populated with data from the database
// TODO: when a particular request asking for this object is being serviced.
export default class Locations {
    constructor() {
        this.all = [];
    }

    add(location : Location) {
        this.all.push(location);
    }

    getById(id : String) {
        return _.find(this.all, (location) => {
            console.log(location.id, id);
            return location.id === id;
        });
    }

    static get instance() {
        if(!this[instance]) {
            this[instance] = new Locations();
        }
        return this[instance];
    }
}