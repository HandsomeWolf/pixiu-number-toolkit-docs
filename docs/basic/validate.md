---
title: 验证函数
order: 75
nav:
  title: API
  order: 2
---

# 正则表达式验证函数

本文档介绍了一系列用于验证各种数据格式的函数。这些函数基于正则表达式，用于检查输入是否符合特定的模式或格式。

## 函数列表

以下是所有可用的验证函数：

| 函数名                                     | 描述                                           |
| ------------------------------------------ | ---------------------------------------------- |
| isValidNumber                              | 验证是否为有效数字                             |
| isValidNumeric                             | 验证是否为数值型字符串                         |
| isValidThousandSeparatedNumber             | 验证是否为带千位分隔符的数字                   |
| isValidBlank                               | 验证是否为空白字符                             |
| areAllElementsNumbers                      | 验证数组中所有元素是否为数字                   |
| areAllElementsNumeric                      | 验证数组中所有元素是否为数值型字符串           |
| isValidNegativeInteger                     | 验证是否为负整数                               |
| isValidPositiveInteger                     | 验证是否为正整数                               |
| isValidNegativeFloat                       | 验证是否为负浮点数                             |
| isValidNonNegativeFloat                    | 验证是否为非负浮点数                           |
| isValidPositiveFloat                       | 验证是否为正浮点数                             |
| isValidDecimalScientificNotation           | 验证是否为科学计数法表示的数字                 |
| isValidChinese                             | 验证是否为中文字符                             |
| isValidChineseName                         | 验证是否为中文姓名                             |
| isValidChineseCharacters                   | 验证是否只包含中文字符                         |
| isValidChineseBankCard                     | 验证是否为有效的中国银行卡号                   |
| isValidChineseMobile                       | 验证是否为有效的中国手机号码                   |
| isValidChineseTel                          | 验证是否为有效的中国固定电话号码               |
| isValidChinesePostalCode                   | 验证是否为有效的中国邮政编码                   |
| isValidChineseTaxNumber                    | 验证是否为有效的中国税号                       |
| isValidEnglishLetter                       | 验证是否为英文字母                             |
| isValidLowercaseEnglishLetter              | 验证是否为小写英文字母                         |
| isValidNonPositiveInteger                  | 验证是否为非正整数                             |
| isValidFloat                               | 验证是否为浮点数                               |
| isValidNonPositiveFloat                    | 验证是否为非正浮点数                           |
| isValidEmail                               | 验证是否为有效的电子邮件地址                   |
| isValidIP                                  | 验证是否为有效的IP地址                         |
| isValidSubnetMask                          | 验证是否为有效的子网掩码                       |
| isValidURL                                 | 验证是否为有效的URL                            |
| isValidAccount                             | 验证是否为有效的账户名                         |
| isValidUppercaseEnglishLetter              | 验证是否为大写英文字母                         |
| isValidHexColor                            | 验证是否为有效的十六进制颜色代码               |
| isValidMacAddress                          | 验证是否为有效的MAC地址                        |
| isValidChineseIdCard                       | 验证是否为有效的中国身份证号码                 |
| isValidNewEnergyLicensePlate               | 验证是否为有效的新能源车牌号                   |
| isValidNonNewEnergyLicensePlate            | 验证是否为有效的非新能源车牌号                 |
| isValidLicensePlate                        | 验证是否为有效的车牌号（包括新能源和非新能源） |
| isValidUnifiedSocialCreditIdentifierStrict | 验证是否为有效的统一社会信用代码（严格模式）   |
| isValidUnifiedSocialCreditIdentifierLoose  | 验证是否为有效的统一社会信用代码（宽松模式）   |
| isValidChineseIDCard2                      | 验证是否为有效的第二代中国身份证号码           |
| isValidChineseIDCard1                      | 验证是否为有效的第一代中国身份证号码           |
| isValidIPv4                                | 验证是否为有效的IPv4地址                       |
| containsEmoji                              | 检查是否包含表情符号                           |
| hasNoSpecialCharacters                     | 检查是否不包含特殊字符                         |

## 函数详细说明

以下是每个函数的详细说明：

### isValidNumber

#### 函数定义

```typescript
function isValidNumber(
  value: string,
  options: RegexOptions = { strict: true },
): boolean;
```

#### 参数说明

- `value` (String): 待验证的字符串。
- `options` (Object): 正则表达式选项，默认为 `{ strict: true }`。

#### 返回值

返回一个布尔值，表示输入是否为有效数字。

#### 使用示例

```javascript
import { isValidNumber } from 'pixiu-number-toolkit';

console.log(isValidNumber('123')); // true
console.log(isValidNumber('12.34')); // true
console.log(isValidNumber('abc')); // false
```

#### 注意事项

- 此函数验证的是数字的字符串表示，包括整数和浮点数。
- 不接受科学计数法表示的数字。

[继续为其他函数添加类似的详细说明...]

## 高级用法

这些验证函数可以与表单验证库结合使用，例如 Formik 或 React Hook Form，以提供更强大的表单验证功能。

## 示例

使用 `isValidEmail` 验证邮箱地址：

```jsx
import React, { useState } from 'react';
import { isValidEmail } from 'pixiu-number-toolkit';

const EmailValidationComponent = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(isValidEmail(value));
  };

  return (
    <div>
      <input
        placeholder="请输入邮箱地址"
        type="text"
        value={email}
        onChange={handleEmailChange}
      />
      {!isValid && <p style={{ color: 'red' }}>请输入有效的邮箱地址</p>}
    </div>
  );
};

export default EmailValidationComponent;
```

如果你有任何问题或建议，请随时联系我，微信：

![辰火流光](/open_source/pixiu-number-toolkit/wx.png)
