/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function maxDepth(root: TreeNode | null): number {
  let rootDepth = 0;
  const searchDepth = (s_root: TreeNode | null, depth: number) => {
    if (!s_root) return;

    if (depth > rootDepth) {
      rootDepth = depth;
    }
    searchDepth(s_root.left, depth + 1);
    searchDepth(s_root.right, depth + 1);
  };
  searchDepth(root, rootDepth + 1);

  return rootDepth;
}
