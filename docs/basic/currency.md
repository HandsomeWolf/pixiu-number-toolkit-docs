---
title: 货币格式化
order: 10
nav:
  title: API
  order: 2
---

# 货币格式化

### 概述

`currency` 提供了一套完整的货币处理工具，包括货币格式化、货币字符串到数字的转换以及获取货币的千位分隔符和小数点符号等功能。这些功能基于 `Intl.NumberFormat` 对象实现，能够适应多种语言环境下的货币显示需求。

### 语法

```js
import {
  currency,
  convertCurrencyToNumber,
  CurrencyCodeType,
  CurrencyStyleType,
  CurrencyUnitType,
} from '@pixiu-number-toolkit';

// 语法：
currency(value: number | string | bigint, options: CurrencyOptions)

// 示例：
const result = currency(1234567890.123456, {
  locale: 'CNY',
  style: 'currency',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
```

### 使用示例

- **基本用法**

  ```js
  console.log(currency(3500)); // '3,500'
  console.log(currency('-3500')); // '-3,500'
  console.log(currency(3500, { style: 'currency' })); // '¥3,500.00'
  console.log(currency('-3500', { style: 'currency' })); // '-¥3,500.00'
  console.log(currency(3500, { style: 'currency' })); // '¥3,500.00'
  console.log(currency(3500, { style: 'currency', currency: 'USD' })); // '$3,500.00'
  ```

- **百分比格式**

  ```js
  console.log(currency(0.35, { style: 'percent' })); // '35%'
  console.log(currency(3500, { style: 'percent' })); // '350,000%'
  ```

- **单位格式**

  ```js
  console.log(currency(3500, { style: 'unit', unit: CurrencyUnit.Liter })); // '3,500升'
  ```

- **正数负数符号，零不显示**

  ```js
  console.log(currency(3500, { style: 'percent', signDisplay: 'exceptZero' })); // '+350,000%'
  ```

- **记账格式，负数使用括号**

  ```js
  console.log(
    currency(-3500, {
      style: 'currency',
      signDisplay: 'always',
      currencySign: 'accounting',
    }),
  ); // '(¥3,500.00)'
  ```

- **指定小数位数和整数位数，四舍五入**

  ```js
  console.log(
    currency(4.33, { minimumIntegerDigits: 3, minimumFractionDigits: 4 }),
  ); // '004.3300'
  console.log(currency(4.33145, { maximumFractionDigits: 2 })); // '4.33'
  ```

- **转换货币字符串为数字**

  ```js
  console.log(convertCurrencyToNumber('-¥3,500.12')); // -3500.12
  console.log(convertCurrencyToNumber('-3,500.12人民币')); // -3500.12
  ```

- **前缀 与 后缀**

  ```js
  console.log(currency(3500, { prefix: '¥', suffix: '元' })); // '¥3,500元'
  console.log(currency(-3500, { prefix: '¥', minimumFractionDigits: 2 })); // '¥-3,500.00'
  console.log(currency('-3500', { prefix: '¥', minimumFractionDigits: 2 })); // '¥-3,500.00'
  ```

- **获取当前货币的千位分隔符与小数点符号**

  ```js
  const { groupSeparator, decimalSeparator } = getCurrencySeparators();

  console.log(groupSeparator); // ','
  console.log(decimalSeparator); // '.'
  ```

### 全局配置

默认的设置为中文、货币格式，如下：

```js
const defaultOptions: CurrencyOptions = {
  locale: CurrencyCode.CNY,
  style: 'decimal',
};
```

大多数情况使用默认设置即可。

可以通过 `currency.setGlobalOptions` 方法设置全局默认的格式化选项，影响后续所有调用 `currency` 函数的行为。

```js
import { currency, CurrencyCodeType } from '@pixiu-number-toolkit';
currency.setGlobalOptions({
  locale: CurrencyCode.CNY,
  style: 'decimal',
});
```

### 注意事项

- 确保在调用格式化函数前已正确设置或传递了所需的货币代码和格式化风格。
- 在转换货币字符串时，确保字符串符合预期的格式，避免因格式问题导致的异常。
- 全局配置更改应谨慎操作，避免影响到不必要的代码段。

