// f(['ab', 'c', 'd', 'ab', 'c']) => ['ab1', 'c1', 'd', 'ab2', 'c2']
// 利用 map 记录次数

function f(arr) {
    const map = new Map();
    const temp = [];
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) { // 数组中已经有元素了
            let count = map.get(arr[i]);
            if(count == 1) { // 给第一次出现的元素添加序号
                let index = temp.findIndex(item => item === arr[i] );
                temp[index] = `${temp[index]}${count}` ;
            } 
            // 出现次数大于1次
            count ++;
            map.set(arr[i], count);
            temp.push(`${arr[i]}${count}` );
        } else {
            map.set(arr[i], 1);
            temp.push(arr[i]);
        }
    }
    return temp;
}

console.log(f(['ab', 'c', 'd', 'ab', 'c', 'ab']))