const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");


function inputLength() {
	const value = input.value;
	return value.length;
}

function createListElement() {
	const li = document.createElement("li");
	// const text = document.createElement("div");
	// li.setAttribute("class","text");
	const delet = document.createElement("button");
	delet.innerHTML = "Borrar";
	delet.setAttribute("class","btn")
	li.appendChild(document.createTextNode(input.value));
	// li.appendChild(text);
	li.appendChild(delet);
	ul.appendChild(li);
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

