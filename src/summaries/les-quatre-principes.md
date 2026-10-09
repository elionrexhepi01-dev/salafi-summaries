---
layout: base.njk
title: "Les quatre principes"
author: "Shaykh Muhammad Ibn Abdul Wahhab"
lang: "fr"
dateAdded: 2026-10-09
description: "Un traité fondamental sur les quatre principes relatifs au Tawhid et au Shirk."
---

<!-- CSS personnalisé pour les animations d’apparition au défilement -->
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

  <!-- En-tête principal -->
  <header class="text-center mb-14">
    <h1 class="mt-2 mb-4 text-4xl font-normal leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <p class="text-[#d6b278] font-light text-lg sm:text-xl">
      Par {{ author }}
    </p>
  </header>

  <div class="prose prose-invert max-w-none text-[#B3ADB9] space-y-16 leading-relaxed font-light">

    <!-- Introduction / Principe fondamental -->
    <section class="space-y-8 reveal-on-scroll">

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          « Sache, qu’Allah te guide vers Son obéissance, que la religion pure et droite — la religion d’Ibrahim — consiste à adorer Allah en Lui vouant exclusivement toute la religion. »
        </p>
      </div>

      <div class="space-y-5">

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            « Lorsque le Shirk s’introduit dans l’adoration, il la souille et l’annule, de la même manière que l’impureté rituelle mineure (hadath) annule l’état de pureté rituelle. »
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            « Lorsque tu auras compris que le Shirk, lorsqu’il se mêle à l’adoration, l’annule et rend l’œuvre vaine, et que celui qui le commet demeurera éternellement en Enfer, tu comprendras alors que la chose la plus importante que tu dois apprendre est celle-ci, afin qu’Allah te sauve, nous l’espérons, de ce piège : le fait de Lui associer des partenaires dans l’adoration. »
          </p>
        </div>

      </div>

    </section>

    <!-- Les quatre principes -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Les quatre principes
      </h2>

      <div class="space-y-6">

        <!-- Principe 1 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Le premier principe</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            « Les mécréants que le Messager d’Allah ﷺ a combattus reconnaissaient qu’Allah est le Créateur, Celui qui pourvoit aux besoins de Ses créatures, Celui qui donne la vie, Celui qui donne la mort et Celui qui administre toutes les affaires. Cependant, cette reconnaissance ne suffisait pas à les faire entrer dans l’islam. »
          </p>
        </div>

        <!-- Principe 2 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Le deuxième principe</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            « Ils disaient : “Nous ne faisons que les invoquer et nous tourner vers eux dans l’espoir qu’ils nous rapprochent d’Allah et qu’ils intercèdent en notre faveur. En réalité, c’est à Allah, et non à eux, que nous demandons. Mais nous Lui adressons nos demandes par leur intercession et cherchons à nous rapprocher de Lui par leur intermédiaire.” »
          </p>
        </div>

        <!-- Principe 3 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Le troisième principe</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            « Le Prophète ﷺ fut envoyé parmi des gens dont les pratiques d’adoration étaient très diverses. Certains adoraient le soleil et la lune, d’autres adoraient les anges, et d’autres encore adoraient les arbres et les pierres. »
          </p>
        </div>

        <!-- Principe 4 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Le quatrième principe</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            « Le Shirk des polythéistes de notre époque est pire que celui des polythéistes qui les ont précédés. Dans les moments de difficulté, les anciens polythéistes vouaient un culte sincère à Allah, tandis que dans les moments de facilité, ils Lui associaient des partenaires. Quant aux polythéistes de notre époque, ils commettent le Shirk en permanence, aussi bien dans les moments de facilité que dans les moments de difficulté. »
          </p>
        </div>

      </div>

    </section>

    <!-- Conclusion -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        Allah, exalté soit-Il, sait mieux. Qu’Allah accorde Ses prières et Ses salutations à Muhammad, à sa famille et à ses Compagnons.
      </p>

    </section>

  </div>
</article>

<!-- Script pour gérer l’apparition des éléments au défilement -->
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
