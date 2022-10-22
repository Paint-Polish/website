import {
  v4 as uuid
} from 'uuid'

let inventory = [
  // Holoday Collection (8 shades, Dec 2021)
  {
    categories: ['holoday'],
    name: 'Everyday',
    price: '350',
    image: '/products/holoday/Everyday (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'Friday',
    price: '350',
    image: '/products/holoday/Friday (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'Monday',
    price: '350',
    image: '/products/holoday/Monday (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'Saturday',
    price: '350',
    image: '/products/holoday/Saturday (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'Sunday',
    price: '350',
    image: '/products/holoday/Sunday (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'Thursday',
    price: '350',
    image: '/products/holoday/Thursday (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'Tuesday',
    price: '350',
    image: '/products/holoday/Tuesday (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },
  {
    categories: ['holoday'],
    name: 'Wednesday',
    price: '350',
    image: '/products/holoday/Wednesday (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-holoday-collection-nail-polish-i3108280839-s15363078624.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Holoday-Collection-Nail-Polish-i.804257685.20516341327'
  },

  // Love Verse Collection (7 shades, February 2022)
  {
    categories: ['love verse'],
    name: 'Love Hopes',
    price: '350',
    image: '/products/love-verse/Love Hopes (shade bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'Love is Kind',
    price: '350',
    image: '/products/love-verse/Love is Kind (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'Love is Patient',
    price: '350',
    image: '/products/love-verse/Love is Patient (unmagnetized, bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'Love Never Fails',
    price: '350',
    image: '/products/love-verse/Love Never Fails (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'Love Perseveres',
    price: '350',
    image: '/products/love-verse/Love Perseveres (Combined bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'Love Protects',
    price: '350',
    image: '/products/love-verse/Love Protects (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },
  {
    categories: ['love verse'],
    name: 'Love Trusts',
    price: '350',
    image: '/products/love-verse/Love Trusts (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-love-verse-collection-nail-polish-i3108356504-s15363438148.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Love-Verse-Collection-Nail-Polish-i.804257685.18916344918'
  },

  // Cocktail Collection II (6 shades, January 2022)
  {
    categories: ['cocktails'],
    name: 'Aviation',
    price: '350',
    image: '/products/cocktails-ii/Aviation (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktails'],
    name: 'Bellini',
    price: '350',
    image: '/products/cocktails-ii/Bellini (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktails'],
    name: 'Black Magic',
    price: '350',
    image: '/products/cocktails-ii/Black Magic (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktails'],
    name: 'Cappuccinotini',
    price: '350',
    image: '/products/cocktails-ii/Cappuccinotini (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktails'],
    name: 'Rose',
    price: '350',
    image: '/products/cocktails-ii/Rose (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },
  {
    categories: ['cocktails'],
    name: 'Sangria',
    price: '350',
    image: '/products/cocktails-ii/Sangria (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-cocktail-collection-i-ii-nail-polish-i3108031663-s15360273703.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Cocktail-Collection-I-II-Nail-Polish-i.804257685.18116327252'
  },

  // New Year Duo Collection (2 shades, Dec 2021)
  {
    categories: ['new year duo'],
    name: 'Thank you, 2021',
    price: '350',
    image: '/products/new-year-duo/Thank you, 2021 (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-new-year-duo-collection-nail-polish-i3108265978-s15363322120.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-New-Year-Duo-Collection-Nail-Polish-i.804257685.20216346296'
  },
  {
    categories: ['new year duo'],
    name: 'Cheers to 2022',
    price: '350',
    image: '/products/new-year-duo/Cheers to 2022 (bottle).jpeg',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-new-year-duo-collection-nail-polish-i3108265978-s15363322120.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-New-Year-Duo-Collection-Nail-Polish-i.804257685.20216346296'
  },

  // Goddess Collection (9 shades, Nov 2021)
  {
    categories: ['goddess'],
    name: 'Artemis',
    price: '350',
    image: '/products/goddess/Artemis (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'Aphrodite',
    price: '350',
    image: '/products/goddess/Aphrodite (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'Aura',
    price: '350',
    image: '/products/goddess/Aura (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'Chloris',
    price: '350',
    image: '/products/goddess/Chloris (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'Daphne',
    price: '350',
    image: '/products/goddess/Daphne (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'Hemera',
    price: '350',
    image: '/products/goddess/Hemera (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'Iris',
    price: '350',
    image: '/products/goddess/Iris (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'Nyx',
    price: '350',
    image: '/products/goddess/Nyx (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
  {
    categories: ['goddess'],
    name: 'Selene',
    price: '350',
    image: '/products/goddess/Selene (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-goddess-collection-nail-polish-neutrals-diyosa-i3108149824-s15361849436.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Goddess-Collection-Nail-Polish-neutrals-diyosa-i.804257685.16777269241'
  },
 
  // Army Collection (8 shades, Sept 2021)
  {
    categories: ['army'],
    name: 'Baby Mochi',
    price: '350',
    image: '/products/army/baby mochi (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'Borahae',
    price: '350',
    image: '/products/army/borahae (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'Kookie',
    price: '350',
    image: '/products/army/kookie (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'Lil Meow',
    price: '350',
    image: '/products/army/lil meow (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'Moonchild',
    price: '350',
    image: '/products/army/moonchild (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'Taetae',
    price: '350',
    image: '/products/army/taetae (bottle).JPG',
    description: '',
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
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },
  {
    categories: ['army'],
    name: 'Baby Mochi',
    price: '350',
    image: '/products/army/baby mochi (bottle).JPG',
    description: '',
    brand: 'Paint Polish',
    currentInventory: 0,
    lazadaUrl: 'https://www.lazada.com.ph/products/paint-polish-army-collection-nail-polish-bts-bt21-kpop-i3108076713-s15361163087.html',
    shopeeUrl: 'https://shopee.ph/Paint-Polish-Army-Collection-Nail-Polish-BTS-BT21-kpop-i.804257685.21516321028'
  },

  // Ethereal Collection (7 shades, Aug 2021)
  // Time Collection (4 shades, July 2021)
  // Ever After Collection (4 shades, June 2021)
  // Seasons Collection (6 shades, May 2021)
  // Milktea Collection (5 shades, April 2021)
  // Coffee Collection (4 shades, March 2021)
  // The Essentials (6 shades, February 2021)
  // Cocktail Collection (5 shades, January 2021)
  // { 
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory