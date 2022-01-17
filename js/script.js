$(document).ready(function () {
    $(".sicilian").mouseover(function () {
        $("#p1").show();


    });
    $(".sicilian").mouseout(function () {
        $("#p1").hide();

    })
});

$(".col-md-3").mouseover(function () {
    $(".p1").show();
});
$(".p1").mouseout(function () {
    $(".col-md-3").hide();
});

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




function order() {
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var quantity = document.getElementById("quantity").value;
    var topping = document.getElementById("topping").value;
    var call = getSize();
    getCrust();
    getToppping();
    getQuantity();
    getDelivery();
    var delivery = document.getElementById("delivery").value;
    var calculate = (parseInt(size) + parseInt(crust) + parseInt(topping)) * quantity;



    function getSize() {
        if (size == "") {
            alert("please place pizza-size");
            return false;
        }
    }

    function getCrust() {
        if (crust == "") {
            alert("choose your choice of crust");
            return false;
        }
    }

    function getToppping() {
        if (topping == "") {
            alert("choose pizza-topping");
            return false;

        }
    }


function getQuantity(){
    if (quantity == "") {
        alert("Please select pizza quantity")
    }
    else {
        return true;
    }

}

alert("Your pizaa will cost you"  + calculate + "thanks for shopping with us");
}

function getDelivery(){
    if(delivery===""){
    return false;
}
    alert("Your pizza will be delived at " + document.getElementById("delivery").value + ". Thank you")
}




