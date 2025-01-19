const newP = document.createElement("p");
newP.textContent = "Hallo World";
document.body.append(newP);
// https://picsum.photos/200 for the image path.

const newImg = document.createElement("div");
newImg.innerHTML = "<img src= https://picsum.photos/200 alt=placeholder></img>";
document.body.append(newImg);
//you can also do
const newImg2 = document.createElement("img");
newImg2.src = "https://picsum.photos/250";
newImg2.alt = "placeholder";
document.body.append(newImg2);

const title = "dom baisics";
const subtitle = "wow!";
const content = "new content";

const newSect = document.createElement("section");
newSect.innerHTML = "<h2>${title}</h2> <p>This was added through javascript :D</p>"
document.body.append(newSect);
//also
newSect.innerHTML = `<h2>DOM Basics</h2> 
<p>This was added through javascript :D</p>`;

const ingredData = ["Pinto Beans","Corn","Spices","Tortillas"];
const portionData = ["1 15oz Can", "1 15oz Can", "1 Tbsp", "8"];

const recipeSect = document.createElement("section");
/*
recipeSect.innerHTML = `<h2>Scrumptious Mexican Recipe :P</h2>
<h3>Ingredients</h3>
<ul>
  <li>${portionData[0]} of ${ingredData[0]}</li>
  <li>${portionData[1]} of  ${ingredData[1]}</li>
  <li>${portionData[2]} of ${ingredData[2]}</li>
  <li>${portionData[3]} ${ingredData[3]}</li>

</ul>`;
*/


//functions
function ingredTemplate(index){
  return `  <li>${portionData[i]} ${ingredData[i]}</li> `;

}
//loop (for each)

//ingredData.forEach(function(item,index){})
ingredData.forEach(function(item,index){
    recipeSect.innerHTML += ingredTemplate(index); //this line is wrong
});



document.body.append(recipeSect);


//class
newSect.classList.add("dark");

