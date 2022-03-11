function deepGet(obj, path) {
    let paths = path.split('.');
    let res = paths.reduce((acc, cur) => {
        let key = cur.includes('[') && cur.replace(/\[[0-9]\]$/ig, '');
        console.log('key', key);
        if(Array.isArray(acc[key])) {
            let index = cur.replace(/[^0-9]/ig, '');
            console.log('index', index);
            return acc[key][index] || {}
        } 
        return acc[cur] || {}
    }, obj)
    return Object.keys(res).length ? res : undefined;
}


let value =  deepGet({
    school: {
        students: [
        { name: 'Tomy' },
        { name: 'Lucy' },
        ],
    }
}, 'school.students[1].name') // => 'Tomy'
console.log('value', value)