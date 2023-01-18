function plus_modifier_count_product() {
    var count = parseFloat($("#amount").val());
    var sum = parseFloat($("#sum").val());

    var count1 = parseFloat($("#amounts").val());
    var sum1 = parseFloat($("#sums").val());
    

    var new_count = count + 1;
    var sum = new_count * 99;

    var count_new = count1 + 1;
    var sum1 = count_new * 99;

    $("#amount").val(Number(new_count.toFixed(3)));
    $("#sum").val(Number(sum) + ".00");
    
    $("#amounts").val(Number(count_new.toFixed(3)));
    $("#sums").val(Number(sum1) + ".00");

    document.getElementById("sumText").innerHTML = sum1 + ".00";


    }

    function minus_modifier_count_product() {
    var count = parseFloat($("#amount").val());
    var sum = parseFloat($("#sum").val());

    var count1 = parseFloat($("#amounts").val());
    var sum1 = parseFloat($("#sums").val());
    
    if (count === 0) {
        count = 0;
    }
    else {
        var new_count = count - 1;
        var sums = sum - 99;
    }

    if (count1 === 0) {
        count1 = 0;
    }
    else {
        var count_new = count1 - 1;
        var sum1 = sum1 - 99;
    }

    $("#amount").val(Number(new_count.toFixed(3)));
    $("#sum").val(Number(sums) + ".00");

    $("#amounts").val(Number(count_new.toFixed(3)));
    $("#sums").val(Number(sum1) + ".00");

    document.getElementById("sumText").innerHTML = sum1 + ".00";
}
