---
title: 货币格式化
nav:
  title: API
  order: 2
---

# 货币格式化

### 概述

`currency` 提供了一套完整的货币处理工具，包括货币格式化、货币字符串到数字的转换以及获取货币的千位分隔符和小数点符号等功能。这些功能基于 `Intl.NumberFormat` 对象实现，能够适应多种语言环境下的货币显示需求。

### 接口与类型定义

- **类型定义**

  - `CurrencyCodeType`: 货币代码类型，用于指定货币种类。
  - `CurrencyStyleType`: 格式化风格类型，可选值为 `'decimal'`, `'currency'`, `'unit'`, `'percent'`。
  - `CurrencyUnitType`: 货币单位类型，源自 `CurrencyUnit` 枚举。

- **接口定义**
  - `getCurrencySeparators(locale: CurrencyCodeType): { groupSeparator: string; decimalSeparator: string }`
    - **参数**:
      - `locale`: 货币代码，用于确定千位分隔符和小数点符号。
    - **返回**: 包含千位分隔符和小数点符号的对象。
  - `convertCurrencyToNumber(value: string, locale: CurrencyCodeType): number`
    - **参数**:
      - `value`: 需要转换的货币字符串。
      - `locale`: 货币代码，用于识别字符串中的特殊符号。
    - **返回**: 转换后的数字。
  - `currency(value: number | string | bigint, options: CurrencyOptions): string`
    - **参数**:
      - `value`: 需要格式化的数值或字符串。
      - `options`: 格式化选项，包括货币代码、格式化风格、单位等。
    - **返回**: 格式化后的货币字符串。
  - `currency.setGlobalOptions(options: CurrencyOptions)`
    - **参数**:
      - `options`: 设置全局默认格式化选项。

### 使用示例

- **基本用法**

  ```js
  console.log(currency(3500)); // '3,500'
  console.log(currency('-3500')); // '-3,500'
  console.log(currency(3500, { style: 'currency' })); // '¥3,500.00'
  ```

- **百分比格式**

  ```js
  console.log(currency(0.35, { style: 'percent' })); // '35%'
  ```

- **单位格式**

  ```js
  console.log(currency(3500, { style: 'unit', unit: CurrencyUnit.Liter })); // '3,500升'
  ```

- **转换货币字符串为数字**
  ```js
  console.log(convertCurrencyToNumber('-¥3,500.12')); // -3500.12
  ```

### 错误处理

- 当输入的字符串格式不正确或传入的值类型不符合要求时，函数会抛出错误，例如：
  ```js
  try {
    console.log(currency(''));
  } catch (error) {
    console.error(error.message); // Invalid value type: string
  }
  ```

### 全局配置

可以通过 `currency.setGlobalOptions` 方法设置全局默认的格式化选项，影响后续所有调用 `currency` 函数的行为。

### 注意事项

- 确保在调用格式化函数前已正确设置或传递了所需的货币代码和格式化风格。
- 在转换货币字符串时，确保字符串符合预期的格式，避免因格式问题导致的异常。
- 全局配置更改应谨慎操作，避免影响到不必要的代码段。

如果你有任何问题或建议，请随时联系我，微信：

![辰火流光](../wx.png)
