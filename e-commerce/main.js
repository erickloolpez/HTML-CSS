// const api = axios.create({
//     baseURL: 'https://enigmatic-woodland-15046-260b09a1f452.herokuapp.com/api/v1/',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     }
// })

const categories = ['Technology', 'Clothes', 'Garden', 'Sports', 'Mothers', 'Package', 'Clocks', 'Shoes']
let listCategories = []
const categoryImages = {
    'Technology': './img/tech.webp',
    'Clothes': './img/bgClothes.webp',
    'Garden': './img/bgGarden.webp',
    'Sports': './img/bgSports.webp',
    'Mothers': './img/bgMothers.webp',
    'Package': './img/bgPackage.webp',
    'Shoes': './img/bgShoes.webp',
    'Clocks': './img/bgClocks.webp',
};

function renderProducts(data, container) {
    container.innerHTML = ''

    let i = 1
    data.forEach(product => {
        fetch(`https://enigmatic-woodland-15046-260b09a1f452.herokuapp.com/api/v1/producto/${product.id}`) // reemplaza 'url_de_la_api' con la URL de tu API
            .then(response => response.json())
            .then(product => {
                const cardsContainer = document.createElement('div')
                cardsContainer.classList.add('catalog-cards--container')
                cardsContainer.addEventListener('click', () => {
                    location.hash = '#search=' + product.id
                })
                const containerImg = document.createElement('div')
                containerImg.classList.add('catalog-cards--img')
                containerImg.classList.add(`ctlg${i}`)

                const img = document.createElement('img')
                // img.setAttribute('src', product.image)
                // img.setAttribute('alt', product.title)
                img.setAttribute('src', product.foto)
                img.setAttribute('alt', product.nombre)

                const containerCart = document.createElement('div')
                containerCart.classList.add('catalog-cards--cart')

                const svg = document.createElement('img')
                svg.setAttribute('src', './svg/cart-shopping-solid.svg')

                const containerTitle = document.createElement('div')
                containerTitle.classList.add('catalog-cards--title')

                const h3 = document.createElement('h3')
                // const h3Text = document.createTextNode(product.nombre)
                const h3Text = document.createTextNode(product.nombre)

                const containerCategory = document.createElement('div')
                containerCategory.classList.add('catalog-cards--category')

                const firstP = document.createElement('p')
                // const textFirst = document.createTextNode(product.category)
                // const textFirst = document.createTextNode(product.categoriaId)
                const nombre = product.categoria.nombre; // reemplaza 'precio' con la clave correcta del precio en tu respuesta de la API
                const textFirst = document.createTextNode(nombre);
                firstP.appendChild(textFirst);

                const secondP = document.createElement('p')

                const precio = product.productoItems[0].precio; // reemplaza 'precio' con la clave correcta del precio en tu respuesta de la API
                const textSecond = document.createTextNode(precio);
                secondP.appendChild(textSecond);
                // const textSecond = document.createTextNode(product.precio)
                // const textSecond = document.createTextNode(precio)

                // secondP.appendChild(textSecond)
                // firstP.appendChild(textFirst)
                containerCategory.append(firstP, secondP)

                h3.appendChild(h3Text)
                containerTitle.appendChild(h3)

                containerCart.appendChild(svg)

                containerImg.append(img, containerCart)

                cardsContainer.append(containerImg, containerTitle, containerCategory)

                container.appendChild(cardsContainer)

                i += 1
            })
            .catch(error => console.error('Error:', error));
    })

}


