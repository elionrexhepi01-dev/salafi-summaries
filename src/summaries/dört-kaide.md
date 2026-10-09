---
layout: base.njk
title: "Dört Kaide"
author: "Şeyh Muhammed İbn Abdülvehhâb"
lang: "tr"
dateAdded: 2026-10-09
description: "Tevhid ve şirk hakkındaki dört kaideyi açıklayan temel bir risale."
---

<!-- Kaydırma ile Görünme ve Sayfa Animasyonları için Özel CSS -->
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

  <!-- Ana Başlık -->
  <header class="text-center mb-14">
    <h1 class="mt-2 mb-4 text-4xl font-normal leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <p class="text-[#d6b278] font-light text-lg sm:text-xl">
      Yazar: {{ author }}
    </p>
  </header>

  <div class="prose prose-invert max-w-none text-[#B3ADB9] space-y-16 leading-relaxed font-light">

    <!-- Giriş / Temel İlke -->
    <section class="space-y-8 reveal-on-scroll">

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          "Bil ki, Allah seni kendisine itaat etmeye muvaffak kılsın, dosdoğru ve tertemiz din olan İbrahim'in dini, dini yalnızca Allah'a has kılarak O'na ibadet etmektir."
        </p>
      </div>

      <div class="space-y-5">

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            "İbadete şirk karıştığında, tıpkı küçük hadesin taharet hâlini bozması gibi, ibadet kirlenir ve geçersiz olur."
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
            "İbadete karışan şirkin ibadeti geçersiz kıldığını, ameli boşa çıkardığını ve bunu yapan kişinin ateşte ebedî kalacağını öğrendiğinde, Allah'ın seni bu tuzaktan, yani Allah'a ortak koşmaktan kurtarmasını umarak, öğrenmen gereken en önemli şeyin bu olduğunu anlayacaksın."
          </p>
        </div>

      </div>

    </section>

    <!-- Dört Kaide -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Dört Kaide
      </h2>

      <div class="space-y-6">

        <!-- Birinci Kaide -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Birinci Kaide</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Allah Resûlü'nün ﷺ savaştığı müşrikler; Allah'ın yaratıcı, rızık veren, hayat veren, ölümü gerçekleştiren ve bütün işleri yöneten olduğunu kabul ediyorlardı. Ancak bu kabulleri, İslam'a girmeleri için yeterli değildi."
          </p>
        </div>

        <!-- İkinci Kaide -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">İkinci Kaide</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Onlar şöyle derlerdi: 'Biz onlara yalnızca dua ediyor ve bizi Allah'a daha fazla yaklaştırmalarını ve bizim için şefaat etmelerini umarak onlara yöneliyoruz. Aslında onlardan değil, Allah'tan istiyoruz. Ancak O'ndan, onların şefaati aracılığıyla talepte bulunuyor ve onlar vasıtasıyla O'na yakınlaşmaya çalışıyoruz.'"
          </p>
        </div>

        <!-- Üçüncü Kaide -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Üçüncü Kaide</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Peygamber ﷺ, ibadetleri birbirinden oldukça farklı olan insanların arasına gönderildi. Onlardan bazıları güneşe ve aya, bazıları meleklere, bazıları ise ağaçlara ve taşlara ibadet ediyordu."
          </p>
        </div>

        <!-- Dördüncü Kaide -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-3">
          <span class="text-[#d6b278] text-sm uppercase tracking-wider font-semibold">Dördüncü Kaide</span>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Günümüzdeki müşriklerin şirki, geçmiştekilerin şirkinden daha kötüdür. Eski müşrikler sıkıntı zamanlarında yalnızca Allah'a yönelip ibadeti O'na has kılar, rahatlık zamanlarında ise O'na ortak koşarlardı. Ancak günümüzdeki müşrikler hem rahatlık hem de sıkıntı zamanlarında sürekli şirk işlemektedirler."
          </p>
        </div>

      </div>

    </section>

    <!-- Kapanış -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        Yücelerin yücesi Allah en doğrusunu bilir. Muhammed'e, ailesine ve ashabına salât ve selâm olsun.
      </p>

    </section>

  </div>
</article>

<!-- Kaydırma ile Görünme Efektini Yöneten Script -->
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
