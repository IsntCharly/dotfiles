let btn = document.getElementById("setSome");
let deleteBtn = document.getElementById("delete");
let container = document.querySelector(".container");

btn.addEventListener("click", () => {
    let p = document.createElement("p");
    let count = 0;
    p.setAttribute("class",'parrafo'+ count);
    container.appendChild()
    ++count;
    deleteBtn.addEventListener("click", () => {
        if (p.className == "parrafo"+ count){
            container.removeChild(p);
        }else{
            console.log("nothing happened");
        }
    });
});


