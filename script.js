// Арабская версия

const translations = {
    en: {
      nav_about: "About BizBet",
      nav_promo: "Promo Code",
      nav_crash: "Crash Game",
      nav_security: "Security",

      hero_title: `
              THIS OFFER IS<br>
              STILL AVAILABLE<br>
              FOR <span class="highlight">YOU</span>
            `,
      hero_sub: "Takes less than 30 seconds",
      hero_online: "1,284 players online",
      hero_bonus: `Up to <span class="accent">200%</span> bonus`,
      hero_access: "Instant access",
      hero_btn: "GET BONUS NOW",

      about_title: "What is BizBet?",
      about_text1: "BizBet is a modern betting platform designed for fast access, instant games, and smooth performance on any device.",
      about_text2: "Thousands of players choose BizBet every day to enjoy popular games, quick registration, and generous bonuses.",

      benefits_title: "Why players choose BizBet",
      benefit_fast_title: "Fast registration",
      benefit_fast_text: "Start playing in minutes without complicated steps.",
      benefit_bonus_title: "Big bonuses",
      benefit_bonus_text: "Extra value for new and active players.",
      benefit_secure_title: "Secure platform",
      benefit_secure_text: "Trusted technology and stable performance.",
      benefit_games_title: "Popular games",
      benefit_games_text: "Sports, casino, and fast-paced crash games.",

      try_now: "TRY NOW",
      hide: "HIDE",
      show: "SHOW",

      promo_title: `USE PROMO <span class="promo-accent">CODE</span>`,
      promo_code: "BONUSBET",
      promo_sub: "Up to 200% bonus",
      promo_copy: "COPY CODE",
      promo_copied: "Copied",

      crash_title: "CRASH GAME",
      crash_text_top: "Real-time multiplayer. One click can change everything.",
      crash_text: "Watch the multiplier grow and cash out before it crashes. Fast rounds. One decision.",
      crash_cta: "PLAY NOW",

      trust_title: `TRUST / <span class="trust-accent">SECURITY</span>`,
      trust_text: "BizBet uses modern security standards to provide a safe and stable gaming environment for all players.",
      trust_text_extra: "Thousands of players choose BizBet every day to enjoy popular games, quick registration, and generous bonuses.",
      footer_warning: `Gambling can be addictive.<br>
      Play only if you are 18 or older`,

      footer_copy: "2026 BizBet. All rights reserved",
    },

    ar: {
      nav_about: "Bizbet حول",
      nav_promo: "الرمز الترويجي",
      nav_crash: "لعبة الاصطدام",
      nav_security: "الأمان",

      hero_title: "هذا العرض لا يزال متاحاً لك",
      hero_sub: "يستغرق الأمر أقل من 30 ثانية",
      hero_online: "1,284 لاعب متصل الآن",
      hero_bonus: `حتى <span class="accent">200٪</span> مكافأة`,
      hero_access: "وصول فوري",
      hero_btn: "احصل على المكافأة الآن",

      about_title: "؟Bizbet ما هي",
      about_text1: "BizBet منصة مراهنات حديثة مصممة للوصول السريع والألعاب الفورية والأداء السلس على أي جهاز.",
      about_text2: "يختار آلاف اللاعبين BizBet يوميًا للاستمتاع بالألعاب الشهيرة والتسجيل السريع والمكافآت السخية.",

      benefits_title: "BizBet لمادا يختار اللاعبون",
      benefit_fast_title: "تسجيل سريع",
      benefit_fast_text: "ابدأ اللعب بعد دقائق دون خطوات معقدة.",
      benefit_bonus_title: "مكافآت كبيرة",
      benefit_bonus_text: "قيمة إضافية للاعبين الجدد والنشطين.",
      benefit_secure_title: "منصة آمنة",
      benefit_secure_text: "تقنيات موثوقة وأداء مستقر.",
      benefit_games_title: "الألعاب الشائعة",
      benefit_games_text: "ألعاب الرياضة، وألعاب الكازينو، وألعاب التصادم السريعة.",

      try_now: "جرب الآن",
      copy_code: "انسخ الزر",
      copied: "نسخ",
      hide: "إخفاء",
      show: "إظهار",

      promo_title: `استخدم <span class="promo-accent">الرمز الترويجي</span>`,
      promo_code: "BONUSBET",
      promo_sub: "مكافأة تصل إلى 200%",
      promo_copy: "انسخ الزر",
      promo_copied: "نسخ",

      crash_title: "لعبة الاصطدام",
      crash_text_top: "لعبة متعددة اللاعبين في الوقت الفعلي. نقرة واحدة يمكن أن تغيّر كل شيء.",
      crash_text: "شاهد المضاعف وهو ينمو واسحب أرباحك قبل الاصطدام. جولات سريعة. قرار واحد.",
      crash_cta: "إلعب الآن",
      
      trust_title: `الثقة / <span class="trust-accent">الأمن</span>`,
      trust_text: "تستخدم  معايير أمنية حديثة لتوفير بيئة لعب آمنة ومستقرة لجميع اللاعبين",
      trust_text_extra: "يختار آلاف اللاعبين BizBet يوميًا للاستمتاع بالألعاب الشهيرة والتسجيل السريع والمكافآت السخية.",
      
      footer_warning: `قد يُسبب القمار الإدمان<br>
لا تلعب إلا إذا كنت تبلغ من العمر 18 عامًا أو أكثر`,
      footer_copy: "2026 جميع الحقوق محفوظة .Bizbet",
    }
};

