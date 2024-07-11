---
title: 数字转大写金额
nav:
  title: API
  order: 2
---

# 数字转大写金额

`digitUppercase` 函数提供了将数值金额转换为其汉字大写形式的功能，适用于需要将金额正式表述的财务情境。

### 使用方法

```js
import { digitUppercase } from 'pixiu-number-toolkit';

// 将一个数字转换成其汉字大写形式
const result = digitUppercase(123456789);
console.log(result); // 输出: 壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元整
```

### API

#### `digitUppercase(n: number): string`

- **参数**
  - `n` (`number`) - 要转换的数值金额。
- **返回值** (`string`) - 该金额的汉字大写形式。

### 示例

转换整数：

```jsx
import { digitUppercase } from 'pixiu-number-toolkit';

export default () => digitUppercase(123_456_789);
```

转换带小数点的数值：

```jsx
import { digitUppercase } from 'pixiu-number-toolkit';

export default () => digitUppercase(123.45);
```

转换包含零的数值：

```jsx
import { digitUppercase } from 'pixiu-number-toolkit';

export default () => digitUppercase(120012);
```

转换负数：

```jsx
import { digitUppercase } from 'pixiu-number-toolkit';

export default () => digitUppercase(-123.45);
```

如果你有任何问题或建议，请随时联系我，微信：

![辰火流光](../wx.png)
