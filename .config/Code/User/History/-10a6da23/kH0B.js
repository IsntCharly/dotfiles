let btn = document.getElementById("setSome");
let p = document.createElement("p");
p.innerText = "Hello";
let container = document.querySelector(".container");
btn.addEventListener('click', () => {
    container.appendChild(p);
});
