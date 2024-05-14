export default class {
	contructor() {
		this.queue = [];
	}

	enqueue(element) {
		return this.queue.push(element);
	}

	multiEnqueue(...elements) {
		for (let element of elements)
			this.queue.push(element)
		return this.queue;
	}

	dequeue() { 
		if(this.queue.length > 0)
			return this.queue.shift();
	}

	peek() {
		return this.queue[this.queue.length - 1];
	}

	size(){
		return this.queue.length;
	}

	isEmpty() {
		return this.queue.length == 0;
	}

	clear(){
		this.queue = [];
	}
}