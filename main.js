const submit_btn = document.getElementById('btn2');
const copy_btn = document.getElementById('btn1');
const pass = document.getElementById('Pass');

const genPass = (iteration) => {
	const char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*"
	let password = ""

	for (let i = 1; i <= iteration; i++) {
		const index = Math.floor(Math.random() * char.length)
		password += char[index]
	}
	return password
}

submit_btn.addEventListener("click", (event) => {
	event.preventDefault()
	const length = Number(document.querySelector(".number").value);
	pass.innerHTML = genPass(length)

})