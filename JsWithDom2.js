//-----------creating, removing, replacing elements-------------------
console.log("Js with dom 2");

// let element1 = document.createElement('li');
// element1.className = "childul abc";
// element1.className = "abc";
// element1.id = "createdL1";
// element1.setAttribute('title', 'mytitle');
// element1.innerHTML = "<b> new created element1</b>"
// let ul = document.querySelector('ul.ul1');
// ul.appendChild(element1);

// let element2 = document.createElement('div');
// let text = document.createTextNode(" new text node");
// element2.appendChild(text);
// element2.className = "no";
// element2.classList.add("abc");
// element2.id = "id1";
// element2.classList.remove("abc");
// let cont2 = document.querySelector("div.container2");
// cont2.appendChild(element2);

//----------------replace-------------------

let element3 = document.createElement("h6");
let tnode =document.createTextNode("Replace div element with h1");
element3.appendChild(tnode);

// let div_with_class_no = document.querySelector('.container2');
// div_with_class_no.replaceWith(element3);

// let myul = document.getElementById("ul1");
// myul.replaceChild(element3, document.getElementById("li1"));
// myul.removeChild(document.getElementById('li2'));
