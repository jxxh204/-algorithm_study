function removeElement(nums, val) {
    for(let i = 0; nums.length > i; i++) {
        if(nums[i] === val) {
            nums.splice(i,1)
            i--;
        }
    }
    console.log(nums)
    return nums.length
};
removeElement([3,2,2,3], 3)
removeElement([0,1,2,2,3,0,4,2],2)