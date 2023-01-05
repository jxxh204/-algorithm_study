const getLeastLength = (strs) => {
    let oldLength = strs[strs.length-1]
    let result = 0;
    strs.map((word) => {
        if(word.length > oldLength) {
            result = oldLength
        } else {
            result = word.length
        }
        oldLength = word.length
    })
    return result
}

function longestCommonPrefix(strs) {
    let least = getLeastLength(strs);
    let oldWordString = ""
    let isPrefix = true
    const prefixTest = [];

    for(let i =0; i < least; i++) {
        strs.map((word,index) => { // 3번
            if(index === 0) oldWordString = strs[strs.length-1].split('')[i];
            const wordString = word.split('')[i]
            
            if(oldWordString !== wordString) {
                isPrefix = false;
            }


            if(isPrefix)
            oldWordString = wordString
        })
       if(isPrefix) prefixTest.push(strs[0].split('')[i])

    }
    console.log(prefixTest.join("")) // 답
};

console.log(longestCommonPrefix(["flower","flow","flight"]))