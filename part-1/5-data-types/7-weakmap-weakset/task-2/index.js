let messages = [
	{ text: 'Hello', from: 'John' },
	{ text: 'How goes?', from: 'John' },
	{ text: 'See you soon', from: 'Alice' }
]

const readMessages = new WeakMap()

readMessages.set(messages[0], new Date())
readMessages.set(messages[1], new Date())

console.log(readMessages)
