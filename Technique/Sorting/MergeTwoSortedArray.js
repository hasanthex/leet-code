const left = [1,2,4,5,6]; // left sorted array
const right = [2,3,3,4]; // right sorted array

let sortedArray = [];
let l = r = 0;

while(l < left.length &&  r < right.length){

    if(left[l] < right[r]){
        sortedArray.push(left[l]);
        l++;
    } else {
        sortedArray.push(right[r]);
        r++;
    }
}

// Concatenate the remaining elements
// concat does not modify the original array; instead, it returns a new array.
sortedArray = sortedArray.concat(left.slice(l)).concat(right.slice(r));

console.log(sortedArray);

