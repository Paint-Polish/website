import {
  v4 as uuid
} from 'uuid'

let inventory = [
  // Nail Care
  {
    categories: ['nail care'],
    name: 'Cuticle Oil',
    price: '110',
    groupImage: '/products/nail-care/Cuticle oil both 5.jpg',
    image: '/products/nail-care/Cuticle oil 3.jpg',
    description: 'These are formulated to be lightweight and quick-absorbing moisturizers. Although formulated with cuticles in mind, these may also be used in any part of the body EXCEPT face and lips.',
    notes: 'Ingredients: Shea Butter, Jojoba Oil, Sunflower Oil, Fragrance Oil',
    subvariants: [
      'BEAUTY - a pretty mix of fruity scents',
      'ALLURE - a dainty mix of lavender and orange',
      'CHARM - a sweet mix of tropical scents',
      'GLAM - a clean scent of fresh bamboo',
      'CHIC - a sassy mix of lemongrass and citrus',
      'POSH - a fresh scent of flowers and ocean',
      'STYLE - a calming mix of florals, bergamot, lemon, ginger, nutmeg, musk'
    ],
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cuticle-oil-roll-on-shimmer-nail-care-skincare-i3108242330-s15361851095.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cuticle-Oil-Roll-on-Shimmer-Nail-Care-Skincare-i.804257685.18016360554'
  },
  {
    isTrending: true,
    categories: ['nail care'],
    name: 'Cuticle Oil with Shimmer',
    price: '110',
    image: '/products/nail-care/Cuticle oil with shimmer 3.jpg',
    description: 'These are formulated to be lightweight and quick-absorbing moisturizers. Although formulated with cuticles in mind, these may also be used in any part of the body EXCEPT face and lips. Shimmers will fall to the bottom of the bottle because oils (unlike polish) do not have pigment-suspending abilities, just shake it when that happens.',
    notes: 'Ingredients: Shea Butter, Jojoba Oil, Sunflower Oil, Fragrance Oil',
    subvariants: [
      'BEAUTY - a pretty mix of fruity scents',
      'ALLURE - a dainty mix of lavender and orange',
      'CHARM - a sweet mix of tropical scents',
      'GLAM - a clean scent of fresh bamboo',
      'CHIC - a sassy mix of lemongrass and citrus',
      'POSH - a fresh scent of flowers and ocean',
      'STYLE - a calming mix of florals, bergamot, lemon, ginger, nutmeg, musk'
    ],
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cuticle-oil-roll-on-shimmer-nail-care-skincare-i3108242330-s15361851095.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cuticle-Oil-Roll-on-Shimmer-Nail-Care-Skincare-i.804257685.18016360554'
  },
  {
    categories: ['nail care'],
    name: 'Cuticle Cream',
    price: '150',
    image: '/products/nail-care/cuticle-cream.jpg',
    description: 'These are formulated to be lightweight and quick-absorbing moisturizers. Although formulated with cuticles in mind, these may also be used in any part of the body EXCEPT face and lips. For external use only.',
    notes: 'Ingredients: Distilled water, shea butter, golden jojoba oil, vitamin E oil, glycerin, stearic acid, BTMS-50, germall plus, fragrance oil',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cuticle-cream-i3321840488-s16884807347.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cuticle-Cream-Hand-Creme-Body-Lotion-Shaving-Cream-i.804257685.16584648417'
  },
  {
    categories: ['nail care'],
    name: 'Cuticle Scrub',
    price: '150',
    image: '/products/nail-care/cuticle-scrub.jpg',
    description: 'These are formulated to be lightweight and quick-absorbing moisturizers. Although formulated with cuticles in mind, these may also be used in any part of the body EXCEPT face and lips. For external use only.',
    notes: 'Ingredients: Sugar, shea butter, golden jojoba oil, vitamin E oil, glycerin, emulsifying wax, polysorbate 80, xanthan gum, stearic acid, nipaguard, fragrance oil',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cuticle-scrub-i3322015264-s16884728814.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cuticle-Sugar-Scrub-Exfoliating-Bath-i.804257685.19743605723'
  },

  // Zodiac Collection (13 shades, October 2022)
  {
    categories: ['zodiac'],
    name: 'ARIES',
    price: '400',
    groupImage: '/products/zodiac/zodiac.jpg',
    image: '/products/zodiac/aries.jpg',
    description: '♈️ ARIES (Ram) March 21 - April 19: Multichrome polish that shifts from orange to red to gold with hints of lime green at extreme angles.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'TAURUS',
    price: '400',
    image: '/products/zodiac/taurus.jpg',
    description: '♉️ TAURUS (Bull) April 20 - May 20: Multichrome polish that shifts from purple to blue to green.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'GEMINI',
    price: '400',
    image: '/products/zodiac/gemini.jpg',
    description: '♊️ GEMINI (Twins) May 21 - June 20: Multichrome polish that shifts from blue to green to gold.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'CANCER',
    price: '400',
    image: '/products/zodiac/cancer.jpg',
    description: '♋️ CANCER (Crab) June 21 - July 22: Strong bright silver magnetic polish on a clear base. This can be used alone or on top of any base polish as an extra bling!',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'LEO',
    price: '350',
    image: '/products/zodiac/leo.jpg',
    description: '♌ LEO (Lion) July 23 - August 22: Bright tangerine orange polish with a golden shimmer.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'VIRGO',
    price: '350',
    image: '/products/zodiac/virgo.jpg',
    description: '♍️ VIRGO (Virgin) August 23 - September 22: Rich earthy brown base with strong golden shimmer and green sparks.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'LIBRA',
    price: '400',
    image: '/products/zodiac/libra.jpg',
    description: '♎️ LIBRA (Balance) September 23 - October 22: Multichrome magnetic polish that shifts from gold to red to fuchsia pink on black base.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'SCORPIO',
    price: '400',
    image: '/products/zodiac/scorpio.jpg',
    description: '♏️ SCORPIO (Scorpion) October 23 - November 21: Dark emerald green filled with scattered holographic powder and black microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'SAGITTARIUS',
    price: '400',
    image: '/products/zodiac/sagittarius.jpg',
    description: '♐️ SAGITTARIUS (Archer) November 22 - December 21: Multichrome polish that shifts from gold to red to violet.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'CAPRICORN',
    price: '350',
    image: '/products/zodiac/capricorn.jpg',
    description: '♑️ CAPRICORN (Goat) December 22 - January 19: Purple shimmer on a gray base with scattered holographic powder.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'AQUARIUS',
    price: '400',
    image: '/products/zodiac/aquarius.jpg',
    description: '♒️ Aquarius (Water-bearer) January 20 - February 18: Multichrome polish that shifts from sky blue to dark blue to fuchsia/violet.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'PISCES',
    price: '400',
    image: '/products/zodiac/pisces.jpg',
    description: '♓️ PISCES (Fish) February 19 - March 20: Multichrome polish that shifts from teal to blue to purple to hints of gold at extreme angles.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },
  {
    categories: ['zodiac'],
    name: 'OPHIUCHUS',
    price: '400',
    image: '/products/zodiac/ophiuchus.jpg',
    description: 'OPHIUCHUS (Serpent-bearer; the 13th or forgotten constellation of the zodiac) November 29-December 18: Multichrome polish that shifts from green to gold to fuchsia red.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-zodiac-collection-nail-polish-i3111341875-s15384136147.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Zodiac-Collection-Nail-Polish-i.804257685.20916355289'
  },

  // Campus Collection (8 shades, Aug 2022)
  {
    categories: ['campus'],
    name: 'GO FIGHT! RED AND WHITE!',
    price: '350',
    groupImage: '/products/campus/cover photo.jpg',
    image: '/products/campus/UE (reflect flash).jpeg',
    description: 'Inspired by UE. Bright metallic red base with reflective powder. Dries textured.',
    notes: 'Reflective powder is heavy so they may settle at the bottom. Please shake well before use.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-campus-collection-nail-polish-i3111439129.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Campus-Collection-Nail-Polish-i.804257685.21616354818'
  },
  {
    categories: ['campus'],
    name: 'A-D-U! WHITE AND BLUE!',
    price: '350',
    image: '/products/campus/ADU (bottle 1).jpg',
    description: 'Inspired by Adamson University. Navy blue jelly base with holographic blue microglitters and reflective powder. Dries textured.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-campus-collection-nail-polish-i3111439129.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Campus-Collection-Nail-Polish-i.804257685.21616354818'
  },
  {
    categories: ['campus'],
    name: 'LET’S GO TAMARAWS!',
    price: '400',
    image: '/products/campus/FEU (bottle 2).jpg',
    description: 'Inspired by FEU. Yellow jelly base with green reflective microglitters and reflective powder. Dries textured.',
    notes: 'Reflective powder is heavy so they may settle at the bottom. Please shake well before use.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-campus-collection-nail-polish-i3111439129.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Campus-Collection-Nail-Polish-i.804257685.21616354818'
  },
  {
    categories: ['campus'],
    name: 'GO USTE!',
    price: '350',
    image: '/products/campus/UST Bottle.jpg',
    description: 'Inspired by UST. Yellow shimmer one-coater polish with matte black bar glitters.',
    notes: 'Bar glitters are heavy so they may settle at the bottom. Please shake well before use.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-campus-collection-nail-polish-i3111439129.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Campus-Collection-Nail-Polish-i.804257685.21616354818'
  },
  {
    categories: ['campus'],
    name: 'UP FIGHT!',
    price: '350',
    image: '/products/campus/UP_magnetized_bottle1.jpg',
    description: 'Maroon base with green magnetic pigments. Unmagnetized, it is a unique contrasting shimmer polish. Magnetizing it will reveal the 2 distinct colors.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-campus-collection-nail-polish-i3111439129.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Campus-Collection-Nail-Polish-i.804257685.21616354818'
  },
  {
    categories: ['campus'],
    name: 'ONE BIG FIGHT!',
    price: '350',
    image: '/products/campus/Ateneo (bottle A).jpg',
    description: 'Inspired by Ateneo. Royal blue metallic polish with subtle scattered holographic powder.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-campus-collection-nail-polish-i3111439129.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Campus-Collection-Nail-Polish-i.804257685.21616354818'
  },
  {
    categories: ['campus'],
    name: 'ANIMO LA SALLE!',
    price: '350',
    image: '/products/campus/DLSU bottle.jpeg',
    description: 'Inspired by DLSU. Green jelly base packed with silver-green flecks.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-campus-collection-nail-polish-i3111439129.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Campus-Collection-Nail-Polish-i.804257685.21616354818'
  },
  {
    categories: ['campus'],
    name: 'HEY! NU! LET’S GO!',
    price: '350',
    image: '/products/campus/NU - bottle 1.jpg',
    description: 'Inspired by NU. Denim blue jelly base packed with blue-gold flecks.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-campus-collection-nail-polish-i3111439129.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Campus-Collection-Nail-Polish-i.804257685.21616354818'
  },

  // Spells Collection (10 shades, March 2022)
  {
    categories: ['spells'],
    name: 'MORSMORDRE',
    price: '350',
    groupImage: '/products/spells/wizarding world teaser photo 2.jpg',
    image: '/products/spells/Charms - Morsmordre (bottle, magnetized).jpg',
    description: 'MORSMORDRE is an emerald green magnetic polish on teal base. Unmagnetized, it has a blue/green/teal shift.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['spells'],
    name: 'EXPELLIARMUS',
    price: '350',
    image: '/products/spells/Charms - Expelliarmus (bottle, magnetized).jpg',
    description: 'EXPELLIARMUS is an olive green magnetic polish on teal base. Unmagnetized, it has a green/yellow/teal shift.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['spells'],
    name: 'ALOHAMORA',
    price: '350',
    image: '/products/spells/Charms - Alohamora (bottle, magnetized).jpg',
    description: 'ALOHAMORA is a violet magnetic polish on purple base. Unmagnetized, it shifts with shades of purple.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['spells'],
    name: 'EXPECTO PATRONUM',
    price: '350',
    image: '/products/spells/Charms - Expecto Patronum (bottle, magnetized).jpg',
    description: 'EXPECTO PATRONUM is a teal blue magnetic polish on a darker teal base. Unmagnetized, it shifts with shades of blue.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['spells'],
    name: 'WINGARDIUM LEVIOSA',
    price: '350',
    image: '/products/spells/Charms - Wingardium Leviosa (bottle, magnetized).jpeg',
    description: 'WINGARDIUM LEVIOSA is a magenta magnetic polish on a purple base. Unmagnetized, it has a pink/magenta/purple shift.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['spells'],
    name: 'PETRIFICUS TOTALUS',
    price: '350',
    image: '/products/spells/Curses - Petrificus Totalus (magnetized).jpg',
    description: 'PETRIFICUS TOTALUS is a bright blue magnetic polish on purple base. Unmagnetized, it has a blue/purple/pink shift.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['spells'],
    name: 'CRUCIO',
    price: '350',
    image: '/products/spells/Curses - Crucio (magnetized).jpg',
    description: 'CRUCIO is a silver green magnetic polish on purple base. Unmagnetized, it has a blue/green/purple shift.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    isTrending: true,
    categories: ['spells'],
    name: 'SECTUMSEMPRA',
    price: '350',
    image: '/products/spells/Curses - Sectumsempra (magnetized).jpg',
    description: 'SECTUMSEMPRA is a copper magnetic polish on purple base. Unmagnetized, it has a copper/purple shift.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['spells'],
    name: 'AVADA KEDAVRA',
    price: '350',
    image: '/products/spells/Curses - Avada Kedavra (magnetized).jpg',
    description: 'AVADA KEDAVRA is a silver magnetic polish on teal base. Unmagnetized, it has a green/purple/teal shift.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['spells'],
    name: 'IMPERIO',
    price: '350',
    image: '/products/spells/Curses - Imperio (magnetized).jpg',
    description: 'IMPERIO is a purple magnetic polish on teal base. Unmagnetized, it has a purple/teal shift.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },

  // Love Verse Collection (7 shades, February 2022)
  {
    categories: ['love verse'],
    name: 'LOVE IS PATIENT',
    price: '400',
    groupImage: '/products/love-verse/Love Verse (group shot 1).jpeg',
    image: '/products/love-verse/Love is Patient (magnetized, bottle).jpeg',
    description: 'This is an old rose base with taffy pink magnetic shimmer and silver metallic flakes. When unmagnetized, it has a classy pink to gold duochrome shift.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'LOVE IS KIND',
    price: '350',
    image: '/products/love-verse/Love is Kind (bottle).jpeg',
    description: 'This is a Barbie pink base with a blush pink shimmer. Originally part of ethereal collection, this has the same formula.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'LOVE PROTECTS',
    price: '350',
    image: '/products/love-verse/Love Protects (bottle).jpeg',
    description: 'This is a purple base with subtle pink & blue shimmer topped with purple microflakes that has a golden shift.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'LOVE TRUSTS',
    price: '350',
    image: '/products/love-verse/Love Trusts (bottle).jpeg',
    description: 'This is a “very peri” polish dusted with subtle holographic powder. The perfect periwinkle pantone polish.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'LOVE HOPES',
    price: '350',
    image: '/products/love-verse/Love Hopes (shade bottle).jpeg',
    description: 'Indoors, this is a milky white polish lavender to blue aurora microglitter. Outdoors with direct exposure to sunlight, the base transitions to pale daffodil yellow.',
    notes: 'The strength of transition depends on the strength of the light source. Sunblock lotions and top coats that have UV-blocking effects may hinder the transition. Personal results may vary depending on the UV index in your area. For example, if your room/car window has UV tint, it won’t be activated inside the room/car, but will be activated if you opened the window.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'LOVE PERSEVERES',
    price: '350',
    image: '/products/love-verse/Love Perseveres (Combined bottle).jpeg',
    description: 'In the bottle at room temperature, this is a ruby red polish. Upon application on nail (warm body temperature), this transitions to a scarlet polish. When exposed to hot water, this turns to bright crimson red with pink undertones. When exposed to cold temperatures, this turns into a darker maroon shade.',
    notes: 'Thermal polish has a typical shelf life of 6 months and may begin to lose the ability to change color after that. Polishes will need to be stored in a cool/dark area to maximize shelf life. Personal results may vary depending on your personal body temperature.Store your nail polish in a cool, dry place out of the sun. Exposure to direct sunlight or extreme temperature for a lengthy period of time will damage the color-changing pigment, causing it to lose it\'s color-changing ability and get "stuck" at its last color state. Some separation of pigments may occur over time, it\'s best to give your polish a good shake or roll to redistribute the pigments evenly.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'LOVE NEVER FAILS',
    price: '400',
    image: '/products/love-verse/Love Never Fails (bottle).jpeg',
    description: 'Bright red polish filled to the brim with both holo flakes and holo powder.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },

  // Cocktail Collection II (6 shades, January 2022)
  {
    categories: ['cocktail'],
    name: 'AVIATION',
    price: '350',
    groupImage: '/products/cocktail-ii/Cocktail collection II (group pic 1).jpeg',
    image: '/products/cocktail-ii/Aviation (bottle).jpeg',
    description: 'AVIATION is a Purple jelly base nail polish with gold & iridescent flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktail'],
    name: 'BELLINI',
    price: '350',
    image: '/products/cocktail-ii/Bellini (bottle).jpeg',
    description: 'BELLINI is a Light Orange jelly base nail polish with gold & iridescent flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktail'],
    name: 'BLACK MAGIC',
    price: '350',
    image: '/products/cocktail-ii/Black Magic (bottle).jpeg',
    description: 'BLACK MAGIC is a Black jelly base nail polish with gold & iridescent flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktail'],
    name: 'CAPPUCCINOTINI',
    price: '350',
    image: '/products/cocktail-ii/Cappuccinotini (bottle).jpeg',
    description: 'CAPPUCCINOTINI is a Brown jelly base nail polish with gold & iridescent flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktail'],
    name: 'ROSE',
    price: '350',
    image: '/products/cocktail-ii/Rose (bottle).jpeg',
    description: 'ROSE is a Light Pink jelly base nail polish with gold & iridescent flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    isTrending: true,
    categories: ['cocktail'],
    name: 'SANGRIA',
    price: '350',
    image: '/products/cocktail-ii/Sangria (bottle).jpeg',
    description: 'SANGRIA is a Dark Red jelly base nail polish with gold & iridescent flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },

  // New Year Duo Collection (2 shades, Dec 2021)
  {
    categories: ['new year duo'],
    name: 'THANK YOU 2021',
    price: '350',
    groupImage: '/products/new-year-duo/New year duo group pic 1.jpeg',
    image: '/products/new-year-duo/Thank you, 2021 (bottle).jpeg',
    description: 'THANK YOU 2021 is a silver metallic polish, opaque at 2 coats.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-new-year-duo-collection-nail-polish-i3108265978-s15363322120.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-New-Year-Duo-Collection-Nail-Polish-i.804257685.20216346296'
  },
  {
    categories: ['new year duo'],
    name: 'CHEERS TO 2022',
    price: '400',
    image: '/products/new-year-duo/Cheers to 2022 (bottle).jpeg',
    description: 'CHEERS TO 2022 is a holographic flakie polish that is opaque on its own at 3 to 4 coats but is amazing when used in combination as a topper for its duo partner, THANK YOU 2021.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-new-year-duo-collection-nail-polish-i3108265978-s15363322120.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-New-Year-Duo-Collection-Nail-Polish-i.804257685.20216346296'
  },

  // Holoday Collection (8 shades, Dec 2021)
  {
    categories: ['holoday'],
    name: 'EVERYDAY',
    price: '350',
    groupImage: '/products/holoday/Holoday group pic 2.jpeg',
    image: '/products/holoday/Everyday (bottle).jpeg',
    description: 'EVERYDAY is a neutral polish filled with holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'MONDAY',
    price: '350',
    image: '/products/holoday/Monday (bottle).jpeg',
    description: 'MONDAY is a Cerulean blue polish filled with holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'TUESDAY',
    price: '350',
    image: '/products/holoday/Tuesday (bottle).jpeg',
    description: 'TUESDAY is an indigo polish filled with holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'WEDNESDAY',
    price: '350',
    image: '/products/holoday/Wednesday (bottle).jpeg',
    description: 'WEDNESDAY is a violet jelly polish packed with holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'THURSDAY',
    price: '350',
    image: '/products/holoday/Thursday (bottle).jpeg',
    description: 'THURSDAY is a bright green polish filled with holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'FRIDAY',
    price: '350',
    image: '/products/holoday/Friday (bottle).jpeg',
    description: 'FRIDAY is a red polish filled with holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'SATURDAY',
    price: '350',
    image: '/products/holoday/Saturday (bottle).jpeg',
    description: 'SATURDAY is an orange polish filled with holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'SUNDAY',
    price: '350',
    image: '/products/holoday/Sunday (bottle).jpeg',
    description: 'SUNDAY is a yellow polish filled with holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },

  // Goddess Collection (9 shades, Nov 2021)
  {
    categories: ['goddess'],
    name: 'ARTEMIS',
    price: '350',
    groupImage: '/products/goddess/Goddess group pic 1.jpg',
    image: '/products/goddess/Artemis (bottle).JPG',
    description: 'ARTEMIS, goddess of wilderness and hunt, is a mauve polish with a golden sheen.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'APHRODITE',
    price: '350',
    image: '/products/goddess/Aphrodite (bottle).JPG',
    description: 'APHRODITE, goddess of love and beauty who was formed from white foam, is an aurora iridescent hexagonal and GITD glitters with on clear base.',
    notes: 'Please note that it\'s only the glitters that glow in the dark, not the whole polish.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'AURA',
    price: '350',
    image: '/products/goddess/Aura (bottle).JPG',
    description: 'AURA, goddess of the wind and breeze, is a sheer muted brown polish filled with scattered holographic powder pigments.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'CHLORIS',
    price: '350',
    image: '/products/goddess/Chloris (bottle).JPG',
    description: 'CHLORIS, goddess of flowers, is a pale pink polish with rose-red metallic microflakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'DAPHNE',
    price: '350',
    image: '/products/goddess/Daphne (bottle).JPG',
    description: 'DAPHNE, a naiads nymph (minor goddesses of fountains and springs) who turned herself into a tree to protect her innocence and chastity, is a peachy-beige polish with a copper shimmer. Initially part of the Ethereal Collection, she fits in best with the neutral theme of this collection.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'HEMERA',
    price: '350',
    image: '/products/goddess/Hemera (bottle).JPG',
    description: 'HEMERA, goddess of day, is a white polish filled with holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'IRIS',
    price: '350',
    image: '/products/goddess/Iris (bottle).JPG',
    description: 'IRIS, goddess of rainbow, is a sheer peach polish packed with rainbow shimmers and rainbow flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'NYX',
    price: '350',
    image: '/products/goddess/Nyx (bottle).JPG',
    description: 'NYX, goddess of night and darkness, is a black polish filled with holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'SELENE',
    price: '350',
    image: '/products/goddess/Selene (bottle).JPG',
    description: 'SELENE, goddess of the moon, is a muted gray polish with teal-green-purple shifting shimmer.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },

  // Wizarding World Collection (5 shades, Oct 2021)
  {
    categories: ['wizarding world'],
    name: 'THE BRAVE',
    price: '350',
    groupImage: '/products/wizarding-world/wizarding world group pic 2.jpg',
    image: '/products/wizarding-world/The Brave (magnetized, swatch 2).jpeg',
    description: 'THE BRAVE, inspired by Gryffindor, is a red magnetic polish on black base.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['wizarding world'],
    name: 'THE WISE',
    price: '350',
    image: '/products/wizarding-world/The Wise (magnetized, swatch 2).jpeg',
    description: 'THE WISE, inspired by Ravenclaw, is a blue magnetic polish on black base',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['wizarding world'],
    name: 'THE LOYAL',
    price: '350',
    image: '/products/wizarding-world/The Loyal (magnetized, swatch 2).jpeg',
    description: 'THE LOYAL, inspired by Hufflepuff, is a yellow gold magnetic polish on black base',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['wizarding world'],
    name: 'THE CUNNING',
    price: '350',
    image: '/products/wizarding-world/The Cunning (magnetized, swatch 2).jpeg',
    description: 'THE CUNNING, inspired by Slytherin, is a green magnetic polish on black base',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },
  {
    categories: ['wizarding world'],
    name: 'ALWAYS',
    price: '350',
    image: '/products/wizarding-world/Always (magnetized, swatch 2).jpeg',
    description: 'ALWAYS, inspired by the unrequited love of Snape towards Lily, is a silvery pink magnetic polish on black base',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-wizarding-world-and-spells-collection-nail-polish-harry-potter-witch-wizard-i3108264356-s15362174830.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Wizarding-World-and-Spells-Collection-Nail-Polish-Harry-Potter-witch-wizard-i.804257685.20116569956'
  },

  // Army Collection (8 shades, Sept 2021)
  {
    categories: ['army'],
    name: 'BABY MOCHI',
    price: '350',
    groupImage: '/products/army/army group pic 1.jpg',
    image: '/products/army/baby mochi (bottle).JPG',
    description: 'Inspired by Jimin\'s microphone. BABY MOCHI is a yellow gold polish with gold shimmer.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'BORAHAE',
    price: '350',
    image: '/products/army/borahae (bottle).JPG',
    description: 'Inspired by I💜U. BORAHAE is a purple heart topper on a clear base.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'KOOKIE',
    price: '350',
    image: '/products/army/kookie (bottle).JPG',
    description: 'Inspired by Jungkook\'s microphone. KOOKIE is a glossy deep velvet purple polish.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'LIL MEOW',
    price: '350',
    image: '/products/army/lil meow (bottle).JPG',
    description: 'Inspired by Suga\'s microphone. LIL MEOW is a gunmetal black polish with subtle metallic shimmer and tiny rainbow microshimmer.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    isTrending: true,
    categories: ['army'],
    name: 'MOONCHILD',
    price: '350',
    image: '/products/army/moonchild (bottle).JPG',
    description: 'Inspired by RM\'s microphone. MOONCHILD is an icy blue polish with metallic shimmer and holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'TAETAE',
    price: '350',
    image: '/products/army/taetae (bottle).JPG',
    description: 'Inspired by V\'s microphone. TAETAE is an emerald green polish with metallic shimmer.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'WWH',
    price: '350',
    image: '/products/army/WWH (bottle).JPG',
    description: 'Inspired by Jin\'s microphone. WWH is a taffy pink polish with metallic shimmer and holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'HOBI',
    price: '350',
    image: '/products/army/hobi (bottle).JPG',
    description: 'Inspired by J‑Hope\'s microphone. HOBI is a silver with a tinge of purple polish with metallic shimmer and holographic microglitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },

  // Ethereal Collection (7 shades, Aug 2021)
  {
    categories: ['ethereal'],
    name: 'MIRAGE',
    price: '350',
    groupImage: '/products/ethereal/Ethereal group pic 1.jpg',
    image: '/products/ethereal/Mirage (bottle).jpg',
    description: 'MIRAGE is a purple polish with bright blue glow',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-ethereal-collection-nail-polish-i3108139753-s15361584710.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Ethereal-Collection-Nail-Polish-i.804257685.20216336690'
  },
  {
    categories: ['ethereal'],
    name: 'DEWDROP',
    price: '350',
    image: '/products/ethereal/Dewdrop (bottle).jpg',
    description: 'DEWDROP is a soft pale green polish with viridescent glow',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-ethereal-collection-nail-polish-i3108139753-s15361584710.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Ethereal-Collection-Nail-Polish-i.804257685.20216336690'
  },
  {
    categories: ['ethereal'],
    name: 'TULLE',
    price: '350',
    image: '/products/ethereal/Tulle (bottle).jpg',
    description: 'TULLE is a delicate baby pink polish with bright pink glow',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-ethereal-collection-nail-polish-i3108139753-s15361584710.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Ethereal-Collection-Nail-Polish-i.804257685.20216336690'
  },
  {
    categories: ['ethereal'],
    name: 'OASIS',
    price: '350',
    image: '/products/ethereal/Oasis (bottle).jpg',
    description: 'OASIS is a baby blue polish with bright blue glow',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-ethereal-collection-nail-polish-i3108139753-s15361584710.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Ethereal-Collection-Nail-Polish-i.804257685.20216336690'
  },
  {
    categories: ['ethereal'],
    name: 'HALO',
    price: '350',
    image: '/products/ethereal/Halo (bottle).jpg',
    description: 'HALO is a soft pastel yellow polish with bright yellow glow.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-ethereal-collection-nail-polish-i3108139753-s15361584710.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Ethereal-Collection-Nail-Polish-i.804257685.20216336690'
  },
  {
    categories: ['ethereal'],
    name: 'AURORA',
    price: '350',
    image: '/products/ethereal/Aurora (bottle).jpg',
    description: 'AURORA is a lavender polish with a bright yellow glow.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-ethereal-collection-nail-polish-i3108139753-s15361584710.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Ethereal-Collection-Nail-Polish-i.804257685.20216336690'
  },
  {
    categories: ['ethereal'],
    name: 'PRISM',
    price: '350',
    image: '/products/ethereal/Prism (over white, bottle, swatch).jpg',
    description: 'PRISM is a 4-point holographic star topper.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-ethereal-collection-nail-polish-i3108139753-s15361584710.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Ethereal-Collection-Nail-Polish-i.804257685.20216336690'
  },

  // Time Collection (4 shades, July 2021)
  {
    categories: ['time'],
    name: 'EVENTIDE',
    price: '350',
    groupImage: '/products/time/Time Collection group pic.JPG',
    image: '/products/time/Eventide (bottle).jpg',
    description: 'EVENTIDE is a royal blue base with shimmer and blue microglitters to represent the distant stars at night.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-time-collection-nail-polish-i3108332074-s15362568541.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Time-Collection-Nail-Polish-i.804257685.18716353657'
  },
  {
    categories: ['time'],
    name: 'TWILIGHT',
    price: '350',
    image: '/products/time/Twilight (bottle).jpg',
    description: 'TWILIGHT is a purple base with blue to purple duochrome to represent the crossover between dawn and sunrise, as well as the period between dusk and sunset.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-time-collection-nail-polish-i3108332074-s15362568541.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Time-Collection-Nail-Polish-i.804257685.18716353657'
  },
  {
    categories: ['time'],
    name: 'DUSK',
    price: '350',
    image: '/products/time/Dusk (bottle).jpg',
    description: 'DUSK is a fiery red orange base with golden shimmer at just the right angle to represent the period after sunset.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-time-collection-nail-polish-i3108332074-s15362568541.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Time-Collection-Nail-Polish-i.804257685.18716353657'
  },
  {
    categories: ['time'],
    name: 'DAWN',
    price: '350',
    image: '/products/time/Dawn (bottle).jpg',
    description: 'DAWN is a dusty yellow with shimmer and gold glitters as winks from the stars before sunrise.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-time-collection-nail-polish-i3108332074-s15362568541.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Time-Collection-Nail-Polish-i.804257685.18716353657'
  },

  // Ever After Collection (4 shades, June 2021)
  {
    categories: ['ever after'],
    name: 'DANCE WITH FAIRIES',
    price: '350',
    groupImage: '/products/ever-after/Ever After group pic 1.jpg',
    image: '/products/ever-after/Dance with fairies (macro).JPG',
    description: 'DANCE WITH FAIRIES is a soft pink base with silver metallic flakes to portray wings; sprinkled with iridescent glitters to show their ethereal magic & topped it off with fine shimmer to represent fairy dust.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-ever-after-collection-nail-polish-i3108074993-s15361638027.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Ever-After-Collection-Nail-Polish-i.804257685.21016337083'
  },
  {
    categories: ['ever after'],
    name: 'SWIM WITH MERMAIDS',
    price: '350',
    image: '/products/ever-after/Swim with mermaids (macro).JPG',
    description: 'SWIM WITH MERMAIDS is a soft sea-green base with silver & gold metallic flakes to portray the scales of the tail fin; sprinkled with iridescent glitters for a final mystical look for the underwater princess.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-ever-after-collection-nail-polish-i3108074993-s15361638027.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Ever-After-Collection-Nail-Polish-i.804257685.21016337083'
  },
  {
    categories: ['ever after'],
    name: 'RIDE A UNICORN',
    price: '350',
    image: '/products/ever-after/Ride A Unicorn (swatch).jpg',
    description: 'RIDE A UNICORN is a soft purple base with chameleon flakes reminescent of the variety of portrayals of this mythical creature; sprinkled with three different shades of metallic purple glitters left behind by its footprints.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-ever-after-collection-nail-polish-i3108074993-s15361638027.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Ever-After-Collection-Nail-Polish-i.804257685.21016337083'
  },
  {
    categories: ['ever after'],
    name: 'CHASE RAINBOWS',
    price: '350',
    image: '/products/ever-after/Chase Rainbows (bottle, swatch).JPG',
    description: 'CHASE RAINBOWS is a milky off-white base sprinkled with ROYGBIV glitters representing the seven colors of the rainbow; dusted with subtle hint of holographic pigments for an added depth to this surreal meteorological phenomenon.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-ever-after-collection-nail-polish-i3108074993-s15361638027.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Ever-After-Collection-Nail-Polish-i.804257685.21016337083'
  },

  // Seasons Collection (6 shades, May 2021)
  {
    categories: ['seasons'],
    name: 'AUTUMN',
    price: '350',
    image: '/products/seasons/Autumn (macro).jpg',
    description: 'A solar jelly packed with yellow-gold-orange-red shifting flakes that transforms from sheer gray when hidden from the sun to garnet red when exposed to sunlight.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-seasons-collection-nail-polish-i3108049641-s15360449472.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Seasons-Collection-Nail-Polish-i.804257685.19916348633'
  },
  {
    categories: ['seasons'],
    name: 'SOLSTICE',
    price: '350',
    image: '/products/seasons/Solstice (macro).jpg',
    description: 'A tri-thermal jelly packed with yellow-green-purple-pink irridescent flakes that shifts from sheer pink when hot, peach pink when warm and berry when cold.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-seasons-collection-nail-polish-i3108049641-s15360449472.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Seasons-Collection-Nail-Polish-i.804257685.19916348633'
  },
  {
    categories: ['seasons'],
    name: 'WINTER',
    price: '350',
    image: '/products/seasons/Winter (macro).jpg',
    description: 'A sheer blue jelly with a mix of various-sized blue & white, round & hexagonal chunky glitters, dusted with blue shimmer and glows bright blue in the dark.',
    brand: 'Paint Polish',
    currentInventory: 0,
    soldOut: true,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-seasons-collection-nail-polish-i3108049641-s15360449472.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Seasons-Collection-Nail-Polish-i.804257685.19916348633'
  },
  {
    categories: ['seasons'],
    name: 'EQUINOX',
    price: '350',
    image: '/products/seasons/Equinox (macro).jpg',
    description: 'A sheer purple jelly with shimmer, flecks and iridescent maple leaf chunky glitters the glows bright green in the dark.',
    brand: 'Paint Polish',
    currentInventory: 0,
    soldOut: true,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-seasons-collection-nail-polish-i3108049641-s15360449472.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Seasons-Collection-Nail-Polish-i.804257685.19916348633'
  },
  {
    categories: ['seasons'],
    name: 'SPRING',
    price: '350',
    image: '/products/seasons/Spring (macro).jpg',
    description: 'A sheer pale green (warm) to forest green (cold) thermal jelly with pearlescent shimmer and metallic duochrome maple leaf chunky glitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    soldOut: true,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-seasons-collection-nail-polish-i3108049641-s15360449472.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Seasons-Collection-Nail-Polish-i.804257685.19916348633'
  },
  {
    categories: ['seasons'],
    name: 'SUMMER',
    price: '350',
    image: '/products/seasons/Summer (macro).jpg',
    description: 'A solar jelly with gold microglitters, yellow round chunky glitters, and golden shimmer that shifts from sheer yellow when shaded from the sun to canary yellow when exposed to sunlight.',
    brand: 'Paint Polish',
    currentInventory: 0,
    soldOut: true,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-seasons-collection-nail-polish-i3108049641-s15360449472.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Seasons-Collection-Nail-Polish-i.804257685.19916348633'
  },

  // Milktea Collection (5 shades, April 2021)
  {
    categories: ['milktea'],
    name: 'CLASSIC MILKTEA',
    price: '350',
    groupImage: '/products/milktea/Milktea group pic 2.jpg',
    image: '/products/milktea/Classic Milktea (swatch).jpg',
    description: 'Mustard crelly with black, white and yellow various sized glitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-milktea-collection-nail-polish-i3108294850-s15363364042.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Milktea-Collection-Nail-Polish-i.804257685.17577270598'
  },
  {
    categories: ['milktea'],
    name: 'YAKULT MILKTEA',
    price: '350',
    image: '/products/milktea/Yakult Milktea (swatch).jpg',
    description: 'Milky off-white crelly with black, white and yellow various sized glitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-milktea-collection-nail-polish-i3108294850-s15363364042.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Milktea-Collection-Nail-Polish-i.804257685.17577270598'
  },
  {
    categories: ['milktea'],
    name: 'TARO MILKTEA',
    price: '350',
    image: '/products/milktea/Taro Milktea (swatch).jpg',
    description: 'Purple crelly with black, white and yellow various sized glitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-milktea-collection-nail-polish-i3108294850-s15363364042.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Milktea-Collection-Nail-Polish-i.804257685.17577270598'
  },
  {
    categories: ['milktea'],
    name: 'MATCHA MILKTEA',
    price: '350',
    image: '/products/milktea/Matcha Milktea (swatch).jpg',
    description: 'Green crelly with black, white and yellow various sized glitters.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-milktea-collection-nail-polish-i3108294850-s15363364042.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Milktea-Collection-Nail-Polish-i.804257685.17577270598'
  },
  // {
  //   categories: ['milktea'],
  //   name: 'SINKERS ONLY',
  //   price: '350',
  //   image: '/products/milktea/',
  //   description: 'Sheer black topper of black, white and yellow various sized glitters.',
  //   brand: 'Paint Polish',
  //   currentInventory: 0,
  //   lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-milktea-collection-nail-polish-i3108294850-s15363364042.html',
  //   shopeeUrl: 'https://shopee.ph/Paint-Polish-Milktea-Collection-Nail-Polish-i.804257685.17577270598'
  // },

  // Coffee Collection (4 shades, March 2021)
  {
    categories: ['coffee'],
    name: 'AMERICANO',
    price: '350',
    groupImage: '/products/coffee/Coffee group pic 1.JPG',
    image: '/products/coffee/Americano (bottle).JPG',
    description: 'Black jelly base with brown-gold-green shimmer with duochrome effects.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-coffee-collection-nail-polish-i3108078588-s15361433862.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Coffee-Collection-Nail-Polish-i.804257685.17577266786'
  },
  {
    categories: ['coffee'],
    name: 'MOCHA',
    price: '350',
    image: '/products/coffee/Mocha (bottle).JPG',
    description: 'Brown base filled with golden brown shimmer.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-coffee-collection-nail-polish-i3108078588-s15361433862.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Coffee-Collection-Nail-Polish-i.804257685.17577266786'
  },
  {
    categories: ['coffee'],
    name: 'LATTE',
    price: '350',
    image: '/products/coffee/Latte (bottle).JPG',
    description: 'Milky brown creme with a hint of brown shimmer.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-coffee-collection-nail-polish-i3108078588-s15361433862.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Coffee-Collection-Nail-Polish-i.804257685.17577266786'
  },
  {
    categories: ['coffee'],
    name: 'MACCHIATO',
    price: '350',
    image: '/products/coffee/Macchiato (bottle).JPG',
    description: 'Brown base with holo pigments, holo flakes and brown to gold shimmer. This one dries a bit textured so top coat is highly recommended.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-coffee-collection-nail-polish-i3108078588-s15361433862.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Coffee-Collection-Nail-Polish-i.804257685.17577266786'
  },
  
  // The Essentials (6 shades, February 2021)
  {
    categories: ['the essentials'],
    name: 'Top Coat',
    price: '150',
    groupImage: '/products/essentials/The Essentials group photo 2.jpg',
    image: '/products/essentials/(Glossy) top coat.jpg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-the-essentials-nail-polish-i3108422232-s15363518042.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-The-Essentials-Nail-Polish-i.804257685.14388807901'
  },
  {
    categories: ['the essentials'],
    name: 'Matte Top Coat',
    price: '250',
    image: '/products/essentials/Matte top coat.jpg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-the-essentials-nail-polish-i3108422232-s15363518042.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-The-Essentials-Nail-Polish-i.804257685.14388807901'
  },
  {
    categories: ['the essentials'],
    name: 'Tinted Base Coat',
    price: '350',
    image: '/products/essentials/Tinted base coat.jpg',
    description: 'This functions like a primer: it conceals any stain or uneven discoloration of your nails and softens / blurs the line between the free edge and the nail bed (called visible nail line or VNL) for a smooth transition underneath sheer and jelly polishes. It will also help conserve your favorite polish by allowing use of fewer coats. This is your typical basecoat but with a twist.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-the-essentials-nail-polish-i3108422232-s15363518042.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-The-Essentials-Nail-Polish-i.804257685.14388807901'
  },
  {
    categories: ['the essentials'],
    name: 'Scented Top Coat',
    price: '200',
    groupImage: '/products/essentials/The Essentials group photo 2.jpg',
    image: '/products/essentials/(Glossy) top coat.jpg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-the-scented-essentials-collection-nail-polish-i3110332039-s15377765827.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-The-Scented-Essentials-Collection-Nail-Polish-i.804257685.17477271822'
  },
  {
    categories: ['the essentials'],
    name: 'Scented Matte Top Coat',
    price: '300',
    image: '/products/essentials/Matte top coat.jpg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-the-scented-essentials-collection-nail-polish-i3110332039-s15377765827.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-The-Scented-Essentials-Collection-Nail-Polish-i.804257685.17477271822'
  },
  {
    categories: ['the essentials'],
    name: 'Scented Tinted Base Coat',
    price: '400',
    image: '/products/essentials/Tinted base coat.jpg',
    description: 'This functions like a primer: it conceals any stain or uneven discoloration of your nails and softens / blurs the line between the free edge and the nail bed (called visible nail line or VNL) for a smooth transition underneath sheer and jelly polishes. It will also help conserve your favorite polish by allowing use of fewer coats. This is your typical basecoat but with a twist.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-the-scented-essentials-collection-nail-polish-i3110332039-s15377765827.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-The-Scented-Essentials-Collection-Nail-Polish-i.804257685.17477271822'
  },
  {
    categories: ['the essentials'],
    name: 'Rose Quartz Top Coat',
    price: '200',
    image: '/products/essentials/Rose quartz top coat.jpg',
    description: 'ROSE QUARTZ INFUSED TOP COAT: Inspired by cystals and chakras (and rose quartz facial massage roller) This is your typical top coat that is meant to seal your manicure with a glossy finish but with an added benefits of genuine crystal infusion. Rose quartz, the universal stone of love, supposedly attracts and strengthens unconditional love. and opens the heart chakra, which allows the energy of giving and receiving love to others in relationships. This energy can also help heal heartbreaks from wounded relationships. It encourages feelings and expressions of warmth, happiness, compassion, understanding, respect, emotional health, and self-love.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-the-essentials-nail-polish-i3108422232-s15363518042.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-The-Essentials-Nail-Polish-i.804257685.14388807901'
  },
  {
    categories: ['the essentials'],
    name: 'Jade Top Coat',
    price: '200',
    image: '/products/essentials/Jade top coat.jpg',
    description: 'JADE INFUSED TOP COAT:Inspired by cystals and chakras (and jade bracelets 😁) This is your typical top coat that is meant to seal your manicure with a glossy finish but with an added benefits of genuine crystal infusion.Jade has long been considered a lucky stone. Also known as the happiness stone, it attracts prosperity, abundance and good fortune. It is one of the most treasured stones in China, where Feng Shui was developed. Lighter, more translucent type of Jade is considered as having softer energiesand is referred to as being yin. Darker, more opaque type of Jade are said to have stronger, bigger energy, and is considered to be yang.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-the-essentials-nail-polish-i3108422232-s15363518042.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-The-Essentials-Nail-Polish-i.804257685.14388807901'
  },
  {
    categories: ['the essentials'],
    name: 'Amethyst Top Coat',
    price: '200',
    image: '/products/essentials/Amethyst top coat.jpg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-the-essentials-nail-polish-i3108422232-s15363518042.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-The-Essentials-Nail-Polish-i.804257685.14388807901'
  },

  // Cocktail Collection (5 shades, January 2021)
  {
    categories: ['cocktail'],
    name: 'MARTINI',
    price: '350',
    image: '/products/cocktail-i/Martini (swatch 1).jpeg',
    description: 'MARTINI is a White crelly base nail polish with gold & iridescent flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273706.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktail'],
    name: 'BLUE LAGOON',
    price: '350',
    image: '/products/cocktail-i/Blue Lagoon (swatch).jpg',
    description: 'BLUE LAGOON is a Blue jelly base nail polish with gold & iridescent flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273706.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktail'],
    name: 'MARGARITA',
    price: '350',
    image: '/products/cocktail-i/Margarita (swatch 1).jpeg',
    description: 'MARGARITA is a Green jelly base nail polish with gold & iridescent flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273706.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktail'],
    name: 'COSMOPOLITAN',
    price: '350',
    image: '/products/cocktail-i/Cosmopolitan (swatch 1).jpeg',
    description: 'COSMOPOLITAN is a Red jelly base nail polish with gold & iridescent flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273706.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktail'],
    name: 'SCREWDRIVER',
    price: '350',
    image: '/products/cocktail-i/Screwdriver (swatch).jpg',
    description: 'SCREWDRIVER is a Orange jelly base nail polish with gold & iridescent flakes.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273706.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },

  // Miscellaneous
  {
    categories: ['miscellaneous'],
    name: 'Thinner',
    price: '30',
    groupImage: '/products/miscellaneous/Nail polish solvent_thinner (10ml).jpg',
    image: '/products/miscellaneous/Nail polish solvent_thinner (10ml).jpg',
    description: 'Nail polish thinner that refreshes thickened nail polish by replacing solvents (butyl acetate and ethyl acetate) lost through evaporation. This is toluene-free so it can be used on polishes with special effects like flakies, glitters and holo pigments. 18.5ml/bottle',
    notes: 'Directions: Gradually add 5-10 drops to thickened nail polish. Shake well (better if shaken with mixing 2 balls).',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-5-free-nail-polish-solvent-thinner-i3108281999-s15363325680.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-5-Free-Nail-Polish-Solvent-Thinner-i.804257685.19816352145'
  },
  {
    categories: ['miscellaneous'],
    name: 'DIY Nail Polish Kit',
    price: '500',
    image: '/products/miscellaneous/DIY Nail Polish Kit.jpg',
    description: 'Make your own nail polish at home. Inclusions:',
    subvariants: [
      '5-free nail polish base',
      '22ml (regular polish, not gel, not water-based)',
      '5 organic pigments (black, white, red, blue, yellow)',
      '1 nail polish thinner/solvent',
      '2 empty bottles with wide paddle brush',
      '4 stainless steel mixing balls (2 per bottle)',
      '2 adjustable DIY ring',
      '2 glass cabachon gems (for the ring)',
      '2 plastic mixing cups4 fake nails (for swatching)',
      '1 pair of disposable wooden chopstick or spoon'
    ],
    notes: 'Disclaimers: Special Effects pigments will be listed and sold separately. Ziplocks are brand new but are overproduction stocks, so they have printed brand logos.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-diy-nail-polish-kit-i3108329625-s15363268566.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-DIY-Nail-Polish-Kit-i.804257685.19516576380'
  },

  // Stamping Plates
  {
    categories: ['nail art'],
    name: 'Sailor Moon Nail Art Stamping Plate',
    price: '250',
    groupImage: '/products/nail-art/stamping-plates-group.jpg',
    image: '/products/nail-art/sailor-moon-stamping-plate.jpg',
    description: 'Size 6 x 12cm with whiteboard at the back.',
    notes: 'Please note that these will be packaged in 💯 recycled packaging material.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-sailormoon-bts-blackpink-nail-art-stamping-plate-i2160599043-s9650258600.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Sailormoon-BTS-Blackpink-Nail-Art-Stamping-Plate-i.804257685.16477271951'
  },
  {
    categories: ['nail art'],
    name: 'BTS Nail Art Stamping Plate',
    price: '250',
    image: '/products/nail-art/bts-stamping-plate.jpg',
    description: 'Size 6 x 12cm with whiteboard at the back.',
    notes: 'Please note that these will be packaged in 💯 recycled packaging material.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-sailormoon-bts-blackpink-nail-art-stamping-plate-i2160599043-s9650258600.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Sailormoon-BTS-Blackpink-Nail-Art-Stamping-Plate-i.804257685.16477271951'
  },
  {
    categories: ['nail art'],
    name: 'Blackpink Nail Art Stamping Plate',
    price: '250',
    image: '/products/nail-art/blackpink-stamping-plate.jpg',
    description: 'Size 6 x 12cm with whiteboard at the back.',
    notes: 'Please note that these will be packaged in 💯 recycled packaging material.',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-sailormoon-bts-blackpink-nail-art-stamping-plate-i2160599043-s9650258600.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Sailormoon-BTS-Blackpink-Nail-Art-Stamping-Plate-i.804257685.16477271951'
  },
  
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory