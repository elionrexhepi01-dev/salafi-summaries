---
layout: base.njk
title: "Empat Kaidah"
author: "Syekh Muhammad Ibn Abdul Wahhab"
lang: "id"
dateAdded: 2026-10-09
description: "Risalah mendasar tentang empat kaidah Tauhid dan Syirik."
---

<!-- CSS khusus untuk animasi kemunculan halaman dan saat digulir -->
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

  <!-- Judul utama -->
  <header class="text-center mb-14">
    <h1 class="mt-2 mb-4 text-4xl font-normal leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <p class="text-[#d6b278] font-light text-lg sm:text-xl">
      Karya {{ author }}
    </p>
  </header>

  <div class="prose prose-invert max-w-none text-[#B3ADB9] space-y-16 leading-relaxed font-light">

    <!-- Pendahuluan / Landasan dasar -->
    <section class="space-y-8 reveal-on-scroll">

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          "Ketahuilah, semoga Allah membimbingmu untuk menaati-Nya, bahwa agama yang lurus dan murni, yaitu agama Ibrahim, adalah beribadah kepada Allah dengan memurnikan agama hanya untuk-Nya semata."
        </p>
      </div>

      <div class="space-y-5">

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            "Apabila syirik masuk ke dalam ibadah, ibadah tersebut menjadi tercemar dan batal, sebagaimana hadas kecil membatalkan keadaan suci."
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            "Apabila engkau telah mengetahui bahwa syirik yang bercampur dengan ibadah akan membatalkannya dan menggugurkan amal tersebut, serta bahwa orang yang melakukannya akan kekal di dalam Neraka, engkau akan memahami bahwa perkara ini adalah hal terpenting yang harus engkau pelajari. Semoga Allah menyelamatkanmu dari perangkap ini, yaitu mempersekutukan Allah dengan sesuatu yang lain."
          </p>
        </div>

      </div>

    </section>

    <!-- Empat Kaidah -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Empat Kaidah
      </h2>

      <div class="space-y-6">

        <!-- Kaidah 1 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Kaidah Pertama</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Orang-orang kafir yang diperangi oleh Rasulullah ﷺ mengakui bahwa Allah adalah Sang Pencipta, Pemberi rezeki, Pemberi kehidupan, Yang mematikan, dan Yang mengatur seluruh urusan. Namun, pengakuan tersebut tidak cukup untuk memasukkan mereka ke dalam agama Islam."
          </p>
        </div>

        <!-- Kaidah 2 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Kaidah Kedua</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Mereka akan berkata, 'Kami hanya berdoa kepada mereka dan menjadikan mereka sebagai perantara dengan harapan agar mereka mendekatkan kami kepada Allah dan memberikan syafaat bagi kami. Sebenarnya, yang kami inginkan adalah Allah, bukan mereka. Akan tetapi, kami memohon kepada-Nya melalui syafaat mereka dan berusaha mendekatkan diri kepada-Nya melalui mereka.'"
          </p>
        </div>

        <!-- Kaidah 3 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Kaidah Ketiga</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Nabi ﷺ diutus kepada suatu kaum yang melakukan berbagai bentuk ibadah yang sangat beragam. Sebagian menyembah matahari dan bulan, sebagian menyembah para malaikat, dan sebagian lainnya menyembah pepohonan dan bebatuan."
          </p>
        </div>

        <!-- Kaidah 4 -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Kaidah Keempat</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Syirik yang dilakukan oleh kaum musyrikin pada zaman kita lebih parah daripada syirik yang dilakukan oleh orang-orang terdahulu. Ketika mengalami kesulitan, orang-orang musyrik terdahulu memurnikan ibadah mereka kepada Allah. Namun, ketika berada dalam kelapangan, mereka mempersekutukan-Nya. Adapun orang-orang musyrik pada zaman kita, mereka melakukan syirik sepanjang waktu, baik dalam keadaan lapang maupun dalam keadaan sulit."
          </p>
        </div>

      </div>

    </section>

    <!-- Penutup -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        Allah Yang Mahamulia lagi Mahatinggi lebih mengetahui. Semoga selawat dan salam tercurah kepada Muhammad, keluarga beliau, dan para sahabat beliau.
      </p>

    </section>

  </div>
</article>

<!-- Skrip untuk menangani animasi saat halaman digulir -->
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
