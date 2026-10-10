---
layout: base.njk
title: "Os Quatro Princípios"
author: "Shaykh Muhammad Ibn Abdul Wahhab"
lang: "pt"
dateAdded: 2026-10-09
description: "Um tratado fundamental sobre os quatro princípios do Tawhid e do Shirk."
---

<!-- CSS personalizado para revelar elementos ao rolar a página e animar a entrada -->
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

  <!-- Cabeçalho principal -->
  <header class="text-center mb-14">
    <h1 class="mt-2 mb-4 text-4xl font-normal leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <p class="text-[#d6b278] font-light text-lg sm:text-xl">
      Por {{ author }}
    </p>
  </header>

  <div class="prose prose-invert max-w-none text-[#B3ADB9] space-y-16 leading-relaxed font-light">

    <!-- Introdução / Premissa fundamental -->
    <section class="space-y-8 reveal-on-scroll">

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          «Sabe, que Allah te oriente para Lhe obedeceres, que a fé pura e reta — a religião de Ibrahim — consiste em adorar Allah, dedicando-Lhe a religião com sinceridade e exclusivamente a Ele.»
        </p>
      </div>

      <div class="space-y-5">

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            «Quando o Shirk entra na adoração, esta fica corrompida e é invalidada, tal como a impureza ritual menor (hadath) invalida o estado de purificação.»
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            «Quando reconheceres que o Shirk, ao misturar-se com a adoração, a invalida e anula as ações, e que aquele que o pratica permanecerá eternamente no Fogo, compreenderás que esta é a coisa mais importante que deves aprender, para que Allah talvez te salve desta armadilha: atribuir-Lhe parceiros na adoração.»
          </p>
        </div>

      </div>

    </section>

    <!-- Os Quatro Princípios -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Os Quatro Princípios
      </h2>

      <div class="space-y-6">

        <!-- Princípio 1 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">O Primeiro Princípio</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            «Os descrentes contra os quais o Mensageiro de Allah ﷺ combateu reconheciam que Allah é o Criador, o Sustentador, Aquele que dá a vida, Aquele que causa a morte e Aquele que governa todos os assuntos. Contudo, esse reconhecimento não foi suficiente para lhes permitir entrar no Islam.»
          </p>
        </div>

        <!-- Princípio 2 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">O Segundo Princípio</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            «Eles diziam: “Apenas lhes suplicamos e recorremos a eles na esperança de que nos aproximem de Allah e intercedam em nosso favor. Na realidade, queremos obter algo de Allah, e não deles; porém, pedimos-Lhe através da sua intercessão e procuramos aproximar-nos d'Ele por meio deles.”»
          </p>
        </div>

        <!-- Princípio 3 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">O Terceiro Princípio</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            «O Profeta ﷺ surgiu entre pessoas que praticavam formas de adoração muito diferentes. Algumas adoravam o sol e a lua, outras adoravam os anjos, e outras adoravam árvores e pedras.»
          </p>
        </div>

        <!-- Princípio 4 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">O Quarto Princípio</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            «O Shirk dos politeístas dos nossos tempos é pior do que o dos que os precederam. Nos momentos de dificuldade, os antigos politeístas dedicavam a adoração sinceramente a Allah, mas, nos momentos de tranquilidade, associavam-Lhe parceiros. Os politeístas dos nossos tempos, porém, cometem Shirk continuamente, tanto nos momentos de tranquilidade como nos momentos de dificuldade.»
          </p>
        </div>

      </div>

    </section>

    <!-- Conclusão -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        Allah, Glorificado seja, sabe melhor. Que a paz e as bênçãos de Allah estejam sobre Muhammad, a sua família e os seus Companheiros.
      </p>

    </section>

  </div>
</article>

<!-- Script para revelar os elementos ao rolar a página -->
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
