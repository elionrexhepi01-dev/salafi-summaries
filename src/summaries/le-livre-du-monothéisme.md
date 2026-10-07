---
layout: base.njk
title: "Le Livre du Monothéisme"
author: "Shaykh al-Islām Muḥammad ibn ‘Abdul-Wahhāb"
lang: "fr"
dateAdded: 2026-09-05
description: "L’essence, les catégories, les mérites et les opposés du Monothéisme islamique."
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
    <p class="text-[#d6b278] text-lg sm:text-xl font-light">
      Par {{ author }} <span class="text-[#B3ADB9]">رَحِمَهُ ٱللَّٰهُ</span>
    </p>
  </header>

  <div class="space-y-16 font-light leading-relaxed">

<!-- Intro Quote Card -->
<section class="reveal-on-scroll">
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
    <p class="text-lg sm:text-xl text-[#ECE8EF] italic leading-relaxed">
      « Sache que, dans son sens absolu, le Tawḥīd désigne la connaissance et la reconnaissance que le Seigneur possède à Lui seul les attributs les plus parfaits, la reconnaissance qu’Il est le seul à posséder la majesté, et le fait de Lui consacrer à Lui seul l’adoration. »
    </p>
    <p class="text-sm text-[#B3ADB9] uppercase tracking-wider font-mono">
      — La définition fondamentale du Monothéisme
    </p>
  </div>
</section>

<!-- PRINCIPLE I -->
<section class="space-y-6 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principe I</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Le droit suprême et l’appel universel
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Le Monothéisme est le plus grand de tous les commandements religieux, le plus fondamental de tous les principes et le fondement sur lequel reposent toutes les œuvres. Chaque Messager divin a été envoyé afin de l’établir, tout en interdisant son opposé — associer des partenaires à Allah (<e>Shirk</e>) et Lui donner des rivaux.
  </p>

  <p class="text-lg sm:text-xl text-[#B3ADB9]">
    Le Noble Qur’an ordonne, impose et clarifie à maintes reprises que le Tawḥīd est l’unique voie vers le salut, la réussite et le bonheur. Toutes les preuves — qu’elles soient fondées sur une raison saine, la révélation sacrée, la sagesse divine ou la nature humaine — s’accordent sur le fait que le Tawḥīd constitue le droit le plus important d’Allah sur Sa création.
  </p>
</section>

<!-- PRINCIPLE II -->
<section class="space-y-8 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principe II</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Les trois dimensions du Monothéisme
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#B3ADB9]">
    La croyance islamique authentique organise le Monothéisme en trois branches distinctes et interdépendantes qui, ensemble, forment une compréhension complète du Divin :
  </p>
  <!-- Grid for Categories -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">01. Noms et Attributs</span>
      <h3 class="text-xl font-medium text-white">Tawḥīd al-Asmā’ wa al-Ṣifāt</h3>
      <p class="text-base text-[#B3ADB9]">
        La conviction ferme qu’Allah seul possède la perfection absolue sous tous les aspects, définie par des caractéristiques majestueuses et magnifiques que nul dans la création ne partage avec Lui.
      </p>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">02. Seigneurie</span>
      <h3 class="text-xl font-medium text-white">Tawḥīd al-Rubūbīyah</h3>
      <p class="text-base text-[#B3ADB9]">
        Affirmer qu’Allah est l’unique Seigneur de la création, de la subsistance et de la gouvernance, Lui qui prend soin de toute existence par Son immense grâce et Sa souveraineté.
      </p>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3 sm:col-span-2 lg:col-span-1">
      <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">03. Adoration</span>
      <h3 class="text-xl font-medium text-white">Tawḥīd al-Ulūhīyah</h3>
      <p class="text-base text-[#B3ADB9]">
        Reconnaître Allah comme l’unique détenteur de la divinité (<e>Ulūhīyah</e>) et Lui consacrer exclusivement tous les actes de dévotion. Cette branche est directement exigée et impliquée par les deux premières.
      </p>
    </div>
  </div>
  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 rounded-r-lg space-y-2">
    <h4 class="text-lg font-medium text-white">La relation entre la Seigneurie et l’adoration</h4>
    <p class="text-base sm:text-lg text-[#B3ADB9]">
      Parce que <e>al-Ulūhīyah</e> reflète les attributs de la perfection absolue et découle directement de <e>al-Rubūbīyah</e>, seul le Créateur qui pourvoit aux besoins et accorde toutes les bénédictions mérite de recevoir l’adoration de la création.
    </p>
  </div>
