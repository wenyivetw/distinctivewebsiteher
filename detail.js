const apiResult = [{
    id:1,
    title: "SUMMER HAZE",
    img: [
    		{title: "side-a", path:"../img/style1pinkB.jpg"},
    		{title: "side-b", path:"../img/style1pinkC.jpg"},
    		{title: "main", path:"../img/style1pinkA.jpg"},
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
        },{
             color:"Blue",
            img:[
                {title: "side-a", path:"../img/blue2.jpg"},
                {title: "side-b", path:"../img/blue2.jpg"},
                {title: "main", path:"../img/blue1.jpg"},]
        }
     ],
    color: "Blue",
    price: 20.00
  }, {
    id:2,
    title: "GUILTY PLEASURE ",
    description: "desc2",
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
    price: 20.00
  }, {
    id:3,
    title: "WATERMELON SUGAR",
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
	    		{title: "side-b", path:"../img/style3greenB.jpg"},
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
    price: 20.00
  },{
    id:4,
    title: "WATERMELON CANDY",
    season: "SUMMER",
    img: [
            {title: "side-a", path:"../img/style3greenB.jpg"},
            {title: "side-b", path:"../img/style3greenB.jpg"},
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
    price: 20.00
  },
];


// Extract id from url and find product in array
var baseUrl = (window.location).href; // Extract url
var Id = baseUrl.substring(baseUrl.lastIndexOf('?') + 1); //Extract id from base url
var product = apiResult.find( result => result.id === parseInt(Id)); // find product by id

// Sets text DOM elements
document.getElementById('totalPrice').innerText = product.price;
document.getElementById('product-title').innerText = product.title;
document.getElementById('productPrice').innerText = product.price;
fillProductImages();
fillColorsDropdown();

//Set DOM size of selected value 
function setSize(value){
	var  sizeComponent = document.getElementById('size');
	sizeComponent.innerHTML = value;
}

//Set DOM color of selected value & set images of selected color
function setColor(value){
	var  colorComponent = document.getElementById('color');
	colorComponent.innerHTML = value;
    // set images
	var imgColorProduct = product.imgColors.find(result => result.color === value); // find object by color
	document.getElementById('image-a').src = imgColorProduct.img[0].path;
	document.getElementById('image-b').src = imgColorProduct.img[1].path;
	document.getElementById('main-image').src = imgColorProduct.img[2].path;
}

// Set total price based on amount number
function setTotalPrice(){
	var  totalPriceInputComponent = document.getElementById('amount').value;
	var totalPrice = product.price *  parseInt(totalPriceInputComponent);
	document.getElementById('totalPrice').innerHTML = totalPrice+",-";
}

// set images 
function fillProductImages(){
	document.getElementById('image-a').src = product.img[0].path;
	document.getElementById('image-b').src = product.img[1].path;
	document.getElementById('main-image').src = product.img[2].path;
}

// Fills dropdown button with available colors of the object
function fillColorsDropdown(){
	const container = document.getElementById('dropdown-content-color');
	if(product.imgColors.length > 0){
			product.imgColors.forEach( result => {
		    // Create card element
		    const colors = document.createElement('div');
		    colors.classList = 'color-body';
		  
		    // Construct card content
		    const content = `
		 		 <li onclick="setColor('${result.color}')">${result.color}</li>
		    `;
		  
		    // Append newyly created card element to the container
		    container.innerHTML += content;
  		});
	}
}

// Change side images with main image
function changeImage(value){
    var srcMain = document.getElementById('main-image').src; 
    var srcA = document.getElementById('image-a').src; 
    var srcB = document.getElementById('image-b').src; 
    // A = side-image-a
    if(value === "A"){
       document.getElementById('image-a').src = srcMain;
       document.getElementById('main-image').src = srcA;
    }
    // B = side-image-b
    else if(value === "B"){
       document.getElementById('image-b').src = srcMain;
       document.getElementById('main-image').src = srcB;
    }
}    


