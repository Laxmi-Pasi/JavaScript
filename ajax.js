console.log("Ajax javascript");

let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
  const xhr = new XMLHttpRequest;

  //open the object
  // xhr.open('GET', 'https://snowden-backend-api.herokuapp.com/consumers', true) //here true means asynchronous

  //post request
  xhr.open('POST','https://dummy.restapiexample.com/api/v1/create', true);
  // xhr.getResponseHeader('Content-type', 'application/json');
  //what to do on progress optional
  xhr.onprogress = function () {
    console.log("on Progress");
  }

  //what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("some error occured.")
    }
  }

  // send the request
  // xhr.send();

  params = `{"name":"laxmi-pasi","salary":"123","age":"23"}`
  xhr.send(params);
  console.log("we are done");
}

let popbtn = document.getElementById("popbtn");
popbtn.addEventListener('click', popButtonHandler)

function popButtonHandler() {
  const xhr = new XMLHttpRequest;

  //open the object
  xhr.open('GET', 'https://snowden-backend-api.herokuapp.com/consumers', true) //here true means asynchronous

  //what to do on progress optional
  xhr.onprogress = function () {
    console.log("on Progress");
  }

  //what to do when response is ready
  xhr.onload = function () {
    let list = document.querySelector("#list");
    if (this.status === 200) {

      console.log(this.responseText);
      let responses = JSON.parse(this.responseText);
      // console.log(responses.consmers[0]["first_name"]);
      str = "";
      for(key in responses.consmers){
        console.log(responses.consmers[key]["first_name"])
        str+=`<li>${responses.consmers[key]["first_name"]}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("some error occured.")
    }
  }

  // send the request
  xhr.send();
 console.log("we are done");
}