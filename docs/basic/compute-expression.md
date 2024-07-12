---
title: 计算数学表达式
order: 50
nav:
  title: API
  order: 2
---

# 计算数学表达式

`computeExpression`函数提供了计算数学表达式的能力，支持参数化计算、自定义小数位数以及千位分隔符的显示选项，适用于各种数学和财务计算场景。

### 解决 JavaScript 浮点数精度丢失问题

在 JavaScript 中，由于其内部使用 IEEE 754 双精度浮点数标准来表示数字，这可能导致在进行数学运算时出现精度丢失的问题。例如，`0.1 + 0.2`的结果在 JavaScript 中并不是精确的`0.3`，而是`0.30000000000000004`。这是因为`0.1`和`0.2`这样的十进制小数无法用二进制精确表示。

为了解决这个问题，`pixiu-number-toolkit`库中的`computeExpression`函数采用了一种策略，即在计算前将所有的浮点数转换为`BigInt`类型的高精度数值，然后再进行计算，最后再转换回浮点数或字符串格式输出。这种方法可以有效避免因二进制表示带来的精度误差。

#### 使用建议

对于需要高精度计算的应用场景，推荐使用`computeExpression`函数来代替直接的 JavaScript 算术运算，以避免可能出现的精度丢失问题。无论是基本的算术表达式，还是包含变量的复杂公式，`computeExpression`都能提供准确可靠的计算结果。

### 使用方法

```js
import { computeExpression } from 'pixiu-number-toolkit';

// 计算一个数学表达式
const result = computeExpression('1 + 2 * 3', {
  decimalPlaces: 2,
  useThousandSeparator: true,
});
console.log(result); // 输出: '7.00'
```

### API

#### `computeExpression(formula: string, options?: ComputeExpressionOptions): string`

- **参数**
  - `formula` (`string`) - 待计算的数学表达式。
  - `options` (`ComputeExpressionOptions`, 可选) - 配置对象，包含以下可选字段：
    - `parameters` (`NumberDictionary`, 可选) - 参数字典，用于表达式中的变量替换。
    - `decimalPlaces` (`number`, 可选) - 小数位数，用于控制结果的精度。
    - `useThousandSeparator` (`boolean`, 可选) - 是否使用千位分隔符。
- **返回值** (`string`) - 计算后的结果，格式化为字符串。

### 示例

- 基本计算无参数：

  ```jsx
  import { computeExpression } from 'pixiu-number-toolkit';

  const a = 1,
    b = 2,
    c = 3;

  export default () => computeExpression(`${a} + ${b} * ${c}`);
  ```

- 参数化计算：

  ```jsx
  import { computeExpression } from 'pixiu-number-toolkit';

  export default () =>
    computeExpression('x + y', { parameters: { x: 1, y: 2 } });
  ```

- 自定义小数位数：

  ```jsx
  import { computeExpression } from 'pixiu-number-toolkit';

  export default () => computeExpression('1 / 3', { decimalPlaces: 2 });
  ```

- 使用千位分隔符：

  ```jsx
  import { computeExpression } from 'pixiu-number-toolkit';

  export default () =>
    computeExpression('1000000 + 2000000', { useThousandSeparator: true });
  ```

- 结合小数位数和千位分隔符：

  ```jsx
  import { computeExpression } from 'pixiu-number-toolkit';

  export default () =>
    computeExpression('1000000 + 2000000', {
      decimalPlaces: 2,
      useThousandSeparator: true,
    });
  ```

### 注意事项

- 表达式中的变量必须在`parameters`中声明，否则将抛出错误。
- 小数位数默认为表达式计算结果的小数位数，设置`decimalPlaces`可强制指定。
- 千位分隔符默认不启用，开启后将按国际通用规则添加分隔符。

如果你有任何问题或建议，请随时联系我，微信：

![辰火流光](/open_source/pixiu-number-toolkit/wx.png)
