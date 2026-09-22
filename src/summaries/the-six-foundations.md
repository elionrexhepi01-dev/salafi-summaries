---
layout: base.njk
title: "The Six Foundations"
author: "Shaykh ul-Islām Muḥammad ibn ‘Abdul-Wahhāb"
explanationBy: "Shaykh Muḥammad ibn Ṣāliḥ al-‘Uthaymīn"
category: "Creed & Methodology"
dateAdded: 2026-09-04
description: "Six foundational principles from the Qur’an and Sunnah for sound belief, unity, and governance."
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
    <div class="inline-block px-4 py-1.5 text-sm font-mono uppercase tracking-widest text-[#d6b278] bg-[#24211e] rounded-full border border-[#332f2b]">
      {{ category }}
    </div>
    <h1 class="text-5xl leading-tight text-white sm:text-6xl">
      {{ title }}
    </h1>
    <div class="space-y-1">
      <p class="text-[#d6b278] text-lg sm:text-xl font-light">
        By {{ author }} <span class="text-[#B3ADB9]">رَحِمَهُ ٱللَّٰهُ</span>
      </p>
      {% if explanationBy %}
      <p class="text-base text-[#B3ADB9] font-light">
        Commentary by {{ explanationBy }} <span class="text-[#B3ADB9]">رَحِمَهُ ٱللَّٰهُ</span>
      </p>
      {% endif %}
    </div>
  </header>

  <div class="space-y-16 font-light leading-relaxed">

    <!-- Opening Overview Card -->
    <section class="reveal-on-scroll">
      <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-4">
        <p class="text-xl sm:text-2xl text-[#ECE8EF] leading-relaxed">
          The Islamic creed rests upon clear, unambiguous pillars that safeguard the believer’s worship, community, and intellect from deviation.
        </p>
        <p class="text-base text-[#B3ADB9]">
          These six foundations were articulated directly from the Divine Revelation to preserve pure monotheism, ensure social stability, distinguish genuine scholarship from pretense, and refute Satanic doubts.
        </p>
      </div>
    </section>

    <!-- PRINCIPLE I -->
    <section class="space-y-6 reveal-on-scroll">
      <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
        <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principle I</span>
        <h2 class="text-3xl font-medium text-white sm:text-4xl">
          Pure Sincerity in Religion (<e>Tawḥīd</e>) vs. Polytheism (<e>Shirk</e>)
        </h2>
      </div>

      <p class="text-lg sm:text-xl text-[#ECE8EF]">
        The foremost obligation in Islam is making the religion purely and sincerely for Allah alone, without partners. The vast majority of the Qur'an clarifies this principle from countless angles, utilizing language so direct and accessible that even the most layperson can comprehend it.
      </p>

      <!-- Primary Proof Card -->
      <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
        <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Comprehensive Devotion</span>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          “Say: ‘Verily, my prayer, my sacrifice, my living, and my dying are all for Allah, the Lord of the worlds. He has no partner. And of this I have been commanded, and I am the first of the Muslims.’”
        </p>
        <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah al-An‘ām [6:162-163]</span>
      </div>

      <!-- Textual Evidence Grid -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">

        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Divine Oneness</span>
          <h3 class="text-xl font-medium text-white">Exclusive Worship</h3>
          <p class="text-base text-[#B3ADB9] italic">
            “And your God is One God; there is no deity worthy of worship except Him, the Most Beneficent, the Most Merciful.”
          </p>
          <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Baqarah [2:163]</span>
        </div>
        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Universal Mission</span>
          <h3 class="text-xl font-medium text-white">Message of All Prophets</h3>
          <p class="text-base text-[#B3ADB9] italic">
            “And We did not send any Messenger before you except that We inspired him: ‘There is no deity except Me, so worship Me.’”
          </p>
          <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Anbiyā’ [21:25]</span>
        </div>
        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Total Submission</span>
          <h3 class="text-xl font-medium text-white">Surrender to the Creator</h3>
          <p class="text-base text-[#B3ADB9] italic">
            “And your God is One God, so you must submit to Him Alone in Islam.”
          </p>
          <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Ḥajj [22:34]</span>
        </div>
        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Active Repentance</span>
          <h3 class="text-xl font-medium text-white">Turning to the Lord</h3>
          <p class="text-base text-[#B3ADB9] italic">
            “And turn in repentance and obedience with true faith to your Lord, and submit to Him...”
          </p>
          <span class="text-xs font-mono text-[#d6b278] block">— Sūrah az-Zumar [39:54]</span>
        </div>
      </div>
    </section>

    <!-- PRINCIPLE II -->
    <section class="space-y-6 reveal-on-scroll">
      <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
        <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principle II</span>
        <h2 class="text-3xl font-medium text-white sm:text-4xl">
          Unity in the Religion & Prohibition of Sectarian Division
        </h2>
      </div>

      <p class="text-lg sm:text-xl text-[#ECE8EF]">
        Allah has commanded solidarity upon the truth and explicitly forbidden division, factionalism, and internal conflict within the faith. True religious adherence requires maintaining brotherhood and guarding against theological splitting.
      </p>

      <!-- Primary Quranic Command Card -->
      <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
        <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">The Imperative of Brotherhood</span>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          “Hold fast, all of you together, to the rope of Allah and be not divided. Remember Allah’s favor upon you—for you were enemies and He joined your hearts by His grace, so you became brothers...”
        </p>
        <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah Āl ‘Imrān [3:102-103]</span>
      </div>

      <!-- Grid Warnings against Splitting -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">

        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Severe Warning</span>
          <h3 class="text-xl font-medium text-white">The Peril of Disunity</h3>
          <p class="text-base text-[#B3ADB9] italic">
            “And do not be like those who differed and divided among themselves after clear proofs had come to them. It is they for whom there is an awful torment.”
          </p>
          <span class="text-xs font-mono text-[#d6b278] block">— Sūrah Āl ‘Imrān [3:105]</span>
        </div>
        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Loss of Strength</span>
          <h3 class="text-xl font-medium text-white">Internal Dispute</h3>
          <p class="text-base text-[#B3ADB9] italic">
            “And do not dispute, lest you lose courage and your strength depart.”
          </p>
          <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Anfāl [8:46]</span>
        </div>
      </div>
      <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-2">
        <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Dissociation from Factions</span>
        <p class="text-base text-[#ECE8EF] italic">
          “Verily, those who divide their religion and break up into sects, you have no concern with them in the least.”
        </p>
        <span class="text-xs font-mono text-[#B3ADB9] block">— Sūrah al-An‘ām [6:159]</span>
      </div>
    </section>

    <!-- PRINCIPLE III -->
    <section class="space-y-6 reveal-on-scroll">
      <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
        <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principle III</span>
        <h2 class="text-3xl font-medium text-white sm:text-4xl">
          Listening & Obeying Those in Authority
        </h2>
      </div>

      <p class="text-lg sm:text-xl text-[#ECE8EF]">
        Social order and religious safety cannot exist without lawful governance. Islam commands obedience to legitimate authority in all non-sinful matters, safeguarding society from chaos (<e>Fitnah</e>) and rebellion.
      </p>

      <!-- Quranic Foundation Card -->
      <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
        <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Divine Command</span>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          “O you who believe! Obey Allah and obey the Messenger, and those in authority among you.”
        </p>
        <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah an-Nisā’ [4:59]</span>
      </div>

      <!-- Prophetic Instructions List -->
      <div class="bg-[#24211e] p-6 sm:p-8 rounded-lg border border-[#24211e] space-y-6">

        <div class="flex items-start gap-4">
          <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">01.</span>
          <div class="space-y-1">
            <h3 class="text-lg font-medium text-white sm:text-xl">Accountability for Rebellion</h3>
            <p class="text-base text-[#B3ADB9]">
              The Prophet ﷺ warned: <e>“Whoever removes their hand from obedience will find no argument in their defense when standing before Allah on the Day of Judgment.”</e>
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
          <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">02.</span>
          <div class="space-y-1">
            <h3 class="text-lg font-medium text-white sm:text-xl">Patient Compliance Regardless of Status</h3>
            <p class="text-base text-[#B3ADB9]">
              The Prophet ﷺ instructed: <e>“Listen and obey, even if an Abyssinian slave is placed in authority over you.”</e>
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
          <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">03.</span>
          <div class="space-y-1">
            <h3 class="text-lg font-medium text-white sm:text-xl">The Boundary of Obedience</h3>
            <p class="text-base text-[#B3ADB9]">
              Obedience is mandatory whether one likes or dislikes it, <e>unless ordered to commit a sin</e>—if commanded to sin, there is no hearing or obeying in that specific act.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- PRINCIPLE IV -->
    <section class="space-y-6 reveal-on-scroll">
      <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
        <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principle IV</span>
        <h2 class="text-3xl font-medium text-white sm:text-4xl">
          True Knowledge, Jurisprudence, & Recognizing the Scholars
        </h2>
      </div>

      <p class="text-lg sm:text-xl text-[#ECE8EF]">
        A vital foundation is clarifying the true definition of sacred knowledge (<e>‘Ilm</e>) and jurisprudence (<e>Fiqh</e>), honoring the genuine scholars who possess it, and unmasking pretenders who feign scholarly authority without divine guidance.
      </p>

      <!-- Grid Callout for Knowledge Virtues -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">

        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Quranic Distinction</span>
          <h3 class="text-xl font-medium text-white">The Incomparable Value of Scholars</h3>
          <p class="text-base text-[#B3ADB9] italic">
            “Say: ‘Are those who know equal to those who know not?’ It is only men of understanding who will take heed.”
          </p>
          <span class="text-xs font-mono text-[#d6b278] block">— Sūrah az-Zumar [39:9]</span>
        </div>
        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Prophetic Mark</span>
          <h3 class="text-xl font-medium text-white">Divine Favor through Fiqh</h3>
          <p class="text-base text-[#B3ADB9]">
            The Prophet ﷺ said: <e>“Whomever Allah intends good for, He grants him deep understanding (Fiqh) of the religion.”</e>
          </p>
        </div>
        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Sacred Inheritance</span>
          <h3 class="text-xl font-medium text-white">The Prophetic Legacy</h3>
          <p class="text-base text-[#B3ADB9]">
            The Prophets bequeath neither gold nor silver; they bequeath knowledge. Whoever acquires it has seized an abundant fortune.
          </p>
        </div>
        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Elevation of Rank</span>
          <h3 class="text-xl font-medium text-white">Exaltation by Allah</h3>
          <p class="text-base text-[#B3ADB9] italic">
            “Allah will exalt in degree those of you who believe, and those who have been granted knowledge.”
          </p>
          <span class="text-xs font-mono text-[#d6b278] block">— Sūrah al-Mujādilah [58:11]</span>
        </div>
      </div>
    </section>

    <!-- PRINCIPLE V -->
    <section class="space-y-6 reveal-on-scroll">
      <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
        <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principle V</span>
        <h2 class="text-3xl font-medium text-white sm:text-4xl">
          Identifying the True Friends (<e>Awliyā’</e>) of Allah
        </h2>
      </div>

      <p class="text-lg sm:text-xl text-[#ECE8EF]">
        The true allies and friends of Allah (<e>Awliyā’</e>) are defined by genuine faith, piety (<e>Taqwā</e>), and faithful adherence to the Prophet ﷺ—not by self-glorification, claims to esoteric powers, or empty titles.
      </p>

      <!-- Primary Definition Card -->
      <div class="bg-[#24211e] border-l-2 border-[#d6b278] p-6 sm:p-8 rounded-r-lg space-y-3">
        <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">The Definition of Wilāyah</span>
        <p class="text-lg sm:text-xl text-[#ECE8EF] italic">
          “Unquestionably, for the allies of Allah there will be no fear concerning them, nor will they grieve—those who believed and were conscious of Allah.”
        </p>
        <span class="text-xs font-mono text-[#d6b278] uppercase block">— Sūrah Yūnus [10:62-63]</span>
      </div>

      <!-- Criteria Grid Callouts -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">

        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Criterion 01</span>
          <h3 class="text-xl font-medium text-white">Following the Prophet ﷺ</h3>
          <p class="text-base text-[#B3ADB9] italic">
            “Say: ‘If you truly love Allah, then follow me; Allah will love you...’”
          </p>
          <span class="text-xs font-mono text-[#d6b278] block">— Sūrah Āl ‘Imrān [3:31]</span>
        </div>
        <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Criterion 02</span>
          <h3 class="text-xl font-medium text-white">Absence of Self-Praise</h3>
          <p class="text-base text-[#B3ADB9] italic">
            “So do not claim purity for yourselves; He knows best who fears Him.”
          </p>
          <span class="text-xs font-mono text-[#d6b278] block">— Sūrah an-Najm [53:32]</span>
        </div>
      </div>
      <div class="bg-[#1c1a18] p-6 rounded-lg border border-[#332f2b] space-y-2">
        <span class="text-xs font-mono uppercase tracking-widest text-[#d6b278]">Refuge from Satanic Deception</span>
        <p class="text-base text-[#ECE8EF]">
          Satan holds no authority over true believers who place their trust in Allah; his power is limited solely to those who ally themselves with him and associate partners with Allah. <span class="text-[#B3ADB9] italic">[Qur'an 16:98-100]</span>
        </p>
      </div>
    </section>

    <!-- PRINCIPLE VI -->
    <section class="space-y-6 reveal-on-scroll">
      <div class="space-y-2 border-b border-[#332f2b] pb-4 text-center">
        <span class="text-sm font-mono uppercase tracking-widest text-[#d6b278]">Principle VI</span>
        <h2 class="text-3xl font-medium text-white sm:text-4xl">
          Dismantling the Fallacy Against Pondering Divine Revelation
        </h2>
      </div>

      <p class="text-lg sm:text-xl text-[#ECE8EF]">
        A deceptive doubt invented by Satan suggests that the Qur'an and Sunnah are impossible for common minds to understand, driving people to abandon direct engagement with revelation. In truth, the Qur'an was revealed as a clear guidance meant for reflection, complemented by seeking scholarly clarification when needed.
      </p>

      <!-- Two-Step Proof Layout -->
      <div class="bg-[#24211e] p-6 sm:p-8 rounded-lg border border-[#24211e] space-y-6">

        <div class="flex items-start gap-4">
          <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">01.</span>
          <div class="space-y-1">
            <h3 class="text-lg font-medium text-white sm:text-xl">The Purpose of Revelation is Clarity</h3>
            <p class="text-base text-[#B3ADB9]">
              Allah explicitly states: <e>“And We sent down unto you the Revelation so that you may explain clearly to humanity what was sent down to them, and so that they may reflect.”</e> <span class="text-[#d6b278]">[Qur'an 16:44]</span>
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4 border-t border-[#332f2b] pt-6">
          <span class="text-2xl sm:text-3xl font-bold font-mono text-[#d6b278]">02.</span>
          <div class="space-y-1">
            <h3 class="text-lg font-medium text-white sm:text-xl">Consulting Scholars Without Abandoning Text</h3>
            <p class="text-base text-[#B3ADB9]">
              When clarity is required, revelation directs believers directly to knowledge rather than abandonment: <e>“Ask the people of knowledge if you know not.”</e> <span class="text-[#d6b278]">[Qur'an 16:43]</span>
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
