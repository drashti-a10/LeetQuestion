/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let bucket = new Array(nums.length + 1);
    let frequencyMap = new Map();

    for(let num of nums){
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    for(let [num, frequency] of frequencyMap){
        if(bucket[frequency] === undefined){
            bucket[frequency] = [];
        }
        bucket[frequency].push(num);
    }

    let res = [];
    let counter = 0;

    for(let pos = bucket.length - 1; pos>=0 && counter < k; pos--){
        if(bucket[pos] !== undefined){
            for(let num of bucket[pos]){
                res.push(num);
                counter++;

                if(counter === k){
                    break;
                }
            }
        }
    }
    return res;
};