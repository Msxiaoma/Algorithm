
var isPalindrome = function(s) {
    let str = s.toLowerCase();
    console.log('str', str)
    let left = 0, right = str.length - 1;
    while(left <= right) {   
        let a = str[left]
        let b = str[right]
        if(!/[a-z]|[0-9]/.test(str[left])) {
            left ++
            continue;
        }
        if(!/[a-z]|[0-9]/.test(str[right])) {
            right--
            continue;
        }
        if(str[left] != str[right]) {
            return false;
        } else {
            left ++;
            right --;
        }
    }
    return true;
};


// 第二种


  public boolean isPalindrome(String s) {
    String actual = s.replaceAll("[^A-Za-z0-9]", "").toLowerCase();
    String rev = new StringBuffer(actual).reverse().toString();
    return actual.equals(rev);
}

console.log(isPalindrome("0P"))


