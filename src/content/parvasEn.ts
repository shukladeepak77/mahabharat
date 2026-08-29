import type { Parva } from "./parvas";

export const parvasEn: Parva[] = [
  {
    slug: "parva-1",
    order: 1,
    title: "Adi Parva",
    subtitle: "Adi Parva",
    description:
      "Shantanu and Ganga, Bhishma's vow, the marriage to Satyavati, the birth and upbringing of the Pandavas and Kauravas, Drona's teaching, the escape from the House of Lac, and Draupadi's swayamvara through to the founding of Indraprastha.",
  },
  {
    slug: "parva-2",
    order: 2,
    title: "Sabha Parva",
    subtitle: "Sabha Parva",
    description:
      "The Maya-built hall at Indraprastha, Yudhishthira's Rajasuya sacrifice, the slaying of Shishupala, and the ruinous game of dice — engineered by Shakuni's deceit — that led to Draupadi's disrobing and the Pandavas' exile.",
  },
  {
    slug: "parva-3",
    order: 3,
    title: "Vana Parva",
    subtitle: "Vana Parva",
    description:
      "The Pandavas' twelve years in exile — encounters with many sages, Arjuna's penance and his winning of celestial weapons, and the famous exchange of questions and answers between Yudhishthira and the Yaksha.",
  },
  {
    slug: "parva-4",
    order: 4,
    title: "Virata Parva",
    subtitle: "Virata Parva",
    description:
      "The Pandavas' final year of exile spent in disguise at King Virata's court, the killing of Kichaka, and Arjuna's valor in repelling the Kauravas' attempt to seize the kingdom's cattle.",
  },
  {
    slug: "parva-5",
    order: 5,
    title: "Udyoga Parva",
    subtitle: "Udyoga Parva",
    description:
      "Preparations for war — Krishna's journey to Hastinapur as a peace envoy, Duryodhana's arrogance, Vidura's counsel, and Krishna's secret message to Karna.",
  },
  {
    slug: "parva-6",
    order: 6,
    title: "Bhishma Parva",
    subtitle: "Bhishma Parva",
    description:
      "The start of the Kurukshetra war, the teaching of the Shrimad Bhagavad Gita, and the ten days of Bhishma's command as commander-in-chief, ending in his fall through Shikhandi.",
  },
  {
    slug: "parva-7",
    order: 7,
    title: "Drona Parva",
    subtitle: "Drona Parva",
    description:
      "Acharya Drona's command, Abhimanyu's heroic death within the Chakravyuha, Arjuna's vow to kill Jayadratha, and Drona's own end brought about by Ashwatthama's false report.",
  },
  {
    slug: "parva-8",
    order: 8,
    title: "Karna Parva",
    subtitle: "Karna Parva",
    description:
      "Karna's command, Shalya as his charioteer, and the final, fate-bound duel between Arjuna and Karna, in which Karna was slain as his chariot's wheel sank into the earth.",
  },
  {
    slug: "parva-9",
    order: 9,
    title: "Shalya Parva",
    subtitle: "Shalya Parva",
    description:
      "Shalya's brief command and his end, and the mace duel between Bhima and Duryodhana in which a blow to the thigh finally decided the war.",
  },
  {
    slug: "parva-10",
    order: 10,
    title: "Sauptika Parva",
    subtitle: "Sauptika Parva",
    description:
      "The night raid by Ashwatthama, Kripa, and Kritavarma on the sleeping Pandava camp — a brutal massacre in which Draupadi's five sons were killed.",
  },
  {
    slug: "parva-11",
    order: 11,
    title: "Stri Parva",
    subtitle: "Stri Parva",
    description:
      "Gandhari, Kunti, and the other women's grief upon the battlefield, and the curse Gandhari lays upon Krishna — one that will bring about the destruction of the Yadu dynasty.",
  },
  {
    slug: "parva-12",
    order: 12,
    title: "Shanti Parva",
    subtitle: "Shanti Parva",
    description:
      "Grandsire Bhishma's vast discourse to Yudhishthira, delivered from his bed of arrows, on rajadharma, apaddharma, and mokshadharma.",
  },
  {
    slug: "parva-13",
    order: 13,
    title: "Anushasana Parva",
    subtitle: "Anushasana Parva",
    description:
      "Bhishma's further teaching on charity, the duties of the varnas and ashramas, and the duties owed to women, followed by his passing as the sun turns north.",
  },
  {
    slug: "parva-14",
    order: 14,
    title: "Ashvamedhika Parva",
    subtitle: "Ashvamedhika Parva",
    description:
      "Yudhishthira's horse sacrifice, Arjuna's victory tour across the land, and Krishna's protection of Parikshit — still in Uttara's womb — from Ashwatthama's Brahmastra.",
  },
  {
    slug: "parva-15",
    order: 15,
    title: "Ashramavasika Parva",
    subtitle: "Ashramavasika Parva",
    description:
      "Dhritarashtra, Gandhari, and Kunti's retirement to the forest, and the single night, granted by Vyasa's grace, in which the fallen warriors appeared once more before their families.",
  },
  {
    slug: "parva-16",
    order: 16,
    title: "Mausala Parva",
    subtitle: "Mausala Parva",
    description:
      "The fulfillment of Gandhari's curse — the mutual destruction of the Yadavas at Prabhasa, and Krishna's own departure from this world.",
  },
  {
    slug: "parva-17",
    order: 17,
    title: "Mahaprasthanika Parva",
    subtitle: "Mahaprasthanika Parva",
    description:
      "Yudhishthira hands the kingdom to Parikshit, and the five Pandavas and Draupadi set out on their final journey toward the Himalayas, falling one by one along the way.",
  },
  {
    slug: "parva-18",
    order: 18,
    title: "Swargarohana Parva",
    subtitle: "Swargarohana Parva",
    description:
      "Yudhishthira's ascent to heaven, the final test of a vision of hell, and the reunion of every character of the Mahabharata in their true, divine forms.",
  },
];

export function getParvaEnBySlug(slug: string): Parva | undefined {
  return parvasEn.find((p) => p.slug === slug);
}
