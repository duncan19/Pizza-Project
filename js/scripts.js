var i === 0

$(document).ready(function() {
  $(".toppingsform").submit(function(event){
    if (('pepperoni').checked) {
                i += 1;
            } else {
                i += 0;
            }
    if (('olives').checked) {
                i += 1;
            } else {
                i += 0;
            }
    if (('peppers').checked) {
                i += 1;
            } else {
                i += 0;
            }
    if (('extraCheese').checked) {
                i += 1;
            } else {
                i += 0;
            }
    if (('mushrooms').checked) {
                i += 1;
            } else {
                i += 0;
            }

      if (i === 7) {
        alert("this pizza will cost you $12")
      }
      if else(i <= 6){
        alert("this pizza will cost you $8")
      }
      if else(i >= 8){
        alert("this pizza will cost you $16")
      }

  }
