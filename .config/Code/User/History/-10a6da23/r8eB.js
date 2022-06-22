let btn = document.getElementById("setSome");
let deleteBtn = document.getElementById("delete");
let container = document.querySelector(".container");
let container_items = [];
btn.addEventListener("click", () => {
    let index = 0;
    let p = document.createElement("p");
    p.classList.add("indexElement");
    p.textContent = index;
    container_items.push(p);
    container.appendChild(container_items[index]);
    index++;
    deleteBtn.addEventListener("click", () =>{
        container_items[index];
        index--;
    });
});
