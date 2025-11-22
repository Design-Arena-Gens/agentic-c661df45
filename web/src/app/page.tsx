"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type GreetingVariant = {
  id: string;
  label: string;
  greeting: string;
  transliteration: string;
  description: string;
  context: string;
  tip: string;
};

const greetingVariants: GreetingVariant[] = [
  {
    id: "msa",
    label: "العربية الفصحى",
    greeting: "مَرْحَبًا",
    transliteration: "Marḥaban",
    description: "تحية رسمية راقية تناسب اللقاءات الأولى والمناسبات العامة.",
    context:
      "استخدمها في الاجتماعات المهنية، أو عند مخاطبة جمهور، أو حين ترغب في تحية شخص للمرة الأولى.",
    tip: "أضف ابتسامة بسيطة ونبرة مطمئنة، ثم اتبعها باسمك لتعزيز التواصل.",
  },
  {
    id: "levant",
    label: "اللهجة الشامية",
    greeting: "مَرْحَبَا",
    transliteration: "Marḥaba",
    description: "تحية دافئة ناعمة تخلق ألفة من اللحظة الأولى.",
    context:
      "مثالية لغرف الدردشة الصوتية، أو لقاء الأصدقاء، أو تقديم نفسك لجمهور محب للأجواء العائلية.",
    tip: "يمكنك إطالة الألف الأخيرة قليلًا لتبدو طبيعية أكثر، مع رفع بسيط للحاجبين.",
  },
  {
    id: "egypt",
    label: "اللهجة المصرية",
    greeting: "أَهْلًا!",
    transliteration: "Ahlan!",
    description: "تحية مرحة وسريعة الإيقاع تعبّر عن الحفاوة والاستقبال.",
    context:
      "تلائم الفعاليات غير الرسمية، ومحادثات البث المباشر، وأي مساحة تريد فيها كسر الجليد بسرعة.",
    tip: "أضف عبارة متابعة مثل «أهلاً بيك» لإظهار الاستعداد للترحيب والاستماع.",
  },
  {
    id: "gulf",
    label: "اللهجة الخليجية",
    greeting: "يَا هَلَا وَغَلَا",
    transliteration: "Ya hala w'ghala",
    description: "تحية فخمة ثرية تعكس الكرم والاحترام الاجتماعي.",
    context:
      "استخدمها في اللقاءات مع شركاء خليجيين أو عند الرغبة في تأكيد التقدير والمكانة.",
    tip: "يصح أن تتبعها بسؤال عن الصحة مثل «كيف الحال؟» لإظهار الاهتمام الحقيقي.",
  },
];

const etiquetteHighlights = [
  {
    title: "ابدأ بالسلام ثم الاسم",
    body: "قدّم نفسك بعد التحية مباشرة. مثال: «مَرْحَبًا، أنا ليلى من فريق التصميم» لربط التحية بهدف اللقاء.",
  },
  {
    title: "وازن بين الرسمية والدفء",
    body: "اختر التحية بناءً على السياق. الفصحى للمناسبات الرسمية، واللهجات للمساحات الاجتماعية والودية.",
  },
  {
    title: "اختتم بسؤال قصير",
    body: "عبارات مثل «كيف أخبارك؟» أو «جاهزين نبدأ؟» تفتح الباب للحوار وتظهر الإنصات النشط.",
  },
];

const flowMoments = [
  {
    label: "تهيئة الجو",
    detail:
      "خذ نفسًا عميقًا قبل أن تتحدث. ضبط الإيقاع الصوتي يساعدك على إبراز التحية بثقة وهدوء.",
  },
  {
    label: "التواصل البصري",
    detail:
      "انظر للحضور لبضع ثوانٍ أثناء قول التحية. هذا يمنح الكلمات وزنًا ويعكس اهتمامك الحقيقي.",
  },
  {
    label: "متابعة ذكية",
    detail:
      "أعد صياغة ما قاله الطرف الآخر أو شارك توقعًا قصيرًا للجلسة لتثبت أنك حاضر في الحوار.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeGreeting = useMemo(
    () => greetingVariants[activeIndex],
    [activeIndex],
  );

  const cycleGreeting = () => {
    setActiveIndex((current) => (current + 1) % greetingVariants.length);
  };

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.tagline}>مرحبا بك</span>
        <h1 className={styles.headline}>قلها بثقة وابدأ حديثًا ملهمًا</h1>
        <p className={styles.lede}>
          التحية العربية أكثر من مجرد كلمة؛ هي وعدٌ بالاحترام، ونافذة لاكتشاف
          ثقافة غنية بالتنوع. تعلم كيف تختار النبرة المناسبة، وتضبط إيقاع
          حديثك، وتترك انطباعًا أول لا يُنسى.
        </p>
        <div className={styles.heroActions}>
          <button
            type="button"
            className={styles.primaryAction}
            onClick={cycleGreeting}
          >
            جرّب تحية جديدة
          </button>
          <a className={styles.secondaryAction} href="#insights">
            خطوات تطبيقية
          </a>
        </div>
      </header>

      <section className={styles.showcase} aria-labelledby="greeting-options">
        <div className={styles.dialectList} role="tablist" id="greeting-options">
          {greetingVariants.map((variant, index) => (
            <button
              key={variant.id}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              className={`${styles.dialectButton} ${
                activeIndex === index ? styles.dialectButtonActive : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {variant.label}
            </button>
          ))}
        </div>

        <article
          className={styles.greetingCard}
          role="tabpanel"
          aria-live="polite"
        >
          <header className={styles.greetingHeader}>
            <p className={styles.greeting}>{activeGreeting.greeting}</p>
            <span className={styles.transliteration}>
              {activeGreeting.transliteration}
            </span>
          </header>
          <p className={styles.description}>{activeGreeting.description}</p>
          <p className={styles.context}>{activeGreeting.context}</p>
          <p className={styles.tip}>{activeGreeting.tip}</p>
        </article>
      </section>

      <section className={styles.insights} id="insights">
        {etiquetteHighlights.map((item) => (
          <article key={item.title} className={styles.insightCard}>
            <h3 className={styles.insightTitle}>{item.title}</h3>
            <p className={styles.insightBody}>{item.body}</p>
          </article>
        ))}
      </section>

      <section className={styles.flow}>
        <h2 className={styles.flowHeadline}>إيقاع التحية في ثلاث لحظات</h2>
        <div className={styles.flowList}>
          {flowMoments.map((moment) => (
            <article key={moment.label} className={styles.flowCard}>
              <h3 className={styles.flowLabel}>{moment.label}</h3>
              <p className={styles.flowDetail}>{moment.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerNote}>
          كل «مرحبا» تبني جسرًا صغيرًا. اختر كلماتك، واجعل حضورك هو الدعوة
          الأولى للحوار.
        </p>
      </footer>
    </div>
  );
}
