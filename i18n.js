(function () {
  var D = {
    // عام
    "تمريض هب": "Nursing Hub", "© تمريض هب": "© Nursing Hub", "تسجيل الدخول": "Log in",
    // الرئيسية
    "تمريض هب | منصة طلبة التمريض": "Nursing Hub | Platform for nursing students",
    "ذاكر تمريض بالعربي، ومن موبايلك": "Study nursing, right from your phone",
    "ملفات ومراجعات واختبارات وحالات سريرية، مجانًا لكل طلبة التمريض في مصر والعالم العربي.": "Files, reviews, quizzes and clinical cases, free for all nursing students in Egypt and the Arab world.",
    "أقسام المنصة": "Platform sections",
    "الملفات والمذكرات": "Files & Notes", "حمّل ملخصات ومراجع PDF حسب المادة": "Download summaries and PDF references by subject",
    "اختبارات": "Quizzes", "أسئلة اختيار من متعدد مع الإجابة والتفسير": "Multiple-choice questions with answers and explanations",
    "حالات سريرية": "Clinical Cases", "سيناريوهات تدريبية خطوة بخطوة": "Step-by-step training scenarios",
    "اشرح لي": "Explain It", "شرح مبسط للمفاهيم والمصطلحات": "Simple explanations of concepts and terms",
    "المجتمع": "Community", "اسأل زمايلك وشارك خبرتك": "Ask your peers and share your experience",
    "حسابي": "My Account", "سجّل دخولك أو اعمل حساب جديد": "Log in or create a new account",
    "متاح": "Available", "قريبًا": "Soon",
    "عن المنصة": "About", "منشئ المحتوى": "Content creator", "للاستفسار:": "For inquiries:",
    "المحتوى هنا للتعلّم فقط، ولا يغني عن توجيه المشرف الإكلينيكي أو البروتوكولات المعتمدة في مكان التدريب.": "Content here is for learning only and does not replace your clinical supervisor's guidance or the approved protocols at your training site.",
    // الاختبارات
    "اختبارات | تمريض هب": "Quizzes | Nursing Hub",
    "اختار المادة وابدأ. كل سؤال بيظهر لك إجابته وتفسيرها مباشرة.": "Pick a subject and start. Each question shows the answer and explanation right away.",
    "مهارات أساسية": "Fundamentals", "تمريض الأطفال": "Pediatric Nursing", "نساء وتوليد": "Obstetrics & Gynecology",
    "السؤال التالي": "Next question", "شوف النتيجة": "See result", "ابدأ من الأول": "Start over",
    "الأسئلة هنا تجريبية للتعلّم والمراجعة، وراجع دايمًا المرجع المعتمد في كليتك.": "These questions are sample material for learning and review. Always check your college's approved reference.",
    "ممتاز، كل إجاباتك صح.": "Excellent, all your answers are correct.",
    "راجع الأسئلة اللي غلطت فيها وجرّب تاني.": "Review the questions you missed and try again.",
    "ما المعدل الطبيعي لضربات القلب عند البالغ أثناء الراحة؟": "What is the normal resting heart rate in an adult?",
    "من 60 إلى 100 نبضة في الدقيقة": "60 to 100 beats per minute", "من 30 إلى 50 نبضة في الدقيقة": "30 to 50 beats per minute",
    "من 110 إلى 140 نبضة في الدقيقة": "110 to 140 beats per minute", "من 150 إلى 180 نبضة في الدقيقة": "150 to 180 beats per minute",
    "المعدل الطبيعي للبالغ أثناء الراحة يقع بين 60 و100 نبضة في الدقيقة.": "The normal resting rate for an adult is between 60 and 100 beats per minute.",
    "ما المعدل الطبيعي للتنفس عند البالغ أثناء الراحة؟": "What is the normal resting respiratory rate in an adult?",
    "من 4 إلى 8 مرات في الدقيقة": "4 to 8 breaths per minute", "من 12 إلى 20 مرة في الدقيقة": "12 to 20 breaths per minute",
    "من 25 إلى 35 مرة في الدقيقة": "25 to 35 breaths per minute", "من 40 إلى 50 مرة في الدقيقة": "40 to 50 breaths per minute",
    "المعدل الطبيعي للبالغ من 12 إلى 20 نفس في الدقيقة.": "The normal adult rate is 12 to 20 breaths per minute.",
    "أي من هذه اللحظات تُعد من لحظات نظافة اليدين الخمس؟": "Which of these is one of the five moments of hand hygiene?",
    "بعد شرب الماء": "After drinking water", "قبل ملامسة المريض": "Before touching the patient",
    "بعد كتابة الملاحظات": "After writing notes", "قبل دخول غرفة الاستراحة": "Before entering the break room",
    "من اللحظات الخمس: قبل ملامسة المريض، وقبل الإجراء المعقم، وبعد التعرض لسوائل الجسم، وبعد ملامسة المريض، وبعد ملامسة محيط المريض.": "The five moments: before touching a patient, before an aseptic procedure, after exposure to body fluids, after touching a patient, and after touching the patient's surroundings.",
    "ما المعدل الطبيعي لتنفس حديث الولادة؟": "What is the normal respiratory rate of a newborn?",
    "من 10 إلى 15 مرة في الدقيقة": "10 to 15 breaths per minute", "من 30 إلى 60 مرة في الدقيقة": "30 to 60 breaths per minute",
    "من 70 إلى 90 مرة في الدقيقة": "70 to 90 breaths per minute",
    "حديث الولادة يتنفس أسرع من البالغ، والمعدل الطبيعي من 30 إلى 60 مرة في الدقيقة.": "A newborn breathes faster than an adult; the normal rate is 30 to 60 breaths per minute.",
    "ما موضع الحقن العضلي المناسب للرضيع؟": "What is the appropriate site for an intramuscular injection in an infant?",
    "العضلة الدالية في الكتف": "Deltoid muscle in the shoulder", "العضلة الألوية في الأرداف": "Gluteal muscle in the buttocks",
    "العضلة الوحشية الواسعة في الفخذ": "Vastus lateralis muscle in the thigh", "عضلة الساعد": "Forearm muscle",
    "الفخذ الأمامي الوحشي (العضلة الوحشية الواسعة) هو الموضع المفضل للرضع لأن عضلاته أكثر نموًا من الكتف والأرداف.": "The anterolateral thigh (vastus lateralis) is preferred for infants because its muscle is better developed than the shoulder or buttocks.",
    "أي علامة تدل على الجفاف عند الرضيع؟": "Which sign indicates dehydration in an infant?",
    "اليافوخ الأمامي غائر": "Sunken anterior fontanelle", "اليافوخ الأمامي منتفخ": "Bulging anterior fontanelle",
    "كثرة تغيير الحفاضات المبللة": "Frequent wet diaper changes", "الأغشية المخاطية رطبة": "Moist mucous membranes",
    "غؤور اليافوخ الأمامي من علامات الجفاف، ومعه قلة التبول وجفاف الفم وقلة الدموع.": "A sunken anterior fontanelle is a sign of dehydration, along with reduced urination, dry mouth and fewer tears.",
    "ما المعدل الطبيعي لضربات قلب الجنين؟": "What is the normal fetal heart rate?",
    "من 180 إلى 220 نبضة في الدقيقة": "180 to 220 beats per minute", "من 40 إلى 60 نبضة في الدقيقة": "40 to 60 beats per minute",
    "المعدل الطبيعي لقلب الجنين من 110 إلى 160 نبضة في الدقيقة.": "The normal fetal heart rate is 110 to 160 beats per minute.",
    "كم تقريبًا مدة الحمل الطبيعي محسوبة من أول يوم في آخر دورة؟": "Approximately how long is a normal pregnancy, counted from the first day of the last period?",
    "20 أسبوعًا": "20 weeks", "30 أسبوعًا": "30 weeks", "40 أسبوعًا": "40 weeks", "50 أسبوعًا": "50 weeks",
    "مدة الحمل الكاملة حوالي 40 أسبوعًا، ويُعتبر الحمل مكتمل المدة من 37 أسبوعًا.": "A full-term pregnancy lasts about 40 weeks, and it's considered term from 37 weeks.",
    "أي من هذه العلامات تستدعي طلب رعاية طبية فورية أثناء الحمل؟": "Which of these signs requires immediate medical care during pregnancy?",
    "غثيان خفيف في الصباح": "Mild morning nausea", "كثرة التبول": "Frequent urination",
    "نزول دم من المهبل": "Vaginal bleeding", "تعب خفيف في آخر اليوم": "Mild tiredness at the end of the day",
    "النزيف المهبلي أثناء الحمل علامة خطر تحتاج تقييمًا طبيًا فوريًا.": "Vaginal bleeding during pregnancy is a danger sign that needs immediate medical evaluation.",
    // الملفات
    "الملفات والمذكرات | تمريض هب": "Files & Notes | Nursing Hub",
    "ابحث أو اختار المادة، وافتح الملف أو حمّله على جهازك.": "Search or pick a subject, then open the file or download it.",
    "ابحث باسم الملف": "Search by file name", "الكل": "All", "فتح": "Open", "تحميل": "Download",
    "لسه مفيش ملفات هنا. بنضيف الملفات قريبًا.": "No files here yet. We're adding files soon.",
    "مفيش ملفات مطابقة للبحث.": "No files match your search.",
    "تعذر تحميل قائمة الملفات. حدّث الصفحة وجرّب تاني.": "Couldn't load the file list. Refresh and try again.",
    "الملفات هنا للدراسة والمراجعة. لو ملف يخصك وعايز تشيله، ابعت لنا وهنشيله فورًا.": "Files here are for study and review. If a file is yours and you want it removed, contact us and we'll remove it right away.",
    "إرشادات علاج وتشخيص ارتفاع ضغط الدم": "Hypertension Prevention, Diagnosis and Treatment Guidelines",
    "التمريض الباطني": "Medical-Surgical Nursing",
    "وزارة الصحة العراقية و USAID، 2013 (بالإنجليزية)": "Iraqi Ministry of Health & USAID, 2013 (English)",
    // الحساب
    "حسابي | تمريض هب": "My Account | Nursing Hub",
    "سجّل دخولك أو اعمل حساب جديد مجانًا.": "Log in or create a free account.",
    "حساب جديد": "New account", "الإيميل": "Email", "كلمة السر": "Password", "دخول": "Log in", "إنشاء الحساب": "Create account",
    "أهلًا بيك": "Welcome", "أنت مسجّل دخول بالإيميل:": "You're logged in with:", "تسجيل الخروج": "Log out",
    "الرجوع للصفحة الرئيسية": "Back to home",
    "بنستخدم الإيميل لتسجيل الدخول فقط، ومش بنشاركه مع حد.": "We use your email only for logging in and never share it.",
    "الإيميل أو كلمة السر غلط.": "Wrong email or password.",
    "الإيميل ده مسجّل قبل كده. جرّب تسجيل الدخول.": "This email is already registered. Try logging in.",
    "كلمة السر لازم تكون 8 حروف أو أكتر.": "Password must be at least 8 characters.",
    "اكتب إيميل صحيح.": "Enter a valid email.",
    "محاولات كتير. استنى شوية وجرّب تاني.": "Too many attempts. Wait a bit and try again.",
    "لازم تأكد الإيميل الأول من الرسالة اللي وصلتلك.": "Please confirm your email first from the message we sent.",
    "حصلت مشكلة. جرّب تاني بعد شوية.": "Something went wrong. Try again shortly.",
    "إعدادات الموقع لسه ماتضافتش.": "Site settings aren't configured yet.",
    "اكتب الإيميل وكلمة سر من 8 حروف على الأقل.": "Enter your email and a password of at least 8 characters.",
    "تم إنشاء الحساب. افتح رسالة التأكيد على إيميلك وبعدين سجّل دخولك.": "Account created. Open the confirmation message in your email, then log in.",
    "مفيش اتصال بالإنترنت أو حصلت مشكلة. جرّب تاني.": "No internet connection or an error occurred. Try again."
  };
  var KEY = "nh_lang", lang = "ar", busy = false, orig = new WeakMap(), ATTRS = ["placeholder", "aria-label", "title"];
  try { lang = localStorage.getItem(KEY) || "ar"; } catch (e) {}

  function tx(s) {
    var lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0], core = s.trim(), pre = "", out, m;
    if (!core) return s;
    if (/^[✓✗] /.test(core)) { pre = core.slice(0, 2); core = core.slice(2); }
    out = D[core];
    if (!out && core.indexOf(" - ") > -1) out = core.split(" - ").map(function (p) { return D[p] || p; }).join(" - ");
    if (!out && (m = core.match(/^سؤال (\d+) من (\d+)$/))) out = "Question " + m[1] + " of " + m[2];
    if (!out && (m = core.match(/^نتيجتك: (\d+) من (\d+)$/))) out = "Your score: " + m[1] + " of " + m[2];
    return out ? lead + pre + out + trail : s;
  }

  function walk(n) {
    if (n.nodeType === 3) {
      var p = n.parentNode && n.parentNode.nodeName;
      if (p === "SCRIPT" || p === "STYLE") return;
      var t = tx(n.nodeValue);
      if (t !== n.nodeValue) { if (!orig.has(n)) orig.set(n, n.nodeValue); n.nodeValue = t; }
    } else if (n.nodeType === 1 && n.nodeName !== "SCRIPT" && n.nodeName !== "STYLE") {
      ATTRS.forEach(function (a) {
        if (n.hasAttribute(a)) {
          var v = n.getAttribute(a), t = tx(v);
          if (t !== v) { n.__o = n.__o || {}; if (!(a in n.__o)) n.__o[a] = v; n.setAttribute(a, t); }
        }
      });
      for (var c = n.firstChild; c; c = c.nextSibling) walk(c);
    }
  }

  function restore(n) {
    if (n.nodeType === 3) { if (orig.has(n)) { n.nodeValue = orig.get(n); orig.delete(n); } }
    else if (n.nodeType === 1) {
      if (n.__o) { for (var a in n.__o) n.setAttribute(a, n.__o[a]); n.__o = null; }
      for (var c = n.firstChild; c; c = c.nextSibling) restore(c);
    }
  }

  var btn, title0;
  function apply() {
    busy = true;
    var h = document.documentElement;
    h.lang = lang; h.dir = lang === "en" ? "ltr" : "rtl";
    if (title0 === undefined) title0 = document.title;
    if (lang === "en") { walk(document.body); document.title = tx(title0); }
    else { restore(document.body); document.title = title0; }
    if (btn) { btn.textContent = lang === "en" ? "عربي" : "EN"; btn.setAttribute("aria-label", lang === "en" ? "التبديل إلى العربية" : "Switch to English"); }
    busy = false;
  }

  function init() {
    var st = document.createElement("style");
    st.textContent = ".lang-btn{font:inherit;font-weight:600;font-size:15px;min-height:44px;min-width:56px;padding:6px 16px;border-radius:999px;border:1px solid var(--line,#D3E0E3);background:var(--surface,#fff);color:var(--ink,#12303A);cursor:pointer}.lang-btn:focus-visible{outline:3px solid var(--accent,#0E7C86);outline-offset:3px}";
    document.head.appendChild(st);
    btn = document.createElement("button");
    btn.className = "lang-btn"; btn.type = "button";
    btn.addEventListener("click", function () {
      lang = lang === "en" ? "ar" : "en";
      try { localStorage.setItem(KEY, lang); } catch (e) {}
      apply();
    });
    var hd = document.querySelector("header.top");
    if (hd) hd.insertBefore(btn, hd.children[1] || null); else document.body.appendChild(btn);
    new MutationObserver(function (ms) {
      if (busy || lang !== "en") return;
      busy = true;
      ms.forEach(function (m) {
        if (m.type === "characterData") walk(m.target);
        else m.addedNodes.forEach(walk);
      });
      busy = false;
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
    apply();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
