import { Locale } from "../i18n/config";

export type Plan = {
  id: "lesson" | "online" | "program";
  price: string;
  period?: Record<Locale, string>;
  popular?: boolean;
  title: Record<Locale, string>;
  desc: Record<Locale, string>;
  bullets: Record<Locale, string[]>;
  footnote?: Record<Locale, string>;
};

export const WHATSAPP_URL =
  "https://wa.me/905527787737?text=" +
  encodeURIComponent(
    "Merhaba Abdullah Bey, paketler hakkında daha ayrıntılı bilgi almak istiyorum.",
  );
export const PHONE_TEXT = "+90 552 778 77 37";
export const EMAIL_TEXT = "abdullahasik71@gmail.com";

export const plans: Plan[] = [
  {
    id: "lesson",
    title: {
      tr: "Birebir Özel veya Online Ders",
      en: "1-on-1 Private or Online Lesson",
    },
    price: "₺1.500+",
    period: { tr: "ders", en: "lesson" },
    desc: {
      tr: "Kendi klübümde ya da online görüşerek; kişiye özel program, ölçüm ve değerlendirme, teknik destek ve motivasyon.",
      en: "In-person or online sessions with personalized programming, tracking, assessment, and ongoing support.",
    },
    bullets: {
      tr: [
        "Kişiye özel antrenman planı",
        "Aylık performans ölçümü",
        "Gelişim değerlendirmesi",
        "Sürekli destek & motivasyon",
      ],
      en: [
        "Personalized training plan",
        "Monthly progress tracking",
        "Development assessment",
        "Ongoing support & motivation",
      ],
    },
    popular: true,
    footnote: {
      tr: "(1 Ders 1.500 ₺) • (8 Ders 10.400₺) • (12 Ders 14.400 ₺) • (24 Ders 28.800 ₺)",
      en: "(1 lesson ₺1,500) • (8 lesson ₺10.400) • (12 ₺14.400) • (24 ₺28,800)",
    },
  },
  {
    id: "online",
    title: { tr: "Online Koçluk Paketi", en: "Online Coaching Package" },
    price: "₺3.000",
    period: { tr: "ay", en: "month" },
    desc: {
      tr: "Sınırsız WhatsApp desteği, esnek program güncelleme, motivasyon ve rehberlik, detaylı ilerleme takibi.",
      en: "Unlimited WhatsApp support, flexible updates, guidance, and detailed progress tracking.",
    },
    bullets: {
      tr: [
        "Sınırsız WhatsApp desteği",
        "Esnek program güncelleme",
        "Motivasyon & rehberlik",
        "Detaylı ilerleme takibi",
      ],
      en: [
        "Unlimited WhatsApp support",
        "Flexible updates",
        "Guidance & motivation",
        "Detailed progress tracking",
      ],
    },
  },
  {
    id: "program",
    title: { tr: "Antrenman Programı Paketi", en: "Training Program Package" },
    price: "₺2.000",
    period: { tr: "tek sefer", en: "one time" },
    desc: {
      tr: "Kişiye özel antrenman programı, uygulama desteği, 1 defaya mahsus güncelleme; ev ve spor salonu için uygun.",
      en: "Personalized training program with implementation support, one-time update, suitable for home or gym.",
    },
    bullets: {
      tr: [
        "Kişiye özel program",
        "Uygulama desteği",
        "1 defa güncelleme",
        "Ev & spor salonu uyumlu",
      ],
      en: [
        "Personalized plan",
        "Implementation support",
        "One-time update",
        "Home & gym friendly",
      ],
    },
  },
];

