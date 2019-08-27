<template>
  <div class="home page-home">
  </div>
</template>

<script>
import LongTake from '@/utils/LongTake';
// 资源定义
import { 
  ani, girl, items, plane, sprites, spriteAnimations, 
  texts, textsAnimations 
} from '@/assets/assets-map';

export default {
  name: 'home',
  components: {
  },
  computed: {
    assetsSprites() {
      return sprites;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initLongTake();
    },
    initLongTake() {
      const longTake = new LongTake({
        container: this.$el,
        resource: this.getResource(),
        sprites: this.getSprites(),
        spritesAnimations: this.getSpritesAnimations(),
        texts: this.getTexts(),
        textsAnimations: this.getTextsAnimations(),
        touchOptions: {
          touch: '.home', // 反馈触摸dom
          value: 0, // 起始位置
          sensitivity: 0.5, // 不必需，触摸区域的灵敏度
          maxSpeed: 0.5 // 不必需，触摸反馈的最大速度限制
        }
      });
      longTake.on('autoPlay', function(params) {
        // console.log('自动播放点击', longTake.progress);
        const value = (longTake.progress + 0.05) * Math.abs(longTake.alloyTouch.max - longTake.alloyTouch.min);
        console.log(value);
        longTake.timeline.play();
        // longTake.alloyTouch.to(value, 5000);
      });
      longTake.on('timelineStart', function() {
        console.log('时间轴开始播放');
      });
      longTake.on('timelineComplete', function() {
        console.log('时间轴播放完');
      });
    },
    getResource() {
      const resources = { sprites: [] };
      // resources.sprites.push(ani, girl, items, plane);
      // Tips: this demo ant girl items plane type is Array. so must be use concat()。
      resources.sprites = [].concat(ani, girl, items, plane);
      return resources;
    },
    /** 获取精灵图. */
    getSprites() {
      // 避免同名变量的冲突并深拷贝.
      const sprites = JSON.parse(JSON.stringify(this.assetsSprites));

      // item 设置
      for (let i = 1; i < 8; i += 1) {
        const x = i % 2 === 0 ? 1.1 : -0.1
        sprites[`item${i}`] = {
          key: `item${i}`,
          size: { mode: 'widthFit', width: 0.8 },
          position: { x, y: 1.4 },
          anchor: 'center'
        }
      }

      return sprites;
    },
    /** 获取精灵动画 */
    getSpritesAnimations() {
      const animations = spriteAnimations;
      
      // 物品动画.
      for (let i = 1; i < 8; i += 1) {
        const delay = 0.25 + (i / 7 * 0.2)
        const x = i % 2 === 0 ? window.innerWidth * 0.65 : window.innerWidth * 0.35
        animations[`item${i}`] = [{
          delay,
          duration: 0.2,
          to: { x, y: -window.innerHeight * 0.2, width: 0, height: 0 }
        }, {
          duration: 0.5 + Math.random(),
          to: { yoyo: true, repeat: -1, rotation: 0.1 }
        }]
      }

      return animations;
    },
    /** 背景获取 */
    getBgSprites() {
    },
    /** 获取文本 */
    getTexts() {
      // Tips: 这里获取的是本地资源配置的文本，也可以通过接口获取远程资源.
      return texts;
    },
    /** 获取文本动画 */
    getTextsAnimations() {
      return textsAnimations
    }
  }
}
</script>

<style>
.page-home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-size: 0;
}
.page-home canvas {
  width: 100%;
  height: 100%;
}
</style>
