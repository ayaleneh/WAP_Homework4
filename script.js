

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}


console.log("Expected output of max(20,10) is 20  " +
    myFunctionTest(20, max(20, 10)));
console.assert(max(20, 10) == 20, "assertion failed!")



/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44)));
console.assert(maxOfThree(5,4,44)==44,"Test failed!")

function isVowel(char) {
    let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    if (vowel.indexOf(char) == -1) {
        return false;
    }
    else {
        return true;
    }
}
console.log("Expected output of isVowel(I) is true " +
    myFunctionTest(true, isVowel("I")));
console.assert(isVowel("I") == true, "Test failed!")

function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log("Expected output of sumOfArray(1,2,3,4) is 10 " +
    myFunctionTest(10, sumOfArray([1, 2, 3, 4])))
console.assert(sumOfArray([1, 2, 3, 4])==10,"Test failed!")

function multiplicationOfArray(array) {
    let result = 1;
    for (let i = 0; i < array.length; i++) {
        result = result * array[i];
    }
    return result;
}

console.log("Expected output of multiplicationOfArray(1,2,3,4) is 24 " +
    myFunctionTest(24, multiplicationOfArray([1, 2, 3, 4])))
console.assert(multiplicationOfArray([1, 2, 3, 4]) == 24, "Test failed!")

function reverseString(string) {
    var result = "";
    for (let i = string.length-1; i >=0; i--) {
        result = result + string.charAt(i);
    }
    return result;
}


console.log("Expected output of reverseString(jag testar) is ratset gaj " +
    myFunctionTest("ratset gaj", reverseString("jag testar")));
console.assert(reverseString("jag testar") == "ratset gaj", "Test failed!")

function findLongestWord(arrayofword) {
    let longestword = "";
    for (word of arrayofword) {
        if (word.length > longestword.length) {
            longestword = word;
        }
    }
    return longestword.length;
}

console.log("Expected output of findLongestWord([ab, ac, acc, abcd, abcde]) is 5 " +
    myFunctionTest(5, findLongestWord(["ab", "ac", "acc", "abcd", "abcde"])));
console.assert(findLongestWord(["ab", "ac", "acc", "abcd", "abcde"]) == 5, "Test failed!")


function filterLongWord(arrayword, num) {
    let newarray = [];
    for (word of arrayword) {
        if (word.length > num) {
            newarray.push(word);
        }
    }
    return newarray;

}
console.log(filterLongWord(["john", "alex", "martha", "Gize", "Ab"], 3));

lastQuestion();

function lastQuestion() {
    const a = [1, 3, 5, 3, 3];
    const b = a.map(function (elem, i, array) {
        return elem * 10;
    })
    console.log(b.toString());
    const c = a.filter(function (elem, i, array) {
        return elem == 3;
    });
    console.log(c.toString());
    const d = a.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
    console.log(d);

    /*const d2 = a.find(function (elem) { return elem > 1; }); //3
    const d3 = a.findIndex(function (elem) { return elem > 1; }); //1
    document.writeln(d2 + "<br/>");
    document.writeln(d3);*/
}