function renderCategories() {
    const favoritesContainer = document.createElement('div')
    favoritesContainer.classList.add('favorites-container')

    const favoritesContainer2 = document.createElement('div')
    favoritesContainer2.classList.add('favorites-container')
    favoritesContainer2.classList.add('c2')

    for (let i = 0; i < 8; i++) {
        if (i < 4) {
            const firstContainer = document.createElement('div')
            firstContainer.classList.add('fav-container-child')
            firstContainer.addEventListener('click', () => {
                location.hash = '#category=' +categories[i]
            })

            const leftContainer = document.createElement('div')
            leftContainer.classList.add('fav-container-left')

            const leftInfo = document.createElement('div')
            leftInfo.classList.add('fav-container-left-info')
            const leftP = document.createElement('p')
            const leftPtext = document.createTextNode(`${categories[i]}`)

            const rightContainer = document.createElement('div')
            rightContainer.classList.add('fav-container-right')
            const baseImg = document.createElement('img')
            baseImg.setAttribute('src', './img/lol.png')
            const imgContainer = document.createElement('div')
            imgContainer.classList.add('fav-container-right-img')
            const img = document.createElement('img')
            switch (i) {
                case 0:
                    imgContainer.classList.add('onlyOne')
                    firstContainer.classList.add('one')
                    img.setAttribute('src', './img/asus.png')
                    break;
                case 1:
                    imgContainer.classList.add('onlyTwo')
                    firstContainer.classList.add('two')
                    img.setAttribute('src', './img/clothes.png')
                    break;

                case 2:
                    imgContainer.classList.add('onlyThree')
                    firstContainer.classList.add('three')
                    img.setAttribute('src', './img/garden.png')
                    break;

                case 3:
                    imgContainer.classList.add('onlyFour')
                    firstContainer.classList.add('four')
                    img.setAttribute('src', './img/gym.png')
                    break;
            }

            imgContainer.appendChild(img)
            rightContainer.append(baseImg, imgContainer)

            leftP.appendChild(leftPtext)
            leftInfo.appendChild(leftP)
            leftContainer.appendChild(leftInfo)

            firstContainer.append(leftContainer, rightContainer)
            favoritesContainer.appendChild(firstContainer)

        } else {
            const firstContainer = document.createElement('div')
            firstContainer.classList.add('fav-container-child')
            firstContainer.classList.add('c2')
            firstContainer.addEventListener('click', () => {
                location.hash = '#category=' + categories[i]
            })

            const leftContainer = document.createElement('div')
            leftContainer.classList.add('fav-container-left')

            const leftInfo = document.createElement('div')
            leftInfo.classList.add('fav-container-left-info')
            const leftP = document.createElement('p')
            const leftPtext = document.createTextNode(`${categories[i]}`)

            const rightContainer = document.createElement('div')
            rightContainer.classList.add('fav-container-right')
            const baseImg = document.createElement('img')
            baseImg.setAttribute('src', './img/lol.png')
            const imgContainer = document.createElement('div')
            imgContainer.classList.add('fav-container-right-img')
            const img = document.createElement('img')
            switch (i) {
                case 4:
                    imgContainer.classList.add('onlyOne')
                    firstContainer.classList.add('one')
                    img.setAttribute('src', './img/baby.png')
                    break;
                case 5:
                    imgContainer.classList.add('onlyEight')
                    firstContainer.classList.add('two')
                    img.setAttribute('src', './img/print.png')
                    break;

                case 6:
                    imgContainer.classList.add('onlyNine')
                    firstContainer.classList.add('three')
                    img.setAttribute('src', './img/reloj.png')
                    break;

                case 7:
                    imgContainer.classList.add('onlyTen')
                    firstContainer.classList.add('four')
                    img.setAttribute('src', './img/shoes.png')
                    break;
            }

            imgContainer.appendChild(img)
            rightContainer.append(baseImg, imgContainer)

            leftP.appendChild(leftPtext)
            leftInfo.appendChild(leftP)
            leftContainer.appendChild(leftInfo)

            firstContainer.append(leftContainer, rightContainer)
            favoritesContainer2.appendChild(firstContainer)

        }

    }
    containerFavorites.append(favoritesContainer, favoritesContainer2)
}

