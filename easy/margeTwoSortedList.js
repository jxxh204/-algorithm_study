function mergeTwoLists(list1,list2) {
    let result = []
    list1.map((num,index) =>{
        list1.push(list2[index])
    })
    // 합쳐짐.
    list1.map((num) => {
        let end = false
        if(result.length === 0) {
            result.push(false)
        }
        result.map((r_num,index) => {
            if(result.length === 1){
                // console.log(r_num)
            }
            if(!end){
                console.log(result.length)
                if(r_num > num) {
                    // index
                }
                else if(r_num === num) {

                    result.splice(index,0,num)
                    end = true
                } else if(result.length === index+1) {

                    result.push(num)
                    end = true
                }
            }
        })
        
    })
    result.splice(0,1)
    return result
};


console.log(mergeTwoLists([1,2,3],[1,3,4]))
