const test_case_1 = [12,8,5,2,1,9,3];
const test_case_2 = [12,10,11];
const test_case_3 = [];

function mergeSort(arr){

    if(arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right){
    const sortedArray = [];
    let l = 0, r = 0;

    while(l < left.length && r < right.length){
        if(left[l] < right[r]){
            sortedArray.push(left[l]);
            l++;
        } else {
            sortedArray.push(right[r]);
            r++;
        }
    }

    return sortedArray.concat(left.slice(l)).concat(right.slice(r));

}

console.log( mergeSort(test_case_1) );