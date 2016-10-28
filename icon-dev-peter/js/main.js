
var itemCount = 0;


$('.add-to-cart').on('click', function(){
	if (itemCount == 0) {
		console.log(1111);
		itemCount++;
		$('.item-counter').text(itemCount);
	 	$('.bag-btn').addClass('menu-open-button-trans');
	 	$('.item-counter').addClass('item-counter-trans');
 	}
 	else {
 		console.log(222);
 		itemCount++;
 		$('.item-counter').removeClass('item-counter-trans');
		$('.item-counter').text(itemCount);
		$('.item-counter').addClass('item-counter-addmore');
 	}
});


$('.reset').on('click', function(){
location.reload();
});

