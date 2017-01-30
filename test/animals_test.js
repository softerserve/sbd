const assert = require('assert');
const classes = require('../src/animals');

classes.Animal.prototype.collection = [];
classes.Tiger.prototype.count = 0;
classes.Tiger.prototype.sound = 'ROAARRRRR!';
classes.Monkey.prototype.count = 0;
classes.Monkey.prototype.sound = 'EEEIIIIEEEIIII!';
classes.Snake.prototype.count = 0;
classes.Snake.prototype.sound = 'HIISSSSSSS!';

describe('test jungle animals', () => {
  it('tests creating mike the tiger, putting him to sleep twice and checking his energy', (done) => {
	var mikethetiger = new classes.Tiger('Mike');
	mikethetiger.sleep(); 
	mikethetiger.sleep();
	assert(mikethetiger.elevel === 10);
    done();
  });
  it('tests creating three monkeys and checking monkey count', (done) => {
	var laurenthemonkey = new classes.Monkey('Lauren');
	var beththemonkey = new classes.Monkey('Lauren');
	var laneythemonkey = new classes.Monkey('Laney');
	assert(classes.Monkey.prototype.count === 3);
    done();
  });
    it('tests creating a snake, feeding him three times and checking energy', (done) => {
	var billthesnake = new classes.Snake('Bill');
	billthesnake.eat('bugs');
	billthesnake.eat('grain');
	billthesnake.eat('fish');
	assert(billthesnake.elevel === 15);
    done();
  });
});