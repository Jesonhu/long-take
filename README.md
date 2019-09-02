# 一镜到底demo

## 主要依赖

+ AlloyTouch -- 滑动手势
+ Pixi.js -- 场景画布，精灵图等处理
+ gsap(TimelineMax、TweenMax) -- 动画时间轴控制

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

PS:
## LongTake事件处理实现不建议在实际项目中实现!!!

问题复现
```js
!(function() {
class EventHandle {
 constructor() {
    this.init();
 }
 init() {
   this._callbacks = {};
 }
 on(name, callback) {
   this._callbacks[name] = this._callbacks[name] || [];
   this._callbacks[name].push(callback);
 }
 off (name, callback) {
   const callbacks = this._callbacks[name];
   if (callbacks && callbacks instanceof Array) {
     const index = callbacks.indexOf(callback);
     console.log(index);
     if (index !== -1) callbacks.splice(index, 1);
   }
 }
 trigger(name, params) {
   const callbacks = this._callbacks[name];
   if (callbacks && callbacks instanceof Array) {
     callbacks.forEach(cb => {
        if (cb && cb instanceof Function) {
            params ? cb(params) : cb();
        }
    })
   }
 }
}


class Hello extends EventHandle {}

const hello = new Hello();

function fn1(params) {
  console.log('fn1', params);
}
function fn2() {
  console.log('fn2');
} 

hello.on('hello', fn1);

hello.on('hello', fn2);
hello.off('hello', fn2);
hello.trigger('hello', '事件处理');
})();
```
只有通过 `fn1` `fn2` 这种方式绑定的事件才能被移除, 像下面两种方式都是无法被移除的
```js
// 方式1：

// 省略其他代码

hello.on('hello', function() {
  // some code
});

hello.on('hello', function() {
  // some another code.
});

// 方式2:
hello.on('hello', function fn1() {
  // some code
});
hello.on('hello', function fn2() {
  // some another code.
});
```
以上两种方式都是无法被 `off()` 掉的，方法1: 直接采取了 `匿名函数` 方式。我们知道匿名函数都不相等(即使函数体代码完全一样), 所以 `方式1` 无法被移除。`方式2` 采取了 `命名函数` ,咋一看好像没问题，但是我们仔细想下 `_callbacks['hello']` 里面保存的是什么呢？答案是 `函数定义`。这样相当于又定义了一次函数，`新定义函数` 与 `旧定义函数` 除了函数名是相同的以外，其他都不一样。类似于函数重复定义之前的函数被覆盖了。因此这也造成了 `indexOf(callback)` 查询不到。所以也会造成事件移除不掉的问题。

总结: 建议不要使用事件处理实现。因为 `坑多(PS: 如果知道这些坑完全避免掉也是可以使用的--囧)`

## 参考资料
+ [从零到一：实现通用一镜到底H5](https://segmentfault.com/a/1190000017848401)
+ [动画四要素-动画目标（target）、起始状态、终点状态、补间效果](https://www.tweenmax.com.cn/api/tweenmax/)
+ [绿袜子中文网](https://www.tweenmax.com.cn)