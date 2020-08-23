$(document).ready(function () { 
  
    var pname = $('#pname');
    var practice = $('#practice');
    var zipCode = $('#zipcode');

    var totalAmount = $('#totalAmount');
    var previouslyPaid = $('#prevPaid');
    var balanceDue = $('#balance');

    var date = $('#date');
    var cardNumber = $('#card');
    var amount = $('#amount');
    
    // FETCHING DATA FROM JSON FILE 
    $.getJSON("js/data.json",  function (data) { 
       
       $(pname).append(data.patientName);
       $(practice).append(data.practice);
       $(zipCode).append(data.zipCode);

       $(totalAmount).append(data.totalAmount);
       $(previouslyPaid).append(data.previouslyPaid);
       $(balanceDue).append(data.balanceDue);

       $.each(data.pastTransactions, function(i, f) {
          
        var tblRow = "<tr>" + "<td>" + f.date + "</td>" +
        "<td>" + f.cardNumber + "</td>" + "<td class='amount-wrap'>" + "<span>" + "$" + f.amount + "</span>"+ "<a class='link' href='#'>" + "View Receipt" + "</a>" + "</td>" +  "</tr>"
        $(tblRow).appendTo("#trans");
        });
    
       
    }); 
});