// f(['ab', 'c', 'd', 'ab', 'c']) => ['ab1', 'c1', 'd', 'ab2', 'c2']
// 利用 map 记录次数
function changeArr(arr) {
    let map = new Map();
    const temp = [];
    for(let i = 0; i < arr.length; i++)  {
        if(map.get(arr[i])) {
            let count = map.get(arr[i]);
            if(count == 1) {
                let index = temp.findIndex(item => {
                    return item === arr[i]
                })
                temp[index] = `${arr[i]}${count}`
            }
            count ++;
            map.set(arr[i], count);
            temp.push(`${arr[i]}${count}`)
        } else {
            map.set(arr[i], 1);
            temp.push(arr[i]);
        }
    }
    return temp;
}

console.log(changeArr(['ab', 'c', 'd', 'ab', 'c', 'd', 'ab', 'c']));