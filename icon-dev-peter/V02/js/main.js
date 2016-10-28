
var itemCount = 0;


$('.add-to-cart').on('click', function(){
	if (itemCount == 0) {
		console.log(1111);
		itemCount++;
		$('.item-counter div').text(itemCount);
	 	$('.item-counter').addClass('item-counter-trans');
 	}
 	else {
 		console.log(222);
 		itemCount++;
 		$('.blob').addClass('item-counter-trans');
		setTimeout("$('.item-counter div').text(itemCount)", 300);
		$('.item-counter').animate({
			width: '+=9px',
			height: '+=9px'
		}, 100);
		$('.bag-btn').animate({
			'padding-top': '+=3px',
		}, 300);
		$('.blob').animate({
			'margin-top': '+=3px',
		}, 300);
		setTimeout("$('.blob').removeClass('item-counter-trans')", 600);
 	}
});


$('.reset').on('click', function(){
location.reload();
});
