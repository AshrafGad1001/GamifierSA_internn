// ---------------------------------------
// --Advisor - Accounts-------------------
// ---------------------------------------
$(document).ready(function () {
    //Jquery For Expand and Collapse The Sidebar 
    $('.open-btn').click(function () {
        $('.side-bar').removeClass('hidden');
        $('.open-btn').css("visibility", "hidden");
        $('.main .content').removeClass('Expand');
        $('.main .content').addClass('Collapse');
    });
    //When Click On Close btn 
    $('.close-btn').click(function () {
        $('.side-bar').addClass('hidden');
        $('.open-btn').css("visibility", "visible");
        $('.main .content').addClass('Expand');
    });
    //When Click On Submenu
    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').toggleClass('view-sub-menu');
    });

});


