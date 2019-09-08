//without spreading, it's [[1, 2, 3], 4, 5, 6]
var nums1 = [1, 2, 3];
var nums2 = [...nums1, 4, 5, 6];

console.log(nums2);

// This should come out to 15
var numsArray = [3, 5, 7];

function addNums(a, b, c) {
  console.log(a + b + c);
}

addNums(...numsArray);
