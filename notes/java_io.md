java.lang.System class contains the means for:

* standard input, standard output, and error output streams; 
* access to externally defined properties and environment variables; 
* a means of loading files and libraries; 
* and a utility method for quickly copying a portion of an array.

System.in, System.out & System.err are the "standard" input, output and error streams.

[System.in][1] provides us with the input stream but we need [java.util.Scanner][2] to parse primitives from the stream.

	Scanner sc = new Scanner(System.in);
    int i = sc.nextInt();
	
Scanner.hasNext() - Returns true if this scanner has another token in its input.
Scanner.nextInt() - Scans the next token of the input as an int.
Scanner.nextLine() - Advances this scanner past the current line and returns the input that was skipped.

Example:

	import java.util.*;
	import java.lang.*;

	class Io
	{
		public static void main (String[] args) throws java.lang.Exception
		{
			Scanner in = new Scanner(System.in);
			while (in.hasNext()){
				System.out.println(in.nextLine());
			}
		}
	}
	

[1]: http://docs.oracle.com/javase/7/docs/api/java/lang/System.html#in
[2]: http://docs.oracle.com/javase/7/docs/api/java/util/Scanner.html