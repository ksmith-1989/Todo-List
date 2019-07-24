// This code no longer applies

// var todos = ["Buy new Turtle"];

// window.setTimeout(function() {
//   var input = prompt("What would you like to do?");

//   while (input !== "quit") {
//     if (input === "list") {
//       listTodos();
//     } else if (input === "new") {
//       addTodo();
//     } else if (input === "delete") {
//       deleteTodo();
//     }
//     var input = prompt("What would you like to do?");
//   }
//   console.log("OK, YOU QUIT THE APP");
//   function listTodos() {
//     console.log("**********");
//     todos.forEach(function(todo, i) {
//       console.log(i + ": " + todo);
//     });
//     console.log("**********");
//   }
//   function addTodo() {
//     var newTodo = prompt("Enter new todo");
//     todos.push(newTodo);
//     console.log("Added Todo");
//   }
//   function deleteTodo() {
//     var index = prompt("Enter index of todo to delete");
//     todos.splice(index, 1);
//     console.log("Deleted Todo");
//   }
// }, 500);
alert("Just click the task when it is completed. EASY!");
let lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function() {
    this.classList.add("selected");
  });
  lis[i].addEventListener("mouseout", function() {
    this.classList.remove("selected");
  });
  lis[i].addEventListener("click", function() {
    this.classList.toggle("done");
  });
}
