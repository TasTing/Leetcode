/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    needle == ''?0:needle
    let index = haystack.indexOf(needle)
    return index
};
