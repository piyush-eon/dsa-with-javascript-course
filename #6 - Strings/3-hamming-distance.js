// Ques 3 : Hamming Distance
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑

function hammingDistance(x,y) {
    if (x.length !== y.length) {
        throw new Error("Strings must be of same length")
    }

    let distance = 0;

    for (let i = 0; i < x.length; i++){
        if (x[i] !== y[i]) {
            distance++
        }
    }

    return distance
}

console.log(hammingDistance("hello","hwllr"));

// Variation 2: Given two integers x and y, return the Hamming distance between thier bits.

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

function hammingDistance(x, y) {
    x=x.toString(2)
    y=y.toString(2)

    if (x.length < y.length) {
        while(x.length!==y.length) x="0"+x
    } else {
         while(x.length!==y.length) y="0"+y
    }

    let distance = 0;

    for (let i = 0; i < x.length; i++){
        if (x[i] !== y[i]) {
            distance++
        }
    }

    return distance
}

console.log(hammingDistance(2,9));
