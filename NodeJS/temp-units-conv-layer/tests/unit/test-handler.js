'use strict';


const tuc = require('../../dependencies/nodejs/node_modules/temp-units-conv');


const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
//        const result = await app.lambdaHandler(event, context)

        let answerc2f = tuc["c2f"](40);
        expect(answerc2f).to.equal(109);

        let answerc2k = tuc["c2k"](40);
        expect(answerc2k).to.equal(313.15);
    });
});