const categoriesContainer = document.getElementById('category-container')

const cardContainer = document.getElementById('card-container')

const rightContainer =  document.getElementById('aside-right-container')

const totalPrice = document.getElementById('total-price')

const loader = document.getElementById('manage-spinner')


const loadCategoryData = () =>{
    fetch(`https://openapi.programming-hero.com/api/categories`)
    .then(res => res.json())
    .then(data => displayCategoryData(data.categories))
    .catch(err => console.log('data Fetching error'))
}

const displayCategoryData = (categoryName =>{
    // console.log(categoryName)
    categoryName.forEach(name => {
        categoriesContainer.innerHTML+= `
                    <div>
                        <ul class="py-1">
                            <button  onclick ="loadPageByCategory(${name.id})" class = "category px-1 text-left hover:bg-green-500 active:bg-green-600 w-full rounded cursor-pointer">${name.category_name}</button>
                        </ul>
                    </div>
        `
    });

    categoriesContainer.addEventListener('click',e =>{
        const allBtn = document.querySelectorAll('.category')

        allBtn.forEach(btn =>{
            btn.classList.remove('bg-green-500')
        })
        if(e.target.localName === "button"){
            e.target.classList.add('bg-green-500')
        }
    })
})

const loadDefaultPageData = () =>{
    manageSpinner(true)
    const url = `https://openapi.programming-hero.com/api/plants`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDefaultPageData(data.plants))
    .catch(err => console.log(err))
}

const displayDefaultPageData = (defaultData) =>{
    cardContainer.innerHTML = "";
    for (const data of defaultData) {
        // console.log(data)
        cardContainer.innerHTML += `
             <div id = "${data.id}" class="card space-y-3 p-3 bg-white rounded-t">
                        <img src="${data.image}" alt="" class= "rounded-t md:h-50">
                            
                        <div class="px-2">
                                <h1 onclick = "loadPlantDetail(${data.id})" class="font-bold cursor-pointer">${data.name}</h1>
                                <p class ="overflow-y-auto ">${data.description.substring(0,100)}...</p>
                        </div>
                        <div class="flex justify-between px-2">
                                <button class="bg-[#DCFCE7] text-sm p-2 rounded-3xl">${data.category}</button>
                                <p><i class="fa-solid fa-bangladeshi-taka-sign"></i><span class ="text-green-600" id="amount">${data.price}</span></p>

                        </div>
                        <div>
                            <button id="add-card-btn" class="btn btn-info bg-green-500 border-none w-full px-2 text-center rounded-3xl text-white">Add to cart</button>
                        </div>
                    </div>
        
        `
    }
    manageSpinner(false)
    return;
}

const loadPageByCategory = (id) =>{
    manageSpinner(true)
    console.log(id)
   const url = `https://openapi.programming-hero.com/api/category/${id}`
   fetch(url)
   .then(res => res.json())
   .then(data =>{
    console.log(data)
        displayPageByCategory(data.plants)
        
   })
   
   .catch(err => console.log('Something Went Wrong'))
}

const displayPageByCategory = (categoryCard) =>{

    cardContainer.innerHTML = ""
   
    categoryCard.forEach(category =>{
         cardContainer.innerHTML += `
             <div id = "${category.id}" class="card space-y-3 p-3 bg-white rounded-t">
                        <img src="${category.image}" alt="" class= "rounded-t md:h-50">
                            
                        <div class="px-2">
                                <h1 onclick = "loadPlantDetail(${category.id})" class="font-bold cursor-pointer">${category.name}</h1>
                                <p class ="overflow-y-auto">${category.description.substring(0,100)}...</p>
                        </div>
                        <div class="flex justify-between px-2">
                                <button id="category-btn" class="bg-[#DCFCE7] text-sm p-2 rounded-3xl">${category.category}</button>
                                <p><i class="fa-solid fa-bangladeshi-taka-sign"></i><span class ="text-green-600" id="amount">${category.price}</span></p>

                        </div>
                        <div>
                            <button id="add-card-btn" class="btn btn-info bg-green-500 border-none w-full px-2 text-center rounded-3xl text-white">Add to cart</button>
                        </div>
                    </div>
        
        `


    })
    manageSpinner(false)
    return
    
}


const loadPlantDetail = (id) =>{
    console.log(id)
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlantDetail(data.plants))
}

const displayPlantDetail = (plant) =>{
   const modalContainer = document.getElementById('modal-container')
   

        modalContainer.innerHTML = `
        
             <div class="card space-y-3 p-2 bg-white rounded-t">
                        <img src="${plant.image}" alt="" class= "rounded-t md:h-60">
                            
                        <div class="px-2">
                                <h1 class="font-bold">${plant.name}</h1>
                                <p class ="overflow-y-auto">${plant.description}</p>
                        </div>
                        <div class="flex justify-between px-2">
                                <button id="category-btn" class="bg-[#DCFCE7] text-sm p-2 rounded-3xl">${plant.category}</button>
                                <p ><i class="fa-solid fa-bangladeshi-taka-sign"></i><span class = "text-green-600" id="amount">${plant.price}</span></p>

                        </div>
                        
                       
                    </div>
        
        `
        document.getElementById('plant_modal').showModal()

   
    
}



cardContainer.addEventListener('click',e =>{
    
    if(e.target.innerText === 'Add to cart'){
        console.log('button clicked')
        const card = e.target.closest('.card')
        const title = card.querySelector('h1').innerText
        const price = Number(card.querySelector('#amount').innerText)
        console.log(title)
        console.log(price)

       const cartItem = document.createElement('div')
       
       cartItem.classList.add('cart-item', 'flex','justify-between','w-full','my-2','bg-[#F0FDF4]','p-2') 

        cartItem.innerHTML = `
            <div>
                <h1 class="font-semibold">${title}</h1>
                <p class="text-gray-500">${price}</p>
            </div>
            <button class="clear-btn cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
        `
        
        rightContainer.appendChild(cartItem)
        updateTotalPrice()
        cartItem.querySelector('.clear-btn').addEventListener('click', () => {
            cartItem.remove()
            updateTotalPrice()
        })
        
    }
})


const updateTotalPrice = () =>{
    let total = 0;
    const cartItems = document.querySelectorAll('.cart-item')
    cartItems.forEach(item => {
        const price = item.querySelector('p').innerText
        const priceConverted = Number(price)
        total+=priceConverted
    })
    totalPrice.innerText = total
}


const manageSpinner = (status) =>{
    if(status === true){
        loader.classList.remove('hidden')
        cardContainer.classList.add('hidden')
    }
    else{
        loader.classList.add('hidden')
        cardContainer.classList.remove('hidden')
    }
}

loadCategoryData()
loadDefaultPageData()