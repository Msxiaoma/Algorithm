function loadImg(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = function() {
            console.log('加载完成');
            resolve(img);
        }
        img.onerror = function() {
            reject(new Error('error'))
        }
        img.src = url;
    })
}