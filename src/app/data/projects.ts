export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  heroImage: string;
  concept: string;
  materials: string;
  process: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "wooden-stool",
    title: "Out of Love",
    image: "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5011.JPG",
    heroImage: "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5011.JPG",
    concept:
      "A set of ceramic bowls designed to hold and reveal handwritten phrases during family meals. Each bowl features text etched or painted on the interior surface, gradually becoming visible as food is consumed. The project explores how dinnerware can become a medium for intimate communication, transforming everyday eating rituals into moments of shared emotion and connection. The phrases—words of encouragement, affection, or memory—emerge slowly throughout the meal, creating quiet moments of discovery and reflection at the family table.",
    materials: "Ceramic, underglaze, hand-lettering",
    images: [
      "https://images.unsplash.com/photo-1756363937905-d0aa09a671cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1756364896972-4234d1b6113c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
  {
    id: "minimal-table",
    title: "Soban set plates",
    image: "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5235.jpg",
    heroImage: "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5235.jpg",
    concept:
      "This piece reinterprets the traditional Korean soban into a set of modular wooden plates. Composed of two interlocking elements, the design allows the user to adjust and rearrange the form, creating subtle variations in function and composition. Each configuration maintains a visual connection to the soft, elevated silhouettes of traditional Korean furniture, translating cultural heritage into a contemporary, interactive object.",
    materials: "Sapele and oak",
    images: [
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5174.jpg",
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5234.jpg",
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5238.jpg",
    ],
  },
  {
    id: "side-table",
    title: "Beyond",
    image: "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5478.jpg",
    heroImage: "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5478.jpg",
    concept:
      "An interactive installation placed at the Charterhouse square, taking the structure of the Chapel roof, it directs the user to see the Charterhouse. It evokes curiosity to see what is beyond each eye hole and to see a glimpse of the tour and engage with users to go see the full tour at Charterhouse. side table embraces the wabi-sabi philosophy, finding beauty in natural imperfections and the passage of time. The design allows the wood's unique character—knots, grain variations, and subtle color shifts—to become integral features rather than flaws to be hidden.",
    materials: "Playwood, Veneer, ABS",
    images: [
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/Gemini_Generated_Image_rwxcmjrwxcmjrwxc.png",
    ],
  },
  {
    id: "planter-stand",
    title: "Sun and Lake",
    subtitle: "",
    image: "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/v1%20edit.JPG",
    heroImage:
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/v1%20edit.JPG",
    concept:
      "Developed in collaboration with Accouter Group of Companies, this project transforms provided wooden slats into a cohesive furniture and lighting piece. The side table reconfigures the slats into a structured, vertical form, while the accompanying lamp extends the concept through hand-shaped, irregular wave-like elements. Each strip was individually cut and sanded to evoke fluid movement, paired with a paper-mâché textured centre that diffuses light to resemble the sun. Together, the pieces explore natural imagery through material manipulation, capturing the interplay of sunlight and water..",
    materials: "Reclaimed Wood",
    process:
      "The stand features a turned walnut top with a recessed center to hold standard plant pots, paired with slender steel legs that provide stability while maintaining visual lightness.",
    images: [
      "https://images.unsplash.com/photo-1756364896972-4234d1b6113c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1774499646780-e8759a263253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
  {
    id: "storage-box",
    title: "Okchun tray",
    image: "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_7446%204.jpg",
    heroImage:
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_7446%204.jpg",
    concept:
      "Okchun 木, a handcrafted wooden jewellery tray, represents a fusion of Korean traditional aesthetics and modern design. By showcasing the timelessness of wood and the techniques for this craft, it truly embraces its contemporary features. The inner ring is designed to capture the essence of Okchundang,a high value and colourful traditional candy.",
    materials: "Ash wood, Acrylic",
    images: [
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_7440%203.jpg",
    ],
  },
  {
    id: "desk-organizer",
    title: "Knife Ramp",
    image: "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/3B303DB5-540F-45B8-B685-18CFD2D8B0A2.JPG",
    heroImage:
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/3B303DB5-540F-45B8-B685-18CFD2D8B0A2.JPG",
    concept:
      "A desk organizer that brings calm to daily work routines through thoughtful compartmentalization and clean aesthetics. Each section is sized and positioned to hold specific items, creating a designated place for everything.",
    materials: "PlA Prototype",
    images: [
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/92926CD0-6B38-4D95-AB36-609582CE37E2.JPG",
    ],
  },
];
