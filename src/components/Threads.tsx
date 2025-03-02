export default function Threads() {
  return (
    <>
      <div
        id="threads-section"
        className="min-h-screen p-16 pt-90 columns-1 md:columns-2 lg:columns-3 gap-10 animate-fadeIn"
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#0c0d0f] to-[#151719] dark:from-[#0c0d0f] dark:to-[#151719] light:from-white light:to-gray-50 p-8 rounded-3xl flex flex-col items-start flex-shrink-0 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20 border border-gray-800/10 mb-10 break-inside-avoid"
          >
            <h1 className="text-slate-800 dark:text-white text-3xl font-semibold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {section.title}
            </h1>
            <h2 className="text-slate-600 dark:text-white/70 text-xl mt-4 font-light tracking-wide">
              {section.subtitle}
            </h2>
            <div className="text-blue-600 dark:text-blue-300/90 pt-8 text-lg w-full">
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="flex pb-2 gap-3 group">
                    <li>
                      {"url" in link ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-10 flex items-center group transition-all duration-300 hover:text-blue-200"
                        >
                          <span className="transform transition-all duration-300 group-hover:translate-x-2 flex items-center">
                            <span className="opacity-0 transform -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400">
                              →
                            </span>
                            <span className="ml-1">{link.text}</span>
                          </span>
                          {link.note && (
                            <p className="text-red-100/80 ml-2 text-sm px-2 py-0.5 rounded-full bg-red-500/10">
                              {link.note}
                            </p>
                          )}
                        </a>
                      ) : (
                        <span className="flex items-center">
                          <span className="ml-1">{link.text}</span>
                          {"note" in link && (
                            <p className="text-red-100/80 ml-2 text-sm px-2 py-0.5 rounded-full bg-red-500/10">
                              {link.note as string}
                            </p>
                          )}
                        </span>
                      )}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// Data structure for sections
const sections = [
  {
    title: "fatawa / qna ...",
    subtitle: "rulings & questions and answers",
    links: [
      { text: "IslamQA", url: "https://islamqa.info/" },
      { text: "Islamweb", url: "https://www.islamweb.com/en/" },
      {
        text: "binbaz.org",
        url: "https://binbaz.org.sa/fatwas/kind/1",
        note: "(arabic only)",
      },
      { text: "Ad-Dorar As-Sunniyah", url: "https://dorar.net/en" },
      {
        text: "binothaimeen",
        url: "https://binothaimeen.net",
        note: "(arabic only)",
      },
    ],
  },
  {
    title: "arabic learning ...",
    subtitle: "resources for learning arabic",
    links: [
      { text: "arabic101 youtube", url: "https://www.youtube.com/@Arabic101" },
      { text: "arabic101.org", url: "https://arabic101.org" },
      {
        text: "madinah book 1 playlist",
        url: "https://youtube.com/playlist?list=PL6yio5bdKg5QbclBgvkPyUcoAHRMOZSLP&si=h8YSb2i9yv68UP9X",
      },
      {
        text: "madinah book 2 playlist",
        url: "https://youtube.com/playlist?list=PL6yio5bdKg5QtuQ9b1GO616DMYnjxPf-j&si=tybSZNIyyRCvcKyy",
      },
      {
        text: "madinah book 3 playlist",
        url: "https://youtube.com/playlist?list=PL6yio5bdKg5TlqhQONfdx5BGx2utgPR-U&si=GD6Elu7tnrl2rOVu",
      },
      {
        text: "Arabic with AMAU",
        url: "https://www.amauacademy.com/pages/arabic-with-amau-program",
      },
    ],
  },
  {
    title: "beneficial books ...",
    subtitle: "useful books pdfs",
    links: [
      {
        text: "Usool Al-Thalatha",
        url: "https://www.kalamullah.com/Books/Explanation%20of%20the%20Three%20Fundamental%20Principles%20of%20Islaam.pdf",
      },
      {
        text: "Kitab At-Tawheed",
        url: "https://ia804707.us.archive.org/7/items/tawheed_201612/KitabAt-tawheedExplained_text.pdf",
      },
      {
        text: "Al-Aqidat Al-Wasitiyyah",
        url: "https://www.kalamullah.com/Books/Sharh%20Al-Aqeedat-il-Wasitiyah.pdf",
      },
      {
        text: "Al-Qawaid Al-Arba'a",
        url: "https://d1.islamhouse.com/data/en/ih_books/single/en_Four_Foundations_of_Shirk.pdf",
      },
      {
        text: "Al-Ibanah As-Sughra",
        url: "https://www.scribd.com/document/650018661/Al-Ibanah-as-Sughra-by-Ibn-Battah",
      },
      {
        text: "Al-Risalah At-Tadmuriyyah",
        url: "https://www.emaanlibrary.com/wp-content/uploads/2022/01/Towards-Understanding-of-Tadmuriyyah-Exp.-by-Sh.-al-'Uthaymeen.pdf",
      },
      {
        text: "Al-'Aqeedatul Hamawiyyah",
        url: "https://www.kalamullah.com/Books/Explanation_of_a_Summary_of_Aqeedat_Hamawiyyah.pdf",
      },
      {
        text: "Tafseer Ibn-Katheer",
        url: "https://www.kalamullah.com/Books/Tafsir%20Ibn%20Kathir%20all%2010%20volumes.pdf",
      },
      {
        text: "Nullifiers of Islam",
        url: "https://manrabbuk.com/archive/Explanation%20of%20the%20Nullifiers%20of%20Islam.pdf",
      },
      {
        text: "Kashf Ash-Shubuhaat",
        url: "https://dn790007.ca.archive.org/0/items/KashfAsh-ShubuhaatRemovingDoubtsPertainingToShirk/Kashf%20Ash-Shubuhaat%20-%20Removal%20Of%20The%20Doubts.pdf",
      },
    ],
  },
  {
    title: "scholars ...",
    subtitle: "trusted scholars to take from",
    links: [
      { text: "Abdusalaam Shuwayir" },
      { text: "Saleh Al Usaymi" },
      { text: "Abdurrazzaq Al Badr" },
      { text: "Saleh Al Fawzan" },
      { text: "Ibn Uthaymeen" },
      { text: "Ibn Baz" },
      { text: "Abdul Muhsin Al Abbad" },
      { text: "Muqbil Bin Hadi" },
      { text: "Zubair Ali Zai" },
      { text: "Saleh Al-Luhaydan" },
      { text: "Abdulaziz At-Turayfi" },
      { text: "Harith Al-Hasani" },
    ],
  },
  {
    title: "the 9 books of hadith ...",
    subtitle: "pdfs to the 9 books of hadith",
    links: [
      {
        text: "Sahih Al-Bukhari",
        url: "https://archive.org/details/SahihAlBukhariVol.317732737EnglishArabic/Sahih%20al-Bukhari%20Vol.%201%20-%201-875%20English%20Arabic/mode/2up",
      },
      {
        text: "Sahih Muslim",
        url: "https://archive.org/details/sahih-muslim-arabic-english-full/sahih-muslim-english-vol-1/",
      },
      {
        text: "Sunan Abu-Dawood",
        url: "https://archive.org/details/SunanAbuDawudVol.111160EnglishArabic/Sunan%20Abu%20Dawud%20Vol.%201%20-%201-1160%20English%20Arabic/mode/2up",
      },
      {
        text: "Sunan At-Tirmithi",
        url: "https://archive.org/details/sunan-tirmidhi-arabic-english-full/sunan-tirmidhi-english-vol-1/mode/2up",
      },
      {
        text: "Sunan An-Nasai",
        url: "https://archive.org/details/sunan-an-nasa-i-volume-1-6/sunan-an-nasa-i-volume-1/",
      },
      {
        text: "Sunan Ibn Majah",
        url: "https://archive.org/details/sunan-ibn-majah-arabic-english-full/sunan-ibn-majah-english-vol-1/",
      },
      {
        text: "Musnad Imaam Ahmad",
        url: "https://www.kalamullah.com/musnad-ahmad.html",
      },
      {
        text: "Muwatta' Imaam Malik",
        url: "https://ia903201.us.archive.org/22/items/al-muwatta-of-imam-malik/Al-Muwatta%20of%20Imam%20Malik.pdf",
      },
      {
        text: "Sunan Ad-Darimi",
        url: "https://sunnah.com/darimi",
        note: "(arabic only || not pdf)",
      },
    ],
  },
  {
    title: "beneficial websites ...",
    subtitle: "links to useful websites",
    links: [
      { text: "quran.com", url: "https://quran.com/" },
      { text: "sunnah.com", url: "https://sunnah.com/" },
      { text: "muslimthread", url: "#" },
      { text: "manrabbuk.com", url: "https://manrabbuk.com" },
      { text: "takw.in", url: "https://takw.in/manhaj", note: "(arabic only)" },
      { text: "abdurrahman.org", url: "https://abdurrahman.org" },
      { text: "kalamullah", url: "https://kalamullah.com/" },
      { text: "Ad-Dorar As-Sunniyah", url: "https://dorar.net/en" },
      {
        text: "binothaimeen",
        url: "https://binothaimeen.net",
        note: "(arabic only)",
      },
      { text: "abukhadeejah", url: "https://abukhadeejah.com" },
    ],
  },
  {
    title: "non-scholars ...",
    subtitle: "trusted non-scholars to take from",
    links: [
      {
        text: "Abdulrahman Hassan",
        url: "https://www.amauacademy.com/authors/ustadh-abdulrahman-hassan",
      },
      {
        text: "Tim Humble",
        url: "https://www.amauacademy.com/authors/ustadh-muhammad-tim-humble",
      },
      {
        text: "Uthman Ibn Farooq",
        url: "https://www.youtube.com/UthmanIbnFarooqOfficial",
      },
      {
        text: "Muhammad Ali",
        note: "aka. The Muslim Lantern",
        url: "https://www.youtube.com/@TheMuslimLantern",
      },
      {
        text: "Jake Brancatella",
        note: "aka. Muslim Metaphysician",
        url: "https://www.youtube.com/@JakeBrancatella",
      },
    ],
  },
];
