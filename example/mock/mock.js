import Mock from 'mockjs'

Mock.mock('/bis/send', {
  'code': 0,
  'msg': '123456'
})

Mock.mock('/bis/checkSMS', {
  'code': 0,
  'msg': 'OK'
})
