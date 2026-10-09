---
layout: base.njk
title: "Tevhid Kitabı"
author: "Şeyh Muhammed İbn Abdülvehhâb"
lang: "tr"
dateAdded: 2026-10-09
description: "Tevhid, şirkten korkmak ve şirkten sakınmak hakkında temel bir risale."
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

    <!-- Tevhid (Allah'ın Birliği) -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Tevhid (Allah'ın Birliği)
      </h2>

      <div class="space-y-6">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Yüce Allah şöyle buyurmuştur:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Ben cinleri ve insanları ancak Bana ibadet etsinler diye yarattım."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (Zâriyât Suresi, 51:56)
          </p>
        </div>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Yine şöyle buyurmuştur:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Andolsun, biz her ümmete, 'Allah'a ibadet edin ve Tağut'tan kaçının' diye bir peygamber gönderdik."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (Nahl Suresi, 16:36)
          </p>
        </div>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Yine şöyle buyurmuştur:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Allah'a ibadet edin ve O'na hiçbir şeyi ortak koşmayın."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (Nisâ Suresi, 4:36)
          </p>
        </div>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Yine şöyle buyurmuştur:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Rabbin, kendisinden başkasına ibadet etmemenizi kesin olarak emretti."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (İsrâ Suresi, 17:23)
          </p>
        </div>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Yüce Allah şöyle buyurmuştur:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "İman edip de imanlarına zulüm (şirk) bulaştırmayanlar var ya, işte güven onların hakkıdır ve doğru yolda olanlar da onlardır."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (En'âm Suresi, 6:82)
          </p>
        </div>

      </div>

      <div class="space-y-6 border-t border-[#24211e] pt-8">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Allah Resûlü ﷺ şöyle buyurmuştur:
        </p>

        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Kim, hiçbir ortağı bulunmayan, tek olan Allah'tan başka hak ilah olmadığına; Muhammed'in O'nun kulu ve Resûlü olduğuna; Îsâ'nın da Allah'ın kulu, Resûlü, Meryem'e ulaştırdığı kelimesi ve O'ndan bir ruh olduğuna; cennetin ve cehennemin hak olduğuna şehadet ederse, amelleri ne olursa olsun Allah onu cennete koyar."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (Sahih el-Buhârî, Hadis No. 3252)
          </p>
        </div>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Peygamber ﷺ şöyle buyurmuştur:
        </p>

        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Allah'ın rızasını isteyerek, O'ndan başka hak ilah olmadığını söyleyen kimseye Allah cehennemi haram kılmıştır."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (Buhârî ve Müslim)
          </p>
        </div>

        <p class="text-lg leading-relaxed sm:text-xl">
          Tirmizî, Enes رضي الله عنه'den rivayet eder. Enes, Allah Resûlü'nün ﷺ şöyle buyurduğunu işitmiştir:
        </p>

        <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-6 sm:p-7 rounded-r-lg">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Yüce Allah şöyle buyurmuştur: 'Ey Âdemoğlu! Bana yeryüzü dolusu günahla gelsen ve Bana hiçbir şeyi ortak koşmadan huzuruma çıksan, ben de sana yeryüzü dolusu mağfiretle gelirim.'"
          </p>
        </div>

      </div>

    </section>

    <!-- Şirkten Korkmak -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Şirkten Korkmak
      </h2>

      <div class="space-y-6">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Yüce Allah şöyle buyurmuştur:
        </p>

        <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Şüphesiz Allah, kendisine ortak koşulmasını bağışlamaz. Bunun dışındaki günahları ise dilediği kimse için bağışlar."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (Nisâ Suresi, 4:48, 116)
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg space-y-2">
          <p class="text-lg leading-relaxed sm:text-xl">
            İbrahim عليه السلام şöyle demiştir: "Rabbim! Beni ve oğullarımı putlara ibadet etmekten uzak tut."
          </p>
          <p class="text-sm sm:text-base text-[#d6b278]">
            (İbrahim Suresi, 14:35)
          </p>
        </div>

        <p class="text-lg leading-relaxed sm:text-xl">
          İbn Mes'ûd رضي الله عنه, Muhammed Peygamber'in ﷺ şöyle buyurduğunu rivayet etmiştir:
        </p>

        <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Kim Allah'a ortak koşarak ölürse cehenneme girer."
          </p>
          <p class="mt-2 text-sm sm:text-base text-[#d6b278]">
            (Buhârî)
          </p>
        </div>

        <p class="text-lg leading-relaxed sm:text-xl">
          Müslim, Câbir رضي الله عنه'den Allah Resûlü'nün ﷺ şöyle buyurduğunu rivayet eder:
        </p>

        <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Kim Allah'a hiçbir şeyi ortak koşmadan O'nun huzuruna çıkarsa cennete girer. Kim de O'na herhangi bir şekilde şirk koşmuş olarak O'nun huzuruna çıkarsa cehenneme girer."
          </p>
        </div>

      </div>

    </section>

    <!-- Şirkin Türleri ve Belirli Şirk Amelleri -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Çeşitli Şirk Amellerinin Yasaklanması
      </h2>

      <div class="space-y-8">

        <!-- Zararın Önlenmesi veya Giderilmesi için Yüzük, İp vb. Takmak -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-4">
          <h3 class="text-xl sm:text-2xl font-normal text-white border-b border-[#332f2b] pb-3">
            Zararı veya Belayı Önlemek ya da Gidermek için Yüzük, İp veya Benzeri Şeyler Takmak Şirktir
          </h3>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            Peygamber ﷺ şöyle buyurmuştur: "Kim bir muska takarsa şirk koşmuş olur."
          </p>
        </div>

        <!-- Ağaç, Taş vb. Aracılığıyla Bereket Aramak -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-4">
          <h3 class="text-xl sm:text-2xl font-normal text-white border-b border-[#332f2b] pb-3">
            Ağaç, Taş veya Benzeri Şeylerden Bereket Umak
          </h3>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            Yüce Allah şöyle buyurmuştur:
          </p>
          <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg space-y-2">
            <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
              "Lât ve Uzzâ'yı gördünüz mü? Ve üçüncüleri olan diğer Menât'ı?"
            </p>
            <p class="text-sm sm:text-base text-[#d6b278]">
              (Necm Suresi, 53:19-20)
            </p>
          </div>
        </div>

        <!-- Allah'tan Başkası Adına Kurban Kesmek -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-6">
          <h3 class="text-xl sm:text-2xl font-normal text-white border-b border-[#332f2b] pb-3">
            Allah'tan Başkası Adına Kurban Kesmek
          </h3>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            Yüce Allah şöyle buyurmuştur:
          </p>
          <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg space-y-2">
            <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
              "De ki: Şüphesiz benim namazım, kurbanım, hayatım ve ölümüm âlemlerin Rabbi Allah içindir. O'nun hiçbir ortağı yoktur. Bana böyle emredildi ve ben Müslümanların ilkiyim."
            </p>
            <p class="text-sm sm:text-base text-[#d6b278]">
              (En'âm Suresi, 6:162-163)
            </p>
          </div>

          <p class="text-lg leading-relaxed sm:text-xl">
            Ahmed, Târık bin Şihâb رضي الله عنه'nin Allah Resûlü'nün ﷺ şöyle buyurduğunu rivayet eder:
          </p>
          <div class="bg-[#1c1a18] border border-[#332f2b] p-5 sm:p-6 rounded-lg space-y-3">
            <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
              "Bir adam bir sinek sebebiyle cennete, bir başka adam da bir sinek sebebiyle cehenneme girdi." Sahâbîler, "Ey Allah'ın Resûlü, bu nasıl oldu?" diye sordular. Resûlullah ﷺ şöyle buyurdu: "İki adam, önünden geçmek isteyen hiç kimsenin kendisine kurban sunmadan geçmesine izin verilmeyen bir puta sahip olan bir topluluğun yanından geçtiler. Topluluk adamlardan birine kurban sunmasını söyledi. Adam, 'Sunacak hiçbir şeyim yok' dedi. Onlar, 'Bir sinek bile olsa bir şey sun' dediler. Bunun üzerine adam puta bir sinek sundu. Onlar da yolunu açtılar ve adam cehenneme girdi. Diğer adama da, 'Bir şey kurban et' dediler. Adam, 'Allah'tan başka hiç kimse adına hiçbir şey kurban etmem' dedi. Bunun üzerine onun boynunu vurdular ve adam cennete girdi."
            </p>
            <p class="text-sm sm:text-base text-[#d6b278]">
              (Ahmed)
            </p>
          </div>
        </div>

        <!-- Diğer Şirk Amelleri -->
        <div class="grid grid-cols-1 gap-5">

          <div class="bg-[#24211e] border border-[#332f2b] p-6 rounded-lg">
            <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
              Allah'tan başkası adına adakta bulunmak şirktir.
            </p>
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-6 rounded-lg">
            <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
              Allah'tan başkasına sığınmak şirk kapsamındadır.
            </p>
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-6 rounded-lg">
            <p class="text-lg leading-relaxed sm:text-xl text-[#ECE8EF]">
              Allah'tan başkasından imdat dilemek (istiğâse) veya O'ndan başkasına dua etmek şirktir.
            </p>
          </div>

        </div>

        <!-- Kâhinler ve Benzerleri Hakkında -->
        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-4">
          <h3 class="text-xl sm:text-2xl font-normal text-white border-b border-[#332f2b] pb-3">
            Kâhinler ve Benzerleri Hakkında
          </h3>
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            Peygamber ﷺ şöyle buyurmuştur:
          </p>
          <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg space-y-2">
            <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
              "Kim bir kâhine gider ve onun söylediklerini doğrularsa Muhammed'e indirileni (Kur'an'ı) inkâr etmiş olur."
            </p>
            <p class="text-sm sm:text-base text-[#d6b278]">
              (Ebû Dâvûd)
            </p>
          </div>
        </div>

      </div>

    </section>

    <!-- Kapanış -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        En doğrusunu Allah bilir. Hamd, âlemlerin Rabbi Allah'a mahsustur. Allah'ın salât ve selâmı Peygamberimiz Muhammed'in, ailesinin ve bütün ashabının üzerine olsun.
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
