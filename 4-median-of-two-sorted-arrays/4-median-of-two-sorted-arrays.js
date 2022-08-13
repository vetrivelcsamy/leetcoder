/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const quickSort = (array = []) => {
        if (array.length < 2) {
            return array
        }


        const pivot = array[0]

        const smallerList = array.slice(1).filter(item => item < pivot || item === pivot)
        const biggerList = array.slice(1).filter(item => item > pivot)

        return [...quickSort(smallerList), pivot, ...quickSort(biggerList)]
    }
    
    let newArr = [...nums1,...nums2]
    newArr = quickSort(newArr)
    const {length} = newArr
    const half = (+length) / 2
    
    return length % 2 
    ? (newArr[Math.floor(half)])
    : +(newArr[half-1] + +newArr[half])/2
};