/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merge=[...nums1,...nums2];
    merge.sort((a,b)=>a-b);
    let mid=Math.trunc(merge.length/2);
    if(merge.length%2===0)
        return (merge[mid-1]+merge[mid])/2;
    else
        return merge[mid];
};