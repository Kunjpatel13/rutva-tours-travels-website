/**
 * Rutva Tours & Travels - Master Application Script
 * Modular ES6 Engine for search tabs, package filters, modal Popups,
 * cab calculator, branch office live search, reviews carousel,
 * and context-aware WhatsApp CTA dispatch.
 */

// Global Business Configuration
const CONFIG = {
  COMPANY_NAME: "Rutva Tours & Travels",
  PHONE_NUMBER: "917069300077", // Primary WhatsApp Business Contact Number
  TEL_NUMBER: "+917069300077",
  DISPLAY_PHONE: "+91 70693 00077",
  EMAIL: "rutvamultiservices@gmail.com",
  INSTAGRAM_URL: "https://www.instagram.com/rutva_tours_and_travels?igsh=bnF0N3Z1bnVnNzlp&igsi=bnF0N3Z1bnVnNzlp&utm_source=qr"
};

// Global Helper to Generate Contextual WhatsApp Links
function buildWhatsAppUrl(customText) {
  const encodedText = encodeURIComponent(customText);
  return `https://wa.me/${CONFIG.PHONE_NUMBER}?text=${encodedText}`;
}

// Packages Data Repository (Domestic & International)
const PACKAGES_DATA = [
  // Domestic Packages
  {
    id: "pkg-1",
    title: "Magical Kashmir & Gulmarg Paradise",
    category: "domestic",
    badge: "Best Seller",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    overview: "Explore Srinagar houseboat stay, Gulmarg gondola ride, Pahalgam valleys, and Sonamarg snow peaks.",
    totalCapacity: 15,
    remainingSlots: 3,
    price: 18999,
    itinerary: [
      "Day 1: Arrival in Srinagar & Shikara Ride on Dal Lake",
      "Day 2: Srinagar to Gulmarg - Gondola Cable Car Ride",
      "Day 3: Gulmarg to Pahalgam - Betaab Valley & Chandanwari",
      "Day 4: Pahalgam Local Sightseeing & Aru Valley",
      "Day 5: Excursion to Sonamarg - Glacier View",
      "Day 6: Departure from Srinagar Airport"
    ],
    inclusions: ["Houseboat & Luxury Hotel Stay", "Daily Breakfast & Dinner", "All Internal Transfers by Private Cab", "Driver Allowances & Tolls"]
  },
  {
    id: "pkg-3",
    title: "Royal Rajasthan Forts & Palaces",
    category: "domestic",
    badge: "Heritage Special",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    overview: "Discover Jaipur Amber Fort, Jodhpur Blue City, Jaisalmer Sam Sand Dunes safari, and Udaipur lakes.",
    totalCapacity: 20,
    remainingSlots: 5,
    price: 21499,
    itinerary: [
      "Day 1: Arrival in Jaipur - Pink City Sightseeing & Hawa Mahal",
      "Day 2: Jaipur Amber Fort, Jaigarh & City Palace",
      "Day 3: Jaipur to Jodhpur - Mehrangarh Fort & Jaswant Thada",
      "Day 4: Jodhpur to Jaisalmer - Desert Camp & Camel Safari",
      "Day 5: Jaisalmer Fort & Patwon Ki Haveli",
      "Day 6: Jaisalmer to Udaipur - City Palace & Lake Pichola Cruise",
      "Day 7: Departure from Udaipur Airport/Station"
    ],
    inclusions: ["Heritage Hotel Stays", "Desert Camping with Folk Dance & Dinner", "Daily Breakfast", "Sightseeing Cab"]
  },
  {
    id: "pkg-5",
    title: "Kerala Backwaters & Munnar Hills",
    category: "domestic",
    badge: "Best Seller",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    overview: "Munnar tea gardens, Alleppey private luxury houseboat cruise, Thekkady spice plantation, and Kovalam beach.",
    totalCapacity: 15,
    remainingSlots: 6,
    price: 16999,
    itinerary: [
      "Day 1: Arrival in Cochin & Transfer to Munnar Tea Gardens",
      "Day 2: Munnar Sightseeing - Eravikulam Park & Mattupetty Dam",
      "Day 3: Munnar to Thekkady - Spice Plantation & Boating",
      "Day 4: Thekkady to Alleppey - Overnight Houseboat Stay",
      "Day 5: Alleppey to Kovalam Beach Resort",
      "Day 6: Departure from Trivandrum Airport"
    ],
    inclusions: ["Resort & Houseboat Stay", "All Meals on Houseboat", "Daily Breakfast at Hotels", "Private AC Sedan Transfer"]
  },
  {
    id: "pkg-7",
    title: "Spiritual Gujarat - Dwarka & Somnath Yatra",
    category: "domestic",
    badge: "Gujarat Special",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    overview: "Dwarkadhish Temple darshan, Nageshwar Jyotirlinga, Bet Dwarka boat ride, Somnath Temple light show, and Gir National Park.",
    totalCapacity: 25,
    remainingSlots: 8,
    price: 13999,
    itinerary: [
      "Day 1: Arrival in Ahmedabad/Rajkot & Drive to Dwarka",
      "Day 2: Dwarkadhish Temple, Bet Dwarka & Nageshwar Temple",
      "Day 3: Drive to Porbandar (Kirti Mandir) & Somnath Temple",
      "Day 4: Somnath Light & Sound Show, Drive to Sasan Gir",
      "Day 5: Sasan Gir Jungle Safari & Departure from Rajkot"
    ],
    inclusions: ["3-Star Deluxe Hotels", "Pure Veg Breakfast & Dinner", "Dedicated Driver & AC Vehicle", "VIP Temple Darshan Assistance"]
  },
  {
    id: "pkg-9",
    title: "Himachal Snow Valleys - Shimla & Manali",
    category: "domestic",
    badge: "Popular Pick",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    overview: "Mall Road Shimla, Kufri snow viewpoint, Solang Valley sports, Atal Tunnel, and Kasol Manikaran Sahib.",
    totalCapacity: 18,
    remainingSlots: 4,
    price: 17499,
    itinerary: [
      "Day 1: Delhi/Chandigarh pick-up & Drive to Shimla",
      "Day 2: Kufri Adventure Park & Shimla Ridge Walk",
      "Day 3: Scenic Drive from Shimla to Manali via Kullu Valley",
      "Day 4: Solang Valley Paragliding & Snow Activities",
      "Day 5: Atal Tunnel Excursion & Sissu Lake Visit",
      "Day 6: Kasol Cafe Hopping & Manikaran Sahib Hot Springs",
      "Day 7: Drive back to Delhi/Chandigarh"
    ],
    inclusions: ["Valley View Deluxe Hotels", "Daily Breakfast & Dinner", "Private AC Cab Transfer", "Sightseeing & Tolls"]
  },
  {
    id: "pkg-10",
    title: "Golden Triangle - Delhi, Agra Taj Mahal & Jaipur",
    category: "domestic",
    badge: "Must Visit",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    overview: "Explore India's most iconic heritage corridor featuring Qutub Minar, Agra Taj Mahal sunrise, and Amber Fort.",
    totalCapacity: 20,
    remainingSlots: 7,
    price: 15999,
    itinerary: [
      "Day 1: Delhi Arrival & Red Fort, Qutub Minar Sightseeing",
      "Day 2: Drive to Agra & Sunset View of Taj Mahal",
      "Day 3: Sunrise Taj Mahal Visit, Agra Fort & Drive to Fatehpur Sikri to Jaipur",
      "Day 4: Jaipur Amber Fort, Hawa Mahal & Jal Mahal",
      "Day 5: Shopping at Johari Bazaar & Drop at Delhi Airport"
    ],
    inclusions: ["4-Star Heritage Hotels", "Daily Breakfast", "Monument Entry Assistance", "Private AC Sedan"]
  },
  {
    id: "pkg-11",
    title: "Leh Ladakh High Passes & Pangong Lake",
    category: "domestic",
    badge: "Adventure Special",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    overview: "Khardung La Pass (highest motorable road), Nubra Valley double-hump camel ride, Magnetic Hill, and Pangong Tso blue lake.",
    totalCapacity: 12,
    remainingSlots: 2,
    price: 29999,
    itinerary: [
      "Day 1: Arrival at Leh Airport & Acclimatization Rest",
      "Day 2: Leh Local Sightseeing - Shanti Stupa & Hall of Fame",
      "Day 3: Leh to Nubra Valley via Khardung La Pass",
      "Day 4: Diskit Monastery & Hunder Sand Dunes Camel Safari",
      "Day 5: Nubra to Pangong Tso Lake via Shyok River Route",
      "Day 6: Pangong Sunrise, Return to Leh via Chang La Pass",
      "Day 7: Transfer to Leh Kushok Bakula Airport"
    ],
    inclusions: ["Oxygen Cylinder equipped SUV", "Luxury Camp & Hotel Stay", "Inner Line Permits", "Breakfast & Dinner Included"]
  },
  {
    id: "pkg-12",
    title: "Andaman Emerald Islands & Scuba Beach",
    category: "domestic",
    badge: "Island Getaway",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
    overview: "Port Blair Cellular Jail light show, Havelock Island Radhanagar Beach (Asia's best beach), and Elephant Beach snorkeling.",
    totalCapacity: 14,
    remainingSlots: 5,
    price: 26999,
    itinerary: [
      "Day 1: Arrival in Port Blair & Cellular Jail Light & Sound Show",
      "Day 2: High-speed Catamaran Cruise from Port Blair to Havelock",
      "Day 3: Radhanagar Beach Sunset & Scuba Diving Experience",
      "Day 4: Speedboat to Elephant Beach for Snorkeling & Water Sports",
      "Day 5: Ferry to Neil Island (Bharatpur & Laxmanpur Beach) to Port Blair",
      "Day 6: Airport Departure from Port Blair"
    ],
    inclusions: ["Beachfront Resort Stay", "Makruzz / Nautika Cruise Tickets", "Daily Buffet Breakfast", "All Island Airport Transfers"]
  },

  // International Packages
  {
    id: "pkg-2",
    title: "Exotic Bali Beach & Temple Retreat",
    category: "international",
    badge: "Popular Pick",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    overview: "Experience Ubud rice terraces, Uluwatu cliff sunset, Nusa Penida island tour, and luxury pool villa.",
    totalCapacity: 12,
    remainingSlots: 4,
    price: 42999,
    itinerary: [
      "Day 1: Arrival in Bali, Transfer to Ubud Private Villa",
      "Day 2: Kintamani Volcano, Rice Terrace & Swing Adventure",
      "Day 3: Ubud Monkey Forest & Tanah Lot Temple Sunset",
      "Day 4: Nusa Penida Full Day Island Speedboat Tour",
      "Day 5: Transfer to Seminyak & Water Sports at Tanjung Benoa",
      "Day 6: Uluwatu Temple & Kecak Dance Show with Seafood Dinner",
      "Day 7: Leisure & Airport Transfer"
    ],
    inclusions: ["4-Star Hotel & Private Pool Villa", "Daily Buffet Breakfast & Dinners", "Nusa Penida Island Tour with Lunch", "Airport Transfers"]
  },
  {
    id: "pkg-4",
    title: "Dazzling Dubai & Abu Dhabi Extravaganza",
    category: "international",
    badge: "Trending",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    overview: "Ascend Burj Khalifa 124th floor, Desert Safari with BBQ, Dhow Cruise, and Sheikh Zayed Grand Mosque.",
    totalCapacity: 16,
    remainingSlots: 2,
    price: 54999,
    itinerary: [
      "Day 1: Arrival in Dubai & Marina Dhow Cruise Dinner",
      "Day 2: Half-day City Tour & Burj Khalifa 124th Floor Observatory",
      "Day 3: Dubai Frame & Thrilling Desert Safari with BBQ Dinner",
      "Day 4: Full Day Abu Dhabi Tour & Sheikh Zayed Mosque & Louvre",
      "Day 5: Shopping at Dubai Mall & Airport Departure"
    ],
    inclusions: ["4-Star Hotel Stay", "UAE Tourist Visa & Insurance", "Burj Khalifa & Desert Safari Tickets", "Airport Pick & Drop"]
  },
  {
    id: "pkg-6",
    title: "Vietnam & Halong Bay Cruise Adventure",
    category: "international",
    badge: "New Release",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    overview: "Hanoi Old Quarter, 5-Star Halong Bay Cruise, Da Nang Golden Hand Bridge, and Hoi An Lantern City.",
    totalCapacity: 14,
    remainingSlots: 4,
    price: 49999,
    itinerary: [
      "Day 1: Arrival in Hanoi, Street Food Tour",
      "Day 2: Hanoi to Halong Bay - Board 5-Star Luxury Cruise",
      "Day 3: Halong Kayaking, Fly to Da Nang",
      "Day 4: Ba Na Hills & Famous Golden Hands Bridge",
      "Day 5: Hoi An Ancient Town & Basket Boat River Ride",
      "Day 6: Da Nang Marble Mountains & Dragon Bridge",
      "Day 7: Departure from Da Nang International Airport"
    ],
    inclusions: ["5-Star Halong Bay Cruise Stay", "4-Star Hotels in Hanoi & Da Nang", "Domestic Flight Hanoi to Da Nang", "All Entrance Tickets & Meals"]
  },
  {
    id: "pkg-8",
    title: "Enchanting Thailand - Phuket & Krabi",
    category: "international",
    badge: "Best Seller",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    overview: "Phi Phi Island speedboat tour, James Bond Island, Krabi 4-Island Hop, and Big Buddha view.",
    totalCapacity: 18,
    remainingSlots: 5,
    price: 36999,
    itinerary: [
      "Day 1: Arrival in Phuket, Transfer to Hotel & Patong Beach Nightlife",
      "Day 2: Phi Phi & Maya Bay Speedboat Tour with Buffet Lunch",
      "Day 3: Phuket City Tour & Big Buddha, Drive to Krabi",
      "Day 4: Krabi 4-Island Tour by Longtail Boat & Snorkeling",
      "Day 5: Leisure Day / Emerald Pool & Hot Springs Visit",
      "Day 6: Departure from Krabi Airport"
    ],
    inclusions: ["Beachfront Resort Stay", "Island Speedboat Tours with Lunch", "Daily Buffet Breakfast", "All Transfers"]
  },
  {
    id: "pkg-13",
    title: "Singapore & Sentosa Island Fantasy",
    category: "international",
    badge: "Family Special",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    overview: "Universal Studios Singapore, Gardens by the Bay Light Show, Night Safari, and Cable Car to Sentosa.",
    totalCapacity: 15,
    remainingSlots: 3,
    price: 58999,
    itinerary: [
      "Day 1: Arrival at Changi Airport & Night Safari Tram Ride",
      "Day 2: City Tour, Merlion Park & Gardens by the Bay Supertree Light Show",
      "Day 3: Full Day Universal Studios Singapore Rides & Shows",
      "Day 4: Cable Car Ride to Sentosa Island, S.E.A Aquarium & Wings of Time",
      "Day 5: Jewel Changi Rain Vortex Sightseeing & Flight Departure"
    ],
    inclusions: ["4-Star Hotel Stay", "Universal Studios & Sentosa Tickets", "Singapore Tourist Visa", "Daily Breakfast"]
  },
  {
    id: "pkg-14",
    title: "Maldives Luxury Overwater Bungalow Escape",
    category: "international",
    badge: "Honeymoon Special",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    overview: "Stay in luxury overwater villas, private speedboat transfers, sunset dolphin cruise, and snorkeling reefs.",
    totalCapacity: 10,
    remainingSlots: 2,
    price: 79999,
    itinerary: [
      "Day 1: Male Airport Arrival & Speedboat Transfer to Private Island Resort",
      "Day 2: Ocean Villa Relaxation & Coral Reef Snorkeling",
      "Day 3: Sunset Dolphin Cruise with Champagne",
      "Day 4: Water Sports Adventure - Kayaking & Jet Skiing",
      "Day 5: Farewell Breakfast & Speedboat Transfer to Airport"
    ],
    inclusions: ["Overwater Villa Stay", "All Inclusive Meals & Drinks", "Speedboat Airport Transfers", "Green Tax Included"]
  },
  {
    id: "pkg-15",
    title: "European Dream - Paris, Swiss Alps & Venice",
    category: "international",
    badge: "Grand Tour",
    duration: "10 Days / 9 Nights",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
    overview: "Eiffel Tower top level, Seine River cruise, Swiss Mt. Titlis cable car, Lucerne lake, and Venice Gondola ride.",
    totalCapacity: 16,
    remainingSlots: 4,
    price: 145999,
    itinerary: [
      "Day 1: Arrival in Paris & Eiffel Tower Illumination Tour",
      "Day 2: Louvre Museum & Seine River Cruise",
      "Day 3: Paris to Switzerland (Zurich/Lucerne) via Scenic TGV Train",
      "Day 4: Mount Titlis Rotair Cable Car & Ice Flyer",
      "Day 5: Jungfraujoch Top of Europe Day Tour",
      "Day 6: Scenic Drive through Swiss Alps into Italy (Milan)",
      "Day 7: Venice Island Gondola Ride & St. Mark's Square",
      "Day 8: Florence Duomo & Leaning Tower of Pisa",
      "Day 9: Rome Colosseum & Vatican City Tour",
      "Day 10: Departure from Rome Airport"
    ],
    inclusions: ["4-Star Hotel Stays", "Schengen Visa Assistance", "High Speed Train & Coach Transfers", "Daily Breakfast & Dinners"]
  },
  {
    id: "pkg-16",
    title: "Japan Cherry Blossom & Tokyo Explorer",
    category: "international",
    badge: "Trending",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    overview: "Tokyo Shibuya Crossing, Mount Fuji 5th Station, Kyoto Fushimi Inari Shrine, and Bullet Train Shinkansen experience.",
    totalCapacity: 12,
    remainingSlots: 3,
    price: 119999,
    itinerary: [
      "Day 1: Arrival in Tokyo Haneda/Narita & Shinjuku Night Tour",
      "Day 2: Tokyo Skytree, Sensoji Temple & Shibuya Crossing",
      "Day 3: Day Trip to Mount Fuji & Lake Kawaguchiko Ropeway",
      "Day 4: Ride Shinkansen Bullet Train to Kyoto",
      "Day 5: Fushimi Inari 10,000 Torii Gates & Arashiyama Bamboo Grove",
      "Day 6: Nara Deer Park & Osaka Dotonbori Street Food",
      "Day 7: Flight Departure from Osaka Kansai Airport"
    ],
    inclusions: ["4-Star Hotels", "JR Pass Bullet Train Ticket", "Japan Tourist Visa", "All Entrance Tickets & Tours"]
  }
];

