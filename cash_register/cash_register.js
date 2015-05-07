var line_items = [
    {description: "aardvark", price: 425, qty: -1},
    {description: "PruNe", price: 1.99, qty: 1},
    {description: "potato", price: .79, qty: -10},
    {description: "zebra", price: 525.25, qty: 1},
    {description: "SpinAch", price: 2.99, qty: 1},
    {description: "zepplin", price: 20000, qty: 1},
    {description: "PetUnia", price: 1.25, qty: 12},
    {description: "squash", price: 2.35, qty: 3}
];

var coupons = [
    {description: "Zebra", discount: 100, limit: 1},
    {description: "squash", discount: 1.00, limit: 1},
    {description: "mouse", discount: 2.00, limit: 10}
];

var $entries, 
    $subTotal;

$(document).ready(function(){

   $entries = $("#entries");
   $subTotal = $('#subtotal');
   $tax = $('#salestax');
   $total = $('#total');

  myUtils.myEach(line_items, function(v,i){
     addItem(v.price, v.description, v.qty);
   });


  updateSubTotal();


});

function addItem(price, title, quantity) {
   // YUCK! Let's refactor this!
   var html_string = (
         "<tr>" +
          "<td>" +  title.toLowerCase() + "</td>" +
          "<td>" + quantity + "</td>" +
          "<td>" + myUtils.toCurrencyString(line_items, function(){
            return "$" + myUtils.toDollarAmount(price);}) + "</td>" +
        "</tr>"
  );
  $entries.append(html_string);
}

function subtotalP(val, i, a){
  return val + i.price*i.qty; 
}
function updateSubTotal() {
// Refactor this using our helper functions :D
  var subTotalPrice = myUtils.myReduce(line_items, subtotalP);
  var salesTax = myUtils.toDollarAmount(subTotalPrice * 0.0725);
  var total = myUtils.toDollarAmount(subTotalPrice+salesTax);

  $subTotal.text("$" + subTotalPrice);
  $tax.text("$" + salesTax)
  $total.text("$" + total)
}

function compare(a,b){
  if (a.description.toLowerCase() < b.description.toLowerCase()){
    return -1;
  } if(a.description.toLowerCase() > b.description.toLowerCase()){
    return 1;
  }
  return 0;
}

line_items.sort(compare);