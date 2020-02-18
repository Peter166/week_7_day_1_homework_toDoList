import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Do groceries", isDone: false},
        {name: "clean", isDone: false},
        {name: "Dont lie! CLEAN", isDone: false}
      ],
      newToDo: ""
    },
    methods: {
      saveNewItem: function(){
        this.todos.push({
          name: this.newToDo,
          isDone: false
        });
        this.newToDo = "";
      },
      finishTask: function(index){
        this.todos[index].isDone = true;
      }
    }
  });
});
