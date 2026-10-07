---
layout: base.njk
title: "The Three Fundamental Principles"
author: "Shaykh al-islam Muhammad Ibn Abdul Wahhab"
lang: "en"
dateAdded: 2026-10-07
description: "An essential Islamic treatise outlining the foundational principles of religion."
---

<!-- Custom CSS for Scroll-Reveal & Animations -->
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
  <header class="mb-16 text-center">
    <h1 class="mb-4 text-4xl font-normal leading-tight text-white sm:text-5xl">
      {{ title }}
    </h1>
    <p class="text-[#d6b278] font-light text-lg sm:text-xl">
      by {{ author }}
    </p>
  </header>

  <div class="space-y-12 text-[#B3ADB9] font-light leading-relaxed">

    <!-- Introduction / Four Matters -->
    <section class="space-y-6 reveal-on-scroll">
      <p class="text-lg sm:text-xl text-[#ECE8EF]">
        It is obligatory upon us to learn four matters.
      </p>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="bg-[#24211e] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-[#d6b278] text-2xl font-bold block">1.</span>
          <p class="text-lg sm:text-xl text-[#ECE8EF]">
            First: Knowledge, which means: awareness of Allaah, awareness of His Prophet, and awareness of the Religion of Islaam, based on evidences.
          </p>
        </div>
        <div class="bg-[#24211e] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-[#d6b278] text-2xl font-bold block">2.</span>
          <p class="text-lg sm:text-xl text-[#ECE8EF]">
            Second: Acting on this.
          </p>
        </div>
        <div class="bg-[#24211e] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-[#d6b278] text-2xl font-bold block">3.</span>
          <p class="text-lg sm:text-xl text-[#ECE8EF]">
            Third: Calling to it.
          </p>
        </div>
        <div class="bg-[#24211e] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-[#d6b278] text-2xl font-bold block">4.</span>
          <p class="text-lg sm:text-xl text-[#ECE8EF]">
            Fourth: Patience with the harm that befalls due to it.
          </p>
        </div>
      </div>

      <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 rounded-r-lg space-y-4">
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          Al-Bukhaaree, may Allaah have mercy on him, said: “Chapter: Knowledge comes before speech and action.”
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF]">
          The proof for this is Allaah’s saying:
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic pl-4 border-l border-[#332f2b]">
          “So know that there is no deity worthy of worship except Allaah, and seek forgiveness for your sins.” <span class="text-[#B3ADB9] not-italic text-base font-normal block mt-1">[Surah Muhammad: 19]</span>
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF]">
          So He began by mentioning knowledge before speech and action.
        </p>
      </div>
    </section>

    <!-- First Fundamental Principle -->
    <section class="space-y-6 reveal-on-scroll pt-6 border-t border-[#24211e]">
      <div class="text-center space-y-2 pb-4 border-b border-[#24211e]">
        <span class="text-sm uppercase tracking-widest text-[#d6b278] font-mono">Principle I</span>
        <h2 class="text-3xl font-normal text-white sm:text-4xl">
          The First Fundamental Principle
        </h2>
      </div>

      <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-4">
        <p class="text-lg sm:text-xl text-[#ECE8EF]">
          So if it is said: Who is your Lord?
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF]">
          Then say: My Lord is Allaah, the One who nurtured me and nurtured all of creation through His favors.
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF]">
          And He is the One whom I worship, there being to me no (false) deity worshipped that is equal to Him.
        </p>
      </div>

      <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-4">
        <p class="text-lg sm:text-xl text-[#ECE8EF]">
          So if it is said to you: How did you come to know of your Lord?
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF]">
          Then say: By way of His signs and His creations.
        </p>
      </div>

      <!-- Proof Card 1 -->
      <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 rounded-r-lg space-y-3">
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          “O mankind! Worship your Lord who created you and those before you, so that you may be dutiful to Him.
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          He is the One who made the earth a resting place for you,
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          and the sky as a canopy, and sent down water from the sky and brought forth therewith fruits as a provision for you.
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          So do no set up rivals with Allaah in worship knowingly.” <span class="text-[#B3ADB9] not-italic text-base font-normal block mt-1">[Surah Al-Baqarah: 21-22]</span>
        </p>
      </div>

      <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 rounded-r-lg">
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          Ibn Katheer, may Allaah have mercy on him, said: “The creator of these things is the One who truly deserves to be worshipped.”
        </p>
      </div>

      <p class="text-lg sm:text-xl text-[#ECE8EF] leading-relaxed">
        The types of worship that Allaah commanded, such as Islaam, Eemaan and Ihsaan, which includes: Supplication (Du’aa), Fear (Khawf), Hope (Rajaa), Reliance (Tawakkul), Longing (Raghbah) and Dreading (Rahbah), Submissiveness (Khushoo’), Awe (Khashyah), Repentance (Inaabah), Seeking Assistance (Isti’aanah), Seeking Refuge (Isti’aadhah), Asking for Help (Istighaathah), Offering Sacrifices (Dhabah), Making Oaths (Nadhar) and all of the other types of worship that Allaah commanded – all of these belong to Allaah, alone.
      </p>
    </section>

    <!-- Second Fundamental Principle -->
    <section class="space-y-6 reveal-on-scroll pt-6 border-t border-[#24211e]">
      <div class="text-center space-y-2 pb-4 border-b border-[#24211e]">
        <span class="text-sm uppercase tracking-widest text-[#d6b278] font-mono">Principle II</span>
        <h2 class="text-3xl font-normal text-white sm:text-4xl">
          The Second Fundamental Principle
        </h2>
      </div>

      <p class="text-lg sm:text-xl text-[#ECE8EF]">
        The proof from the Sunnah is the famous hadeeth of Jibreel, which is reported from ‘Umar bin Al-Khattaab who said:
      </p>

      <!-- Hadeeth Card -->
      <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 rounded-r-lg space-y-4">
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          “One day we were sitting with the Prophet when there appeared to us a man with extremely white garments and extremely black hair.
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          No trace of journeying could be seen on him nor did any amongst us recognize him. Then he sat in front of the Prophet, lining up his knees with his  knees and placing his palms upon his thighs, and said:
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          ‘O Muhammad, inform me about Islaam.’
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          So he said: ‘It is that you testify that there is no deity that has the right to be worshipped except Allaah and that Muhammad is the Messenger of Allaah. And that you establish the prayer, give the Zakaat, fast during Ramadaan and perform the Hajj (pilgrimage) to (Allaah’s) House, if you are able to do it.’
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          He said: ‘You have spoken truthfully.’
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          So we were amazed that he had asked him and then told him that he was truthful.
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          Then he said: ‘Now inform me about Eemaan.’
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          So he said: ‘It is that you believe in Allaah, His angels, His (revealed) books, His messengers, the Last Day, and that you believe in Al-Qadar, the good of it and the bad of it.’ He said: ‘You have spoken truthfully.
        </p>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          Now inform me about Ihsaan. He  said: ‘It is that you worship Allaah as if you see Him, but even though you don’t see Him, He indeed sees you.’ He then said: ‘Now inform me about the (Final) Hour.’ He said: ‘The one who is being asked does not have any more knowledge of it than the one who is asking.’ He said: ‘So then inform me about its signs.’ He said: ‘It will be when the mother gives birth to her (female) master, when the barefooted, barren and lowly shepherds will compete with one another in constructing tall buildings.’ Then he left and we remained (seated) there for a while. Then he said: ‘O ‘Umar, do you know who the questioner was?’ I said: ‘Allaah and His Messenger know best.’ He said: ‘That was Jibreel who came to you to teach you your Religion.’”
        </p>
      </div>
    </section>

    <!-- Third Fundamental Principle -->
    <section class="space-y-6 reveal-on-scroll pt-6 border-t border-[#24211e]">
      <div class="text-center space-y-2 pb-4 border-b border-[#24211e]">
        <span class="text-sm uppercase tracking-widest text-[#d6b278] font-mono">Principle III</span>
        <h2 class="text-3xl font-normal text-white sm:text-4xl">
          The Third Fundamental Principle
        </h2>
      </div>

      <p class="text-lg sm:text-xl text-[#ECE8EF]">
        Knowledge of your Prophet, Muhammad ﷺ.
      </p>

      <p class="text-lg sm:text-xl text-[#ECE8EF] leading-relaxed">
        This was his Religion – there was no good except that he directed his ummah towards it, and there was no evil except that he warned them against it. The good that he directed his ummah to was: Tawheed and everything that Allaah loves and is pleased with. The evil that he warned his ummah about was: Shirk and everything that Allaah hates and rejects.
      </p>

      <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 rounded-r-lg">
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          “And We have indeed sent a messenger to every nation (saying): ‘Worship Allaah (alone) and avoid the false deities (Taaghoot).” <span class="text-[#B3ADB9] not-italic text-base font-normal block mt-1">[Surah An-Nahl: 36]</span>
        </p>
      </div>

      <p class="text-lg sm:text-xl text-[#ECE8EF]">
        Allaah obligated all of His servants to disbelieve in the Taaghoot and believe in Allaah.
      </p>

      <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 rounded-r-lg">
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          Ibn Al-Qayyim, may Allaah have mercy on him, said: “The meaning of Taaghoot is someone or thing for whose sake a worshipper transgresses limits, such as those who are worshipped, followed or obeyed.”
        </p>
      </div>
    </section>

    <!-- Conclusion -->
    <section class="pt-8 border-t border-[#24211e] text-center reveal-on-scroll">
      <p class="text-lg sm:text-xl text-[#ECE8EF]">
        And Allaah knows best. May Allaah send His peace and blessings on Muhammad, his
        family and his Companions.
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
