$(window).scroll(function() {
if($(this).scrollTop() > 200) {
$('.back-to-top').fadeIn();
} else {
$('.back-to-top').fadeOut();
}
});

$('a').on('click', function() {
var str = $(this).attr('href');
var href = str.replace(/[^a-zA-Z0-9-]/g, "");
if(href && $('#'+href).length){
$('#menu-primary').removeClass('show');
var positon = $('#'+href).offset().top;
$('html, body').animate({scrollTop:positon}, 1000);
return false;
}
});

$('.accordion .panel > a').click(function() {
$this = $(this);
$panel =  $this.parent();
$content =  $this.parent().next();
if(!$panel.hasClass('active')){
$panel.addClass('active');
$content.addClass('slide').slideDown();
$other = $this.parents('.accordion').children('.panel').not($panel);
$other.removeClass('active');
$other.next().removeClass('slide').slideUp();
}
return false;
});
