 var siteCtrl ={

  init: function(jsonLoad) {
    var that = this;
    jsonLoader.loadJSON(function(response){
      var hotels = response.hotels;
      that.renderMainNav(hotels);
      that.renderHotelInfo(hotels[0]);
      that.loadHotelInfo(hotels);
    });
  },
 
  renderMainNav: function(objectData){
    var size = Object.keys(objectData).length;
    var ul = document.getElementsByClassName("js-ul-list")[0];
  
    for(var iteration = 0; iteration < size; iteration++){
      var data = objectData[iteration].name;
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data));
      li.setAttribute('data-number', iteration);
      li.className = "js-mainnav-li";
      ul.appendChild(li);
    }    
  },

  getHotelImageRating: function(hotelRating){
    imageRoute="images/ratings-0"+hotelRating+".png";
    return imageRoute;
  },

  renderHotelInfo: function(hotel){
   document.getElementById("hotel-img").setAttribute('src',hotel.imgUrl);
   document.getElementById("hotel-name").innerHTML=hotel.name;
   document.getElementById("hotel-rating").setAttribute('src',this.getHotelImageRating(hotel.rating));
   document.getElementById("hotel-price").innerHTML="£"+Number(hotel.price).toFixed(2);
  },

   selectHotel: function(hotelNumber,hotels){
    var that = this;
    that.renderHotelInfo(hotels[hotelNumber]);
    
  },

  loadHotelInfo: function(hotels){
    var that = this;
    var liClicked = document.getElementsByClassName('js-ul-list')[0];
    liClicked.addEventListener("click", function(event){
      that.selectHotel(event.target.getAttribute("data-number"),hotels);
    }, false);
  }

}