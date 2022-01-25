const async1 = async () => {
    console.log('async1')
    setTimeout(() => {
        console.log('timer1')
    }, 2000);
    await new Promise(resolve => {
        console.log('promise1')
    })
    console.log('async end')
    return 'async1 success'
}
console.log('script start')
async1().then(res => {
    console.log(res)
})
console.log('script end')
Promise.resolve(1).then(2).then(3).catch(4).then(res => console.log(res))
setTimeout(() => {
    console.log('timer2')
}, 1000);


// 'script start'
// 'async1'
// 'promise1'
// 'script end'
// 1
// 'timer2'
// 'timer1'



https://account.xueersi.com;
https://activity.xueersi.com;
https://api.xueersi.com;
https://app.xueersi.com;
https://booster.xueersi.com;
https://chatgslb.xescdn.com;
https://chatgslb.xesimg.com;
https://dj.xesimg.com;
https://editor.xesimg.com;
https://expapi.xueersi.com;https://growth.xueersi.com;https://gslb.video.xescdn.com;https://gslb.xueersi.com;https://gslbbak.xueersi.com;https://h5.xueersi.com;https://icourse.xesimg.com;https://lecturepie.xueersi.com;https://live.xueersi.com;https://log.xescdn.com;https://login.xueersi.com;https://m.xueersi.com;https://ocenter.xueersi.com;https://open.weixin.qq.com;https://passport.100tal.com;https://passport.vdyoo.com;https://pv.sohu.com;https://reg.xueersi.com;https://replayws.wangxiao.eaydu.com;https://test-passport.100tal.com;https://test-passport.vdyoo.com;https://test-ucdj.100tal.com;https://test-udcdj.100tal.com;https://time.xueersi.com;https://touch.xueersi.com;https://trade.xueersi.com;https://ucdj.100tal.com;https://udcdj.100tal.com;https://weixin.xueersi.com;https://www.xueersi.com;https://xesfile.xesimg.com;