</section>

<!-- PRINCIPLE III -->
<section class="space-y-8 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principe III</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Les mérites et le poids du Monothéisme
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#B3ADB9]">
    Rien ne produit un bien plus grand ni ne possède une plus grande variété de mérites que le Tawḥīd. Il constitue le meilleur fruit dans cette vie et dans l’Au-delà.
  </p>

  <!-- Custom Numbered List -->
  <div class="bg-[#24211e] p-6 sm:p-8 rounded-lg border border-[#24211e] space-y-6">

    <div class="flex items-start gap-4">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">01.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Dissipation des peines et du châtiment</h3>
        <p class="text-base sm:text-lg text-[#B3ADB9]">
          Il constitue le moyen le plus important de dissiper les peines terrestres et éternelles, et de repousser le châtiment divin dans les deux mondes.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">02.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Guidance absolue et sécurité</h3>
        <p class="text-base sm:text-lg text-[#B3ADB9]">
          Il accorde à celui qui le pratique une guidance morale complète, un perfectionnement du caractère et une sécurité ultime dans les deux mondes.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">03.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Obtention de l’agrément divin</h3>
        <p class="text-base sm:text-lg text-[#B3ADB9]">
          Il est la clé exclusive qui ouvre l’accès à l’agrément d’Allah et aux récompenses éternelles.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">04.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Facilitation des bonnes œuvres</h3>
        <p class="text-base sm:text-lg text-[#B3ADB9]">
          Il facilite l’accomplissement des œuvres vertueuses, fortifie contre le mal et délivre le serviteur des épreuves difficiles.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
      <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">05.</span>
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-white sm:text-xl">Un poids incomparable sur la Balance</h3>
        <p class="text-base sm:text-lg text-[#B3ADB9]">
          La parole de sincérité — <e>Kalimat al-Ikhlāṣ</e> (« Lā ilāha illā Allāh ») — pèse plus lourd que les cieux, la terre et tous leurs habitants réunis lorsqu’elle est placée sur la Balance.
        </p>
      </div>
    </div>

  </div>
</section>

