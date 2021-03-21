const button = document.querySelector(".dropdownButton");

const command = document.querySelector(".menubar-catalog");

/*for product*/
const product = document.querySelector(".sub-product");
const producth3 = document.querySelector(".product h3");

const company = document.querySelector(".sub-company")
const companyh3 = document.querySelector(".company h3");

const connect = document.querySelector(".sub-connect")
const connecth3 = document.querySelector(".connect h3");


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
  }

  else{
    product.classList.add("sub-product")
    product.classList.remove("sub-product-shown")
  }
})

companyh3.addEventListener("click", function(){
  if (company.classList.contains("sub-company")){
    company.classList.add("sub-company-shown")
    company.classList.remove("sub-company")
  }

  else{
    company.classList.add("sub-company")
    company.classList.remove("sub-company-shown")
  }
})

connecth3.addEventListener("click", function(){
  if (connect.classList.contains("sub-connect")){
    connect.classList.add("sub-connect-shown")
    connect.classList.remove("sub-connect")
  }

  else{
    connect.classList.add("sub-connect")
    connect.classList.remove("sub-connect-shown")
  }
})