function renderCategoriesMobile() {
    const favoritesContainer = document.createElement('div')
    favoritesContainer.classList.add('mobile-slider')

    for (let i = 0; i < 8; i++) {
        const firstContainer = document.createElement('div')
        firstContainer.classList.add('fav-container-child')
        firstContainer.addEventListener('click', () => {
            location.hash = '#category=' + categories[i]
        })

        const leftContainer = document.createElement('div')
        leftContainer.classList.add('fav-container-left')

        const leftInfo = document.createElement('div')
        leftInfo.classList.add('fav-container-left-info')
        const leftP = document.createElement('p')
        const leftPtext = document.createTextNode(`${categories[i]}`)

        const rightContainer = document.createElement('div')
        rightContainer.classList.add('fav-container-right')
        const baseImg = document.createElement('img')
        baseImg.setAttribute('src', './img/lol.png')
        const imgContainer = document.createElement('div')
        imgContainer.classList.add('fav-container-right-img')
        const img = document.createElement('img')
        switch (i) {
            case 0:
                imgContainer.classList.add('onlyOne')
                firstContainer.classList.add('one')
                img.setAttribute('src', './img/asus.png')
                break;
            case 1:
                imgContainer.classList.add('onlyTwo')
                firstContainer.classList.add('two')
                img.setAttribute('src', './img/clothes.png')
                break;

            case 2:
                imgContainer.classList.add('onlyThree')
                firstContainer.classList.add('three')
                img.setAttribute('src', './img/garden.png')
                break;

            case 3:
                imgContainer.classList.add('onlyFour')
                firstContainer.classList.add('four')
                img.setAttribute('src', './img/gym.png')
                break;
            case 4:
                imgContainer.classList.add('onlyFive')
                firstContainer.classList.add('one')
                img.setAttribute('src', './img/baby.png')
                break;
            case 5:
                imgContainer.classList.add('onlyEight')
                firstContainer.classList.add('two')
                img.setAttribute('src', './img/print.png')
                break;

            case 6:
                imgContainer.classList.add('onlyNine')
                firstContainer.classList.add('three')
                img.setAttribute('src', './img/reloj.png')
                break;

            case 7:
                imgContainer.classList.add('onlyTen')
                firstContainer.classList.add('four')
                img.setAttribute('src', './img/shoes.png')
                break;
        }

        imgContainer.appendChild(img)
        rightContainer.append(baseImg, imgContainer)

        leftP.appendChild(leftPtext)
        leftInfo.appendChild(leftP)
        leftContainer.appendChild(leftInfo)

        firstContainer.append(leftContainer, rightContainer)
        favoritesContainer.appendChild(firstContainer)


    }
    mobileSlider.append(favoritesContainer)

}

function renderSuggestions() {
    // const { data } = await api.get('products?limit=6')
    // const { data } = await api.get('producto?limit=10&offset=1')
    // console.log('renderSuggestions', data)

    fetch(`https://enigmatic-woodland-15046-260b09a1f452.herokuapp.com/api/v1/producto?limit=10&offset=1`) // reemplaza 'url_de_la_api' con la URL de tu API
        .then(response => response.json())
        .then(data => {
            console.log('List Products', data)
            renderProducts(data, containerSC)
        })
        .catch(error => console.error('Error:', error));

}

function renderListCategories() {
    // const { data } = await api.get('products/categories')
    // console.log('List of categories', { data })

    // listCategories = data
    // console.log('This are the variable listCtgrs', listCategories)
}

function renderLatest() {
    // const { data } = await api.get('products?limit=8')
    // console.log('Top rated', { data })
    fetch(`https://enigmatic-woodland-15046-260b09a1f452.herokuapp.com/api/v1/producto?limit=10&offset=4`) // reemplaza 'url_de_la_api' con la URL de tu API
        .then(response => response.json())
        .then(data => {
            console.log('List Products', data)
            renderProducts(data, containerTop)
        })
        .catch(error => console.error('Error:', error));

    // renderProducts(data, containerTop)
}

function getProductBySearch(query) {
    // const { data } = await api.get(`products/${query}`)
    fetch(`https://enigmatic-woodland-15046-260b09a1f452.herokuapp.com/api/v1/producto/${query}`) // reemplaza 'url_de_la_api' con la URL de tu API
        .then(response => response.json())
        .then(data => {

            productPicture.setAttribute('src', data.foto)
            productTitle.innerHTML = data.nombre
            productPrice.innerHTML = data.productoItems[0].precio
            productDescription.innerHTML = data.descripcion
            productCategory.innerHTML = data.categoria.nombre
            productName.innerHTML = data.nombre

            mayLike(data.categoriaId)
            return data
        })
        .catch(error => console.error('Error:', error));
    // console.log('The query', { data })

    // productPicture.setAttribute('src', data.image)
    // productTitle.innerHTML = data.title
    // productPrice.innerHTML = data.price
    // productDescription.innerHTML = data.description
    // productCategory.innerHTML = data.category
    // productName.innerHTML = data.title

    // mayLike(data.category)
    // return data
}

function mayLike(query) {
    // const { data } = await api.get(`products/category/${query}`)
    fetch(`https://enigmatic-woodland-15046-260b09a1f452.herokuapp.com/api/v1/categoria/${query}`) // reemplaza 'url_de_la_api' con la URL de tu API
        .then(response => response.json())
        .then(data => {
            console.log('mayLike', data)
            renderProducts(data.productos, productSuggestions)
        })
        .catch(error => console.error('Error:', error));
    // console.log('For the may like', { data })
    // renderProducts(data, productSuggestions)
}

