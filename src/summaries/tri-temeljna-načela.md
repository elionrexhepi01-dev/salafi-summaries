---
layout: base.njk
title: "Tri temeljna načela"
author: "Šejh Muhammad Ibn Abdul-Wahhab"
lang: "bs"
dateAdded: 2026-10-09
description: "Temeljna poslanica o tevhidu, trima temeljnim pitanjima i islamu."
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

    <!-- Uvod -->
    <section class="space-y-8 reveal-on-scroll">

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Obavezno nam je naučiti četiri stvari.
        </p>
      </div>

      <div class="space-y-5">

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            <span class="text-[#d6b278]">Prvo:</span> Znanje, a ono podrazumijeva spoznaju Allaha, spoznaju Njegovog Poslanika i spoznaju vjere islama na osnovu dokaza.
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            <span class="text-[#d6b278]">Drugo:</span> Postupanje u skladu s tim znanjem.
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            <span class="text-[#d6b278]">Treće:</span> Pozivanje drugih u to.
          </p>
        </div>

        <div class="bg-[#24211e] border border-[#332f2b] p-5 sm:p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            <span class="text-[#d6b278]">Četvrto:</span> Strpljenje na uznemiravanju koje čovjeka zadesi zbog toga.
          </p>
        </div>

      </div>

      <div class="border-t border-[#24211e] pt-8 space-y-5">
        <p class="text-lg leading-relaxed sm:text-xl">
          El-Buhari, Allah mu se smilovao, rekao je:
        </p>

        <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-5 sm:p-6 rounded-r-lg">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            „Poglavlje: <span class="text-[#d6b278]">Znanje</span> prethodi riječima i djelima.“
          </p>
        </div>
      </div>

      <div class="space-y-5">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Dokaz za to jesu Allahove riječi:
        </p>

        <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg">
          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            „Znaj da nema istinskog boga osim Allaha i traži oprost za svoje grijehe.“
          </p>

          <p class="mt-4 text-sm sm:text-base text-[#d6b278]">
            [Sura Muhammad, 19]
          </p>
        </div>

        <p class="text-lg leading-relaxed sm:text-xl">
          Dakle, Allah je spomenuo znanje prije riječi i djela.
        </p>
      </div>

    </section>

    <!-- Prvo temeljno načelo -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Prvo temeljno načelo
      </h2>

      <div class="space-y-6">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Ako te neko upita: „Ko je tvoj Gospodar?“
        </p>

        <p class="text-lg leading-relaxed sm:text-xl">
          Reci: „Moj Gospodar je Allah, Onaj koji je odgojio i podario blagodati meni i svim stvorenjima.“
        </p>

        <p class="text-lg leading-relaxed sm:text-xl">
          On je Taj koga obožavam i niko drugi, ko se mimo Njega obožava, nije ravan Njemu.
        </p>

        <div class="border-t border-[#24211e] pt-6 space-y-6">

          <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
            Ako te neko upita: „Kako si spoznao svoga Gospodara?“
          </p>

          <p class="text-lg leading-relaxed sm:text-xl">
            Reci: „Putem Njegovih znakova i Njegovih stvorenja.“
          </p>

        </div>

      </div>

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-5">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          „O ljudi, obožavajte Gospodara svoga, koji je stvorio vas i one prije vas, da biste bili bogobojazni.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          On vam je Zemlju učinio posteljom,
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          a nebo zdanjem, i On s neba spušta vodu i s njom izvodi plodove kao opskrbu za vas.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Zato svjesno ne pripisujte Allahu sudrugove.“
        </p>

        <p class="text-sm sm:text-base text-[#d6b278]">
          [Sura El-Bekara, 21–22]
        </p>

      </div>

      <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-6 sm:p-7 rounded-r-lg">
        <p class="text-lg leading-relaxed sm:text-xl">
          Ibn Kesir, Allah mu se smilovao, rekao je: „Stvoritelj ovih stvari jedini je istinski dostojan da bude obožavan.“
        </p>
      </div>

      <div class="space-y-6">

        <p class="text-lg leading-relaxed sm:text-xl">
          Vrste ibadeta koje je Allah naredio, poput islama, imana i ihsana, obuhvataju:
        </p>

        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Dova</span><br>
            (Du'a)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Strah</span><br>
            (Havf)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Nada</span><br>
            (Redža)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Oslanjanje</span><br>
            (Tevekkul)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Žudnja</span><br>
            (Reğbet)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Strahopoštovanje</span><br>
            (Rehbet)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Skrušenost</span><br>
            (Hušu')
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Bogobojazni strah</span><br>
            (Hašjeh)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Pokajničko vraćanje</span><br>
            (Inabe)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Traženje pomoći</span><br>
            (Isti'ane)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Traženje utočišta</span><br>
            (Isti'aze)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Traženje spasa</span><br>
            (Istigase)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Prinošenje žrtve</span><br>
            (Zebh)
          </div>
          <div class="bg-[#24211e] border border-[#332f2b] p-4 rounded-lg text-center text-base text-[#ECE8EF]">
            <span class="text-[#d6b278]">Zavjetovanje</span><br>
            (Nezr)
          </div>
        </div>

        <p class="text-lg leading-relaxed sm:text-xl">
          kao i sve druge vrste ibadeta koje je Allah naredio. Sve one pripadaju isključivo Allahu.
        </p>

      </div>

    </section>

    <!-- Drugo temeljno načelo -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Drugo temeljno načelo
      </h2>

      <p class="text-lg leading-relaxed sm:text-xl">
        Dokaz iz sunneta jeste poznati hadis o Džibrilu, koji se prenosi od Omera ibn el-Hattaba, radijallahu anhu, koji je rekao:
      </p>

      <div class="bg-[#24211e] border border-[#332f2b] p-6 sm:p-8 rounded-lg space-y-6">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          „Jednog dana sjedili smo s Allahovim Poslanikom, sallallahu alejhi ve sellem, kada nam se pojavio čovjek izrazito bijele odjeće i izrazito crne kose.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Na njemu se nisu vidjeli tragovi putovanja, a niko od nas ga nije poznavao. Zatim je sjeo ispred Poslanika, sallallahu alejhi ve sellem, tako da je svoja koljena prislonio uz njegova koljena i stavio dlanove na svoja stegna, pa rekao:
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          'O Muhammede, obavijesti me o islamu.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          On je odgovorio: 'Islam je da posvjedočiš da nema istinskog boga osim Allaha i da je Muhammed Allahov poslanik, da obavljaš namaz, daješ zekat, postiš ramazan i obaviš hadž u Allahovoj Kući, ako si u mogućnosti.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Čovjek reče: 'Istinu si rekao.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Začudili smo se što ga pita, a zatim potvrđuje da je istinu rekao.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Zatim reče: 'Obavijesti me o imanu.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          On odgovori: 'Iman je da vjeruješ u Allaha, Njegove meleke, Njegove knjige, Njegove poslanike, Sudnji dan i da vjeruješ u kader, bilo dobro ili zlo koje on donosi.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Čovjek reče: 'Istinu si rekao.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Zatim reče: 'Obavijesti me o ihsanu.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          On odgovori: 'Ihsan je da obožavaš Allaha kao da Ga vidiš, jer ako ti Njega ne vidiš, On tebe zaista vidi.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Zatim reče: 'Obavijesti me o Sudnjem času.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          On odgovori: 'Upitani o tome ne zna više od onoga koji pita.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Čovjek reče: 'Onda me obavijesti o njegovim predznacima.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          On odgovori: 'Kada robinja rodi svoju gospodaricu i kada vidiš bosonoge, oskudno odjevene, siromašne čobane kako se međusobno nadmeću u gradnji visokih građevina.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Zatim je čovjek otišao, a mi smo ostali neko vrijeme.
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Potom mi je Poslanik rekao: 'O Omere, znaš li ko je bio onaj koji je postavljao pitanja?'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Odgovorio sam: 'Allah i Njegov Poslanik najbolje znaju.'
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          On reče: 'To je bio Džibril. Došao vam je da vas pouči vašoj vjeri.'“
        </p>

      </div>

    </section>

    <!-- Treće temeljno načelo -->
    <section class="space-y-8 reveal-on-scroll">

      <h2 class="text-3xl font-normal leading-tight text-white sm:text-4xl border-b border-[#24211e] pb-5 text-center">
        Treće temeljno načelo
      </h2>

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg">
        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          Spoznaja tvoga Poslanika, Muhammeda, sallallahu alejhi ve sellem.
        </p>
      </div>

      <p class="text-lg leading-relaxed sm:text-xl">
        Ovo je bila njegova vjera: nije postojalo nikakvo dobro na koje nije ukazao svome ummetu, niti ikakvo zlo na koje ga nije upozorio.
      </p>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">

        <div class="bg-[#24211e] border border-[#332f2b] p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            Dobro na koje je ukazao svome ummetu jeste: <span class="text-white">tevhid</span> i sve ono što Allah voli i čime je zadovoljan.
          </p>
        </div>
        <div class="bg-[#24211e] border border-[#332f2b] p-6 rounded-lg">
          <p class="text-lg leading-relaxed sm:text-xl">
            Zlo na koje je upozorio svoj ummet jeste: <span class="text-white">širk</span> i sve ono što Allah mrzi i ne prihvata.
          </p>
        </div>

      </div>

      <div class="bg-[#24211e] border-l-4 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-5">

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          „Mi smo svakom narodu poslali poslanika:
        </p>

        <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF]">
          'Obožavajte Allaha i klonite se taguta!'“
        </p>

        <p class="text-sm sm:text-base text-[#d6b278]">
          [Sura En-Nahl, 36]
        </p>

      </div>

      <p class="text-lg leading-relaxed sm:text-xl">
        Allah je svim Svojim robovima naredio da zaniječu taguta i vjeruju u Allaha.
      </p>

      <div class="bg-[#1c1a18] border-l-2 border-[#d6b278] p-6 sm:p-7 rounded-r-lg">
        <p class="text-lg leading-relaxed sm:text-xl">
          Ibnul-Kajjim, Allah mu se smilovao, rekao je: „Značenje taguta obuhvata sve ono zbog čega rob prelazi granice, poput onoga što se obožava, slijedi ili mu se pokorava.“
        </p>
      </div>
    </section>

    <!-- Završetak -->
    <section class="space-y-6 reveal-on-scroll border-t border-[#24211e] pt-10">

      <p class="text-lg sm:text-xl leading-relaxed text-[#ECE8EF] text-center">
        Allah najbolje zna. Neka su Allahov mir i blagoslov na Muhammeda, njegovu porodicu i njegove ashabe.
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
