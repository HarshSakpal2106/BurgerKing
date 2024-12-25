// PROFILE MODAL
const profileModal = document.getElementById("profileModal");
const profileModalBackBtn = document.getElementById("profileModalBackBtn");
const hamburgerMenuBtn = document.getElementById("hamburgerMenuBtn");

hamburgerMenuBtn.addEventListener("click", () => {
  profileModal.style.left = "0";
  profileModal.style.position = "fixed";
});

profileModalBackBtn.addEventListener("click", () => {
  profileModal.style.left = "-100%";
});


// HOMEPAGE MENU SCROLLER
const menuList = [
  { name: "Take Off Combos", image: "/takeoff-combos.jpeg" },
  { name: "BK Recommended", image: "/bk-recommend.jpeg" },
  { name: "Value Meals", image: "/value-meals.jpeg" },
  { name: "Celebration Meals for 2", image: "/celebration-meals-for-two.jpeg" },
  { name: "Burgers & Wraps", image: "/burgers-and-wraps.jpeg" },
  { name: "Desserts", image: "/desserts.jpeg" },
  { name: "Beverages", image: "/beverages.jpeg" },
  { name: "Snacks", image: "/snacks.jpeg" },
  { name: "Crazy App Deals", image: "/crazy-app-deals.jpeg" },
  { name: "Whopper", image: "/whopper.jpeg" },
  { name: "Premium Burgers", image: "/premium-burgers.jpeg" },
  { name: "BK Cafe™", image: "/bk-cafe.jpeg" },
  { name: "2 for Offers", image: "/two-for-offers.jpeg" },
  { name: "Chicken Wings", image: "/chicken-wings.jpeg" }];

const menuSlider = document.querySelector('.menu-slider');

menuList.forEach(item => {
  const menuCard = document.createElement('div');
  menuCard.className = 'menu-card';

  const menuImg = document.createElement('img');
  menuImg.className = 'menu-card-img';
  menuImg.src = item.image;

  const menuName = document.createElement('span');
  menuName.className = 'menu-card-name';
  menuName.textContent = item.name;

  menuCard.appendChild(menuImg);
  menuCard.appendChild(menuName);
  menuSlider.appendChild(menuCard);
});



/* BOTTOM NAV BAR BUTTON FUNCTION */
document.getElementById("homeBtn").addEventListener("click", function() {
  showScreen("homeScreen");
});

document.getElementById("kingDealsBtn").addEventListener("click", function() {
  showScreen("kingDealsScreen");
});

document.getElementById("nearbyStoresBtn").addEventListener("click", function() {
  showScreen("findBKScreen");
});

document.getElementById("locateStoreBar").addEventListener("click", function() {
  showScreen("findBKScreen");
});

document.getElementById("backBtn").addEventListener("click", function() {
  showScreen("homeScreen");
});

function showScreen(screenId) {
  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("kingDealsScreen").style.display = "none";
  document.getElementById("findBKScreen").style.display = "none";

  document.getElementById(screenId).style.display = "block";
}



/* KING DEALS SCREEN */
const kDealsBtn = document.getElementById("k-DealsBtn");
const crownRewardsBtn = document.getElementById("crownRewardsBtn");
const crownRewardsContainer = document.getElementById("crown-rewards-container");
const noOffersText = document.getElementById("no-offers-available");

function setActiveButton(activeButton, inactiveButton) {
  activeButton.classList.add("time-deals-btn-active");
  inactiveButton.classList.remove("time-deals-btn-active");
}

kDealsBtn.addEventListener("click", () => {
  setActiveButton(kDealsBtn, crownRewardsBtn);
  crownRewardsContainer.style.display = "none";
  noOffersText.style.display = "block";
});

crownRewardsBtn.addEventListener("click", () => {
  setActiveButton(crownRewardsBtn, kDealsBtn);
  crownRewardsContainer.style.display = "grid";
  noOffersText.style.display = "none";
});



