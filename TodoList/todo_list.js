var todolist = {
  todos: [],

  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    
  },
  toggleAll: function(){
      var totalTodos = this.todos.length;
      var completedTodos = 0;
      //Get number of completed todos
      for (var i = 0; i < totalTodos; i++)
      {
          if(this.todos[i].completed === true)
          {
             completedTodos++;
          }//end if

      }//end for

      if(completedTodos === totalTodos)
      {
          for (var i = 0; i < totalTodos; i++)
          {
              this.todos[i].completed = false;

          }//end for

      }else{
          for (var i = 0; i < totalTodos; i++)
          {
              this.todos[i].completed = true;

          }//end for
      }
      
  }//end function
  
};

var handlers = {

  toggleAll: function(){
    todolist.toggleAll();
    view.displayTodos();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todolist.addTodo(addTodoTextInput.value);
    addTodoTextInput.value ="";
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todolist.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    
    //clear the inputs fields
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
    
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todolist.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
    view.displayTodos();
  },
  toggleCompleted: function(){
  var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
  todolist.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);

  toggleCompletedPositionInput.value = "";
  view.displayTodos();

}

};

var view = {
displayTodos: function() {
  var todosUl = document.querySelector("ul");
  todosUl.innerHTML = "";
  for(var i = 0; i < todolist.todos.length; i++){
    var todoLi = document.createElement("li");
    var todo = todolist.todos[i];
    var todoTextWithCompletion ="";

    if(todo.completed === true){
      todoTextWithCompletion = "(X) " + todo.todoText;
    }else{
      todoTextWithCompletion = "( ) " + todo.todoText;

    }//end if

    todoLi.textContent = todoTextWithCompletion;

    todosUl.appendChild(todoLi);

  }//end for
}
};
