const ROCKETS = {
  firearrow: {
    title: "화약 로켓 (불화살)",
    subtitle: "~13세기 · 중국 송나라 · 최초의 로켓형 무기",
    overview:
      "화약 추진을 이용한 초기 로켓 형태. 주로 전쟁과 신호용으로 사용되며 로켓 개념의 기초를 형성했다.",
    tech: "고체 화약 추진 방식. 단순한 튜브 구조와 방향 안정 장치가 초기 적용되었다.",
    impact:
      "추진제 기반 비행체라는 개념을 탄생시켰으며, 이후 군사용 로켓 발전의 출발점이 되었다.",
    tags: ["고체 추진", "중국", "군사용", "초기 로켓"],
  },

  congreve: {
    title: "콩그리브 로켓",
    subtitle: "1800s · 영국 · 군사용 체계화",
    overview: "영국에서 군사용으로 체계화된 로켓. 사거리와 정확도 개선이 시도되었다.",
    tech: "강화된 고체 추진제와 길어진 로켓봉(stick) 구조로 비행 안정성 향상.",
    impact: "군사 로켓의 체계적 운용 개념을 확립하며 근대 로켓 발전에 기여했다.",
    tags: ["영국", "군사기술", "고체연료"],
  },

  goddard1926: {
    title: "고다드 액체연료 로켓",
    subtitle: "1926 · 미국 · 최초의 액체연료 실험",
    overview: "로버트 고다드가 세계 최초로 액체연료 로켓 발사에 성공.",
    tech: "액체 산소와 휘발유 기반 추진 시스템. 노즐 설계와 연소 제어 개념 도입.",
    impact: "현대 로켓 공학의 토대를 마련했고, 이후 대형 우주발사체의 기반이 되었다.",
    tags: ["액체연료", "미국", "고다드"],
  },

  v2: {
    title: "V-2 로켓",
    subtitle: "1944 · 독일 · 현대 대형 로켓의 원형",
    overview: "세계 최초의 장거리 탄도 미사일이자 대형 액체연료 로켓.",
    tech: "액체연료 엔진, 자이로 유도 시스템, 대형 추진체 설계.",
    impact: "전후 미국·소련 우주개발의 기술적 출발점이 되었다.",
    tags: ["독일", "액체연료", "탄도미사일"],
  },

  sputnik1: {
    title: "스푸트니크 1호",
    subtitle: "1957 · 소련 · 최초 인공위성",
    overview: "세계 최초로 지구 궤도에 진입한 인공위성.",
    tech: "R-7 계열 발사체 사용. 궤도 역학과 통신 기술 발전.",
    impact: "우주시대 개막. 냉전 우주 경쟁 촉발.",
    tags: ["소련", "인공위성", "냉전"],
  },

  vostok1: {
    title: "보스토크 1호",
    subtitle: "1961 · 소련 · 최초 유인 우주비행",
    overview: "유리 가가린이 탑승한 최초의 유인 우주선.",
    tech: "다단 로켓 구조, 재진입 캡슐 설계.",
    impact: "유인 우주 탐사의 시작.",
    tags: ["유인비행", "가가린", "소련"],
  },

  saturnv: {
    title: "Saturn V (새턴 V)",
    subtitle: "1969 · 미국 · 아폴로 달 착륙",
    overview: "아폴로 계획을 위해 개발된 초대형 발사체.",
    tech: "F-1 대형 액체연료 엔진, 다단 분리 구조, 고추력 시스템.",
    impact: "달 착륙을 성공시키며 로켓 공학의 정점에 도달.",
    tags: ["NASA", "달 착륙", "초대형 로켓"],
  },

  spaceshuttle: {
    title: "우주왕복선",
    subtitle: "1981 · 미국 · 부분 재사용",
    overview: "부분 재사용이 가능한 유인 우주 운송 시스템.",
    tech: "고체 부스터 + 액체연료 외부탱크, 궤도선 재사용 설계.",
    impact: "재사용 개념을 실험적으로 확립했으나 비용 문제 남김.",
    tags: ["재사용", "NASA", "유인우주선"],
  },

  falcon9: {
    title: "Falcon 9",
    subtitle: "2015 · 민간 · 재사용 상용화",
    overview: "1단 부스터 수직착륙을 성공시킨 상업용 발사체.",
    tech: "그리드 핀 제어, 재점화 엔진, 정밀 착륙 시스템.",
    impact: "발사 비용 구조를 혁신하며 상업 우주 시대 개막.",
    tags: ["SpaceX", "재사용", "상업우주"],
  },

  artemis: {
    title: "Artemis 프로그램",
    subtitle: "2020s · 달 귀환 프로젝트",
    overview: "인류의 달 재방문을 목표로 한 대형 발사체 시대.",
    tech: "초대형 추진 시스템, 차세대 유인 캡슐.",
    impact: "달·화성 탐사의 장기 전략 기반 마련.",
    tags: ["달 귀환", "초대형", "유인탐사"],
  },
};

