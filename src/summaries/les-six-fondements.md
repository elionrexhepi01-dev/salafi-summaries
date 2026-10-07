---
layout: base.njk
title: "Les Six Fondements"
author: "Shaykh ul-Islām Muḥammad ibn ‘Abdul-Wahhāb"
explanationBy: "Shaykh Muḥammad ibn Ṣāliḥ al-‘Uthaymīn"
lang: "fr"
dateAdded: 2026-09-04
description: "Six principes fondamentaux tirés du Coran et de la Sunnah pour une croyance saine, l’unité et la gouvernance."
---

<!-- Custom CSS for Scroll-Reveal & Page Animations -->

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
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

  <!-- Centered Header -->

  <header class="mb-16 space-y-4 text-center">
    <h1 class="text-4xl leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <div class="space-y-1">
      <p class="text-[#d6b278] text-lg sm:text-xl font-light">
        Par {{ author }} <span class="text-[#B3ADB9]">رَحِمَهُ ٱللَّٰهُ</span>
      </p>
      {% if explanationBy %}
      <p class="text-base text-[#B3ADB9] font-light">
        Commentaire de {{ explanationBy }} <span class="text-[#B3ADB9]">رَحِمَهُ ٱللَّٰهُ</span>
      </p>
      {% endif %}
    </div>
  </header>

  <div class="space-y-16 font-light leading-relaxed">
<!-- Opening Overview Card -->
<section class="reveal-on-scroll">
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
    <p class="text-xl sm:text-2xl text-[#ECE8EF] leading-relaxed">
      La croyance islamique repose sur des fondements clairs et sans ambiguïté qui préservent l’adoration, la communauté et l’intellect du croyant contre l’égarement.
    </p>
    <p class="text-base text-[#B3ADB9]">
      Ces six fondements ont été exposés directement à partir de la Révélation divine afin de préserver le monothéisme pur, d’assurer la stabilité sociale, de distinguer la véritable science religieuse de la prétention et de réfuter les insufflations sataniques.
    </p>
  </div>
</section>

<!-- PRINCIPLE I -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principe I</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      La sincérité pure dans la religion (<e>Tawḥīd</e>) face au polythéisme (<e>Shirk</e>)
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    La première obligation en islam consiste à consacrer la religion purement et sincèrement à Allah seul, sans Lui associer de partenaire. La majeure partie du Coran clarifie ce principe sous d’innombrables angles, en employant un langage si direct et accessible que même la personne la moins instruite peut le comprendre.
  </p>

  <!-- Primary Proof Card -->
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Adoration complète</span>
    <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
      « Dis : “Certes, ma prière, mon sacrifice, ma vie et ma mort sont tous pour Allah, Seigneur des mondes. Il n’a aucun associé. Et c’est cela qui m’a été commandé, et je suis le premier des musulmans.” »
    </p>
    <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah al-An‘ām [6:162-163]</span>
  </div>

  <!-- Textual Evidence Grid -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">

    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Unicité divine</span>
      <h3 class="text-xl font-medium text-white">Adoration exclusive</h3>
      <p class="text-base text-[#B3ADB9] italic">
        « Et votre Dieu est un Dieu unique ; il n’y a aucune divinité digne d’être adorée en dehors de Lui, le Tout Miséricordieux, le Très Miséricordieux. »
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Baqarah [2:163]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Mission universelle</span>
      <h3 class="text-xl font-medium text-white">Message de tous les Prophètes</h3>
      <p class="text-base text-[#B3ADB9] italic">
        « Et Nous n’avons envoyé avant toi aucun Messager sans lui révéler : “Il n’y a aucune divinité en dehors de Moi, alors adorez-Moi.” »
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Anbiyā’ [21:25]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Soumission totale</span>
      <h3 class="text-xl font-medium text-white">Soumission au Créateur</h3>
      <p class="text-base text-[#B3ADB9] italic">
        « Et votre Dieu est un Dieu unique, alors soumettez-vous à Lui Seul dans l’islam. »
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Ḥajj [22:34]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Repentir actif</span>
      <h3 class="text-xl font-medium text-white">Se tourner vers le Seigneur</h3>
      <p class="text-base text-[#B3ADB9] italic">
        « Et revenez repentants et obéissants avec une foi sincère vers votre Seigneur, et soumettez-vous à Lui... »
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah az-Zumar [39:54]</span>
    </div>

  </div>
</section>

