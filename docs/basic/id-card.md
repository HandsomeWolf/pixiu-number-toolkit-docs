---
title: 解析中国身份证信息
order: 60
nav:
  title: API
  order: 2
---

# 解析中国身份证信息

`parseIdCard`函数提供了对中国居民身份证号的解析能力，能够提取出生日期、性别及所属地区信息，并验证身份证号的有效性。这在身份验证、人口统计分析及各类用户信息处理场景中极为有用。

### 功能概览

- **有效性检查**：自动验证输入的身份证号是否符合中国身份证号码的标准格式和校验算法。
- **信息解析**：从身份证号中解析出归属地区、出生日期和性别信息。
- **标准化输出**：返回一个结构化的`IdCardInfo`对象，包含详细的解析结果。

### 使用方法

```js
import { parseIdCard } from 'pixiu-number-toolkit';

// 解析身份证信息
const idCardInfo = parseIdCard('110105197208108139');
console.log(idCardInfo); // 输出: { region: '110105', birthDate: '1972-08-10', gender: '男', valid: true }
```

### API

#### `parseIdCard(id: string): IdCardInfo`

- **参数**

  - `id` (`string`) - 待解析的身份证号码。

- **返回值** (`IdCardInfo`) - 包含身份证信息的对象，具体结构如下：
  - `region` (`string`) - 身份证归属的地区代码。
  - `birthDate` (`string`) - 出生日期，格式为`YYYY-MM-DD`。
  - `gender` (`string`) - 性别，返回`男`或`女`。
  - `valid` (`boolean`) - 身份证号码是否有效。

### 示例

#### 解析有效身份证号

```jsx
import { parseIdCard } from 'pixiu-number-toolkit';
import { useState, useEffect } from 'react';

export default () => {
  const [idCardInfo, setIdCardInfo] = useState({
    region: '',
    birthDate: '',
    gender: '',
    valid: false,
  });

  useEffect(() => {
    setIdCardInfo(parseIdCard('110105197208108139'));
  }, []);

  return (
    <div>
      <div>归属地区：{idCardInfo.region}</div>
      <div>出生日期：{idCardInfo.birthDate}</div>
      <div>　　性别：{idCardInfo.gender}</div>
      <div>是否有效：{idCardInfo.valid.toString()}</div>
    </div>
  );
};
```

#### 解析无效身份证号

```jsx
import { parseIdCard } from 'pixiu-number-toolkit';
import { useState, useEffect } from 'react';

export default () => {
  const [idCardInfo, setIdCardInfo] = useState({
    region: '',
    birthDate: '',
    gender: '',
    valid: false,
  });

  useEffect(() => {
    setIdCardInfo(parseIdCard('11010119900307861X'));
  }, []);

  return (
    <div>
      <div>归属地区：{idCardInfo.region}</div>
      <div>出生日期：{idCardInfo.birthDate}</div>
      <div>　　性别：{idCardInfo.gender}</div>
      <div>是否有效：{idCardInfo.valid.toString()}</div>
    </div>
  );
};
```

### 注意事项

- 输入的身份证号必须为 18 位，且符合中国身份证号码的格式要求。
- 地区代码`region`目前仅返回原始的 6 位地区代码，未提供地区名称解析。
- 身份证号的校验依赖于内置的校验逻辑，对于一些特殊情况（如早期发放的 15 位身份证号），可能需要额外处理。

如果你有任何问题或建议，请随时联系我，微信：

![辰火流光](/open_source/pixiu-number-toolkit/wx.png)
