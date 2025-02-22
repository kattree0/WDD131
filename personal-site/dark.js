document.querySelector("#lighting").addEventListener("click", function() {

    if (localStorage.getItem("dark") === "true") {
        localStorage.setItem("dark", "false");
        document.querySelector("body").classList.remove("darkb");
        document.querySelector("main").classList.remove("darkm");}
     else {
        localStorage.setItem("dark", "true");
        document.querySelector("body").classList.add("darkb");
        document.querySelector("main").classList.add("darkm");}
});

function lightingSet() {
    if (localStorage.getItem("dark") === "true") {
        document.querySelector("body").classList.add("darkb");
        document.querySelector("main").classList.add("darkm");} 
        else {
        document.querySelector("body").classList.remove("darkb");
        document.querySelector("main").classList.remove("darkm");}
}

lightingSet();