### `CurrencyOptions` 接口与类型定义

#### `CurrencyCode` 枚举支持：

| 货币代码 | 货币名称                           |
| -------- | ---------------------------------- |
| AED      | 阿联酋迪拉姆                       |
| AFN      | 阿富汗尼                           |
| ALL      | 阿尔巴尼亚列克                     |
| AMD      | 亚美尼亚德拉姆                     |
| ANG      | 荷属安的列斯盾                     |
| AOA      | 安哥拉宽扎                         |
| ARS      | 阿根廷比索                         |
| AUD      | 澳大利亚元                         |
| AWG      | 阿鲁巴弗罗林                       |
| AZN      | 阿塞拜疆马纳特                     |
| BAM      | 波斯尼亚和黑塞哥维那可兑换马克     |
| BBD      | 巴巴多斯元                         |
| BDT      | 孟加拉塔卡                         |
| BGN      | 保加利亚列弗                       |
| BHD      | 巴林第纳尔                         |
| BIF      | 布隆迪法郎                         |
| BMD      | 百慕大元                           |
| BND      | 文莱元                             |
| BOB      | 玻利维亚诺                         |
| BOV      | 玻利维亚 Mvdol（资金代码）         |
| BRL      | 巴西雷亚尔                         |
| BSD      | 巴哈马元                           |
| BTN      | 不丹努尔特鲁姆                     |
| BWP      | 博茨瓦纳普拉                       |
| BYN      | 白俄罗斯卢布                       |
| BZD      | 伯利兹元                           |
| CAD      | 加拿大元                           |
| CDF      | 刚果法郎                           |
| CHE      | WIR欧元（补充货币）                |
| CHF      | 瑞士法郎                           |
| CHW      | WIR法郎（补充货币）                |
| CLF      | 智利发展单位（资金代码）           |
| CLP      | 智利比索                           |
| CNY      | 人民币                             |
| COP      | 哥伦比亚比索                       |
| COU      | 哥伦比亚实际价值单位（资金代码）   |
| CRC      | 哥斯达黎加科朗                     |
| CUP      | 古巴比索                           |
| CVE      | 佛得角埃斯库多                     |
| CZK      | 捷克克朗                           |
| DJF      | 吉布提法郎                         |
| DKK      | 丹麦克朗                           |
| DOP      | 多米尼加比索                       |
| DZD      | 阿尔及利亚第纳尔                   |
| EGP      | 埃及镑                             |
| ERN      | 厄立特里亚纳克法                   |
| ETB      | 埃塞俄比亚比尔                     |
| EUR      | 欧元                               |
| FJD      | 斐济元                             |
| FKP      | 福克兰群岛镑                       |
| GBP      | 英镑                               |
| GEL      | 格鲁吉亚拉里                       |
| GHS      | 加纳塞地                           |
| GIP      | 直布罗陀镑                         |
| GMD      | 冈比亚达拉西                       |
| GNF      | 几内亚法郎                         |
| GTQ      | 危地马拉格查尔                     |
| GYD      | 圭亚那元                           |
| HKD      | 港元                               |
| HNL      | 洪都拉斯伦皮拉                     |
| HTG      | 海地古德                           |
| HUF      | 匈牙利福林                         |
| IDR      | 印度尼西亚卢比                     |
| ILS      | 以色列新谢克尔                     |
| INR      | 印度卢比                           |
| IQD      | 伊拉克第纳尔                       |
| IRR      | 伊朗里亚尔                         |
| ISK      | 冰岛克朗                           |
| JMD      | 牙买加元                           |
| JOD      | 约旦第纳尔                         |
| JPY      | 日元                               |
| KES      | 肯尼亚先令                         |
| KGS      | 吉尔吉斯斯坦索姆                   |
| KHR      | 柬埔寨瑞尔                         |
| KMF      | 科摩罗法郎                         |
| KPW      | 朝鲜元                             |
| KRW      | 韩元                               |
| KWD      | 科威特第纳尔                       |
| KYD      | 开曼群岛元                         |
| KZT      | 哈萨克斯坦坚戈                     |
| LAK      | 老挝基普                           |
| LBP      | 黎巴嫩镑                           |
| LKR      | 斯里兰卡卢比                       |
| LRD      | 利比里亚元                         |
| LSL      | 莱索托洛蒂                         |
| LYD      | 利比亚第纳尔                       |
| MAD      | 摩洛哥迪拉姆                       |
| MDL      | 摩尔多瓦列伊                       |
| MGA      | 马达加斯加阿里亚里                 |
| MKD      | 马其顿代纳尔                       |
| MMK      | 缅甸元                             |
| MNT      | 蒙古图格里克                       |
| MOP      | 澳门元                             |
| MRU      | 毛里塔尼亚乌吉亚                   |
| MUR      | 毛里求斯卢比                       |
| MVR      | 马尔代夫卢菲亚                     |
| MWK      | 马拉维克瓦查                       |
| MXN      | 墨西哥比索                         |
| MXV      | 墨西哥投资单位                     |
| MYR      | 马来西亚林吉特                     |
| MZN      | 莫桑比克梅蒂卡尔                   |
| NAD      | 纳米比亚元                         |
| NGN      | 尼日利亚奈拉                       |
| NIO      | 尼加拉瓜科多巴                     |
| NOK      | 挪威克朗                           |
| NPR      | 尼泊尔卢比                         |
| NZD      | 新西兰元                           |
| OMR      | 阿曼里亚尔                         |
| PAB      | 巴拿马巴波亚                       |
| PEN      | 秘鲁索尔                           |
| PGK      | 巴布亚新几内亚基那                 |
| PHP      | 菲律宾比索                         |
| PKR      | 巴基斯坦卢比                       |
| PLN      | 波兰兹罗提                         |
| PYG      | 巴拉圭瓜拉尼                       |
| QAR      | 卡塔尔里亚尔                       |
| RON      | 罗马尼亚列伊                       |
| RSD      | 塞尔维亚第纳尔                     |
| RUB      | 俄罗斯卢布                         |
| RWF      | 卢旺达法郎                         |
| SAR      | 沙特里亚尔                         |
| SBD      | 所罗门群岛元                       |
| SCR      | 塞舌尔卢比                         |
| SDG      | 苏丹镑                             |
| SEK      | 瑞典克朗                           |
| SGD      | 新加坡元                           |
| SHP      | 圣赫勒拿镑                         |
| SLE      | 塞拉利昂利昂（新利昂）             |
| SOS      | 索马里先令                         |
| SRD      | 苏里南元                           |
| SSP      | 南苏丹镑                           |
| STN      | 圣多美和普林西比多布拉             |
| SVC      | 萨尔瓦多科朗                       |
| SYP      | 叙利亚镑                           |
| SZL      | 斯威士兰里兰吉尼                   |
| THB      | 泰铢                               |
| TJS      | 塔吉克斯坦索莫尼                   |
| TMT      | 土库曼斯坦马纳特                   |
| TND      | 突尼斯第纳尔                       |
| TOP      | 汤加潘加                           |
| TRY      | 土耳其里拉                         |
| TTD      | 特立尼达和多巴哥元                 |
| TWD      | 新台币                             |
| TZS      | 坦桑尼亚先令                       |
| UAH      | 乌克兰格里夫纳                     |
| UGX      | 乌干达先令                         |
| USD      | 美元                               |
| USN      | 美元（次日）（资金代码）           |
| UYI      | 乌拉圭比索（索引单位）（资金代码） |
| UYU      | 乌拉圭比索                         |
| UYW      | 乌拉圭名义工资指数单位             |
| UZS      | 乌兹别克斯坦索姆                   |
| VED      | 委内瑞拉数字玻利瓦尔               |
| VES      | 委内瑞拉主权玻利瓦尔               |
| VND      | 越南盾                             |
| VUV      | 瓦努阿图瓦图                       |
| WST      | 萨摩亚塔拉                         |
| XAF      | 中非法郎                           |
| XAG      | 银（盎司）                         |
| XAU      | 金（盎司）                         |
| XBA      | 欧洲复合单位                       |
| XBB      | 欧洲货币单位                       |
| XBC      | 欧洲账户单位                       |
| XBD      | 欧洲账户单位                       |
| XCD      | 东加勒比元                         |
| XDR      | 特别提款权                         |
| XOF      | 西非法郎                           |
| XPD      | 钯（盎司）                         |
| XPF      | 太平洋法郎                         |
| XPT      | 铂（盎司）                         |
| XSU      | 苏克雷                             |
| XTS      | 为测试预留的代码                   |
| XUA      | 非洲开发银行计价单位               |
| XXX      | 无币种                             |
| YER      | 也门里亚尔                         |
| ZAR      | 南非兰特                           |
| ZMW      | 赞比亚克瓦查                       |
| ZWG      | 津巴布韦元                         |
| ZWL      | 津巴布韦元                         |