let currentLang = localStorage.getItem("siteLang") || "en";

function setLanguage(lang) {
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Обновляем текст кнопки promoToggle
  if (promoWrapper?.classList.contains('hidden')) {
    promoToggle.textContent = translations[lang].show;
  } else {
    promoToggle.textContent = translations[lang].hide;
  }

  localStorage.setItem("siteLang", lang);
}

// ===============================
// ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА
// ===============================

const langs = document.querySelectorAll('.lang');

langs.forEach(langBtn => {
  langBtn.addEventListener('click', () => {

    document.querySelector('.lang.active')?.classList.remove('active');
    langBtn.classList.add('active');

    const selectedLang = langBtn.dataset.lang;
    setLanguage(selectedLang);

  });
});

// ===============================
// АВТОЗАГРУЗКА СОХРАНЕННОГО ЯЗЫКА
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("siteLang") || "en";
  setLanguage(savedLang);

  document.querySelector(`[data-lang="${savedLang}"]`)?.classList.add("active");
});


// ------ Промокод
const promoWrapper = document.getElementById('promoWrapper');
const promoToggle = document.getElementById('promoToggle');
const promoCode = document.getElementById('promoCode');
const promoCopied = document.getElementById('promoCopied');

let shownOnce = false;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  // Появляется при первом скролле
  if (!shownOnce && scrollTop > 100) {
    promoWrapper.classList.add('active');
    shownOnce = true;
  }

  // Полностью исчезает при возврате в самый верх
  if (scrollTop <= 10) {
    promoWrapper.classList.remove('active');
    promoWrapper.classList.remove('hidden');
    promoToggle.textContent = translations[currentLang].hide;
    shownOnce = false;
  }
});

promoToggle.addEventListener('click', () => {
  promoWrapper.classList.toggle('hidden');

  if (promoWrapper.classList.contains('hidden')) {
    promoToggle.textContent = translations[currentLang].show;
  } else {
    promoToggle.textContent = translations[currentLang].hide;
  }
});

promoCode.addEventListener('click', () => {
  navigator.clipboard.writeText(promoCode.textContent.trim());
  promoCopied.classList.add('show');

  setTimeout(() => {
    promoCopied.classList.remove('show');
  }, 1500);
});

// КНОПКА COPIED 

const promoMainBtn = document.getElementById('promoMainBtn');
const promoBtnText = promoMainBtn.querySelector('.promo-btn-text');
const promoBtnIcon = promoMainBtn.querySelector('.promo-btn-icon');

promoMainBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const promoCode = "GIFT300";

  navigator.clipboard.writeText(promoCode).then(() => {

    // меняем текст
    promoBtnText.textContent = translations[currentLang].promo_copied;

    // скрываем иконку
    promoBtnIcon.style.display = "none";

    // можно добавить класс для эффекта
    promoMainBtn.classList.add('copied');

    setTimeout(() => {
      promoBtnText.textContent = translations[currentLang].promo_copy;
      promoBtnIcon.style.display = "block";
      promoMainBtn.classList.remove('copied');
    }, 1500);
  });
});


// ===============================
// ПЛАВНЫЙ СКРОЛЛ С УЧЁТОМ ХЭДЕРА
// ===============================

const headerOffset = 80;
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section");

let isAutoScrolling = false;
let targetScrollPosition = 0;

document.querySelectorAll('a[href^="#"]:not(#promoMainBtn)').forEach(link => {
  link.addEventListener('click', function(e) {

    const href = this.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    e.preventDefault();

    // если логотип или "#"
    if (href === '#' || this.classList.contains('logo')) {

      isAutoScrolling = true;
      targetScrollPosition = 0;

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      navLinks.forEach(link => link.classList.remove("active"));
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    const elementPosition = target.getBoundingClientRect().top;
    targetScrollPosition = elementPosition + window.pageYOffset - headerOffset;

    isAutoScrolling = true;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth"
    });

    // сразу активируем выбранный пункт
    navLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");

  });
});


// =======================================
// АКТИВНЫЙ ПУНКТ МЕНЮ ПО СКРОЛЛУ
// =======================================

window.addEventListener("scroll", () => {

  // Если идёт автоскролл — проверяем, доехали ли
  if (isAutoScrolling) {
    if (Math.abs(window.scrollY - targetScrollPosition) < 2) {
      isAutoScrolling = false;
    } else {
      return; // блокируем обновление active во время прокрутки
    }
  }

  let currentSection = null;
  const centerLine = window.innerHeight / 2;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= centerLine && rect.bottom >= centerLine) {
      currentSection = section;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (
      currentSection &&
      link.getAttribute("href").substring(1) === currentSection.id
    ) {
      link.classList.add("active");
    }
  });

});