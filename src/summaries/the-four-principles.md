---
layout: base.njk
title: "The Four Principles"
author: "Shaykh Muhammad Ibn Abdul Wahhab"
lang: "en"
dateAdded: 2026-10-09
description: "A foundational treatise outlining the four core principles regarding Monotheism (Tawhid) and Polytheism (Shirk)."
---

<!-- Custom CSS for Scroll-Reveal & Page Animations -->
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

  <!-- Main Header -->
  <header class="text-center mb-14">
    <h1 class="mt-2 mb-4 text-4xl font-normal leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <p class="text-[#d6b278] font-light text-lg sm:text-xl">
      By {{ author }}
    </p>
  </header>

  <div class="prose prose-invert max-w-none text-[#B3ADB9] space-y-16 leading-relaxed font-light">

    <!-- Introduction / Fundamental Premise -->
    <section class="space-y-8 reveal-on-scroll">

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          “Know, may Allah direct you to obey Him, that the pure, upright faith: the religion of Ibrahim is to worship Allah, making the religion sincerely and solely His.”
        </p>
      </div>

      <div class="space-y-5">

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            “When shirk enters worship, it is sullied and annulled in the same way that minor ritual impurity, hadath, annuls the state of purification.”
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            “When you have acknowledged that shirk, when mixed with worship, annuls it and voids the deed, and that the person who perpetrated it will be in the Fire forever, you will apprehend that this is the most important thing for you to learn so that hopefully Allah would save you from this snare: associating partners with Allah.”
          </p>
        </div>

      </div>

    </section>

    <!-- The Four Principles -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        The Four Principles
      </h2>

      <div class="space-y-6">

        <!-- Principle 1 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">The First Principle</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “The disbelievers whom the Messenger of Allah ﷺ fought accepted that Allah was the Creator, the Provider, the giver of life, the causer of death, and the One who regulates all affairs. Yet this acceptance was not enough to allow them entry into the fold of Islam.”
          </p>
        </div>

        <!-- Principle 2 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">The Second Principle</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “They would say, ‘We only supplicate to them and turn to them in the hope that they will draw us nearer (to Allah) and that they will intercede on our behalf. In reality, we want from Allah, not them, but we are asking (Him) through their intercession, and we seek to draw closer to Him through them.’”
          </p>
        </div>

        <!-- Principle 3 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">The Third Principle</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “The Prophet ﷺ appeared amongst people who practised greatly divergent acts of worship. Some would worship the sun and the moon, some would worship Angels, and some would worship trees and rocks.”
          </p>
        </div>

        <!-- Principle 4 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">The Fourth Principle</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            “The shirk of the polytheist of our times is worse than that of those before. At times of difficulty, the polytheists of old would be sincere to Allah and at times of ease, they would associate partners with Him. The polytheists of our time, however, commit shirk all the time, in times of ease as well as times of hardship.”
          </p>
        </div>

      </div>

    </section>

    <!-- Closing -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        Allah, Glorious is He, knows best. Peace and blessings be upon Muhammad, his family and his Companions.
      </p>

    </section>

  </div>  
</article>

<!-- Script to handle reveal on scroll -->
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
