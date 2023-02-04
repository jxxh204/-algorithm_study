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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false;
  return compare(root.left, root.right);
}
const compare = (Lroot, Rroot) => {
  if (Lroot === null && Rroot === null) return true;

  if (Rroot === null || Lroot === null) return false;
  if (Lroot.val !== Rroot.val) return false;

  return compare(Lroot.right, Rroot.left) && compare(Lroot.left, Rroot.right);
};
