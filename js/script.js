$(document).ready(function(){

    // Setup page

    $('#name').focus();
    $('#other-title').hide();

    // Show or Hide other job role input
    
    $('#title').change(function() {
        if ($(this).val() == 'other') {
            $('#other-title').show();
        } else {
            $('#other-title').hide();
        }
    });
});