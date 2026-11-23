// Duolingo 直接通关（部分关卡）— 与原作逻辑一致，无参数
// 原作：TAKAGIVEGETA（https://github.com/TAKAGIVEGETA/MyScripts/tree/main/lingoDuo）
// 说明：该脚本无开关参数，在 Surge 模块中默认以注释形式关闭，
// 需要时编辑模块，删掉对应脚本行行首的 # 号即可启用。

try {
  let obj = JSON.parse($response.body);
  const type = obj.type;
  const skipTypes = ["SIDE_QUEST_RAMP_UP_PRACTICE", "MATCH_PRACTICE"];
  if (type && !skipTypes.includes(type)) {
    const pools = [
      'challenges',
      'adaptiveChallenges',
      'adaptiveInterleavedChallenges',
      'mistakesReplacementChallenges'
    ];
    pools.forEach(pool => {
      if (obj[pool] && obj[pool].length > 0) obj[pool] = [];
    });
  }
  if (obj.elements && obj.elements.length > 0) obj.elements = [];
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({});
}
