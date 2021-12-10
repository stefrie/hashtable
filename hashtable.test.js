'use strict';

const { Node, LinkedList, HashTable } = require('./hashtable.js');

////// ----- TESTING THE TESTS -----//////
test('Node is a class', () => {
	expect(typeof Node.prototype.constructor).toEqual('function');
});

test('LinkedList is a class', () => {
	expect(typeof LinkedList.prototype.constructor).toEqual('function');
});

test('HashTable is a class', () => {
	expect(typeof HashTable.prototype.constructor).toEqual('function');
});

////// ----- PROVING FUNCTIONALITY -----//////
test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
	const h = new HashTable();
	const k = h.hash('Stefanie');
	// const k = h.add(5);
	console.log(h);
	expect(h.hash.includes(k)).toBeTruthy();
});

xtest('Retrieving based on a key returns the value stored', () => {

});

xtest('Successfully returns null for a key that does not exist in the hashtable', () => {

});

xtest('Successfully handle a collision within the hashtable', () => {

});

xtest('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

});

xtest('Successfully hash a key to an in-range value', () => {

});
