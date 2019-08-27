import * as PIXI from 'pixi.js';
import { TweenMax, TimelineMax } from 'gsap/TweenMax';
import AlloyTouch from 'alloytouch';

const EVENT_NAME_MAP = {
  /** 加载进度条 */
  loadProgress: 'loadProgress',
  /** 加载完成 */
  loadDone: 'loadDone'
}

/** 背景颜色 */
const BG_COLOR = 0xfdfbe2;

/**
 * 一镜到底功能.
 * 
 * @create 2019/08/23
 * @update 2019/08/26
 * @libs [ pixi.js、AlloyTouch、 gsap.TweenMax、gsap.TimelineMax ]
 */
class LongTake {
  constructor(options) {
    this.init(options);
  }

  init(options) {
    this.initData(options);
    this.initScene();
  }

  initData(options) {
    /** 库 */
    this.lib = [ PIXI, TweenMax, TimelineMax, AlloyTouch ];

    /** 默认配置 */
    this.defaultOptions = {
      container: document.body,
      width: window.innerWidth,
      height: window.innerHeight,
      resource: { sprites: [] },
      spritesAnimations: {},
      textsAnimations: {},
      autoLoad: true
    }
    /** 配置 */
    this.options = Object.assign({}, this.defaultOptions, options);
    /** 容器 */
    this.container = this.options.container;
    /** 宽度 */
    this.width = this.options.width;
    /** 高度 */
    this.height = this.options.height;
    /** 资源 */
    this.resource = this.options.resource;
    /** 自动加载 */
    this.autoLoad = this.options.autoLoad;
    /** 精灵集合 */
    this.sprites = {};
    /** 精灵动画合集 */
    this.spritesAnimations = this.options.spritesAnimations;
    /** 文本集合 */
    this.texts = {};
    /** 文本动画合集 */
    this.textsAnimations = this.options.textsAnimations;
    /** 回调函数集合 */
    this.callbacks = { loadProgress: [] };
    /** 定时器集合 */
    this.aniIntervals = [];
    /** 事件名集合 */
    this.eventNameMap = EVENT_NAME_MAP;
  }

  /** 初始化场景 */
  initScene() {
    const { width, height, options } = this;
    // @see https://github.com/pixijs/pixi.js#basic-usage-example
    // @see http://pixijs.download/release/docs/PIXI.Application.html
    this.app = new PIXI.Application({
      resolution: 1,
      transparent: true,
      width: width,
      height: height
    });
    // 加入场景
    this.container.appendChild(this.app.view);
    // 如果需要则自动开始加载
    if (this.autoLoad) this.load();
  }

  // =====================================================================
  // 背景相关
  // =====================================================================
  /** 背景初始化 */
  initBg() {
    const bgColor = BG_COLOR;
    // 创建背景.
    this.bg = new PIXI.Graphics();
    this.bg.beginFill(bgColor);
    this.bg.drawRect(0, 0, this.app.screen.width, this.app.screen.height * 3);
    this.bg.endFill();
    this.bg.x = 0;
    this.bg.y = 0;
    this.app.stage.addChild(this.bg);
    // 设置滚动高度.
    this.scrollHeight = this.bg.height - this.height;
  }

  // =====================================================================
  // 文字相关
  // =====================================================================
  /** 文字初始化 */
  initTexts() {
    if (typeof this.options.texts === 'object') {
      Object.keys(this.options.texts).forEach(key => {
        // 创建.
        const textOptions = this.options.texts[key];
        const text = new PIXI.Text(textOptions.text, textOptions.options);
        // 设置属性.
        this.setAnchor(text, textOptions.anchor);
        this.setPosition(text, textOptions.position);
        // 设置点击事件.
        if (textOptions.link) {
          text.interactive = true;
          text.on('tap', (e) => {
            location.href = textOptions.link;
          })
        }
        
        // 加入场景.
        this.app.stage.addChild(text);
        this.texts[key] = text;
      })
    }
  }


  initTouch() {

  }
  
  // =====================================================================
  // 加载资源
  // =====================================================================
  /**
   * 加载资源.
   */
  load() {
    // 加载资源
    const loader = PIXI.Loader.shared;
    loader
      .add(this.resource.sprites)
      .on('progress', this.loadProgress.bind(this))
      .load(this.loadDone.bind(this));
  }

  /** 加载进度条. */
  loadProgress(loader) {
    const { loadProgress } = this.eventNameMap;
    this.trigger(loadProgress, loader.progress);
  }

  /** 加载完成. */
  loadDone() {
    // 1. 初始化背景
    // 2. 初始化文字
    // 3. 初始化精灵图.
    this.initBg();
    this.initTexts();
    // this.initSprites();
    // this.initTimeLine();
  }

  // =====================================================================
  // 加载
  // =====================================================================
  /**
   * 监听事件.
   * @param {string} name 事件名.
   * @param {object} callback 
   */
  on(name, callback) {
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(callback);
  }

  /**
   * 移除事件监听.
   *
   * @param {*} name
   * @param {*} callback
   * @date 2019-08-26
   */
  off(name, callback) {
    const callbacks = this.callbacks[name];
    if ( callbacks && callbacks instanceof Array ) {
      const index = callbacks.indexOf(callback);
      // 有对应的事件则移除.
      if (index !== -1) callbacks.splice(index, 1);
    }
  }