<!-- PRINCIPLE II -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principe II</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      L’unité dans la religion et l’interdiction de la division sectaire
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Allah a ordonné la solidarité autour de la vérité et a explicitement interdit la division, le factionnalisme et les conflits internes au sein de la religion. Une véritable adhésion religieuse exige de préserver la fraternité et de se prémunir contre les divisions théologiques.
  </p>

  <!-- Primary Quranic Command Card -->
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">L’impératif de la fraternité</span>
    <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
      « Et cramponnez-vous tous ensemble au câble d’Allah et ne soyez pas divisés. Et rappelez-vous le bienfait d’Allah sur vous : vous étiez ennemis et Il a réconcilié vos cœurs par Sa grâce, et vous êtes devenus frères... »
    </p>
    <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah Āl ‘Imrān [3:102-103]</span>
  </div>

  <!-- Grid Warnings against Splitting -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">

    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Avertissement sévère</span>
      <h3 class="text-xl font-medium text-white">Le danger de la division</h3>
      <p class="text-base text-[#B3ADB9] italic">
        « Et ne soyez pas comme ceux qui se sont divisés et se sont mis en désaccord après que les preuves évidentes leur furent venues. Ceux-là auront un immense châtiment. »
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah Āl ‘Imrān [3:105]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Perte de force</span>
      <h3 class="text-xl font-medium text-white">Conflit interne</h3>
      <p class="text-base text-[#B3ADB9] italic">
        « Et ne vous disputez pas, sinon vous fléchirez et votre force disparaîtra. »
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Anfāl [8:46]</span>
    </div>

  </div>
  <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-2">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Désaveu des factions</span>
    <p class="text-base text-[#ECE8EF] italic">
      « Certes, ceux qui ont divisé leur religion et sont devenus des sectes, tu n’as rien à voir avec eux. »
    </p>
    <span class="text-xs font-mono text-[#B3ADB9] block">— Sūrah al-An‘ām [6:159]</span>
  </div>
</section>

<!-- PRINCIPLE III -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principe III</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Écouter et obéir à ceux qui détiennent l’autorité
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    L’ordre social et la sécurité religieuse ne peuvent exister sans une gouvernance légitime. L’islam commande d’obéir à l’autorité légitime dans toutes les affaires qui ne constituent pas un péché, protégeant ainsi la société du chaos (<e>Fitnah</e>) et de la rébellion.
  </p>

  <!-- Quranic Foundation Card -->
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Commandement divin</span>
    <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
      « Ô vous qui avez cru ! Obéissez à Allah et obéissez au Messager, et à ceux d’entre vous qui détiennent l’autorité. »
    </p>
    <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah an-Nisā’ [4:59]</span>
  </div>

  <!-- Prophetic Instructions List -->
  <div class="bg-[#24211e] p-6 sm:p-8 rounded-lg border border-[#24211e] space-y-6">

    <div class="flex items-start gap-4">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">01.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Responsabilité de la rébellion</h3>
        <p class="text-base text-[#B3ADB9]">
          Le Prophète ﷺ a averti : <e>« Celui qui retire sa main de l’obéissance n’aura aucun argument pour sa défense lorsqu’il se tiendra devant Allah le Jour du Jugement. »</e>
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">02.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Obéissance patiente quel que soit le statut</h3>
        <p class="text-base text-[#B3ADB9]">
          Le Prophète ﷺ a ordonné : <e>« Écoutez et obéissez, même si un esclave abyssin est placé à votre tête. »</e>
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">03.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">La limite de l’obéissance</h3>
        <p class="text-base text-[#B3ADB9]">
          L’obéissance est obligatoire, que cela plaise ou déplaise, <e>à moins qu’on n’ordonne de commettre un péché</e> — si l’on ordonne de commettre un péché, il n’y a ni écoute ni obéissance dans cet acte précis.
        </p>
      </div>
    </div>

  </div>
</section>

