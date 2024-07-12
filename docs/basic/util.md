---
title: 工具函数
order: 80
nav:
  title: API
  order: 2
---

# 工具函数

### 使用场景

- 复杂公式的计算：对于需要执行高级数学计算的场景，推荐使用[计算表达式](./compute-expression.md)功能。
- 数据分析与统计：模块中的概率运算函数非常适合进行随机抽样或生成随机数，适用于数据分析及模拟实验。
- 数据比较：关系运算函数帮助快速判断数值大小，适用于条件判断和排序算法。
- 分析和操作数字的整数、小数部分。

### 函数列表

#### 算术运算

- **`add(...values: Array<number | string>): number`**  
  计算所有输入值的和，至少需要两个参数。

  ```jsx
  import { add } from 'pixiu-number-toolkit';

  export default () => add(0.1, 0.2);
  ```

- **`subtract(...values: Array<number | string>): number`**  
  从第一个值中依次减去其余输入值，至少需要两个参数。

  ```jsx
  import { subtract } from 'pixiu-number-toolkit';

  export default () => subtract(0.3, 0.1);
  ```

- **`multiply(...values: Array<number | string>): number`**  
  计算所有输入值的乘积，至少需要两个参数。

  ```jsx
  import { multiply } from 'pixiu-number-toolkit';

  export default () => multiply(3, 4);
  ```

- **`divide(...values: Array<number | string>): number`**  
  从第一个值中依次除以其余输入值，至少需要两个参数。

  ```jsx
  import { divide } from 'pixiu-number-toolkit';

  export default () => divide(9, 3);
  ```

- **`modulo(value: number, divisor: number): number`**  
  返回两数相除的余数。

  ```jsx
  import { modulo } from 'pixiu-number-toolkit';

  export default () => modulo(5, 3);
  ```

- **`round(value: number, decimalPlaces = 0): number`**  
  将值四舍五入到指定的小数位数，默认为最接近的整数。

  ```jsx
  import { round } from 'pixiu-number-toolkit';

  export default () => round(1.23456, 3);
  ```

- **`ceil(value: number): number`**  
  将值向上舍入至最接近的整数。

  ```jsx
  import { ceil } from 'pixiu-number-toolkit';

  export default () => ceil(123.456);
  ```

- **`floor(value: number): number`**  
  将值向下舍入至最接近的整数。

  ```jsx
  import { floor } from 'pixiu-number-toolkit';

  export default () => floor(123.456);
  ```

#### 概率运算

- **`pickRandom(value: any[]): number`**  
  从给定数组中随机选取一个元素，数组中的元素只能是数字或字符串数字。

  ```jsx
  import { pickRandom } from 'pixiu-number-toolkit';

  export default () => pickRandom([1, 22, 333, '4', '55', '666']);
  ```

- **`random(min?: number, max?: number): number`**  
  返回在[min, max]区间内的随机数，若只提供一个参数，则默认范围为[0, 参数值]。

  ```jsx
  import { random } from 'pixiu-number-toolkit';

  export default () => random(0, 10);
  ```

- **`randomInt(min: number, max?: number): number`**  
  返回在[min, max]区间内的随机整数，若只提供 min，则默认范围为[0, min]。

  ```jsx
  import { randomInt } from 'pixiu-number-toolkit';

  export default () => randomInt(0, 10);
  ```

#### 关系运算

- **`equal(x: number | string, y: number | string): boolean`**  
  检查两个值是否相等。

  ```jsx
  import { equal } from 'pixiu-number-toolkit';

  export default () => equal(3, '3').toString();
  ```

- **`unequal(x: number | string, y: number | string): boolean`**  
  检查两个值是否不相等。

  ```jsx
  import { unequal } from 'pixiu-number-toolkit';

  export default () => unequal(3, '3').toString();
  ```

- **`larger(x: number | string, y: number | string): boolean`**  
  检查 x 是否大于 y。

  ```jsx
  import { larger } from 'pixiu-number-toolkit';

  export default () => larger(3, '3').toString();
  ```

- **`largerEq(x: number | string, y: number | string): boolean`**  
  检查 x 是否大于等于 y。

  ```jsx
  import { largerEq } from 'pixiu-number-toolkit';

  export default () => largerEq(3, '3').toString();
  ```

