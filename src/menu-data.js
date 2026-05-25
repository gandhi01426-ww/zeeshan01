export const PHONE_DISPLAY = "+91 83744 75758";
export const PHONE_WA = "918374475758";
export const ADDRESS =
  "Ramlakshmana Complex, Ramlakshmana Junction, 2nd and 3rd floor, Srikakulam, Andhra Pradesh 532001";

export const images = {
  front: "/public/images/zeeshan-front.jpg.jpeg",
  interior1: "/public/images/zeeshan-interior-1.jpg.jpeg",
  interior2: "/public/images/zeeshan-interior-2.jpg.jpeg",
  interior3: "/public/images/zeeshan-interior-3.jpg.jpeg",
  menuFront: "/public/images/zeeshan-menu-front.jpg.jpeg",
  menuBack: "/public/images/zeeshan-menu-back.jpg.jpeg",
  mandi: "/public/images/zeeshan-food-mandi.jpg.jpeg",
  biryani: "/public/images/zeeshan-food-biryani.jpg.jpeg",
  profile: "/public/images/google-business-profile.jpg.jpeg"
};

export const menuCategories = [
  "All",
  "Veg Soups",
  "Non-Veg Soups",
  "Veg Starters",
  "Chicken Starters",
  "Fish Starters",
  "Mutton Starters",
  "Prawns Starters",
  "Sea Food Curries",
  "Veg Dishes",
  "Chicken Dishes",
  "Mutton Dishes",
  "Prawns Dishes",
  "Indian Breads / Rotis",
  "Fried Rice",
  "Noodles",
  "Kebabs",
  "Biryani",
  "Mandi",
  "Family Pack / Jumbo Specials"
];

export const signatureDishes = [
  {
    name: "Hyderabadi Biryani",
    image: images.biryani,
    category: "Biryani",
    accent: "Long-grain dum rice, raita and salan"
  },
  {
    name: "Chicken Mandi",
    image: images.mandi,
    category: "Mandi",
    accent: "Arabian-style platter for sharing"
  },
  {
    name: "Mutton Mandi",
    image: images.mandi,
    category: "Mandi",
    accent: "Juicy mutton, rice and family portions"
  },
  {
    name: "Tandoori Chicken",
    image: images.mandi,
    category: "Kebabs",
    accent: "Charred, smoky, classic Hyderabadi table starter"
  },
  {
    name: "Kebabs",
    image: images.mandi,
    category: "Kebabs",
    accent: "Reshmi, tikka, kalmi and Charminar styles"
  },
  {
    name: "Soups",
    image: images.interior2,
    category: "Soups",
    accent: "Veg, chicken and mutton comfort bowls"
  },
  {
    name: "Starters",
    image: images.biryani,
    category: "Starters",
    accent: "Crispy, spicy and built for sharing"
  },
  {
    name: "Sea Food",
    image: images.mandi,
    category: "Sea Food",
    accent: "Fish, prawns and mixed seafood platters"
  },
  {
    name: "Fried Rice",
    image: images.biryani,
    category: "Chinese",
    accent: "Veg, chicken, prawns and mixed non-veg"
  },
  {
    name: "Noodles",
    image: images.interior1,
    category: "Chinese",
    accent: "Fast wok-style comfort plates"
  },
  {
    name: "Rotis",
    image: images.front,
    category: "Indian Breads",
    accent: "Tandoori roti, naan, kulcha and paratha"
  }
];

export const galleryImages = [
  { src: images.interior1, title: "Premium family dining hall", tall: false },
  { src: images.foodBiryani || images.biryani, title: "Hyderabadi biryani", tall: false },
  { src: images.front, title: "Zeeshan Restaurant frontage", tall: false },
  { src: images.interior2, title: "Private booth seating", tall: true },
  { src: images.mandi, title: "Chicken and mutton mandi platter", tall: false },
  { src: images.interior3, title: "2nd and 3rd floor seating", tall: true },
  { src: images.menuFront, title: "Menu card front", tall: true },
  { src: images.menuBack, title: "Menu card back", tall: true },
  { src: images.profile, title: "Google business profile", tall: true }
];

const items = [];

