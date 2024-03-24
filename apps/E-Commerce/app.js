const wrapper = document.getElementById("wrapper");
const navBott = document.getElementById("navBott");
const menuItem = navBott.querySelectorAll(".menuItem");
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 119,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

const product = document.getElementById("product");
const productImg = product.querySelector('.productImg');
const currProductColor = product.querySelectorAll(".color");
const currProductSizes = product.querySelectorAll(".size");
const buyButton = product.querySelector('.productButton');
const payment = product.querySelector('.payment');
const close = payment.querySelector('.close');

//index = id - 0 of products id
menuItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        wrapper.style.transform = `translate(${-i * 100 + "vw"})`;
        //to change product information
        chosenProduct = products[i];

        product.querySelector(".productTitle").innerHTML = chosenProduct.title.toUpperCase();
        product.querySelector(".productPrice").innerHTML = chosenProduct.price;
        product.querySelector(".productImg").src = chosenProduct.colors[0].img;
        
        currProductColor.forEach((color, index) => {
            console.log(color.style.backgroundColor);
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

currProductColor.forEach((color, index ) => {
    color.addEventListener('click', () => {
        product.querySelector(".productImg").src = chosenProduct.colors[index].img;
    });
})

currProductSizes.forEach((size, index ) => {
    size.addEventListener('click', () => {
        currProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})

buyButton.addEventListener('click', () => {
  payment.style.display = 'flex';
});

close.addEventListener('click', () => {
  payment.style.display = 'none';
})



