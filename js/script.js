$(document).ready(function(){

    const jspunsOptions = ["cornflowerblue", "darkslategrey", "gold"];
    const heartjsOptions = ["tomato", "steelblue", "dimgrey"];

    // Setup page

    $('#name').focus();
    $('#other-title').hide();
    hideColorOptions();

    // Show or Hide other job role input

    $('#title').change(function() {
        if ($(this).val() == 'other') {
            $('#other-title').show();
        } else {
            $('#other-title').hide();
        }
    });


    // Configure color options dependent of Design

    $('#design').change(function() {

        $('#color').show();
        $('#colors-js-puns label').show();

        if ($(this).val() == "js puns") {
            
            $.each(jspunsOptions, function(index, value) {
                $('#color option[value='+ value +']').show();
            });
            $.each(heartjsOptions, function(index, value) {
                $('#color option[value='+ value +']').hide();
            });

            $('#color').val(jspunsOptions[0]);

        } else if ($(this).val() == 'heart js') {
            
            $.each(jspunsOptions, function(index, value) {
                $('#color option[value='+ value +']').hide();
            });
            $.each(heartjsOptions, function(index, value) {
                $('#color option[value='+ value +']').show();
            });

            $('#color').val(heartjsOptions[0]);

        } else {
            hideColorOptions();
        }
    });

    function hideColorOptions() {
        $('#colors-js-puns label').hide();
        $('#color').hide();
    }

    // Controls checkboxes

    $("fieldset.activities label input[type=checkbox]").on("change", function(e) {

        var checkboxes = $("fieldset.activities label input[type=checkbox]");
        var target = e.target.name;
        var regex = new RegExp("[0-9]+$");

        if (target == checkboxes[1].name) {
            checkboxes[3].disabled = e.target.checked;
        } else if (target == checkboxes[2].name) {
            checkboxes[4].disabled = e.target.checked;
        } else if (target == checkboxes[3].name) {
            checkboxes[1].disabled = e.target.checked;
        } else if (target == checkboxes[4].name) {
            checkboxes[2].disabled = e.target.checked;
        }

        var sum = 0;

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                sum += parseInt(regex.exec(checkboxes[i].parentElement.innerText)[0]);
            }
        }
        $('#totalActivitiesCost')[0].innerText = "Total Activities Cost: $" + sum;
    });

    // "Payment Info" section 

    $("#payment").val("credit card").change();
    $('#paypal').hide();
    $('#bitcoin').hide();

    $("#payment").on("change", function(e) {
        var option = $("#payment").val();
        // credit-card paypal bitcoin

        $('#credit-card').hide();
        $('#paypal').hide();
        $('#bitcoin').hide();

        if (option == 'credit card') {
            $('#credit-card').show();
        } else if (option == 'paypal') {
            $('#paypal').show();            
        } else if (option == 'bitcoin') {
            $('#bitcoin').show();            
        }  else {
            $('#credit-card').show();
            $("#payment").val("credit card").change();
        }
    });

    function isValidForm() {

        var isNameBlank = $('#name')[0].value == '';
        console.log('isNameBlank: ' + isNameBlank);

        if (isNameBlank) {
            return false;
        }
        return true;
    }


    $('.registerButton').on('click', function() {
        if (isValidForm()) {
            $('form').submit();
        }
    });

});