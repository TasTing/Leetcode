/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    return levelNodes(root,0,res)
};

function levelNodes(node, level, res) {

    if (!node) return res
    if (!res[level]) res[level] = [node.val]
    else res[level].push(node.val)
    res = levelNodes(node.left,level+1, res)
    res = levelNodes(node.right,level+1, res)

    return res
}
