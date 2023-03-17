let messages = [
	{ text: 'Hello', from: 'John' },
	{ text: 'How goes?', from: 'John' },
	{ text: 'See you soon', from: 'Alice' }
]

let readMessages = new WeakSet()

// Когда сообщение будет удалено из messages, оно также удалится из readMessages
