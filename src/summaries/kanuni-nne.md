---
layout: base.njk
title: "Kanuni Nne"
author: "Shaykh Muhammad Ibn Abdul Wahhab"
lang: "sw"
dateAdded: 2026-10-09
description: "Risala ya msingi kuhusu kanuni nne za Tawhid na Shirk."
---

<!-- CSS Maalumu kwa ajili ya Uhuishaji wa Kuingia kwa Ukurasa na Kuonekana kwa Sehemu Unaposogeza Ukurasa -->
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

  <!-- Kichwa Kikuu -->
  <header class="text-center mb-14">
    <h1 class="mt-2 mb-4 text-4xl font-normal leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <p class="text-[#d6b278] font-light text-lg sm:text-xl">
      Imeandikwa na {{ author }}
    </p>
  </header>

  <div class="prose prose-invert max-w-none text-[#B3ADB9] space-y-16 leading-relaxed font-light">

    <!-- Utangulizi / Msingi wa Kimsingi -->
    <section class="space-y-8 reveal-on-scroll">

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          “Jua, Allah akuongoze katika kumtii Yeye, kwamba dini iliyo safi na iliyonyooka—dini ya Ibrahim—ni kumwabudu Allah huku ukiifanya dini kwa ikhlasi na kwa ajili Yake Pekee.”
        </p>
      </div>

      <div class="space-y-5">

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            “Shirk inapoingia katika ibada, huichafua na kuibatilisha, kama vile hadath, yaani hali ya kutokuwa na twahara ndogo, inavyobatilisha twahara.”
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            “Unapokubali kwamba Shirk inapochanganyika na ibada huibatilisha na kuharibu tendo hilo, na kwamba aliyeifanya atakaa Motoni milele, utaelewa kwamba jambo hili ndilo muhimu zaidi kwako kujifunza, ili kwa matumaini Allah akuokoe na mtego huu: kumshirikisha Allah na wengine katika ibada.”
          </p>
        </div>

      </div>

    </section>

    <!-- Kanuni Nne -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Kanuni Nne
      </h2>

      <div class="space-y-6">

        <!-- Kanuni ya Kwanza -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Kanuni ya Kwanza</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “Makafiri ambao Mtume wa Allah ﷺ alipigana nao walikubali kwamba Allah ndiye Muumbaji, Mruzuku, Mtoaji wa uhai, Mwenye kusababisha kifo, na Mwenye kusimamia mambo yote. Hata hivyo, kukubali kwao jambo hili hakukutosha kuwaingiza katika Uislamu.”
          </p>
        </div>

        <!-- Kanuni ya Pili -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Kanuni ya Pili</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “Walisema: ‘Sisi tunawaomba tu na kuwaelekea, tukitumaini kwamba watatukurubisha zaidi kwa Allah na watatuombea. Kwa hakika, tunachokitaka ni kutoka kwa Allah, si kutoka kwao, lakini tunamuomba Allah kupitia uombezi wao, na tunatafuta kujikurubisha Kwake kupitia kwao.’”
          </p>
        </div>

        <!-- Kanuni ya Tatu -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Kanuni ya Tatu</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “Mtume ﷺ alitumwa kwa watu waliokuwa wakifanya aina mbalimbali sana za ibada. Baadhi yao waliabudu jua na mwezi, baadhi waliabudu Malaika, na wengine waliabudu miti na mawe.”
          </p>
        </div>

        <!-- Kanuni ya Nne -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Kanuni ya Nne</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “Shirk ya washirikina wa zama zetu ni mbaya zaidi kuliko ile ya watu waliotangulia. Wakati wa shida, washirikina wa zamani walimfanyia Allah ibada kwa ikhlasi, lakini wakati wa raha walimshirikisha. Ama washirikina wa zama zetu, wao hufanya Shirk wakati wote, katika nyakati za raha na pia katika nyakati za shida.”
          </p>
        </div>

      </div>

    </section>

    <!-- Hitimisho -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        Allah, Aliyetukuka, ndiye Mjuzi zaidi. Rehema na amani zimshukie Muhammad, ahli zake na Maswahaba wake.
      </p>

    </section>

  </div>
</article>

<!-- Script ya kushughulikia kuonekana kwa sehemu wakati wa kusogeza ukurasa -->
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
