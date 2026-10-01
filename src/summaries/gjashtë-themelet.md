---
layout: base.njk
title: "Gjashtë Themelet"
author: "Shaykh ul-Islām Muḥammad ibn ‘Abdul-Wahhāb"
explanationBy: "Shaykh Muḥammad ibn Ṣāliḥ al-‘Uthaymīn"
lang: "sq"
dateAdded: 2026-09-04
description: "Gjashtë parime themelore nga Kurani dhe Sunneti për besim të saktë, unitet dhe qeverisje."
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
    <div class="space-y-1">
      <p class="text-[#d6b278] text-lg sm:text-xl font-light">
        Nga {{ author }} <span class="text-[#B3ADB9]">رَحِمَهُ ٱللَّٰهُ</span>
      </p>
      {% if explanationBy %}
      <p class="text-base text-[#B3ADB9] font-light">
        Shpjegimi nga {{ explanationBy }} <span class="text-[#B3ADB9]">رَحِمَهُ ٱللَّٰهُ</span>
      </p>
      {% endif %}
    </div>
  </header>

  <div class="space-y-16 font-light leading-relaxed">

<!-- Opening Overview Card -->
<section class="reveal-on-scroll">
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
    <p class="text-xl sm:text-2xl text-[#ECE8EF] leading-relaxed">
      Akīdah islame mbështetet mbi shtylla të qarta dhe të padiskutueshme, të cilat e mbrojnë adhurimin, bashkësinë dhe mendjen e besimtarit nga devijimi.
    </p>
    <p class="text-base text-[#B3ADB9]">
      Këto gjashtë themele janë nxjerrë drejtpërdrejt nga Shpallja Hyjnore për të ruajtur monoteizmin e pastër, për të siguruar stabilitetin shoqëror, për të dalluar dijen e vërtetë nga shtirja dhe për t’iu kundërpërgjigjur dyshimeve shejtanore.
    </p>
  </div>
</section>

<!-- PRINCIPLE I -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Parimi I</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Sinqeriteti i Pastër në Fe (<e>Tawḥīd</e>) përballë Politeizmit (<e>Shirk</e>)
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Detyrimi më parësor në Islam është që feja t’i kushtohet pastër dhe sinqerisht vetëm Allahut, pa i shoqëruar Atij ortak. Pjesa dërrmuese e Kuranit e sqaron këtë parim nga këndvështrime të panumërta, duke përdorur një gjuhë aq të drejtpërdrejtë dhe të kuptueshme, saqë edhe njeriu më i thjeshtë mund ta kuptojë atë.
  </p>

  <!-- Primary Proof Card -->
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Përkushtimi Gjithëpërfshirës</span>
    <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
      “Thuaj: ‘Vërtet, namazi im, kurbani im, jeta ime dhe vdekja ime janë të gjitha për Allahun, Zotin e botëve. Ai nuk ka ortak. Me këtë jam urdhëruar dhe unë jam i pari i muslimanëve.’”
    </p>
    <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah al-An‘ām [6:162-163]</span>
  </div>

  <!-- Textual Evidence Grid -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Njësia Hyjnore</span>
      <h3 class="text-xl font-medium text-white">Adhurimi Vetëm për Të</h3>
      <p class="text-base text-[#B3ADB9] italic">
        “Dhe Zoti juaj është Një Zot; nuk ka të adhuruar me të drejtë përveç Tij, të Gjithëmëshirshmit, Mëshirëplotit.”
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Baqarah [2:163]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Misioni Gjithëpërfshirës</span>
      <h3 class="text-xl font-medium text-white">Mesazhi i të Gjithë Pejgamberëve</h3>
      <p class="text-base text-[#B3ADB9] italic">
        “Dhe Ne nuk dërguam asnjë të Dërguar para teje, veçse i shpallëm atij: ‘Nuk ka të adhuruar përveç Meje, prandaj më adhuroni Mua.’”
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Anbiyā’ [21:25]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Nënshtrimi i Plotë</span>
      <h3 class="text-xl font-medium text-white">Dorëzimi ndaj Krijuesit</h3>
      <p class="text-base text-[#B3ADB9] italic">
        “Dhe Zoti juaj është Një Zot, prandaj duhet t’i nënshtroheni vetëm Atij me Islam.”
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Ḥajj [22:34]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Pendimi Aktiv</span>
      <h3 class="text-xl font-medium text-white">Kthimi tek Zoti</h3>
      <p class="text-base text-[#B3ADB9] italic">
        “Dhe kthehuni me pendim dhe bindje, me besim të vërtetë, tek Zoti juaj dhe nënshtrojuni Atij...”
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah az-Zumar [39:54]</span>
    </div>
  </div>
</section>

