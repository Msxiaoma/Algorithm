var compareVersion = function(a, b) {
    let v1 = a.split('.');
    let v2 = b.split('.');
   for(let i = 0; i < v1.length || i < v2.length; i++) {
      let x = parseInt(v1[i]), y =  parseInt(v2[i]);
      if((x > y) || (x && !y)) {
        return 1
      } 
      if((x < y) || (!x && y)) {
        return -1
      } 
   }
   return 0;
}