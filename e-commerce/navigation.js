let provisionalCounter = 0
let counter = 1
let listProducts = []
let flag = true
let rows = ''

class Product {
   constructor(id, number) {
      this.id = id
      this.number = number
      this.total = 0
   }

   setTotal(value) {
      this.total = value
   }
}

// catalogListCategories.addEventListener('click',()=>{
//    rows = getComputedStyle(root).getPropertyValue('--rows')
//    if(rows === '0fr'){
//    root.style.setProperty('--rows','1fr')
//    }else{
//    root.style.setProperty('--rows','0fr')
//    }
// })
navTitle.addEventListener('click', () => {
   mainSection.style.display = 'block'
   categorySection.style.display = 'none';
   descriptionSection.style.display = 'none'
   cartSection.style.display = 'none'
   loginSection.style.display = 'none'

   location.hash = '/home'
})

mobileTitle.addEventListener('click', () => {
   mainSection.style.display = 'block'
   categorySection.style.display = 'none';
   descriptionSection.style.display = 'none'
   cartSection.style.display = 'none'
   loginSection.style.display = 'none'
   location.hash = '/home'
}
)

iconUser.addEventListener('click', () => {
   mainSection.style.display = 'none'
   categorySection.style.display = 'none';
   descriptionSection.style.display = 'none'
   cartSection.style.display = 'none'
   loginSection.style.display = 'block'
})

mobileLogo.addEventListener('click', () => {
   if (menuMobile.style.display == 'block') {
      menuMobile.style.display = 'none'
   } else {
      menuMobile.style.display = 'block'
   }
})

registerBtn.addEventListener('click', () => {
   container.classList.add('active')
})

loginBtn.addEventListener('click', () => {
   container.classList.remove('active')
})

function initContent() {
   mainSection.style.display = 'block'
   categorySection.style.display = 'none';
   descriptionSection.style.display = 'none'
   cartSection.style.display = 'none'
   loginSection.style.display = 'none'

   renderSuggestions()
   renderCategories()
   renderCategoriesMobile()
   renderLatest()
   // renderListCategories()
}

window.addEventListener('DOMContentLoaded', initContent)
window.addEventListener("hashchange", navigator, false)

cart.addEventListener('click', () => {
   location.hash = '#cart='
})

buttonAddDescription.addEventListener('click', () => {
   numberProducts.style.display = 'flex'
   provisionalCounter += counter
   numberProductsText.innerHTML = provisionalCounter

   const [urlPage, searchValue] = location.hash.split('=')
   listProducts.forEach(product => {
      if (product.id == searchValue) {
         product.number += counter
         flag = false
      }
   })

   if (flag) {
      let pr = new Product(searchValue, counter)
      listProducts.push(pr)
   }

   counter = 1
   textDescription.innerHTML = counter
   console.log('List cart', listProducts)
})

minusDescription.addEventListener('click', () => {
   if (counter > 1) {
      counter -= 1
      textDescription.innerHTML = counter
   }
})
plusDescription.addEventListener('click', () => {
   counter += 1
   textDescription.innerHTML = counter
})

buttonCheckCart.addEventListener('click', () => {
   mainSection.style.display = 'none'
   categorySection.style.display = 'none';
   descriptionSection.style.display = 'none'
   cartSection.style.display = 'none'
   loginSection.style.display = 'block'

})

function navigator() {
   if (location.hash.startsWith('#search=')) {
      topSreen()
      searchProduct()
   } else if (location.hash.startsWith('#category=')) {
      topSreen()
      getCategories()
   } else if (location.hash.startsWith('#cart=')) {
      topSreen()
      getCart()
   }

}

function searchProduct() {
   categorySection.style.display = 'none'
   mainSection.style.display = 'none'
   descriptionSection.style.display = 'block'

   const [urlPage, searchValue] = location.hash.split('=')
   getProductBySearch(searchValue)
}

function getCategories() {
   mainSection.style.display = 'none'
   let query = 0

   renderDropDown()

   const [urlPage, searchValue] = location.hash.split('=')

   switch (searchValue) {
      case 'Technology':
         query = 2;
         break;
      case 'Clothes':
         query = 3;
         break;
      case 'Garden':
         query = 4;
         break;
      case 'Sports':
         query = 5;
         break;
      case 'Mothers':
         query = 6;
         break;
      case 'Package':
         query = 7;
         break;
      case 'Clocks':
         query = 8;
         break;
      case 'Shoes':
         query = 9;
         break;
   }
   setUpCategory(query)

   categorySection.style.display = 'block'
}

function getCart() {
   mainSection.style.display = 'none'
   descriptionSection.style.display = 'none'
   categorySection.style.display = 'none'

   const promises = listProducts.map(product => setUpCart(product.id, product.number, product))

   Promise.all(promises)
      .then(() => {
         stateTotal()
         cartSection.style.display = 'block'
      })
}

function stateTotal() {
   const totalProducts = listProducts.reduce((sum, product) => sum + product.number, 0);
   const total = listProducts.reduce((sum, product) => sum + product.total, 0);

   cartTitleLeftH2.innerHTML = `${totalProducts} Items`
   cartSummaryItems.innerHTML = `${totalProducts} Items`
   cartSummaryItems2.innerHTML = `$${total.toFixed(2)}`
   totalOrder.innerHTML = `${total.toFixed(2)}`
}

function topSreen() {
   document.body.scrollTop = 0
   document.documentElement.scrollTop = 0
}