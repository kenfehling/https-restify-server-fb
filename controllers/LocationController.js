import Location from '../models/Location';
import locationUpdatedSignal from '../signals/LocationUpdatedSignal'

const locationUpdatedSignal = LocationUpdatedSignal.instance;

function createCallback(location:Location, callback:Function) {
    return (result) => {
        if (result.success) {
            locationUpdatedSignal.dispatch(location);
        }
        else if (result.error) {
            console.error(result.error);
        }
        callback(result);
    }
}

export function setLocationId(location:Location, id:String, callback:Function) {
    location.setId(id, createCallback(location, callback));
}

export function setLocationName(location:Location, name:String, callback:Function) {
    location.setName(name, createCallback(location, callback));
}

export function setLocationHasFavorite(location:Location, hasFavorite:Boolean, callback:Functionn) {
    location.setHasFavorite(hasFavorite, createCallback(location, callback));
}