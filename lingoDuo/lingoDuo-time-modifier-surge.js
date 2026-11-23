// Duolingo 限时挑战时长修改 — Surge 适配版
// 原作：TAKAGIVEGETA（https://github.com/TAKAGIVEGETA/MyScripts/tree/main/lingoDuo）
// 适配说明：原脚本按 Loon 的对象型 $argument 编写；Surge 的 $argument 是字符串，
// 本版改为解析模块传入的 "timer_mins=分钟数"，其余逻辑与原作保持一致。
// timer_mins=0 时脚本不做任何修改（等同关闭）。

function parseArgs() {
  const out = {};
  let s = (typeof $argument !== "undefined" && $argument) ? String($argument) : "";
  s = s.replace(/^"+|"+$/g, "");
  s.split("|").forEach(function (part) {
    const i = part.indexOf("=");
    if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  });
  return out;
}

try {
  let obj = JSON.parse($response.body);
  let seconds = parseInt(parseArgs().timer_mins) * 60;
  if (!isNaN(seconds) && seconds > 0 && obj.liveOpsChallenges)
    obj.liveOpsChallenges.forEach(challenge => {
      if (challenge.initialTime) challenge.initialTime = seconds;
      if (challenge.initialLevelTimes) challenge.initialLevelTimes = challenge.initialLevelTimes.map(() => seconds);
      if (challenge.initialSessionTimes) challenge.initialSessionTimes = challenge.initialSessionTimes.map(() => seconds);
    });
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({});
}
