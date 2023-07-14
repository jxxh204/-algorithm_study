function topKFrequent(nums: number[], k: number): number[] {
    const result = []
    if(nums.length === 0) return []
    if(nums.length === 1) return nums

    // frequent 객체를 생성
    // for문으로 result를 반복
    // frequent[i]가 없을 경우
        // frequent[i] = i
        // frequent[i]+1
    //있을 경우 frequent[i]+1
    //for문이 끝난 경우

    // 최대로 반복하는 수를 알아보고 그 수와 같이 반복하는 수를 result에 푸시한다.

    //while을 써야할 듯 싶다.


    const frequent = {};
    let most = 0;
    for(let i in nums) {
        if(!frequent[nums[i]]) frequent[nums[i]] = 0
        frequent[nums[i]]++;
        if(frequent[nums[i]] > most)most = frequent[nums[i]]
    }
    for(let j in frequent) {
        console.log(j, frequent[j],k)
        if(frequent[j] === most) result.push(j)
        if(result.length === k) break;
    }
 


    console.log(frequent,most)
    return result
};