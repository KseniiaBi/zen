//sticky menu

$(window).scroll(function(){
    if ($(window).scrollTop() >= 656) {
       $('header').addClass('sticky');
    }
    else {
       $('header').removeClass('sticky');
    }
});

// menu 

$(document).ready(function(){
  $(menuBtn).on('click', function () {
    toggleMenu();
  });

  $('.nav li').on('click', function () {
    toggleMenu();
  });
});

menuBtn = $('#menu-btn');
nav = $('.nav');

function toggleMenu() {
  
    nav.toggleClass('opened');
    menuBtn.toggleClass('open');
}

//slides in glasses and screen
table = $('#tbl');
glass= $('#glass');


function changePreview(c){

	console.log(c);

	if(c <=3){
		//table
		$(glass).hide();
		$(table).show();

		if(c == 1){
			$('img#1').show();
			$('img#2').hide();
			$('img#3').hide();
		}
		else if(c == 2){
			$('img#2').show();
			$('img#1').hide();
			$('img#3').hide();
		}
		else{
			$('img#3').show();
			$('img#2').hide();
			$('img#1').hide();
		}
	}
	else{
		//glass
		$(glass).show();
		$(table).hide();


		if(c == 4){
			$('img#4').show();
			$('img#5').hide();
			$('img#6').hide();
		}
		else if(c == 5){
			$('img#5').show();
			$('img#4').hide();
			$('img#6').hide();
		}
		else{
			$('img#6').show();
			$('img#5').hide();
			$('img#4').hide();
		}
	}
	
	
}