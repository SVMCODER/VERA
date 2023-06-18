
function checkout(oname,oprice) {
    localStorage.setItem('oname', oname)
    localStorage.setItem('oprice', oprice)
    
    window.location.replace('checkout.html')
}

{/* <div class="card">
          <img src="assets/products/earbuds.png" alt="">
        <div class="card-content">
          <div class="card-text">
            <h3>Wireless Earbuds</h3>
            <p onclick="earbuds()">TOZO T6 True Wireless Earbuds Bluetooth 5.3 Headphones Touch Control wit…</p>
          </div>
          <div class="card-buttonsright" align="center">
            ₹ 3,999.00
            <p>⭐⭐⭐⭐⭐ (5.0) </p>
            <button class="bx bx-cart" onclick="earbuds()"> Buy</button>
          </div>
        </div>
      </div> */}
function buy() {
  oprice = localStorage.getItem('oprice')
  oname = localStorage.getItem('oname')
  localStorage.setItem('order', localStorage.getItem('order')+`
  <div class='c'>
  <h3>Product: ${oname}</h3>
  <p>Price: ₹ ${oprice} <br>Check Email For Details</p>
  </div>
  `) 
  var params = {
    to_email: 'shop.verabusiness@gmail.com',
    subject: 'New Order Received | Vera Order Management',
    message: `Order Name: ${localStorage.getItem('oname')}\n
    Price: ${localStorage.getItem('oprice')}\n
    Address: ${localStorage.getItem('address')}\n
    Customer: ${localStorage.getItem('name')}\n
    Date: ${Date()}\n
    Email: ${localStorage.getItem('email')}`
  };
  
  emailjs.send('vera', 'vera', params, 'i1pobaLGM54xJtIZ9')
    .then(function(response) {
      console.log('Product Ordered!', response);
      swal({
        title: "Order Placed!",
        text: "Your Order "+localStorage.getItem('oname')+" has been successfully placed.",
        imageUrl: 'assets/tick.gif'
      })
      setTimeout(() => {
        window.location.replace('orders.html')
      }, 2000);
    }, function(error) {
      console.log('Error:', error);
    });
}