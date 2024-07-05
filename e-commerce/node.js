/*This are the the 3 sections we have*/
const mainSection = document.getElementById('main')
const categorySection = document.getElementById('category')
const descriptionSection = document.getElementById('productDescription')
const cartSection = document.getElementById('cart')
const loginSection = document.getElementById('login')
const mobileCategory = document.getElementById('mobile-category')
const navbarMobile = document.getElementById('navbarMobile')

/*This are the icon of the cart to appear the cartSection*/
const cart = document.querySelector('.nav-quantity')

/*This are the container of the scroll suggestion*/
const containerSC = document.querySelector('.suggestion-container--scroll')

/*This are the things that have to change in the description part*/
const productPicture = document.querySelector('.two-bg img')
const productTitle = document.querySelector('.two-description h3')
const productPrice = document.querySelector('.two-description h2')
const productDescription = document.querySelector('.three-description p:first-of-type')
const productCategory = document.querySelector('.product-description--title h3:nth-of-type(2)')
const productName = document.querySelector('.product-description--title h3:nth-of-type(3)')

const productSuggestions = document.querySelector('.also-like--more')

/*This are the container of the top rated or top latest i didn't remember*/
const containerTop = document.querySelector('.products')

/*This are the container of the favorites or categories*/
const containerFavorites = document.querySelector('.scroll-inner')
const mobileSlider = document.querySelector('.mobile-slider')
/*This are the main container of the categorySection*/
const containerCtgr = document.querySelector('.catalog-cards')
/*This are the cover of the categorySection*/
const categoryBackground = document.querySelector('.category-bg')
/*This are the title of the categories*/
const categoryTitle = document.querySelector('.category-title h1')

/*This are the container of the dropdown content*/
const containerDrop = document.querySelector('.dropdown-content')

/*This ar the button to add a product in description product*/
const buttonAddDescription = document.querySelector('.quantity-buttons button')
const numberProducts = document.querySelector('.number-products')
const numberProductsText = document.querySelector('.number-products p')
const minusDescription = document.querySelector('.quantity-minus')
const plusDescription = document.querySelector('.quantity-plus')
const textDescription = document.querySelector('.quantity-text')

/*This are the container of the list items of the cart*/
const containerCart = document.querySelector('.cart-list')
const cartTitleLeftH2 = document.querySelector('.cart-title--left h2:last-of-type')
const cartSummaryItems = document.querySelector('.cart-summary--items p:first-of-type')
const cartSummaryItems2 = document.querySelector('.cart-summary--items p:last-of-type')
const totalOrder = document.querySelector('.total-order')

/*This are the buttons for the login*/
const container = document.getElementById('container-login')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('loginBtn')

/*This are the button to the checkout*/
const buttonCheckCart = document.querySelector('.cartButtonA')

/*This are the variable to the dropdown in mobile*/

// const catalogListCategories = document.querySelector('.catalog-list--categories')
// const root = document.documentElement

/*This are the button to return to the menu*/
const navTitle = document.querySelector('.nav-title h1')
const iconUser = document.querySelector('.icon-user')
const menuMobile = document.querySelector('.menu-mobile')
const mobileLogo = document.querySelector('.mobile-logo')
const mobileTitle = document.querySelector('.mobile-title')