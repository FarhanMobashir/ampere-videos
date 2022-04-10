import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Indie Folk",
    description:
      "Indie folk is a music genre that arose in the 1990s among musicians from indie rock scenes influenced by folk music. Indie folk hybridizes the acoustic guitar melodies of traditional folk music with contemporary instrumentation.",
    imageUrl: "https://i.ibb.co/Dpm9Gsc/folk.png",
  },
  {
    _id: uuid(),
    categoryName: "Acoustic",
    description:
      "Acoustic music is music that solely or primarily uses instruments that produce sound through acoustic means, as opposed to electric or electronic means.",
    imageUrl: "https://i.ibb.co/HFdmjrT/acoustic.png",
  },
  {
    _id: uuid(),
    categoryName: "Classical Indian",
    description:
      "Classical Indian music is a genre of South Asian music, the other being film, various varieties of pop, regional folk, religious and devotional music. In Indian classical music, the raga and the tala are two foundational elements. The raga forms the fabric of a melodic structure, and the tala keeps the time cycle.",
    imageUrl: "https://i.ibb.co/zJSbDps/classic.png",
  },
  {
    _id: uuid(),
    categoryName: "Motivational",
    description:
      "Uplifting music is motivational, elevating, and inspiring. It is hopeful because it can help to bring people together or out of a bad mood. ",
    imageUrl: "https://i.ibb.co/pjpRVxR/motivational.png",
  },
];
