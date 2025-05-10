"use client";

import { useState } from "react";
import ThemeSwitch from "./components/ThemeSwitch";
import Image from "next/image";
import whiteLogo from "../../public/white-logo.png";
import blackLogo from "../../public/black-logo.png";
import main from "../../public/3.png";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaDumbbell, FaLaptopHouse, FaMale, FaFemale } from "react-icons/fa";
import { GiRunningNinja, GiProgression } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type LanguageKey = "en" | "tr";

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
  mttText1: (language: LanguageKey) => string;
  mttText2: (language: LanguageKey) => string;
  mttText3: (language: LanguageKey) => string;
  servicesTitle: (language: LanguageKey) => string;
  getInTouch: (language: LanguageKey) => string;
  sendMessage: (language: LanguageKey) => string;
  contactInfo: (language: LanguageKey) => string;
  phone: (language: LanguageKey) => string;
  emailLabel: (language: LanguageKey) => string;
  address: (language: LanguageKey) => string;
  visitUs: (language: LanguageKey) => string;
  footerTitle: (language: LanguageKey) => string;
  servicesList: (language: LanguageKey) => string[];
  testimonials: (language: LanguageKey) => string;
  clientStories: (language: LanguageKey) => string;
  contact: (language: LanguageKey) => string;
  contactText: (language: LanguageKey) => string;
  pName: (language: LanguageKey) => string;
  pEmail: (language: LanguageKey) => string;
  pPhone: (language: LanguageKey) => string;
  pMessage: (language: LanguageKey) => string;
  pSubject: (language: LanguageKey) => string;
  followUs: (language: LanguageKey) => string;
  copyright: (language: LanguageKey) => string;
  scrollingText: (language: LanguageKey) => string;
  references: (language: LanguageKey) => string;
};

type Service = {
  id: number;
  icon: React.ReactNode;
  title: (language: LanguageKey) => string;
  description: (language: LanguageKey) => string;
  price: string;
};

