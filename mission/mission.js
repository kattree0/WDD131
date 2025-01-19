


const themeSelector = document.querySelector(".theme");
function changeTheme() {

// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
    if ( themeSelector.value === "dark" ){
        document.body.classList.add("dark");
        document.querySelector("img").src= "byui-logo_white.png"
        document.querySelector("img").alt="BYUI Logo- white";
    }
    else{
        document.body.classList.remove("dark");
        document.querySelector("img").src= "logo.webp"
        document.querySelector("img").alt="BYUI Logo- blue";

    }
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);