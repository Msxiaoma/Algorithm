// [{ParentName: {FirstName: 'xxx'， SecondName: [{FirstAge: '18'}]}}]  转化一下key    ParentName => parent_name 

function translate(params) {
    if(Array.isArray(params) ) {
       return params.map(item => {
           return translate(item);
        })
    }
    let result = {};
    if(typeof params == 'object') {
        Object.keys(params).forEach(key => {
            let str = key.replace(/[A-Z]/g, function(i, index) {
                return index ? `_${i.toLowerCase()}` : i.toLowerCase();
            });
            if(typeof params[key] != 'object') {
               result[str] = params[key];
            } else {
               result[str] = translate(params[key])
            }
        })
    }
    return result;

}



 console.log(translate([{ParentName: {FirstName: 'xxx', SecondName: [{FirstAge: '18'}]}}]));