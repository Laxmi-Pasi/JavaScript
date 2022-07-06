console.log("Fetch API");

let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener('click', postData);

// function getData() {
//   console.log("Started getData");
//   url = "ajax.txt";
//   fetch(url).then((response) => {
//     console.log("Inside fisrt then");
//     return response.text();
//   }).then((data) => {
//     console.log("Inside second then");
//     console.log(data);
//   })
// }

// function getData() {
//   console.log("Started getData");
//   url = "https://snowden-backend-api.herokuapp.com/consumers";
//   fetch(url).then((response) => {
//     console.log("Inside fisrt then");
//     return response.json();
//   }).then((data) => {
//     console.log("Inside second then");
//     console.log(data);
//   })
// }


// console.log("before running getData")
// getData()
// console.log("after running getData")

function postData() {
  console.log("Started postData");
  data = {"name":"atit-pasi","salary":"123","age":"23"} 
  params = {
    method: 'post',
    body:data  
  }
  url = "https://dummy.restapiexample.com/api/v1/create";
  fetch(url, params).then((response) =>response.json()).
  then(data => console.log(data));
}