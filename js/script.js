jQuery(document).ready( function() {
	$("#tabs").on("click", ".card3", function(){
	$("#tabs .card3").removeClass("act"); //удаляем класс во всех вкладках
	$(this).addClass("act"); //добавляем класс текущей (нажатой)
});

	// $("#tabs .card3.skk").addClass("act");
setTimeout(function(){
  $('#tabs .card3.skk').trigger('click');
}, 100);

var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: false,
                center: true,
                margin: 10,
                callbacks: true,
                URLhashListener: true,
                autoplayHoverPause: true,
                startPosition: 'URLHash',
                nav: false,
                dots: false
              });
              // Listen to owl events:
owl.on('changed.owl.carousel', function(event) {
// console.log(event.item.index);
if (event.item.index===0) {
	console.log('skk');
	$("#tabs .card3").removeClass("act");
	$("#tabs .card3.skk").addClass("act");
};
if (event.item.index===1) {
	console.log('tn1');
	$("#tabs .card3").removeClass("act");
	$("#tabs .card3.tn1").addClass("act");
};
if (event.item.index===2) {
	console.log('fn1');
	$("#tabs .card3").removeClass("act");
	$("#tabs .card3.fn1").addClass("act");
};
if (event.item.index===3) {
	console.log('grinas');
	$("#tabs .card3").removeClass("act");
	$("#tabs .card3.grinas").addClass("act");
};
if (event.item.index===4) {
	console.log('dvaoma');
	$("#tabs .card3").removeClass("act");
	$("#tabs .card3.dvaoma").addClass("act");
};
if (event.item.index===5) {
	console.log('realmart');
	$("#tabs .card3").removeClass("act");
	$("#tabs .card3.realmart").addClass("act");
};
})
});