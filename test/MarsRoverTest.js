const assert = require ('chai').assert;
const Rover = require('../app/Rover.js');

describe('initialize Rover', function () {

    it('init Rover in a concrete position return position', function () {
        const rover = new Rover([2,4]);
        const result = rover.position;
        assert.deepEqual(result,[2,4]);

    })
    it ( 'in a south orientation return S', function() {
        const rover = new Rover ([0,0],'s');
        const result = rover.orientation;
        assert.equal (result,'s');
    })
    it('if no init position return position 0,0', function () {

        const rover = new Rover();
        const result = rover.position;
        assert.deepEqual(result,[0,0])

    })

})
describe ( 'moving Rover ', function () {

    it('if position is 0,0 and orientation north and move forward position = 0,1', function () {
        const rover = new Rover([0,0],'n');
        const command = ['f'];
        rover.move(command);
        const result = rover.position;
        assert.deepEqual(result,[0,1])
    });

    it('if position is 4,4 and orientation S and move 2 forward new position = 4,2', function () {
        const rover = new Rover([4,4],'s');
        const command = ['f', 'f'];
        rover.move(command);
        const result = rover.position;
        assert.deepEqual(result,[4,2])
    });
    it('if position is 0,0 and orientation e and move 1 forward new position = 1,0', function () {
        const rover = new Rover([0,0],'e');
        const command = ['f'];
        rover.move(command);
        const result = rover.position;
        assert.deepEqual(result,[1,0])
    });
    it('if position is 2,0 and orientation w and move 1 forward new position = 1,0', function () {
        const rover = new Rover([2,0],'w');
        const command = ['f'];
        rover.move(command);
        const result = rover.position;
        assert.deepEqual(result,[1,0])
    });
    it('if position is 0,0 and orientation n and move 1 back new position = 0,-1', function () {
        const rover = new Rover([0,0],'n');
        const command = ['b'];
        rover.move(command);
        const result = rover.position;
        assert.deepEqual(result,[0,-1])
    });
    it('if position is 0,0 and orientation s and move 1 back new position = 0,1', function () {
        const rover = new Rover([0,0],'s');
        const command = ['b'];
        rover.move(command);
        const result = rover.position;
        assert.deepEqual(result,[0,1])
    });
    it('if position is 0,0 and orientation e and move 2 back new position = -2,0', function () {
        const rover = new Rover([0,0],'e');
        const command = ['b','b'];
        rover.move(command);
        const result = rover.position;
        assert.deepEqual(result,[-2,0])
    });
    it('if position is 0,0 and orientation w and move 2 back new position = 2,0', function () {
        const rover = new Rover([0,0],'w');
        const command = ['b','b'];
        rover.move(command);
        const result = rover.position;
        assert.deepEqual(result,[2,0])
    });

})
describe ('rotation rover ',function () {

    it ('if orientation is n and rotate right new orientation is e', function () {
        const rover = new Rover([0,0],'n');
        const command = ['r'];
        rover.move(command);
        const result = rover.orientation;
        assert.deepEqual(result,'e')
    })
    it ('if orientation is e and rotate right new orientation is s', function () {
        const rover = new Rover([0,0],'e');
        const command = ['r'];
        rover.move(command);
        const result = rover.orientation;
        assert.deepEqual(result,'s')

    })
    it ('if orientation is s and rotate right new orientation is w', function () {
        const rover = new Rover([0,0],'s');
        const command = ['r'];
        rover.move(command);
        const result = rover.orientation;
        assert.deepEqual(result,'w')
    })
    it ('if orientation is w and rotate right new orientation is n', function () {
        const rover = new Rover([0,0],'w');
        const command = ['r'];
        rover.move(command);
        const result = rover.orientation;
        assert.deepEqual(result,'n')
    })

})
