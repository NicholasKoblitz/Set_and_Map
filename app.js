// 1
// Returns a new set that has the values [1,2,3,4]

// 2
// Returns 'ref'

// 3
// Returns {
// [1,2,3] : true,
// [1,2,3 : false]
// }

// 4
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// 5
const isvowel = (char) => 'aeiou'.includes(char);

function vowelCount(str) {
    const vowelMap = new Map();
    for (let letter of str) {
        if (isvowel(letter)) {
            if (vowelMap.has(letter)) {
                let val = vowelMap.get(letter);
                val += 1;
                vowelMap.set(letter, val);
            }
            else {
                vowelMap.set(letter, 1);
            }
        }
    }
    return vowelMap;
}