$(document).ready(function () {
    $(".welcome").mouseover(function () {
        $("#get").hide();
        $(".welcome").show();

    });
    $(".welcome").click(function () {
        $(".get").show();
        $("#get").show();

    });

    $(document).ready(function () {
        $(".one").mouseover(function () {
            $("#p1").show();


        });
        $(".one").mouseout(function () {
            $("#p1").hide();

        })
    });

    $(".two").mouseover(function () {
        $("#p2").show();


    });
    $(".two").mouseout(function () {
        $("#p2").hide();

    })



    $(".three").mouseover(function () {
        $("#p3").show();


    });
    $(".three").mouseout(function () {
        $("#p3").hide();

    })



    $(".four").mouseover(function () {
        $("#p4").show();


    });
    $(".four").mouseout(function () {
        $("#p4").hide();

    })



    $(".five").mouseover(function () {
        $("#p5").show();


    });
    $(".five").mouseout(function () {
        $("#p5").hide();

    })



    $(".six").mouseover(function () {
        $("#p6").show();


    });
    $(".six").mouseout(function () {
        $("#p6").hide();

    })
})

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
    alert("Your pizaa will cost you " + " " + calculate + " " +" thanks for shopping with us");
}

function getDelivery() {
    if (delivery === "") {
        return false;
    }
    alert("Your pizza will be delived at an extra cost of 250 to " + document.getElementById("delivery").value + ". Thank you")
}

function getQuantity() {
    if (quantity <= 0) {
        alert("please place the right quantity");
        var quantity = document.getElementById("quantity").focus();
        return false;

    }


}