#### `style` 参数

| 值         | 描述                                                 | 示例          |
| ---------- | ---------------------------------------------------- | ------------- |
| 'decimal'  | 添加千位分隔符的纯数字                               | 1,234,567.89  |
| 'currency' | 添加货币符号和千位分隔符                             | $1,234,567.89 |
| 'unit'     | 用于格式化带有物理单位的数字，如长度、重量、体积等。 | 3,500升       |
| 'percent'  | 数字乘以100并添加百分号。                            | 50.00%        |

#### `unit` 参数

下面是以表格形式展示`CurrencyUnit`枚举中各个单位的描述与示例值：

| 枚举成员           | 描述             | 示例值              |
| ------------------ | ---------------- | ------------------- |
| `Acre`             | 英亩             | `acre`              |
| `Bit`              | 比特             | `bit`               |
| `Byte`             | 字节             | `byte`              |
| `Celsius`          | 摄氏度           | `celsius`           |
| `Centimeter`       | 厘米             | `centimeter`        |
| `Day`              | 天               | `day`               |
| `Degree`           | 度               | `degree`            |
| `Fahrenheit`       | 华氏度           | `fahrenheit`        |
| `FluidOunce`       | 液量盎司         | `fluid-ounce`       |
| `Foot`             | 英尺             | `foot`              |
| `Gallon`           | 加仑             | `gallon`            |
| `Gigabit`          | 吉比特           | `gigabit`           |
| `Gigabyte`         | 吉字节           | `gigabyte`          |
| `Gram`             | 克               | `gram`              |
| `Hectare`          | 公顷             | `hectare`           |
| `Hour`             | 小时             | `hour`              |
| `Inch`             | 英寸             | `inch`              |
| `Kilobit`          | 千比特           | `kilobit`           |
| `Kilobyte`         | 千字节           | `kilobyte`          |
| `Kilogram`         | 千克             | `kilogram`          |
| `Kilometer`        | 千米             | `kilometer`         |
| `Liter`            | 升               | `liter`             |
| `Megabit`          | 兆比特           | `megabit`           |
| `Megabyte`         | 兆字节           | `megabyte`          |
| `Meter`            | 米               | `meter`             |
| `Microsecond`      | 微秒             | `microsecond`       |
| `Mile`             | 英里             | `mile`              |
| `MileScandinavian` | 斯堪的纳维亚英里 | `mile-scandinavian` |
| `Milliliter`       | 毫升             | `milliliter`        |
| `Millimeter`       | 毫米             | `millimeter`        |
| `Millisecond`      | 毫秒             | `millisecond`       |
| `Minute`           | 分钟             | `minute`            |
| `Month`            | 月               | `month`             |
| `Nanosecond`       | 纳秒             | `nanosecond`        |
| `Ounce`            | 盎司             | `ounce`             |
| `Percent`          | 百分比           | `percent`           |
| `Petabyte`         | 拍字节           | `petabyte`          |
| `Pound`            | 磅               | `pound`             |
| `Second`           | 秒               | `second`            |
| `Stone`            | 英石             | `stone`             |
| `Terabit`          | 太比特           | `terabit`           |
| `Terabyte`         | 太字节           | `terabyte`          |
| `Week`             | 周               | `week`              |
| `Yard`             | 码               | `yard`              |
| `Year`             | 年               | `year`              |

如果你有任何问题或建议，请随时联系我，微信：

![辰火流光](/open_source/pixiu-number-toolkit/wx.png)
