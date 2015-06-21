import _ from 'lodash';
import { Singleton } from '../utils/model';

let instance = null;

// TODO: Memory-based store on the client (Singleton)
// TODO: Temporarily populated on request on the server (not Singleton)
@Singleton
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