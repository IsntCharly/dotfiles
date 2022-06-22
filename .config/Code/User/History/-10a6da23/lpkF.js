let btn = document.getElementById("setSome");
let deleteBtn = document.getElementById("delete");
let container = document.querySelector(".container");
let container_items = [];
btn.addEventListener("click", () => {
    let index = 0;
    container_items[index] = () => {
        let p = document.createElement("p");
        p.classList.add("indexElement");
        p.textContent = index;
        container.appendChild(p);
    }
    index++;
});