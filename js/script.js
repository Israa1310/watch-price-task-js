
var allProducts=document.querySelectorAll(".cart-div-img-1-h2")
var div=document.querySelector("#div1")
var btn = document.getElementById("btn1")
var divparent = document.getElementById("head-li-div2")
var div2 = document.querySelector("#div2")
var totalPrice=0
var iconcart=document.querySelector(".head-li3")
var headcart = document.getElementById("head-li-cart")
var num =1

allProducts.forEach(function(item){
  item.onclick = function (){
      totalPrice +=  +(item.getAttribute("price"))
      div.innerHTML += item.textContent + "  --- " 
      if (div.innerHTML != "" ){
          btn.style.display = "block";
          divparent.style.display = "block";
      }
  }
 })

iconcart.onclick = function(){
  headcart.innerHTML += num +num
}
 btn.onclick = function (){
  div2.innerHTML += totalPrice + "     "

 }
 