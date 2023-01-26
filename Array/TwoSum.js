// 나의 솔루션
function twoSum(nums, target) {
    let result = []
    let maxIndex = nums.length-1
    nums.map((num,index) => {
        nums.map((num2,index2) => {
            if(index !== index2){
                console.log(num,nums[index2])
                if(num + nums[index2] === target) {
                    if(result.length > 0) return
                    result.push(index)
                    result.push(index2)
                    console.log("result : ",index,index2)
                }
            }
        })

        // if(num + nums[index+1] === target) {
        //     result.push(index)
        //     result.push(index+1)
        // }
        // if(index === maxIndex && result.length === 0){
        //     if(nums[0] + nums[maxIndex] === target) {
        //         result.push(0)
        //         result.push(maxIndex)
        //     }
        // }

    })
    return result
};
console.log(twoSum([3,3],6))

// 다른 솔루션
function twoSum(nums, target) {
    const map = {}
    for (let index = 0; index < nums.length; index++) {
      const element = nums[index]
      const complement = target - element
      if (map[complement] !== undefined) {
        return [map[complement], index]
      } else {
        map[element] = index
      }
    }
    return []
  }