// Branch Offices Across India (Clean name & state representation)
const BRANCHES_DATA = [
  { name: "Mumbai Branch", state: "Maharashtra", type: "Metro Hub", code: "BOM" },
  { name: "Bengaluru Branch", state: "Karnataka", type: "Metro Hub", code: "BLR" },
  { name: "Kolkata Branch", state: "West Bengal", type: "Metro Hub", code: "CCU" },
  { name: "Pune Branch", state: "Maharashtra", type: "Commercial Hub", code: "PNQ" },
  { name: "Tamil Nadu Branch (Chennai)", state: "Tamil Nadu", type: "Metro Hub", code: "MAA" },
  { name: "Ahmedabad Branch", state: "Gujarat", type: "Regional HQ", code: "AMD" },
  { name: "Surat Branch", state: "Gujarat", type: "Executive Hub", code: "STV" },
  { name: "Vadodara Branch", state: "Gujarat", type: "Executive Hub", code: "BDQ" },
  { name: "Rajkot Branch", state: "Gujarat", type: "Executive Center", code: "RAJ" },
  { name: "Anand Central Branch", state: "Gujarat", type: "Central HQ", code: "QFD" },
  { name: "Navsari Branch", state: "Gujarat", type: "Executive Center", code: "NVS" },
  { name: "Vapi Branch", state: "Gujarat", type: "Industrial Hub", code: "VAPI" },
  { name: "Valsad Branch", state: "Gujarat", type: "Executive Center", code: "VSD" },
  { name: "Nadiad Branch", state: "Gujarat", type: "Executive Center", code: "NDD" },
  { name: "Bhavnagar Branch", state: "Gujarat", type: "Executive Center", code: "BHU" },
  { name: "Dwarka Branch", state: "Gujarat", type: "Pilgrimage Center", code: "DWK" },
  { name: "Bharuch Branch", state: "Gujarat", type: "Executive Center", code: "BH" },
  { name: "Jambusar Branch", state: "Gujarat", type: "Executive Center", code: "JMB" }
];