function setUpCategory(query) {
    // let num = randomNumber()
    // console.log('This are the randomNumber', num)
    // const { data } = await api.get(`products/category/${listCategories[num]}`)

    fetch(`https://enigmatic-woodland-15046-260b09a1f452.herokuapp.com/api/v1/categoria/${query}`)
        .then(response => response.json())
        .then(data => {
            categoryTitle.innerHTML = data.nombre;

            const imageUrl = categoryImages[data.nombre];
            if (imageUrl) {
                categoryBackground.style.setProperty('background-image', `url("${imageUrl}")`);
            }

            renderProducts(data.productos, containerCtgr);

        })
        .catch(error => console.error('Error:', error));

    // categoryTitle.innerHTML = query

    // switch (query) {
    //     case 'Technology':
    //         categoryBackground.style.setProperty('background-image', 'url("./img/tech.jpg")')
    //         break;
    //     case 'Clothes':
    //         categoryBackground.style.setProperty('background-image', 'url("./img/bgClothes.jpg")')
    //         break;
    //     case 'Garden':
    //         categoryBackground.style.setProperty('background-image', 'url("./img/bgGarden.jpg")')
    //         break;
    //     case 'Sports':
    //         categoryBackground.style.setProperty('background-image', 'url("./img/bgSports.jpg")')
    //         break;
    //     case 'Mothers':
    //         categoryBackground.style.setProperty('background-image', 'url("./img/bgMothers.jpg")')
    //         break;
    //     case 'Package':
    //         categoryBackground.style.setProperty('background-image', 'url("./img/bgPackage.jpg")')
    //         break;
    //     case 'Shoes':
    //         categoryBackground.style.setProperty('background-image', 'url("./img/bgShoes.jpg")')
    //         break;
    //     case 'Clocks':
    //         categoryBackground.style.setProperty('background-image', 'url("./img/bgClocks.jpg")')
    //         break;
    // }

    // console.log('this are the setUp', { data })

    // renderProducts(data, containerCtgr)
}

function renderDropDown() {
    containerDrop.innerHTML = ''
    let i = 0

    categories.forEach(item => {
        const li = document.createElement('li')
        const currentI = i + 1
        li.addEventListener('click', () => {
            location.hash = '#category=' + item
        })
        const liLabel = document.createElement('h3')
        liLabel.setAttribute('id','id'+currentI)
        const liText = document.createTextNode(`${item}`)

        const dotted = document.createElement('div')
        dotted.classList.add('dotted')

        const p = document.createElement('p')
        const pText = document.createTextNode('4')

        liLabel.appendChild(liText)
        p.appendChild(pText)
        li.append(liLabel, dotted, p)
        containerDrop.appendChild(li)

        i++
    })
}

