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
});