---
layout: base.njk
title: "Afarta Qodob ee Aasaasiga ah"
author: "Sheekh Muhammad Ibn Abdul Wahhab"
lang: "so"
dateAdded: 2026-10-09
description: "Qoraal aasaasi ah oo ku saabsan afarta qodob ee Tawxiidka iyo Shirkiga."
---

<!-- CSS Gaar ah oo loogu talagalay Muuqashada Qaybaha marka la Rogayo Bogga iyo Dhaqdhaqaaqyada Bogga -->
<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
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

  <!-- Cinwaanka Ugu Muhiimsan -->
  <header class="text-center mb-14">
    <h1 class="mt-2 mb-4 text-4xl font-normal leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <p class="text-[#d6b278] font-light text-lg sm:text-xl">
      Waxaa qoray {{ author }}
    </p>
  </header>

  <div class="prose prose-invert max-w-none text-[#B3ADB9] space-y-16 leading-relaxed font-light">

    <!-- Hordhac / Mabda'a Aasaasiga ah -->
    <section class="space-y-8 reveal-on-scroll">

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          “Ogow, Allaah ha kugu hanuuniyo adeeciddiisa, in diinta toosan ee daahirka ahi, oo ah diintii Ibraahiim, ay tahay inaad Allaah caabuddo adigoo diinta si daacad ah oo isaga keliya loogu gaar yeelayo.”
        </p>
      </div>

      <div class="space-y-5">

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            “Marka Shirkigu galo cibaadada, wuu wasakheeyaa oo burinayaa, si la mid ah sida xadathka (waxyaabaha buriya daahirnimada) uu u buriyo daahirnimada.”
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            “Markaad garato in Shirkigu, marka uu cibaadada ku dhex milmo, uu buriyo cibaadadaas oo uu camalka baabi'iyo, isla markaana qofka ku kaca uu Naarta ku waarayo, waxaad fahmi doontaa in tani tahay waxa ugu muhiimsan ee ay tahay inaad barato, si ay suuragal u noqoto in Allaah kaa badbaadiyo dabinkan: inaad Allaah cid kale la wadaajiso cibaadada.”
          </p>
        </div>

      </div>

    </section>

    <!-- Afarta Qodob -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Afarta Qodob ee Aasaasiga ah
      </h2>

      <div class="space-y-6">

        <!-- Qodobka 1 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Qodobka Koowaad</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “Gaalladii uu la dagaallamay Rasuulka Allaah ﷺ waxay qirsanaayeen in Allaah yahay Abuuraha, Arzaaqaha, Kan wax nooleeya, Kan wax dila, iyo Kan maamula dhammaan arrimaha. Hase yeeshee, qirashadaasi kuma filnayn inay Islaamka ku soo galaan.”
          </p>
        </div>

        <!-- Qodobka 2 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Qodobka Labaad</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “Waxay odhan jireen: ‘Annagu iyaga oo keliya ayaan baryaynaa, xaggoodana ayaan u jeesanaynaa annagoo rajaynayna inay Allaah noo soo dhoweeyaan, oo ay noo shafeecaan. Dhab ahaantii, Allaah ayaan wax ka doonaynaa ee iyaga kama doonayno, laakiin waxaan Allaah ku baryaynaa shafeecadooda, waxaana doonaynaa inaan isaga ugu dhowaanno iyaga dartood.’”
          </p>
        </div>

        <!-- Qodobka 3 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Qodobka Saddexaad</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “Nabiga ﷺ wuxuu ka dhex muuqday dad samayn jiray noocyo cibaado oo aad u kala duwan. Qaar waxay caabudi jireen qorraxda iyo dayaxa, qaarna waxay caabudi jireen malaa'igaha, qaar kalena waxay caabudi jireen geedaha iyo dhagxaanta.”
          </p>
        </div>

        <!-- Qodobka 4 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Qodobka Afraad</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “Shirkiga mushrikiinta maanta jooga ayaa ka daran Shirkigii kuwii ka horreeyey. Markay dhibaato ku dhacdo, mushrikiintii hore waxay Allaah u kaliyeeli jireen cibaadada, markayse helaan barwaaqo, waxay cid kale la wadaajin jireen cibaadada. Hase yeeshee, mushrikiinta maanta joogaa mar kasta ayay Shirkiga sameeyaan, xilliyada barwaaqada iyo xilliyada dhibaatadaba.”
          </p>
        </div>

      </div>

    </section>

    <!-- Gunaanad -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        Allaah, oo ka nasahan ceeb kasta kana sarreeya wax kasta, ayaa og xaqa sida uu yahay. Nabadgelyo iyo naxariis Allena ha ahaato Muxammad, ehelkiisa iyo asxaabtiisa.
      </p>

    </section>

  </div>
</article>

<!-- Qoraal-koodhka Maamula Muuqashada Qaybaha Marka Bogga La Rogayo -->
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
