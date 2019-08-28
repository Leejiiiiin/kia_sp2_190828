$(document).ready(function(){

	var section1 =$('.sec1');
	var section2 =$('.sec2');
	var section3 =$('.sec3');
	var section4 =$('.sec4');
	var section5 =$('.sec5');
	
	var popup = $('#popup');
	var slideClickCheck = false;
	var playTime = 800;


	

	
	// popup
	var youtubeUrl = [
		'https://www.youtube.com/embed/MN2bgchVlv8?autoplay=1&amp;start=0&amp;rel=0',
		'https://www.youtube.com/embed/MN2bgchVlv8?autoplay=1&amp;start=0&amp;rel=1',
		'https://www.youtube.com/embed/MN2bgchVlv8?autoplay=1&amp;start=0&amp;rel=2',
		'https://www.youtube.com/embed/MN2bgchVlv8?autoplay=1&amp;start=0&amp;rel=3',
		'https://www.youtube.com/embed/MN2bgchVlv8?autoplay=1&amp;start=0&amp;rel=4',
	]
	function popupdd(showIdx){
		var link = youtubeUrl[showIdx];

		popup.addClass('show').find('iframe').attr('src', link);
		popup.find('.close').on('click', function(){
			popup.removeClass('show');
			popup.find('iframe').removeAttr('src');
		});
	}

	$('.sec1 .btn_play').on('click', function(){
		popupdd(2);
	});

	//section3
	section3.find('.indicator button').on('click', function(){
		var idx = $(this).val();
		$(this).addClass('on').siblings().removeClass('on'); 
		section3.find('.thumb').eq(idx-1).addClass('active').siblings().removeClass('active');
	});

	//section4
	section4.find('.play').on('click', function(){
		popupdd(3);
	});

	var discTxt = ['Lighting', 'Better Driving', 'Fulfilling'];

	section4.find('button').on('click', function(){
		var sec4Cnt = 0;
		if($(this).val() == 'next'){
			sec4Cnt++;
			
			sec4SlideEvent();
		}else if($(this).val() == 'prev'){
			sec4Cnt--;
		
		}

		section4.find('.text').text(discTxt[sec4Cnt]);
		console.log(discTxt[sec4Cnt]);

	});
	
	
	function sec4SlideEvent(){
		var discCnt = 0;
		var intervalFn = setInterval(function(){
			
				discCnt++;

				if(discCnt == 10){
					clearInterval(intervalFn);
				}

		});
			

			console.log(discCnt);

		section4.find('.disc').text(discCnt);
	}

	// 섹션3에 대한 이벤트
	function sec3Event(){
		var inCnt = 0;
		var intervalFn = setInterval(function(){
			sec3Txt.innerText = (sec3Cnt-1)*10 + inCnt++;
			if(inCnt == 10){
				clearInterval(intervalFn);
			}
		}, 80);
	}

	setTimeout(function(){
		slideClickCheck = false;
	}, playTime);

	//텍스트 바꿔주기

	//section5
	section5.find('.video').on('click', function(){
		popupdd(4);
	});





	

});