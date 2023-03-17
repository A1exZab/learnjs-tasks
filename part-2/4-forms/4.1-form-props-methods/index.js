const selected = genres.options[genres.selectedIndex]
console.log(selected.text)
console.log(selected.value)

const newOption = new Option('Классика', 'classic', true, true)

genres.append(newOption)
