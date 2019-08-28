/**
 * 资源管理中心.
 */

// const baseAssetUrl = 'http://cdn.shikehuyu.com/long-take-demo-v1.0/static'
const baseAssetUrl = 'http://192.168.1.15:8081';

/** 
 * 获取指定的序列帧.
 * 
 * @param {string} key 名称.
 * @param {number} n 数量.
 * @param {number} 开始的值.
 */
const getFrames = (key, n, start = 0 ) => {
  const frames = []
  for (let i = start; i < n + start; i += 1) {
    frames.push(`${key}${i}`)
  }
  return frames
}

const ani = [
  { name: 'ani0', url: baseAssetUrl + '/imgs/ani/701.png' },
  { name: 'ani1', url: baseAssetUrl + '/imgs/ani/702.png' },
  { name: 'ani2', url: baseAssetUrl + '/imgs/ani/703.png' },
  { name: 'ani3', url: baseAssetUrl + '/imgs/ani/704.png' },
  { name: 'ani4', url: baseAssetUrl + '/imgs/ani/705.png' },
  { name: 'ani5', url: baseAssetUrl + '/imgs/ani/706.png' },
  { name: 'ani6', url: baseAssetUrl + '/imgs/ani/707.png' },
  { name: 'ani7', url: baseAssetUrl + '/imgs/ani/708.png' },
  { name: 'ani8', url: baseAssetUrl + '/imgs/ani/709.png' },
  { name: 'ani9', url: baseAssetUrl + '/imgs/ani/710.png' },
  { name: 'ani10', url: baseAssetUrl + '/imgs/ani/711.png' },
  { name: 'ani11', url: baseAssetUrl + '/imgs/ani/712.png' },
  { name: 'ani12', url: baseAssetUrl + '/imgs/ani/713.png' },
  { name: 'ani13', url: baseAssetUrl + '/imgs/ani/714.png' },
  { name: 'ani14', url: baseAssetUrl + '/imgs/ani/715.png' },
  { name: 'ani15', url: baseAssetUrl + '/imgs/ani/716.png' },
  { name: 'ani16', url: baseAssetUrl + '/imgs/ani/717.png' },
  { name: 'ani17', url: baseAssetUrl + '/imgs/ani/718.png' },
  { name: 'ani18', url: baseAssetUrl + '/imgs/ani/719.png' },
  { name: 'ani19', url: baseAssetUrl + '/imgs/ani/720.png' },
  { name: 'ani20', url: baseAssetUrl + '/imgs/ani/721.png' },
  { name: 'ani21', url: baseAssetUrl + '/imgs/ani/722.png' },
  { name: 'ani22', url: baseAssetUrl + '/imgs/ani/723.png' },
  { name: 'ani23', url: baseAssetUrl + '/imgs/ani/724.png' },
  { name: 'ani24', url: baseAssetUrl + '/imgs/ani/725.png' },
  { name: 'ani25', url: baseAssetUrl + '/imgs/ani/726.png' },
  { name: 'ani26', url: baseAssetUrl + '/imgs/ani/727.png' },
  { name: 'ani27', url: baseAssetUrl + '/imgs/ani/728.png' },
  { name: 'ani28', url: baseAssetUrl + '/imgs/ani/729.png' },
  { name: 'ani29', url: baseAssetUrl + '/imgs/ani/730.png' },
  { name: 'ani30', url: baseAssetUrl + '/imgs/ani/731.png' },
  { name: 'ani31', url: baseAssetUrl + '/imgs/ani/732.png' },
  { name: 'ani32', url: baseAssetUrl + '/imgs/ani/733.png' },
  { name: 'ani33', url: baseAssetUrl + '/imgs/ani/734.png' },
  { name: 'ani34', url: baseAssetUrl + '/imgs/ani/735.png' },
  { name: 'ani35', url: baseAssetUrl + '/imgs/ani/736.png' },
  { name: 'ani36', url: baseAssetUrl + '/imgs/ani/737.png' },
  { name: 'ani37', url: baseAssetUrl + '/imgs/ani/738.png' },
  { name: 'ani38', url: baseAssetUrl + '/imgs/ani/739.png' },
  { name: 'ani39', url: baseAssetUrl + '/imgs/ani/740.png' },
  { name: 'ani40', url: baseAssetUrl + '/imgs/ani/741.png' },
  { name: 'ani41', url: baseAssetUrl + '/imgs/ani/742.png' },
  { name: 'ani42', url: baseAssetUrl + '/imgs/ani/743.png' },
  { name: 'ani43', url: baseAssetUrl + '/imgs/ani/744.png' },
  { name: 'ani44', url: baseAssetUrl + '/imgs/ani/745.png' },
  { name: 'ani45', url: baseAssetUrl + '/imgs/ani/746.png' },
  { name: 'ani46', url: baseAssetUrl + '/imgs/ani/747.png' },
  { name: 'ani47', url: baseAssetUrl + '/imgs/ani/748.png' },
  { name: 'ani48', url: baseAssetUrl + '/imgs/ani/749.png' },
  { name: 'ani49', url: baseAssetUrl + '/imgs/ani/750.png' }
]

