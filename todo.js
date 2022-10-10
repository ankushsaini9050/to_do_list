let arr = [];
let input;
let global;
let index;
function add() {
  let input = document.getElementById("data");
  let tasarr = arr;
  tasarr.push(input.value);
  if (input.value != 0) {
    updatelist();
  } else {
    alert("enter data");
    arr = [];
  }
  input.value = "";
}
function updatelist() {
  let ul = document.getElementById("tasks");
  let tasarr = arr;
  let length = tasarr.length - 1;
  let html = "";
  for (let i = length; i >= 0; i--) {
    html +=
      '<li class="list-group-item" id="' +
      i +
      '">' +
      tasarr[i] +
      `<span class="btn btn-danger btn-sm float-end mx-2" id="" onclick="remove( ${i})">Remove</span>` +
      `<span class="btn btn-success btn-sm float-end" onclick="edit(${i})">Edit</span></li>`;
  }
  ul.innerHTML = html;
}
function remove(tag) {
  let index = tag;
  let tasarr = arr;
  tasarr.splice(index, 1);
  arr = tasarr;
  updatelist();
}

function edit(num) {
  index = num;

  let inp = (document.getElementById("data").value = arr[num]);
  let edit_btn = document.getElementById("edit");
  let add_btn = document.getElementById("add");
  edit_btn.style.display = "block";
  add_btn.style.display = "none";
}

function Edit_data() {
  let input = document.getElementById("data");
  
  let inp = document.getElementById("data").value;

  console.log(inp);
  console.log("index", index);
  arr[index] = inp;
  updatelist();

  let edit_btn = document.getElementById("edit");
  let add_btn = document.getElementById("add");
  edit_btn.style.display = "none";
  add_btn.style.display = "block";
  input.value = "";
}
function dlt() {
  if (confirm("Are you wants to Delete All")) {
    arr = [];
    updatelist();
  } else {
  }
}