function setUpCart(query, num, product) {
    // const { data } = await api.get(`products/${query}`)
    containerCart.innerHTML = ''

    const productDetails = document.createElement('div')
    productDetails.classList.add('cart-titleColumnOne')
    const h3productDetails = document.createElement('h3')
    const textProductDetails = document.createTextNode('PRODUCT DETAILS')

    h3productDetails.appendChild(textProductDetails)
    productDetails.appendChild(h3productDetails)

    const productQuantity = document.createElement('div')
    productQuantity.classList.add('cart-titleColumns')    
    const h3productQuantity = document.createElement('h3')
    const textProductQuantity = document.createTextNode('QUANTITY')

    h3productQuantity.appendChild(textProductQuantity)
    productQuantity.appendChild(h3productQuantity)

    const productPrice = document.createElement('div')
    productPrice.classList.add('cart-titleColumns')
    const h3productPrice = document.createElement('h3')
    const textProductPrice = document.createTextNode('PRICE')

    h3productPrice.appendChild(textProductPrice)
    productPrice.appendChild(h3productPrice)

    const productTotal = document.createElement('div')
    productTotal.classList.add('cart-titleColumns')
    const h3productTotal = document.createElement('h3')
    const textProductTotal = document.createTextNode('TOTAL')

    h3productTotal.appendChild(textProductTotal)
    productTotal.appendChild(h3productTotal)

    containerCart.append(productDetails, productQuantity, productPrice, productTotal)


    fetch(`https://enigmatic-woodland-15046-260b09a1f452.herokuapp.com/api/v1/producto/${query}`) // reemplaza 'url_de_la_api' con la URL de tu API
        .then(response => response.json())
        .then(data => {
            const containerCartProduct = document.createElement('div')
            containerCartProduct.classList.add('cart-product')

            const containerCartImg = document.createElement('div')
            containerCartImg.classList.add('cart-product--img')

            const cartImg = document.createElement('img')
            cartImg.setAttribute('src', data.foto)


            const containerCartInfo = document.createElement('div')
            containerCartInfo.classList.add('cart-product--info')

            const firstPcart = document.createElement('p')
            const firstTextCart = document.createTextNode(data.nombre)

            const secondPcart = document.createElement('p')
            const secondTextCart = document.createTextNode(data.categoria.nombre)

            const thirdPcart = document.createElement('p')
            const thirdTextCart = document.createTextNode('Remove')


            const containerCartQuantity = document.createElement('div')
            containerCartQuantity.classList.add('cart-quantity')

            const containerCartMinus = document.createElement('div')
            containerCartMinus.classList.add(`cart-minus_${data.id}`)
            containerCartMinus.classList.add('minuSvg')
            containerCartMinus.addEventListener('click', () => {
                const [nameClass, id] = containerCartMinus.className.split('_')
                const [finalID, otherClass] = id.split(' ')
                console.log('VEAMOS ID:', finalID)
                let textQuantity = document.querySelector(`.cart-text_${finalID}`)
                let textPrice = document.querySelector(`.cart-price_${finalID}`)
                let numberTextQuantity = parseFloat(textPrice.textContent)
                let textTotal = document.querySelector(`.cartTotal${finalID}`)

                if (product.number > 1) {
                    product.number -= 1
                    product.total = product.number * numberTextQuantity
                    stateTotal()
                    textQuantity.innerHTML = product.number
                    textTotal.innerHTML = product.total

                }

                // textTotal.innerHTML = pr.number 
            })


            const cartMinusImg = document.createElement('img')
            cartMinusImg.setAttribute('src', './svg/minus-solid.svg')

            const containerCartText = document.createElement('div')
            containerCartText.classList.add(`cart-text_${data.id}`)

            const cartQtext = document.createElement('p')
            const cartQtextContent = document.createTextNode(num)

            const containerCartPlus = document.createElement('div')
            containerCartPlus.classList.add(`cart-plus_${data.id}`)
            containerCartPlus.classList.add('pluSvg')
            containerCartPlus.addEventListener('click', () => {
                const [nameClass, id] = containerCartPlus.className.split('_')
                const [finalID, otherClass] = id.split(' ')
                console.log('VEAMOS ID:', finalID)
                let textQuantity = document.querySelector(`.cart-text_${finalID}`)
                let textPrice = document.querySelector(`.cart-price_${finalID}`)
                let numberTextQuantity = parseFloat(textPrice.textContent)
                let textTotal = document.querySelector(`.cartTotal${finalID}`)

                product.number += 1
                product.total = product.number * numberTextQuantity
                stateTotal()
                textQuantity.innerHTML = product.number
                textTotal.innerHTML = product.total

                // textTotal.innerHTML = pr.number 


            })

            const cartPlusImg = document.createElement('img')
            cartPlusImg.setAttribute('src', './svg/plus-solid.svg')


            const containerCartPrice = document.createElement('div')
            containerCartPrice.classList.add(`cart-price_${data.id}`)
            containerCartPrice.classList.add(`cart-price`)

            const priceCart = document.createElement('p')
            const priceTextCart = document.createTextNode(`${data.productoItems[0].precio}`)

            const containerCartTotal = document.createElement('div')
            containerCartTotal.classList.add('cart-total')
            containerCartTotal.classList.add(`cartTotal${data.id}`)

            const totalCart = document.createElement('p')
            const totalTextCart = document.createTextNode(`${num * data.productoItems[0].precio}`)


            totalCart.appendChild(totalTextCart)
            containerCartTotal.appendChild(totalCart)

            priceCart.appendChild(priceTextCart)
            containerCartPrice.appendChild(priceCart)

            containerCartPlus.appendChild(cartPlusImg)

            cartQtext.appendChild(cartQtextContent)
            containerCartText.appendChild(cartQtext)

            containerCartMinus.appendChild(cartMinusImg)

            containerCartQuantity.append(containerCartMinus, containerCartText, containerCartPlus)

            thirdPcart.appendChild(thirdTextCart)
            secondPcart.appendChild(secondTextCart)
            firstPcart.appendChild(firstTextCart)

            containerCartInfo.append(firstPcart, secondPcart, thirdPcart)

            containerCartImg.appendChild(cartImg)

            containerCartProduct.append(containerCartImg, containerCartInfo)


            containerCart.append(containerCartProduct, containerCartQuantity, containerCartPrice, containerCartTotal)

            product.setTotal(product.number * data.productoItems[0].precio)
            stateTotal()

        })
        .catch(error => console.error('Error:', error));

}

function randomNumber(max = 3, min = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}