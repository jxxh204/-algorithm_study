/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
// root가 주어지면 그에 맞는 2중 배열을 만든다.
// [3,9,20,null,null,15,7]
// 의사코드
// BFS를 사용.

// let result = []
// let current = [];

// 배열이 없으면 없는 배열을 리턴
// left, right 둘다 없으면 val을 배열로 감싸서 [[1]] 리턴
// val 있는 지 확인. current 푸시
// current를 result에 푸시하고 current 초기화.

// helper 함수 작성
// 인자 : left, right
// helper fuction
// left.val와 right.val 모두 없으면 return;
// left.val 확인 후 current 푸시
// right.val 확인 후 current 푸시
// helper(left.left, left.right)
// helper(right.left, right.right)

    // const result = [];
    // let current = [];
    // if(!root) return [];
    // if(!root.left && !root.right) return [[root.val]]
    // current.push(root.val)
    // result.push(current)
    // current = [];

    // const helper = (left:TreeNode | null, right:TreeNode | null) => {
    //     if(!left && !right) return;
    //     if(left) current.push(left.val);
    //     if(right) current.push(right.val);
        
    //     result.push(current);
    //     current = [];

    //    if(left) helper(left.left,left.right);
    //    if(right) helper(right.left,right.right);
    // }   
    // helper(root.left,root.right);

    // return result;

// 1. level을 언제 올리냐
function levelOrder(root: TreeNode | null): number[][] {
    const result = [[]];
    let level = 1;
    if(!root) return [];
    if(!root.left && !root.right) return [[root.val]]
    result[0] = [root.val]

    const helper = (left:TreeNode | null, right:TreeNode | null, level:number) => {
        if(!left && !right) return;
        if(!result[level]) result[level] = [];
        if(left) result[level].push(left.val);
        if(right) result[level].push(right.val);
        
        // result.push(result);
        console.log(result,left,right,level)
       if(left) helper(left.left,left.right,level+1);
       if(right) helper(right.left,right.right,level+1);
    }   
    helper(root.left,root.right, level);
    console.log(result)
    return result;
};

    // if(!root) return [];
    // if(!root.left && !root.right) return [[root.val]]

    // let node = root
    // let data = [];
    // let queue = [];
    // let level = 0;
    // let current = [];
    // queue.push(node)
    // while(queue.length){
    //     console.log("queue  :",queue)
    //   node = queue.shift();
    //   data.push(node.val);
    //   current[level].push(node.val)
    //   if (node.left) queue.push(node.left);
    //   if (node.right) queue.push(node.right);
    // }
    // console.log(data,current)