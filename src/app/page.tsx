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
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import ThemeSwitch from "./components/ThemeSwitch";
import Image from "next/image";
import whiteLogo from "../../public/white-logo.png";
import blackLogo from "../../public/black-logo.png";
import main from "../../public/5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import animationData from "../../public/lottie/arrow.json";
import Lottie from "lottie-react";

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

const stories = [
  {
    id: 1,
    title: "Beyza Nur Ş.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "Abdullah Hoca supported me a lot during my weight loss and health recovery process. He is very professional and knowledgeable in his job, he always keeps his knowledge up to date. He prepared individual programs considering my health problems and helped me develop. He motivated me even when I was discouraged while doing this, I thank him very much 🌸🙏🏻"
        : "Abdullah Hoca, kilo verme ve sağlığıma yeniden kavuşma sürecimde bana çok destek oldu. İşinde çok profesyonel ve bilgili, bilgisini her daim güncel tutan biri. Her seferinde yaşadığım sağlık sorunlarımı da gözeterek bireysel programlar hazırlayıp gelişimime yardımcı oldu. Bunu yaparken benim yıldığım zamanlarda bile motive etti, kendisine çok teşekkür ederim 🌸🙏🏻",
    star: 5,
  },
  {
    id: 2,
    title: "Abdulkadir A.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "Abdullah Aşık, who can be safely recommended to anyone looking for a healthy and effective sports experience in Adana, has expertly answered all my questions and requests throughout my training period of about a year. With the training programs he prepared based on scientific data, he helped me overcome my weight gain problem, which had become a nightmare for me, quickly and healthily. Abdullah Hoca, a sports trainer whose professional approach and knowledge I continue to benefit from, has not only made sports more enjoyable and productive for me, but also encouraged me to set new goals for myself."
        : "Adana’da sağlıklı ve etkili bir spor deneyimi arayan herkes için güvenle tavsiye edilebilecek bir isim olan Abdullah Aşık, yaklaşık bir yıllık antrenman sürecim boyunca her türlü soru ve talebime uzmanlıkla yanıt vermiştir. Bilimsel verilere dayalı olarak hazırladığı antrenman programları ile benim için kabusa dönüşen kilo alma sorunumu hızlı ve sağlıklı şekilde aşmamı sağlamıştır. Profesyonel yaklaşımı ve bilgi birikiminden faydalanmayı sürdürdüğüm bir spor eğitmeni olan Abdullah hoca, sporu benim için daha keyifli ve verimli hale getirmekle kalmamış, kendime yeni hedefler belirlemem içinde teşvik etmiştir.",
    star: 5,
  },
  {
    id: 3,
    title: "Neslihan T.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "Even though I can't go to the gym very regularly, my teacher's interest, discipline, devoted and respectful approach has always been motivating. Thanks to his knowledge and professionalism in his field, I feel better both physically and mentally. He really does his job properly.🙏🏻"
        : "Her ne kadar spora çok düzenli gidemesem de hocamın ilgisi, disiplini ,özverili ve saygılı yaklaşımı her zaman motive edici oldu. Alanındaki bilgisi ve profesyonelliği sayesinde kendimi hem fiziksel hem mental açıdan daha iyi hissediyorum . Gerçekten işini layığıyla yapan biri.🙏🏻",
    star: 5,
  },
  {
    id: 4,
    title: "Zehra Ş.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "Abdullah Hoca was also my preferred teacher in group lessons. Before we started lessons together, I was uncomfortable with my knees. Now, I have no pain and can kneel comfortably. All that aside, his smiling face and energy are enough."
        : "Abdullah hoca gurup derslerinde de tercih ettiğim bir hocaydı.Birlikte derslere başlamadan önce dizlerimden rahatsızdım. şimdi ise ağrım kalmadığı gibi rahatlıkla diz çökebiliyorum.Hepsi bir yana güler yüzüyle verdiği enerji yeter",
    star: 5,
  },
  {
    id: 5,
    title: "Emine Ferzan Ş.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "Abdullah Aşık is the embodiment of patience and knowledge. He analyzes his student's physical and mental needs with great accuracy and can create programs that are suitable for him, thus providing maximum efficiency. In addition to this, he also improves you by always equipping himself with new information. We have been working together for years and I would like to continue to progress together. He is a well-mannered instructor who is aware that the brain and heart are also muscles and that they are as important as other muscle groups, and who knows when and how to act in human relations."
        : "Abdullah Aşık sabrin ve bilginin vucut bulmus halidir. Öğrencisinin fiziksel ve zihinsel ihtiyaçlarini muhteşem bir dogrulukla analiz ederek ona uygun programlari cikararak maksimum verimlilik sağlayabiliyor. Bunun yani sira kendini her daim yeni bilgilerle donatmasi da sizi geliştiriyor. Yillardir beraber çalışıyoruz ve bundan sonra da beraber ilerlemek isterim. Beynin ve kalbin de bir kas oldugunun ve onlarin da en az diger kas gruplari kadar önemli olduğunun farkinda olan, düzeyli, insan iliskilerinde ne zaman nasil davranmasini bilen bir eğitmen.",
    star: 5,
  },
  {
    id: 6,
    title: "Eylül A.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "We have finished our lessons now, not only physically but also mentally I feel much better because of your efforts. Thanks to your patient approach, correct guidance and always motivating words, I have made sports an indispensable part of my life. I am so glad that our paths crossed, thank you very much for your efforts and patience 🙏🏻😊"
        : "Derslerimizi bitirdik artık , sadece fiziksel olarak değil, mental anlamda da kendimi çok daha iyi hissetmem de emeğiniz çok . Sabırlı yaklaşımınız , doğru yönlendirmeleriniz ve her zaman motive edici sözleriniz sayesinde sporu hayatımın vazgeçilmez parçası haline getirdim. Sizinle iyi ki yollarımız kesişmiş emeğiniz ve sabrınız için çok teşekkür ederim 🙏🏻😊",
    star: 5,
  },
  {
    id: 7,
    title: "Abdullah G.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "Since I have been working with Abdullah Hoca, I have gained more energy, strength and efficiency in my daily life, and I thank him for his training sessions."
        : "Abdullah hoca ile çalıştığımdan beri gün içerisinde olan enerjim gücüm ve günlük hayattaki verimliliğim artı kendisine antrenmanları için teşekkür ediyorum.",
    star: 5,
  },
];

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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [rating, setRating] = useState(0);
  const [showPolicy, setShowPolicy] = useState(false);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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

  // const instaLinks = [
  //   "https://www.instagram.com/p/DF5pExqokZ4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  //   "https://www.instagram.com/p/C4bCXwDIYfW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  //   "https://www.instagram.com/p/DARZR1kIj_B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  // ];

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
                priority
              />
            ) : (
              <Image
                src={blackLogo}
                alt="Abdullah Aşık Logo"
                width={85}
                height={85}
                priority
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
          <div className="py-6 md:py-0">
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
            ? "bg-[#1a1a1a] duration-200 transform transition-all"
            : "bg-[#f0f0f0] duration-200 transform transition-all"
        }`}
      >
        <span
          className={`${
            theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
          }`}
        >
          {currentTranslations.scrollingText(language)}
        </span>

        <span
          className={`cursor-pointer bg-transparent`}
          onClick={() => scrollToSection()}
        >
          <div
            className={`w-[72px] h-[72px] filter ${
              theme === "dark"
                ? "invert brightness-75"
                : "invert-0 brightness-100"
            }`}
          >
            <Lottie animationData={animationData} loop={true} />
          </div>
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
            <span className="cursor-pointer hover:text-[#e92931] text-xl font-medium italic">
              {currentTranslations.servicesHelpAbout(language)}
            </span>{" "}
          </h3>
          <PackageCardWithDetails theme={theme} language={language} />
        </div>
      </section>

      <section
        id="Testimonials"
        className={`px-6 py-16 md:px-10 md:py-20 ${
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
            navigation={false}
            spaceBetween={30}
            autoHeight={false}
            slidesPerView={1.2}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {stories.map((story, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <SwiperSlide
                  key={index}
                  className={`p-4 rounded-xl shadow-lg h-[250px] overflow-hidden relative cursor-pointer ${
                    theme === "dark"
                      ? "bg-[#2a2a2a] text-[#f1f1f1]"
                      : "border bg-[#ececec] text-[#313131]"
                  }`}
                >
                  <div className="flex flex-col justify-center items-center mb-2">
                    <h3
                      className={`text-lg md:text-xl font-semibold ml-3 ${
                        theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
                      }`}
                    >
                      {story.title}
                    </h3>
                    <div style={{ display: "inline-flex", gap: "2px" }}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < story.star ? "★" : "☆"}</span>
                      ))}
                    </div>
                  </div>

                  <p
                    className={`px-2 text-center transition-all duration-300 ease-in-out ${
                      isExpanded ? "line-clamp-none" : "line-clamp-4"
                    } ${
                      theme === "dark"
                        ? "text-[#f1f1f1] bg-[#313131]"
                        : "text-[#313131] bg-[#ececec]"
                    }`}
                  >
                    {story.quote(language)}
                  </p>

                  {story.quote(language).length > 100 && (
                    <div className="text-center mt-2">
                      <button
                        onClick={() => toggleExpanded(index)}
                        className={`text-sm underline transition cursor-pointer hover:text-red-600 ${
                          theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
                        }`}
                      >
                        {isExpanded ? "Daha az göster" : "Devamını oku"}
                      </button>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* <section
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
      </section> */}

      <section
        id="faq"
        className={`px-10 py-20 ${
          theme === "dark"
            ? "bg-[#1a1a1a] duration-200 transform transition-all"
            : "bg-[#f6f6f6] duration-200 transform transition-all"
        }`}
      >
        <div className="flex justify-center">
          <h1 className="max-w-fit text-2xl md:text-3xl font-semibold text-white bg-gradient-to-r from-red-700 to-red-400 px-6 py-2 rounded-md text-center">
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
              className={`font-bold italic text-xl ${
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
              <div className="flex flex-row items-center w-full p-2">
                <label
                  className={`mb-1 ${
                    theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]/50"
                  }`}
                >
                  {language === "en"
                    ? "How would you rate your experience?"
                    : "Deneyiminizi kaç yıldızla değerlendirirsiniz?"}
                </label>
                <div className="inline-flex gap-1 text-yellow-500 text-xl pl-6">
                  {[...Array(5)].map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setRating(i + 1)}
                      className="hover:scale-110 cursor-pointer transition-transform"
                    >
                      {i < rating ? "★" : "☆"}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="rating" value={rating} />
              </div>
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
                  className="cursor-pointer hover:text-red-400 transition"
                  onClick={() => handlePackages()}
                >
                  {getValue(service.title, language)}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-start py-4">
              <h3 className="font-semibold py-2 text-xl">
                {currentTranslations.clientStories(language)}
              </h3>
              <span
                onClick={handleReferences}
                className="cursor-pointer hover:text-red-400 transition"
              >
                {currentTranslations.references(language)}
              </span>
            </div>
            <div className="flex flex-col items-start py-4">
              <h3 className="font-semibold py-2 text-xl">
                {currentTranslations.contactInfo(language)}
              </h3>
              <span className="cursor-pointer hover:text-red-400 transition">
                +90 552 778 77 37
              </span>
              <span className="cursor-pointer hover:text-red-400 transition">
                abdullahasik71@gmail.com
              </span>
            </div>
            <div className="flex flex-col items-start py-4">
              <h3 className="font-semibold py-2 text-xl">
                {currentTranslations.followMe(language)}
              </h3>
              <span className="hover:text-red-400 transition">
                <a
                  href="https://www.instagram.com/pt.abdullahasik?igsh=MThjb3N0Zzk0NTEzZQ=="
                  target="_blank"
                  className="flex flex-row justify-center items-center"
                >
                  <FaInstagram className="" /> Instagram
                </a>
              </span>
              <span className="hover:text-red-400 transition">
                <a
                  href="https://www.tiktok.com/@pt.abdullahasik"
                  target="_blank"
                  className="flex flex-row justify-center items-center"
                >
                  <FaTiktok className="" /> TikTok
                </a>
              </span>
            </div>
          </div>
          <div className="justify-center flex flex-row items-center">
            <span>&copy; 2025 Abdullah Aşık |</span>
            <span className="mx-2">
              <button
                onClick={() => setShowPolicy(true)}
                className="cursor-pointer hover:text-red-400 transition"
              >
                Gizlilik Politikası
              </button>
            </span>
          </div>
        </footer>
        {showPolicy && (
          <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center px-4">
            <div className="bg-white dark:bg-[#1f1f1f] max-w-2xl w-full max-h-[80vh] p-6 rounded-lg shadow-xl relative overflow-y-auto">
              <button
                className="absolute top-2 right-3 text-4xl cursor-pointer font-bold text-gray-500 hover:text-gray-300"
                onClick={() => setShowPolicy(false)}
              >
                &times;
              </button>
              <h1>Privacy Policy</h1>
              <p>Last updated: July 18, 2025</p>
              <p>
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>
              <p>
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>
              <h2>Interpretation and Definitions</h2>
              <h3>Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
              <h3>Definitions</h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul>
                <li>
                  <p>
                    <strong>Account</strong> means a unique account created for
                    You to access our Service or parts of our Service.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Affiliate</strong> means an entity that controls, is
                    controlled by or is under common control with a party, where
                    &quot;control&quot; means ownership of 50% or more of the
                    shares, equity interest or other securities entitled to vote
                    for election of directors or other managing authority.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Company</strong> (referred to as either &quot;the
                    Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                    &quot;Our&quot; in this Agreement) refers to Abdullah Aşık.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cookies</strong> are small files that are placed on
                    Your computer, mobile device or any other device by a
                    website, containing the details of Your browsing history on
                    that website among its many uses.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Country</strong> refers to: Turkey
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Device</strong> means any device that can access the
                    Service such as a computer, a cellphone or a digital tablet.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Personal Data</strong> is any information that
                    relates to an identified or identifiable individual.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Service</strong> refers to the Website.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Service Provider</strong> means any natural or legal
                    person who processes the data on behalf of the Company. It
                    refers to third-party companies or individuals employed by
                    the Company to facilitate the Service, to provide the
                    Service on behalf of the Company, to perform services
                    related to the Service or to assist the Company in analyzing
                    how the Service is used.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Usage Data</strong> refers to data collected
                    automatically, either generated by the use of the Service or
                    from the Service infrastructure itself (for example, the
                    duration of a page visit).
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Website</strong> refers to Abdullah Aşık, accessible
                    from{" "}
                    <a
                      href="www.abdullahasik.com"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      www.abdullahasik.com
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>You</strong> means the individual accessing or using
                    the Service, or the company, or other legal entity on behalf
                    of which such individual is accessing or using the Service,
                    as applicable.
                  </p>
                </li>
              </ul>
              <h2>Collecting and Using Your Personal Data</h2>
              <h3>Types of Data Collected</h3>
              <h4>Personal Data</h4>
              <p>
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </p>
              <ul>
                <li>
                  <p>Email address</p>
                </li>
                <li>
                  <p>First name and last name</p>
                </li>
                <li>
                  <p>Phone number</p>
                </li>
                <li>
                  <p>Usage Data</p>
                </li>
              </ul>
              <h4>Usage Data</h4>
              <p>
                Usage Data is collected automatically when using the Service.
              </p>
              <p>
                Usage Data may include information such as Your Device&apos;s
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>
              <p>
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data.
              </p>
              <p>
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device.
              </p>
              <h4>Tracking Technologies and Cookies</h4>
              <p>
                We use Cookies and similar tracking technologies to track the
                activity on Our Service and store certain information. Tracking
                technologies used are beacons, tags, and scripts to collect and
                track information and to improve and analyze Our Service. The
                technologies We use may include:
              </p>
              <ul>
                <li>
                  <strong>Cookies or Browser Cookies.</strong> A cookie is a
                  small file placed on Your Device. You can instruct Your
                  browser to refuse all Cookies or to indicate when a Cookie is
                  being sent. However, if You do not accept Cookies, You may not
                  be able to use some parts of our Service. Unless you have
                  adjusted Your browser setting so that it will refuse Cookies,
                  our Service may use Cookies.
                </li>
                <li>
                  <strong>Web Beacons.</strong> Certain sections of our Service
                  and our emails may contain small electronic files known as web
                  beacons (also referred to as clear gifs, pixel tags, and
                  single-pixel gifs) that permit the Company, for example, to
                  count users who have visited those pages or opened an email
                  and for other related website statistics (for example,
                  recording the popularity of a certain section and verifying
                  system and server integrity).
                </li>
              </ul>
              <p>
                Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
                Cookies. Persistent Cookies remain on Your personal computer or
                mobile device when You go offline, while Session Cookies are
                deleted as soon as You close Your web browser. You can learn
                more about cookies on{" "}
                <a
                  href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
                  target="_blank"
                >
                  TermsFeed website
                </a>{" "}
                article.
              </p>
              <p>
                We use both Session and Persistent Cookies for the purposes set
                out below:
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Necessary / Essential Cookies</strong>
                  </p>
                  <p>Type: Session Cookies</p>
                  <p>Administered by: Us</p>
                  <p>
                    Purpose: These Cookies are essential to provide You with
                    services available through the Website and to enable You to
                    use some of its features. They help to authenticate users
                    and prevent fraudulent use of user accounts. Without these
                    Cookies, the services that You have asked for cannot be
                    provided, and We only use these Cookies to provide You with
                    those services.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                  </p>
                  <p>Type: Persistent Cookies</p>
                  <p>Administered by: Us</p>
                  <p>
                    Purpose: These Cookies identify if users have accepted the
                    use of cookies on the Website.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Functionality Cookies</strong>
                  </p>
                  <p>Type: Persistent Cookies</p>
                  <p>Administered by: Us</p>
                  <p>
                    Purpose: These Cookies allow us to remember choices You make
                    when You use the Website, such as remembering your login
                    details or language preference. The purpose of these Cookies
                    is to provide You with a more personal experience and to
                    avoid You having to re-enter your preferences every time You
                    use the Website.
                  </p>
                </li>
              </ul>
              <p>
                For more information about the cookies we use and your choices
                regarding cookies, please visit our Cookies Policy or the
                Cookies section of our Privacy Policy.
              </p>
              <h3>Use of Your Personal Data</h3>
              <p>
                The Company may use Personal Data for the following purposes:
              </p>
              <ul>
                <li>
                  <p>
                    <strong>To provide and maintain our Service</strong>,
                    including to monitor the usage of our Service.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>To manage Your Account:</strong> to manage Your
                    registration as a user of the Service. The Personal Data You
                    provide can give You access to different functionalities of
                    the Service that are available to You as a registered user.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>For the performance of a contract:</strong> the
                    development, compliance and undertaking of the purchase
                    contract for the products, items or services You have
                    purchased or of any other contract with Us through the
                    Service.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>To contact You:</strong> To contact You by email,
                    telephone calls, SMS, or other equivalent forms of
                    electronic communication, such as a mobile
                    application&apos;s push notifications regarding updates or
                    informative communications related to the functionalities,
                    products or contracted services, including the security
                    updates, when necessary or reasonable for their
                    implementation.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>To provide You</strong> with news, special offers
                    and general information about other goods, services and
                    events which we offer that are similar to those that you
                    have already purchased or enquired about unless You have
                    opted not to receive such information.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>To manage Your requests:</strong> To attend and
                    manage Your requests to Us.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>For business transfers:</strong> We may use Your
                    information to evaluate or conduct a merger, divestiture,
                    restructuring, reorganization, dissolution, or other sale or
                    transfer of some or all of Our assets, whether as a going
                    concern or as part of bankruptcy, liquidation, or similar
                    proceeding, in which Personal Data held by Us about our
                    Service users is among the assets transferred.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>For other purposes</strong>: We may use Your
                    information for other purposes, such as data analysis,
                    identifying usage trends, determining the effectiveness of
                    our promotional campaigns and to evaluate and improve our
                    Service, products, services, marketing and your experience.
                  </p>
                </li>
              </ul>
              <p>
                We may share Your personal information in the following
                situations:
              </p>
              <ul>
                <li>
                  <strong>With Service Providers:</strong> We may share Your
                  personal information with Service Providers to monitor and
                  analyze the use of our Service, to contact You.
                </li>
                <li>
                  <strong>For business transfers:</strong> We may share or
                  transfer Your personal information in connection with, or
                  during negotiations of, any merger, sale of Company assets,
                  financing, or acquisition of all or a portion of Our business
                  to another company.
                </li>
                <li>
                  <strong>With Affiliates:</strong> We may share Your
                  information with Our affiliates, in which case we will require
                  those affiliates to honor this Privacy Policy. Affiliates
                  include Our parent company and any other subsidiaries, joint
                  venture partners or other companies that We control or that
                  are under common control with Us.
                </li>
                <li>
                  <strong>With business partners:</strong> We may share Your
                  information with Our business partners to offer You certain
                  products, services or promotions.
                </li>
                <li>
                  <strong>With other users:</strong> when You share personal
                  information or otherwise interact in the public areas with
                  other users, such information may be viewed by all users and
                  may be publicly distributed outside.
                </li>
                <li>
                  <strong>With Your consent</strong>: We may disclose Your
                  personal information for any other purpose with Your consent.
                </li>
              </ul>
              <h3>Retention of Your Personal Data</h3>
              <p>
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p>
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </p>
              <h3>Transfer of Your Personal Data</h3>
              <p>
                Your information, including Personal Data, is processed at the
                Company&apos;s operating offices and in any other places where
                the parties involved in the processing are located. It means
                that this information may be transferred to — and maintained on
                — computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction.
              </p>
              <p>
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
              </p>
              <p>
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </p>
              <h3>Delete Your Personal Data</h3>
              <p>
                You have the right to delete or request that We assist in
                deleting the Personal Data that We have collected about You.
              </p>
              <p>
                Our Service may give You the ability to delete certain
                information about You from within the Service.
              </p>
              <p>
                You may update, amend, or delete Your information at any time by
                signing in to Your Account, if you have one, and visiting the
                account settings section that allows you to manage Your personal
                information. You may also contact Us to request access to,
                correct, or delete any personal information that You have
                provided to Us.
              </p>
              <p>
                Please note, however, that We may need to retain certain
                information when we have a legal obligation or lawful basis to
                do so.
              </p>
              <h3>Disclosure of Your Personal Data</h3>
              <h4>Business Transactions</h4>
              <p>
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>
              <h4>Law enforcement</h4>
              <p>
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>
              <h4>Other legal requirements</h4>
              <p>
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul>
                <li>Comply with a legal obligation</li>
                <li>
                  Protect and defend the rights or property of the Company
                </li>
                <li>
                  Prevent or investigate possible wrongdoing in connection with
                  the Service
                </li>
                <li>
                  Protect the personal safety of Users of the Service or the
                  public
                </li>
                <li>Protect against legal liability</li>
              </ul>
              <h3>Security of Your Personal Data</h3>
              <p>
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </p>
              <h2>Children&apos;s Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
              </p>
              <p>
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your parent&apos;s consent before We
                collect and use that information.
              </p>
              <h2>Links to Other Websites</h2>
              <p>
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third party&apos;s site. We strongly advise You
                to review the Privacy Policy of every site You visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third party sites
                or services.
              </p>
              <h2>Changes to this Privacy Policy</h2>
              <p>
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page.
              </p>
              <p>
                We will let You know via email and/or a prominent notice on Our
                Service, prior to the change becoming effective and update the
                &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, You can
                contact us:
              </p>
              <ul>
                <li>By email: abdullahasik71@gmail.com</li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
