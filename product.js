const apiResult = [{
    id:1,
    title: "SUMMER HAZE",
    description: "desc1",
    img: "img/newArrivalModel1.jpg",
    color: "black",
    price: 20
  }, {
    id:2,
    title: "GUILTY PLEASURE",
    description: "desc2",
    img: "img/newArrivalModel3.jpg",
    color: "white",
    price: 20
  }, {
    id:3,
    title: "WATERMELON SUGAR",
    description: "desc3",
    img: "img/newArrivalModel2.jpg",  
    color: "yellow",
    price: 20
  }];
  
  
  //Fill new arrival products
  const container = document.getElementById('products');
  
  apiResult.forEach((object) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';
  
    // Construct card content
    const content = `
    <div class="article-column">
        <div class="column-center">
        <a href="pages/detail.html?${object.id}">
            <div class="product-card">
                <img src="${object.img}" alt="Avatar" class="product-image" />
                <div class="overlay"></div>
                <div class="product-middle">
                    <div class="product-text"><strong>SHOP NOW</strong></div>
                </div>
                <div class="product-title"><strong>${object.title}</strong></div>
            </div>
            </a>
        </div>
    </div>
    `;
  
    // Append newyly created card element to the container
    container.innerHTML += content;
  })