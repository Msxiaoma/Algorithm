// [{ParentName: {FirstName: 'xxx'， SecondName: [{FirstAge: '18'}]}}]  转化一下key    ParentName => parent_name 

function translate(data) {
    if(Array.isArray(data)) {
        return data.map(item => {
            return translate(item);
        })
    }
    // if(typeof data === 'object') {
        let obj = {};
        Object.keys(data).forEach(key => {
            let str = key.replace(/[A-Z]/g, (match, index) => {
                return index > 0 ? `_${match.toLowerCase()}` : match.toLowerCase();
            })
            obj[str] = (typeof data[key] === 'object') ? translate(data[key]) : data[key];
        })
        return obj;
    // }
    // return data;
}
// console.log(JSON.stringify(translate([{ParentName: {FirstName: 'xxx', SecondName: [{FirstAge: '18'}]}}] )))
console.log(JSON.stringify(translate({ParentName: {FirstName: 'xxx', SecondName: [{FirstAge: '18'}]}} )))