<!-- PRINCIPLE II -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Parimi II</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Uniteti në Fe dhe Ndalimi i Përçarjes Sektare
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Allahu ka urdhëruar që të kapemi së bashku pas së vërtetës dhe ka ndaluar qartë përçarjen, fraksionizmin dhe konfliktin e brendshëm në fe. Përmbajtja e vërtetë ndaj fesë kërkon ruajtjen e vëllazërisë dhe mbrojtjen nga përçarja në çështjet e besimit.
  </p>

  <!-- Primary Quranic Command Card -->
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Detyrimi i Vëllazërisë</span>
    <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
      “Kapuni të gjithë së bashku për litarin e Allahut dhe mos u përçani. Kujtoni mirësinë e Allahut ndaj jush — sepse ishit armiq dhe Ai i bashkoi zemrat tuaja me mirësinë e Tij, kështu që u bëtë vëllezër...”
    </p>
    <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah Āl ‘Imrān [3:102-103]</span>
  </div>

  <!-- Grid Warnings against Splitting -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Paralajmërim i Rëndë</span>
      <h3 class="text-xl font-medium text-white">Rreziku i Përçarjes</h3>
      <p class="text-base text-[#B3ADB9] italic">
        “Dhe mos u bëni si ata që u përçanë dhe u ndanë mes tyre pasi u erdhën provat e qarta. Për ta është një dënim i madh.”
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah Āl ‘Imrān [3:105]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Humbja e Fuqisë</span>
      <h3 class="text-xl font-medium text-white">Mosmarrëveshja e Brendshme</h3>
      <p class="text-base text-[#B3ADB9] italic">
        “Dhe mos u grindni mes jush, që të mos humbni guximin dhe t’ju humbasë forca.”
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Anfāl [8:46]</span>
    </div>
  </div>
  <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-2">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Shkëputja nga Fraksionet</span>
    <p class="text-base text-[#ECE8EF] italic">
      “Vërtet, ata që e përçanë fenë e tyre dhe u ndanë në sekte, ti nuk ke asnjë lidhje me ta.”
    </p>
    <span class="text-xs font-mono text-[#B3ADB9] block">— Sūrah al-An‘ām [6:159]</span>
  </div>
</section>

<!-- PRINCIPLE III -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Parimi III</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Dëgjimi dhe Bindja ndaj Pushtetarëve
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Rendi shoqëror dhe siguria fetare nuk mund të ekzistojnë pa qeverisje të ligjshme. Islami urdhëron bindjen ndaj autoritetit legjitim në të gjitha çështjet që nuk përmbajnë mëkat, duke e mbrojtur shoqërinë nga kaosi (<e>Fitnah</e>) dhe rebelimi.
  </p>

  <!-- Quranic Foundation Card -->
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Urdhër Hyjnor</span>
    <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
      “O ju që besuat! Bindjuni Allahut, bindjuni të Dërguarit dhe atyre që kanë autoritet mes jush.”
    </p>
    <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah an-Nisā’ [4:59]</span>
  </div>

  <!-- Prophetic Instructions List -->
  <div class="bg-[#24211e] p-6 sm:p-8 rounded-lg border border-[#24211e] space-y-6">

    <div class="flex items-start gap-4">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">01.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Përgjegjësia për Rebelimin</h3>
        <p class="text-base text-[#B3ADB9]">
          Pejgamberi ﷺ ka paralajmëruar: <e>“Kush e heq dorën nga bindja, nuk do të ketë asnjë argument në mbrojtjen e tij kur të qëndrojë para Allahut në Ditën e Gjykimit.”</e>
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">02.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Bindja me Durim Pavarësisht Statusit</h3>
        <p class="text-base text-[#B3ADB9]">
          Pejgamberi ﷺ ka urdhëruar: <e>“Dëgjoni dhe binduni, edhe nëse mbi ju vendoset në autoritet një rob abisinas.”</e>
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">03.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Kufiri i Bindjes</h3>
        <p class="text-base text-[#B3ADB9]">
          Bindja është e detyrueshme, pavarësisht nëse njeriu e pëlqen apo nuk e pëlqen, <e>përveç nëse urdhërohet të bëjë mëkat</e> — nëse urdhërohet për mëkat, nuk ka dëgjim dhe bindje në atë veprim të caktuar.
        </p>
      </div>
    </div>

  </div>
</section>

