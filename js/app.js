function NeverNote($scope) {
  $scope.notes = [];

  $scope.addNote = function() {
    $scope.notes.unshift({
      title: "New Note",
      content: "",
      complete: false,
      date: moment().format("MM/DD/YYYY HH:mm"),
      tags: "",
      newNote: true,
      state: 'edit'
    });
  };

  $scope.edit = function(item) {
    item.oldTitle = item.title;
    item.state = 'edit';
  };

  $scope.save = function(item) {
    item.state = 'save';
  };

  $scope.cancel = function(item) {
    item.title = item.oldTitle;
    item.state = 'cancel';
  };

  $scope.remove = function(item,idx) {
    $scope.notes.splice(idx, 1);
    item.state = 'remove';
  };

  $scope.itemClass = function(item) {
    return item.state;
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}
