/*

Problem: Directory Path Simplification
You are building a file system navigator where users can input absolute Unix-style file paths that may contain redundant components. Your task is to simplify the given path to its canonical form.

A valid path consists of:

"/" as the root directory.
"." referring to the current directory.
".." referring to the parent directory (moves up one level).
Any valid directory/file names consisting of lowercase letters.
The following rules apply:

Multiple slashes ("//") should be treated as a single slash ("/").
"." refers to the current directory and can be ignored.
".." moves up one directory level (removing the previous directory), unless already at the root.
The final path should always start with "/" and should not end with a slash (unless it’s just the root "/").
Input
A string path, representing the absolute file path.

Output
Return the simplified canonical path as a string.

Examples
Example 1
Input:

"/home//foo/"
Output:

"/home/foo"
Explanation:

Remove extra slashes: "/home/foo/"
Remove trailing slash: "/home/foo"
Example 2
Input:

"/a/./b/../../c/"
Output:

"/c"
Explanation:

"." is ignored.
".." cancels "b", then "a", leaving just "/c".
Example 3
Input:

"/../"`
Output:

"/"
Explanation:

".." at root has no effect, so the answer is "/".
Example 4
Input:

"/home/user/Documents/../Pictures/./"
Output:

"/home/user/Pictures"

Basic Cases
Test Case 1: Normal Path

Input:  "/home/user/docs"
Output: "/home/user/docs"
✅ No changes needed as the path is already in its simplest form.

Test Case 2: Path with Redundant Slashes

Input:  "/home//user//docs/"
Output: "/home/user/docs"
✅ Extra slashes should be reduced to a single / and the trailing slash removed.

Test Case 3: Path with . (Current Directory)
plaintext
Copy
Edit
Input:  "/a/./b/./c/"
Output: "/a/b/c"
✅ "." does nothing and should be ignored.

Cases with .. (Parent Directory)
Test Case 4: Moving Up One Level
plaintext
Copy
Edit
Input:  "/a/b/c/../d"
Output: "/a/b/d"
✅ ".." cancels "c" and moves up one level.

Test Case 5: Moving Up Multiple Levels
plaintext
Copy
Edit
Input:  "/a/b/c/../../d"
Output: "/a/d"
✅ ".." removes "c", then "b", moving up two levels.

Test Case 6: More Parent Moves Than Available Levels
plaintext
Copy
Edit
Input:  "/../"
Output: "/"
✅ Cannot go above the root /, so output remains /.

Test Case 7: Root Directory Edge Case

Input:  "/home/../../../../usr/bin"
Output: "/usr/bin"
✅ Moves up as much as possible, but stays at / before navigating into usr/bin.

Edge Cases
Test Case 8: Single Slash
plaintext
Copy
Edit
Input:  "/"
Output: "/"
✅ The root directory cannot be simplified further.

Test Case 9: Empty Directories and Consecutive Slashes

Input:  "/a//b///c//"
Output: "/a/b/c"
✅ Consecutive slashes should be reduced to a single /.

Test Case 10: Only .. and .
plaintext
Copy
Edit
Input:  "/.././.././../."
Output: "/"
✅ Moves up as much as possible but cannot go beyond root.

More Complex Cases
Test Case 11: Long Mixed Path
plaintext
Copy
Edit
Input:  "/home/user/Documents/../Downloads/./Movies/../"
Output: "/home/user/Downloads"
✅ ".." removes "Documents", "." does nothing, and "../" removes "Movies".

Test Case 12: Ending with Parent Directory Moves

Input:  "/a/b/c/d/e/../.."
Output: "/a/b/c"
✅ ".." cancels "e", then "d", simplifying to "/a/b/c".

P:

Write a function that takes a string and modifies the string according to the following rules:
  - double slashes are replaced by single slashes
  - two consequtive full-stops are deleted along with the directory to its left (where directory is a string bordered by forward slashes)
    - If there is no "directory" to the left, only delete the double full-stop and subsequent forward slash.
  - directories which contain only single full-stops should be deleted
  - if the string ends with a forward slash it should be deleted.

E:

console.log(simplify("/home//foo/")) // => "/home/foo"
console.log(simplify("/a/./b/../../c/")) // => "/c"
console.log(simplify("/../")) // => "/"
console.log(simplify("/home/user/Documents/../Pictures/./")); // =>"/home/user/Pictures"
console.log(simplify("/home/user/docs")) // => "/home/user/docs"
console.log(simplify("/home//user//docs/")) // => "/home/user/docs"
console.log(simplify("/a/./b/./c/")) // "/a/b/c"
console.log(simplify("/a/b/c/../d")) // =>"/a/b/d"
console.log(simplify("/a/b/c/../../d")) // "/a/d"
console.log(simplify("/../")) // => "/"
console.log(simplify("/home/../../../../usr/bin")) // => "/usr/bin"
console.log(simplify("/")) // => "/"
console.log(simplify("/a//b///c//")) // => "/a/b/c"
console.log(simplify("/.././.././../.")) // =>  "/"
console.log(simplify("/home/user/Documents/../Downloads/./Movies/../")) // => "/home/user/Downloads"
console.log(simplify("/a/b/c/d/e/../..")) //  => "/a/b/c"

D:
A:
C:
*/


function simplify(string) {

};

console.log(simplify("/home//foo/")) // => "/home/foo"
console.log(simplify("/a/./b/../../c/")) // => "/c"
console.log(simplify("/../")) // => "/"
console.log(simplify("/home/user/Documents/../Pictures/./")); // =>"/home/user/Pictures"
console.log(simplify("/home/user/docs")) // => "/home/user/docs"
console.log(simplify("/home//user//docs/")) // => "/home/user/docs"
console.log(simplify("/a/./b/./c/")) // "/a/b/c"
console.log(simplify("/a/b/c/../d")) // =>"/a/b/d"
console.log(simplify("/a/b/c/../../d")) // "/a/d"
console.log(simplify("/../")) // => "/"
console.log(simplify("/home/../../../../usr/bin")) // => "/usr/bin"
console.log(simplify("/")) // => "/"
console.log(simplify("/a//b///c//")) // => "/a/b/c"
console.log(simplify("/.././.././../.")) // =>  "/"
console.log(simplify("/home/user/Documents/../Downloads/./Movies/../")) // => "/home/user/Downloads"
console.log(simplify("/a/b/c/d/e/../..")) //  => "/a/b/c"