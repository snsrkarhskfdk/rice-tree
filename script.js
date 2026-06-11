(function () {
  "use strict";

  const products = [
    {
      name: "신동진 20kg",
      category: "B2B 주력",
      variety: "신동진",
      origin: "당진 · 전남 · 군산 · 순천",
      milling: "도정일자 이력 관리",
      weight: "20kg",
      household: "식당 · 도시락 공장 · 중도매",
      delivery: "차량 단위 대량 공급",
      tags: ["대량 회전", "품종 일관성"],
      cta: "대량 견적 문의",
      href: "#contact",
      featured: true,
    },
    {
      name: "신동진 10kg",
      category: "마트 · 가정",
      variety: "신동진",
      origin: "전북 군산 외 주요 산지",
      milling: "신선 도정 기준 출고",
      weight: "10kg",
      household: "마트 · 3~4인 가구",
      delivery: "마트 납품 · 예약배송",
      tags: ["소비자 접근성", "중간 단위"],
      cta: "납품 상담",
      href: "#contact",
    },
    {
      name: "신동진 5kg",
      category: "정기배송 추천",
      variety: "신동진",
      origin: "전북 군산 외 주요 산지",
      milling: "출고 시 안내",
      weight: "5kg",
      household: "1~2인 가구 · 정기배송",
      delivery: "소포장 정기배송",
      tags: ["보관 부담 낮음", "온라인 판매 준비"],
      cta: "정기배송 보기",
      href: "#plans",
    },
    {
      name: "알찬미 5kg · 10kg",
      category: "가성비",
      variety: "알찬미",
      origin: "주요 산지 직거래",
      milling: "출고 시 안내",
      weight: "5kg · 10kg",
      household: "가성비 중시 가정 · 마트",
      delivery: "일반 · 마트 납품",
      tags: ["합리적 가격", "인기 품종"],
      cta: "상담 문의",
      href: "#contact",
    },
    {
      name: "프리미엄 1kg · 3kg",
      category: "선물용",
      variety: "신동진 외 구성 상담",
      origin: "산지 직거래",
      milling: "출고 시 안내",
      weight: "1kg · 3kg 구성",
      household: "선물세트 · 답례품",
      delivery: "예약배송",
      tags: ["고급 포장", "기업 답례"],
      cta: "선물세트 상담",
      href: "#contact",
    },
    {
      name: "B2B 정기 납품",
      category: "대량 · 정기",
      variety: "신동진 · 알찬미",
      origin: "당진 · 전남 · 군산 · 순천",
      milling: "도정일 이력 관리",
      weight: "20kg 이상",
      household: "식자재 업체 · 급식 · 체인",
      delivery: "주간 반복 납품",
      tags: ["지역 묶음 배송", "세금계산서"],
      cta: "정기 납품 견적",
      href: "#contact",
      featured: true,
    },
  ];

  const plans = [
    {
      name: "1인 밥심 플랜",
      weight: "5kg",
      cycle: "4~6주",
      desc: "혼자 먹는 밥도 떨어지기 전에. 소비 속도에 맞춰 주기를 고릅니다.",
      contact: {
        title: "1인 밥심 플랜 상담을 남겨주세요",
        lead: "1인 가구 기준 5kg과 4~6주 주기부터 확인합니다. 밥 짓는 횟수에 맞춰 주기를 함께 조정합니다.",
        planName: "1인 밥심 플랜",
        planSpec: "신동진 5kg · 4~6주 · 1인 가구",
        planCopy: "혼자 먹는 양이라 5kg부터 시작하고, 필요하면 4주 또는 6주 주기로 맞춥니다.",
        variety: "정기배송 상담",
        message: "서울 마포, 1인 가구, 신동진 5kg 6주 정기배송 상담을 원합니다.",
        placeholder: "예: 서울 마포, 1인 가구, 신동진 5kg 6주 정기배송 상담",
      },
    },
    {
      name: "2인 집밥 플랜",
      weight: "10kg",
      cycle: "4주",
      desc: "두 식구 매일밥 기준. 가장 무난한 시작 단위입니다.",
      contact: {
        title: "2인 집밥 플랜 상담을 남겨주세요",
        lead: "2인 가구 기준 10kg 4주 주기를 먼저 확인합니다. 실제 소비량에 따라 2주 또는 6주 조정도 함께 봅니다.",
        planName: "2인 집밥 플랜",
        planSpec: "신동진 10kg · 4주 · 2인 가구",
        planCopy: "두 식구 매일밥 기준으로 가장 무난한 시작 단위입니다. 월 소진량에 맞춰 주기를 세밀하게 맞춥니다.",
        variety: "정기배송 상담",
        message: "경기 성남, 2인 가구, 신동진 10kg 4주 정기배송 상담을 원합니다.",
        placeholder: "예: 경기 성남, 2인 가구, 신동진 10kg 4주 정기배송 상담",
      },
    },
    {
      name: "가족 밥상 플랜",
      weight: "20kg",
      cycle: "4주",
      desc: "가족 단위 대용량. 보관법 안내를 함께 드립니다.",
      contact: {
        title: "가족 밥상 플랜 상담을 남겨주세요",
        lead: "4인 이상 가족 기준 20kg과 보관법, 재주문 주기를 함께 확인합니다. 도착 후 보관 안내도 같이 드립니다.",
        planName: "가족 밥상 플랜",
        planSpec: "신동진 20kg · 4주 · 4인 이상 가족",
        planCopy: "가족 단위 대용량이라 보관 환경과 밥 짓는 횟수까지 함께 보고 주기와 중량을 맞춥니다.",
        variety: "신동진 20kg",
        message: "인천 송도, 4인 가족, 신동진 20kg 4주 배송과 보관법 안내를 받고 싶습니다.",
        placeholder: "예: 인천 송도, 4인 가족, 신동진 20kg 4주 배송 및 보관 상담",
      },
    },
    {
      name: "사업자 납품 플랜",
      weight: "20kg 이상",
      cycle: "주 1~3회",
      desc: "식당 · 도시락 · 식자재. 납품 주기와 하차 조건을 함께 협의합니다.",
      featured: true,
      contact: {
        title: "사업자 납품 플랜 조건을 남겨주세요",
        lead: "식당, 도시락, 식자재 납품 기준으로 주 1~3회 주기와 하차 조건, 필요 중량을 함께 확인합니다.",
        planName: "사업자 납품 플랜",
        planSpec: "20kg 이상 · 주 1~3회 · 납품처 협의",
        planCopy: "사업자 납품은 품종 일관성, 하차 동선, 세금계산서와 결제 일정까지 같이 맞춰야 합니다.",
        variety: "사업자 납품 상담",
        message: "서울 강서, 식당 운영, 20kg 이상 주 2회 납품과 하차 조건 상담을 원합니다.",
        placeholder: "예: 서울 강서, 식당 운영, 20kg 이상 주 2회 납품 및 하차 조건 상담",
      },
    },
  ];

  const quiz = [
    {
      id: "texture",
      label: "어떤 밥을 좋아하세요?",
      options: [
        { value: "gosul", label: "고슬고슬한 밥" },
        { value: "chal", label: "부드럽고 찰진 밥" },
      ],
    },
    {
      id: "people",
      label: "몇 분이 드시나요?",
      options: [
        { value: "1", label: "1인" },
        { value: "2", label: "2~3인" },
        { value: "4", label: "4인 이상" },
      ],
    },
    {
      id: "monthly",
      label: "한 달에 어느 정도 드시나요?",
      options: [
        { value: "low", label: "5kg 이하" },
        { value: "mid", label: "10kg 안팎" },
        { value: "high", label: "20kg 이상" },
      ],
    },
    {
      id: "subscribe",
      label: "떨어지기 전에 정기적으로 받아볼까요?",
      options: [
        { value: "yes", label: "네, 정기배송이 편해요" },
        { value: "no", label: "필요할 때 주문할게요" },
      ],
    },
    {
      id: "purpose",
      label: "용도를 알려주세요",
      options: [
        { value: "home", label: "우리 집 밥" },
        { value: "gift", label: "선물 · 답례품" },
        { value: "biz", label: "식당 · 사업자" },
      ],
    },
  ];

  const header = document.getElementById("header");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const menuToggle = document.querySelector("[data-menu-toggle]");

  function setScrolled() {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", setScrolled, { passive: true });
  setScrolled();

  const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const riceCanvas = document.getElementById("riceCanvas");
  if (riceCanvas && !motionReduced) {
    const ctx = riceCanvas.getContext("2d");
    const grains = [];
    const colors = ["#fff2c6", "#f3d98d", "#e6bf62", "#f8e5aa"];
    let canvasWidth = 0;
    let canvasHeight = 0;
    let lastFrame = performance.now();

    function createGrain(fromTop) {
      return {
        x: Math.random() * canvasWidth,
        y: fromTop ? -40 - Math.random() * 140 : Math.random() * canvasHeight,
        radius: 2.4 + Math.random() * 2.8,
        length: 10 + Math.random() * 13,
        speed: 0.32 + Math.random() * 0.8,
        drift: -0.24 + Math.random() * 0.48,
        sway: Math.random() * Math.PI * 2,
        angle: -0.55 + Math.random() * 1.1,
        spin: -0.016 + Math.random() * 0.032,
        alpha: 0.46 + Math.random() * 0.48,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    }

    function resizeRiceCanvas() {
      const rect = riceCanvas.getBoundingClientRect();
      canvasWidth = rect.width;
      canvasHeight = rect.height;
      if (!canvasWidth || !canvasHeight) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      riceCanvas.width = Math.round(canvasWidth * dpr);
      riceCanvas.height = Math.round(canvasHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = Math.min(190, Math.max(86, Math.round((canvasWidth * canvasHeight) / 7600)));
      while (grains.length < targetCount) grains.push(createGrain(false));
      if (grains.length > targetCount) grains.length = targetCount;
    }

    function drawRice(now) {
      if (!canvasWidth || !canvasHeight) resizeRiceCanvas();
      const delta = Math.min(2.2, (now - lastFrame) / 16.67);
      lastFrame = now;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      grains.forEach((grain, index) => {
        grain.y += grain.speed * delta;
        grain.x += (Math.sin(grain.y * 0.013 + grain.sway) * 0.44 + grain.drift) * delta;
        grain.angle += grain.spin * delta;

        if (grain.y > canvasHeight + 40 || grain.x < -50 || grain.x > canvasWidth + 50) {
          grains[index] = createGrain(true);
          return;
        }

        ctx.save();
        ctx.translate(grain.x, grain.y);
        ctx.rotate(grain.angle + Math.sin(now * 0.001 + grain.sway) * 0.16);
        ctx.globalAlpha = grain.alpha;
        ctx.fillStyle = grain.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, grain.radius, grain.length / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      window.requestAnimationFrame(drawRice);
    }

    resizeRiceCanvas();
    window.addEventListener("resize", resizeRiceCanvas, { passive: true });
    window.requestAnimationFrame(drawRice);
  }

  menuToggle?.addEventListener("click", () => {
    const open = !mobileMenu?.classList.contains("open");
    mobileMenu?.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const navLinks = Array.from(document.querySelectorAll(".gnb a[href^='#'], .mobile-menu a[href^='#']"));
  const navSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function updateActiveNav() {
    if (!navSections.length) return;
    const currentY = window.scrollY + 120;
    if (currentY < navSections[0].offsetTop) {
      navLinks.forEach((link) => link.classList.remove("is-active"));
      return;
    }
    const current = navSections.reduce((active, section) => {
      return section.offsetTop <= currentY ? section : active;
    }, navSections[0]);

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${current.id}`);
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  const productGrid = document.querySelector("[data-product-grid]");
  if (productGrid) {
    productGrid.innerHTML = products
      .map(
        (item) => `
          <article class="card prod reveal ${item.featured ? "prod--biz" : ""}" tabindex="0" aria-selected="false" data-select-card="product">
            <span class="select-state" aria-hidden="true">선택됨</span>
            <p class="prod__cat">${item.category}</p>
            <h3 class="h3">${item.name}</h3>
            <ul class="prod__meta">
              <li><span>품종</span><strong>${item.variety}</strong></li>
              <li><span>산지</span><strong>${item.origin}</strong></li>
              <li><span>도정</span><strong>${item.milling}</strong></li>
              <li><span>중량</span><strong>${item.weight}</strong></li>
              <li><span>추천</span><strong>${item.household}</strong></li>
              <li><span>배송</span><strong>${item.delivery}</strong></li>
            </ul>
            <div class="prod__tags">${item.tags.map((tag) => `<span class="chip chip--blue">${tag}</span>`).join("")}</div>
            <a class="prod__cta" href="${item.href}">${item.cta} →</a>
          </article>
        `,
      )
      .join("");
  }

  const planGrid = document.querySelector("[data-plan-grid]");
  if (planGrid) {
    planGrid.innerHTML = plans
      .map(
        (plan, index) => `
          <article class="card plan reveal ${plan.featured ? "plan--biz" : ""}" tabindex="0" aria-selected="false" data-select-card="plan">
            <span class="select-state" aria-hidden="true">선택됨</span>
            <h3 class="h3">${plan.name}</h3>
            <p class="plan__spec"><strong>${plan.weight}</strong>${plan.cycle}</p>
            <p class="plan__desc">${plan.desc}</p>
            <a class="btn btn--ghost btn--sm" href="#contact" data-plan-consult="${index}">이 플랜으로 상담</a>
          </article>
        `,
      )
      .join("");
  }

  function setSelectedCard(card) {
    const group = card?.dataset.selectCard;
    if (!card || !group) return;
    document.querySelectorAll(`[data-select-card="${group}"]`).forEach((item) => {
      const selected = item === card;
      item.classList.toggle("is-selected", selected);
      item.setAttribute("aria-selected", String(selected));
    });
  }

  document.querySelectorAll(".trust__item, .step, .review, .b2b__item, .faq__item").forEach((card) => {
    const section = card.closest("section");
    const group = section?.id || "section";
    card.dataset.selectCard = group;
    if (!card.hasAttribute("tabindex") && card.tagName !== "A" && card.tagName !== "DETAILS") {
      card.setAttribute("tabindex", "0");
    }
    if (!card.hasAttribute("aria-selected")) {
      card.setAttribute("aria-selected", "false");
    }
  });

  document.querySelectorAll("[data-select-card]").forEach((card) => {
    card.addEventListener("click", () => setSelectedCard(card));
    card.addEventListener("keydown", (event) => {
      if (card.tagName === "DETAILS") return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      setSelectedCard(card);
    });
  });

  const quizBox = document.getElementById("quizBox");
  if (quizBox) {
    let step = 0;
    let answers = {};

    function renderStep() {
      const q = quiz[step];
      const bars = quiz.map((_, index) => `<i class="${index < step ? "is-done" : ""}"></i>`).join("");
      const options = q.options
        .map((option) => `<button type="button" class="quiz__opt" data-q="${q.id}" data-v="${option.value}" aria-pressed="false">${option.label}</button>`)
        .join("");
      quizBox.innerHTML = `
        <div class="quiz__progress" aria-hidden="true">${bars}</div>
        <p class="quiz__q">Q${step + 1}. ${q.label}</p>
        <div class="quiz__opts">${options}</div>
        ${step > 0 ? '<button type="button" class="quiz__back">← 이전 질문으로</button>' : ""}
      `;
      quizBox.querySelector(".quiz__opts")?.addEventListener("click", (event) => {
        const button = event.target.closest(".quiz__opt");
        if (!button) return;
        button.classList.add("is-selected");
        button.setAttribute("aria-pressed", "true");
        quizBox.querySelectorAll(".quiz__opt").forEach((option) => {
          option.disabled = true;
        });
        window.setTimeout(() => {
          answers[button.dataset.q] = button.dataset.v;
          if (step < quiz.length - 1) {
            step += 1;
            renderStep();
          } else {
            renderResult();
          }
        }, 140);
      });
      quizBox.querySelector(".quiz__back")?.addEventListener("click", () => {
        step -= 1;
        renderStep();
      });
    }

    function resultForAnswers() {
      if (answers.purpose === "gift") {
        return {
          title: "프리미엄 소포장 선물세트",
          rows: [
            ["추천 구성", "1~4kg 소포장"],
            ["품종", "신동진 중심 구성 상담"],
            ["배송", "예약 배송"],
            ["포장", "선물 포장 안내"],
          ],
          cta: ["선물 문의하기", "#contact"],
        };
      }
      if (answers.purpose === "biz") {
        return {
          title: "식당 · 사업자 정기 납품",
          rows: [
            ["추천 단위", "20kg 이상"],
            ["품종", "신동진 · 알찬미"],
            ["배송", "납품 주기 상담"],
            ["거래", "결제 확인 후 출고"],
          ],
          cta: ["납품 상담하기", "#contact"],
        };
      }
      const weightByAmount = { low: "5kg", mid: "10kg", high: "20kg" };
      const cycleByAmount = { low: "6주", mid: "4주", high: "4주" };
      const weight = weightByAmount[answers.monthly] || (answers.people === "1" ? "5kg" : answers.people === "2" ? "10kg" : "20kg");
      const cycle = cycleByAmount[answers.monthly] || "4주";
      const variety = answers.texture === "gosul" ? "신동진 — 굵은 쌀알, 고슬한 식감" : "알찬미 — 부드럽고 담백한 매일밥";
      const wantsSub = answers.subscribe === "yes";
      return {
        title: `${variety.split(" — ")[0]} ${weight}${wantsSub ? ` · ${cycle} 주기` : ""}`,
        rows: [
          ["추천 품종", variety],
          ["추천 중량", weight],
          ["배송 주기", wantsSub ? `${cycle}마다 정기배송` : "필요할 때 주문"],
          ["보관법", weight === "20kg" ? "쌀통에 소분해 서늘하고 건조한 곳에 보관" : "밀폐 용기에 담아 서늘한 곳에 보관"],
        ],
        cta: [wantsSub ? "정기배송 플랜 보기" : "구매 문의하기", wantsSub ? "#plans" : "#contact"],
      };
    }

    function renderResult() {
      const result = resultForAnswers();
      quizBox.innerHTML = `
        <p class="quiz__result-label">우리 집 추천</p>
        <p class="quiz__result-title">${result.title}</p>
        <dl class="quiz__result-list">
          ${result.rows.map((row) => `<div><dt>${row[0]}</dt><dd>${row[1]}</dd></div>`).join("")}
        </dl>
        <div class="quiz__result-actions">
          <a class="btn btn--primary btn--sm" href="${result.cta[1]}">${result.cta[0]}</a>
          <button type="button" class="btn btn--ghost btn--sm" id="quizRetry">다시 해보기</button>
        </div>
      `;
      document.getElementById("quizRetry")?.addEventListener("click", () => {
        step = 0;
        answers = {};
        renderStep();
      });
    }

    renderStep();
  }

  const form = document.getElementById("inquiryForm");
  const contactTitle = document.querySelector("[data-contact-title]");
  const contactLead = document.querySelector("[data-contact-lead]");
  const contactPlanName = document.querySelector("[data-contact-plan-name]");
  const contactPlanSpec = document.querySelector("[data-contact-plan-spec]");
  const contactPlanCopy = document.querySelector("[data-contact-plan-copy]");
  const varietyField = form?.querySelector("select[name='variety']");
  const messageField = form?.querySelector("textarea[name='message']");
  const submitButton = form?.querySelector("button[type='submit']");
  const formDone = form?.querySelector(".form__done");
  const defaultMessagePlaceholder = messageField?.getAttribute("placeholder") || "";
  let lastAutofillMessage = "";

  function applyContactPlan(preset) {
    if (!preset) return;

    if (contactTitle) {
      contactTitle.textContent = preset.title;
    }
    if (contactLead) {
      contactLead.textContent = preset.lead;
    }
    if (contactPlanName) {
      contactPlanName.textContent = preset.planName;
    }
    if (contactPlanSpec) {
      contactPlanSpec.textContent = preset.planSpec;
    }
    if (contactPlanCopy) {
      contactPlanCopy.textContent = preset.planCopy;
    }
    if (varietyField && preset.variety) {
      varietyField.value = preset.variety;
    }
    if (messageField) {
      messageField.placeholder = preset.placeholder || defaultMessagePlaceholder;
      const currentValue = messageField.value.trim();
      if (!currentValue || currentValue === lastAutofillMessage) {
        messageField.value = preset.message || "";
        lastAutofillMessage = preset.message || "";
      }
    }
    if (formDone) {
      formDone.hidden = true;
    }
    if (submitButton) {
      submitButton.disabled = false;
    }
  }

  document.querySelectorAll("[data-plan-consult]").forEach((link) => {
    link.addEventListener("click", () => {
      const planIndex = Number(link.dataset.planConsult);
      applyContactPlan(plans[planIndex]?.contact);
    });
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (formDone) {
      formDone.hidden = false;
    }
    if (submitButton) {
      submitButton.disabled = true;
    }
  });

  const sticky = document.getElementById("stickyCta");
  const hero = document.querySelector(".hero");
  const contact = document.getElementById("contact");
  function updateSticky() {
    if (!sticky || !hero) return;
    const pastHero = window.scrollY > hero.offsetHeight * 0.7;
    const inContact = contact && window.scrollY + window.innerHeight > contact.offsetTop + 120;
    sticky.classList.toggle("is-visible", pastHero && !inContact);
  }
  window.addEventListener("scroll", updateSticky, { passive: true });
  updateSticky();

  const daylightStops = [
    [0, "#FBF6EC", "#F3E8D2", "#E5D8BE"],
    [0.35, "#FDF6E1", "#F7E9C4", "#E6D5B2"],
    [0.68, "#F9E9C9", "#F2DAA9", "#E3C9A0"],
    [1, "#F2DCC4", "#E8C7A3", "#DBBC97"],
  ];

  function hexToRgb(hex) {
    return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
  }

  function mixRgb(from, to, progress) {
    return from.map((value, index) => Math.round(value + (to[index] - value) * progress));
  }

  function rgbCss(rgb) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

  function updateDaylight() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    let stopIndex = 0;
    while (stopIndex < daylightStops.length - 2 && progress > daylightStops[stopIndex + 1][0]) {
      stopIndex += 1;
    }
    const [startProgress, ...startColors] = daylightStops[stopIndex];
    const [endProgress, ...endColors] = daylightStops[stopIndex + 1];
    const localProgress = (progress - startProgress) / (endProgress - startProgress);
    const root = document.documentElement;

    root.style.setProperty("--cream", rgbCss(mixRgb(hexToRgb(startColors[0]), hexToRgb(endColors[0]), localProgress)));
    root.style.setProperty("--cream-deep", rgbCss(mixRgb(hexToRgb(startColors[1]), hexToRgb(endColors[1]), localProgress)));
    root.style.setProperty("--line", rgbCss(mixRgb(hexToRgb(startColors[2]), hexToRgb(endColors[2]), localProgress)));
  }

  let daylightTicking = false;
  window.addEventListener("scroll", () => {
    if (daylightTicking) return;
    daylightTicking = true;
    window.requestAnimationFrame(() => {
      updateDaylight();
      daylightTicking = false;
    });
  }, { passive: true });
  window.addEventListener("resize", updateDaylight, { passive: true });
  updateDaylight();

  const heroCopy = document.querySelector(".hero__copy");
  const originVisual = document.querySelector(".origin__visual");
  const originBagWrap = document.querySelector(".origin__bag-wrap");
  const originCopy = document.querySelector(".origin__copy");
  const roadmap = document.getElementById("roadmap");
  const steps = document.querySelector(".steps");

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function elementProgress(element) {
    const rect = element.getBoundingClientRect();
    return clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0, 1);
  }

  function updateCinematicScroll() {
    if (motionReduced) return;

    if (hero && heroCopy) {
      const progress = clamp(window.scrollY / Math.max(hero.offsetHeight, 1), 0, 1);
      heroCopy.style.transform = `translate3d(0, ${(-42 * progress).toFixed(2)}px, 0) scale(${(1 - progress * 0.025).toFixed(3)})`;
      heroCopy.style.opacity = String((1 - progress * 0.18).toFixed(3));
      if (riceCanvas) {
        riceCanvas.style.transform = `translate3d(0, ${(72 * progress).toFixed(2)}px, 0)`;
        riceCanvas.style.opacity = String((1 - progress * 0.26).toFixed(3));
      }
    }

    if (originVisual) {
      const progress = elementProgress(originVisual);
      const offset = progress - 0.5;
      if (originBagWrap) {
        originBagWrap.style.transform = `translate3d(${(18 * offset).toFixed(2)}px, ${(-42 * offset).toFixed(2)}px, 0) scale(${(1.02 + progress * 0.035).toFixed(3)})`;
      }
      if (originCopy) {
        originCopy.style.transform = `translate3d(0, ${(-18 * offset).toFixed(2)}px, 0)`;
      }
    }

    if (roadmap && steps) {
      const progress = elementProgress(roadmap);
      steps.style.transform = `translate3d(0, ${((0.5 - progress) * 20).toFixed(2)}px, 0)`;
    }
  }

  let cinematicTicking = false;
  function queueCinematicScroll() {
    if (motionReduced || cinematicTicking) return;
    cinematicTicking = true;
    window.requestAnimationFrame(() => {
      updateCinematicScroll();
      cinematicTicking = false;
    });
  }

  if (!motionReduced) {
    window.addEventListener("scroll", queueCinematicScroll, { passive: true });
    window.addEventListener("resize", queueCinematicScroll, { passive: true });
    updateCinematicScroll();
  }

  const originBag = document.querySelector(".origin__bag");
  if (originBag) {
    const bagFallbacks = ["./assets/rice-sack-stack.png"];
    let fallbackIndex = 0;
    originBag.addEventListener("error", () => {
      if (fallbackIndex < bagFallbacks.length) {
        originBag.src = bagFallbacks[fallbackIndex];
        fallbackIndex += 1;
        return;
      }
      originBag.closest(".origin__visual")?.classList.add("origin__visual--fallback");
      originBag.remove();
    });
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const siblings = entry.target.parentElement
            ? Array.from(entry.target.parentElement.children).filter((child) => child.classList?.contains("reveal"))
            : [entry.target];
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${index > 0 ? index * 80 : 0}ms`;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    revealItems.forEach((item) => observer.observe(item));
  }
})();
