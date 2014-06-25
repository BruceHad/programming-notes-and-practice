JS Strict Mode is an alternate mode that has a higher level of error reporting and different behaviour.

To invoke strict mode enter the line before any other statements.

    "use strict";

Strict mode can be applied at script level, as above, or at functional level.

	function strict(){
	  // Function-level strict mode syntax
	  'use strict';
	  ...
	}
	
## Changes

* Throws errors for undeclared variables. Useful for catching mis-typed variable names.
* [with(){}][1] has been disabled.
* 'eval' is protected.
* Throws errors if you try to delete or change any object or properties that shouldn't be editable.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with