export const stories = [
  {
    id: 1,
    name: "Beyza Nur Ş.",
    stars: 5,
    quote: {
      tr: "Abdullah Hoca, kilo verme ve sağlığıma yeniden kavuşma sürecimde bana çok destek oldu. İşinde çok profesyonel ve bilgili, bilgisini her daim güncel tutan biri. Her seferinde yaşadığım sağlık sorunlarımı da gözeterek bireysel programlar hazırlayıp gelişimime yardımcı oldu. Bunu yaparken benim yıldığım zamanlarda bile motive etti, kendisine çok teşekkür ederim 🌸🙏🏻",
      en: "Abdullah Hoca was incredibly supportive during my weight loss and health recovery process. He is very professional and knowledgeable in his field, always keeping his information up-to-date. He prepared individual programs, taking into account my specific health issues, to help me progress. Even when I felt discouraged, he motivated me. Thank you so much 🌸🙏🏻",
    },
    tagline: { tr: "Danışan", en: "Client" },
  },
  {
    id: 2,
    name: "Abdulkadir A.",
    stars: 5,
    quote: {
      tr: "Adana’da sağlıklı ve etkili bir spor deneyimi arayan herkes için güvenle tavsiye edilebilecek bir isim olan Abdullah Aşık, yaklaşık bir yıllık antrenman sürecim boyunca her türlü soru ve talebime uzmanlıkla yanıt vermiştir. Bilimsel verilere dayalı olarak hazırladığı antrenman programları ile benim için kabusa dönüşen kilo alma sorunumu hızlı ve sağlıklı şekilde aşmamı sağlamıştır. Profesyonel yaklaşımı ve bilgi birikiminden faydalanmayı sürdürdüğüm bir spor eğitmeni olan Abdullah hoca, sporu benim için daha keyifli ve verimli hale getirmekle kalmamış, kendime yeni hedefler belirlemem içinde teşvik etmiştir.",
      en: "Abdullah Aşık, a name I can confidently recommend to anyone seeking a healthy and effective sports experience in Adana, expertly answered all my questions and requests throughout my approximately one-year training process. His scientifically based training programs enabled me to overcome my weight gain problem, which had become a nightmare for me, quickly and healthily. As a sports trainer whose professional approach and knowledge I continue to benefit from, Abdullah not only made sports more enjoyable and productive for me, but also encouraged me to set new goals for myself.",
    },
    tagline: { tr: "Danışan", en: "Client" },
  },
  {
    id: 3,
    name: "Neslihan T.",
    stars: 5,
    quote: {
      tr: "Her ne kadar spora çok düzenli gidemesem de hocamın ilgisi, disiplini ,özverili ve saygılı yaklaşımı her zaman motive edici oldu. Alanındaki bilgisi ve profesyonelliği sayesinde kendimi hem fiziksel hem mental açıdan daha iyi hissediyorum . Gerçekten işini layığıyla yapan biri.🙏🏻",
      en: "Even though I couldn't go to the gym very regularly, my coach's attention, discipline, dedication, and respectful approach were always motivating. Thanks to his knowledge and professionalism in his field, I feel better both physically and mentally. He truly does his job exceptionally well. 🙏🏻",
    },
    tagline: { tr: "Danışan", en: "Client" },
  },
  {
    id: 4,
    name: "Zehra Ş.",
    stars: 5,
    quote: {
      tr: "Abdullah hoca gurup derslerinde de tercih ettiğim bir hocaydı.Birlikte derslere başlamadan önce dizlerimden rahatsızdım. şimdi ise ağrım kalmadığı gibi rahatlıkla diz çökebiliyorum.Hepsi bir yana güler yüzüyle verdiği enerji yeter.",
      en: "Abdullah was one of my preferred teachers for group classes as well. Before we started taking classes together, I had problems with my knees. Now, not only is the pain gone, but I can kneel comfortably. Above all, his cheerful demeanor and the energy he gives off are enough.",
    },
    tagline: { tr: "Danışan", en: "Client" },
  },
  {
    id: 5,
    name: "Emine Ferzan Ş.",
    stars: 5,
    quote: {
      tr: "Abdullah Aşık sabrın ve bilginin vucut bulmus halidir. Öğrencisinin fiziksel ve zihinsel ihtiyaçlarını muhteşem bir dogrulukla analiz ederek ona uygun programları çıkararak maksimum verimlilik sağlayabiliyor. Bunun yanı sıra kendini her daim yeni bilgilerle donatması da sizi geliştiriyor. Yillardir beraber çalışıyoruz ve bundan sonra da beraber ilerlemek isterim. Beynin ve kalbin de bir kas oldugunun ve onlarin da en az diger kas gruplari kadar önemli olduğunun farkında olan, düzeyli, insan iliskilerinde ne zaman nasil davranmasini bilen bir eğitmen.",
      en: "Abdullah Aşık is the embodiment of patience and knowledge. He analyzes his students' physical and mental needs with remarkable accuracy, creating programs tailored to them for maximum efficiency. Furthermore, his constant pursuit of new knowledge contributes to your development. We have worked together for years, and I would like to continue progressing together. He is a sophisticated instructor who understands that the brain and heart are muscles, just as important as other muscle groups, and knows how to behave appropriately in interpersonal relationships.",
    },
    tagline: { tr: "Danışan", en: "Client" },
  },
  {
    id: 6,
    name: "Eylül A.",
    stars: 5,
    quote: {
      tr: "Derslerimizi bitirdik artık , sadece fiziksel olarak değil, mental anlamda da kendimi çok daha iyi hissetmem de emeğiniz çok . Sabırlı yaklaşımınız , doğru yönlendirmeleriniz ve her zaman motive edici sözleriniz sayesinde sporu hayatımın vazgeçilmez parçası haline getirdim. Sizinle iyi ki yollarımız kesişmiş emeğiniz ve sabrınız için çok teşekkür ederim 🙏🏻😊",
      en: "We've finished our lessons now, and you've contributed so much to my feeling much better, not just physically but mentally. Thanks to your patient approach, correct guidance, and always motivating words, I've made sports an indispensable part of my life. I'm so glad our paths crossed; thank you so much for your effort and patience 🙏🏻😊",
    },
    tagline: { tr: "Danışan", en: "Client" },
  },
  {
    id: 7,
    name: "Abdullah G.",
    stars: 5,
    quote: {
      tr: "Abdullah hoca ile çalıştığımdan beri gün içerisinde olan enerjim gücüm ve günlük hayattaki verimliliğim artı kendisine antrenmanları için teşekkür ediyorum.",
      en: "Since I started working with Coach Abdullah, my energy, strength, and daily productivity have increased. I thank him for the training sessions.",
    },
    tagline: { tr: "Danışan", en: "Client" },
  },
  {
    id: 8,
    name: "Fatih K.",
    stars: 5,
    quote: {
      tr: "İlk günden beri içimde açıklayamadığım bir güven hissi vardı. Zaman geçtikçe bunun ne kadar doğru bir his olduğunu gördüm. İyi bir antrenör olmanın ötesinde, yoluma eşlik eden değerli bir dost olduğun için teşekkür ederim.",
      en: "From day one, I had an inexplicable feeling of trust within me. As time went on, I saw how true that feeling was. Thank you for being more than just a good coach; thank you for being a valuable friend who accompanied me on my journey.",
    },
    tagline: { tr: "Danışan", en: "Client" },
  },
] as const;
