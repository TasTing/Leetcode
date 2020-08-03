/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = height.length
    let max = 0
    for (let i=0;i<len;i++){
        for (let j=i+1;j<len;j++){
            let wide = j-i
            let hei = height[i]<height[j]?height[i]:height[j]
            let rec = wide*hei
            max = rec>max?rec:max
        }
    }
    return max
};


// forced loop solution
