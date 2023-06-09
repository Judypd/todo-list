const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const main = document.querySelector("main");


function inputLength() {
	const value = input.value;
	return value.length;
}

function createListElement() {
	const li = document.createElement("div");
	li.setAttribute("class","col");
	const delet = document.createElement("button");
	// delet.innerHTML = "Borrar";
	delet.setAttribute("class","btn")
	const i = document.createElement("i")
	i.setAttribute("class", "bi bi-trash-fill");
	li.appendChild(document.createTextNode(input.value));
	
	delet.appendChild(i);
	li.appendChild(delet);
	main.appendChild(li);
	input.value = "";
	
	li.addEventListener("click", ()=>{
		li.classList.toggle("done");
	});

	delet.addEventListener("click", ()=>{
		li.remove();		
	});

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

