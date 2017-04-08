const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');

            // if(res !== 44) {
            //     throw new Error(`Expected 44, but got ${res}`);
            // }
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        })
    });
    
    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(3);

            expect(res).toBe(9).toBeA('number');

            // if(res !== 9) {
            //     throw new Error(`Expected 9, but got ${res}`);
            // } 
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(5, (res) => {
                expect(res).toBe(25).toBeA('number');
                done();
            });
        });
    });
    
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(12);
//     // expect({name: 'dennis'}).toNotEqual({name: 'Dennis'});
//     // expect([2,3,4]).toExclude(2);
//     expect({
//         name: 'Dennis',
//         age: 17, 
//         location: 'Elst'
//     }).toExclude({
//         age: 17
//     });
// })

it('should verify first and last names are set', () => {
    var user = {
        age: 17,
        location: 'Elst'
    };
    var res = utils.setName(user, 'Dennis Gabeler');

    expect(res).toInclude({
        firstName: 'Dennis',
        lastName: 'Gabeler'
    });
});