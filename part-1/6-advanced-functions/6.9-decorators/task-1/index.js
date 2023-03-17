function spy(func) {
	function wrapper(...args) {
		return func.apply(this, args)
	}

	wrapper.calls = []

	return wrapper
}