<!-- PRINCIPLE IV -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principe IV</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      La véritable connaissance, la jurisprudence et la reconnaissance des savants
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Un fondement essentiel consiste à clarifier la véritable définition de la connaissance religieuse (<e>‘Ilm</e>) et de la jurisprudence (<e>Fiqh</e>), à honorer les véritables savants qui la possèdent et à démasquer ceux qui prétendent à une autorité savante sans guidance divine.
  </p>

  <!-- Grid Callout for Knowledge Virtues -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">

    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Distinction coranique</span>
      <h3 class="text-xl font-medium text-white">La valeur incomparable des savants</h3>
      <p class="text-base text-[#B3ADB9] italic">
        « Dis : “Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ?” Seuls les gens doués d’intelligence prennent garde. »
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah az-Zumar [39:9]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Marque prophétique</span>
      <h3 class="text-xl font-medium text-white">La faveur divine par le Fiqh</h3>
      <p class="text-base text-[#B3ADB9]">
        Le Prophète ﷺ a dit : <e>« Celui à qui Allah veut du bien, Il lui accorde une compréhension profonde (Fiqh) de la religion. »</e>
      </p>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Héritage sacré</span>
      <h3 class="text-xl font-medium text-white">L’héritage prophétique</h3>
      <p class="text-base text-[#B3ADB9]">
        Les Prophètes ne lèguent ni or ni argent ; ils lèguent la connaissance. Celui qui l’acquiert s’est emparé d’une immense fortune.
      </p>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Élévation du rang</span>
      <h3 class="text-xl font-medium text-white">Élévation par Allah</h3>
      <p class="text-base text-[#B3ADB9] italic">
        « Allah élèvera en degrés ceux d’entre vous qui ont cru et ceux qui ont reçu la connaissance. »
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Mujādilah [58:11]</span>
    </div>

  </div>
</section>

<!-- PRINCIPLE V -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principe V</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Identifier les véritables alliés (<e>Awliyā’</e>) d’Allah
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Les véritables alliés et amis d’Allah (<e>Awliyā’</e>) se définissent par une foi authentique, la piété (<e>Taqwā</e>) et une adhésion fidèle au Prophète ﷺ — et non par l’autoglorification, les prétentions à des pouvoirs ésotériques ou des titres vides de sens.
  </p>

  <!-- Primary Definition Card -->
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">La définition de la Wilāyah</span>
    <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
      « Certes, les alliés d’Allah n’auront aucune crainte et ne seront point affligés — ceux qui ont cru et qui étaient pieux. »
    </p>
    <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah Yūnus [10:62-63]</span>
  </div>

  <!-- Criteria Grid Callouts -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">

    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Critère 01</span>
      <h3 class="text-xl font-medium text-white">Suivre le Prophète ﷺ</h3>
      <p class="text-base text-[#B3ADB9] italic">
        « Dis : “Si vous aimez vraiment Allah, alors suivez-moi ; Allah vous aimera...” »
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah Āl ‘Imrān [3:31]</span>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Critère 02</span>
      <h3 class="text-xl font-medium text-white">Absence d’autoglorification</h3>
      <p class="text-base text-[#B3ADB9] italic">
        « Ne vous attribuez donc pas vous-mêmes la pureté ; Il connaît mieux ceux qui Le craignent. »
      </p>
      <span class="text-xs font-mono text-[#d6b278] block">— Sūrah an-Najm [53:32]</span>
    </div>

  </div>
  <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-2">
    <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Protection contre la tromperie satanique</span>
    <p class="text-base text-[#ECE8EF]">
      Satan n’a aucune autorité sur les véritables croyants qui placent leur confiance en Allah ; son pouvoir est limité à ceux qui s’allient à lui et associent des partenaires à Allah. <span class="text-[#B3ADB9] italic">[Qur'an 16:98-100]</span>
    </p>
  </div>
</section>

<!-- PRINCIPLE VI -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principe VI</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Déconstruire l’argument fallacieux contre la méditation de la Révélation divine
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Un doute trompeur inventé par Satan suggère que le Coran et la Sunnah sont impossibles à comprendre pour les esprits ordinaires, poussant les gens à abandonner tout contact direct avec la Révélation. En vérité, le Coran a été révélé comme une guidance claire destinée à la méditation, complétée par la recherche d’explications auprès des savants lorsque cela est nécessaire.
  </p>

  <!-- Two-Step Proof Layout -->
  <div class="bg-[#24211e] p-6 sm:p-8 rounded-lg border border-[#24211e] space-y-6">

    <div class="flex items-start gap-4">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">01.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Le but de la Révélation est la clarté</h3>
        <p class="text-base text-[#B3ADB9]">
          Allah affirme explicitement : <e>« Et Nous avons fait descendre sur toi le Rappel afin que tu exposes clairement aux gens ce qui leur a été révélé et afin qu’ils réfléchissent. »</e> <span class="text-[#d6b278]">[Qur'an 16:44]</span>
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">02.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Consulter les savants sans abandonner le texte</h3>
        <p class="text-base text-[#B3ADB9]">
          Lorsque des éclaircissements sont nécessaires, la Révélation dirige directement les croyants vers la connaissance plutôt que vers l’abandon : <e>« Demandez aux gens de science si vous ne savez pas. »</e> <span class="text-[#d6b278]">[Qur'an 16:43]</span>
        </p>
      </div>
    </div>

  </div>
</section>

  </div>
</article>

<!-- Scroll Animation Script -->

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