const girl = [
  { name: 'girl0', url: baseAssetUrl + '/imgs/girl/160.png' },
  { name: 'girl1', url: baseAssetUrl + '/imgs/girl/161.png' },
  { name: 'girl2', url: baseAssetUrl + '/imgs/girl/162.png' },
  { name: 'girl3', url: baseAssetUrl + '/imgs/girl/163.png' },
  { name: 'girl4', url: baseAssetUrl + '/imgs/girl/164.png' },
  { name: 'girl5', url: baseAssetUrl + '/imgs/girl/165.png' },
  { name: 'girl6', url: baseAssetUrl + '/imgs/girl/166.png' },
  { name: 'girl7', url: baseAssetUrl + '/imgs/girl/167.png' },
  { name: 'girl8', url: baseAssetUrl + '/imgs/girl/168.png' },
  { name: 'girl9', url: baseAssetUrl + '/imgs/girl/169.png' },
  { name: 'girl10', url: baseAssetUrl + '/imgs/girl/170.png' },
  { name: 'girl11', url: baseAssetUrl + '/imgs/girl/171.png' },
  { name: 'girl12', url: baseAssetUrl + '/imgs/girl/172.png' },
  { name: 'girl13', url: baseAssetUrl + '/imgs/girl/173.png' },
  { name: 'girl14', url: baseAssetUrl + '/imgs/girl/174.png' },
  { name: 'girl15', url: baseAssetUrl + '/imgs/girl/175.png' },
  { name: 'girl16', url: baseAssetUrl + '/imgs/girl/176.png' },
  { name: 'girl17', url: baseAssetUrl + '/imgs/girl/177.png' },
  { name: 'girl18', url: baseAssetUrl + '/imgs/girl/178.png' },
  { name: 'girl19', url: baseAssetUrl + '/imgs/girl/179.png' },
  { name: 'girl20', url: baseAssetUrl + '/imgs/girl/180.png' },
  { name: 'girl21', url: baseAssetUrl + '/imgs/girl/181.png' },
  { name: 'girl22', url: baseAssetUrl + '/imgs/girl/182.png' },
  { name: 'girl23', url: baseAssetUrl + '/imgs/girl/183.png' },
  { name: 'girl24', url: baseAssetUrl + '/imgs/girl/184.png' },
  { name: 'girl25', url: baseAssetUrl + '/imgs/girl/185.png' },
  { name: 'girl26', url: baseAssetUrl + '/imgs/girl/186.png' },
  { name: 'girl27', url: baseAssetUrl + '/imgs/girl/187.png' },
  { name: 'girl28', url: baseAssetUrl + '/imgs/girl/188.png' },
  { name: 'girl29', url: baseAssetUrl + '/imgs/girl/189.png' },
  { name: 'girl30', url: baseAssetUrl + '/imgs/girl/190.png' },
  { name: 'girl31', url: baseAssetUrl + '/imgs/girl/191.png' },
  { name: 'girl32', url: baseAssetUrl + '/imgs/girl/192.png' },
  { name: 'girl33', url: baseAssetUrl + '/imgs/girl/193.png' },
  { name: 'girl34', url: baseAssetUrl + '/imgs/girl/194.png' },
  { name: 'girl35', url: baseAssetUrl + '/imgs/girl/195.png' },
  { name: 'girl36', url: baseAssetUrl + '/imgs/girl/196.png' },
  { name: 'girl37', url: baseAssetUrl + '/imgs/girl/197.png' },
  { name: 'girl38', url: baseAssetUrl + '/imgs/girl/198.png' },  
  { name: 'girl39', url: baseAssetUrl + '/imgs/girl/199.png' },
  { name: 'girl40', url: baseAssetUrl + '/imgs/girl/200.png' },
  { name: 'girl41', url: baseAssetUrl + '/imgs/girl/201.png' },
  { name: 'girl42', url: baseAssetUrl + '/imgs/girl/202.png' },
  { name: 'girl43', url: baseAssetUrl + '/imgs/girl/203.png' },
  { name: 'girl44', url: baseAssetUrl + '/imgs/girl/204.png' },
  { name: 'girl45', url: baseAssetUrl + '/imgs/girl/205.png' },
  { name: 'girl46', url: baseAssetUrl + '/imgs/girl/206.png' },
  { name: 'girl47', url: baseAssetUrl + '/imgs/girl/207.png' },
  { name: 'girl48', url: baseAssetUrl + '/imgs/girl/208.png' },
  { name: 'girl49', url: baseAssetUrl + '/imgs/girl/209.png' },
  { name: 'girl50', url: baseAssetUrl + '/imgs/girl/210.png' },
  { name: 'girl51', url: baseAssetUrl + '/imgs/girl/211.png' },
  { name: 'girl52', url: baseAssetUrl + '/imgs/girl/212.png' },
  { name: 'girl53', url: baseAssetUrl + '/imgs/girl/213.png' },
  { name: 'girl54', url: baseAssetUrl + '/imgs/girl/214.png' },
  { name: 'girl55', url: baseAssetUrl + '/imgs/girl/215.png' },
  { name: 'girl56', url: baseAssetUrl + '/imgs/girl/216.png' },
  { name: 'girl57', url: baseAssetUrl + '/imgs/girl/217.png' },
  { name: 'girl58', url: baseAssetUrl + '/imgs/girl/218.png' },
  { name: 'girl59', url: baseAssetUrl + '/imgs/girl/219.png' },
  { name: 'girl60', url: baseAssetUrl + '/imgs/girl/220.png' },
  { name: 'girl61', url: baseAssetUrl + '/imgs/girl/221.png' },
]

