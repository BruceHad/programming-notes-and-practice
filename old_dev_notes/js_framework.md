Angular seems to be a popular choice for a javascript framework.

http://www.angularjs.org/

Made by Google.

Seems simple enought to implement.

Single file required (rest are optional).

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>

Then you can start using it.

    <html ng-app>

The ng-app is a directive stating the Angular (ng) is active in this portion of the page. In this case it's active in the entire HTML document. No you can add other directives to the html.

    <input type="text" ng-model="yourName" placeholder="Enter a name here">
    <hr>
    <h1>Hello {{yourName}}!</h1>

ng-model links the form and the model. MVC remember. The double braces {{ }} is a way of specifying data binding locations within the HTML. Angular will automatically update the contents if they change.

**Data Binding** can auto update the view whenever the model changes, or vice-versa. i.e. it automates DOM manipulation.

**Controllers** are the behaviour behind the DOM elements. Angular lets you express that behaviour without all the usual boilerplate associated with ajax.

Controller is defined in an attached javascript file, and are written in plain JS.

    <script src="todo.js"></script>

index.html

<html ng-app>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
        <script src="todo.js"></script>
    </head>
    <body>
        <h2>Todo</h2>
        <div ng-controller="TodoCtrl">
            <span>{{remaining()}} of {{todos.length}} remaining</span>
            [ <a href="" ng-click="archive()">Archive</a> ]

            <ul>
                <li ng-repeat="todo in todos">
                    <input type="checkbox" ng-model="todo.done">
                    <span class="done-{{todo.done}}">{{todo.text}}</span>
                </li>
            </ul>

            <form ng-submit="addTodo()">
                <input type="text" ng-model="todoText" size="30"
                    placeholder = "add new todo here">
                <input class="btn-primary" type="submit" value="add">
            </form>
        </div>
    </body>
</html>

**ng-controller="TodoCtrl"** - the behaviour under this element will be handled by the named controller.

todo.js:

    function TodoCtrl($scope){
        $scope.todos = [
            {text: 'learn angular', done:true},
            {text: 'build an angular app', done:false}];
        
        $scope.addTodo = function(){
            $scope.todos.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        };
    
        $scope.remaining = function(){
            var count = 0;
            angular.forEach($scope.todos, function(todo){
                count += todo.done ? 0 : 1;
            });
            return count;
        };
    
        $scope.archive = function(){
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo){
                if (!todo.done) $scope.todos.push(todo);
            });
        };
    }
    
**TodoCtrl** is the code behind the view. 

**$scope** contains the model data. $scope is just one of the services that can be injected into the controller.

**$scope.todos** is a plain old javascript object. You can add your model to the scope and it will be reflected in the view.

**$scope.addTodo** is a function that is added to the $scope so that it can be invoked by the model.

