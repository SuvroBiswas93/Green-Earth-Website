const categoriesContainer = document.getElementById('category-container')

const cardContainer = document.getElementById('card-container')





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
             <div class="card space-y-3 p-3 bg-white rounded-t">
                        <img src="${data.image}" alt="" class= "rounded-t md:h-50">
                            
                        <div class="px-2">
                                <h1 onclick = "loadPlantDetail(${data.id})" class="font-bold">${data.name}</h1>
                                <p class ="overflow-y-auto ">${data.description.substring(0,100)}...</p>
                        </div>
                        <div class="flex justify-between px-2">
                                <button class="bg-[#DCFCE7] text-sm p-2 rounded-3xl">${data.category}</button>
                                <p><i class="fa-solid fa-bangladeshi-taka-sign"></i><span id="amount">${data.price}</span></p>

                        </div>
                        <div>
                            <button id="add-card-btn" class="btn btn-info bg-green-500 border-none w-full px-2 text-center rounded-3xl text-white">Add to cart</button>
                        </div>
                    </div>
        
        `
    }
}

const loadPageByCategory = (id) =>{
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
             <div class="card space-y-3 p-3 bg-white rounded-t">
                        <img src="${category.image}" alt="" class= "rounded-t md:h-50">
                            
                        <div class="px-2">
                                <h1 class="font-bold">${category.name}</h1>
                                <p class ="overflow-y-auto">${category.description.substring(0,100)}...</p>
                        </div>
                        <div class="flex justify-between px-2">
                                <button id="category-btn" class="bg-[#DCFCE7] text-sm p-2 rounded-3xl">${category.category}</button>
                                <p><i class="fa-solid fa-bangladeshi-taka-sign"></i><span id="amount">${category.price}</span></p>

                        </div>
                        <div>
                            <button id="add-card-btn" class="btn btn-info bg-green-500 border-none w-full px-2 text-center rounded-3xl text-white">Add to cart</button>
                        </div>
                    </div>
        
        `
    })
    
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
                                <p><i class="fa-solid fa-bangladeshi-taka-sign"></i><span id="amount">${plant.price}</span></p>

                        </div>
                        
                       
                    </div>
        
        `
        document.getElementById('plant_modal').showModal()

        // document.getElementById('plant_modal').show
   
    
}






loadCategoryData()
loadDefaultPageData()