'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
	append(value) {
		const node = new Node(value);
		if (!this.head) {
			this.head = node;
			return;
		}

		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = node;
	}

	values() {
		let values = [];
		let current = this.head;
		while (current) {
			values.push(current.value);
			current = current.next;
		}
		return values;
	}
}

class HashTable {
	constructor(size) {
		this.size = size;
		this.map = new Array(size);
	}

	hash(key) {
		let sum = 0;
		for (let i = 0; i < key.length; i++) {
			sum += key.charCodeAt(i);
		}
		return (sum * 599) % this.size;
	}

	add(key, value) {
		let index = this.hash(key);
		let bucket = this.map[index];
		let payload = {
			[key]: value
		};

		if (bucket) {
			bucket.append(payload);
		} else {
			let list = new LinkedList();
			list.append(payload);
			this.map[index] = list;
		}
	}

	// should return a Boolean whether or not a key is there
	contains() {

	}

	// takes in a key and returns null if nothing found, or value
	find() {

	}

	findRepeatedWord(str) {
		const strArr = str.split(' ');
		const arr = [];
		for (let i = 0; i < arr.length; i++) {
			if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
				arr.push(strArr[i]);
			}
		}
		return arr.join(' ');
	}
}

let map = new HashTable(1024);
console.log(map.hash('Stefanie'));
console.log(map.findRepeatedWord('It was the best of times, it was the worst of times'));

map.add('Stefanie', 'student');
console.log(map.map[761]);



module.exports = { Node, LinkedList, HashTable };
