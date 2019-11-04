import React, {useState} from 'react';
import './App.css';
import { Script } from 'vm';

let shoppingCartItems = [
  {
    item: 'Space Suit',
    image: 'https://cdn1.imggmi.com/uploads/2019/10/27/50998b9bd8c946ae4c908270e98d4ede-full.png',
    description: 'A well-designed space suit with all the functions you need for a space travel. Double 11 you get 40% off.',
    price: 1000000,
    checked: false,
    number: 1,
    link: "https://www.amazon.com/Charades-Unisex-Adults-Astronaut-Costume-White/dp/B00NH534QC/ref=sr_1_13?dchild=1&keywords=spacesuit&psc=1&qid=1572167180&sr=8-13"
  },
  {
    item: 'Self-Heating Hot Pot',
    image: 'https://cdn1.imggmi.com/uploads/2019/10/27/e61bb39926b002ca8df1c6b8f1c7f40a-full.png',
    description: "You don't need fire or a hotplate to eat hotpot. Instead, the only thing you need to enjoy this super delicious hotpot is water. 3 different flavors are provided.",
    price: 3000,
    number: 5,
    link: "https://www.amazon.com/Haidilao-Self-heating-flavor-availalbe-Sausage/dp/B07XH5ZTTD/ref=sr_1_4?crid=5WUOCKRZ4IGV&keywords=haidilao+self+heating+hot+pot&qid=1572171888&sprefix=haidilao%2Caps%2C372&sr=8-4"
  },
  {
    item: 'Sony Noise-cancelling Headphone',
    image: 'https://cdn1.imggmi.com/uploads/2019/10/27/4e6de5adc958150b41eee8ffc732fae5-full.png',
    description: 'This magical headphone that separates you from the outside world. You can always get back by tapping the left part of your headphone.',
    price: 50000,
    number: 1,
    link: "https://www.amazon.com/Sony-Noise-Cancelling-Headphones-WH1000XM3/dp/B07G4YL6BM/ref=sr_1_1_sspa?crid=3BQTNFKEQRPHQ&keywords=sony%2Bnoise%2Bcancelling%2Bheadphones%2Bwh1000xm3&qid=1572172168&sprefix=sony%2Bno%2Caps%2C373&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFCOFVSOTVMV1FXR1EmZW5jcnlwdGVkSWQ9QTA2NzI4NDUzT1pCMTBOOEpWMUU3JmVuY3J5cHRlZEFkSWQ9QTAwNzc5NTMyN0xGTlRVSVRGRjMzJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1"
  },
  {
    item: 'Eyemask',
    image: 'https://cdn1.imggmi.com/uploads/2019/10/27/ab9a850ed73a88fa46b714d53a2b23df-full.png',
    description: 'Super useful for someone who is sensitive with light. It helps you guarantee a nice sleep.',
    price: 6000,
    number: 1,
    link: "https://www.amazon.com/Contoured-Sleeping-Blindfold-Concave-Meditation/dp/B07KC5DWCC/ref=sr_1_1_sspa?keywords=eye+mask&qid=1572172226&sr=8-1-spons&psc=1&smid=A20GWO5UZSLYW1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMk1PRjkyT1ZXVFlYJmVuY3J5cHRlZElkPUEwMDkxNTEyMjZXMDQ0OUY1SjcxUSZlbmNyeXB0ZWRBZElkPUEwOTcwMDA1MzdJUExXV1JHS1ZFTiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
  },
  {
    item: 'Power Bank',
    image: 'https://cdn1.imggmi.com/uploads/2019/10/27/e131586deca9b1f4fa139c41539b6a30-full.png',
    description: 'Charging spots on the spaceship is always limited. Having a powerbank which charges 4 times faster than normal chargers saves you time for waiting in line.',
    price: 7000,
    number: 1,
    link: "https://www.amazon.com/Charades-Unisex-Adults-Astronaut-Costume-White/dp/B00NH534QC/ref=sr_1_13?dchild=1&keywords=spacesuit&psc=1&qid=1572167180&sr=8-13"
  },
  {
    item: 'A Brief History of Humankind',
    image: 'https://cdn1.imggmi.com/uploads/2019/10/27/c552729f9b0b0a42d23153d19252aa05-full.jpg',
    description: "On the trip to mars, refresh yourself with the famous book 'A Brief History of Humankind'. How is it feel like to read this on a spaceship?",
    price: 1000,
    number: 3,
    link: "https://www.amazon.com/ROMOSS-Portable-Charger-Outputs-Compatible/dp/B07H5T9J4L/ref=sr_1_1_sspa?keywords=power+bank&qid=1572172483&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMExFUExUUUhBTzRNJmVuY3J5cHRlZElkPUEwNDcwNTIzMURCVTNVOUlWNFVNWSZlbmNyeXB0ZWRBZElkPUEwNDIyNTg2M0oxMEcyMTlTRkZRJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
  },
  {
    item: 'Friends LEGO',
    image: 'https://cdn1.imggmi.com/uploads/2019/10/27/bc78deb5e5bfeceafe78d43a7e004168-full.png',
    description: 'Limited version of LEGO with the central perk theme! Kill your time on the spaceship by building you own central perk.',
    price: 800000000000,
    number: 1,
    link: "https://www.lego.com/en-us/product/central-perk-21319"
  },

]

