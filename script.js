const button = document.getElementById("theme-button");

button.addEventListener("click", ()=> {

    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");
});

window.onload = () =>{
    const theme = localStorage.getItem("theme")

    if(theme == "light"){
        document.body.classList.add("light")
    }
}