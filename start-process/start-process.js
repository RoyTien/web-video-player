"use strict";

$( document ).ready(function() {

/*
 * Fade In Navitaion Bar and Category Section at the begining.
 * Add Class{'active-section'} to '#cateSection'
 */
$('#cateSection').fadeIn("slow");
$('#cateSection').addClass('active-section');
$('#navSection').fadeIn("slow");


$('.stage-button').click(function() {
	if($(this).hasClass('active')){
		return ;
	}else{
		// Active New Nav Button
		$('.stage-button.active').removeClass('active');
		$('.stage-button.active').text('Hello');
		$(this).addClass('active');
		
		//Switch active section
		console.log($(this).text());
		switch($(this).text()){
			case "Category":
				$('.active-section').removeClass('active-section').slideUp();
				$('#cateSection').addClass('active-section').slideDown();
				break;
			case "Template":
				$('.active-section').removeClass('active-section').slideUp();
				$('#tempSection').addClass('active-section').slideDown();
				break;
			case "Color":
				$('.active-section').removeClass('active-section').slideUp();
				$('#colorSection').addClass('active-section').slideDown();
				break;
			case "Feature":
				$('.active-section').removeClass('active-section').slideUp();
				$('#featSection').addClass('active-section').slideDown();
				break;
			case "Save":
				$('.active-section').removeClass('active-section').slideUp();
				$('#saveSection').addClass('active-section').slideDown();
				break;
		}
	}
});



$('#cateAppName').on("change paste keyup",function(){
	if($(this).val()){  //if it is not blank.
		// $('#cateNextBtn').text('Next').fadeIn();
		if($("#cateNextBtn").text() != "Next"){

			$('#cateNextBtn').prop('disabled', false);

			$("#cateNextBtn").fadeOut('slow',function() {
				$(this).text("Next").fadeIn('slow');
			});
		}
	}else{
		$("#cateNextBtn").fadeOut('slow',function() {
			$(this).text("Input App Name and Choose Category").fadeIn('slow');
		});
		$('#cateNextBtn').prop('disabled', true);

	}
});

$("#cateNextBtn").click(function() {

	$( "#tempStageBtn" ).trigger( "click" );
});


});