---
title: 更新记录
nav:
  title: 更新记录
  order: 10
---

# 更新记录

### 2.0.0

1. 添加 `currency` 方法;
2. 废弃了添加千位分隔符 `addThousandSeparator` 以及移除千位分隔符 `removeThousandSeparator` ，请使用 `currency`;
3. 废弃了 `formatCurrencyRMB` 请使用 `currency`
4. 废弃了 `formatPercentage` 请使用 `currency`
5. 废弃了 `numberToWords` 的 `en` 参数，目前只支持中文
