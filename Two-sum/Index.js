const test_case_1 = [2,7,11,15];
const test_case_2 = [3,2,4];
const test_case_3 = [3,3];
const test_case_4 = [4,2,1,4];

function twoSum(nums, target){
    let map = new Map();

    for(let i=0; i<nums.length; i++){
        let differ = target - nums[i];

        if(map.has(differ)){
            return [i, map.get(differ)];
        }

        map.set(nums[i], i);
    }
}

console.log(twoSum(test_case_1, 9));
console.log(twoSum(test_case_2, 7));
console.log(twoSum(test_case_3, 6));
console.log(twoSum(test_case_4, 8));