const translations: { [key in LanguageKey]: Translations } = {
  en: {
    semititle: (lang) => (lang === "en" ? "Personal Trainer" : ""),
    title: (lang) => (lang === "en" ? "Abdullah Aşık" : ""),
    heroText: (lang) =>
      lang === "en"
        ? "Transform your life through expert fitness coaching and personalized training plans."
        : "",
    aboutMe: (lang) => (lang === "en" ? "About Me" : ""),
    aboutMeText: (lang) =>
      lang === "en"
        ? "In addition to studying sports management since 2018, I have been actively involved in the sports sector as a Personal Coach. As a fitness professional, I attach great importance to improving myself, closely follow the innovations in the sector and participate in various advanced trainings. Since 2021, I have been serving within MAC, offering special programs and professional guidance for individuals to achieve their goals. My goal is to raise individuals who are both physically and mentally strong on the path of sports and to continue to make a difference in the sector."
        : "",
    mstText: (lang) => (lang === "en" ? "My Specialization Trainings" : ""),
    mstText1: (lang) =>
      lang === "en" ? "EREPS Level 4 - Personal Trainer" : "",
    mstText2: (lang) =>
      lang === "en" ? "NASM Certified Personal Training" : "",
    mstText3: (lang) => (lang === "en" ? "MAC Academy" : ""),
    mttText: (lang) => (lang === "en" ? "My Training Techniques" : ""),
    mttText1: (lang) => (lang === "en" ? "Flexibility Training" : ""),
    mttText2: (lang) => (lang === "en" ? "Strength Training" : ""),
    mttText3: (lang) => (lang === "en" ? "Ab & Full Body Workout" : ""),
    servicesTitle: (lang) => (lang === "en" ? "Special Training Packages" : ""),
    getInTouch: (lang) => (lang === "en" ? "Get In Touch" : ""),
    sendMessage: (lang) => (lang === "en" ? "Send Message" : ""),
    contactInfo: (lang) => (lang === "en" ? "Contact Information" : ""),
    phone: (lang) => (lang === "en" ? "Phone:" : ""),
    emailLabel: (lang) => (lang === "en" ? "Email:" : ""),
    address: (lang) => (lang === "en" ? "Address:" : ""),
    visitUs: (lang) => (lang === "en" ? "Visit Us" : ""),
    footerTitle: (lang) => (lang === "en" ? "Elite Fitness" : ""),
    servicesList: (lang) =>
      lang === "en"
        ? ["Personal Training", "Nutrition Plans", "Group Workouts"]
        : [],
    testimonials: (lang) => (lang === "en" ? "Testimonials" : ""),
    clientStories: (lang) => (lang === "en" ? "Our Success Stories" : ""),
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
    followUs: (lang) => (lang === "en" ? "Follow Me" : ""),
    copyright: (lang) =>
      lang === "en" ? "© 2025 Created by Fatih Karaşoğlu." : "",
    scrollingText: (lang) =>
      lang === "en" ? "scroll down / use arrow down" : "",
    references: (lang) => (lang === "en" ? "References" : ""),
  },
  tr: {
    semititle: (lang) => (lang === "tr" ? "Kişisel Antrenör" : ""),
    title: (lang) => (lang === "tr" ? "Abdullah Aşık" : ""),
    heroText: (lang) =>
      lang === "tr"
        ? "Hayatınızı uzman fitness koçluğu ve kişiselleştirilmiş eğitim planlarıyla dönüştürün."
        : "",
    aboutMe: (lang) => (lang === "tr" ? "Hakkımda" : ""),
    aboutMeText: (lang) =>
      lang === "tr"
        ? "2018 yılından bu yana okuduğum spor yönetiminin yanı sıra spor sektöründe Personal Coach olarak aktif bir şekilde yer almaktayım. Fitness profesyoneli olarak kendimi geliştirmeye büyük önem veriyor, sektörün yeniliklerini yakından takip ederek çeşitli ileri seviye eğitimlere katılıyorum. 2021 yılından itibaren MAC bünyesinde hizmet veriyor, bireylerin hedeflerine ulaşması için özel programlar ve profesyonel rehberlik sunuyorum. Amacım, spor yolunda hem fiziksel hem de mental olarak güçlü bireyler yetiştirmek ve sektörde fark yaratmaya devam etmek."
        : "",
    mstText: (lang) => (lang === "tr" ? "Uzmanlık Eğitimlerim" : ""),
    mstText1: (lang) =>
      lang === "tr" ? "EREPS Level 4 - Kişisel Antrenör" : "",
    mstText2: (lang) =>
      lang === "tr" ? "NASM Sertifikalı Kişisel Eğitim" : "",
    mstText3: (lang) => (lang === "tr" ? "MAC Akademi" : ""),
    mttText: (lang) => (lang === "tr" ? "Antrenman Tekniklerim" : ""),
    mttText1: (lang) => (lang === "tr" ? "Esneklik Antrenmanı" : ""),
    mttText2: (lang) => (lang === "tr" ? "Kuvvet Antrenmanı" : ""),
    mttText3: (lang) => (lang === "tr" ? "Karın & Tüm Vücut Antrenmanı" : ""),
    servicesTitle: (lang) => (lang === "tr" ? "Özel Antrenman Paketleri" : ""),
    getInTouch: (lang) => (lang === "tr" ? "İletişime Geçelim" : ""),
    sendMessage: (lang) => (lang === "tr" ? "Mesaj Gönder" : ""),
    contactInfo: (lang) => (lang === "tr" ? "İletişim Bilgileri" : ""),
    phone: (lang) => (lang === "tr" ? "Telefon:" : ""),
    emailLabel: (lang) => (lang === "tr" ? "E-posta:" : ""),
    address: (lang) => (lang === "tr" ? "Adres:" : ""),
    visitUs: (lang) => (lang === "tr" ? "Ziyaret Edin" : ""),
    footerTitle: (lang) => (lang === "tr" ? "Elite Fitness" : ""),
    servicesList: (lang) =>
      lang === "tr"
        ? ["Kişisel Antrenman", "Beslenme Planları", "Grup Antrenmanları"]
        : [],
    testimonials: (lang) => (lang === "tr" ? "Referanslar" : ""),
    clientStories: (lang) => (lang === "tr" ? "Başarı Hikayelerimiz" : ""),
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
    followUs: (lang) => (lang === "tr" ? "Beni Takip Edin" : ""),
    copyright: (lang) =>
      lang === "tr" ? "© 2025 Fatih Karaşoğlu tarafından oluşturuldu." : "",
    scrollingText: (lang) =>
      lang === "tr" ? "Aşağı kaydır / Aşağı okunu kullan" : "",
    references: (lang) => (lang === "tr" ? "Referanslar" : ""),
  },
};

