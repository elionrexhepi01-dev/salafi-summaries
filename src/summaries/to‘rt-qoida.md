---
layout: base.njk
title: "To‘rt qoida"
author: "Shayx Muhammad ibn Abdulvahhob"
lang: "uz"
dateAdded: 2026-10-09
description: "Tavhid va shirkka oid to‘rt asosiy qoida haqida muhim risola."
---

<!-- Scroll orqali ko‘rinish va sahifa animatsiyalari uchun maxsus CSS -->
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

  <!-- Asosiy sarlavha -->
  <header class="text-center mb-14">
    <h1 class="mt-2 mb-4 text-4xl font-normal leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <p class="text-[#d6b278] font-light text-lg sm:text-xl">
      Muallif: {{ author }}
    </p>
  </header>

  <div class="prose prose-invert max-w-none text-[#B3ADB9] space-y-16 leading-relaxed font-light">

    <!-- Muqaddima / Asosiy qoida -->
    <section class="space-y-8 reveal-on-scroll">

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          «Bilingki, Alloh sizni O‘ziga itoat qilishga muvaffaq etsin, pok va to‘g‘ri din — Ibrohimning dini Allohga ixlos bilan, dinni faqat Uning O‘ziga xos qilib ibodat qilishdir».
        </p>
      </div>

      <div class="space-y-5">

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            «Ibodatga shirk aralashsa, u buziladi va bekor bo‘ladi. Bu xuddi kichik tahoratsizlik — hadas tahorat holatini buzganiga o‘xshaydi».
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            «Ibodatga aralashgan shirk uni buzib, amalni bekor qilishini va buni qilgan kishi do‘zaxda abadiy qolishini anglab yetganingda, Alloh seni ushbu tuzoqdan — Unga shirk keltirishdan — qutqarishi umidida bu masalani o‘rganish sen uchun eng muhim narsa ekanini tushunasan».
          </p>
        </div>

      </div>

    </section>

    <!-- To‘rt qoida -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        To‘rt qoida
      </h2>

      <div class="space-y-6">

        <!-- Birinchi qoida -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Birinchi qoida</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            «Allohning Rasuli ﷺ jang qilgan kofirlar Alloh Yaratuvchi, Rizq beruvchi, hayot beruvchi, o‘lim keltiruvchi va barcha ishlarni boshqaruvchi Zot ekanini tan olgan edilar. Biroq bu e’tiroflari ularning Islom diniga kirishlari uchun yetarli bo‘lmadi».
          </p>
        </div>

        <!-- Ikkinchi qoida -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Ikkinchi qoida</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            «Ular: “Biz ularga faqat duo qilamiz va ular bizni Allohga yaqinlashtirishlari hamda biz uchun shafoat qilishlari umidida ularga yuzlanamiz. Aslida, biz ulardan emas, Allohdan istaymiz. Lekin U Zotdan ular orqali shafoat so‘raymiz va ular vositasida Unga yaqinlashishga intilamiz”, der edilar».
          </p>
        </div>

        <!-- Uchinchi qoida -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Uchinchi qoida</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            «Payg‘ambar ﷺ ibodat turlari bir-biridan keskin farq qiladigan insonlar orasida paydo bo‘ldilar. Ulardan ba’zilari quyosh va oyga, ba’zilari farishtalarga, yana ba’zilari daraxtlar va toshlarga ibodat qilar edilar».
          </p>
        </div>

        <!-- To‘rtinchi qoida -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">To‘rtinchi qoida</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            «Bizning zamonamizdagi mushriklarning shirki avvalgilarning shirkidan ham og‘irroqdir. Qadimgi mushriklar qiyinchilik paytida Allohga ixlos bilan ibodat qilar, farovonlik paytida esa Unga shirk keltirar edilar. Ammo bizning zamonamizdagi mushriklar har doim — farovonlikda ham, qiyinchilikda ham — shirk qiladilar».
          </p>
        </div>

      </div>

    </section>

    <!-- Xotima -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        Ulug‘ va pok Alloh yaxshiroq biladi. Muhammadga, u zotning oilalariga va sahobalariga salavot va salomlar bo‘lsin.
      </p>

    </section>

  </div>
</article>

<!-- Scroll orqali elementlarni ko‘rsatish uchun skript -->
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
