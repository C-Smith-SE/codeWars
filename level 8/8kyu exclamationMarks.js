// Remove an exclamation mark from the end of a String. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// solution


function remove(s) {
    return s.replace(/!$/g, '')
}

