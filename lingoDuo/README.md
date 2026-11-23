# lingoDuo（Surge 适配）

多邻国 Duolingo Max 解锁的 Surge 适配版。原作：[TAKAGIVEGETA/MyScripts](https://github.com/TAKAGIVEGETA/MyScripts/tree/main/lingoDuo)（Loon 增强版）。

原脚本按 Loon 的对象型 `$argument` 编写，Surge 的 `$argument` 是字符串、读不到参数。本目录的脚本把参数读取改为解析 Surge 模块传入的 `key=value|key=value` 字符串，业务逻辑与原作一致。

## 文件

- `Duolingo-Max-Enhanced.sgmodule` — Surge 模块（本地导入或用本文件的 raw 链接安装）
- `lingoDuo-xaM-enhanced-surge.js` — Max 解锁 + 经验加倍 + 解锁所有关卡
- `lingoDuo-time-modifier-surge.js` — 限时挑战时长（timer_mins=0 为关闭）
- `lingoDuo-clear-surge.js` — 直接通关（模块中默认注释关闭，删掉行首 # 启用）

## 模块参数（在 Surge 的模块参数里改）

| 参数 | 默认 | 说明 |
| --- | --- | --- |
| xp_boost | false | 经验加倍开关（true/false） |
| multiplier | 2 | 经验倍数（2 或 3） |
| unlock_all | false | 解锁所有关卡开关（true/false） |
| timer_mins | 0 | 限时挑战时长（分钟，0 = 关闭） |

注意：不要与基础版 Duolingo Max 模块同时启用。
