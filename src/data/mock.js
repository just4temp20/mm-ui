import Mock from 'mockjs'
import Api from '@/data/api'

Mock.mock('/bis/send', {
  'code': 0,
  'msg': '123456'
})

Mock.mock('/bis/checkSMS', {
  'code': 0,
  'msg': 'OK'
})

Mock.mock(Api.luckyDraw, {
  'code': 0,
  'msg': 'ok',
  'data': {
    'activityId': '0000000007',
    'awardId': '205',
    'name': 'WOW双堡套餐',
    'type': 1,
    'grade': 1,
    'desc': 'iphone7plus',
    'content': '',
    'url': ''
  }
})
