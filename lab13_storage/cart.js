// collect the elements 
const priceitem_display = document.querySelector(".priceitem_display")
const quantity_display = document.querySelector(".quantity_display")
const totalprice_display = document.querySelector(".totalprice_display")

// get values for quantity and price per unit 
const priceitem = sessionStorage.getItem("saleprice")
const quantityitem = sessionStorage.getItem("quantityitem1")

// calculate for the total price 
const totalprice = (priceitem * quantityitem).toFixed(2)

// print the price, quantity, and total price in the collected elements
priceitem_display.innerHTML = `$ ${priceitem}`
quantity_display.innerHTML = quantityitem
totalprice_display.innerHTML = `$ ${totalprice}`
