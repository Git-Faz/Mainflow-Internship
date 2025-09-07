const createUser = (name, email, password) => ({ name, email, password });

const createProduct = (name, price, description, image, category, brand) => ({
    name,
    price,
    description,
    image,
    category,
    brand,
});

export const usersData = [
    createUser("Faz Bin Laden", "faz@example.com", "password123"),
    createUser("John Doe", "john@example.com", "password456"),
    createUser("Jane Smith", "jane@example.com", "password789"),
];

export const productsData = [
  {
    "name": "Samsung Galaxy A15 5G OLED Display Assembly",
    "price": 2850,
    "description": "Original quality OLED display assembly for Samsung Galaxy A15 5G with touch screen digitizer. Complete combo folder with frame for easy installation. Compatible with A156 model variants.",
    "image": "https://mobispares.com/images/samsung-galaxy-a15-5g-display.jpg",
    "category": "Display Assembly",
    "brand": "Samsung"
  },
  {
    "name": "OnePlus 5 A5000 Display Assembly",
    "price": 3200,
    "description": "High quality LCD display assembly with touch screen for OnePlus 5 A5000. Black color complete assembly folder with all necessary components for professional repair.",
    "image": "https://mobispares.com/images/oneplus-5-display-assembly.jpg",
    "category": "Display Assembly", 
    "brand": "OnePlus"
  },
  {
    "name": "Apple iPhone XS OLED Display Screen",
    "price": 8500,
    "description": "Premium OLED display screen replacement for iPhone XS with 3D touch functionality. Original quality digitizer assembly with precise color reproduction and excellent touch sensitivity.",
    "image": "https://mobispares.com/images/iphone-xs-display.jpg",
    "category": "Display Assembly",
    "brand": "Apple"
  },
  {
    "name": "Samsung Galaxy S21 Back Camera Module",
    "price": 4200,
    "description": "Original back camera module for Samsung Galaxy S21 with 64MP main sensor, ultra-wide and telephoto lenses. Complete assembly with flex cable for professional installation.",
    "image": "https://mobispares.com/images/samsung-s21-camera.jpg",
    "category": "Camera Parts",
    "brand": "Samsung"
  },
  {
    "name": "iPhone 13 Pro Max Battery Replacement",
    "price": 3800,
    "description": "High capacity lithium-ion battery for iPhone 13 Pro Max with 4352mAh capacity. Includes battery adhesive strips and installation tools for safe replacement.",
    "image": "https://mobispares.com/images/iphone-13-pro-max-battery.jpg",
    "category": "Battery",
    "brand": "Apple"
  },
  {
    "name": "Xiaomi Redmi Note 12 Pro Charging Port Flex",
    "price": 450,
    "description": "USB Type-C charging port flex cable for Xiaomi Redmi Note 12 Pro. Includes microphone and antenna connections for complete functionality restoration.",
    "image": "https://mobispares.com/images/redmi-note-12-pro-charging-port.jpg",
    "category": "Charging Parts",
    "brand": "Xiaomi"
  },
  {
    "name": "OnePlus Nord 2 5G Speaker Assembly",
    "price": 680,
    "description": "Loud speaker assembly for OnePlus Nord 2 5G with excellent sound quality. Easy to install replacement part for damaged or non-functional speakers.",
    "image": "https://mobispares.com/images/oneplus-nord-2-speaker.jpg",
    "category": "Audio Parts",
    "brand": "OnePlus"
  },
  {
    "name": "Realme GT Master Edition Touch Screen Digitizer",
    "price": 1850,
    "description": "Capacitive touch screen digitizer for Realme GT Master Edition. High sensitivity multi-touch support with precise response and durability tested quality.",
    "image": "https://mobispares.com/images/realme-gt-master-digitizer.jpg",
    "category": "Touch Screen",
    "brand": "Realme"
  },
  {
    "name": "Vivo V23 Pro Front Camera Module",
    "price": 2200,
    "description": "50MP front camera module for Vivo V23 Pro with autofocus and dual LED flash. Complete assembly with flex cable for selfie camera replacement.",
    "image": "https://mobispares.com/images/vivo-v23-pro-front-camera.jpg",
    "category": "Camera Parts",
    "brand": "Vivo"
  },
  {
    "name": "Oppo Find X5 Pro Back Cover Glass",
    "price": 1200,
    "description": "Premium back cover glass panel for Oppo Find X5 Pro with camera lens cutout. Oleophobic coating and fingerprint resistant surface with perfect fit.",
    "image": "https://mobispares.com/images/oppo-find-x5-pro-back-cover.jpg",
    "category": "Body Parts",
    "brand": "Oppo"
  },
  {
    "name": "iPhone 14 Lightning Connector Assembly",
    "price": 1500,
    "description": "Lightning connector charging port assembly for iPhone 14. Includes headphone jack flex, microphone, and antenna connections for complete functionality.",
    "image": "https://mobispares.com/images/iphone-14-lightning-connector.jpg",
    "category": "Charging Parts",
    "brand": "Apple"
  },
  {
    "name": "Samsung Galaxy M33 5G Sim Card Tray",
    "price": 150,
    "description": "Dual SIM card tray holder for Samsung Galaxy M33 5G. Water resistant seal included for protection against moisture and dust ingress.",
    "image": "https://mobispares.com/images/samsung-m33-sim-tray.jpg",
    "category": "Accessories",
    "brand": "Samsung"
  }
]

