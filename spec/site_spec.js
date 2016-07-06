describe('Site.js', function() {

	describe("#jsonLoader", function(){
	 	it("should return a object,not empty, with arrays, with keys name imgUrl rating and price", function(done) {
	 		jsonLoader.loadJSON(function(response){
	      var hotels = response.hotels;
	      expect(response).toBeObject;
	      expect(response).toBeNonEmptyObject;
	      expect(hotels).toBeArray;
	      expect(hotels[0].name).toBeString;
	      expect(hotels[0].price).toBeNumber;
	      expect(hotels).toHaveNumber;
	      expect(hotels[0].imgUrl).toBeString;
	      expect(hotels[0].price).toBeNumber;
	      done();
	    });
	 	});
	});
 var renderDefaultPartialHotel = function(){
 	 			divInfoWrapper = document.createElement("div");
			imgHotel = document.createElement("img");
			imgHotel.setAttribute('id', 'hotel-img');
			divNameRating = document.createElement("div");
			divNameRating.setAttribute('id', 'hotel-name-rating');
			h4 = document.createElement("h4");
			h4.setAttribute('id', 'hotel-name');
			imgHotelRating = document.createElement("img");
			imgHotelRating.setAttribute('id', 'hotel-rating');
			divPriceWrapper = document.createElement("div");
			divPriceWrapper.setAttribute('class', 'hotel-cost');
			h5 = document.createElement("h5");
			h5.setAttribute('id', 'hotel-price');
			divPriceWrapper.appendChild(h5);
			divNameRating.appendChild(h4);
			divNameRating.appendChild(imgHotelRating);
			divInfoWrapper.appendChild(imgHotel);
			divInfoWrapper.appendChild(divNameRating);
			divInfoWrapper.appendChild(divPriceWrapper);
			document.body.appendChild(divInfoWrapper);
 }

	describe("#getHotelImageRating", function(){
		it('Should return a string when called with a number', function() {
			expect(siteCtrl.getHotelImageRating(2)).toEqual("images/ratings-02.png");
			expect(siteCtrl.getHotelImageRating(5)).toEqual("images/ratings-05.png");
		});
	})
	describe("#renderMainNav", function(){
		var ul;
		beforeEach(function(){
			ul = document.createElement("ul");
			ul.setAttribute("class", "js-ul-list");
			document.body.appendChild(ul);

		});
		afterEach(function(){
			
		});
		it('Should render many li as "name" keys are in the json file', function() {
      var objectData = [{name:"super Hotel test 1"},{name:"mini Hotel test 2"}]
		  siteCtrl.renderMainNav(objectData);	
			expect( document.getElementById("li-number-0").innerHTML ).toEqual("super Hotel test 1");
			expect( document.getElementById("li-number-1").innerHTML ).toEqual("mini Hotel test 2");
			expect( document.getElementById("li-number-0").getAttribute('data-number') ).toEqual('0');
		});
	});
	describe("#renderHotelInfo", function(){
		var divInfoWrapper, imgHotel, divNameRating, h4, imgHotelRating, divPriceWrapper, h5;
		beforeEach(function(){ 
      renderDefaultPartialHotel()
		});

		afterEach(function(){
			
		});
		it('Should render the hotel info provided with the json', function() {
      var hotel = {name:"Hotel Info test", imgUrl: "images/sunny.jpg", rating: 4, price: 59.99}
      siteCtrl.renderHotelInfo(hotel);
      expect( document.getElementById("hotel-name").innerHTML ).toEqual("Hotel Info test");
			expect( document.getElementById("hotel-img").getAttribute("src") ).toEqual("images/sunny.jpg");
			expect( document.getElementById("hotel-rating").getAttribute('src') ).toEqual("images/ratings-04.png");
			expect( document.getElementById("hotel-price").innerHTML ).toEqual("£59.99");
		});
		it('Should render the hotel info provided by the hotel number and his position in the json', function() {
      var hotel = {name:"Hotel Info test", imgUrl: "images/sunny.jpg", rating: 4, price: 59.99}
      siteCtrl.selectHotel(1,[hotel, hotel]); 
      expect( document.getElementById("hotel-name").innerHTML ).toEqual("Hotel Info test");
			expect( document.getElementById("hotel-img").getAttribute("src") ).toEqual("images/sunny.jpg");
			expect( document.getElementById("hotel-rating").getAttribute('src') ).toEqual("images/ratings-04.png");
			expect( document.getElementById("hotel-price").innerHTML ).toEqual("£59.99");
		});
	});
});


