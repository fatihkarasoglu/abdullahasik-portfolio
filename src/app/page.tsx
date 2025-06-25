"use client";

import React, {
  useState,
  useRef,
  FormEvent,
  SetStateAction,
  useEffect,
} from "react";
import ReactDOM from "react-dom";
import { GiConfirmed } from "react-icons/gi";
import { FiPlus, FiMinus, FiChevronDown } from "react-icons/fi";
import { FaInstagram, FaTiktok, FaSquareXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import ThemeSwitch from "./components/ThemeSwitch";
import Image from "next/image";
import whiteLogo from "../../public/white-logo.png";
import blackLogo from "../../public/black-logo.png";
import main from "../../public/5.png";
// import { FaMale, FaFemale } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type LanguageKey = "en" | "tr";

type TranslatableText = (lang: LanguageKey) => string;

interface FaqItem {
  question: TranslatableText;
  answer: TranslatableText;
}

type Translations = {
  semititle: (language: LanguageKey) => string;
  title: (language: LanguageKey) => string;
  heroText: (language: LanguageKey) => string;
  aboutMe: (language: LanguageKey) => string;
  aboutMeText: (language: LanguageKey) => string;
  mstText: (language: LanguageKey) => string;
  mstText1: (language: LanguageKey) => string;
  mstText2: (language: LanguageKey) => string;
  mstText3: (language: LanguageKey) => string;
  mttText: (language: LanguageKey) => string;
  mttText1Title: (language: LanguageKey) => string;
  mttText1: (language: LanguageKey) => string;
  mttText2Title: (language: LanguageKey) => string;
  mttText2: (language: LanguageKey) => string;
  mttText3Title: (language: LanguageKey) => string;
  mttText3: (language: LanguageKey) => string;
  mttText4Title: (language: LanguageKey) => string;
  mttText4: (language: LanguageKey) => string;
  servicesTitle: (language: LanguageKey) => string;
  QAccess: (language: LanguageKey) => string;
  servicesHelp: (language: LanguageKey) => string;
  servicesHelpAbout: (language: LanguageKey) => string;
  getInTouch: (language: LanguageKey) => string;
  contactInfo: (language: LanguageKey) => string;
  clientStories: (language: LanguageKey) => string;
  contact: (language: LanguageKey) => string;
  contactText: (language: LanguageKey) => string;
  pName: (language: LanguageKey) => string;
  pEmail: (language: LanguageKey) => string;
  pPhone: (language: LanguageKey) => string;
  pMessage: (language: LanguageKey) => string;
  pSubject: (language: LanguageKey) => string;
  followMe: (language: LanguageKey) => string;
  scrollingText: (language: LanguageKey) => string;
  references: (language: LanguageKey) => string;
  Insta: (language: LanguageKey) => string;
  faqs: (language: LanguageKey) => string;
  faqQ: (language: LanguageKey) => string;
  faqW: (language: LanguageKey) => string;
};

type Service = {
  id: number;
  title: string | ((lang: LanguageKey) => string);
  description: string | ((lang: LanguageKey) => string);
  descriptionText: string | ((lang: LanguageKey) => string);
  price: string | ((lang: LanguageKey) => string);
};

const translations: { [key in LanguageKey]: Translations } = {
  en: {
    semititle: (lang) => (lang === "en" ? "Professional Personal Trainer" : ""),
    title: (lang) => (lang === "en" ? "Abdullah Aşık" : ""),
    heroText: (lang) =>
      lang === "en"
        ? "Reach your goal body with me! Start now with personal fitness coaching and a personalized workout program."
        : "",
    aboutMe: (lang) => (lang === "en" ? "About Me" : ""),
    aboutMeText: (lang) =>
      lang === "en"
        ? "I started my university education in Sports Management in 2018. I started working as a personal coach in the sports sector in 2019. I had the opportunity to combine my theoretical knowledge with practice by being actively involved in the field both during and after my education. Throughout my career, I have placed great importance on developing myself as a fitness professional. I try to keep my knowledge up to date by receiving various trainings from international organizations such as NASM (National Academy of Sports Medicine) and EREPS (European Register of Exercise Professionals). I continue to learn to offer the most accurate and effective methods to my clients by closely following the developments in sports science. I have been serving within MAC (Mars Athletic) since 2021; I contribute to the physical development of individuals with training programs that I have prepared specifically for their goals, needs and lifestyles. At the same time, I provide one-on-one guidance so that they can maintain their motivation and manage the process with pleasure. For me, sports is not only a physical transformation; it is also the basis of mental strengthening. Therefore, my goal is to raise individuals who are strong both physically and mentally and to make a sustainable difference in the sector."
        : "",
    mstText: (lang) => (lang === "en" ? "My Specialization Trainings" : ""),
    mstText1: (lang) =>
      lang === "en"
        ? "EREPS (European Register of Exercise Professionals) EQF Level 4"
        : "",
    mstText2: (lang) =>
      lang === "en" ? "NASM (National Academy of Sports Medicine) CPT" : "",
    mstText3: (lang) => (lang === "en" ? "MAC Academy" : ""),
    mttText: (lang) => (lang === "en" ? "My Training Techniques" : ""),
    mttText1Title: (lang) =>
      lang === "en" ? "Weight Control (Weight Gain - Weight Loss)" : "",
    mttText1: (lang) =>
      lang === "en"
        ? "I support healthy living habits with exercise during the weight gain/loss process and provide guidance and motivation regarding nutrition."
        : "",
    mttText2Title: (lang) => (lang === "en" ? "Strength Training" : ""),
    mttText2: (lang) =>
      lang === "en"
        ? "I prepare individual strength programs focused on increasing muscle mass, general strength development and performance."
        : "",
    mttText3Title: (lang) =>
      lang === "en" ? "Posture Analysis and Exercise Planning" : "",
    mttText3: (lang) =>
      lang === "en"
        ? "Posture Analysis and Exercise Planning I identify posture disorders in daily life and offer personal exercise plans to improve your posture."
        : "",
    mttText4Title: (lang) =>
      lang === "en" ? "Cardiovascular Training Planning" : "",
    mttText4: (lang) =>
      lang === "en"
        ? "I create personalized cardio programs to increase endurance, support fat burning, and improve heart health."
        : "",
    servicesTitle: (lang) => (lang === "en" ? "Special Training Packages" : ""),
    servicesHelp: (lang) =>
      lang === "en" ? "Have questions about which package to choose?" : "",
    servicesHelpAbout: (lang) => (lang === "en" ? "Ask me!" : ""),
    QAccess: (lang) => (lang === "en" ? "Quick Access" : ""),
    getInTouch: (lang) => (lang === "en" ? "Get In Touch" : ""),
    contactInfo: (lang) => (lang === "en" ? "Contact Information" : ""),
    clientStories: (lang) => (lang === "en" ? "Member Reviews" : ""),
    contact: (lang) => (lang === "en" ? "Get In Touch" : ""),
    contactText: (lang) =>
      lang === "en"
        ? "The change you dream of is just a message away. I am here for you; let's start together."
        : "",
    pName: (lang) => (lang === "en" ? "Name" : ""),
    pEmail: (lang) => (lang === "en" ? "Email" : ""),
    pPhone: (lang) => (lang === "en" ? "Phone" : ""),
    pMessage: (lang) => (lang === "en" ? "Your Message" : ""),
    pSubject: (lang) => (lang === "en" ? "Send" : ""),
    followMe: (lang) => (lang === "en" ? "Follow Me" : ""),
    scrollingText: (lang) =>
      lang === "en" ? "scroll down / use arrow down" : "",
    references: (lang) => (lang === "en" ? "References" : ""),
    Insta: (lang) => (lang === "en" ? "My Instagram Posts" : ""),
    faqs: (lang) => (lang === "en" ? "Frequently Asked Questions" : ""),
    faqQ: (lang) =>
      lang === "en" ? "If you can't find answers to your questions," : "",
    faqW: (lang) => (lang === "en" ? "let's contact via WhatsApp!" : ""),
  },
  tr: {
    semititle: (lang) => (lang === "tr" ? "Profesyonel Kişisel Antrenör" : ""),
    title: (lang) => (lang === "tr" ? "Abdullah Aşık" : ""),
    heroText: (lang) =>
      lang === "tr"
        ? "Hedefindeki vücuda benimle birlikte ulaş! Kişisel fitness koçluğu ve sana özel antrenman programıyla şimdi başla."
        : "",
    aboutMe: (lang) => (lang === "tr" ? "Hakkımda" : ""),
    aboutMeText: (lang) =>
      lang === "tr"
        ? "2018 yılında Spor Yöneticiliği alanında üniversite eğitimime başladım. 2019 yılından itibaren ise spor sektöründe personal coach olarak çalışmaya başladım. Hem eğitim hayatım boyunca hem de sonrasında sahada aktif olarak yer alarak teorik bilgimi pratikle birleştirme fırsatı buldum. Kariyerim boyunca fitness profesyoneli olarak kendimi geliştirmeye büyük önem verdim. NASM (National Academy of Sports Medicine) ve EREPS (European Register of Exercise Professionals) gibi uluslararası kuruluşlardan çeşitli eğitimler alarak bilgi birikimimi güncel tutmaya çalışıyorum. Spor bilimindeki gelişmeleri yakından takip ederek danışanlarıma en doğru ve etkili yöntemleri sunmak için öğrenmeye devam ediyorum. 2021 yılından bu yana MAC (Mars Athletic) bünyesinde hizmet veriyor; bireylerin hedeflerine, ihtiyaçlarına ve yaşam tarzlarına özel olarak hazırladığım antrenman programlarıyla onların fiziksel gelişimlerine katkı sağlıyorum. Aynı zamanda motivasyonlarını sürdürebilmeleri ve süreci keyifle yönetebilmeleri için birebir rehberlik yapıyorum. Benim için spor, sadece fiziksel dönüşüm değil; aynı zamanda mental olarak güçlenmenin de temelidir. Bu yüzden amacım, hem bedensel hem de zihinsel olarak güçlü bireyler yetiştirmek ve sektörde sürdürülebilir bir fark yaratmak."
        : "",
    mstText: (lang) => (lang === "tr" ? "Uzmanlık Eğitimlerim" : ""),
    mstText1: (lang) =>
      lang === "tr"
        ? "EREPS (Avrupa Egzersiz Profesyonelleri Sicili) EQF Seviye 4"
        : "",
    mstText2: (lang) =>
      lang === "tr" ? "NASM (Ulusal Spor Hekimliği Akademisi) CPT" : "",
    mstText3: (lang) => (lang === "tr" ? "MAC Akademi" : ""),
    mttText: (lang) => (lang === "tr" ? "Antrenman Tekniklerim" : ""),
    mttText1Title: (lang) =>
      lang === "tr" ? "Kilo Kontrolü (Kilo Alma – Kilo Verme)" : "",
    mttText1: (lang) =>
      lang === "tr"
        ? "Kilo alma/verme sürecinde egzersizle birlikte sağlıklı yaşam alışkanlıklarını destekliyor, beslenme konusunda yönlendirme ve motivasyon sağlıyorum."
        : "",
    mttText2Title: (lang) => (lang === "tr" ? "Kuvvet Antrenmanı" : ""),
    mttText2: (lang) =>
      lang === "tr"
        ? "Kuvvet Antrenmanı Kas kütlesi artırma, genel güç gelişimi ve performans odaklı bireysel kuvvet programları hazırlıyorum."
        : "",
    mttText3Title: (lang) =>
      lang === "tr" ? "Postür Analizi ve Egzersiz Planlaması" : "",
    mttText3: (lang) =>
      lang === "tr"
        ? "Postür Analizi ve Egzersiz Planlaması Günlük yaşamda duruş bozukluklarını tespit ederek, postürünüzü iyileştirmeye yönelik kişisel egzersiz planları sunuyorum."
        : "",
    mttText4Title: (lang) =>
      lang === "tr" ? "Kardiyovasküler Antrenman Planlaması" : "",
    mttText4: (lang) =>
      lang === "tr"
        ? "Kardiyovasküler Antrenman Planlaması Dayanıklılığı artırmak, yağ yakımını desteklemek ve kalp sağlığını geliştirmek için kişiye özel kardiyo programları oluşturuyorum."
        : "",
    servicesTitle: (lang) => (lang === "tr" ? "Özel Antrenman Paketleri" : ""),
    QAccess: (lang) => (lang === "tr" ? "Hızlı Erişim" : ""),
    servicesHelp: (lang) =>
      lang === "tr" ? "Hangi paketi seçeceğinle ilgili soruların mı var?" : "",
    servicesHelpAbout: (lang) => (lang === "tr" ? "Bana sor!" : ""),
    getInTouch: (lang) => (lang === "tr" ? "İletişime Geçelim" : ""),
    contactInfo: (lang) => (lang === "tr" ? "İletişim Bilgileri" : ""),
    clientStories: (lang) => (lang === "tr" ? "Üye Değerlendirmeleri" : ""),
    contact: (lang) => (lang === "tr" ? "İletişime Geçelim" : ""),
    contactText: (lang) =>
      lang === "tr"
        ? "Hayal ettiğin değişim sadece bir mesaj uzağında. Sizin için buradayım; birlikte başlayalım."
        : "",
    pName: (lang) => (lang === "tr" ? "Ad" : ""),
    pEmail: (lang) => (lang === "tr" ? "E-posta" : ""),
    pPhone: (lang) => (lang === "tr" ? "Telefon" : ""),
    pMessage: (lang) => (lang === "tr" ? "Mesajınız" : ""),
    pSubject: (lang) => (lang === "tr" ? "Gönder" : ""),
    followMe: (lang) => (lang === "tr" ? "Beni Takip Edin" : ""),
    scrollingText: (lang) =>
      lang === "tr" ? "Aşağı kaydır / Aşağı okunu kullan" : "",
    references: (lang) => (lang === "tr" ? "Referanslar" : ""),
    Insta: (lang) => (lang === "tr" ? "Instagram Gönderilerim" : ""),
    faqs: (lang) => (lang === "tr" ? "Sıkça Sorulan Sorular" : ""),
    faqQ: (lang) => (lang === "tr" ? "Sorularına cevap bulamadıysan," : ""),
    faqW: (lang) =>
      lang === "tr" ? "WhatsApp üzerinden iletişime geçelim!" : "",
  },
};

const services: Service[] = [
  {
    id: 1,
    title: (lang) =>
      lang === "en"
        ? "One-on-One Private or Online Lesson"
        : "Birebir Özel veya Online Ders",
    description: (lang) =>
      lang === "en"
        ? "In-house or online meetings, personalized, detailed and up-to-date training program, monthly performance measurements, comprehensive development evaluation, continuous technical support and motivation."
        : "Kendi klübümde ya da online görüşerek, kişiye özel, detaylı ve güncel antrenman programı, aylık performans ölçümleri, kapsamlı gelişim değerlendirmesi, sürekli teknik destek ve motivasyon.",
    descriptionText: (lang) =>
      lang === "en"
        ? "(1 Lesson 1.200 ₺) - (12 Lessons 11.400 ₺) - (24 Lessons 22.200 ₺) - (36 Lessons 32.400 ₺)"
        : "(1 Ders 1.200 ₺) - (12 Ders 11.400 ₺) - (24 Ders 22.200 ₺) - (36 Ders 32.400 ₺)",
    price: "",
  },
  {
    id: 2,
    title: (lang) =>
      lang === "en" ? "Online Coaching Package" : "Online Koçluk Paketi",
    description: (lang) =>
      lang === "en"
        ? "Unlimited WhatsApp support, flexible schedule updates, motivation and guidance, detailed tracking of progress"
        : "Sınırsız WhatsApp desteği, esnek program güncelleme, motivasyon ve rehberlik, ilerlemenin detaylı takibi",
    descriptionText: (lang) => (lang === "en" ? "" : ""),
    price: "3.000 ₺",
  },
  {
    id: 3,
    title: (lang) =>
      lang === "en" ? "Training Program Package" : "Antrenman Programı Paketi",
    description: (lang) =>
      lang === "en"
        ? "Personalized training program, program application support, one-time update, suitable for home and gym"
        : "Kişiye özel antrenman programı, program uygulama desteği, 1 defaya mahsus güncelleme, ev ve spor salonu için uygun",
    descriptionText: (lang) => (lang === "en" ? "" : ""),
    price: "2.000 ₺",
  },
];

// const stories = [
//   {
//     id: 1,
//     icon: <FaMale className="h-8 w-8 mb-3 text-blue-500" />,
//     title: "John M.",
//     description: (lang: LanguageKey) =>
//       lang === "en"
//         ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
//         : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
//     quote: (lang: LanguageKey) =>
//       lang === "en"
//         ? "'The best investment I've ever made was in my health."
//         : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
//   },
//   {
//     id: 2,
//     icon: <FaFemale className="h-8 w-8 mb-3 text-pink-500" />,
//     title: "Sarah J.",
//     description: (lang: LanguageKey) =>
//       lang === "en"
//         ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
//         : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
//     quote: (lang: LanguageKey) =>
//       lang === "en"
//         ? "'The best investment I've ever made was in my health."
//         : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
//   },
//   {
//     id: 3,
//     icon: <FaMale className="h-8 w-8 mb-3 text-gray-500" />,
//     title: "Mike R.",
//     description: (lang: LanguageKey) =>
//       lang === "en"
//         ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
//         : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
//     quote: (lang: LanguageKey) =>
//       lang === "en"
//         ? "'The best investment I've ever made was in my health."
//         : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
//   },
//   {
//     id: 4,
//     icon: <FaFemale className="h-8 w-8 mb-3 text-green-500" />,
//     title: "Emma L.",
//     description: (lang: LanguageKey) =>
//       lang === "en"
//         ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
//         : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
//     quote: (lang: LanguageKey) =>
//       lang === "en"
//         ? "'The best investment I've ever made was in my health."
//         : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
//   },
//   {
//     id: 5,
//     icon: <FaMale className="h-8 w-8 mb-3 text-purple-500" />,
//     title: "David B.",
//     description: (lang: LanguageKey) =>
//       lang === "en"
//         ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
//         : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
//     quote: (lang: LanguageKey) =>
//       lang === "en"
//         ? "'The best investment I've ever made was in my health."
//         : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
//   },
//   {
//     id: 6,
//     icon: <FaFemale className="h-8 w-8 mb-3 text-blue-400" />,
//     title: "Lauren H.",
//     description: (lang: LanguageKey) =>
//       lang === "en"
//         ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
//         : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
//     quote: (lang: LanguageKey) =>
//       lang === "en"
//         ? "'The best investment I've ever made was in my health."
//         : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
//   },
//   {
//     id: 7,
//     icon: <FaMale className="h-8 w-8 mb-3 text-pink-400" />,
//     title: "Tom A.",
//     description: (lang: LanguageKey) =>
//       lang === "en"
//         ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
//         : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
//     quote: (lang: LanguageKey) =>
//       lang === "en"
//         ? "'The best investment I've ever made was in my health."
//         : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
//   },
//   {
//     id: 8,
//     icon: <FaFemale className="h-8 w-8 mb-3 text-purple-400" />,
//     title: "Kate P.",
//     description: (lang: LanguageKey) =>
//       lang === "en"
//         ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
//         : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
//     quote: (lang: LanguageKey) =>
//       lang === "en"
//         ? "'The best investment I've ever made was in my health."
//         : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
//   },
// ];

type PackageCardWithDetailsProps = {
  theme: string;
  language: LanguageKey;
};

function getValue(
  value: string | ((lang: LanguageKey) => string),
  lang: LanguageKey
): string {
  return typeof value === "function" ? value(lang) : value;
}

const PackageCardWithDetails: React.FC<PackageCardWithDetailsProps> = ({
  theme,
  language,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 md:px-40 [&>*:first-child]:border-l-red-600 [&>*:first-child]:border-l-8">
      {services.map((service) => (
        <div
          key={service.id}
          className={`p-6 my-4 rounded-xl transition-all duration-300 hover:-translate-y-2 shadow-lg  ${
            theme === "dark" ? "bg-[#2a2a2a]" : "bg-[#f6f6f6]"
          }`}
          aria-label={`Service: ${getValue(service.title, language)}`}
        >
          <div className="flex items-center text-lg font-semibold justify-between mb-4">
            <span>{getValue(service.title, language)} </span>
            <span className="text-lg md:text-xl font-bold italic">
              {getValue(service.price, language)}
            </span>
          </div>
          <p className="">{getValue(service.description, language)}</p>
          <p className="italic text-lg font-medium flex flex-col md:flex-row gap-2">
            {getValue(service.descriptionText, language)
              .split(" - ")
              .map((item, index) => (
                <span key={index}>{item}</span>
              ))}
          </p>
        </div>
      ))}
    </div>
  );
};

const Modal = ({
  isOpen,
}: {
  isOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return ReactDOM.createPortal(
    <div className="fixed bg-black/50 bg-opacity-50 z-50 w-full h-full flex justify-center items-center top-0">
      <div className="bg-white opacity-100 px-6 py-6 rounded-lg flex flex-col items-center">
        <GiConfirmed className="text-green-500 w-28 h-28" />
        <h2 className="text-green-600 font-semibold text-2xl mb-2">
          Mesajınız başarıyla gönderildi!
        </h2>
        <div>
          <p className="text-xl text-black">
            Teşekkür ederim! Mümkün olan en kısa sürede sizinle iletişime
            geçeceğim.
          </p>
          <button
            onClick={() => isOpen(false)}
            className="bg-blue-500 text-white w-full p-2 rounded-lg mt-6 hover:bg-blue-600 cursor-pointer"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

const faqs: FaqItem[] = [
  {
    question: (lang) =>
      lang === "tr"
        ? "Bu hizmetten nasıl bir sonuç alırım?"
        : "What kind of results will I get from this service?",
    answer: (lang) =>
      lang === "tr"
        ? "Hedefin ne olursa olsun — ister kilo almak, ister kilo vermek, ister şekillenip sıkılaşmak — sana özel olarak belirlediğimiz yol haritasıyla profesyonel bir şekilde ilerliyoruz. Senin beklentilerin ve bu sporun sana kazandırabilecekleriyle ortak noktada buluşarak, süreci hem verimli hem de sürdürülebilir hale getiriyoruz. Bu sayede net ve tatmin edici sonuçlara ulaşman mümkün oluyor."
        : "Whatever your goal is — whether it’s gaining weight, losing weight, shaping up and tightening up — we progress professionally with a roadmap we have specifically designed for you. We make the process both efficient and sustainable by meeting your expectations and what this sport can bring to you. In this way, it is possible for you to achieve clear and satisfying results.",
  },
  {
    question: (lang) =>
      lang === "tr"
        ? "Antrenman programı bana özel mi hazırlanıyor?"
        : "Is the training program prepared specifically for me?",
    answer: (lang) =>
      lang === "tr"
        ? "Evet, program tamamen sana özel hazırlanıyor. Önceliğimiz senin hedeflerin olmak üzere; yaşın, cinsiyetin, vücut tipin, mevcut fiziksel aktivite durumun, yaşam tarzın ve varsa sağlık problemlerin gibi birçok faktörü göz önünde bulundurarak sana en uygun planı oluşturuyorum. Böylece sürecin hem güvenli hem de etkili geçmesini sağlıyoruz."
        : "Yes, the program is prepared completely specifically for you. Our priority is your goals; I create the most suitable plan for you by considering many factors such as your age, gender, body type, current physical activity status, lifestyle and health problems if any. In this way, we ensure that the process is both safe and effective.",
  },
  {
    question: (lang) =>
      lang === "tr"
        ? "Daha önce hiç spor yapmadım, bu sistem bana uygun mu?"
        : "I have never done sports before, is this system suitable for me?",
    answer: (lang) =>
      lang === "tr"
        ? "Kesinlikle uygun, hatta çoğu zaman daha da gerekli. Daha önce spor yapmamış bireylerin, egzersiz adaptasyon sürecini sağlıklı geçirebilmesi, sakatlanma riskini en aza indirebilmesi ve temel kuvvet gelişimini doğru şekilde inşa edebilmesi için profesyonel rehberlik büyük önem taşır. Bu sistem, bilgiye doğrudan ulaşmanı ve hedeflerine kontrollü ama etkili bir şekilde ilerlemeni sağlar. Bu da süreci hem daha güvenli hem de daha hızlı hale getirir."
        : "It is absolutely appropriate, and often even more necessary. Professional guidance is of great importance for individuals who have not done sports before to have a healthy adaptation process, to minimize the risk of injury and to build basic strength development correctly. This system allows you to access information directly and progress towards your goals in a controlled but effective way. This makes the process both safer and faster.",
  },
  {
    question: (lang) =>
      lang === "tr"
        ? "Uzaktan eğitimde gerçekten ilerleme kaydedebilir miyim?"
        : "Can I really make progress with distance learning?",
    answer: (lang) =>
      lang === "tr"
        ? "Elbette, ancak bu tamamen kişinin sürece olan bağlılığıyla ilgilidir. Uzaktan eğitim, birebir personal trainer eşliğinde çalışmakla aynı değilmiş gibi görünse de, sana özel hazırlanmış bir programın olması ve her zaman ulaşabileceğin bir eğitmen desteğiyle süreç çok daha etkili hale gelir. Sorularına anında cevap alabilmen, yönsüz ve tek başına çalışmaktan çok daha hızlı ve sağlıklı ilerlemeni sağlar."
        : "Of course, but this is entirely dependent on the person’s commitment to the process. Although distance learning may not seem like the same as working with a personal trainer, having a program specifically designed for you and the support of a trainer you can always reach makes the process much more effective. Getting answers to your questions instantly allows you to progress much faster and healthier than working alone and without direction.",
  },
  {
    question: (lang) =>
      lang === "tr"
        ? "Kaç günde bir antrenman yapmam gerekecek?"
        : "How many days a week will I need to train?",
    answer: (lang) =>
      lang === "tr"
        ? "Antrenman sıklığı; hedeflerine, mevcut fiziksel durumuna, günlük yaşam tempona ve egzersiz geçmişine göre belirlenir. Bu nedenle, en verimli sonuç için bu kararı eğitmeninle birlikte planlamak en doğrusudur. Böylece sürdürülebilir ve sana uygun bir antrenman rutini oluşturulabilir."
        : "Training frequency is determined by your goals, current physical condition, daily life tempo and exercise history. Therefore, for the most efficient results, it is best to plan this decision with your trainer. In this way, a sustainable and suitable training routine can be created for you.",
  },
  {
    question: (lang) =>
      lang === "tr"
        ? "Programların içinde beslenme önerileri de var mı?"
        : "Are there nutritional recommendations in the programs?",
    answer: (lang) =>
      lang === "tr"
        ? "Detaylı ve kişiye özel beslenme programları, işinin uzmanı olan diyetisyenlerin alanına girer. Bir antrenör olarak benim görevim, sana sağlıklı beslenme konusunda doğru yönlendirmeler yapmak, beslenme alışkanlıklarını takip etmek ve gerektiğinde pratik tavsiyeler sunmaktır. Ancak detaylı diyet planları yalnızca lisanslı diyetisyenler tarafından hazırlanabilir; bu konuda yetki ve bilgi sınırları bulunur."
        : "Detailed and personalized nutrition programs are the domain of dietitians who are experts in their field. As a trainer, my job is to guide you in a healthy way, monitor your eating habits and provide practical advice when necessary. However, detailed diet plans can only be prepared by licensed dietitians; there are limits to their authority and knowledge in this regard.",
  },
  {
    question: (lang) =>
      lang === "tr"
        ? "Motivasyonumu kaybedersem ne olur?"
        : "What happens if I lose motivation?",
    answer: (lang) =>
      lang === "tr"
        ? "Motivasyon elbette önemli, ancak disiplin ve sürdürülebilirlik çok daha kritik faktörlerdir. Bizim önceliğimiz her zaman disiplinli bir alışkanlık oluşturmak ve sürdürülebilirliği sağlamak olacaktır. Motivasyon iniş çıkış yaşayabilir; önemli olan, disiplin sayesinde hedefe istikrarlı bir şekilde ilerleyebilmektir. Bu yaklaşım, kalıcı ve anlamlı sonuçlar getirir."
        : "Motivation is certainly important, but discipline and sustainability are much more critical factors. Our priority will always be to create a disciplined habit and ensure sustainability. Motivation can fluctuate; what is important is to be able to move steadily towards the goal through discipline. This approach brings permanent and meaningful results.",
  },
  {
    question: (lang) =>
      lang === "tr"
        ? "Bu sistem sadece fiziksel değişim mi sağlar?"
        : "Does this system only provide physical change?",
    answer: (lang) =>
      lang === "tr"
        ? "Sporun en temel faydası fiziksel değişimdir; kas gelişimi, yağ kaybı ve vücut şekillendirme. Ancak düzenli ve doğru yapılan egzersizler, yaşlanma sürecini yavaşlatır, eklem ve kas-iskelet sistemi rahatsızlıklarının önüne geçer. Ayrıca sağlığınızı destekler, enerjinizi artırır, özgüveninizi yükseltir ve ruh halinizi olumlu etkiler. Yani bu sistem, hem fiziksel hem de uzun vadeli sağlık açısından bütünsel bir dönüşüm sunar."
        : "The most basic benefit of sports is physical change; muscle development, fat loss and body shaping. However, regular and correct exercises slow down the aging process, prevent joint and musculoskeletal disorders. It also supports your health, increases your energy, increases your self-confidence and positively affects your mood. In other words, this system offers a holistic transformation in terms of both physical and long-term health.",
  },
];

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState<LanguageKey>("tr");
  const [isOpen, setIsOpen] = useState(false);
  const [openAll, setOpenAll] = useState(false);
  const [openStates, setOpenStates] = useState(faqs.map(() => false));

  const toggleItem = (index: number) => {
    const updated = [...openStates];
    updated[index] = !updated[index];
    setOpenStates(updated);
  };

  const toggleAll = () => {
    const value = !openAll;
    setOpenAll(value);
    setOpenStates(faqs.map(() => value));
  };

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_m59z64g", "template_c8ndajl", form.current, {
        publicKey: "xV6dRBbjHjpe3YSFk",
      })
      .then(
        () => {
          setIsOpen(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  const scrollToSection = () => {
    const element = document.getElementById("About");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetInTouch = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReferences = () => {
    const element = document.getElementById("Testimonials");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePackages = () => {
    const element = document.getElementById("Private Lesson Packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentTranslations = translations[language];

  const instaLinks = [
    "https://www.instagram.com/p/DF5pExqokZ4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/C4bCXwDIYfW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DARZR1kIj_B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [theme, language]);

  return (
    <div className={`min-h-screen min-w-full flex flex-col`}>
      <section id="header" className="z-10">
        <div className="fixed min-w-full md:px-6 flex flex-row justify-between items-center">
          <div className="cursor-pointer" title="Abdullah Aşık">
            {theme === "dark" ? (
              <Image
                src={whiteLogo}
                alt="Abdullah Aşık Logo"
                width={85}
                height={85}
              />
            ) : (
              <Image
                src={blackLogo}
                alt="Abdullah Aşık Logo"
                width={85}
                height={85}
              />
            )}
          </div>
          <div className="flex flex-row items-center justify-between">
            <button
              className={`px-4 py-2 rounded-full cursor-pointer hover:scale-105 ${
                theme === "dark"
                  ? "bg-[#f1f1f1] text-[#313131]"
                  : "bg-[#313131] text-[#f1f1f1]"
              }`}
              onClick={toggleTheme}
              title="Karanlık / Aydınlık Tema"
            >
              <ThemeSwitch theme={theme} />
            </button>
            <button
              onClick={toggleLanguage}
              className={`px-4 py-1 rounded-full font-bold ml-4 cursor-pointer hover:scale-105 ${
                theme === "dark"
                  ? "bg-[#f1f1f1] text-[#313131]"
                  : "bg-[#313131] text-[#f1f1f1]"
              }`}
              title="Türkçe / İngilizce"
            >
              {language === "en" ? "TR" : "EN"}
            </button>
          </div>
        </div>
      </section>

      <section
        id="hero"
        className={`relative px-10 py-10 ${
          theme === "dark"
            ? "bg-[#1a1a1a] duration-200 transform transition-all"
            : "bg-[#f0f0f0] duration-200 transform transition-all"
        }`}
      >
        <div className="min-w-full min-h-auto flex flex-col md:flex-row items-center md:-mt-16">
          <div className="">
            <Image
              src={main}
              alt="Abdullah Aşık Logo"
              width={850}
              height={850}
              className="pointer-events-none"
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start text-center md:text-left">
            <h2
              className={`text-xl md:text-2xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              <span>{currentTranslations.semititle(language)}</span>
            </h2>
            <h1
              className={`text-4xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              <span>{currentTranslations.title(language)}</span>
            </h1>
            <p
              className={`text-base md:text-xl mt-4 ${
                theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
              }`}
            >
              {currentTranslations.heroText(language)}
            </p>
            <button
              onClick={handleGetInTouch}
              className="bg-[#e92931] mt-4 font-bold cursor-pointer text-[#f1f1f1] px-6 py-3 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
            >
              {currentTranslations.getInTouch(language)}
            </button>
          </div>
        </div>
      </section>

      <div
        className={`w-full h-auto flex flex-col items-center justify-center border-none ${
          theme === "dark"
            ? "bg-[#1a1a1a] duration-200 transform transition-all border-none"
            : "bg-[#f0f0f0] duration-200 transform transition-all border-none"
        }`}
      >
        <span
          className={`${
            theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
          }`}
        >
          {currentTranslations.scrollingText(language)}
        </span>
        <span className="cursor-pointer" onClick={() => scrollToSection()}>
          <video
            autoPlay
            loop
            muted
            width={72}
            height={72}
            className="hoverZoomLink"
          >
            <source
              src="https://res.cloudinary.com/weetan/video/upload/v1737170594/Personal%20Site/arrow-animated_cbukwc.webm"
              type="video/webm"
            />
          </video>
        </span>
      </div>

      <section
        id="About"
        className={`px-10 py-20 ${
          theme === "dark"
            ? "bg-[#1a1a1a] duration-200 transform transition-all"
            : "bg-[#f6f6f6] duration-200 transform transition-all"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <h2
            className={` font-semibold text-2xl ${
              theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
            }`}
          >
            {currentTranslations.aboutMe(language)}
          </h2>
          <p
            className={`py-4 px-1 text-center ${
              theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
            }`}
          >
            {currentTranslations.aboutMeText(language)}
          </p>
          <div
            className={`flex flex-col md:flex-col items-center justify-center md:justify-around w-full py-5 mt-10`}
          >
            <div
              className={`flex flex-col justify-center py-6 md:px-10 ${
                theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
              }`}
            >
              <h3
                className={`text-lg font-semibold text-center ${
                  theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
                }`}
              >
                {currentTranslations.mttText(language)}
              </h3>
              <span className="mt-2">
                💪{" "}
                <span className="font-semibold">
                  {currentTranslations.mttText1Title(language)}
                </span>{" "}
                {currentTranslations.mttText1(language)}
              </span>
              <span>
                💪{" "}
                <span className="font-semibold">
                  {currentTranslations.mttText2Title(language)}
                </span>{" "}
                {currentTranslations.mttText2(language)}
              </span>
              <span>
                💪{" "}
                <span className="font-semibold">
                  {currentTranslations.mttText3Title(language)}
                </span>{" "}
                {currentTranslations.mttText3(language)}
              </span>
              <span>
                💪{" "}
                <span className="font-semibold">
                  {currentTranslations.mttText4Title(language)}
                </span>{" "}
                {currentTranslations.mttText4(language)}
              </span>
            </div>
            <h3
              className={`text-lg font-semibold text-center ${
                theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
              }`}
            >
              {currentTranslations.mstText(language)}
            </h3>
            <div
              className={`w-full flex flex-col md:flex-row justify-around md:items-center py-6 ${
                theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
              }`}
            >
              <span className="">
                🌟{currentTranslations.mstText1(language)}
              </span>
              <span>🌟 {currentTranslations.mstText2(language)}</span>
              <span>🌟 {currentTranslations.mstText3(language)}</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Private Lesson Packages"
        className={`px-10 py-20 ${
          theme === "dark"
            ? "text-[#f1f1f1] bg-[#1a1a1a] duration-200 transform transition-all"
            : "text-[#313131] bg-[#f0f0f0] duration-200 transform transition-all"
        }`}
      >
        <div className="">
          <h2 className={`text-2xl md:text-2xl font-semibold mb-6 text-center`}>
            {currentTranslations.servicesTitle(language)}
          </h2>
          <h3 className="text-lg text-center py-4">
            {currentTranslations.servicesHelp(language)}{" "}
            <span className="cursor-pointer hover:text-[#e92931] font-medium italic">
              {currentTranslations.servicesHelpAbout(language)}
            </span>{" "}
          </h3>
          <PackageCardWithDetails theme={theme} language={language} />
        </div>
      </section>

      {/* <section
        id="Testimonials"
        className={`px-10 py-20 ${
          theme === "dark"
            ? "bg-[#1a1a1a] duration-200 transform transition-all"
            : "bg-[#f6f6f6] duration-200 transform transition-all"
        }`}
      >
        <div className="overflow-hidden">
          <h2
            className={`text-2xl md:text-2xl font-semibold py-6 text-center ${
              theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
            }`}
          >
            {currentTranslations.clientStories(language)}
          </h2>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {stories.map((story, index) => (
              <SwiperSlide
                key={index}
                className={`p-6 rounded-xl shadow-lg cursor-pointer ${
                  theme === "dark"
                    ? "bg-[#2a2a2a] text-[#f1f1f1]"
                    : "border bg-[#ececec] text-[#313131]"
                }`}
              >
                <div className="flex items-center mb-4">
                  {story.icon}
                  <h3
                    className={`text-lg md:text-xl font-semibold ml-3  ${
                      theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
                    }`}
                  >
                    {story.title}
                  </h3>
                </div>
                <p
                  className={`text-sm mb-4 ${
                    theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
                  }`}
                >
                  {story.description(language)}
                </p>
                <div className="bg-blue-200 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p
                    className={` ${
                      theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
                    }`}
                  >
                    {story.quote(language)}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}

      <section
        id="instaPost"
        className={`px-10 py-20 ${
          theme === "dark"
            ? "bg-[#1a1a1a] duration-200 transform transition-all"
            : "bg-[#f0f0f0] duration-200 transform transition-all"
        }`}
      >
        <h2
          className={`text-2xl md:text-2xl font-semibold py-6 text-center ${
            theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
          }`}
        >
          {currentTranslations.Insta(language)}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {instaLinks.map((link, index) => (
            <div
              key={index}
              className="instagram-embed w-full"
              dangerouslySetInnerHTML={{
                __html: `
                <blockquote 
                  class="instagram-media" 
                  data-instgrm-permalink="${link}" 
                  data-instgrm-version="14" 
                  style="background:#FFF; border:0; margin:0 auto; max-width:540px; min-width:326px; width:100%; padding:0;">
                </blockquote>
              `,
              }}
            />
          ))}
        </div>
      </section>

      <section
        id="faq"
        className={`px-10 py-20 ${
          theme === "dark"
            ? "bg-[#1a1a1a] duration-200 transform transition-all"
            : "bg-[#f6f6f6] duration-200 transform transition-all"
        }`}
      >
        <div className="flex justify-center">
          <h1 className="max-w-fit text-2xl md:text-3xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2 rounded-md text-center">
            {currentTranslations.faqs(language)}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-3 my-10 md:px-40 md:my-10">
          <p
            className={`mb-10 md:mb-0 text-center ${
              theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
            }`}
          >
            {currentTranslations.faqQ(language)}{" "}
            <a
              href="https://wa.me/905527787737"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold text-xl ${
                theme === "dark"
                  ? "text-green-300 hover:text-green-400"
                  : "text-green-500 hover:text-green-600"
              }`}
            >
              {currentTranslations.faqW(language)}
            </a>
          </p>
          <button
            onClick={toggleAll}
            className={`flex items-center hover:underline cursor-pointer ${
              theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
            }`}
          >
            {language === "tr"
              ? "Tümünü Aç / Tümünü Kapat"
              : "Open All / Close All"}
            <FiChevronDown className="ml-1" />
          </button>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-md mb-4 md:px-40">
              <button
                onClick={() => toggleItem(index)}
                className={`w-full flex justify-between items-center cursor-pointer p-4 ${
                  theme === "dark"
                    ? "bg-[#2a2a2a] text-[#f1f1f1]"
                    : "border bg-[#ececec] text-[#313131]"
                }`}
              >
                <span className="text-left font-medium">
                  {faq.question(language)}
                </span>
                {openStates[index] ? (
                  <FiMinus className="w-4 h-4" />
                ) : (
                  <FiPlus className="w-4 h-4" />
                )}
              </button>
              {openStates[index] && (
                <div
                  className={`px-4 pb-4 ${
                    theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
                  }`}
                >
                  {faq.answer(language)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className={`px-10 py-20 ${
          theme === "dark"
            ? "text-[#f1f1f1] bg-[#1a1a1a] duration-200 transform transition-all"
            : "text-[#313131] bg-[#f0f0f0] duration-200 transform transition-all"
        }`}
      >
        <div>
          <div className="py-10 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold py-2">
              {currentTranslations.contact(language)}
            </h2>
            <p className="text-center">
              {currentTranslations.contactText(language)}
            </p>
          </div>
          <form
            ref={form}
            action=""
            className="flex flex-col md:flex-row items-center justify-center"
            onSubmit={sendEmail}
          >
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
              <input
                type="text"
                placeholder={currentTranslations.pName(language)}
                name="name"
                className={`w-full p-2 ${
                  theme === "dark"
                    ? "border-b border-[#f1f1f1] focus:outline-blue-500"
                    : "border-b border-[#313131] focus:outline-blue-500"
                }`}
              />
              <input
                type="text"
                placeholder={currentTranslations.pEmail(language)}
                name="email"
                className={`w-full p-2 ${
                  theme === "dark"
                    ? "border-b border-[#f1f1f1] focus:outline-blue-500"
                    : "border-b border-[#313131] focus:outline-blue-500"
                }`}
              />
              <input
                type="tel"
                placeholder={currentTranslations.pPhone(language)}
                name="phone"
                className={`w-full p-2 ${
                  theme === "dark"
                    ? "border-b border-[#f1f1f1] focus:outline-blue-500"
                    : "border-b border-[#313131] focus:outline-blue-500"
                }`}
              />
              <textarea
                className={`w-full p-2 mt-2 ${
                  theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
                }`}
                name="message"
                id=""
                placeholder={currentTranslations.pMessage(language)}
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-[#f1f1f1] cursor-pointer mt-2 p-2 w-full hover:bg-blue-600"
              >
                {currentTranslations.pSubject(language)}
              </button>
            </div>
            <div className="md:w-1/2 h-full flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.6995826243066!2d35.34011228046565!3d36.990746734608095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f7fe6648457%3A0x5c0f0b57d6647b9c!2sMACFit%20Adana%20Optimum!5e0!3m2!1str!2str!4v1746143644042!5m2!1str!2str"
                loading="eager"
                className="min-h-[275px] min-w-full rounded-md p-2"
              ></iframe>
            </div>
            {isOpen && <Modal isOpen={setIsOpen} />}
          </form>
        </div>
      </section>

      <section
        id="footer"
        className={`px-10 py-20 ${
          theme === "dark"
            ? "bg-[#1a1a1a] duration-200 transform transition-all"
            : "bg-[#f6f6f6] duration-200 transform transition-all"
        }`}
      >
        <footer
          className={`${
            theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-around md:gap-10 md:items-start py-20">
            <div className="flex flex-col items-start py-4">
              <h3 className="font-semibold py-2 text-xl">
                {currentTranslations.QAccess(language)}
              </h3>
              {services.map((service) => (
                <span
                  key={service.id}
                  className="cursor-pointer"
                  onClick={() => handlePackages()}
                >
                  {getValue(service.title, language)}
                </span>
              ))}
            </div>
            {/* <div className="flex flex-col items-start py-4">
              <h3 className="font-semibold py-2 text-xl">
                {currentTranslations.clientStories(language)}
              </h3>
              <span onClick={handleReferences} className="cursor-pointer">
                {currentTranslations.references(language)}
              </span>
            </div> */}
            <div className="flex flex-col items-start py-4">
              <h3 className="font-semibold py-2 text-xl">
                {currentTranslations.contactInfo(language)}
              </h3>
              <span>+90 552 778 77 37</span>
              <span>email@gmail.com</span>
            </div>
            <div className="flex flex-col items-start py-4">
              <h3 className="font-semibold py-2 text-xl">
                {currentTranslations.followMe(language)}
              </h3>
              <span className="hover:text-red-300">
                <a
                  href="https://www.instagram.com/pt.abdullahasik/"
                  target="_blank"
                  className="flex flex-row justify-center items-center"
                >
                  <FaInstagram className="" /> Instagram
                </a>
              </span>
              <span className="hover:text-red-300">
                <a
                  href="https://www.instagram.com/pt.abdullahasik/"
                  target="_blank"
                  className="flex flex-row justify-center items-center"
                >
                  <FaTiktok className="" /> TikTok
                </a>
              </span>
              <span className="hover:text-red-300">
                <a
                  href="https://www.instagram.com/pt.abdullahasik/"
                  target="_blank"
                  className="flex flex-row justify-center items-center"
                >
                  <FaSquareXTwitter className="" /> X (Twitter)
                </a>
              </span>
            </div>
          </div>
          <div className="justify-center flex items-center">
            <span>&copy; 2025</span>
          </div>
        </footer>
      </section>
    </div>
  );
}