<!-- PRINCIPLE IV -->
<section class="space-y-8 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principe IV</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      La catégorisation du Shirk et des moyens interdits
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#ECE8EF]">
    Toute atteinte au <e>Tawḥīd al-Ulūhīyah</e> annule le Monothéisme d’une personne. L’association de partenaires à Allah se divise en deux catégories distinctes :
  </p>

  <!-- Grid comparing Major and Minor Shirk -->
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <div class="flex items-center justify-between border-b border-[#332f2b] pb-2">
        <span class="text-sm font-mono text-[#d6b278] uppercase">Shirk majeur</span>
        <span class="text-xs font-mono text-[#B3ADB9] bg-[#24211e] px-2 py-0.5 rounded">Annule la foi</span>
      </div>
      <p class="text-base text-[#B3ADB9]">
        Attribuer un rival à Allah en invoquant la création, en la craignant, en plaçant ses espoirs en elle, en l’aimant ou en lui consacrant des actes d’adoration comme on devrait les consacrer à Allah. Cette forme détruit complètement le Tawḥīd, exclut celui qui la pratique du Paradis et conduit à la condamnation éternelle.
      </p>
    </div>
    <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
      <div class="flex items-center justify-between border-b border-[#332f2b] pb-2">
        <span class="text-sm font-mono text-[#d6b278] uppercase">Shirk mineur</span>
        <span class="text-xs font-mono text-[#B3ADB9] bg-[#24211e] px-2 py-0.5 rounded">Voie interdite</span>
      </div>
      <p class="text-base text-[#B3ADB9]">
        Des paroles ou des actes qui conduisent au Shirk majeur ou qui exaltent la création sans atteindre le degré de l’adoration effective. Parmi les exemples figurent le fait de jurer par autre qu’Allah ou d’accomplir des œuvres par ostentation subtile (<e>Riyā’</e>).
      </p>
    </div>
  </div>

  <!-- Specific Prohibited Practices Callout -->
  <div class="bg-[#24211e] p-6 sm:p-8 rounded-lg border border-[#332f2b] space-y-4">
    <h3 class="text-xl font-medium text-white">Pratiques interdites qui compromettent le Monothéisme</h3>
    <p class="text-base text-[#B3ADB9]">
      Les savants sont unanimes à reconnaître que la Loi islamique n’a attribué aucune bénédiction spirituelle intrinsèque (<e>Tabarruk</e>) aux arbres, aux pierres, aux lieux physiques ou aux tombes :
    </p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-[#ECE8EF] pt-2">
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Rechercher les bénédictions auprès de lieux sacrés ou de tombes
      </li>
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Porter des bracelets, des cordons ou des amulettes pour se protéger
      </li>
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Sacrifier des animaux pour autre qu’Allah
      </li>
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Faire des vœux solennels envers la création
      </li>
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Chercher refuge auprès de créatures
      </li>
      <li class="flex items-center gap-2">
        <span class="text-[#d6b278]">•</span> Exagérer dans l’honneur accordé, même dans des lieux vertueux
      </li>
    </ul>
  </div>
</section>

<!-- PRINCIPLE V -->
<section class="space-y-8 reveal-on-scroll">
  <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principe V</span>
    <h2 class="text-3xl font-medium text-white sm:text-4xl">
      Déconstruction de la fausse intercession et de l’exagération envers les tombes
    </h2>
  </div>

  <p class="text-lg sm:text-xl text-[#B3ADB9]">
    Tout au long de l’histoire, ceux qui ont associé des partenaires à Allah ont défendu leurs actes en prétendant que les anges, les prophètes et les âmes pieuses (<e>Awliyā’</e>) n’agissaient que comme des intermédiaires influents.
  </p>

  <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 rounded-r-lg space-y-3">
    <h3 class="text-lg font-medium text-white">Le sophisme des analogies humaines</h3>
    <p class="text-base sm:text-lg text-[#B3ADB9]">
      Les polythéistes ont comparé le Roi Souverain de l’univers aux monarques terrestres nécessiteux qui dépendent de ministres et de conseillers pour administrer leurs royaumes. C’est le plus grand des mensonges. Allah n’a besoin d’aucun intermédiaire ; toute intercession Lui appartient exclusivement, et elle nécessite Sa permission explicite ainsi que Son agrément envers le Monothéisme de celui qui implore.
    </p>
  </div>

  <!-- Scriptural Evidence -->
  <div class="space-y-4">
    <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278] block">Réfutation coranique de la fausse intercession</span>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div class="bg-[#1c1a18] p-5 rounded border border-[#332f2b] space-y-2">
        <p class="text-base text-[#ECE8EF] italic">
          « Nous ne les adorons que pour qu’ils nous rapprochent d’Allah. »
        </p>
        <span class="text-xs font-mono text-[#d6b278] block">[Sūrah az-Zumar 39:3]</span>
      </div>
      <div class="bg-[#1c1a18] p-5 rounded border border-[#332f2b] space-y-2">
        <p class="text-base text-[#ECE8EF] italic">
          « Ils disent : “Ce sont nos intercesseurs auprès d’Allah.” »
        </p>
        <span class="text-xs font-mono text-[#d6b278] block">[Sūrah Yūnus 10:18]</span>
      </div>
    </div>

  </div>

  <!-- Distinction between grave practices -->
  <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-4">
    <h3 class="text-xl font-medium text-white">Distinguer les voies menant au Shirk du Shirk majeur auprès des tombes</h3>

    <div class="space-y-4 text-base text-[#B3ADB9]">
      <div class="border-b border-[#332f2b] pb-3">
        <strong class="block mb-1 text-white">Les voies menant au Shirk (innovations interdites) :</strong>
        Toucher les tombes pour rechercher des bénédictions, construire des structures ou des sanctuaires au-dessus d’elles, les illuminer ou accomplir régulièrement la <e>Ṣalāh</e> auprès des tombes sans adresser directement d’invocation au défunt.
      </div>
      <div>
        <strong class="block mb-1 text-white">Shirk majeur (polythéisme direct) :</strong>
        Invoquer directement les occupants de la tombe, rechercher leur assistance pour les besoins de ce bas-monde ou de l’Au-delà, ou compter sur eux comme des intermédiaires indépendants. Invoquer les morts pour obtenir de l’aide équivaut à l’ancienne adoration des idoles.
      </div>
    </div>

  </div>
</section>

  </div>
</article>

<!-- Scroll Animation Script & Styles -->

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

```

```
