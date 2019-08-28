<template>
  <div class="timeline-max">
    <div class="demo demo1" ref="demo1">demo1</div>
    <div class="demo demo2" ref="demo2">demo2</div>
    <div class="demo demo3" ref="demo3">demo3</div>
    <div class="demo demo4" ref="demo4">demo4</div>
    <div class="demo demo5" ref="demo5">demo5</div>

    <button @click="handleTimelineRestart">重新播放</button>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap/TweenMax'
import { delay } from 'q';

export default {
  name: 'TimelineMax',
  data() {
    return {
      timeline: null
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initTimeline2()
    },
    /** 创建多个时间轴方式实现. */
    initTimeline1() {
      this.timeline = new TimelineMax();
      const vEls = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5'];
      const aniMap = {
        ani1: {
          target: '.demo1',
          duration: 1,
          delay: 0,
          from: { x: 0 },
          to: { x: 100 }
        },
        ani2: {
          target: '.demo2',
          duration: 1,
          delay: 1,
          from: { x: 0 },
          to: { x: 200 }
        },
        ani3: {
          target: '.demo3',
          duration: 2,
          delay: 1,
          from: { x: 0 },
          to: { x: 300 }
        },
      }
      const timeline1 = new TimelineMax({ delay: aniMap.ani1.delay, easy: Bounce.easeOut});
      const ani1 = TweenMax.fromTo(aniMap.ani1.target, aniMap.ani1.duration, aniMap.ani1.from, aniMap.ani1.to);
      timeline1.add(ani1, 0);

      const timeline2 = new TimelineMax({ delay: aniMap.ani2.delay });
      const ani2 = TweenMax.fromTo(aniMap.ani2.target, aniMap.ani2.duration, aniMap.ani2.from, aniMap.ani2.to);
      timeline2.add(ani2, 0);

      const animateGroup = [timeline1, timeline2];
      this.timeline.add(animateGroup);
    },
    /** staggerTo 方式实现 */
    initTimeline2() {
      let _index = 0;
      const options = {
        target: '.demo',
        duration: 1,
        delay: 1,
        to: {
          rotation: 360,
          x: function(index, target) {
            console.log(index, target);
            _index++;
            return _index * 100

          }
        }
      }
      const timeMax = TweenMax.staggerTo(options.target, options.duration, options.to, options.delay);
      // console.log(timeMax);

      this.timeline = new TimelineMax();
      this.timeline.add(timeMax, 0);
    },
    handleTimelineRestart() {
      this.timeline.restart();
    }
  }
}
</script>

<style>
.demo {
  width: 100px;
  height: 100px;
  background: green;
  color:#000;
  text-align: center;
  line-height: 100px;
  font-size: 14px;
}
</style>