  /**
   * 触发事件.
   * 
   * @param {string} name 事件名.
   * @param {any}    params  传递给事件的参数
   */
  trigger(name, params) {
    const callbacks = this.callbacks[name];
    if ( callbacks && callbacks instanceof Array ) {
      // 执行回调.
      callbacks.forEach(cb => {
        cb(params);
      })
    }
  }

  // =====================================================================
  // 精灵相关.
  // =====================================================================
  /** 初始化精灵. */
  initSprites() {
    if (typeof this.options.sprites === 'object') {
      Object.keys(this.options.sprites).forEach(key => {
        // 创建
        const options = this.options.sprites[key];
        // deprecated — since 5.0.0
        // const sprite = new PIXI.Sprite(PIXI.loader.resources[options.key].texture);
        const sprite = new PIXI.Sprite(PIXI.Loader.shared.resources[options.key].texture);
        // 设置属性
        this.setSize(sprite, options.size);
        this.setAnchor(sprite, options.anchor);
        this.setPosition(sprite, options.position);
        // 加入场景.
        this.app.stage.addChild(sprite);
        this.sprites[key] = sprite;
      });
    }
  }

  // =====================================================================
  // 通用属性设置.
  // =====================================================================
  /** 设置尺寸 */
  setSize(obj, size) {
    if (size.mode === 'widthFit') { // 按宽度适应.
      const scale = this.app.screen.width * size.width / obj.width;
      obj.scale.x = scale;
      obj.scale.y = scale;
    } else if (size.mode === 'heightFit') { // 按高度适应.
      const scale = this.app.screen.height * size.height / obj.height;
      obj.scale.x = scale;
      obj.scale.y = scale;
    } else { // 自定义.
      obj.width = size.width;
      obj.height = size.height;
    }
  }
  
  /**
   * 设置锚点(文本的原点).
   * 
   * @param {object} obj
   * @param {string|object} anchor
   */
  setAnchor(obj, anchor) {
    if (typeof anchor === 'string') {
      anchor = this.positionMap(anchor);
    }
    obj.anchor.x = anchor.x;
    obj.anchor.y = anchor.y;
  }

  /**
   * 设置位置.
   * 
   * @param {object} obj
   * @param {string|object} position
   */
  setPosition(obj, position) {
    if (typeof position === 'string') {
      position = this.positionMap(position);
    }
    obj.position.x = position.x * this.app.screen.width;
    obj.position.y = position.y * this.app.screen.height;
  }

  /** 
   * 位置转换.
   * 
   * @param {string} type 类型.
   */
  positionMap(type) {
    const map = {
      top: { x: 0.5, y: 0 },
      right: { x: 1, y: 0.5 },
      bottom: { x: 0.5, y: 1 },
      left: { x: 0, y: 0.5 },
      topLeft: { x: 0, y: 0 },
      topRight: { x: 1, y: 0 },
      bottomLeft: { x: 0, y: 1 },
      bottomRight: { x: 1, y: 1 },
      center: { x: 0.5, y: 0.5 }
    }
    return map[type] || { x: 0, y: 0 }
  }

  // =====================================================================
  // 进度相关.
  // =====================================================================
  initTimeLine() {
    /** 是否自动播放 */
    const paused = true;
    this.timeline = new TimelineMax({
      paused: paused
    })

    // 设置精灵动画
    Object.keys(this.spritesAnimations).forEach(key => {
      this.setAnimation(this.sprites[key], this.spritesAnimations[key]);
    });

    // 设置文本动画
    Object.keys(this.textsAnimations).forEach(key => {
      this.setAnimation(this.text[key], this.textsAnimations[key]);
    });

    // 背景动画.
    const bgAction = TweenMax.fromTo(this.bg, 1, { y: 0 }, { y: -this.scrollHeight });
    const bgTimeline = new TimelineMax();
    bgTimeline.add(bgAction, 0);
    this.timeline.add(bgTimeline, 0);
  }

  /** 动画对象 */
  setAnimation(obj, animations) {
    // TODO: 需要进一步理解代码.
    if (obj && animations && animations instanceof Array) {
      animations.forEach(({ from, to, frames, infinite, frameRate, delay = 0, duration = 1 }) => {
        if (frames) { // 帧动画
          if (infinite) { // 无限
            obj.frames = frames
            obj.currentFrame = 0
            this.aniIntervals.push(setInterval(() => {
              obj.currentFrame += 1
              if (obj.currentFrame >= obj.frames.length) obj.currentFrame = 0
              const frame = obj.frames[obj.currentFrame]
              obj.texture = PIXI.loader.resources[frame].texture
            }, duration * 1000 / frameRate))
          } else {
            this.on('progress', (progress) => {
              const frameProgress = (progress - delay) / duration
              let index = Math.floor(frameProgress * frames.length)
              if (index < frames.length && index >= 0) {
                const frame = frames[index]
                obj.texture = PIXI.loader.resources[frame].texture
              }
            })
          }
        } else if (from || to) { // 过渡动画
          let action
          if (from && to) {
            action = TweenMax.fromTo(obj, duration, from, to)
          } else if (to) {
            action = TweenMax.to(obj, duration, to)
          } else if (from) {
            action = TweenMax.from(obj, duration, from)
          }
          const timeline = new TimelineMax({ delay })
          timeline.add(action, 0)
          timeline.play()
          if (!(to && to.repeat === -1)) {
            this.timeline.add(timeline, 0)
          }
        }
      })
    }
  }

  /** 销毁(周期) */
  destroy() {

  }
}

export default LongTake;