// function getInfo(data) {
//   console.log("get info",data);
//   return (
//     <div>
//       <Product item={data.item} image={data.image} description={data.description} number={data.number} price={data.price} link={data.link} shoppingCartItems={data} />
//     </div>
//   );
// }

function getChecked(data) {
  return (
    <div>
      <Total item={data.item} number={data.number} price={data.price} shoppingCartItems={data} />
    </div>
  );
}



function App() {
  const [update, setUpdate] = useState(false);
  function updateTotal(){
    setUpdate(!update);
  }
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
      <SearchForm />
      <Title />
      <ShoppingCart setUpdate={updateTotal}/>
      <TotalCost items={shoppingCartItems} checked={update}/>
    </div>
  );
}

function Title() {
  return (
    <div className="title">
      <p className="t0">Buy?</p>
      <p className="t1">Item</p>
      <p className="t2">Description</p>
      <p className="t3">Price</p>
      <p className="t4">Number</p>
    </div>
  );

}

function ShoppingCart({setUpdate}) {
  for(let i = 0;i<shoppingCartItems.length;i++){
    shoppingCartItems[i].setUpdate=setUpdate;
  }
  return (
    <div className="cart">
      {shoppingCartItems.map(Product)}
    </div>
  );
}

function TotalCost({items}) {
  let total = 0;
  console.log(items);
  for(let i = 0; i < items.length;i++){
    if(items[i].checked){
      total+=items[i].price*items[i].number;
    }
  }
  return (
    <div>
      <p>Total Cost: {total}</p>
    </div>
  );
}


function Product(info) {
  console.log("product",info);
  

  function updateCheckedState(event) {
    // setChecked(!checked);
    info.checked = event.target.checked;
    info.setUpdate();
    console.log("info",info.checked);
  }

  function updateNumber(num){
    info.number=Number(num.target.value);
    info.setUpdate();
  }

  return (
    <div className="product">
      <div className="checkBox">
        <input type="checkbox" name={info.item} id={info.item} onChange={updateCheckedState}></input>
      </div>
      <div className="image">
        <a href={info.link}><img src={info.image} width="180" alt={info.image} /></a>
      </div>
      <div className="content">
        <a href={info.link}><p id="smallti">{info.item}</p></a>
        <p id="des">{info.description}</p>
      </div>
      <div className="price">
        <p>{info.price}</p>
      </div>
      <div className="number">
        <input type="number" min={info.number} onChange={updateNumber} value={info.number}></input>
      </div>
    </div>
  )
}

function SearchForm() {
  return (
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

function Total(checkinfo) {
  let total = 0;
  // if(checkinfo.item.state.isChecked = true){
  //   console.log('hi');
  //   total += checkinfo.price;
  // }
  return total;
}

export default App;
