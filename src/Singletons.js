import Locations from '../models/Locations';
import LocationUpdatedSignal from '../signals/LocationUpdatedSignal';

export const locations = new Locations();
export const locationUpdatedSignal = new LocationUpdatedSignal();