const items = [
  { name: 'item1', url: baseAssetUrl + '/imgs/items/1.png' },
  { name: 'item2', url: baseAssetUrl + '/imgs/items/2.png' },
  { name: 'item3', url: baseAssetUrl + '/imgs/items/3.png' },
  { name: 'item4', url: baseAssetUrl + '/imgs/items/4.png' },
  { name: 'item5', url: baseAssetUrl + '/imgs/items/5.png' },
  { name: 'item6', url: baseAssetUrl + '/imgs/items/6.png' },
  { name: 'item7', url: baseAssetUrl + '/imgs/items/7.png' },
]

const plane = [
  { name: 'plane0', url: baseAssetUrl + '/imgs/plane/408.png' },
  { name: 'plane1', url: baseAssetUrl + '/imgs/plane/409.png' },
  { name: 'plane2', url: baseAssetUrl + '/imgs/plane/410.png' },
  { name: 'plane3', url: baseAssetUrl + '/imgs/plane/411.png' },
  { name: 'plane4', url: baseAssetUrl + '/imgs/plane/412.png' },
  { name: 'plane5', url: baseAssetUrl + '/imgs/plane/413.png' },
  { name: 'plane6', url: baseAssetUrl + '/imgs/plane/414.png' },
  { name: 'plane7', url: baseAssetUrl + '/imgs/plane/415.png' },
  { name: 'plane8', url: baseAssetUrl + '/imgs/plane/416.png' },
  { name: 'plane9', url: baseAssetUrl + '/imgs/plane/417.png' },
  { name: 'plane10', url: baseAssetUrl + '/imgs/plane/418.png' },
  { name: 'plane11', url: baseAssetUrl + '/imgs/plane/419.png' },
  { name: 'plane12', url: baseAssetUrl + '/imgs/plane/420.png' },
  { name: 'plane13', url: baseAssetUrl + '/imgs/plane/421.png' },
  { name: 'plane14', url: baseAssetUrl + '/imgs/plane/422.png' },
  { name: 'plane15', url: baseAssetUrl + '/imgs/plane/423.png' },
  { name: 'plane16', url: baseAssetUrl + '/imgs/plane/424.png' },
  { name: 'plane17', url: baseAssetUrl + '/imgs/plane/425.png' },
  { name: 'plane18', url: baseAssetUrl + '/imgs/plane/426.png' },
  { name: 'plane19', url: baseAssetUrl + '/imgs/plane/427.png' },
  { name: 'plane20', url: baseAssetUrl + '/imgs/plane/428.png' },
  { name: 'plane21', url: baseAssetUrl + '/imgs/plane/429.png' },
  { name: 'plane22', url: baseAssetUrl + '/imgs/plane/430.png' },
  { name: 'plane23', url: baseAssetUrl + '/imgs/plane/431.png' },
  { name: 'plane24', url: baseAssetUrl + '/imgs/plane/432.png' }
]

const sprites = {
  ani: {
    key: 'ani0',
    size: { mode: 'widthFit', width: 1 },
    position: 'center',
    anchor: 'center'
  },
  girl: {
    key: 'girl0',
    size: { mode: 'widthFit', width: 1 },
    position: 'center',
    anchor: 'center'
  },
  plane: {
    key: 'plane0',
    size: { mode: 'widthFit', width: 0.5 },
    position: {
      x: 0.5, y: 0.4
    },
    anchor: 'center'
  }
}