<!-- PRINCIPLE IV -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Parimi IV</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Dija e Vërtetë, Fikhu dhe Njohja e Dijetarëve
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Një themel jetik është qartësimi i përkufizimit të vërtetë të dijes fetare (<e>‘Ilm</e>) dhe fikhut (<e>Fiqh</e>), nderimi i dijetarëve të vërtetë që e zotërojnë atë dhe demaskimi i atyre që shtiren si autoritete dijetare pa udhëzim hyjnor.
  </p>

  <!-- Grid Callout for Knowledge Virtues -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Dallimi Kuranor</span>
      <h3 class="text-xl font-medium text-white">Vlera e Pakrahasueshme e Dijetarëve</h3>
      <p class="text-base text-[#B3ADB9] italic">
        “Thuaj: ‘A janë të barabartë ata që dinë me ata që nuk dinë?’ Vetëm njerëzit me mendje të shëndoshë marrin mësim.”
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah az-Zumar [39:9]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Shenja Profetike</span>
      <h3 class="text-xl font-medium text-white">Mirësia Hyjnore përmes Fikhut</h3>
      <p class="text-base text-[#B3ADB9]">
        Pejgamberi ﷺ ka thënë: <e>“Kujt Allahu ia dëshiron të mirën, Ai i jep atij kuptim të thellë (Fiqh) në fe.”</e>
      </p>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Trashëgimia e Shenjtë</span>
      <h3 class="text-xl font-medium text-white">Trashëgimia Profetike</h3>
      <p class="text-base text-[#B3ADB9]">
        Pejgamberët nuk lënë trashëgimi as ar dhe as argjend; ata lënë trashëgimi dijen. Kush e fiton atë, ka fituar një pasuri të madhe.
      </p>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Ngritja e Gradës</span>
      <h3 class="text-xl font-medium text-white">Ngritja nga Allahu</h3>
      <p class="text-base text-[#B3ADB9] italic">
        “Allahu do t’i ngrejë në gradë ata prej jush që besojnë dhe ata të cilëve u është dhënë dija.”
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Mujādilah [58:11]</span>
    </div>
  </div>
</section>

<!-- PRINCIPLE V -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Parimi V</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Njohja e Miqve të Vërtetë (<e>Awliyā’</e>) të Allahut
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Miqtë dhe aleatët e vërtetë të Allahut (<e>Awliyā’</e>) përcaktohen nga besimi i vërtetë, devotshmëria (<e>Taqwā</e>) dhe përmbajtja besnike ndaj Pejgamberit ﷺ — jo nga vetëlavdërimi, pretendimet për fuqi të fshehta apo titujt bosh.
  </p>

  <!-- Primary Definition Card -->
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Përkufizimi i Wilāyah</span>
    <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
      “Pa dyshim, miqtë e Allahut nuk do të kenë frikë dhe as nuk do të pikëllohen — ata që besuan dhe ishin të devotshëm.”
    </p>
    <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah Yūnus [10:62-63]</span>
  </div>

  <!-- Criteria Grid Callouts -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Kriteri 01</span>
      <h3 class="text-xl font-medium text-white">Ndjekja e Pejgamberit ﷺ</h3>
      <p class="text-base text-[#B3ADB9] italic">
        “Thuaj: ‘Nëse vërtet e doni Allahun, atëherë më ndiqni mua; Allahu do t’ju dojë...’”
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah Āl ‘Imrān [3:31]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Kriteri 02</span>
      <h3 class="text-xl font-medium text-white">Mungesa e Vetëlavdërimit</h3>
      <p class="text-base text-[#B3ADB9] italic">
        “Prandaj mos e konsideroni veten të pastër; Ai e di më së miri se kush i frikësohet Atij.”
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah an-Najm [53:32]</span>
    </div>
  </div>
  <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-2">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Mbrojtja nga Mashtrimi Shejtanor</span>
    <p class="text-base text-[#ECE8EF]">
      Shejtani nuk ka pushtet mbi besimtarët e vërtetë që mbështeten tek Allahu; pushteti i tij kufizohet vetëm tek ata që e marrin atë për mik dhe i shoqërojnë Allahut ortakë. <span class="text-[#B3ADB9] italic">[Qur'an 16:98-100]</span>
    </p>
  </div>
</section>

<!-- PRINCIPLE VI -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Parimi VI</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Rrëzimi i Gabimit kundër Përsiatjes mbi Shpalljen Hyjnore
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Një dyshim mashtrues i shpikur nga Shejtani sugjeron se Kurani dhe Sunneti janë të pamundur për t’u kuptuar nga mendjet e zakonshme, duke i shtyrë njerëzit të braktisin angazhimin e drejtpërdrejtë me Shpalljen. Në të vërtetë, Kurani është shpallur si udhëzim i qartë, i destinuar për përsiatje, i plotësuar me kërkimin e sqarimit nga dijetarët kur është e nevojshme.
  </p>

  <!-- Two-Step Proof Layout -->
  <div class="bg-[#24211e] p-6 sm:p-8 rounded-lg border border-[#24211e] space-y-6">

    <div class="flex items-start gap-4">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">01.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Qëllimi i Shpalljes është Qartësia</h3>
        <p class="text-base text-[#B3ADB9]">
          Allahu shprehet qartë: <e>“Dhe Ne ta zbritëm ty Përkujtimin, që t’u shpjegosh njerëzve qartë atë që u është zbritur atyre dhe që ata të përsiatin.”</e> <span class="text-[#d6b278]">[Qur'an 16:44]</span>
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">02.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Konsultimi me Dijetarët pa Braktisur Tekstin</h3>
        <p class="text-base text-[#B3ADB9]">
          Kur kërkohet qartësi, Shpallja i drejton besimtarët drejtpërdrejt te dija, e jo te braktisja e saj: <e>“Pyetni njerëzit e dijes nëse nuk dini.”</e> <span class="text-[#d6b278]">[Qur'an 16:43]</span>
        </p>
      </div>
    </div>

  </div>
</section>

  </div>
</article>

<!-- Scroll Animation Script -->

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
