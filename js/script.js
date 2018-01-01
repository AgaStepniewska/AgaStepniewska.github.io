 $(function() {
	$('a').on('click', function(event) {
		if (this.hash !== "") {
		    event.preventDefault();
		    var hash = this.hash;
		    $('html, body').animate({
			    scrollTop: $(hash).offset().top}, 
			    1200, function(){
		        window.location.hash = hash;
		    	}
		    );
		}
	});
	//button to top
	window.onscroll = function() {
		scrollFunction();
	};
	var btnClick = $('#BtnToTop');
	var btnElem = document.getElementById("BtnToTop");
	var duration = 1200; 
	function scrollFunction() {
		if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
	    btnElem.style.display = "block";
		} else {
		btnElem.style.display = "none";
		}
	};
	btnClick.click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		
	})
	window.dataLayer = window.dataLayer || [];
  	function gtag(){dataLayer.push(arguments);}
  	gtag('js', new Date());

  	gtag('config', 'UA-111348917-1');
});



