---
title: 数字、大写金额互转
order: 20
nav:
  title: API
  order: 2
---

# 数字转大写金额

`numberToChineseUppercaseCurrency` 函数提供了将数值金额转换为其汉字大写形式的功能，适用于需要将金额正式表述的财务情境。

### 使用方法

```js
import { numberToChineseUppercaseCurrency } from 'pixiu-number-toolkit';

// 将一个数字转换成其汉字大写形式
const result = numberToChineseUppercaseCurrency(123456789);
console.log(result); // 输出: 壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元整
```

### API

#### `numberToChineseUppercaseCurrency(n: number): string`

- **参数**
  - `n` (`number`) - 要转换的数值金额。
- **返回值** (`string`) - 该金额的汉字大写形式。

### 示例

转换整数：

```jsx
import { numberToChineseUppercaseCurrency } from 'pixiu-number-toolkit';

export default () => numberToChineseUppercaseCurrency(123_456_789);
```

转换带小数点的数值：

```jsx
import { numberToChineseUppercaseCurrency } from 'pixiu-number-toolkit';

export default () => numberToChineseUppercaseCurrency(123.45);
```

转换包含零的数值：

```jsx
import { numberToChineseUppercaseCurrency } from 'pixiu-number-toolkit';

export default () => numberToChineseUppercaseCurrency(120012);
```

转换负数：

```jsx
import { numberToChineseUppercaseCurrency } from 'pixiu-number-toolkit';

export default () => numberToChineseUppercaseCurrency(-123.45);
```

为了将大写金额转换回数字，我们新增了一个函数 `chineseUppercaseCurrencyToNumber`，这个函数接收一个字符串参数，该字符串为汉字大写金额，然后将其转换为数值。下面是这个功能的开发文档：

---

# 大写金额转数字

`chineseUppercaseCurrencyToNumber` 函数提供了将汉字大写金额转换为数值的功能，适用于需要从大写金额字符串中提取数值的场景。

### 使用方法

```js
import { chineseUppercaseCurrencyToNumber } from 'pixiu-number-toolkit';

// 将大写金额字符串转换成数值
const result = chineseUppercaseCurrencyToNumber(
  '壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元整',
);
console.log(result); // 输出: 123456789
```

### API

#### `chineseUppercaseCurrencyToNumber(s: string): number`

- **参数**
  - `s` (`string`) - 汉字大写金额字符串。
- **返回值** (`number`) - 对应的数值金额。

### 示例

转换包含万和亿的大写金额：

```jsx
import { chineseUppercaseCurrencyToNumber } from 'pixiu-number-toolkit';

export default () => chineseUppercaseCurrencyToNumber('壹拾贰万零壹拾贰元整');
```

转换包含角分的大写金额：

```jsx
import { chineseUppercaseCurrencyToNumber } from 'pixiu-number-toolkit';

export default () =>
  chineseUppercaseCurrencyToNumber('壹万叁仟肆佰伍拾陆元柒角捌分');
```

转换包含零的大写金额：

```jsx
import { chineseUppercaseCurrencyToNumber } from 'pixiu-number-toolkit';

export default () =>
  chineseUppercaseCurrencyToNumber('玖亿捌仟柒佰陆拾伍万元整');
```

转换负数大写金额：

```jsx
import { chineseUppercaseCurrencyToNumber } from 'pixiu-number-toolkit';

export default () =>
  chineseUppercaseCurrencyToNumber('欠玖亿捌仟柒佰陆拾伍万元整');
```

如果你有任何问题或建议，请随时联系我，微信：

![辰火流光](/open_source/pixiu-number-toolkit/wx.png)
