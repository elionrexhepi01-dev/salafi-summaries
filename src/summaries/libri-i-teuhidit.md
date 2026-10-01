---
layout: base.njk
title: "Libri i Teuhidit"
author: "Shaykh al-Islām Muḥammad ibn ‘Abdul-Wahhāb"
lang: "sq"
dateAdded: 2026-09-05
description: "Thelbi, kategoritë, vlerat dhe të kundërtat e Teuhidit Islam."
---

<!-- Custom CSS for Scroll-Reveal & Page Animations -->

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-page-entry {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .reveal-on-scroll {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease-out, transform 0.7s ease-out;
    will-change: opacity, transform;
  }

  .reveal-on-scroll.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<article class="max-w-3xl mx-auto px-6 py-16 text-[#ECE8EF] animate-page-entry">

  <!-- Centered Header -->

  <header class="mb-16 space-y-4 text-center">
    <h1 class="text-4xl leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <p class="text-[#d6b278] text-lg sm:text-xl font-light">
      Nga {{ author }} <span class="text-[#B3ADB9]">رَحِمَهُ ٱللَّٰهُ</span>
    </p>
  </header>

  <div class="space-y-16 font-light leading-relaxed">

<!-- Intro Quote Card -->
<section class="reveal-on-scroll">
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
    <p class="text-lg sm:text-xl text-[#ECE8EF] italic leading-relaxed">
      “Dije se, në kuptimin absolut, Teuhidi i referohet dijes dhe njohjes se vetëm Zoti i posedon cilësitë më të përsosura, duke e pranuar Atë si të Vetmin që posedon madhështinë dhe duke e veçuar vetëm Atë për adhurim.”
    </p>
    <p class="text-sm text-[#B3ADB9] uppercase tracking-wider font-mono">
      — Përkufizimi Themelor i Teuhidit
    </p>
  </div>
</section>

<!-- PRINCIPLE I -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Parimi I</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      E Drejta Supreme dhe Thirrja Gjithëpërfshirëse
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Teuhidi është urdhri më madhështor i të gjitha urdhrave fetarë, parimi më themelor i të gjitha parimeve dhe themeli mbi të cilin mbështeten të gjitha veprat. Çdo i Dërguar i Allahut u dërgua për ta vendosur atë, duke ndaluar të kundërtën e tij — t’i shoqërohen ortakë Allahut (<e>Shirk</e>) dhe t’i vendosen Atij të barabartë.
  </p>

  <p class="text-lg sm:text-xl text-[#B3ADB9]">
    Kurani Fisnik e urdhëron, e bën të detyrueshëm dhe e sqaron vazhdimisht Teuhidin si të vetmen rrugë drejt shpëtimit, suksesit dhe lumturisë. Të gjitha dëshmitë — qofshin të bazuara në arsyen e shëndoshë, shpalljen hyjnore, urtësinë hyjnore apo natyrshmërinë njerëzore — pajtohen se Teuhidi është e drejta më madhore e Allahut mbi krijesat e Tij.
  </p>
</section>

<!-- PRINCIPLE II -->
<section class="space-y-8 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Parimi II</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Tri Përmasat e Teuhidit
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#B3ADB9]">
    Akidja e saktë islame e organizon Teuhidin në tri degë të dallueshme dhe të ndërlidhura, të cilat së bashku formojnë një kuptim të plotë të Hyjnores:
  </p>
  <!-- Grid for Categories -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">01. Emrat & Cilësitë</span>
      <h3 class="text-xl font-medium text-white">Tawḥīd al-Asmā’ wa al-Ṣifāt</h3>
      <p class="text-base text-[#B3ADB9]">
        Bindja e palëkundur se vetëm Allahu posedon përsosmërinë absolute në çdo aspekt, të përcaktuar përmes cilësive madhështore dhe të bukura që nuk i posedon askush nga krijesat.
      </p>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">02. Rubūbijja</span>
      <h3 class="text-xl font-medium text-white">Tawḥīd al-Rubūbīyah</h3>
      <p class="text-base text-[#B3ADB9]">
        Pohimi i Allahut si i Vetmi Zot i krijimit, furnizimit dhe drejtimit, i Cili kujdeset për tërë ekzistencën me mirësinë dhe pushtetin e Tij të bollshëm.
      </p>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3 sm:col-span-2 lg:col-span-1">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">03. Adhurimi</span>
      <h3 class="text-xl font-medium text-white">Tawḥīd al-Ulūhīyah</h3>
      <p class="text-base text-[#B3ADB9]">
        Njohja e Allahut si i Vetmi që posedon hyjninë (<e>Ulūhīyah</e>) dhe veçimi i Tij në të gjitha veprat e adhurimit. Kjo degë kërkohet dhe nënkuptohet drejtpërdrejt nga dy të parat.
      </p>
    </div>
  </div>
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 rounded-r-lg space-y-2">
    <h4 class="text-lg font-medium text-white">Marrëdhënia Ndërmjet Rubūbijjes dhe Adhurimit</h4>
    <p class="text-base sm:text-lg text-[#B3ADB9]">
      Meqë <e>al-Ulūhīyah</e> pasqyron cilësi të përsosmërisë absolute dhe rrjedh drejtpërdrejt nga <e>al-Rubūbīyah</e>, vetëm Krijuesi që i furnizon dhe i begaton të gjitha krijesat është i denjë të adhurohet prej tyre.
    </p>
  </div>
</section>

<!-- PRINCIPLE III -->
<section class="space-y-8 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Parimi III</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Vlerat dhe Pesha e Teuhidit
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#B3ADB9]">
    Asgjë nuk sjell mirësi më të madhe dhe nuk përmban një varg më të gjerë vlerash sesa Teuhidi. Ai është fryti më i mirë si në këtë jetë, ashtu edhe në Ahiret.
  </p>

  <!-- Custom Numbered List -->
  <div class="bg-[#24211e] p-6 sm:p-8 rounded-lg border border-[#24211e] space-y-6">

    <div class="flex items-start gap-4">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">01.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Largimi i Brengave dhe Ndëshkimit</h3>
        <p class="text-base sm:text-lg text-[#B3ADB9]">
          Ai është mjeti më madhor për largimin e pikëllimit në këtë botë dhe në Ahiret, duke e larguar ndëshkimin hyjnor në të dyja botët.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">02.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Udhëzimi dhe Siguria Absolute</h3>
        <p class="text-base sm:text-lg text-[#B3ADB9]">
          Ai i jep atij që e praktikon udhëzim të plotë moral, përsosje të karakterit dhe siguri përfundimtare në të dyja botët.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">03.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Arritja e Kënaqësisë Hyjnore</h3>
        <p class="text-base sm:text-lg text-[#B3ADB9]">
          Ai është çelësi i vetëm që hap derën drejt kënaqësisë së Allahut dhe shpërblimeve të përhershme.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">04.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Lehtësimi i Veprave të Mira</h3>
        <p class="text-base sm:text-lg text-[#B3ADB9]">
          Ai e lehtëson kryerjen e veprave të mira, e forcon njeriun kundër së keqes dhe e shpëton robin nga sprovat e rënda.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">05.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Peshë e Pakrahasueshme në Peshore</h3>
        <p class="text-base sm:text-lg text-[#B3ADB9]">
          Fjala e sinqeritetit — <e>Kalimat al-Ikhlāṣ</e> (“Lā ilāha illā Allāh”) — është më e rëndë se qiejt, toka dhe të gjithë banorët e tyre së bashku kur vendoset në Peshore.
        </p>
      </div>
    </div>

  </div>
</section>

<!-- PRINCIPLE IV -->
<section class="space-y-8 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Parimi IV</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Kategorizimi i Shirkut dhe Mjeteve të Ndaluara
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Çdo cenim në <e>Tawḥīd al-Ulūhīyah</e> e zhvlerëson Teuhidin e personit. Shirk-u ndahet në dy kategori të dallueshme:
  </p>

  <!-- Grid comparing Major and Minor Shirk -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <div class="flex items-center justify-between border-b border-[#332f2b] pb-2">
        <span class="text-sm font-mono text-[#d6b278] uppercase">Shirku i Madh</span>
        <span class="text-xs font-mono text-[#B3ADB9] bg-[#24211e] px-2 py-0.5 rounded">E Zhvlerëson Besimin</span>
      </div>
      <p class="text-base text-[#B3ADB9]">
        T’i caktosh Allahut një të barabartë duke i bërë thirrje, duke iu frikësuar, duke shpresuar tek ai, duke e dashur ose duke ia drejtuar krijesës veprat e adhurimit që duhet t’i drejtohen Allahut. Kjo formë e shkatërron plotësisht Teuhidin, e përjashton atë që e praktikon nga Xheneti dhe çon në dënim të përhershëm.
      </p>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <div class="flex items-center justify-between border-b border-[#332f2b] pb-2">
        <span class="text-sm font-mono text-[#d6b278] uppercase">Shirku i Vogël</span>
        <span class="text-xs font-mono text-[#B3ADB9] bg-[#24211e] px-2 py-0.5 rounded">Mjet i Ndaluar</span>
      </div>
      <p class="text-base text-[#B3ADB9]">
        Fjalë ose vepra që çojnë drejt shirkut të madh ose e madhërojnë krijesën pa arritur në adhurim të vërtetë. Shembujt përfshijnë betimin në diçka tjetër përveç Allahut ose kryerjen e veprave për një syefaqësi të fshehtë (<e>Riyā’</e>).
      </p>
    </div>
  </div>

  <!-- Specific Prohibited Practices Callout -->
  <div class="bg-[#24211e] p-6 sm:p-8 rounded-lg border border-[#332f2b] space-y-4">
    <h3 class="text-xl font-medium text-white">Praktikat e Ndaluara që Cenojnë Teuhidin</h3>
    <p class="text-base text-[#B3ADB9]">
      Dijetarët pajtohen njëzëri se Sheriati Islam nuk ka përcaktuar ndonjë begati të qenësishme shpirtërore (<e>Tabarruk</e>) që mund të merret nga pemët, gurët, vendet fizike ose varret:
    </p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-[#ECE8EF] pt-2">
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Kërkimi i bereqetit nga vende të shenjta ose varre
      </li>
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Mbajtja e byzylykëve, lidhëseve ose hajmalive për mbrojtje
      </li>
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Flijimi i kafshëve për dikë tjetër përveç Allahut
      </li>
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Bërja e zotimeve solemne ndaj krijesave
      </li>
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Kërkimi i mbrojtjes tek krijesat
      </li>
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Teprimi në nderim edhe në vende të virtytshme
      </li>
    </ul>
  </div>
</section>

<!-- PRINCIPLE V -->
<section class="space-y-8 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Parimi V</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Çmontimi i Ndërmjetësimit të Rremë dhe Teprimit ndaj Varreve
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#B3ADB9]">
    Gjatë historisë, ata që i shoqëronin Allahut ortakë i mbronin veprimet e tyre duke pretenduar se engjëjt, pejgamberët dhe shpirtrat e devotshëm (<e>Awliyā’</e>) vepronin vetëm si ndërmjetës me ndikim.
  </p>

  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 rounded-r-lg space-y-3">
    <h3 class="text-lg font-medium text-white">Gabimi i Analogjive Njerëzore</h3>
    <p class="text-base sm:text-lg text-[#B3ADB9]">
      Mushrikët e krahasuan Mbretin Sovran të universit me monarkët e varfër të kësaj bote, të cilët mbështeten te ministrat dhe këshilltarët për të administruar mbretëritë e tyre. Kjo është më e madhja e të pavërtetave. Allahu nuk ka nevojë për ndërmjetës; i gjithë ndërmjetësimi i përket vetëm Atij, dhe ai kërkon lejen e Tij të shprehur dhe kënaqësinë e Tij me Teuhidin e lutësit.
    </p>
  </div>

  <!-- Scriptural Evidence -->
  <div class="space-y-4">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278] block">Përgënjeshtrimi Kur’anor i Ndërmjetësimit të Rremë</span>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div class="bg-[#1c1a18] p-5 rounded border border-[#332f2b] space-y-2">
        <p class="text-base text-[#ECE8EF] italic">
          “Ne i adhurojmë vetëm që të na afrojnë tek Allahu.”
        </p>
        <span class="text-xs font-mono text-[#d6b278] block">[Sūrah az-Zumar 39:3]</span>
      </div>
      <div class="bg-[#1c1a18] p-5 rounded border border-[#332f2b] space-y-2">
        <p class="text-base text-[#ECE8EF] italic">
          “Ata thonë: ‘Këta janë ndërmjetësuesit tanë tek Allahu.’”
        </p>
        <span class="text-xs font-mono text-[#d6b278] block">[Sūrah Yūnus 10:18]</span>
      </div>
    </div>

  </div>

  <!-- Distinction between grave practices -->
  <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-4">
    <h3 class="text-xl font-medium text-white">Dallimi ndërmjet Mjeteve që Çojnë në Shirk dhe Shirkut të Madh te Varret</h3>

    <div class="space-y-4 text-base text-[#B3ADB9]">
      <div class="border-b border-[#332f2b] pb-3">
        <strong class="block mb-1 text-white">Mjete që Çojnë në Shirk (Bidate të Ndaluara):</strong>
        Prekja e varreve për të kërkuar bereqet, ndërtimi i strukturave ose tyrbeve mbi to, ndezja e dritave mbi to ose kryerja e rregullt e <e>Ṣalāh</e> në vendet e varreve pa iu lutur drejtpërdrejt të vdekurit.
      </div>
      <div>
        <strong class="block mb-1 text-white">Shirku i Madh (Politeizëm i Drejtpërdrejtë):</strong>
        Lutja drejtpërdrejt ndaj banorëve të varrit, kërkimi i ndihmës së tyre për nevoja të kësaj bote ose të Ahiretit, ose mbështetja tek ata si ndërmjetës të pavarur. T’u kërkosh të vdekurve ndihmë është e barabartë me adhurimin e idhujve në kohët e lashta.
      </div>
    </div>

  </div>
</section>

  </div>
</article>

<!-- Scroll Animation Script & Styles -->

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach(el => observer.observe(el));
  });
</script>
