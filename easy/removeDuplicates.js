/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    /**
    오래걸린 이유
    map에 집착하여 map을 사용하다보니 답이 안나왔음.
    map과 for의 다른점.
    map은 한번 실행 될때마다 새로운 배열을 만들어서 리턴한다. 
        ex)nums에 map을 사용했을때 인자하나를 제거하면 다음은 제거한 배열에서 실행된다.
    for는 기존 배열을 사용한다.
        ex) 배열의 변화없이 끝까지 실행한다.
     */
    for(let i=0;i<nums.length;){
        if(nums[i] ===nums[i+1]){
            nums.splice(i,1)
        }else{
            i++
        }
    }
            console.log(nums)
            return nums.length
};
const case1 = [1,1,2]
const case2 = [0,0,1,1,1,2,2,3,3,4]
const case3 = [1,2]
const case4 = [0,0,0,0,0]
removeDuplicates(case4)

