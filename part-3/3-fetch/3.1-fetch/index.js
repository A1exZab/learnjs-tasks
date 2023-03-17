async function getUsers(names) {
	let users = []

	for (let name of names) {
		const user = fetch(`https://api.github.com/users/${name}`).then(
			(successResponse) => {
				if (successResponse.status != 200) {
					return null
				} else {
					return successResponse.json()
				}
			},

			(failResponse) => null
		)

		users.push(user)
	}

	let result = await Promise.all(users)

	return result
}

console.dir(getUsers(['mojombo', '', 'ivey']))
