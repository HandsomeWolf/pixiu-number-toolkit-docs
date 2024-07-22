---
title: 数字转中文文字
order: 30
nav:
  title: API
  order: 2
---

# 数字转中文文字

`numberToChineseCharacter` 函数提供了将数字转换为中文的大写文字形式，适用于需要将数字以中文文字形式展示的场合。

### 使用方法

```js
import { numberToChineseCharacter } from 'pixiu-number-toolkit';

// 将一个数字转换成其汉字形式
const result = numberToChineseCharacter(123456789);
console.log(result); // 输出: 一亿二千三百四十五万六千七百八十九
```

### API

#### `numberToChineseCharacter(number_: number): string`

- **参数**
  - `number_` (`number`) - 要转换的数值。
- **返回值** (`string`) - 该数值的汉字大写形式。

### 示例

- 转换四位数以下的数字：

  ```jsx
  import { numberToChineseCharacter } from 'pixiu-number-toolkit';

  export default () => numberToChineseCharacter(1234);
  ```

- 转换包含零的数字：

  ```jsx
  import { numberToChineseCharacter } from 'pixiu-number-toolkit';

  export default () => numberToChineseCharacter(120012);
  ```

- 转换超过四位数的数字（包括万级）：

  ```jsx
  import { numberToChineseCharacter } from 'pixiu-number-toolkit';

  export default () => numberToChineseCharacter(12345678);
  ```

- 转换超过八位数的数字（包括亿级）：

  ```jsx
  import { numberToChineseCharacter } from 'pixiu-number-toolkit';

  export default () => numberToChineseCharacter(1234567890);
  ```

- 特殊情况处理：数字 0

  ```jsx
  import { numberToChineseCharacter } from 'pixiu-number-toolkit';

  export default () => numberToChineseCharacter(0);
  ```

如果你有任何问题或建议，请随时联系我，微信：

![辰火流光](/open_source/pixiu-number-toolkit/wx.png)
