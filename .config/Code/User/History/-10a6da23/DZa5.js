let btn = document.getElementById("setSome");

let container = document.querySelector(".container");
btn.addEventListener('click', () => {
    let p = document.createElement("p");
    p.innerText = "Hello";
    container.appendChild(p);
});
