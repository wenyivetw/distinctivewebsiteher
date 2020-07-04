const apiResult = [{
    id:1,
    title: "SUMMER HAZE",
    color: "Blue",
    price: "20.00",
    season: "SUMMER",
    img: [
            {title: "side-a", path:"../img/style1pinkB.jpg"},//0
            {title: "side-b", path:"../img/style1pinkC.jpg"},//1
            {title: "main",   path:"../img/style1pinkA.jpg"},//2
        ],
    imgColors: [
        {
            color:"Baby Blue",
            img:[
                {title: "side-a", path:"../img/style1bblueB.jpg"},
                {title: "side-b", path:"../img/style1bblueB.jpg"},
                {title: "main", path:"../img/style1bblueA.jpg"},]
        },
        {
            color:"Yellow",
            img:[
                {title: "side-a", path:"../img/style1yellowB.jpg"},
                {title: "side-b", path:"../img/style1yellowC.jpg"},
                {title: "main", path:"../img/style1yellowA.jpg"},]
        }, 
        {
            color:"Pink",
            img:[
                {title: "side-a", path:"../img/style1pinkB.jpg"},
                {title: "side-b", path:"../img/style1pinkC.jpg"},
                {title: "main", path:"../img/style1pinkA.jpg"},]
        },
        {
             color:"Blue",
            img:[
                {title: "side-a", path:"../img/blue2.jpg"},
                {title: "side-b", path:"../img/blue2.jpg"},
                {title: "main", path:"../img/blue1.jpg"},]
        }
     ]
  }, {
    id:2,
    title: "GUILTY PLEASURE",
    season: "SPRING",
     img: [
            {title: "side-a", path:"../img/style2coraB.jpg"},
            {title: "side-b",  path:"../img/style2coraB.jpg"},
            {title: "main", path:"../img/style2coraA.jpg"},
        ],
     imgColors: [
        {
            color:"Purple",
            img:[
                {title: "side-a", path:"../img/style2purpleB.jpg"},
                {title: "side-b", path:"../img/style2purpleB.jpg"},
                {title: "main", path:"../img/style2purpleA.jpg"},]
        },
        {
            color:"Red",
            img:[
                {title: "side-a", path:"../img/style2coraB.jpg"},
                {title: "side-b", path:"../img/style2coraB.jpg"},
                {title: "main", path:"../img/style2coraA.jpg"},]
        }
     ],
    color: "blue",
    price: "20.00"
  }, {
    id:3,
    title: "WATERMELON SUGAR",
    season: "SUMMER",
    img: [
            {title: "side-a", path:"../img/style3blackB.jpg"},
            {title: "side-b", path:"../img/style3blackC.jpg"},
            {title: "main", path:"../img/style3blackA.jpg"},
    ],
      imgColors: [
        {
            color:"Green",
            img:[
                {title: "side-a", path:"../img/style3greenB.jpg"},
                {title: "side-b", path:"../img/style3greenC.jpg"},
                {title: "main", path:"../img/style3greenA.jpg"},]
        },
        {
            color:"Red",
            img:[
                {title: "side-a", path:"../img/style3redB.jpg"},
                {title: "side-b", path:"../img/style3redC.jpg"},
                {title: "main", path:"../img/style3redA.jpg"},]
        },
        {
            color:"Black",
            img:[
                {title: "side-a", path:"../img/style3blackB.jpg"},
            {title: "side-b", path:"../img/style3blackC.jpg"},
            {title: "main", path:"../img/style3blackA.jpg"},]
        }
     ],
    color: "Black",
    price: "20.00"
  },{
    id:4,
    title: "WATERMELON CANDY",
    season: "SUMMER",
    img: [
            {title: "side-a", path:"../img/style3greenB.jpg"},
            {title: "side-b", path:"../img/style3greenC.jpg"},
            {title: "main", path:"../img/style3greenA.jpg"},
    ],
      imgColors: [
        {
            color:"Green",
            img:[
                {title: "side-a", path:"../img/style3greenB.jpg"},
                {title: "side-b", path:"../img/style3greenC.jpg"},
                {title: "main", path:"../img/style3greenA.jpg"},]
        },
        {
            color:"Red",
            img:[
                {title: "side-a", path:"../img/style3redB.jpg"},
                {title: "side-b", path:"../img/style3redC.jpg"},
                {title: "main", path:"../img/style3redA.jpg"},]
        },
        {
            color:"Black",
            img:[
                {title: "side-a", path:"../img/style3blackB.jpg"},
            {title: "side-b", path:"../img/style3blackC.jpg"},
            {title: "main", path:"../img/style3blackA.jpg"},]
        }
     ],
    color: "Green",
    price: "20.00"
  },
];
  
// Fills collection list  
const container = document.getElementById('products');
  
  apiResult.forEach((object) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';
  
    // Construct card content
    const content = `
    <div class="article-column">
        <div class="product-card">
            <a href="detail.html?${object.id}">
                <img src="${object.img[2].path}" alt="Avatar" class="product-image" />
                <div class="overlay"></div>
                <div class="product-middle large">
                    <div class="product-text"><strong>SHOP NOW</strong></div>
                </div>
            </a>
            <div class="product-title">
                <h4>${object.title}</h4>
                <p class="product-price"><strong>${object.price}</strong></p>
            </div>
        </div>
    </div>
    `;
  
    // Append newyly created card element to the container
    container.innerHTML += content;
  });

// Shows all collection list
function resetCollection(){
    var element = document.getElementById("products");
    element.innerHTML = ''; // clear all collections DOM
    apiResult.forEach((object) => {
        // Create card element
        const card = document.createElement('div');
        card.classList = 'card-body';
      
        // Construct card content
        const content = `
        <div class="article-column">
            <div class="product-card">
                <a href="detail.html?${object.id}">
                    <img src="${object.img[2].path}" alt="Avatar" class="product-image" />
                    <div class="overlay"></div>
                    <div class="product-middle">
                        <span class="product-text"><strong>SHOP NOW</strong></span>
                    </div>
                </a>
                <div class="product-title">
                    <h4>${object.title}</h4>
                    <p class="product-price"><strong>${object.price}</strong></p>
                </div>
            </div>
        </div>
        `;
      
        // Append newyly created card element to the container
        container.innerHTML += content;
      });
}

//Shows collection by selected season
  function sortCollectionBySeason(season) {
    var array = apiResult.filter(object => object.season == season);

    if(array.length > 0){
        var element = document.getElementById("products");
        element.innerHTML = ''; // clear all collections DOM
        array.forEach((object) => {
            // Create card element
            const card = document.createElement('div');
            card.classList = 'card-body';
          
            // Construct card content
            const content = `
            <div class="article-column">
                <div class="product-card">
                    <a href="detail.html?${object.id}">
                        <img src="${object.img[2].path}" alt="Avatar" class="product-image" />
                        <div class="overlay"></div>
                        <div class="product-middle large">
                            <div class="product-text"><strong>SHOP NOW</strong></div>
                        </div>
                    </a>
                    <div class="product-title">
                        <h4>${object.title}</h4>
                        <p class="product-price"><strong>${object.price}</strong></p>
                    </div>
                </div>
            </div>
            `;
          
            // Append newyly created card element to the container
            container.innerHTML += content;
          });
    }else {
        alert("Season: "+ season +" does not exist!");
    }
  }