const crownRewardsItems = [
  {
    name: "VEGGIE STRIPS",
    image: "crown-rewards-1.jpeg",
    price: "1000"
  },
  {
    name: "CRISPY VEG",
    image: "crown-rewards-2.jpeg",
    price: "1000"
  },
  {
    name: "VEG CRUNCHY TACO",
    image: "crown-rewards-3.jpeg",
    price: "1000"
  },
  {
    name: "CRISPY CHICKEN",
    image: "crown-rewards-4.jpeg",
    price: "1400"
  },
  {
    name: "CHICKEN CRUNCY TACO",
    image: "crown-rewards-5.jpeg",
    price: "1400"
  },
  {
    name: "BK CLASSIC VEG",
    image: "crown-rewards-6.jpeg",
    price: "1980"
  },
  {
    name: "CAPPUCCINO (SMALL)",
    image: "crown-rewards-7.jpeg",
    price: "1980"
  },
  {
    name: "CHOCO MOUSSE CUP",
    image: "crown-rewards-8.jpeg",
    price: "1980"
  },
  {
    name: "CHOCO LAVA CUP",
    image: "crown-rewards-9.jpeg",
    price: "2180"
  },
  {
    name: "BK CLASSIC CHICKEN",
    image: "crown-rewards-10.jpeg",
    price: "2380"
  }];

crownRewardsItems.forEach(item => {
  const crownRewardCard = document.createElement("div");
  crownRewardCard.className = 'crown-reward-card';

  const crownRewardImg = document.createElement('img');
  crownRewardImg.className = 'crown-reward-card-img';
  crownRewardImg.src = item.image;

  const crownRewardName = document.createElement('span');
  crownRewardName.className = 'crown-reward-card-name';
  crownRewardName.textContent = item.name;

  const crownRewardPrice = document.createElement('span');
  crownRewardPrice.className = 'crown-reward-price';

  const crownRewardAmount = document.createTextNode(`${item.price}`);

  const crownImg = document.createElement('img');
  crownImg.className = "crown-white";
  crownImg.src = "crown-white.svg";

  crownRewardPrice.appendChild(crownImg);
  crownRewardPrice.appendChild(crownRewardAmount);
  crownRewardCard.appendChild(crownRewardImg);
  crownRewardCard.appendChild(crownRewardName);
  crownRewardCard.appendChild(crownRewardPrice);
  crownRewardsContainer.appendChild(crownRewardCard);

});



