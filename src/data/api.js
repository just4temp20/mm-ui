/**
 * Created by fengxiqiu on 2018/1/15.
 */
// /promactivity
// let url = 'http://221.181.100.151:8081' // 本地
let url = 'http://117.131.17.174:8083'  // 测试
// /bis
let urlBis = 'http://10.1.5.52:11020'  // 测试
let api = {
  sendMsg: '/promactivity/sms/sendMsg', //短验下发接口
  getKeyToken: '/promactivity/queryAct/getKeyToken', //获取getKeyToken
  executeH5: '/promactivity/activityH5/executeH5', //非登录用户（一般是H5输入手机号）领取接口
  //ww
  luckyDraw: '/bis/luckDraw',  //抽奖接口
  getPrizelist: '/bis/getAward',  //活动奖品
  getActCount: '/bis/getActCount',  //活动次数
  //登录页
  sendMsg2: '/bis/send',  //获取短信验证码
  login2: '/bis/checkSMS',  //登录
  //即见即所得
  gridMultiple: '/bis/index?com=gridMultiple',
  title: '/bis/index?com=title'
}

for (let key in api) {
  if (api[key].indexOf('/promactivity/') !== -1) {
    api[key] = url + api[key]
  }
  if (api[key].indexOf('/bis/') !== -1) {
    api[key] = urlBis + api[key]
  }
}

export default api