// ---------- Theme ----------
function applyTheme(theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch (_) {}

  const btn = document.getElementById("themeBtn");
  if (btn) {
    btn.textContent = theme === "light" ? "☀️" : "🌙";
    btn.setAttribute("aria-label", theme === "light" ? "다크 테마로 전환" : "라이트 테마로 전환");
  }
}

function initTheme() {
  const btn = document.getElementById("themeBtn");
  if (!btn) return;

  let saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (_) {}

  const initial = saved === "light" ? "light" : "dark";
  applyTheme(initial);

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    applyTheme(current === "light" ? "dark" : "light");
  });
}

// ---------- Timeline filtering (index.html only) ----------
function normalize(str) {
  return (str || "").toString().trim().toLowerCase();
}

function initTimeline() {
  const list = document.getElementById("timelineList");
  const qEl = document.getElementById("q");
  const eraEl = document.getElementById("era");
  const resetBtn = document.getElementById("resetBtn");

  if (!list || !qEl || !eraEl || !resetBtn) return;

  const events = Array.from(list.querySelectorAll(".event"));

  function applyFilter() {
    const q = normalize(qEl.value);
    const era = normalize(eraEl.value);

    events.forEach((li) => {
      const liEra = normalize(li.dataset.era);
      const tags = normalize(li.dataset.tags);
      const year = normalize(li.querySelector(".event__year")?.textContent);
      const title = normalize(li.querySelector("h3")?.textContent);
      const desc = normalize(li.querySelector("p")?.textContent);

      const eraOk = era === "all" || liEra === era;
      const haystack = `${tags} ${year} ${title} ${desc}`;
      const qOk = !q || haystack.includes(q);

      li.classList.toggle("hidden", !(eraOk && qOk));
    });
  }

  qEl.addEventListener("input", applyFilter);
  eraEl.addEventListener("change", applyFilter);

  resetBtn.addEventListener("click", () => {
    qEl.value = "";
    eraEl.value = "all";
    applyFilter();
    qEl.focus();
  });

  applyFilter();
}

// ---------- Detail page (rocket.html only) ----------
function loadDetailIfNeeded() {
  const titleEl = document.querySelector("#rTitle");
  if (!titleEl) return; // index.html이면 종료

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const data = id ? ROCKETS[id] : null;

  const subEl = document.querySelector("#rSubtitle");
  const oEl = document.querySelector("#rOverview");
  const tEl = document.querySelector("#rTech");
  const iEl = document.querySelector("#rImpact");
  const tagsEl = document.querySelector("#rTags");

  if (!data) {
    titleEl.textContent = "해당 로켓 정보를 찾을 수 없습니다.";
    if (subEl) subEl.textContent = "링크(id)가 올바른지 확인하세요.";
    if (oEl) oEl.textContent = "";
    if (tEl) tEl.textContent = "";
    if (iEl) iEl.textContent = "";
    if (tagsEl) tagsEl.textContent = "";
    return;
  }

  titleEl.textContent = data.title;
  if (subEl) subEl.textContent = data.subtitle;
  if (oEl) oEl.textContent = data.overview;
  if (tEl) tEl.textContent = data.tech;
  if (iEl) iEl.textContent = data.impact;
  if (tagsEl) tagsEl.textContent = (data.tags || []).join(", ");
}

(function init() {
  initTheme();
  initTimeline();
  loadDetailIfNeeded();
})();