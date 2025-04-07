const products = [
    { name: "Laptop", price: 1500 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 800 },
    { name: "Monitor", price: 1200 },
    { name: "USB Cable", price: 200 }
  ];
  
  const expensiveProducts = products.filter(product => product.price > 1000);
  
  console.log(expensiveProducts);
  