const button = document.querySelector('button')

button.addEventListener('click', () => alert('1')) // *

button.removeEventListener('click', () => alert('1')) // **

button.onclick = () => alert(2) // ***

// В случае * и ** в качестве коллбэка переданы разные функции, хоть и идентичные по содержанию, поэтому alert('1') отработает

// *** работает независимо от *, поэтому alert(2) также отработает