// Initialize Application Engine
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initSearchTabs();
  renderPackageCards("all");
  initPackageFilters();
  renderBranchOffices(BRANCHES_DATA);
  initRegionFilterBtns();
  initBranchSearch();
  initCabCalculator();
  initReviewsCarousel();
  initWhatsAppCTAListeners();
});

// Hero Background Image Slider
function initHeroSlider() {
  const slides = document.querySelectorAll(".slide-item");
  if (slides.length === 0) return;
  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 5000);
}

// Search Box Tab Switcher
function initSearchTabs() {
  const tabBtns = document.querySelectorAll(".search-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  const searchForm = document.getElementById("heroSearchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const activeTab = document.querySelector(".search-tab-btn.active")?.innerText || "Tour Package";
      const dest = document.getElementById("searchDest").value;
      const date = document.getElementById("searchDate").value;
      const duration = document.getElementById("searchDuration").value;

      const msg = `Hi Rutva Tours & Travels, I am searching for ${activeTab}:\n- Destination: ${dest || "Any"}\n- Date: ${date || "Flexible"}\n- Duration: ${duration || "Standard"}`;
      window.open(buildWhatsAppUrl(msg), "_blank");
    });
  }
}

// Render Tour Package Cards with Batch Slot Capacity Bar
function renderPackageCards(filterCategory) {
  const container = document.getElementById("packagesContainer");
  if (!container) return;

  const filtered = filterCategory === "all"
    ? PACKAGES_DATA
    : PACKAGES_DATA.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(pkg => {
    const slotPercentage = Math.round((pkg.remainingSlots / pkg.totalCapacity) * 100);
    const formattedPrice = pkg.price.toLocaleString("en-IN");
    const waText = `Hi, I am interested in booking the tour package: "${pkg.title}" (${pkg.duration}, starting ₹${formattedPrice}). Please share booking details and seat availability.`;

    return `
      <div class="package-card" data-category="${pkg.category}">
        <div class="package-img-wrapper">
          <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
          <span class="badge-tag ${pkg.badge === "Best Seller" ? "best-seller" : ""}">${pkg.badge}</span>
          <span class="duration-tag"><i class="far fa-clock"></i> ${pkg.duration}</span>
        </div>
        <div class="package-body">
          <h3 class="package-dest">${pkg.title}</h3>
          <p class="package-overview">${pkg.overview}</p>
          
          <!-- Batch Slot Capacity Indicator -->
          <div class="capacity-box">
            <div class="capacity-header">
              <span><i class="fas fa-fire-alt"></i> Batch Capacity</span>
              <span>Only ${pkg.remainingSlots} Slots Left!</span>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${100 - slotPercentage}%"></div>
            </div>
          </div>

          <div class="package-footer">
            <div class="price-box">
              <div>
                <span class="price-label">Starting from</span>
                <div class="price-amount">₹${formattedPrice} <span style="font-size: 0.8rem; font-weight: normal; color: #64748b;">/person</span></div>
              </div>
            </div>
            <div class="package-actions">
              <button class="btn btn-outline" onclick="openPackageModal('${pkg.id}')">
                <i class="far fa-eye"></i> Details
              </button>
              <a href="${buildWhatsAppUrl(waText)}" target="_blank" class="btn btn-whatsapp">
                <i class="fab fa-whatsapp"></i> Book
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Package Filter Tabs
function initPackageFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.filter;
      renderPackageCards(category);
    });
  });
}

// Package Details Modal Window
function openPackageModal(packageId) {
  const pkg = PACKAGES_DATA.find(p => p.id === packageId);
  if (!pkg) return;

  const modal = document.getElementById("packageModal");
  const body = document.getElementById("modalBody");
  const formattedPrice = pkg.price.toLocaleString("en-IN");
  const waText = `Hi Rutva Tours & Travels, I want to book: "${pkg.title}" (${pkg.duration}). Please guide me through payment and reservation.`;

  body.innerHTML = `
    <img src="${pkg.image}" class="modal-header-img" alt="${pkg.title}">
    <div class="modal-content-body">
      <span class="section-badge">${pkg.badge}</span>
      <h2 class="modal-title">${pkg.title}</h2>
      
      <div class="modal-meta-bar">
        <span><i class="far fa-clock"></i> ${pkg.duration}</span>
        <span><i class="fas fa-users"></i> Batch Capacity: ${pkg.remainingSlots} seats left of ${pkg.totalCapacity}</span>
        <span style="color: var(--secondary-hover); font-weight: 700;">Starting ₹${formattedPrice}/person</span>
      </div>

      <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem;">Package Itinerary Highlights:</h4>
      <div class="itinerary-list">
        ${pkg.itinerary.map(item => `
          <div class="itinerary-item">
            <span class="day-badge">${item.split(":")[0]}</span>
            <span style="font-size: 0.95rem; color: var(--text-main);">${item.split(":").slice(1).join(":")}</span>
          </div>
        `).join("")}
      </div>

      <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; font-size: 1.1rem;">Inclusions:</h4>
      <ul style="list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 2rem;">
        ${pkg.inclusions.map(inc => `<li style="font-size: 0.9rem; color: #475569;"><i class="fas fa-check-circle" style="color: var(--whatsapp-green); margin-right: 0.4rem;"></i> ${inc}</li>`).join("")}
      </ul>

      <div style="display: flex; gap: 1rem;">
        <a href="${buildWhatsAppUrl(waText)}" target="_blank" class="btn btn-whatsapp" style="flex: 1; padding: 0.9rem;">
          <i class="fab fa-whatsapp" style="font-size: 1.2rem;"></i> Book Now via WhatsApp
        </a>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closePackageModal() {
  const modal = document.getElementById("packageModal");
  if (modal) modal.classList.remove("active");
}

// Render Ultra-Professional Executive Branch Offices Across India (Name & State Badge ONLY)
function renderBranchOffices(branches) {
  const grid = document.getElementById("officesGrid");
  const countBadge = document.getElementById("branchCountBadge");
  if (!grid) return;

  if (countBadge) {
    countBadge.innerText = `${branches.length} Active Centers`;
  }

  if (branches.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 1rem; background: #ffffff; border-radius: var(--radius-lg); border: 1px dashed var(--border-light);">No executive branch centers matching your search.</div>`;
    return;
  }

  grid.innerHTML = branches.map(office => {
    const waMsg = `Hi Rutva Tours & Travels, I am inquiring about your ${office.name} (${office.state}). Please connect me with your travel consultant at this center.`;
    return `
      <div class="pro-branch-card">
        <div class="pro-branch-header">
          <div class="pro-branch-icon">
            <i class="fas fa-building"></i>
          </div>
          <div>
            <span class="pro-branch-state">${office.state}</span>
            <h3 class="pro-branch-name">${office.name}</h3>
          </div>
        </div>
        
        <div class="pro-branch-footer">
          <span class="pro-branch-tag"><i class="fas fa-certificate"></i> ${office.type}</span>
          <a href="${buildWhatsAppUrl(waMsg)}" target="_blank" class="pro-branch-btn">
            <i class="fab fa-whatsapp"></i> Inquire
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// Region Filter Chips Listener
function initRegionFilterBtns() {
  const regionBtns = document.querySelectorAll(".region-chip");
  regionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      regionBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const region = btn.dataset.region;

      if (region === "all") {
        renderBranchOffices(BRANCHES_DATA);
      } else if (region === "metros") {
        renderBranchOffices(BRANCHES_DATA.filter(b => ["Mumbai Branch", "Bengaluru Branch", "Kolkata Branch", "Pune Branch", "Tamil Nadu Branch (Chennai)"].includes(b.name)));
      } else if (region === "gujarat") {
        renderBranchOffices(BRANCHES_DATA.filter(b => b.state === "Gujarat"));
      }
    });
  });
}

function initBranchSearch() {
  const searchInput = document.getElementById("branchSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();
    const filtered = BRANCHES_DATA.filter(b => 
      b.name.toLowerCase().includes(term) || 
      b.state.toLowerCase().includes(term) ||
      b.type.toLowerCase().includes(term)
    );
    renderBranchOffices(filtered);
  });
}

// Cab Fare Estimator Logic
function initCabCalculator() {
  const calcForm = document.getElementById("cabCalcForm");
  if (!calcForm) return;

  calcForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cabType = document.getElementById("cabType").value;
    const pickup = document.getElementById("pickupCity").value;
    const drop = document.getElementById("dropCity").value;
    const date = document.getElementById("cabDate").value;

    const msg = `Hi Rutva Tours & Travels, I would like to book an Outstation Cab:\n- Vehicle Type: ${cabType}\n- Pick-up City: ${pickup}\n- Destination: ${drop}\n- Travel Date: ${date}\nPlease send me the exact quote and driver confirmation.`;
    window.open(buildWhatsAppUrl(msg), "_blank");
  });
}

// Customer Testimonials Carousel
function initReviewsCarousel() {
  const slider = document.getElementById("reviewsSlider");
  const prevBtn = document.getElementById("prevReviewBtn");
  const nextBtn = document.getElementById("nextReviewBtn");

  if (!slider || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  const totalSlides = slider.children.length;

  function updateCarousel() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  // Auto-play review slider every 6 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 6000);
}

// Attach listeners for static WhatsApp buttons
function initWhatsAppCTAListeners() {
  document.querySelectorAll("[data-wa-topic]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const topic = btn.dataset.waTopic || "Travel Inquiry";
      window.open(buildWhatsAppUrl(`Hi Rutva Tours & Travels, I am interested in ${topic}. Please share complete details.`), "_blank");
    });
  });
}