const services: Service[] = [
  {
    id: 1,
    icon: (
      <BsFillLightningChargeFill className="h-12 w-12 mb-4 text-blue-500" />
    ),
    title: (lang) => (lang === "en" ? "One Lesson" : "Tek Ders"),
    description: (lang) =>
      lang === "en"
        ? "Customized workout plans tailored to your goals and fitness level."
        : "Hedeflerinize ve fitness seviyenize göre uyarlanmış kişiselleştirilmiş antrenman planları.",
    price: "1.200 ₺",
  },
  {
    id: 2,
    icon: <FaDumbbell className="h-12 w-12 mb-4 text-pink-500" />,
    title: (lang) => (lang === "en" ? "12 Lessons" : "12 Ders"),
    description: (lang) =>
      lang === "en"
        ? "Expert meal plans to help you reach your body composition goals."
        : "Vücut kompozisyon hedeflerinize ulaşmanıza yardımcı olacak uzman yemek planları.",
    price: "11.400 ₺",
  },
  {
    id: 3,
    icon: <GiRunningNinja className="h-12 w-12 mb-4 text-gray-500" />,
    title: (lang) => (lang === "en" ? "24 Lessons" : "24 Ders"),
    description: (lang) =>
      lang === "en"
        ? "Restore your body's range of motion with targeted stretching and mobility exercises."
        : "Hedeflenen germe ve hareketlilik egzersizleriyle vücudunuzun hareket açıklığını geri kazanın.",
    price: "22.200 ₺",
  },
  {
    id: 4,
    icon: <GiProgression className="h-12 w-12 mb-4 text-green-500" />,
    title: (lang) => (lang === "en" ? "36 Lessons" : "36 Ders"),
    description: (lang) =>
      lang === "en"
        ? "Customized training plans for marathon runners, sprinters, and triathletes."
        : "Maraton koşucuları, sprinterler ve triatletler için kişiselleştirilmiş antrenman planları.",
    price: "32.400 ₺",
  },
  {
    id: 5,
    icon: <FaLaptopHouse className="h-12 w-12 mb-4 text-purple-500" />,
    title: (lang) => (lang === "en" ? "Remote Training" : "Uzaktan Eğitim"),
    description: (lang) =>
      lang === "en"
        ? "Build muscle mass and strength with progressive resistance training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    price: "1.000 ₺",
  },
];

const stories = [
  {
    id: 1,
    icon: <FaMale className="h-8 w-8 mb-3 text-blue-500" />,
    title: "John M.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "'The best investment I've ever made was in my health."
        : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
  },
  {
    id: 2,
    icon: <FaFemale className="h-8 w-8 mb-3 text-pink-500" />,
    title: "Sarah J.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "'The best investment I've ever made was in my health."
        : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
  },
  {
    id: 3,
    icon: <FaMale className="h-8 w-8 mb-3 text-gray-500" />,
    title: "Mike R.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "'The best investment I've ever made was in my health."
        : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
  },
  {
    id: 4,
    icon: <FaFemale className="h-8 w-8 mb-3 text-green-500" />,
    title: "Emma L.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "'The best investment I've ever made was in my health."
        : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
  },
  {
    id: 5,
    icon: <FaMale className="h-8 w-8 mb-3 text-purple-500" />,
    title: "David B.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "'The best investment I've ever made was in my health."
        : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
  },
  {
    id: 6,
    icon: <FaFemale className="h-8 w-8 mb-3 text-blue-400" />,
    title: "Lauren H.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "'The best investment I've ever made was in my health."
        : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
  },
  {
    id: 7,
    icon: <FaMale className="h-8 w-8 mb-3 text-pink-400" />,
    title: "Tom A.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "'The best investment I've ever made was in my health."
        : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
  },
  {
    id: 8,
    icon: <FaFemale className="h-8 w-8 mb-3 text-purple-400" />,
    title: "Kate P.",
    description: (lang: LanguageKey) =>
      lang === "en"
        ? "Lost 30 lbs in 3 months and gained muscle definition through personalized training."
        : "Progresif direnç antrenmanı ile kas kütlesi ve gücü geliştirin.",
    quote: (lang: LanguageKey) =>
      lang === "en"
        ? "'The best investment I've ever made was in my health."
        : "Hayatımda yaptığım en iyi yatırım sağlığıma oldu",
  },
];

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState<LanguageKey>("tr");

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

  const currentTranslations = translations[language];

  return (
    <div
      className={`min-h-screen min-w-full flex flex-col ${
        theme === "dark"
          ? "bg-[#313131] duration-200 transform transition-all"
          : "bg-[#f1f1f1] duration-200 transform transition-all"
      }`}
    >
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
              className={`px-4 py-2 rounded-full cursor-pointer ${
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
              className={`px-4 py-1 rounded-full font-bold ml-4 cursor-pointer ${
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

      <section id="hero" className="relative px-10 py-10">
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

      <div className="w-full h-auto flex flex-col items-center justify-center">
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

      <section id="About" className="px-10 py-20">
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
            className={`flex flex-col md:flex-row items-start justify-start md:justify-around w-full py-5 mt-10`}
          >
            <div
              className={`flex flex-col justify-center py-6 ${
                theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
              }`}
            >
              <h3 className="text-xl">
                {currentTranslations.mstText(language)}
              </h3>
              <span className="mt-2">
                🌟{currentTranslations.mstText1(language)}
              </span>
              <span>🌟{currentTranslations.mstText2(language)}</span>
              <span>🌟{currentTranslations.mstText3(language)}</span>
            </div>
            <div
              className={`flex flex-col justify-center py-6 ${
                theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
              }`}
            >
              <h3 className="text-xl">
                {currentTranslations.mttText(language)}
              </h3>
              <span className="mt-2">
                💪{currentTranslations.mttText1(language)}
              </span>
              <span>💪{currentTranslations.mttText2(language)}</span>
              <span>💪{currentTranslations.mttText3(language)}</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Private Lesson Packages"
        className={`px-10 py-20 ${
          theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
        }`}
      >
        <div className="">
          <h2
            className={`text-2xl md:text-2xl font-semibold mb-12 text-center`}
          >
            {currentTranslations.servicesTitle(language)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 shadow-lg ${
                  theme === "dark" ? "bg-[#171717]" : "bg-[#f1f1f1]"
                }`}
                aria-label={`Service: ${service.title(language)}`}
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <span className="text-lg md:text-xl font-semibold italic">
                    {service.title(language)}
                  </span>
                </div>
                <p className="mb-4">{service.description(language)}</p>
                <div className="border-t pt-1 mt-4">
                  <p className="text-lg md:text-xl font-bold text-blue-500 dark:text-blue-400 italic">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Testimonials" className="px-10 py-20">
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
                    ? "bg-[#171717] text-[#f1f1f1]"
                    : "border bg-[#f1f1f1] text-[#313131]"
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
      </section>

      <section
        id="contact"
        className={`px-10 py-20 ${
          theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
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
            action=""
            className="flex flex-col md:flex-row items-center justify-center"
          >
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
              <input
                type="text"
                placeholder={currentTranslations.pName(language)}
                name=""
                className={`w-full p-2 ${
                  theme === "dark"
                    ? "border-b border-[#f1f1f1] focus:outline-blue-500"
                    : "border-b border-[#313131] focus:outline-blue-500"
                }`}
              />
              <input
                type="text"
                placeholder={currentTranslations.pEmail(language)}
                name=""
                className={`w-full p-2 ${
                  theme === "dark"
                    ? "border-b border-[#f1f1f1] focus:outline-blue-500"
                    : "border-b border-[#313131] focus:outline-blue-500"
                }`}
              />
              <input
                type="tel"
                placeholder={currentTranslations.pPhone(language)}
                name=""
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
                name=""
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
          </form>
        </div>
      </section>

      <section id="footer" className="px-10 py-4">
        <footer
          className={`${
            theme === "dark" ? "text-[#f1f1f1]" : "text-[#313131]"
          }`}
        >
          {/* <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            {currentTranslations.title(language)}
          </h2> */}
          <div className="flex flex-col md:flex-row justify-between md:gap-10 md:items-start py-20">
            <div className="flex flex-col items-start py-4">
              <h3 className="font-semibold py-2 text-xl">
                {currentTranslations.servicesTitle(language)}
              </h3>
              {services.map((service) => (
                <span key={service.id}>{service.title(language)}</span>
              ))}
            </div>
            <div className="flex flex-col items-start py-4">
              <h3 className="font-semibold py-2 text-xl">
                {currentTranslations.clientStories(language)}
              </h3>
              <span onClick={handleReferences} className="cursor-pointer">
                {currentTranslations.references(language)}
              </span>
            </div>
            <div className="flex flex-col items-start py-4">
              <h3 className="font-semibold py-2 text-xl">
                {currentTranslations.contactInfo(language)}
              </h3>
              <span>+90 552 778 77 37</span>
              <span>email@gmail.com</span>
            </div>
            <div className="flex flex-col items-start py-4">
              <h3 className="font-semibold py-2 text-xl">
                {currentTranslations.followUs(language)}
              </h3>
              <span className="hover:text-red-300">
                <a
                  href="https://www.instagram.com/pt.abdullahasik/"
                  target="_blank"
                >
                  Instagram
                </a>
              </span>
              <span className="hover:text-red-300">
                <a
                  href="https://www.instagram.com/pt.abdullahasik/"
                  target="_blank"
                >
                  TikTok
                </a>
              </span>
              <span className="hover:text-red-300">
                <a
                  href="https://www.instagram.com/pt.abdullahasik/"
                  target="_blank"
                >
                  X (Twitter)
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
