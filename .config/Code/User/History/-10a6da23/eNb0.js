let btn = document.getElementById("setSome");
let deleteBtn = document.getElementById("delete");
let container = document.querySelector(".container");
btn.addEventListener('click', () => {
    let p = document.createElement("p");
    p.innerText = "Hello";
    container.appendChild(p);
    deleteBtn.addEventListener('click', () => {
        container.removeChild(p);
    });
});


