// api接口数据参考
/* eslint-disable */
window.ApiStruct = {
  titleBox: {
    url: 'http://10.1.5.52:11020/bis/index?com=title',
    data: {
      "categoryIds": [{
        "type": "PAD",
        "categoryId": "x10027",
        "fields": ["NAME", "DESCS", "MORE_TIPS", "URL"]
      }]
    },
    ret: {
      "code": 0,
      "msg": "OK",
      "data": [{
        "x10027": [{
          "type": "PAD",
          "content": {"MORE_TIPS": "更多", "DESCS": "我是歌手首发", "URL": "https://m.kaola.com/"}
        }]
      }]
    }
  },
  gridMultiple: {
    url: 'http://10.1.5.52:11020/bis/index?com=gridMultiple',
    data: {
      "categoryIds": [{
        "type": "PAD",
        "categoryId": "x10004",
        "fields": ["LOGO", "TITLE", "URL"]
      }]
    },
    ret: {
      "code": 0,
      "msg": "OK",
      "data": [
        {
          "x10004": [
            {
              "type": "PAD",
              "content": {
                "LOGO": "http://210.75.5.245:48080/rs/res/marketing_activities/1516942958528.png",
                "TITLE": "搞笑",
                "URL": "http://www.miguvideo.com/wap/resource/pc/channel.jsp?nodeId=70027519"
              }
            },
            {
              "type": "PAD",
              "content": {
                "LOGO": "http://210.75.5.245:48080/rs/res/marketing_activities/1516942984851.png",
                "TITLE": "游戏",
                "URL": "http://www.miguvideo.com/wap/resource/pc/channel.jsp?nodeId=70027520"
              }
            },
            {
              "type": "PAD",
              "content": {
                "LOGO": "http://210.75.5.245:48080/rs/res/marketing_activities/1516943013342.png",
                "TITLE": "汽车",
                "URL": "http://www.miguvideo.com/wap/resource/pc/index.jsp"
              }
            },
            {
              "type": "PAD",
              "content": {
                "LOGO": "http://210.75.5.245:48080/rs/res/marketing_activities/1516938772326.png",
                "TITLE": "少儿",
                "URL": "http://www.miguvideo.com/wap/resource/pc/channel.jsp?nodeId=70027514"
              }
            },
            {
              "type": "PAD",
              "content": {
                "LOGO": "http://210.75.5.245:48080/rs/res/marketing_activities/1516938797084.png",
                "TITLE": "剧集",
                "URL": "http://www.miguvideo.com/wap/resource/pc/channel.jsp?nodeId=70027515"
              }
            },
            {
              "type": "PAD",
              "content": {
                "LOGO": "http://210.75.5.245:48080/rs/res/marketing_activities/1516938850594.png",
                "TITLE": "综艺",
                "URL": "http://www.miguvideo.com/wap/resource/pc/channel.jsp?nodeId=70027517"
              }
            },
            {
              "type": "PAD",
              "content": {
                "LOGO": "http://210.75.5.245:48080/rs/res/marketing_activities/1516938877081.png",
                "TITLE": "娱乐",
                "URL": "http://www.miguvideo.com/wap/resource/pc/channel.jsp?nodeId=70027518"
              }
            }
          ]
        }
      ]
    }
  },
  gridTwo: {
    url: 'http://10.1.5.52:11020/bis/index',
    data: {
      "categoryIds": [
        {
          "type": "VIDEO",
          "categoryId": "x10005",
          "fields": [
            "VIDEONAME",
            "SLOGAN",
            "SERIALCOUNT",
            "URL"
          ]
        }
      ]
    },
    ret: {
      "code": 0,
      "msg": "OK",
      "data": [
        {
          "x10005": [
            {
              "type": "VIDEO",
              "content": {
                "VIDEONAME": "青春逗",
                "SERIALCOUNT": "1",
                "SLOGAN": "集偶像、欢乐、情怀、剧情等元素于一体，不作不闹，认真搞笑",
                "URL": "http://m.miguvideo.com/wap/resource/migu/detail/Detail.jsp?cid=635140585"
              }
            },
            {
              "type": "VIDEO",
              "content": {
                "VIDEONAME": "唐人街探案",
                "SERIALCOUNT": "1",
                "SLOGAN": "",
                "URL": "http://m.miguvideo.com/wap/resource/migu/miguH5/detail/detail.jsp?cid=615904669&nodeId="
              }
            },
            {
              "type": "VIDEO",
              "content": {
                "VIDEONAME": "爆笑虫子第三季",
                "SERIALCOUNT": "1",
                "SLOGAN": "",
                "URL": "http://m.miguvideo.com/wap/resource/migu/miguH5/detail/detail.jsp?cid=628164306"
              }
            },
            {
              "type": "VIDEO",
              "content": {
                "VIDEONAME": "战狼2",
                "SERIALCOUNT": "1",
                "SLOGAN": "从国内燃到国外",
                "URL": "http://m.miguvideo.com/wap/resource/migu/detail/Detail.jsp?cid=632552171"
              }
            },
            {
              "type": "VIDEO",
              "content": {
                "VIDEONAME": "缝纫机乐队",
                "SERIALCOUNT": "1",
                "SLOGAN": "爆笑归来，继续拯救不开心",
                "URL": "http://m.miguvideo.com/wap/resource/migu/detail/Detail.jsp?cid=635717540"
              }
            },
            {
              "type": "VIDEO",
              "content": {
                "VIDEONAME": "羞羞的铁拳",
                "SERIALCOUNT": "1",
                "SLOGAN": "沈腾马丽疯狂圈粉",
                "URL": "http://m.miguvideo.com/wap/resource/migu/detail/Detail.jsp?cid=636196029"
              }
            },
            {
              "type": "VIDEO",
              "content": {
                "VIDEONAME": "临终千言",
                "SERIALCOUNT": "1",
                "SLOGAN": "看艾迪·墨菲的转型和突破",
                "URL": "http://m.miguvideo.com/wap/resource/migu/detail/Detail.jsp?cid=615772582"
              }
            },
            {
              "type": "VIDEO",
              "content": {
                "VIDEONAME": "奇幻精灵事件簿",
                "SERIALCOUNT": "1",
                "SLOGAN": "第35届土星奖-最佳奇幻电影 ",
                "URL": "http://m.miguvideo.com/wap/resource/migu/detail/Detail.jsp?cid=608661689"
              }
            },
            {
              "type": "VIDEO",
              "content": {
                "VIDEONAME": "52赫兹，我爱你",
                "SERIALCOUNT": "1",
                "SLOGAN": "看一场电影谈一场恋爱",
                "URL": "http://m.miguvideo.com/wap/resource/migu/detail/Detail.jsp?cid=635954037"
              }
            },
            {
              "type": "VIDEO",
              "content": {
                "VIDEONAME": "反黑",
                "SERIALCOUNT": "30",
                "SLOGAN": "",
                "URL": "http://m.miguvideo.com/wap/resource/migu/miguH5/detail/detail.jsp?cid=632132616"
              }
            },
            {
              "type": "VIDEO",
              "content": {
                "VIDEONAME": "美人鱼",
                "SERIALCOUNT": "1",
                "SLOGAN": "",
                "URL": "http://m.miguvideo.com/wap/resource/migu/miguH5/detail/detail.jsp?cid=617379229&nodeId="
              }
            }
          ]
        }
      ]
    }
  },
}
/* eslint-enable */
