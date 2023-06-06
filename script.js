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
	
	const il = document.querySelectorAll("li");
	listBehavior(il);
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

// comportamiento de la lista para marcar y borrar
function listBehavior (listItems){
	
	const list = listItems;
	console.log(list);
	
	list.forEach(todo =>{
		console.log(todo);
		const btnDelete = todo.querySelector(".btn");

		todo.addEventListener("click", (e)=>{
			console.log(e.target.className);
			e.target.classList.toggle("done");
		})

		btnDelete.addEventListener("click", ()=>{
			todo.classList.add("hide");		
		});
	});	


}

