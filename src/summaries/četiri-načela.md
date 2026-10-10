---
layout: base.njk
title: "Četiri načela"
author: "Šejh Muhammad Ibn Abdul-Wahhab"
lang: "bs"
dateAdded: 2026-10-09
description: "Temeljna poslanica o četiri načela tevhida i širka."
---

<!-- Prilagođeni CSS za animacije pri pomicanju stranice -->
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

  <!-- Glavno zaglavlje -->
  <header class="text-center mb-14">
    <h1 class="mt-2 mb-4 text-4xl font-normal leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <p class="text-[#d6b278] font-light text-lg sm:text-xl">
      Autor: {{ author }}
    </p>
  </header>

  <div class="prose prose-invert max-w-none text-[#B3ADB9] space-y-16 leading-relaxed font-light">

    <!-- Uvod / Temeljna postavka -->
    <section class="space-y-8 reveal-on-scroll">

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          „Znaj, Allah te uputio na pokornost Njemu, da se čista i ispravna vjera, vjera Ibrahima, ogleda u tome da obožavaš Allaha, iskreno i isključivo posvećujući vjeru Njemu.“
        </p>
      </div>

      <div class="space-y-5">

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            „Kada se širk pomiješa s ibadetom, on ga uprlja i poništi, isto kao što mali obredni gubitak čistoće, hades, poništava stanje čistoće.“
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            „Kada shvatiš da širk, ako se pomiješa s ibadetom, poništava ibadet i djelo čini nevažećim te da će onaj ko ga počini vječno ostati u Vatri, razumjet ćeš da je ovo najvažnija stvar koju trebaš naučiti, kako bi te Allah, nadati se, spasio ove zamke: pripisivanja Allahu sudruga.“
          </p>
        </div>

      </div>

    </section>

    <!-- Četiri načela -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Četiri načela
      </h2>

      <div class="space-y-6">

        <!-- Prvo načelo -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Prvo načelo</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            „Nevjernici protiv kojih se Allahov Poslanik ﷺ borio priznavali su da je Allah Stvoritelj, Opskrbitelj, Onaj koji daje život i usmrćuje te Onaj koji upravlja svim stvarima. Međutim, samo ovo priznanje nije bilo dovoljno da uđu u islam.“
          </p>
        </div>

        <!-- Drugo načelo -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Drugo načelo</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            „Govorili bi: 'Mi im se samo dovom obraćamo i njima se okrećemo, nadajući se da će nas približiti Allahu i da će se zauzimati za nas. Mi, zapravo, želimo ono što je kod Allaha, a ne kod njih, ali molimo Allaha posredstvom njihovog zauzimanja i nastojimo im se približiti kako bismo se približili Njemu.'“
          </p>
        </div>

        <!-- Treće načelo -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Treće načelo</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            „Vjerovjesnik ﷺ pojavio se među ljudima koji su prakticirali veoma različite vrste ibadeta. Neki su obožavali Sunce i Mjesec, neki meleke, a neki drveće i kamenje.“
          </p>
        </div>

        <!-- Četvrto načelo -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Četvrto načelo</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            „Širk mušrika u našem vremenu gori je od širka onih koji su živjeli prije njih. Kada bi se našli u teškoći, prijašnji mušrici iskreno bi se obraćali Allahu, a u blagostanju bi Mu pripisivali sudruge. Mušrici našeg vremena, međutim, čine širk u svakom stanju, i u blagostanju i u teškoći.“
          </p>
        </div>

      </div>

    </section>

    <!-- Završetak -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        Uzvišeni Allah najbolje zna. Neka su mir i blagoslov na Muhammeda, njegovu porodicu i njegove ashabe.
      </p>

    </section>

  </div>
</article>

<!-- Skripta za prikazivanje elemenata prilikom pomicanja stranice -->
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
