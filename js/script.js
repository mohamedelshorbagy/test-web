$(document).ready(function() {


    // Tabs Section

    // Active Links
    $("#tabs .col").click(function () {
        console.log('CLICKED!');
        $(this).addClass('active-tab').siblings().removeClass('active-tab');

    });


    // Coding Tabs Section
  $('#tabs .col').click(function() {
    
    var tab = $(this).attr('id');

    $('.platform .container .row .col-6.tabs_content div').hide();


    $('.' + tab + '-content').fadeIn(500);

  });



})