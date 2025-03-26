import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Footer from "./Footer";


export default function Threads() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Manually defined categories
  const categories = [
    "fatawa",
    "arabic",
    "beneficial",
    "madhab",
    "scholars",
    "websites",
    "refutation",
  ];

  const filteredSections = activeCategory
    ? sections.filter((section) =>
        section.title.toLowerCase().includes(activeCategory.toLowerCase())
      )
    : sections;

  const searchFilteredSections = searchQuery
    ? filteredSections
        .map((section) => ({
          ...section,
          links: section.links.filter((link) =>
            link.text.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((section) => section.links.length > 0)
    : filteredSections;

  return (
    <div className="bg-gradient-to-b from-[#020614] to-slate-950 min-h-screen">
      {/* Hero Section */}
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Category Filters */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === null
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            All Resources
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchFilteredSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:translate-y-[-5px] border border-slate-700"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-3">
                    <CategoryIcon
                      category={section.title.split(" ")[0].toLowerCase()}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>
                <p className="text-slate-400 mb-6">{section.subtitle}</p>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="group">
                      {"url" in link ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition-all"
                        >
                          <div className="text-blue-400 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <span className="text-white group-hover:text-blue-300 transition-colors">
                              {link.text}
                            </span>
                            {link.note && (
                              <span className="ml-2 text-xs px-2 py-1 rounded-full bg-red-900/30 text-red-300">
                                {link.note}
                              </span>
                            )}
                          </div>
                          <div className="text-slate-500 group-hover:text-blue-400 transition-all transform group-hover:translate-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center p-3 rounded-lg bg-slate-700/50">
                          <div className="text-indigo-400 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <span className="text-white">{link.text}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Category Icon Component
function CategoryIcon({ category }: { category: string }) {
  switch (category) {
    case "fatawa":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "arabic":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      );
    case "beneficial":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      );
    case "maliki":
    case "shafii":
    case "hanbali":
    case "hanafi":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      );
    case "scholars":
    case "non-scholars":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "the":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
}

// Data structure for sections
const sections = [
  {
    title: "Fatawa / QnA ",
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
    title: "Arabic Learning ",
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
      {
        text: "Al-Lisan youtube channel",
        url: "https://youtube.com/@al-lisan",
      },
    ],
  },
  {
    title: "Beneficial Books ",
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
    title: "Maliki Madhab Fiqh ",
    subtitle: "links to books for learning maliki fiqh",
    links: [
      {
        text: "Ar-Risalah",
        note: "maliki version",
        url: "https://www.kalamullah.com/Books/The%20Risala%20-%20A%20Treatise%20on%20Maliki%20Fiqh.pdf",
      },
      {
        text: "Mukhtasar Al-Akhdari",
        url: "https://archive.org/details/AkhdariPacket101314/mode/2up",
      },
      {
        text: "Al-Murshid Al-Mu'een",
        url: "https://www.muwatta.com/ebooks/english/al-murshid_al-muin_arabic_footnotes.pdf",
      },
      {
        text: "Maliki Fiqh Rihla 2014",

        url: "https://malikifiqhqa.com/wp-content/uploads/2019/01/MALIKI-FIQH-RIHLA-2014.pdf",
      },
      {
        text: "Maliki Fiqh Rihla 2015",
        url: "https://malikifiqhqa.com/wp-content/uploads/2019/01/Maliki-Fiqh-Rihla-2015-pdf.pdf",
      },
    ],
  },
  {
    title: "Scholars ",
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
    title: "The 9 Books of Hadith ",
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
        note: "(arabic only || not pdf)",
        url: "https://sunnah.com/darimi",
      },
    ],
  },
  {
    title: "Shafii Madhab Fiqh ",
    subtitle: "links to books for learning shafii fiqh",
    links: [
      {
        text: "Ar-Risalah",
        note: "shafii version",
        url: "https://www.kalamullah.com/Books/en_Shaafi_Risaala_fi_Usul_al_Fiqh.pdf",
      },
      {
        text: "Matn Az-Zubad",
        note: "(arabic only)",
        url: "https://www.scribd.com/document/347656055/Matan-Zubad-pdf",
      },

      {
        text: "'Umdat As-Salik",
        url: "https://archive.org/details/relianceofthetravellertheclassicmanualofislamicsacredlawindexed",
      },
      {
        text: "Safinat Un-Naja",
        url: "https://data.nur.nu/Kutub/English/Shafi3i-fiqh_Safinat-al-naja.pdf",
      },
      {
        text: "Matn Abi Shuja'",
        note: "(arabic only)",
        url: "https://www.scribd.com/document/609210208/Matn-Abi-Shuja",
      },
      {
        text: "Bulugh Al-Maram",
        url: "https://www.kalamullah.com/Books/Bulugh%20Al-Maram.pdf",
      },
    ],
  },
  {
    title: "Beneficial Websites ",
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
      { text: "shamela.ws", note: "(arabic only)", url: "https://shamela.ws" },
      {
        text: "honey for the heart",
        url: "https://honeyfortheheart.wordpress.com",
      },
      {
        text: "binothaimeen",
        url: "https://binothaimeen.net",
        note: "(arabic only)",
      },
    ],
  },

  {
    title: "Non-Scholars ",
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
  {
    title: "Hanbali Madhab Fiqh ",
    subtitle: "links to books for learning hanbali fiqh",
    links: [
      {
        text: "Bidayat Al-'Abid",
        url: "https://www.scribd.com/document/533980821/Bidayat-al-Abid-Commencement-of-the-Worshiper",
      },
      {
        text: "Akhsar Al-Mukhtasarat",
        url: "https://www.systemofislam.com/pdf/circles/Akhsar%20al%20Mukhtasarat%20-%20English.pdf",
      },
      {
        text: "'Umdat Al-Fiqh",
        url: "https://www.kalamullah.com/Books/umdah-al-fiqh.pdf",
      },
      {
        text: "'Umdat Al-Talib",
        note: "(couldn't find pdf)",
        url: "#",
      },
      {
        text: "Kitab Furu' Al-Fiqh",
        url: "https://archive.org/details/an-epitome-of-hanbali-substantive-law/mode/2up",
      },
      {
        text: "Minhaj As-Salikeen",
        url: "https://www.kalamullah.com/Books/Minhaj-al-Salikin-The-Path-of-the-Wayfarer-Sh.-al-Sadi.pdf",
      },
      {
        text: "Zad Al-Mustaqni'",
        note: "commentary by Sh. Saleh Al-Fawzan",
        url: "https://archive.org/details/zadalmustaqni_202003/A-Commentary-on-Zad-al-Mustaqni-Sh.-Salih-al-Fawzan-Vol.-1-2-compressed/",
      },
    ],
  },
  {
    title: "Hanafi Madhab Fiqh ",
    subtitle: "links to books for learning hanafi fiqh",
    links: [
      {
        text: "Mukhtasar Al-Quduri",
        url: "https://ia801906.us.archive.org/27/items/quduri.....-eng..-ahmad-ibn-muh/Quduri.....Eng..Ahmad%20Ibn%20Muh.pdf",
      },
      {
        text: "Kitab Ul-Athaar",
        url: "https://www.ebooks2go.com/img/samplefiles/9781906949990_Sample.pdf",
      },
      {
        text: "Nur Al-Idah",
        url: "https://www.kalamullah.com/Books/Nur-al-Idah-arabic-english.pdf",
      },
    ],
  },
  {
    title: "Refutation of Common Bid'ah",
    subtitle: "refuting innovations that are widespread among the ummah today",
    links: [
      {
        text: "bid'ah hasanah | good innovation",
        url: "https://islamqa.info/en/answers/205/there-is-no-such-thing-as-bid146ah-hasanah-in-islam",
      },
      {
        text: "mawlid | the Prophet ﷺ's birthday",
        url: "https://islamqa.info/en/answers/249/celebrating-mawlid-al-nabi-muhammads-birthday-allowed",
      },
      {
        text: "celebrating birthdays",
        url: "https://islamqa.info/en/answers/1027/do-muslims-celebrate-birthdays",
      },
      {
        text: "reciting intention for fasting out loud",
        url: "https://islamqa.info/en/answers/37643/can-you-utter-intention-for-fasting-out-loud",
      },
      {
        text: "saying “Sadaqa Allaah al-‘Azheem”",
        url: "https://islamqa.info/en/answers/10119/saying-sadaqa-allaah-al-azeem",
      },
      {
        text: "kissing the quran & swaying whilst reciting",
        url: "https://islamqa.info/en/answers/2260/kissing-the-mus-haf-kissing-ones-fingers-and-swaying-whilst-reciting-quran",
      },
    ],
  },
  {
    title: "Refutation of Widespread Haram",
    subtitle: "refuting haram that are widespread among the ummah today",
    links: [
      {
        text: "music",
        url: "https://islamqa.info/en/answers/5000/is-music-haram",
      },
      {
        text: "freemixing with the opposite gender",
        url: "https://islamqa.info/en/answers/1200/evidence-prohibiting-of-mixing-of-men-and-women",
      },
      {
        text: "drawing living beings",
        url: "https://islamqa.info/en/answers/39806/ruling-on-drawing-animate-beings",
      },
      {
        text: "boxing",
        url: "https://islamqa.info/en/answers/10427/ruling-on-boxing",
        note: "and other combat sports that involve hitting the face",
      },
      {
        text: "vaping and smoking",
        url: "https://islamqa.info/en/answers/201512/is-vaping-allowed",
      },
    ],
  },
];