// RESTAURANT CARD GENERATOR
const restaurants = [
  {
    name: "Korum Mall, Thane",
    address: "Unit T315, 3rd Floor, Korum Mall, Thane",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "10:00 AM - 02:00 AM"
  },
  {
    name: "Lake City Mall, Thane",
    address: "No GA1 & FA1, Lake City Mall, Old Agra Road, Samata Nagar, Thane",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "09:00 AM - 11:00 PM"
  },
  {
    name: "R City Mall, Ghatkopar",
    timing: "11:00AM - 10:00PM",
    address: "R-305, R City Mall, 2nd Floor",
    services: ["Delivery", "Dine In"],
    },
  {
    name: "Viviana Mall, Thane",
    address: "Unit SF029, 2nd Floor, Viviana Mall, Eastern Express Highway, Thane",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "09:00 AM - 11:00 PM"
  },
  {
    name: "Naupada Zone, Thane",
    address: "Ground & 1st Floor, Gokhale Road, Naikwadi, Naupada Zone, Thane",
    services: ["Dine In", "Takeaway"],
    timing: "09:00 AM - 10:00 PM"
  },
  {
    name: "Hiranandani Estate, Thane",
    address: "Shop No 1 to 6, Ground Floor, Hiranandani Estate, Patlipada, Thane",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "09:00 AM - 11:59 PM"
  },
  {
    name: "Shree Durga Complex, Thane",
    address: "Unit No 7 & 8, Shree Durga Complex CHS, Charu Ambo Patil Marg, Thane",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "09:00 AM - 11:00 PM"
  },
  {
    name: "Inorbit Mall, Mumbai",
    address: "Unit F21, 1st Floor, Inorbit Mall, Malad, Mumbai",
    services: ["Dine In", "Takeaway"],
    timing: "10:00 AM - 11:00 PM"
  },
  {
    name: "Phoenix Market City, Kurla",
    address: "F 40A/40B, 1st Floor, Phoenix Market City, Lal Bahadur Shastri Road, Kurla, Mumbai - 400070",
    timing: "10:00 AM - 11:00 PM",
    services: ["Delivery", "Dine-In", "Takeaway"]
  },
  {
    name: "Burger King Lower Parel",
    address: "Shop No 5, Matulya Centre, Tulsi Pipe Rd, Senapat Bapat Road, Lower Parel, Mumbai - 400013",
    timing: "10:00 AM - 11:59 PM",
    services: ["Delivery", "Dine-In", "Takeaway"]
  },
  {
    name: "Burger King Dahisar",
    address: "SN 1, GF, Jayram Heights, Gagangiri Complex, New Link Road, Dahisar West, Kandarpada, Mumbai - 400068",
    timing: "10:00 AM - 11:59 PM",
    services: ["Delivery", "Dine-In", "Takeaway"]
  },
  {
    name: "Lulu Mall, Kochi",
    address: "No 34/1000, 3rd Floor, Lulu Mall, NH 544, Edappally, Kochi",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "07:00 AM - 11:00 PM"
  },
  {
    name: "Centre Square Mall, Cochin",
    address: "Unit No 502, 5th Floor, Centre Square Mall, Shenoys, Mahatma Gandhi Road, Cochin",
    services: ["Dine In", "Takeaway"],
    timing: "11:00 AM - 10:00 PM"
  },
  {
    name: "Ritz Plaza, Ernakulam",
    address: "Sy No S/297/5 & R/683/2/7/2, Ritz Plaza, Kakkanad, Infopark, Ernakulam",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "10:00 AM - 10:00 PM"
  },
  {
    name: "Maradu, Ernakulam",
    address: "NH66, Vyttila, Aroor Bypass, Maradu, Ernakulam",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "07:00 AM - 11:00 PM"
  },
  {
    name: "Lulu Mall, Thiruvananthapuram",
    address: "No I20, 2nd Floor, Lulu Mall, TC 91/270/2, Kazhakootam Kovalam Bypass Rd, Thiruvananthapuram",
    services: ["Dine In", "Takeaway"],
    timing: "10:00 AM - 10:00 PM"
  },
  {
    name: "Mall of Travancore, Thiruvananthapuram",
    address: "FCC 12&13, Mall of Travancore, Airport Road, Thiruvananthapuram",
    services: ["Dine In", "Takeaway"],
    timing: "07:00 AM - 10:00 PM"
  },
  {
    name: "Commercial Street, Bengaluru",
    address: "No 2, Unit No 111, Asha Gallery, Commercial Street, Bengaluru",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "09:00 AM - 01:00 AM"
  },
  {
    name: "Gandhi Bazaar, Bengaluru",
    address: "No 89, 2, Gandhi Bazaar, Main Road, Basavanagudi, Bengaluru",
    services: ["Dine In", "Takeaway"],
    timing: "09:00 AM - 11:59 PM"
  },
  {
    name: "Jayanagar, Bengaluru",
    address: "11th Main Road, 4th Block, Jayanagar, Bengaluru",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "09:00 AM - 11:59 PM"
  },
  {
    name: "TC Palya, Bengaluru",
    address: "Shop No 14, Ground & 1st Floor, Aneppa Circle, TC Palya, Akshay Nagar, Bengaluru",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "09:00 AM - 01:00 AM"
  },
  {
    name: "Old Mysuru Road, Bengaluru",
    address: "No 19/2, CTS Binnipete, Old Mysuru Road, Bengaluru",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "09:00 AM - 11:59 PM"
  },
  {
    name: "Magadi Road, Bengaluru",
    address: "Counter No 1, 3rd Floor, Food Court, 92 Magadi Main Road, Bengaluru",
    services: ["Dine In", "Takeaway"],
    timing: "10:00 AM - 11:00 PM"
  },
  {
    name: "Gariahat, Kolkata",
    address: "No 34, Gariahat Road, Opposite Pantaloons, Kolkata",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "10:00 AM - 11:00 PM"
  },
  {
    name: "Park Street, Kolkata",
    address: "No 2, Unit 1, Park Mansion, Park Street, Kolkata",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "10:00 AM - 11:59 PM"
  },
  {
    name: "Howrah, Kolkata",
    address: "Howrah Railway Station, Ground Floor, Kolkata",
    services: ["Takeaway", "Delivery"],
    timing: "09:00 AM - 10:00 PM"
  },
  {
    name: "City Centre, Siliguri",
    address: "Unit 12B, 1st Floor, City Centre Mall, Matigara, Siliguri",
    services: ["Dine In", "Takeaway"],
    timing: "10:00 AM - 11:00 PM"
  },
  {
    name: "Forum Mall, Bengaluru",
    address: "No 16, Ground Floor, Forum Mall, Koramangala, Bengaluru",
    services: ["Dine In", "Takeaway", "Delivery"],
    timing: "10:00 AM - 11:59 PM"
  },
  {
    name: "Phoenix Marketcity, Bengaluru",
    address: "Unit G56, Phoenix Marketcity, Whitefield Road, Bengaluru",
    services: ["Dine In", "Takeaway"],
    timing: "10:00 AM - 11:00 PM"
  },
  {
    name: "Cyber Hub, Gurgaon",
    address: "Unit G11, Ground Floor, Cyber Hub, Gurgaon",
    services: ["Dine In", "Takeaway"],
    timing: "11:00 AM - 11:00 PM"
  },
  {
    name: "DLF Mall, Noida",
    address: "Unit F123, 1st Floor, DLF Mall of India, Sector 18, Noida",
    services: ["Dine In", "Takeaway"],
    timing: "11:00 AM - 11:00 PM"
  },
  {
    name: "Select Citywalk, Delhi",
    address: "Unit S45, 2nd Floor, Select Citywalk, Saket, Delhi",
    services: ["Dine In", "Takeaway"],
    timing: "11:00 AM - 11:59 PM"
  }
];

