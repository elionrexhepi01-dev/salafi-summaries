---
layout: base.njk
title: "Üç Temel Esas"
author: "Şeyh Muhammed İbn Abdülvehhâb"
lang: "tr"
dateAdded: 2026-10-09
description: "Tevhid, üç temel soru ve İslam hakkında temel bir risale."
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

    <!-- Giriş -->
    <section class="space-y-8 reveal-on-scroll">

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Dört hususu öğrenmemiz farzdır.
        </p>
      </div>

      <div class="space-y-5">

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            <span class="text-[#d6b278]">Birincisi:</span> İlimdir. Allah'ı, O'nun Peygamberini ve İslam dinini delilleriyle bilmektir.
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            <span class="text-[#d6b278]">İkincisi:</span> Bu ilimle amel etmektir.
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            <span class="text-[#d6b278]">Üçüncüsü:</span> Bu ilme davet etmektir.
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            <span class="text-[#d6b278]">Dördüncüsü:</span> Bu yolda karşılaşılan eziyetlere sabretmektir.
          </p>
        </div>

      </div>

      <div class="border-t border-[#24211e] pt-8 space-y-5">
        <p class="text-lg leading-relaxed sm:text-xl">
          İmam Buhârî رحمه الله şöyle demiştir:
        </p>

        <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Bab: <span class="text-[#d6b278]">İlim</span>, söz ve amelden önce gelir."
          </p>
        </div>
      </div>

      <div class="space-y-5">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Bunun delili, Allah'ın şu buyruğudur:
        </p>

        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            "Bil ki Allah'tan başka hak ilah yoktur. Günahların için bağışlanma dile."
          </p>

          <p class="mt-4 text-sm sm:text-base text-[#d6b278]">
            [Muhammed Suresi: 19]
          </p>
        </div>

        <p class="text-lg leading-relaxed sm:text-xl">
          Böylece Allah, söz ve amelden önce ilmi zikretmiştir.
        </p>
      </div>

    </section>

    <!-- Birinci Temel Esas -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Birinci Temel Esas
      </h2>

      <div class="space-y-6">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Sana, "Rabbin kimdir?" diye sorulursa,
        </p>

        <p class="text-lg leading-relaxed sm:text-xl">
          Şöyle cevap ver: "Rabbim Allah'tır. O, beni ve bütün âlemleri nimetleriyle yetiştirip büyütendir."
        </p>

        <p class="text-lg leading-relaxed sm:text-xl">
          O, kendisine ibadet ettiğim Allah'tır. O'na denk olan hiçbir hak ilah yoktur.
        </p>

        <div class="border-t border-[#24211e] pt-6 space-y-6">

          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            Sana, "Rabbini nasıl tanıdın?" diye sorulursa,
          </p>

          <p class="text-lg leading-relaxed sm:text-xl">
            Şöyle cevap ver: "O'nun ayetleri ve yarattıkları aracılığıyla."
          </p>

        </div>

      </div>

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-5">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          "Ey insanlar! Sizi ve sizden öncekileri yaratan Rabbinize ibadet edin ki takvâ sahibi olasınız.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          O, yeryüzünü sizin için bir döşek,
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          gökyüzünü bir tavan yaptı. Gökten su indirdi ve onunla sizin için rızık olarak çeşitli meyveler çıkardı.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Öyleyse, bile bile Allah'a eşler koşmayın."
        </p>

        <p class="text-sm sm:text-base text-[#d6b278]">
          [Bakara Suresi: 21-22]
        </p>

      </div>

      <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-6 sm:p-7 rounded-r-lg">
        <p class="text-lg leading-relaxed sm:text-xl">
          İbn Kesîr رحمه الله şöyle demiştir: "Bu şeyleri yaratan, kendisine ibadet edilmeyi gerçekten hak edendir."
        </p>
      </div>

      <div class="space-y-6">

        <p class="text-lg leading-relaxed sm:text-xl">
          Allah'ın emrettiği ibadet türleri arasında İslam, İman ve İhsan bulunur. Bunlara şunlar dahildir:
        </p>

        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Dua</span><br>
            (Du'a)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Korku</span><br>
            (Havf)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Ümit</span><br>
            (Recâ)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Tevekkül</span><br>
            (Tevekkül)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Arzu ve istek</span><br>
            (Ragbet)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Çekinme ve korku</span><br>
            (Rahbet)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Hușû</span><br>
            (Hușû)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Haşyet</span><br>
            (Haşyet)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Allah'a yönelme</span><br>
            (İnâbe)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Yardım dileme</span><br>
            (İstiâne)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Sığınma</span><br>
            (İstiâze)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">İmdat dileme</span><br>
            (İstiğâse)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Kurban kesmek</span><br>
            (Zebh)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Adakta bulunmak</span><br>
            (Nezr)
          </div>
        </div>

        <p class="text-lg leading-relaxed sm:text-xl">
          Allah'ın emrettiği diğer bütün ibadet türleri de yalnızca Allah'a aittir.
        </p>

      </div>

    </section>

    <!-- İkinci Temel Esas -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        İkinci Temel Esas
      </h2>

      <p class="text-lg leading-relaxed sm:text-xl">
        Sünnet'teki delil, Ömer bin Hattâb رضي الله عنه tarafından rivayet edilen meşhur Cibrîl hadisidir. Ömer رضي الله عنه şöyle demiştir:
      </p>

      <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-6">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          "Bir gün Peygamber ﷺ ile birlikte oturuyorduk. Derken yanımıza elbiseleri bembeyaz, saçları simsiyah bir adam çıkageldi.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Üzerinde yolculuk yaptığına dair hiçbir iz yoktu ve aramızdan hiç kimse onu tanımıyordu. Sonra Peygamber'in ﷺ önüne oturdu; dizlerini onun ﷺ dizlerine dayadı ve ellerini uyluklarının üzerine koyarak şöyle dedi:
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          'Ey Muhammed! Bana İslam'ı anlat.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          O ﷺ şöyle buyurdu: 'İslam, Allah'tan başka hak ilah olmadığına ve Muhammed'in Allah'ın Resûlü olduğuna şehadet etmen, namazı dosdoğru kılman, zekâtı vermen, Ramazan orucunu tutman ve gücün yetiyorsa Allah'ın evini haccederek ziyaret etmendir.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Adam, 'Doğru söyledin' dedi.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Ona soru sorup ardından söylediklerini doğrulamasına şaşırdık.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Sonra adam, 'Bana İman'ı anlat' dedi.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          O ﷺ şöyle buyurdu: 'İman; Allah'a, meleklerine, kitaplarına, peygamberlerine, ahiret gününe ve kadere, hayrına da şerrine de inanmandır.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Adam, 'Doğru söyledin' dedi.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Sonra, 'Bana İhsan'ı anlat' dedi.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          O ﷺ şöyle buyurdu: 'İhsan, Allah'ı görüyormuşçasına O'na ibadet etmendir. Sen O'nu görmüyorsan da şüphesiz O seni görmektedir.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Adam, 'Bana kıyamet saatini anlat' dedi.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          O ﷺ şöyle buyurdu: 'Kendisine sorulan, bu konuda sorandan daha fazla bilgiye sahip değildir.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Adam, 'Öyleyse bana onun alametlerini anlat' dedi.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          O ﷺ şöyle buyurdu: 'Cariyenin kendi hanımını doğurması ve yalınayak, yoksul ve koyun çobanı kimselerin yüksek binalar inşa etmekte birbirleriyle yarışmalarıdır.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Sonra adam ayrıldı. Biz de bir süre oturmaya devam ettik.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Ardından Peygamber ﷺ bana, 'Ey Ömer! Soru soranın kim olduğunu biliyor musun?' diye sordu.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Ben, 'Allah ve Resûlü daha iyi bilir' dedim.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          O ﷺ şöyle buyurdu: 'O, size dininizi öğretmek için gelen Cibrîl'di.'"
        </p>

      </div>

    </section>

    <!-- Üçüncü Temel Esas -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Üçüncü Temel Esas
      </h2>

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Peygamberin Muhammed ﷺ hakkında bilgi sahibi olmaktır.
        </p>
      </div>

      <p class="text-lg leading-relaxed sm:text-xl">
        İşte onun dini buydu: Ümmetini yönlendirdiği hiçbir hayır yoktu ki onları ona yönlendirmemiş olsun; sakındırdığı hiçbir şer yoktu ki onları ona karşı uyarmamış olsun.
      </p>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">

        <div class="bg-[#24211e] border border-[#332f2b] p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            Ümmetini yönlendirdiği hayır şuydu: <span class="text-white">Tevhid</span> ve Allah'ın sevdiği ve razı olduğu her şey.
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            Ümmetini sakındırdığı şer ise şuydu: <span class="text-white">Şirk</span> ve Allah'ın sevmediği ve reddettiği her şey.
          </p>
        </div>

      </div>

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-5">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          "Andolsun ki biz her ümmete,
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          'Allah'a ibadet edin ve Tağut'tan kaçının' diye bir peygamber gönderdik."
        </p>

        <p class="text-sm sm:text-base text-[#d6b278]">
          [Nahl Suresi: 36]
        </p>

      </div>

      <p class="text-lg leading-relaxed sm:text-xl">
        Allah, bütün kullarına Tağut'u inkâr etmeyi ve Allah'a iman etmeyi farz kılmıştır.
      </p>

      <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-6 sm:p-7 rounded-r-lg">
        <p class="text-lg leading-relaxed sm:text-xl">
          İbn Kayyim رحمه الله şöyle demiştir: "Tağut, kulun kendisi sebebiyle haddini aştığı her şeydir. Bunlar, kendilerine ibadet edilen, tabi olunan veya itaat edilen varlıklar olabilir."
        </p>
      </div>

    </section>

    <!-- Kapanış -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        En doğrusunu Allah bilir. Allah, Muhammed'e, ailesine ve ashabına salât ve selâm eylesin.
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
