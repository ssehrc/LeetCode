const twoSum = (nums, target) => {
    let storage = {};

    for(let[index, num] of nums.entries()){
        if(storage[num] !== undefined){
            return [storage[num], index];
        }
        storage[target-num] = index;
    }
};
var nums = [3, 10, 6, 15];
console.log(twoSum(nums, 9));