function renderRestaurants(restaurantList) {
  const container = document.getElementById('restaurant-container');
  container.innerHTML = '';

  restaurantList.forEach(restaurant => {
    const card = document.createElement('div');
    card.classList.add('restaurant-card');
    card.innerHTML = `
        <div class="restaurant-card-info-wrapper">
          <div class="restaurant-card-info">
            <span class="restaurant-card-title">${restaurant.name}</span>
            <span class="restaurant-card-timing">${restaurant.timing}</span>
            <span class="restaurant-card-address">${restaurant.address}</span>
          </div>
          <div class="restaurant-card-buttons">
            <div><i class="fa-solid fa-phone"></i></div>
            <div><i class="fa-solid fa-location-dot"></i></div>
          </div>
        </div>
        <hr>
        <div class="restaurant-card-services">
          ${restaurant.services.map(service => `<span>${service}</span>`).join(' ')}
        </div>
      `;
    container.appendChild(card);
  });
}

renderRestaurants(restaurants);

document.getElementById('findBKSearchBtn').addEventListener('click', function() {
  const query = document.getElementById('searchBar').value.toLowerCase();

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.address.toLowerCase().includes(query)
  );

  renderRestaurants(filteredRestaurants);
});

document.getElementById('clearBtn').addEventListener('click', function() {
  document.getElementById('searchBar').value = '';

  renderRestaurants(restaurants);
});

const container = document.getElementById("restaurant-container");

restaurants.forEach((restaurant) => {
  const card = document.createElement("div");
  card.className = "restaurant-card";

  card.innerHTML = `
      <div class="restaurant-card-info-wrapper">
        <div class="restaurant-card-info">
          <span class="restaurant-card-title">${restaurant.name}</span>
          <span class="restaurant-card-timing">${restaurant.timing}</span>
          <span class="restaurant-card-address">${restaurant.address}</span>
        </div>
        <div class="restaurant-card-buttons">
          <div><i class="fa-solid fa-phone"></i></div>
          <div><i class="fa-solid fa-location-dot"></i></div>
        </div>
      </div>
      <hr>
    `;

  const servicesDiv = document.createElement("div");
  servicesDiv.className = "restaurant-card-services";

  restaurant.services.forEach((service) => {
    const serviceSpan = document.createElement("span");
    serviceSpan.textContent = service;
    servicesDiv.appendChild(serviceSpan);
  });

  card.appendChild(servicesDiv);

  container.appendChild(card);
});



