# Javascript Callbacks
07/03/2014

Feature of asynchronous programming.

Regular functions: Functions are objects. Function objects that are created with the Function constructor. A function object contains a string, which is the javascript code for the function. (The distinction between code and data is blurred here).

    var my_func = new Function (){};

As a result of this is that you can pass code to other functions, similar to how you pass variables and objects as arguments.

    // define our function with the callback argument
    function some_function(arg1, arg2, callback) {
        // this generates a random number between
        // arg1 and arg2
        var my_number = Math.ceil(Math.random() *
            (arg1 - arg2) + arg2);
        // then we're done, so we'll call the callback and
        // pass our result
        callback(my_number);
    }
    // call the function
    some_function(5, 15, function(num) {
        // this anonymous function will run when the
        // callback is called
        console.log("callback called! " + num);
    });

Traditional functions take input in the form of an argument and return a result. Javascript gives an alternative option. Rather than wait for the function to finish and return a result, callbacks let us do things asynchronously. Not sure how!

    function some_function2(url, callback) {
        var httpRequest; // create our XMLHttpRequest object
        if (window.XMLHttpRequest) {
            httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            // Internet Explorer is stupid
            httpRequest = new
                ActiveXObject("Microsoft.XMLHTTP");
        }

        httpRequest.onreadystatechange = function() {
            // inline function to check the status
            // of our request
            // this is called on every state change
            if (httpRequest.readyState === 4 &&
                    httpRequest.status === 200) {
                callback.call(httpRequest.responseXML);
                // call the callback function
            }
        };
        httpRequest.open('GET', url);
        httpRequest.send();
    }
    // call the function
    some_function2("text.xml", function() {
        console.log(this);
    });
    console.log("this will run before the above callback");

In this example it creates a httpRequest for an xml file. There is no return function. It starts and calls the callback when it is finished. 

Note, the callback uses the call() function. It's not strictly necessary. call() is used when you want to control the scope that will be used in the function called.




[1]: http://recurial.com/programming/understanding-callback-functions-in-javascript/
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
[3]: http://stackoverflow.com/questions/9001830/the-reason-to-use-js-call-method