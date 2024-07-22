---
title: 数字过渡
order: 40
nav:
  title: API
  order: 2
---

# 数字过渡

`animateNumericCount` 函数用于在给定时间内从一个数值平滑过渡到另一个数值，常用于创建动态计数器、数据可视化中的数值变化等动画效果。

#### 函数定义

```javascript
function animateNumericCount(
  startValue,
  endValue,
  duration,
  stepCallback,
  onComplete,
) {
  // 功能实现...
}
```

#### 参数说明

- `startValue` (Number): 动画开始时的数值。
- `endValue` (Number): 动画结束时的目标数值。
- `duration` (Number): 动画的总持续时间（单位：毫秒）。
- `stepCallback` (Function): 每次更新数值时调用的回调函数，接收当前数值作为参数。

#### 返回值

此函数没有返回值。

#### 使用示例

```javascript
// 定义一个简单的计数器动画
animateNumericCount(0, 100, 2000, function (value) {
  console.log(value); // 输出当前数值
});
```

#### 注意事项

- 确保`duration`参数足够长以确保数值变化平滑，避免过短导致的闪烁或不连续感。
- 如果`endValue`与`startValue`相同，`animateNumericCount`将不会执行任何操作。

#### 高级用法

`animateNumericCount`可以结合 CSS 样式来创建更复杂的视觉效果，例如改变元素的宽度、高度或透明度。也可以通过调整`stepCallback`函数中的逻辑，实现数值的格式化显示，如添加千位分隔符、货币符号等。

### 示例

转换整数：

```jsx
import { useEffect, useState } from 'react';
import { animateNumericCount } from 'pixiu-number-toolkit';

const CounterComponent = () => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    animateNumericCount(0, 1234, 3500, (value) => {
      setCurrentValue(value);
    });
  }, []);

  return (
    <div>
      <h1>当前值: {currentValue}</h1>
      <button
        onClick={() =>
          animateNumericCount(0, 1234, 3500, (value) => setCurrentValue(value))
        }
      >
        重置
      </button>
    </div>
  );
};

export default CounterComponent;
```

```tsx
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { RollerNumber } from 'pixiu-number-toolkit/src/animation/rollerNumber'; // 确保路径正确

interface RollerNumber {
  initialValue?: number;
  digitHeight?: number;
  animationDuration?: number;
}

// 函数式组件
const RollerNumberDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const count = useRef<number>(123);
  const timer = useRef<number | null>(null);

  // 初始化 RollerNumber 实例
  useEffect(() => {
    if (containerRef.current) {
      const newRollerNumber = new RollerNumber(
        containerRef.current,
        count.current,
        40,
      );
      timer.current = setInterval(() => {
        newRollerNumber.setValue((count.current += 0.4));
      }, 2000);
    }
  }, []);

  // // 处理值变化
  // const handleValueChange = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const newValue = parseInt(event.target.value, 10);
  //     setInputValue(newValue);
  //     updateRollerNumber(newValue);
  //   },
  //   [updateRollerNumber],
  // );

  // // 处理动画持续时间变化
  // const handleDurationChange = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const newDuration = parseInt(event.target.value, 10);
  //     setAnimationDuration(newDuration);
  //     updateAnimationDuration(newDuration);
  //   },
  //   [updateAnimationDuration],
  // );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>RollerNumber Demo</h2>
      <div style={{ marginBottom: '20px' }}>
        <div
          ref={containerRef}
          style={{ fontSize: '24px', marginBottom: '10px' }}
        />
      </div>
    </div>
  );
};

export default RollerNumberDemo;
```

如果你有任何问题或建议，请随时联系我，微信：

![辰火流光](/open_source/pixiu-number-toolkit/wx.png)
