---
title: 常用正则
nav:
  title: API
  order: 2
---

# 常用正则

### 概述

本模块提供了一系列预定义的正则表达式，用于验证和匹配各种数据类型和格式，旨在简化前端和后端的数据验证流程。无论是基本的数字、字符串验证，还是复杂的身份证、车牌号识别，这些正则表达式都能提供强大的支持。

### 模块

- `REGEX`: 预定义的正则表达式集合。
- `buildRegex`: 动态构建正则表达式的辅助函数，可根据需求调整匹配模式。

### 使用说明

#### 引入模块

在你的项目中引入正则表达式：

```javascript
import { REGEX, buildRegex } from 'pixiu-number-toolkit';
```

#### 使用预定义的正则表达式

直接使用`REGEX`对象中的预定义正则表达式进行数据验证或提取：

```javascript
const isEmailValid = REGEX.EMAIL.test(email);
const matchesChineseName = REGEX.CHINESE_NAME.test(name);
```

#### 动态构建正则表达式

使用`buildRegex`函数可以根据特定需求动态调整正则表达式的匹配行为：

```javascript
const strictEmailRegex = buildRegex(REGEX.EMAIL, { strict: true });
const emailMatch = strictEmailRegex.test('example@domain.com');
```

### 预定义正则表达式列表

- **THOUSAND_SEPARATED_NUMBER**: 千分位分隔的数字。
- **NUMBER**: 基础数字，包括正数、负数和小数。
- **INTEGER**: 整数，包括正整数、负整数和零。
- **POSITIVE_INTEGER**: 正整数。
- **NEGATIVE_INTEGER**: 负整数。
- **NON_POSITIVE_INTEGER**: 非正整数（包括负数和零）。
- **FLOAT**: 浮点数。
- **POSITIVE_FLOAT**: 正浮点数。
- **NEGATIVE_FLOAT**: 负浮点数。
- **NON_POSITIVE_FLOAT**: 非正浮点数（包括负数和零）。
- **NON_NEGATIVE_FLOAT**: 非负浮点数（包括正数和零）。
- **NUMBER_CURRENCY**: 数字/货币金额，支持负数和千分位分隔符。
- **CHINESE_POSTAL_CODE**: 中国邮政编码。
- **CHINESE_MOBILE**: 中国手机号。
- **CHINESE_TEL**: 中国固定电话号码。
- **CHINESE_BANK_CARD**: 中国银行卡号。
- **CHINESE_TAX_NUMBER**: 中国税号。
- **DECIMAL_SCIENTIFIC_NOTATION**: 十进制数，支持科学记数法。
- **BLANK**: 空白字符串。
- **NON_SPECIAL_CHARACTERS**: 非特殊字符。
- **EMOJI**: 表情符号。
- **EMAIL**: 电子邮箱地址。
- **IP_ADDRESS**: IP 地址。
- **IPV4**: IPv4 地址。
- **SUBNET_MASK**: 子网掩码。
- **MAC_ADDRESS**: MAC 地址。
- **URL**: 网址。
- **CHINESE**: 简体中文。
- **CHINESE_NAME**: 中文姓名。
- **CHINESE_ID_CARD_1**: 一代身份证号。
- **CHINESE_ID_CARD_2**: 二代身份证号。
- **CHINESE_ID_CARD**: 综合身份证号验证。
- **UNIFIED_SOCIAL_CREDIT_IDENTIFIER**: 统一社会信用代码。
- **LOOSE_UNIFIED_SOCIAL_CREDIT_IDENTIFIER**: 宽松的统一社会信用代码。
- **NEW_ENERGY_LICENSE_PLATE**: 新能源车牌号。
- **NON_NEW_ENERGY_LICENSE_PLATE**: 非新能源车牌号。
- **COMBINED_LICENSE_PLATE**: 联合车牌号验证。
- **ACCOUNT**: 账户名，以字母开头，允许字母、数字和下划线。
- **CHINESE_CHARACTERS**: 中文字符，包括繁体。
- **HEX_COLOR**: 十六进制颜色。
- **ENGLISH_LETTER**: 英文字母。
- **LOWERCASE_ENGLISH_LETTER**: 小写英文字母。
- **UPPERCASE_ENGLISH_LETTER**: 大写英文字母。

### 动态构建正则表达式函数

`buildRegex`函数接受一个基础正则表达式和一个配置对象，返回一个新的正则表达式实例，其中配置对象可以设置以下属性：

- `strict` (布尔值): 是否进行严格匹配（即整个字符串必须完全匹配正则表达式）。
- `global` (布尔值): 是否进行全局搜索。
- `ignoreCase` (布尔值): 是否忽略大小写。
- `multiLine` (布尔值): 是否进行多行匹配。
- `dotAll` (布尔值): 是否允许`.`匹配换行符。
- `unicode` (布尔值): 是否启用 Unicode 模式。
- `sticky` (布尔值): 是否启用粘性匹配。

### 示例

以下是一个使用`buildRegex`函数的例子，展示了如何创建一个严格的邮箱地址验证正则表达式：

```jsx
import { REGEX, buildRegex } from 'pixiu-number-toolkit';
import { useState, useEffect } from 'react';

export default () => {
  const strictEmailRegex = buildRegex(REGEX.EMAIL, { strict: true });

  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    setIsValidEmail(strictEmailRegex.test('55856773@qq.com'));
  }, []);

  return <div>{isValidEmail.toString()}</div>;
};
```

如果你有任何问题或建议，请随时联系我，微信：

![辰火流光](../wx.png)
