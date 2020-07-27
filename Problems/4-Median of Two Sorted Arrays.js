var findMedianSortedArrays = function(nums1, nums2) {
    let nums=nums1.concat(nums2).sort(function(a, b){return a - b})
    let len=nums1.length+nums2.length
    const mid = Math.ceil(len / 2);
    const median = len % 2 == 0 ? (nums[mid] + nums[mid - 1]) / 2 : nums[mid - 1];
    return median
};

// we first combine two arrays and numeric sort it;
// then we use normal way to get median from an array 
