const button = document.querySelector("#button");


button.addEventListener("click",buttonPress);

const linkss = document.querySelector(".hide");

 
function buttonPress(){
    if (    linkss.style.display === 'inline'){
        linkss.style.display= 'none';

    }
    else{
        linkss.style.display= 'inline';

    }
}

function handleSize(){
  const size = window.innerWidth;
  const element = document.querySelector(".hide");
  if (size >= 1000){
    linkss.style.display= 'inline';
    element.classList.remove('hide');

  }
}
handleSize();




function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target

  const clickedElement = event.target;

   let splitSrc;
	// get the src attribute from that element and 'split' it on the "-"
  if (clickedElement.tagName === 'IMG') { 
    const src = clickedElement.src; 
    splitSrc = src.split('-');}

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
  const newimg = `${splitSrc[0]}-full.jpeg`
  const vierwerTemplate = viewerTemplate(newimg,"alt text");

	// insert the viewerTemplate into the top of the body element
	document.querySelector("#last").insertAdjacentHTML("afterend", vierwerTemplate);

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
  document.querySelector(".close-viewer").addEventListener('click',function(){ 
    document.querySelector(".viewer").remove();
  })

}
document.addEventListener('click',viewHandler);