/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prefix = strs[0] || '';
        for (var i = 1; i < strs.length; i++) {
            var str = strs[i];
            while (str.indexOf(prefix) != 0) {
                prefix = prefix.substr(0, prefix.length - 1);
            }
        }
        return prefix;
};
