var lengthOfLongestSubstring = function(s) {
    let count = 0;
    let set = new Set();
    let j = 0;
    for(let i = 0; i < s.length; i++) {
        if(!set.has(s[i])) {
            set.add(s[i]);
            count = Math.max(count, set.size);
        } else {
            while(set.has(s[i])) {
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
        }
    }
    return count;
};