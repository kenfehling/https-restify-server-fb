require('source-map-support').install();
const expect = require('chai').expect;
import Locations from '../../models/Locations';

describe('Locations', function () {
    it('should pass', function () {
        new Locations();
        expect(true).to.be.true;
    });
});