/* MENU SCREEN */
const seeAllBtn = document.getElementById("seeAllBtn");
const showMenuBtn = document.getElementById("exploreMenuBtn");
const menuScreen = document.getElementById("menuScreen");
const botNavBar = document.querySelector(".bottom-nav-bar");
const menuBackBtn = document.getElementById("backBtn-menu");
const botSpaceBar = document.getElementById("bottom-space-bar");

seeAllBtn.addEventListener("click", () => {
  menuScreen.style.display = "flex";
  homeScreen.style.display = "none";
  botNavBar.style.display = "none";
  botSpaceBar.style.display = "none";
});

showMenuBtn.addEventListener("click", () => {
  menuScreen.style.display = "flex";
  homeScreen.style.display = "none";
  botNavBar.style.display = "none";
  botSpaceBar.style.display = "none";
});

menuBackBtn.addEventListener("click", () => {
  menuScreen.style.display = "none";
  homeScreen.style.display = "block";
  botNavBar.style.display = "grid";
  botSpaceBar.style.display = "block";
});

const dealsItems = [
  { name: "VEG WHOPPER JR + COCA COLA MEDIUM", image: "rs139-1.jpeg", price: "139", type: "veg.svg" },
  { name: "2 MED FRIES", image: "rs139-2.jpeg", price: "139", type: "veg.svg" },
  { name: "BK VEGGIE BURGER + VEG TACO", image: "rs139-3.jpeg", price: "139", type: "veg.svg" },
  { name: "VEG MAKHANI BURST BURGER + MED PERI PERI FRIES", image: "rs139-4.jpeg", price: "139", type: "veg.svg" },
  { name: "CRISPY VEG DOUBLE PATTY BURGER WITH DOUBLE CHEESE SLICE + MED COLA", image: "rs139-5.jpeg", price: "139", type: "veg.svg" }];

const combosItems = [
  { name: "WHOPPER JR DEAL FOR 2 - VEG", image: "combo-1.jpeg", price: "604", type: "veg.svg" },
  { name: "WHOPPER JR DEAL FOR 2 - NON VEG", image: "combo-2.jpeg", price: "644", type: "nonveg.png" },
  { name: "WHOPPER DEAL FOR 2 - VEG", image: "combo-3.jpeg", price: "684", type: "veg.svg" },
  { name: "WHOPPER DEAL FOR 2 - NON VEG", image: "combo-4.jpeg", price: "724", type: "nonveg.png" },
  { name: "CRISPY VEG BURGER + FRIES (MEDIUM)", image: "combo-5.jpeg", price: "164", type: "veg.svg" }];

const whopperItems = [
  { name: "VEG WHOPPER", image: "whopper-1.jpeg", price: "189", type: "veg.svg" },
  { name: "CHICKEN WHOPPER", image: "whopper-2.jpeg", price: "209", type: "nonveg.png" },
  { name: "VEG WHOPPER DOUBLE PATTY", image: "whopper-3.jpeg", price: "258", type: "veg.svg" },
  { name: "CHICKEN WHOPPER DOUBLE PATTY", image: "whopper-4.jpeg", price: "288", type: "nonveg.png" },
  { name: "VEG WHOPPER WITH CHEESE", image: "whopper-5.jpeg", price: "214", type: "veg.svg" }];

const burgerWrapsItems = [
  { name: "PANEER ROYALE WRAP", image: "burgers&wraps-1.jpeg", price: "229", type: "veg.svg" },
  { name: "FIERY CHICKEN WRAP", image: "burgers&wraps-2.jpeg", price: "229", type: "nonveg.png" },
  { name: "BK CHICKEN BURGER", image: "burgers&wraps-3.jpeg", price: "149", type: "nonveg.png" },
  { name: "VEG MAKHANI BURST BURGER", image: "burgers&wraps-4.jpeg", price: "80", type: "veg.svg" },
  { name: "CRISPY VEG DOUBLE PATTY", image: "burgers&wraps-5.jpeg", price: "99", type: "veg.svg" }];

