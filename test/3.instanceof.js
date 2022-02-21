function instanceof(left, right) {
    let leftValue = left._proto_;
    let rightValue = right.prototype;
    while(true) {
        if(leftValue == rightValue)  {
            return true;
        } else {
            return false;
        }
        leftValue = leftValue._proto_;
    }
}