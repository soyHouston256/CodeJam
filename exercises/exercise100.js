  function getSubsets(nums:any) {
    const subsets:any = [];

    function backtrack(temp, index) {
      subsets.push(temp.slice());
      for (let i = index; i < nums.length; i++) {
        temp.push(nums[i]);
        backtrack(temp, i + 1);
        temp.pop();
      }
    }
    backtrack([], 0);
    return subsets;
  }
  const result = getSubsets([1, 2, 3]);
  result
