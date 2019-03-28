var todolist = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0){
        console.log("Your todo list is empty!")
    }else{
        console.log("My Todos: ");
        for(var i = 0; i < this.todos.length; i++){
           // console.log(this.todos[i].todoText);

            if(this.todos[i].completed === true){
              console.log("(X)",this.todos[i].todoText);
            }else{
              console.log("( )",this.todos[i].todoText);
            }
        }
    }
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
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
      this.displayTodos();
  }//end function
  
};

var handlers = {
  displayTodos: function(){
    todolist.displayTodos();
  },

  toggleAll: function(){
    todolist.toggleAll();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todolist.addTodo(addTodoTextInput.value);
    addTodoTextInput.value ="";
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todolist.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    
    //clear the inputs fields
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todolist.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  }

};