function add(category, rows, section = category) {
  rows.forEach(([name, price, note]) => {
    items.push({
      id: `${items.length + 1}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      name,
      price,
      category,
      section,
      note: note || ""
    });
  });
}

add("Veg Soups", [
  ["Veg Sweet Corn Soup", 140],
  ["Veg Hot & Sour Soup", 130],
  ["Veg Manchow Soup", 140],
  ["Veg Schezwan Soup", 130],
  ["Veg Clear Soup", 130],
  ["Mushroom Cream Soup", 130],
  ["Veg Lemon Coriander Soup", 140]
]);

add("Non-Veg Soups", [
  ["Chicken Cream Soup", 150],
  ["Chicken Sweet Corn Soup", 160],
  ["Chicken Hot & Sour Soup", 150],
  ["Chicken Manchow Soup", 160],
  ["Chicken Lemon Coriander Soup", 160],
  ["Chicken Schezwan Soup", 150],
  ["Chicken Clear Soup", 150],
  ["Mutton Bone Soup", 190],
  ["Mutton Clear Soup", 180],
  ["Mutton Pepper Soup", 180],
  ["Mutton Manchow Soup", 190]
]);

add("Veg Starters", [
  ["Gobi Chilli Dry & Wet", 300],
  ["Gobi Manchurian Dry & Wet", 300],
  ["Gobi Schezwan Dry & Wet", 300],
  ["Mushroom 65", 300],
  ["Mushroom Chilly", 300],
  ["Mushroom Manchurian", 300],
  ["Mushroom Schezwan", 300],
  ["Crispy Baby Corn", 300],
  ["Baby Corn 65", 300],
  ["Baby Corn Chilly", 300],
  ["Baby Corn Manchurian", 300],
  ["Baby Corn Schezwan", 300],
  ["Veg Manchurian", 300],
  ["Paneer 65", 325],
  ["Paneer Manchurian", 325],
  ["Paneer Majestic", 325],
  ["Paneer Chilly Dry & Wet", 325],
  ["Paneer Schezwan Dry & Wet", 325],
  ["Veg Mixed Platter", 1000]
]);

add("Chicken Starters", [
  ["Chicken 65", 375],
  ["Chicken Chilli Dry & Wet", 375],
  ["Chicken Manchurian Dry & Wet", 375],
  ["Chicken Schezwan Dry & Wet", 375],
  ["Dragon Chicken", 400],
  ["Slice Chicken", 400],
  ["Devil Chicken", 400],
  ["Majestic Chicken", 400],
  ["Garlic Chicken", 400],
  ["Lemon Chicken", 400],
  ["Chicken Lollipop (6 pcs)", 400],
  ["Chicken Lollipop (4 pcs)", 290],
  ["Pepper Chicken", 400],
  ["Crispy Chicken", 400],
  ["Ginger Chicken", 370],
  ["Chicken 555", 420],
  ["Chicken Drumstick", 420],
  ["Chilly Wings (8 pcs)", 300],
  ["Mongolian Chicken", 420],
  ["Chinese Chef Spl Chicken", 420],
  ["Chicken 99", 420],
  ["Black Bean Chicken", 420],
  ["Lemon Garlic Chicken", 420],
  ["Chinese Mixed Platter", 1250]
]);

add("Fish Starters", [
  ["Fish Fry", 420],
  ["Apollo Fish", 420],
  ["Fish 65", 420],
  ["Fish Manchurian Dry & Wet", 420],
  ["Ginger Fish", 430],
  ["Chilly Fish", 420],
  ["Fish Fingers (5 pcs)", 300],
  ["Ring Fish", 430]
]);

add("Prawns Starters", [
  ["Prawns 65", 420],
  ["Prawn Fry", 440],
  ["Ginger Prawns Dry & Wet", 430],
  ["Chilli Prawns Dry & Wet", 430],
  ["Loose Prawns", 430],
  ["Sea Food Mixed Platter", 1365]
]);

add("Mutton Starters", [
  ["Fried Mutton (Single)", 315, "Arabian Starters"],
  ["Fried Mutton (Half 2 pcs)", 630, "Arabian Starters"],
  ["Fried Mutton (Full 4 pcs)", 1260, "Arabian Starters"],
  ["Ghee Roast Mutton Curry (1 pc)", 370, "Arabian Starters"],
  ["Mutton Juicy (Single Piece)", 370, "Arabian Starters"]
]);

add("Veg Dishes", [
  ["Dal Fry", 210],
  ["Dal Tadka", 230],
  ["Dal Kolhapuri", 210],
  ["Aalu Mutter", 235],
  ["Aalu Gobi Masala", 210],
  ["Veg Chandini", 270],
  ["Veg Kolhapuri", 260],
  ["Veg Shahi Qurma", 260],
  ["Mix Veg Curry", 260],
  ["Mutter Paneer", 260],
  ["Cashew Tomato", 290],
  ["Cashew Paneer", 290],
  ["Veg Hyderabadi", 290],
  ["Kaju Masala", 290],
  ["Kadai Masala", 290],
  ["Paneer Butter Masala", 290],
  ["Paneer Chandini", 300],
  ["Mushroom Masala", 290],
  ["Mushroom Curry", 290],
  ["Cashew Mushroom", 290],
  ["Methi Chaman", 260],
  ["Egg Curry (3 eggs)", 200, "Egg Dishes"],
  ["Egg Burji (3 eggs)", 200, "Egg Dishes"],
  ["Egg Masala (3 eggs)", 200, "Egg Dishes"]
]);

add("Chicken Dishes", [
  ["Andhra Chicken", 370],
  ["Dum Ka Chicken", 370],
  ["Chicken Fry", 370],
  ["Chicken Dhanyaza", 370],
  ["Moghlai Chicken", 420],
  ["Chicken Kheema Masala", 370],
  ["Kadai Chicken", 370],
  ["Chicken Curry", 370],
  ["Methi Chicken", 370],
  ["Chicken Khorma", 370],
  ["Chicken Hyderabadi", 370],
  ["Chicken Afghani", 420],
  ["Chicken Kolhapuri", 370],
  ["Butter Chicken Boneless", 370],
  ["Chicken Chettinad", 370],
  ["Chicken Kalmi Masala (2 pcs)", 370],
  ["Chicken Roghan Josh", 400],
  ["Chicken Tikka Masala", 400],
  ["Chicken Chandini", 400],
  ["Chicken Shahi Khorma", 400],
  ["Zeeshan Spl Chicken", 420],
  ["Tandoori Masala (Half)", 420],
  ["Chicken Gravy", 370],
  ["Green Chicken", 450],
  ["Maharani Chicken", 450],
  ["Rajadhani Chicken", 450]
]);

add("Mutton Dishes", [
  ["Mutton Curry", 420],
  ["Mutton Fry", 420],
  ["Mutton Masala", 420],
  ["Mutton Kheema Masala", 420],
  ["Mutton Talahuwa", 420],
  ["Andhra Mutton", 420],
  ["Mutton Moghlayi", 450],
  ["Mutton Afghani", 450],
  ["Mutton Kolhapuri", 420],
  ["Mutton Punjabi", 420],
  ["Methi Mutton", 420],
  ["Kadai Mutton", 420],
  ["Mutton Roghan Josh", 420],
  ["Dum Ka Mutton", 420],
  ["Mutton Chandini", 420],
  ["Mutton Shahi Qurma", 420],
  ["Zeeshan Spl Mutton", 470]
]);

add("Sea Food Curries", [
  ["Fish Curry", 440],
  ["Fish Masala", 440],
  ["Prawn Curry", 440],
  ["Prawn Masala", 440],
  ["Prawns Egg Masala", 440],
  ["Prawns Butter Masala", 440]
]);

add("Prawns Dishes", [
  ["Prawn Curry", 440],
  ["Prawn Masala", 440],
  ["Prawns Egg Masala", 440],
  ["Prawns Butter Masala", 440]
]);

add("Kebabs", [
  ["Paneer Tikka", 370, "Veg Kebab"],
  ["Tandoori Chicken (Full)", 600, "Chicken Kebabs"],
  ["Tandoori Chicken (Half)", 330, "Chicken Kebabs"],
  ["Tangdi Kebab (4 pcs)", 400, "Chicken Kebabs"],
  ["Tangdi Chicken (2 pcs)", 230, "Chicken Kebabs"],
  ["Kalmi Kebab (4 pcs)", 400, "Chicken Kebabs"],
  ["Kalmi Kebab (2 pcs)", 230, "Chicken Kebabs"],
  ["Chicken Reshmi Kebab", 440, "Chicken Kebabs"],
  ["Chicken Zafrani Kebab (8 pcs)", 400, "Chicken Kebabs"],
  ["Chicken Zafrani Kebab (4 pcs)", 230, "Chicken Kebabs"],
  ["Chicken Banjara Kebab (Full)", 400, "Chicken Kebabs"],
  ["Chicken Banjara Kebab (Half)", 230, "Chicken Kebabs"],
  ["Chicken Malai Kebab (Full)", 400, "Chicken Kebabs"],
  ["Chicken Malai Kebab (Half)", 230, "Chicken Kebabs"],
  ["Chicken Tikka (Full)", 400, "Chicken Kebabs"],
  ["Chicken Tikka (Half)", 230, "Chicken Kebabs"],
  ["Bangalore Kebab (Full)", 400, "Chicken Kebabs"],
  ["Bangalore Kebab (Half)", 230, "Chicken Kebabs"],
  ["Charminar Kebab (Full)", 400, "Chicken Kebabs"],
  ["Charminar Kebab (Half)", 230, "Chicken Kebabs"],
  ["Rolling Kebab (Full)", 450, "Chicken Kebabs"],
  ["Rolling Kebab (Half)", 250, "Chicken Kebabs"]
]);

add("Indian Breads / Rotis", [
  ["Tandoori Roti", 55],
  ["Butter Roti", 65],
  ["Butter Naan", 75],
  ["Plain Naan", 75],
  ["Plain Kulcha", 75],
  ["Butter Kulcha", 75],
  ["Laccha Paratha", 85],
  ["Aaloo Paratha", 85],
  ["Garlic Naan", 85]
]);

add("Family Pack / Jumbo Specials", [
  ["Chicken Biryani Family Pack", 700, "Biryani Specials"],
  ["Chicken Biryani Party Pack", 1100, "Biryani Specials"],
  ["Double Chicken Dum Biryani", 600, "Biryani Specials"],
  ["N.V. Konaseema Biryani", 700, "Biryani Specials"],
  ["Veg Mixed Platter", 1000, "Party Platters"],
  ["Chinese Mixed Platter", 1250, "Party Platters"],
  ["Sea Food Mixed Platter", 1365, "Party Platters"],
  ["Zeeshan Arabian Mix Platter", 1360, "Mandi Specials"],
  ["Chicken Fried Mandi (Full 4 pcs)", 1200, "Mandi Specials"],
  ["Chicken Tikka Mandi (12 pcs)", 1310, "Mandi Specials"],
  ["Mutton Fried Mandi (Full 4 pcs)", 1520, "Mandi Specials"],
  ["Mutton Juicy Mandi (Full 4 pcs)", 1730, "Mandi Specials"],
  ["Mutton Ghee Roast Mandi (Full 4 pcs)", 1679, "Mandi Specials"],
  ["Fish Fried Mandi (Full 4 pcs)", 1200, "Mandi Specials"],
  ["Zeeshan Spl Mix Mandi (Full)", 1780, "Mandi Specials"],
  ["Chicken Tandoori Mandi (Full)", 1350, "Mandi Specials"],
  ["Chicken Lolipop Mandi (Full)", 1310, "Mandi Specials"]
]);

add("Mandi", [
  ["Fried Mutton (Single)", 315, "Arabian Starters"],
  ["Fried Mutton (Half 2 pcs)", 630, "Arabian Starters"],
  ["Fried Mutton (Full 4 pcs)", 1260, "Arabian Starters"],
  ["Fried Chicken (Single)", 180, "Arabian Starters"],
  ["Fried Chicken (Half 2 pcs)", 310, "Arabian Starters"],
  ["Ghee Roast Mutton Curry (1 pc)", 370, "Arabian Starters"],
  ["Mutton Juicy (Single Piece)", 370, "Arabian Starters"],
  ["Zeeshan Arabian Mix Platter", 1360, "Arabian Starters"],
  ["Fish Fried (Single)", 210, "Arabian Starters"],
  ["Fish Fried (Half 2 pcs)", 419, "Arabian Starters"],
  ["Chicken Fried Mandi (Half 2 pcs)", 630],
  ["Chicken Fried Mandi (Full 4 pcs)", 1200],
  ["Chicken Tikka Mandi (6 pcs)", 730],
  ["Chicken Tikka Mandi (12 pcs)", 1310],
  ["Mutton Fried Mandi (Half 2 pcs)", 840],
  ["Mutton Fried Mandi (Full 4 pcs)", 1520],
  ["Mutton Juicy Mandi (Half 2 pcs)", 960],
  ["Mutton Juicy Mandi (Full 4 pcs)", 1730],
  ["Mutton Zeeshan Spl Gravy Mandi (Single)", 940],
  ["Mutton Ghee Roast Mandi (Half 2 pcs)", 944],
  ["Mutton Ghee Roast Mandi (Full 4 pcs)", 1679],
  ["Fish Fried Mandi (Half 2 pcs)", 630],
  ["Fish Fried Mandi (Full 4 pcs)", 1200],
  ["Zeeshan Spl Mix Mandi (Half)", 960],
  ["Zeeshan Spl Mix Mandi (Full)", 1780],
  ["Extra Mandi Rice", 210],
  ["Chicken Tandoori Mandi (Full)", 1350],
  ["Chicken Tandoori Mandi (Half)", 750],
  ["Chicken Lolipop Mandi (Full)", 1310],
  ["Chicken Lolipop Mandi (Half)", 730]
]);

add("Fried Rice", [
  ["Zeera Rice", 210, "Rice Items"],
  ["Lemon Rice", 210, "Rice Items"],
  ["Veg Fried Rice", 180, "Rice Items"],
  ["Veg Schezwan Fried Rice", 240, "Rice Items"],
  ["Mushroom Fried Rice", 240, "Rice Items"],
  ["Paneer Fried Rice", 240, "Rice Items"],
  ["Kaju Fried Rice", 240, "Rice Items"],
  ["Baby Corn Fried Rice", 240, "Rice Items"],
  ["Ginger Fried Rice", 260, "Rice Items"],
  ["Garlic Fried Rice", 260, "Rice Items"],
  ["Hongkong Fried Rice", 260, "Rice Items"],
  ["Mixed Veg Fried Rice", 260, "Rice Items"],
  ["Egg Fried Rice", 220, "Rice Items"],
  ["Chicken Fried Rice", 260, "Rice Items"],
  ["Chicken Schezwan Fried Rice", 290, "Rice Items"],
  ["Mutton Fried Rice", 315, "Rice Items"],
  ["Mutton Schezwan Fried Rice", 340, "Rice Items"],
  ["Prawns Fried Rice", 315, "Rice Items"],
  ["Prawns Schezwan Fried Rice", 340, "Rice Items"],
  ["Mixed Non Veg Fried Rice", 340, "Rice Items"],
  ["Chicken Lollipop Fried Rice (3 pcs)", 340, "Rice Items"],
  ["Spl Fried Rice", 340, "Rice Items"],
  ["Spl Veg Fried Rice", 290, "Rice Items"],
  ["Egg Schezwan Fried Rice", 250, "Rice Items"]
]);

add("Biryani", [
  ["Chicken Dum Biryani", 330, "Biryani"],
  ["Chicken Biryani Boneless", 420, "Biryani"],
  ["Chicken Lollipop Biryani", 420, "Biryani"],
  ["Chicken Tikka Biryani", 420, "Biryani"],
  ["Chicken Fry Biryani", 420, "Biryani"],
  ["Kalmi Biryani", 420, "Biryani"],
  ["Mutton Dum Biryani", 525, "Biryani"],
  ["Mutton Fry Biryani", 475, "Biryani"],
  ["Mutton Mughlai Biryani", 500, "Biryani"],
  ["Chicken Wings Biryani (6 pcs)", 350, "Biryani"],
  ["Egg Biryani (3 eggs)", 300, "Biryani"],
  ["Fish Biryani", 440, "Biryani"],
  ["Prawns Biryani", 440, "Biryani"],
  ["Kheema Biryani", 475, "Biryani"],
  ["Mughlai Biryani", 475, "Biryani"],
  ["Veg Biryani", 260, "Biryani"],
  ["Paneer Biryani", 330, "Biryani"],
  ["Mushroom Biryani", 330, "Biryani"],
  ["Veg Shahi Biryani", 350, "Biryani"],
  ["Veg Konaseema Biryani", 375, "Biryani"],
  ["Biryani Rice", 230, "Biryani"],
  ["Veg Pulav", 260, "Biryani"],
  ["Box Dum Biryani", 270, "Biryani"],
  ["Box Fry Biryani", 315, "Biryani"],
  ["Box Wings Biryani (4 pcs)", 300, "Biryani"],
  ["Box Lollipop Biryani (2 pcs)", 315, "Biryani"],
  ["Box Tikka Biryani (2 pcs)", 315, "Biryani"],
  ["Box Kalmi Biryani (1 pc)", 315, "Biryani"]
]);

add("Noodles", [
  ["Veg Noodles", 240, "Chinese Noodles"],
  ["Egg Noodles", 250, "Chinese Noodles"],
  ["Chicken Noodles", 290, "Chinese Noodles"],
  ["Chicken Schezwan Noodles", 315, "Chinese Noodles"],
  ["Prawns Noodles", 315, "Chinese Noodles"],
  ["Mixed Non Veg Noodles", 340, "Chinese Noodles"]
]);

export const menuItems = items;