const kingsItems = [
  { name: "HOT-N-SAUCY BURGER", image: "kings-1.jpeg", price: "209", type: "veg.svg" },
  { name: "PANEER ROYALE BURGER", image: "kings-2.jpeg", price: "209", type: "veg.svg" },
  { name: "FEIRY CHICKEN BURGER", image: "kings-3.jpeg", price: "209", type: "nonveg.png" },
  { name: "CHICKEN TANDOORI ", image: "kings-4.jpeg", price: "209", type: "nonveg.png" }];

const snacksItems = [
  { name: 'FRIES', image: 'snacks-1.jpeg', price: '119', type: 'veg.svg' },
  { name: 'BK VEG PIZZA PUFF', image: 'snacks-2.jpeg', price: '59', type: 'veg.svg' },
  { name: 'BK CHICKEN PIZZA PUFF', image: 'snacks-3.jpeg', price: '89', type: 'nonveg.png' },
  { name: 'VEGGIE STRIPS + FIERY HELL DIP', image: 'snacks-4.jpeg', price: '83', type: 'veg.svg' },
  { name: 'SAUCY FRIES', image: 'snacks-5.jpeg', price: '145', type: 'veg.svg' }];

const beveragesItems = [
  { name: 'COCA COLA MEDIUM', image: 'beverages-1.jpeg', price: '95', type: 'veg.svg' },
  { name: 'FANTA MEDIUM', image: 'beverages-2.jpeg', price: '95', type: 'veg.svg' },
  { name: 'SPRITE MEDIUM', image: 'beverages-3.jpeg', price: '95', type: 'veg.svg' }];

const cafeItems = [
  { name: 'ICED AMERICANO', image: 'cafe-1.jpeg', price: '180', type: 'veg.svg' },
  { name: 'AMERICANO (SMALL)', image: 'cafe-2.jpeg', price: '159', type: 'veg.svg' },
  { name: 'CAPPUCCINO (SMALL)', image: 'cafe-3.jpeg', price: '159', type: 'veg.svg' },
  { name: 'AMERICANO (REGULAR)', image: 'cafe-4.jpeg', price: '189', type: 'veg.svg' },
  { name: 'CAPPUCCINO (REGULAR)', image: 'cafe-5.jpeg', price: '189', type: 'veg.svg' },
  { name: 'CHOCOLATE THICKSHAKE', image: 'cafe-6.jpeg', price: '189', type: 'veg.svg' },
  { name: 'MANGO THICKSHAKE', image: 'cafe-7.jpeg', price: '189', type: 'veg.svg' },
  { name: 'BERRY BLAST THICKSHAKE', image: 'cafe-8.jpeg', price: '189', type: 'veg.svg' }];

const menuMapping = {
  menuOption1: dealsItems,
  menuOption2: combosItems,
  menuOption3: whopperItems,
  menuOption4: burgerWrapsItems,
  menuOption5: kingsItems,
  menuOption6: snacksItems,
  menuOption7: beveragesItems,
  menuOption8: cafeItems
};

function renderProducts(items) {
  const menuProducts = document.querySelector('.menu-products');
  menuProducts.innerHTML = '';

  items.forEach(item => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('menu-product-card');

    productDiv.innerHTML = `
      <div class="product-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="product-info">
        <span class="menu-product-name">${item.name}</span><br>
        <span class="menu-product-price">Rs.${item.price}</span>
        <img src="${item.type}" alt="Type" class="product-type">
        <button class="add-btn">ADD +</button>
      </div>
    `;
    menuProducts.appendChild(productDiv);
  });
}

function setActiveMenuOption(menuId) {
  document.querySelectorAll('.menu-options-card').forEach(menuCard => {
    menuCard.classList.remove('active');
  });
  document.getElementById(menuId).classList.add('active');
}