const spriteAnimations = {
  // 旋涡
  ani: [{
    delay: 0.1,
    duration: 0.6,
    from: { alpha: 0 },
    to: { alpha: 1 }
  }, {
    delay: 0.1,
    duration: 0.6,
    frames: getFrames('ani', 50)
  }, {
    delay: 0.7,
    duration: 0.2,
    to: { alpha: 0 }
  }, {
    delay: 0.7,
    duration: 0.2,
    frames: getFrames('ani', 50).reverse()
  }],
  // 女孩-帧动画、跑动
  girl: [{
    delay: 0,
    duration: 1,
    frames: getFrames('girl', 62)
  }, {
    delay: 0,
    duration: 0.2,
    from: { y: -window.innerHeight },
    to: { y: window.innerHeight * 0.5 }
  }, {
    delay: 0.7,
    duration: 0.3,
    to: { y: window.innerHeight * 1.2 }
  }],
  // 飞机-帧动画、无限循环播放
  plane: [{
    duration: 2,
    frames: getFrames('plane', 25),
    infinite: true,
    frameRate: 25
  }, {
    delay: 0.8,
    duration: 0.2,
    from: { width: 0, height: 0, alpha: 0 }
  }]
}

const texts = {
  guide: {
    text: '向上滑动，找回童年',
    position: { x: 0.5, y: 0.5 },
    anchor: 'center',
    options: {
      fontFamily: 'Arial',
      fontSize: window.innerWidth / 375 * 18,
      fill: 0xfb833f,
      align: 'center'
    }
  },
  autoplay: {
    text: '自动播放',
    position: { x: 0.8, y: 0.1 },
    anchor: 'center',
    options: {
      fontFamily: 'Arial',
      fontSize: window.innerWidth / 375 * 12,
      align: 'center'
    },
    touch: {
      eventName: 'autoPlay',
      params: 1111
    }
  },
  ad: {
    text: '《从零到一：实现通用一镜到底H5》',
    link: 'https://segmentfault.com/a/1190000017848401',
    position: { x: 0.5, y: 0.88 },
    anchor: 'center',
    options: {
      fontFamily: 'Arial',
      fontSize: window.innerWidth / 375 * 12,
      fill: 0xfb833f,
      align: 'center'
    }
  },
  ad2: {
    text: 'Powerd by: Pixi.js AlloyTouch TweenMax',
    position: { x: 0.5, y: 0.92 },
    anchor: 'center',
    options: {
      fontFamily: 'Arial',
      fontSize: window.innerWidth / 375 * 12,
      fill: 0xfb833f,
      align: 'center'
    }
  },
  ad3: {
    text: 'Produced by VincentPat',
    position: { x: 0.5, y: 0.58 },
    anchor: 'center',
    options: {
      fontFamily: 'Arial',
      fontSize: window.innerWidth / 375 * 14,
      fill: 0xfb833f,
      align: 'center'
    }
  },
  ad4: {
    text: '素材源自互联网，仅供学习交流，请勿商用！',
    position: { x: 0.5, y: 0.70 },
    anchor: 'center',
    options: {
      fontFamily: 'Arial',
      fontSize: window.innerWidth / 375 * 12,
      fill: 0xfb833f,
      align: 'center'
    }
  },
  me: {
    text: '案例代码搬运工: Jeson :)',
    position: { x: 0.5, y: 0.64 },
    anchor: 'center',
    options: {
      fontFamily: 'Arial',
      fontSize: window.innerWidth / 375 * 12,
      align: 'center'
    }
  }
}

// yoyo: true表示时间轴每次重复时交替来回播放
// repeat: 重复次数 -1 表示一直重复.
// ease: 运动曲线.
const textsAnimations = {
  guide: [{
    delay: 0,
    duration: 1,
    from: { y: window.innerHeight * 0.5 },
    to: { yoyo: true, repeat: -1, ease: 'easeOut', y: window.innerHeight * 0.45 }
  }, {
    delay: 0,
    duration: 0.1,
    to: { alpha: 0 }
  }],
  ad: [{
    delay: 0,
    duration: 0.1,
    to: { alpha: 0 }
  }],
  ad2: [{
    delay: 0,
    duration: 0.1,
    to: { alpha: 0 }
  }],
  ad3: [{
    delay: 0.9,
    duration: 0.1,
    from: { alpha: 0, y: window.innerHeight * 0.53 }
  }],
  ad4: [{
    delay: 0.9,
    duration: 0.1,
    from: { alpha: 0, y: window.innerHeight * 0.61 }
  }],
  me: [{
    delay: 0.9,
    duration: 0.1,
    from: { alpha: 0, y: window.innerHeight * 0.57 }
  }]
}

export {
  ani,
  girl,
  items,
  plane,
  sprites,
  spriteAnimations,
  texts,
  textsAnimations
}
