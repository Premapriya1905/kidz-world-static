var button=document.getElementsByClassName('button')
var cvalue=document.getElementById('cart-value')
var cartButton=document.getElementById("cart")

var items = [
    {
      name: "This was our pact",
      quantity: 0,
      dollars: 7,
      cents: 49,
    },
    {
      name: "The famous five",
      quantity: 0,
      dollars: 4,
      cents: 59,
    },
    {
      name: "Matilda",
      quantity: 0,
      dollars: 6,
      cents: 80,
    },
    {
      name: "Harry Potter",
      quantity: 0,
      dollars: 10,
      cents: 0,
    },
    {
      name: "For Young Readers",
      quantity: 0,
      dollars: 7,
      cents: 29,
    },
    {
      name: "Wimpy Kid - DIY",
      quantity: 0,
      dollars: 4,
      cents: 99,
    },
    {
      name: "Dart Board",
      quantity: 0,
      dollars: 17,
      cents: 49,
    },
    {
      name: "Connect Four",
      quantity: 0,
      dollars: 19,
      cents: 99,
    },
    {
      name: "Jenga",
      quantity: 0,
      dollars: 20,
      cents: 99,
    },
    {
      name: "Monopoly",
      quantity: 0,
      dollars: 19,
      cents: 49,
    },
    {
      name: "Bookmarks",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Birthday Card",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Stuffed toys",
      quantity: 0,
      dollars: 15,
      cents: 99,
    },
    {
      name: "Dream catcher drawing",
      quantity: 0,
      dollars: 18,
      cents: 49,
    },
  ];


function updateCart() {
    let value = 0;
    for (index = 0; index < items.length; index++) {
      value =value + items[index].quantity;
    }
    cvalue.innerHTML = '('+value+')';
}
 for (let i = 0; i < button.length; i++) {
    button[i].onclick = () => {
      items[i].quantity++;
      updateCart();
    };
}


var totalDollars = 0;
var totalCents = 0;

function updatePrice() {
    let priceInCents = 0;
  
    for (index = 0; index < items.length; index++) {
      priceInCents =
        priceInCents +
        items[index].quantity * (items[index].dollars * 100 + items[index].cents);
    }
    totalDollars = Math.floor(priceInCents / 100);
    totalCents = priceInCents % 100;
}



cartButton.onclick = () => {
  updatePrice()

    
    for (let index = 0; index < items.length; index++) {
      if (items[index].quantity != 0) {
        console.log(
          "Item name: " +
            items[index].name +
            " - Quantity: " +
            items[index].quantity
        )
      }
    }
  
    console.log(
      "The total amount is " + totalDollars + "$ and " + totalCents + " cents"
    );
};





// var cartbutton=document.querySelectorAll(".button")
// var cartvalue=document.querySelectorAll("#cart-value")
// var cartimage=document.querySelectorAll('#cart img')
// var cartbook=document.querySelectorAll('h3')
// var cartprice=document.querySelectorAll('div p')

// let items=[];
// let total=0;
// let allitems=0;

// function show(p){
//     var name=cartbook[p].textContent;
//     var amount=parseFloat(cartprice[p].textContent.replace("$",""))
//     var exist=items.find((item)=>item.name===name)

//     if(exist){
//         exist.quantity+=1
//     }else{
//         items.push({name,amount,quantity:1})
//     }

//     total+=amount;
//     allitems+=1;
//     cartvalue.innerHTML=allitems;
// }

// cartimage.onclick= () =>{
//     for(let i=0; i<items.length; i++){
//         console.log("Item name",items[i].name,"Quantity",items[i].quantity)
//     }
//     var dollar=math.floor(total)
//     var cents=Math.floor(total-dollar)*100;
//     console.log(`The total amount is ${dollar} $ dollars and ${cents} only`)

// }