document.querySelectorAll('.menu-options-card').forEach(menuCard => {
  menuCard.addEventListener('click', () => {
    const menuId = menuCard.id;
    const items = menuMapping[menuId];
    if (items) {
      renderProducts(items);
      setActiveMenuOption(menuId);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(dealsItems);
  setActiveMenuOption('menuOption1');
});



// LOGIN
const loginForm = document.getElementById('loginForm');
const phoneInput = document.getElementById('phoneInput');
const phoneNoEnterBtn = document.getElementById('phoneNoEnterBtn');
const loginWrapper = document.getElementById("loginWrapper");
const loginFooter = document.querySelector(".login-wrapper-footer");
const profileWrapper = document.getElementById("profileWrapper");
const logoutBtn = document.getElementById("logoutBtn");

// Prevent form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submitted successfully');
});

phoneInput.addEventListener('input', () => {
  if (phoneInput.value.length === 10) {
    phoneNoEnterBtn.disabled = false;
    phoneNoEnterBtn.style.backgroundColor = '#703C2F';
    phoneNoEnterBtn.textContent = 'LOGIN';
  } else {
    phoneNoEnterBtn.disabled = true;
    phoneNoEnterBtn.style.backgroundColor = 'darkgray';
    phoneNoEnterBtn.textContent = 'Enter 10 digit phone number';
  }
});

phoneNoEnterBtn.addEventListener("click", () => {
  loginWrapper.style.display = 'none';
  loginFooter.style.display = 'none';
  profileWrapper.style.display = 'block'
});

logoutBtn.addEventListener("click", () => {
  loginWrapper.style.display = 'flex';
  loginFooter.style.display = 'flex';
  profileWrapper.style.display = 'none';
  phoneInput.value = '';
})



// TOGGLE FUNCTION
document.getElementById("toggle").addEventListener("change", function() {
  const isChecked = this.checked;

  const hamburgerMenuBtnImg = document.getElementById("hamburgerMenuBtn");
  hamburgerMenuBtnImg.src = isChecked ? "hamburger-menu-dinein.svg" : "hamburger-menu-delivery.svg";

  const searchBtn = document.getElementById("searchBtn");
  searchBtn.style.color = isChecked ? "#703C2F" : "#EE7700";

  const locationPin = document.getElementById("locationPin");
  locationPin.style.color = isChecked ? "#703C2F" : "#EE7700";

  const seeAllBtn = document.getElementById("seeAllBtn");
  seeAllBtn.style.color = isChecked ? "#703C2F" : "#EE7700";

  const exploreMenuBtn = document.getElementById("exploreMenuBtn");
  exploreMenuBtn.style.backgroundColor = isChecked ? "#703C2F" : "#EE7700";

  const bkRecommendedContainer = document.querySelector(".bk-recommended-container");
  bkRecommendedContainer.style.display = isChecked ? "none" : "block";

  const dineInLabel = document.getElementById("dineInLabel");
  dineInLabel.style.color = isChecked ? "#703C2F" : "darkgrey";

  const deliveryLabel = document.getElementById("deliveryLabel");
  deliveryLabel.style.color = isChecked ? "darkgrey" : "#EE7700";

  const backBtn = document.getElementById("backBtn");
  backBtn.style.color = isChecked ? "#703C2f" : "#EE7700";

  const clearBtn = document.getElementById("clearBtn");
  clearBtn.style.color = isChecked ? "#703C2F" : "#EE7700";

  const restaurantCardBtns = document.querySelectorAll(".restaurant-card-buttons");
  restaurantCardBtns.forEach(btn => {
    btn.style.color = isChecked ? "#703C2F" : "#EE7700";
  });

  const restaurantCardServices = document.querySelectorAll(".restaurant-card-services");
  restaurantCardServices.forEach(service => {
    service.style.color = isChecked ? "#703C2F" : "#EE7700";
  });

  const menuBackBtn = document.getElementById("backBtn-menu");
  menuBackBtn.style.color = isChecked ? "#703C2F" : "#EE7700";

  const addBtn = document.querySelectorAll('.add-btn'); // Select all buttons

  // Loop through each button to attach event listeners
  addBtn.forEach(button => {
    // Add hover effect
    button.addEventListener('mouseover', () => {
      button.style.color = isChecked ? "#703C2F" : "#EE7700";
      button.style.borderColor = isChecked ? "#703C2F" : "#EE7700";
    });

    // Remove hover effect
    button.addEventListener('mouseout', () => {
      button.style.color = "black"; // Ensure color value is quoted
      button.style.borderColor = "black";
    });
  });

  const profileModalBackBtn = document.getElementById("profileModalBackBtn");
  profileModalBackBtn.style.color = isChecked ? "#703C2F" : "#EE7700";

  const profileModalNoti = document.getElementById("notiIcon");
  profileModalNoti.src = isChecked ? "notification-icon.svg" : "notification-icon-2.svg";

  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.style.backgroundColor = isChecked ? "#703C2F" : "#EE7700";

  const homeBtnImg = document.getElementById("homeBtnImg");
  homeBtnImg.src = isChecked ? "homeBtn-active-dinein.svg" : "homeBtn-active-delivery.svg";

  const kingDealsBtnImg = document.getElementById("kingDealsBtnImg");
  kingDealsBtnImg.src = isChecked ? "kingDealsBtn-active-dinein.svg" : "kingDealsBtn-active-delivery.svg";
  
  const nearByStoresBtnImg = document.getElementById("nearByStoresBtnImg");
  nearByStoresBtnImg.src = isChecked ? "nearByStoresBtn-active-dinein.svg" : "nearByStoresBtn-active-delivery.svg";
});

document.addEventListener('DOMContentLoaded', function() {
  const isChecked = document.getElementById("toggle").checked;

  const hamburgerMenuBtnImg = document.getElementById("hamburgerMenuBtn");
  hamburgerMenuBtnImg.src = isChecked ? "hamburger-menu-dinein.svg" : "hamburger-menu-delivery.svg";

  const searchBtn = document.getElementById("searchBtn");
  searchBtn.style.color = isChecked ? "#703C2F" : "#EE7700";

  const locationPin = document.getElementById("locationPin");
  locationPin.style.color = isChecked ? "#703C2F" : "#EE7700";

  const seeAllBtn = document.getElementById("seeAllBtn");
  seeAllBtn.style.color = isChecked ? "#703C2F" : "#EE7700";

  const exploreMenuBtn = document.getElementById("exploreMenuBtn");
  exploreMenuBtn.style.backgroundColor = isChecked ? "#703C2F" : "#EE7700";

  const bkRecommendedContainer = document.querySelector(".bk-recommended-container");
  bkRecommendedContainer.style.display = isChecked ? "none" : "block";

  const dineInLabel = document.getElementById("dineInLabel");
  dineInLabel.style.color = isChecked ? "#703C2F" : "darkgrey";

  const deliveryLabel = document.getElementById("deliveryLabel");
  deliveryLabel.style.color = isChecked ? "darkgrey" : "#EE7700";

  const backBtn = document.getElementById("backBtn");
  backBtn.style.color = isChecked ? "#703C2f" : "#EE7700";

  const clearBtn = document.getElementById("clearBtn");
  clearBtn.style.color = isChecked ? "#703C2F" : "#EE7700";

  const restaurantCardBtns = document.querySelectorAll(".restaurant-card-buttons");
  restaurantCardBtns.forEach(btn => {
    btn.style.color = isChecked ? "#703C2F" : "#EE7700";
  });

  const restaurantCardServices = document.querySelectorAll(".restaurant-card-services");
  restaurantCardServices.forEach(service => {
    service.style.color = isChecked ? "#703C2F" : "#EE7700";
  });

  const menuBackBtn = document.getElementById("backBtn-menu");
  menuBackBtn.style.color = isChecked ? "#703C2F" : "#EE7700";

  const addBtn = document.querySelectorAll('.add-btn');
  addBtn.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.color = isChecked ? "#703C2F" : "#EE7700";
      button.style.borderColor = isChecked ? "#703C2F" : "#EE7700";
    });

    button.addEventListener('mouseout', () => {
      button.style.color = "black";
      button.style.borderColor = "black";
    });
  });

  const profileModalBackBtn = document.getElementById("profileModalBackBtn");
  profileModalBackBtn.style.color = isChecked ? "#703C2F" : "#EE7700";
});