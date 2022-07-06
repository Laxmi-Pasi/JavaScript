console.log("-----events & events objects----")

// document.getElementById('heading').addEventListener('click', function (e) {
//   console.log("clicked the heading");
//   variable = e.target; // attribute
//   variable = Array.from(e.target.classList);
//   variable = e.offsetX;
//   console.log(variable);
// });

// let btn = document.getElementById("btn");
// btn.addEventListener('click',function(e){
//   console.log("thanks",e);
//   e.preventDefault();
// });

// btn.addEventListener('dblclick',func2);

// function func2(e){
//   console.log("double click");
//   e.preventDefault();
// }

// document.getElementById('no').addEventListener('mouseenter',function(e){
//   console.log("mouse enter");
// });


// document.getElementById('no').addEventListener('mouseleave',function(e){
//   console.log("mouse exit");
// })

// document.querySelector('#no').addEventListener('mousemove',function(e){
//   console.log(" mouse leave");
// })

// document.querySelector('.container').addEventListener('mousemove',function(e){
//   document.body.style.backgroundColor = `rgb(${e.offsetX }, ${e.offsetY},${e.clientX}) `;
//   console.log('you triggered mouse move event');
// })

// to make editable div
let cont2 = document.querySelector(".container2");
let divElement = document.createElement('div');

//to store value in localstorage so we can use it 
let elemText = localStorage.getItem('elemText');
let text;

if (elemText == null) {
  text = document.createTextNode(" click here to edit");

} else {
  text = document.createTextNode(elemText);
}

divElement.appendChild(text);
divElement.setAttribute('id', 'cont2');
divElement.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');
let cont = document.querySelector(".container");
cont2.appendChild(divElement);

elem = document.getElementById('cont2');


//to add textarea inside div for input
elem.addEventListener('click', function () {
  let html = elem.innerHTML;
  let noTextAreas = document.getElementsByClassName('textarea').length;
  if (noTextAreas == 0) {
    elem.innerHTML = `
    <textarea class="textarea" id="textarea" cols="10" rows="5">${html}</textarea>`;
  }

  //listen for the blur event on textarea
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem('elemText',textarea.value);
  })
})

//to clear local storage inspect->application->localstorage
