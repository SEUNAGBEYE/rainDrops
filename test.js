
import rainDrops from './rainDrops'
import { assert } from 'chai';

describe('rainDrops', () => {
	describe('Do not contain prime factors between 3, 5, and 7', () => {
		it('It Should return the same number passed in for number without factors of 3, 5, 7', () => {
			assert.equal(rainDrops(1777), 1777);
		});
	});

	describe('Invalid Input', () => {
		it('It Should return "Not a whole number" ', () => {
			assert.equal(rainDrops(1755.22), "Not a whole number");
		});
	});

	describe('Invalid Input', () => {
		it('It Should return "Number must be greater than 0" for 0', () => {
			assert.equal(rainDrops(0), "Number must be greater than 0");
		});
	});

	describe('Invalid Input', () => {
		it('It Should return "Number must be greater than 1" for 1', () => {
			assert.equal(rainDrops(1), "Number must be greater than 1");
		});
	});

	describe('Invalid Input', () => {
		it('It Should return "Number must ber greater than 0" for -1175', () => {
			assert.equal(rainDrops(-1175), "Number must be greater than 0");
		});
	});
	describe('Invalid Input', () => {
		it('It Should return "Not a number" for non numeric values', () => {
			assert.equal(rainDrops([1, 2, 3]), "Not a number");
		});
	});

	describe('Invalid Input', () => {
		it('It Should return "Not a number" for non numeric values', () => {
			assert.equal(rainDrops({1: 'one', 2: 'two', 'three': 3}), "Not a number");
		});
	});

	describe('Invalid Input', () => {
		it('It Should return "Not a number" for non numeric values', () => {
			assert.equal(rainDrops('1777abcs'), "Not a number");
		});
	});

	describe('Valid Input', () => {
		it('It Should return "Plong" for 28', () => {
			assert.equal(rainDrops(28), "Plong");
		});
	});

	describe('Valid Input', () => {
		it('It Should return "PlingPlang" for 1755', () => {
			assert.equal(rainDrops(1755), "PlingPlang");
		});
	});

	describe('Valid Input', () => {
		it('It Should return "Plang" for 25', () => {
			assert.equal(rainDrops(25), "Plang");
		});
	});

});