- **`smaller(x: number | string, y: number | string): boolean`**  
  检查 x 是否小于 y。

  ```jsx
  import { smaller } from 'pixiu-number-toolkit';

  export default () => smaller(3, '3').toString();
  ```

- **`smallerEq(x: number | string, y: number | string): boolean`**  
  检查 x 是否小于等于 y。

  ```jsx
  import { smallerEq } from 'pixiu-number-toolkit';

  export default () => smallerEq(3, '3').toString();
  ```

### 整数、小数信息

`getDecimalInfo`函数能够详细解析一个数字，提取出其小数点的位置、整数和小数部分的具体内容以及各自的长度。

#### `getDecimalInfo(value: number, locale?: CurrencyCodeType): DecimalInfo`

- **参数**

  - `value` (`number`) - 输入的数字。
  - `locale` (`CurrencyCodeType`, 可选) - 指定的地区设置，默认为中国(CNY)的小数点“.”，影响小数点的识别。

- **返回值** (`DecimalInfo`) - 包含数字小数信息的对象，具体结构如下：
  - `valueString` (`string`) - 数字的字符串形式。
  - `decimalIndex` (`number`) - 小数点的索引位置。
  - `decimalLength` (`number`) - 小数部分的长度。
  - `integerPart` (`string`) - 整数部分。
  - `decimalPart` (`string`) - 小数部分。
  - `integerLength` (`number`) - 整数部分的长度。

#### 使用方法

```jsx
import { getDecimalInfo } from 'pixiu-number-toolkit';
import { useState, useEffect } from 'react';

export default () => {
  const [decimalInfo, setDecimalInfo] = useState({
    valueString: '',
    decimalIndex: 0,
    decimalLength: 0,
    integerPart: '',
    decimalPart: '',
    integerLength: 0,
  });

  useEffect(() => {
    setDecimalInfo(getDecimalInfo(-1234.56));
  }, []);

  return (
    <div>
      <div>　　　　　原值：{decimalInfo.valueString}</div>
      <div>小数点索引位置：{decimalInfo.decimalIndex}</div>
      <div>　　　整数长度：{decimalInfo.integerLength}</div>
      <div>　　　小数长度：{decimalInfo.decimalLength}</div>
      <div>　整数部分的值：{decimalInfo.integerPart}</div>
      <div>　小数部分的值：{decimalInfo.decimalPart}</div>
    </div>
  );
};
```

### 小数位数

`getDecimalPlaces` 函数用于快速确定一个数字的小数位数，这对于需要调整数字格式或进行特定精度计算的场景非常有用。

#### `getDecimalPlaces(value: number): number`

- **参数**

  - `value` (`number`) - 输入的数字。

- **返回值** (`number`) - 数字的小数位数。

#### 使用方法

```jsx
import { getDecimalPlaces } from 'pixiu-number-toolkit';

export default () => {
  return <div>{getDecimalPlaces(-1234.56)}</div>;
};
```

### 为数字填充零

`padZero`函数允许你在数字的小数部分添加零，以达到统一的精度，这对于财务报表和数据对齐是非常重要的。

#### `padZero(value: number, decimalLength?: number): string`

- **参数**

  - `value` (`number`) - 需要填充的数字。
  - `decimalLength` (`number`, 可选) - 小数位数，如果不指定，则返回原数字字符串。

- **返回值** (`string`) - 填充后的数字字符串。

### 使用方法

```jsx
import { padZero } from 'pixiu-number-toolkit';

export default () => {
  return <div>{padZero(123, 2)}</div>;
};
```

### 注意事项

- 所有函数均要求输入参数为数字或可转换为数字的字符串，否则将抛出 TypeError 异常。
- 加、减、乘、除函数至少需传入两个参数。
- `equal`、`unequal`、`larger`、`largerEq`、`smaller`、`smallerEq`函数返回布尔值，用于数值比较。
- 当使用`padZero`时，如果指定的小数位数少于实际小数位数，函数将不会截断小数部分。

如果你有任何问题或建议，请随时联系我，微信：

![辰火流光](/open_source/pixiu-number-toolkit/wx.png)
