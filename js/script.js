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

        if (e.target.checked) {
            // if nth checkbox was checked happens...
            if (e.target.name == $(this).get(1).name) {
                $(this).eq(3).attr("disabled", true);
            } else if (e.target.name == $(this).get(2).name) {
                console.log(e.target.name + ': checked');
            } else if (e.target.name == $(this).get(3).name) {
                console.log(e.target.name + ': checked');
            } else if (e.target.name == $(this).get(4).name) {
                console.log(e.target.name + ': checked');
            } else if (e.target.name == $(this).get(5).name) {
                console.log(e.target.name + ': checked');
            } else if (e.target.name == $(this).get(6).name) {
                console.log(e.target.name + ': checked');
            }
        } else {
            // if nth checkbox was unchecked happens...
            if (e.target.name == $(this).get(1).name) {
                $(this).eq(3).attr("disabled", false);
            } else if (e.target.name == $(this).get(2).name) {
                console.log(e.target.name + ': ' + e.target.checked);
            } else if (e.target.name == $(this).get(3).name) {
                console.log(e.target.name + ': ' + e.target.checked);
            } else if (e.target.name == $(this).get(4).name) {
                console.log(e.target.name + ': ' + e.target.checked);
            } else if (e.target.name == $(this).get(5).name) {
                console.log(e.target.name + ': ' + e.target.checked);
            } else if (e.target.name == $(this).get(6).name) {
                console.log(e.target.name + ': ' + e.target.checked);
            }
        }

        
    });
});