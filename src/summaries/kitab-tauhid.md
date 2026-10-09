---
layout: base.njk
title: "Kitab Tauhid"
author: "Syekh Muhammad Ibn Abdul Wahhab"
lang: "id"
dateAdded: 2026-10-09
description: "Risalah mendasar tentang Tauhid, rasa takut terhadap Syirik, dan menjauhi kesyirikan."
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

    <!-- At-Tauhid (Keesaan Allah) -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Tauhid (Mengesakan Allah)
      </h2>

      <div class="space-y-6">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Allah Ta'ala berfirman:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Aku tidak menciptakan jin dan manusia melainkan agar mereka beribadah kepada-Ku semata."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (QS. Adz-Dzariyat: 56)
          </p>
        </div>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Allah juga berfirman:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Sungguh, Kami telah mengutus seorang rasul kepada setiap umat (untuk menyerukan), 'Sembahlah Allah semata dan jauhilah Taghut (segala sesuatu yang disembah selain Allah).' "
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (QS. An-Nahl: 36)
          </p>
        </div>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Allah berfirman:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Sembahlah Allah dan janganlah kamu mempersekutukan-Nya dengan sesuatu apa pun."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (QS. An-Nisa: 36)
          </p>
        </div>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Allah juga berfirman:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Dan Rabbmu telah memerintahkan agar kamu jangan menyembah selain Dia."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (QS. Al-Isra: 23)
          </p>
        </div>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Allah Yang Mahatinggi berfirman:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Orang-orang yang beriman dan tidak mencampuradukkan iman mereka dengan kezaliman (syirik), mereka itulah yang mendapat keamanan dan mereka adalah orang-orang yang mendapat petunjuk."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (QS. Al-An'am: 82)
          </p>
        </div>

      </div>

      <div class="space-y-6 border-t border-[#24211e] pt-8">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Rasulullah ﷺ bersabda:
        </p>

        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Barang siapa bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Allah semata, tidak ada sekutu bagi-Nya, bahwa Muhammad adalah hamba dan utusan-Nya, bahwa Isa adalah hamba Allah, utusan-Nya, dan kalimat-Nya yang Dia sampaikan kepada Maryam, serta ruh yang diciptakan oleh-Nya, dan bahwa Surga dan Neraka adalah benar adanya, niscaya Allah akan memasukkannya ke dalam Surga, apa pun amal yang telah dilakukannya."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (Sahih Al-Bukhari, hadis no. 3252)
          </p>
        </div>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Nabi ﷺ bersabda:
        </p>

        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Sesungguhnya Allah mengharamkan Neraka bagi orang yang bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Allah, dengan mengharapkan wajah Allah semata melalui kesaksiannya itu."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (Al-Bukhari dan Muslim)
          </p>
        </div>

        <p class="text-lg leading-relaxed sm:text-xl">
          At-Tirmidzi meriwayatkan dari Anas bahwa ia mendengar Rasulullah ﷺ bersabda:
        </p>

        <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-6 sm:p-7 rounded-r-lg">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Allah Yang Mahatinggi berfirman, 'Wahai anak Adam, seandainya engkau datang kepada-Ku dengan dosa sepenuh bumi, kemudian engkau menemui-Ku tanpa mempersekutukan sesuatu pun dengan-Ku, niscaya Aku akan datang kepadamu dengan ampunan sepenuh bumi pula.' "
          </p>
        </div>

      </div>

    </section>

    <!-- Takut terhadap Syirik -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Takut terhadap Syirik
      </h2>

      <div class="space-y-6">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Allah Ta'ala berfirman:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Sesungguhnya Allah tidak akan mengampuni dosa syirik, dan Dia mengampuni dosa selain itu bagi siapa yang Dia kehendaki."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (QS. An-Nisa: 48, 116)
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg space-y-2">
          <p class="text-lg leading-relaxed sm:text-xl">
            Nabi Ibrahim عليه السلام berdoa, "Jauhkanlah aku dan anak cucuku dari menyembah berhala."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (QS. Ibrahim: 35)
          </p>
        </div>

        <p class="text-lg leading-relaxed sm:text-xl">
          Ibn Mas'ud رضي الله عنه meriwayatkan bahwa Nabi Muhammad ﷺ bersabda:
        </p>

        <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Barang siapa meninggal dunia dalam keadaan mempersekutukan Allah, niscaya ia masuk Neraka."
          </p>
          <p class="mt-2 text-sm sm:text-base text-[#d6b278]">
            (Al-Bukhari)
          </p>
        </div>

        <p class="text-lg leading-relaxed sm:text-xl">
          Muslim meriwayatkan dari Jabir رضي الله عنه bahwa Rasulullah ﷺ bersabda:
        </p>

        <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Barang siapa menemui Allah pada hari Kiamat tanpa mempersekutukan sesuatu pun dengan-Nya, niscaya ia masuk Surga. Dan barang siapa menemui-Nya dalam keadaan melakukan syirik, niscaya ia masuk Neraka."
          </p>
        </div>

      </div>

    </section>

    <!-- Larangan Berbagai Bentuk Syirik -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Larangan Berbagai Bentuk Syirik
      </h2>

      <div class="space-y-8">

        <!-- Memakai cincin, benang, dan sejenisnya -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-4">
          <h3 class="text-xl sm:text-2xl font-normal text-white border-b border-[#332f2b] pb-3">
            Memakai Cincin, Benang, atau Benda Sejenis untuk Menolak atau Menghilangkan Bahaya dan Musibah Termasuk Syirik
          </h3>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            Diriwayatkan bahwa Nabi ﷺ bersabda, "Barang siapa menggantungkan jimat, sungguh ia telah melakukan syirik."
          </p>
        </div>

        <!-- Mencari berkah melalui pohon, batu, dan sejenisnya -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-4">
          <h3 class="text-xl sm:text-2xl font-normal text-white border-b border-[#332f2b] pb-3">
            Mencari Berkah melalui Pohon, Batu, atau Benda Sejenis
          </h3>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            Allah Yang Mahatinggi berfirman:
          </p>
          <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg space-y-2">
            <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
              "Maka apakah patut kamu menganggap Al-Lata dan Al-'Uzza, dan Manat, yang ketiga, yang paling kemudian (sebagai anak perempuan Allah)?"
            </p>
            <p class="text-sm sm:text-base text-[#d6b278]">
              (QS. An-Najm: 19–20)
            </p>
          </div>
        </div>

        <!-- Menyembelih untuk selain Allah -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-6">
          <h3 class="text-xl sm:text-2xl font-normal text-white border-b border-[#332f2b] pb-3">
            Menyembelih untuk Selain Allah
          </h3>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            Allah Ta'ala berfirman:
          </p>
          <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg space-y-2">
            <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
              "Katakanlah, 'Sesungguhnya salatku, ibadah kurbanku, hidupku, dan matiku hanyalah untuk Allah, Rabb seluruh alam. Tidak ada sekutu bagi-Nya. Demikianlah yang diperintahkan kepadaku, dan aku adalah orang yang pertama-tama berserah diri.' "
            </p>
            <p class="text-sm sm:text-base text-[#d6b278]">
              (QS. Al-An'am: 162–163)
            </p>
          </div>

          <p class="text-lg leading-relaxed sm:text-xl">
            Imam Ahmad meriwayatkan dari Thariq bin Syihab bahwa Rasulullah ﷺ bersabda:
          </p>
          <div class="bg-[#1c1a18] border border-[#332f2b] p-5 sm:p-6 rounded-lg space-y-3">
            <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
              "Ada seseorang yang masuk Surga karena seekor lalat, dan ada pula seseorang yang masuk Neraka karena seekor lalat." Para sahabat bertanya, "Bagaimana hal itu bisa terjadi, wahai Rasulullah?" Beliau menjawab, "Dua orang melewati suatu kaum yang memiliki berhala. Tidak seorang pun diizinkan melewatinya sebelum mempersembahkan kurban kepadanya. Mereka menyuruh salah seorang dari kedua orang itu untuk mempersembahkan kurban. Ia berkata, 'Aku tidak memiliki sesuatu untuk dipersembahkan.' Mereka berkata, 'Persembahkanlah sesuatu, meskipun hanya seekor lalat.' Maka ia pun mempersembahkan seekor lalat kepada berhala itu. Mereka membiarkannya lewat, sehingga ia masuk Neraka. Kemudian mereka menyuruh orang yang satunya untuk mempersembahkan kurban. Ia berkata, 'Aku tidak akan mempersembahkan kurban kepada siapa pun selain Allah, Yang Mahaperkasa lagi Mahamulia.' Maka mereka pun memenggal lehernya, dan ia masuk Surga."
            </p>
            <p class="text-sm sm:text-base text-[#d6b278]">
              (Imam Ahmad)
            </p>
          </div>
        </div>

        <!-- Bentuk-bentuk syirik lainnya -->
        <div class="grid grid-cols-1 gap-5">

          <div class="bg-[#24211e] border border-[#332f2b] p-6 rounded-lg">
            <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
              Bernazar untuk selain Allah termasuk syirik.
            </p>
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-6 rounded-lg">
            <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
              Memohon perlindungan kepada selain Allah termasuk bentuk syirik.
            </p>
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-6 rounded-lg">
            <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
              Memohon pertolongan dalam kesulitan kepada selain Allah (istighatsah) atau berdoa kepada selain-Nya termasuk syirik.
            </p>
          </div>

        </div>

        <!-- Tentang peramal dan sejenisnya -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-4">
          <h3 class="text-xl sm:text-2xl font-normal text-white border-b border-[#332f2b] pb-3">
            Tentang Peramal dan Sejenisnya
          </h3>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            Nabi ﷺ bersabda:
          </p>
          <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg space-y-2">
            <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
              "Barang siapa mendatangi peramal lalu membenarkan ucapannya, sungguh ia telah mengingkari wahyu yang diturunkan kepada Muhammad ﷺ."
            </p>
            <p class="text-sm sm:text-base text-[#d6b278]">
              (Abu Dawud)
            </p>
          </div>
        </div>

      </div>

    </section>

    <!-- Penutup -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        Allah lebih mengetahui. Segala puji dan syukur bagi Allah, Rabb seluruh alam. Semoga selawat dan salam Allah tercurah kepada Nabi kita Muhammad, seluruh pengikut beliau, dan para sahabat beliau.
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
