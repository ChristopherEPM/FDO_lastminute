describe('Site.js', function() {

	describe("#getHotelImageRating", function(){
		it('Should return a string when called with a number', function() {
			expect(siteCtrl.getHotelImageRating(2)).toEqual("images/ratings-02.png");
		});
	})
	
	describe('#renderHotelInfo', function() {
		beforeEach(function(){
			var divWrapper = document.createElement('div');
			var hotelImg = document.createElement('img');
			hotelImg.setAttribute('id', 'hotel-img');
			divWrapper.appendChild(hotelImg);
			var divHotelNameRating = document.createElement('div');
			var h4 = document.createElement('h4');
			h4.setAttribute('id', 'hotel-name');
			var imgRating = document.createElement('img');
			imgRating.setAttribute('id', 'hotel-tating');
			divHotelNameRating.appendChild(h4);
			divHotelNameRating.appendChild(imgRating);
			divWrapper.appendChild(divHotelNameRating);
			var divPrice = document.createElement('div');
			var h5 = document.createElement('h5');
			h5.setAttribute('id', 'hotel-price');
			divPrice.appendChild(h5);
			divWrapper.appendChild(divPrice);
			
		});
		afterEach(function(){
			var body = document.getElementsByTagName(body)
			if(body.firstChild){
				while (body.firstChild) {
						body.removeChild(body.firstChild);
				}
			}
		});
		it('Should modify the dom', function() {
			var json=[
			        {
			            "name": "Hotel Sunny Palms",
			            "imgUrl": "imgs/sunny.jpg",
			            "rating": 5,
			            "price": 108.00
			        },
			        {
			            "name": "Hotel Snowy Mountains",
			            "imgUrl": "imgs/snowy.jpg",
			            "rating": 4,
			            "price": 120.00
			        },
			        {
			            "name": "Hotel Windy Sails",
			            "imgUrl": "imgs/windy.jpg",
			            "rating": 3,
			            "price": 110.00
			        },
			        {
			            "name": "Hotel Middle of Nowhere",
			            "imgUrl": "imgs/nowhere.jpg",
			            "rating": 4,
			            "price": 199.00
			        }
			]
			console.log(json[0]);
			console.log(document.getElementById("hotel-name"));
			siteCtrl.renderHotelInfo(json[0]);
			var hotelName = document.getElementById("hotel-name");
			var name = hotelName.innerHTML;
			console.log(name);
			expect(name).toEqual("Hotel Sunny Palms");
		});
	});

});

