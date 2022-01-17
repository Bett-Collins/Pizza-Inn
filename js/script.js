$(document).ready(function () {
    $(".p1").click(function () {
        $(".sicilian").show();
        $(".p1").hide();
    
    });
    $(".sicilian").click(function () {
        $(".p1").show();
        $(".sicilian").hide();
    })
    });

    $(".col-md-3").mouseover(function () {
        $(".p1").show();
    });
    $(".p1").mouseout(function () {
        $(".col-md-3").hide();
    });
    
    function order(){
        var size = document.getElementById("size").value;
        var crust = document.getElementById("crust").value;
        var quantity = document.getElementById("quantity").value;
        var topping = document.getElementById("topping").value;
        var call= getSize(); getCrust(); getToppping(); getQuantity(); getDelivery(); 
        var delivery = document.getElementById("delivery").value;
        var  calculate = (parseInt(size) + parseInt(crust) + parseInt(topping)) * quantity;
        
        
        
        function getSize(){
            if(size =="") {
            alert("please place pizza-size");
            return false;
        }
    }
}