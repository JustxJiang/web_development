// collect the elements 
const priceitem_display = document.querySelector(".priceitem_display")
const quantity_display = document.querySelector(".quantity_display")
const totalprice_display = document.querySelector(".totalprice_display")
const itemimg = document.querySelector('.itemimg')
const itemdescription = document.querySelector('.itemdescriptiondisplay')


// get values for quantity and price per unit 
const priceitem = sessionStorage.getItem("saleprice")
const quantityitem = sessionStorage.getItem("quantityitem1")
const itemimage = sessionStorage.getItem('itemimg1')
const description_item = sessionStorage.getItem('itemdescription')


// calculate for the total price 
const totalprice = (priceitem * quantityitem).toFixed(2)


/*
// this is good for one data (product)
// print the price, quantity, and total price in the collected elements
priceitem_display.innerHTML = `$ ${priceitem}`
quantity_display.innerHTML = `${quantityitem}`
totalprice_display.innerHTML = `$ ${totalprice}`
*/

// append image and item description
let image = document.createElement('img')
image.src = sessionStorage.getItem('imgitem1')
image.style.width = "75px"

itemimg.append(image)

// append product description
let product = document.createElement('p')
product.innerHTML = description_item
itemdescription.append(product)

// append price 
let productprice = document.createElement('p')
productprice.innerHTML = priceitem
priceitem_display.append(productprice)

// append quantity
let totalquantity = document.createElement('p')
totalquantity.innerHTML = quantityitem
quantity_display.append(totalquantity)

// append total price 
let t = document.createElement('p')
t.innerHTML = totalprice
totalprice_display.append(t)