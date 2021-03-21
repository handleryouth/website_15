const button = document.querySelector(".dropdownButton");

const command = document.querySelector(".menubar-catalog");

/*for product*/
const product = document.querySelector(".sub-product");
const producth3 = document.querySelector(".product h3");

const company = document.querySelector(".sub-company")
const companyh3 = document.querySelector(".company h3");

const connect = document.querySelector(".sub-connect")
const connecth3 = document.querySelector(".connect h3");

/*for image*/
const arrow1 = document.querySelector(".selector1")
const arrow2 = document.querySelector(".selector2")
const arrow3 = document.querySelector(".selector3")


/*menubar catalog opacity changing*/
const opacity1 = document.querySelector(".menubar-selector1")
const opacity2 = document.querySelector(".menubar-selector2")
const opacity3 = document.querySelector(".menubar-selector3")

button.addEventListener("click", function(){
  if (command.classList.contains("menubar-catalog")){
    command.classList.add("menubar-catalog-shown")
    command.classList.remove("menubar-catalog")
  }

  else{
    command.classList.remove("menubar-catalog-shown")
    command.classList.add("menubar-catalog")
  }
})

producth3.addEventListener("click", function(){
  if (product.classList.contains("sub-product")){
    product.classList.add("sub-product-shown")
    product.classList.remove("sub-product")
    arrow1.classList.add("menubar-catalog-arrow-down")
    arrow1.classList.remove("menubar-catalog-arrow-up")
    opacity1.classList.remove("catalog-header-before")
    opacity1.classList.add("catalog-header-after")
  }

  else{
    product.classList.add("sub-product")
    product.classList.remove("sub-product-shown")
    arrow1.classList.remove("menubar-catalog-arrow-down")
    arrow1.classList.add("menubar-catalog-arrow-up")
    opacity1.classList.add("catalog-header-before")
    opacity1.classList.remove("catalog-header-after")
  }
})

companyh3.addEventListener("click", function(){
  if (company.classList.contains("sub-company")){
    company.classList.add("sub-company-shown")
    company.classList.remove("sub-company")
    arrow2.classList.add("menubar-catalog-arrow-down")
    arrow2.classList.remove("menubar-catalog-arrow-up")
    opacity2.classList.remove("catalog-header-before")
    opacity2.classList.add("catalog-header-after")
  }

  else{
    company.classList.add("sub-company")
    company.classList.remove("sub-company-shown")
    arrow2.classList.remove("menubar-catalog-arrow-down")
    arrow2.classList.add("menubar-catalog-arrow-up")
    opacity2.classList.add("catalog-header-before")
    opacity2.classList.remove("catalog-header-after")
  }
})

connecth3.addEventListener("click", function(){
  if (connect.classList.contains("sub-connect")){
    connect.classList.add("sub-connect-shown")
    connect.classList.remove("sub-connect")
    arrow3.classList.add("menubar-catalog-arrow-down")
    arrow3.classList.remove("menubar-catalog-arrow-up")
    opacity3.classList.remove("catalog-header-before")
    opacity3.classList.add("catalog-header-after")
  }

  else{
    connect.classList.add("sub-connect")
    connect.classList.remove("sub-connect-shown")
    arrow3.classList.remove("menubar-catalog-arrow-down")
    arrow3.classList.add("menubar-catalog-arrow-up")
    opacity3.classList.add("catalog-header-before")
    opacity3.classList.remove("catalog-header-after")
  }
})
