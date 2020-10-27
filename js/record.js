// function getRank(FamilyRank) {
// 	if(FamilyRank) {
// 		return FamilyRank.match(/[\d]{6}/); // This is regex (https://en.wikipedia.org/wiki/Regular_expression)
// 	}
// }

function iterateRecords(data) {

	$.each(data["Family"], function() {
		console.log(this);

		var KingdomName = this.KingdomName;
		var FamilyName = this.FamilyName;
		var FamilyCommonName = this.FamilyCommonName;
        var FamilyRank = this.FamilyRank;
        var Url = this.SpeciesUrl;

		if(KingdomName && FamilyName && FamilyCommonName && FamilyRank) {
            // Select 20 data from json by family rank
            if(FamilyRank >= 990270 && FamilyRank <= 990430) { 
                $("#record-box").append(
                    $('<section class="record">').append(
                        // $('<h3 style="margin-left: 20px">').text("kingdom Name: " + this.KingdomName),
                        $('<h3 style="margin-left: 20px">').text("Family Name: " + this.FamilyName),
                        // $('<h3 style="margin-left: 20px">').text("Family Common Name: " + this.ClassCommonName),
                        $('<h3 style="margin-left: 20px">').text("Family Rank: " + this.FamilyRank),
                        $('<button class="search-button" type="button" style="color:white; margin-left:20px; border-radius:5px; height:30px; font-family:times; font-size:15px; font-weight:bold; background-color: royalblue;">Show me on the map!</button>'),
                        $('<button class="clear" type="button" style="color:white; margin-left:20px; border-radius:5px; height:30px; font-family:times; font-size:15px; font-weight:bold; background-color: royalblue;">Clear markers!</button>'),                        
                    )
                );               
            }        	
        }

        // search button hover
        $('.search-button').hover(function() {
            $(this).css("background-color", "lightblue"); 
        }, function() {
            $(this).css("background-color", "royalblue");
        });

        // clear buttons hover
        $('.clear').hover(function() {
            $(this).css("background-color", "lightblue"); 
        }, function() {
            $(this).css("background-color", "royalblue");
        });

        // Change the number of the data showed on <p>
        $("#filter-count strong").text($(".record:visible").length);

        // Show the search results in search bar
        $("#filter-text").keyup(function() {
 
			var searchTerm = $(this).val();

			$(".record").hide();
			$(".record:contains('" + searchTerm + "')").show();
			$("#filter-count strong").text($(".record:visible").length);
        });

        // Animal icons
        var animalImages = L.Icon.extend({
            options: {
                iconSize: [50, 50],
            }
        });

        $(".search-button").click(function() {
            // case 1 - Balaenidae
            if(FamilyRank == 990410) {
                var whiteWhaleIcon = new animalImages({iconUrl: 'images/animals/white whale.png'});
                // markers of different location on the map
                var marker1 = L.marker([-12.8851724, 148.81043874], {icon: whiteWhaleIcon}).addTo(map).bindPopup("<img src='images/animals/white whale.png' alt='white whale' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker2 = L.marker([-16.624085, 153.854056], {icon: whiteWhaleIcon}).addTo(map).bindPopup("<img src='images/animals/white whale.png' alt='white whale' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker3 = L.marker([-25.8201656, 160.883491], {icon: whiteWhaleIcon}).addTo(map).bindPopup("<img src='images/animals/white whale.png' alt='white whale' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker4 = L.marker([-28.6177983,  160.6319972], {icon: whiteWhaleIcon}).addTo(map).bindPopup("<img src='images/animals/white whale.png' alt='white whale' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
            
                $(".cover").attr('src','images/990410.jpg'); // change the image of the animal
                
                var balaenidae = L.layerGroup([marker1, marker2, marker3, marker4]); // create a layer to store the markers
                L.layerGroup([marker1, marker2, marker3, marker4]).addLayer(balaenidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(balaenidae);
                })
                
                // unbind the button for each if statement
               (".search-button").unbind('click').on('click', function(){});
            }
            

            // case 2 - Balaenopteridae
            if(FamilyRank == 990430) {
                var whaleIcon = new animalImages({iconUrl: 'images/animals/whale.png'});

                var marker5 = L.marker([-16.1856631, 157.132302], {icon: whaleIcon}).addTo(map).bindPopup("<img src='images/animals/whale.png' alt='blue whale' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker6 = L.marker([-27.779545, 160.595547], {icon: whaleIcon}).addTo(map).bindPopup("<img src='images/animals/whale.png' alt='blue whale' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker7 = L.marker([-24.18734, 157.793971], {icon: whaleIcon}).addTo(map).bindPopup("<img src='images/animals/whale.png' alt='blue whale' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                $(".cover").attr('src','images/990430.jpg');

                var balaenopteridae = L.layerGroup([marker5, marker6, marker7]); // create a layer to store the markers
                L.layerGroup([marker5, marker6, marker7]).addLayer(balaenopteridae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(balaenopteridae);
                })

                (".search-button").unbind('click').on('click',function(){})
            }

            //case 3 - Bovidae
            if(FamilyRank == 990390) {
                var bovidaeIcon = new animalImages({iconUrl: 'images/animals/goat.png'});
                var marker8 = L.marker([-22.889674, 144.299873], {icon: bovidaeIcon}).addTo(map).bindPopup("<img src='images/animals/goat.png' alt='goat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker9 = L.marker([-19.779545, 147.595547], {icon: bovidaeIcon}).addTo(map).bindPopup("<img src='images/animals/goat.png' alt='goat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker10 = L.marker([-22.779545, 149.595547], {icon: bovidaeIcon}).addTo(map).bindPopup("<img src='images/animals/goat.png' alt='goat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker11 = L.marker([-25.899256, 151.102384], {icon: bovidaeIcon}).addTo(map).bindPopup("<img src='images/animals/goat.png' alt='goat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker12 = L.marker([-19.763085, 144.24207], {icon: bovidaeIcon}).addTo(map).bindPopup("<img src='images/animals/goat.png' alt='goat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker13 = L.marker([-28.702634, 151.89537], {icon: bovidaeIcon}).addTo(map).bindPopup("<img src='images/animals/goat.png' alt='goat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                $(".cover").attr('src','images/990390.jpg');

                var bovidae = L.layerGroup([marker8, marker9, marker10, marker11, marker12, marker13]); // create a layer to store the markers
                L.layerGroup([marker8, marker9, marker10, marker11, marker12, marker13]).addLayer(bovidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(bovidae);
                })

                (".search-button").unbind('click').on('click',function(){})
            }

            // case 4 - Camelidae
            if(FamilyRank == 990380) {
                var camelidaeIcon = new animalImages({iconUrl: 'images/animals/camel.png'});
                var marker14 = L.marker([-21.73552, 141.01732], {icon: camelidaeIcon}).addTo(map).bindPopup("<img src='images/animals/camel.png' alt='camel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker15 =L.marker([-19.69690, 141.68511], {icon: camelidaeIcon}).addTo(map).bindPopup("<img src='images/animals/camel.png' alt='camel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker16 =L.marker([-27.087005, 143.94332], {icon: camelidaeIcon}).addTo(map).bindPopup("<img src='images/animals/camel.png' alt='camel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker17 =L.marker([-23.72149, 142.44956], {icon: camelidaeIcon}).addTo(map).bindPopup("<img src='images/animals/camel.png' alt='camel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker18 =L.marker([-24.887545, 140.4421365], {icon: camelidaeIcon}).addTo(map).bindPopup("<img src='images/animals/camel.png' alt='camel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                $(".cover").attr('src','images/990380.jpg');

                var camelidae = L.layerGroup([marker14, marker15, marker16, marker17, marker18]); // create a layer to store the markers
                L.layerGroup([marker14, marker15, marker16, marker17, marker18]).addLayer(camelidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(camelidae);
                })

                (".search-button").unbind('click').on('click',function(){})
            }

            // case 5- Canidae
            if(FamilyRank == 990330) {
                var canidaeIcon = new animalImages({iconUrl: 'images/animals/canidae.png'});
                var marker19 = L.marker([-25.92297, 150.37525], {icon: canidaeIcon}).addTo(map).bindPopup("<img src='images/animals/canidae.png' alt='canidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker20 = L.marker([-24.13121, 145.80612], {icon: canidaeIcon}).addTo(map).bindPopup("<img src='images/animals/canidae.png' alt='canidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker21 = L.marker([-18.192304, 141.98386], {icon: canidaeIcon}).addTo(map).bindPopup("<img src='images/animals/canidae.png' alt='canidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker22 = L.marker([-17.229481, 143.38975], {icon: canidaeIcon}).addTo(map).bindPopup("<img src='images/animals/canidae.png' alt='canidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker23 = L.marker([-18.70088, 139.52356], {icon: canidaeIcon}).addTo(map).bindPopup("<img src='images/animals/canidae.png' alt='canidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                $(".cover").attr('src','images/990330.jpg');

                var canidae = L.layerGroup([marker19, marker20, marker21, marker22, marker23]); // create a layer to store the markers
                L.layerGroup([marker19, marker20, marker21, marker22, marker23]).addLayer(canidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(canidae);
                })

                (".search-button").unbind('click').on('click',function(){})
            }

            // case 6- Cervidae
            if(FamilyRank == 990400) {
                var cervidaeIcon = new animalImages({iconUrl: 'images/animals/deer.png'});
                var marker24 = L.marker([-18.442166, 145.8897412], {icon: cervidaeIcon}).addTo(map).bindPopup("<img src='images/animals/deer.png' alt='deer' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker25 = L.marker([-22.7798451, 146.897121], {icon: cervidaeIcon}).addTo(map).bindPopup("<img src='images/animals/deer.png' alt='deer' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker26 = L.marker([-28.383909, 146.13717], {icon: cervidaeIcon}).addTo(map).bindPopup("<img src='images/animals/deer.png' alt='deer' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker27 = L.marker([-26.45139, 143.69729], {icon: cervidaeIcon}).addTo(map).bindPopup("<img src='images/animals/deer.png' alt='deer' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker28 = L.marker([-22.11872, 138.82062], {icon: cervidaeIcon}).addTo(map).bindPopup("<img src='images/animals/deer.png' alt='deer' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker29 = L.marker([-24.29153, 138.94364], {icon: cervidaeIcon}).addTo(map).bindPopup("<img src='images/animals/deer.png' alt='deer' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                $(".cover").attr('src','images/990400.jpg');

                var cervidae = L.layerGroup([marker24, marker25, marker26, marker27, marker28, marker29]); // create a layer to store the markers
                L.layerGroup([marker24,marker25, marker26, marker27, marker28, marker29]).addLayer(cervidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(cervidae);
                })

                (".search-button").unbind('click').on('click',function(){})
            }

            // case 7 - Cricetidae
            if(FamilyRank == 990294) {
                var cricetidaeIcon = new animalImages({iconUrl: 'images/animals/mouse.png'});
                var marker30 = L.marker([-20.39869, 147.027500], {icon: cricetidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse.png' alt='mouse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker31 = L.marker([-22.898189, 149.36477], {icon: cricetidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse.png' alt='mouse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker32 = L.marker([-20.22560, 143.96089], {icon: cricetidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse.png' alt='mouse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker33 = L.marker([-26.789261, 149.452644], {icon: cricetidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse.png' alt='mouse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker34 = L.marker([-25.447739, 151.73721], {icon: cricetidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse.png' alt='mouse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker35 = L.marker([-28.037562, 151.2978716], {icon: cricetidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse.png' alt='mouse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                
                var cricetidae = L.layerGroup([marker30, marker31, marker32, marker33, marker34, marker35]); // create a layer to store the markers
                L.layerGroup([marker30, marker31, marker32, marker33, marker34, marker35]).addLayer(cricetidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(cricetidae);
                })

                $(".cover").attr('src','images/990294.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }

            // case 8 - Dugongidae
            if(FamilyRank == 990300) {
                var dugongidaeIcon = new animalImages({iconUrl: 'images/animals/sea cow.png'});
                var marker36 = L.marker([-23.23781, 154.22387], {icon: dugongidaeIcon}).addTo(map).bindPopup("<img src='images/animals/sea cow.png' alt='sea cow' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker37 = L.marker([-15.06841, 147.51954], {icon: dugongidaeIcon}).addTo(map).bindPopup("<img src='images/animals/sea cow.png' alt='sea cow' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker38 = L.marker([-17.749210, 153.54728], {icon: dugongidaeIcon}).addTo(map).bindPopup("<img src='images/animals/sea cow.png' alt='sea cow' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker39 = L.marker([-24.43564, 156.64902], {icon: dugongidaeIcon}).addTo(map).bindPopup("<img src='images/animals/sea cow.png' alt='sea cow' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker40 = L.marker([-26.89120, 156.73689], {icon: dugongidaeIcon}).addTo(map).bindPopup("<img src='images/animals/sea cow.png' alt='sea cow' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker41 = L.marker([-19.29921, 155.46280], {icon: dugongidaeIcon}).addTo(map).bindPopup("<img src='images/animals/sea cow.png' alt='sea cow' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                
                var dugongidae = L.layerGroup([marker36, marker37, marker38, marker39, marker40, marker41]); // create a layer to store the markers
                L.layerGroup([marker36, marker37, marker38, marker39, marker40, marker41]).addLayer(dugongidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(dugongidae);
                })

                $(".cover").attr('src','images/990300.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }

            // case 9 - Equidae
            if(FamilyRank == 990360) {
                var equidaeIcon = new animalImages({iconUrl: 'images/animals/horse.png'});
                var marker42 = L.marker([-20.896663, 142.11542], {icon: equidaeIcon}).addTo(map).bindPopup("<img src='images/animals/horse.png' alt='horse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker43 = L.marker([-19.775466, 138.119364], {icon: equidaeIcon}).addTo(map).bindPopup("<img src='images/animals/horse.png' alt='horse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker44 = L.marker([-18.663354, 144.889756], {icon: equidaeIcon}).addTo(map).bindPopup("<img src='images/animals/horse.png' alt='horse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker45 = L.marker([-17.66548, 140.66584], {icon: equidaeIcon}).addTo(map).bindPopup("<img src='images/animals/horse.png' alt='horse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker46 = L.marker([-15.64472, 142.73074], {icon: equidaeIcon}).addTo(map).bindPopup("<img src='images/animals/horse.png' alt='horse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker47 = L.marker([-13.21909, 143.08221], {icon: equidaeIcon}).addTo(map).bindPopup("<img src='images/animals/horse.png' alt='horse' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                var equidae = L.layerGroup([marker42, marker43, marker44, marker45, marker46, marker47]); // create a layer to store the markers
                L.layerGroup([marker42, marker43, marker44, marker45, marker46, marker47]).addLayer(equidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(equidae);
                })

                $(".cover").attr('src','images/990360.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }

            // case 10 - Felidae 990340
            if(FamilyRank == 990340) {
                var felidaeIcon = new animalImages({iconUrl: 'images/animals/cat.png'});
                var marker48 = L.marker([-21.45766, 142.168395], {icon: felidaeIcon}).addTo(map).bindPopup("<img src='images/animals/cat.png' alt='cat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker49 = L.marker([-19.050175, 139.87503], {icon: felidaeIcon}).addTo(map).bindPopup("<img src='images/animals/cat.png' alt='cat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker50 = L.marker([-24.19536, 143.96089], {icon: felidaeIcon}).addTo(map).bindPopup("<img src='images/animals/cat.png' alt='cat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker51 = L.marker([-26.53005, 143.60064], {icon: felidaeIcon}).addTo(map).bindPopup("<img src='images/animals/cat.png' alt='cat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker52 = L.marker([-22.2489357, 138.943637], {icon: felidaeIcon}).addTo(map).bindPopup("<img src='images/animals/cat.png' alt='cat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                var felidae = L.layerGroup([marker48, marker49, marker50, marker51, marker52]); // create a layer to store the markers
                L.layerGroup([marker48, marker49, marker50, marker51, marker52]).addLayer(felidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(felidae);
                })

                $(".cover").attr('src','images/990340.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }

            // case 11 - Herpestidae 990334
            if(FamilyRank == 990334) {
                var felidaeIcon = new animalImages({iconUrl: 'images/animals/lemur.png'});
                var marker53 = L.marker([-22.63885, 150.28738], {icon: felidaeIcon}).addTo(map).bindPopup("<img src='images/animals/lemur.png' alt='lemur' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker54 = L.marker([-15.119325, 144.88350], {icon: felidaeIcon}).addTo(map).bindPopup("<img src='images/animals/lemur.png' alt='lemur' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker55 = L.marker([-15.729343, 142.30019], {icon: felidaeIcon}).addTo(map).bindPopup("<img src='images/animals/lemur.png' alt='lemur' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker56 = L.marker([-18.384240, 140.37539], {icon: felidaeIcon}).addTo(map).bindPopup("<img src='images/animals/lemur.png' alt='lemur' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                $(".cover").attr('src','images/990334.jpg');

                var herpestidae = L.layerGroup([marker53, marker54, marker55, marker56]); // create a layer to store the markers
                L.layerGroup([marker53, marker54, marker55, marker56]).addLayer(herpestidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(herpestidae);
                })

                (".search-button").unbind('click').on('click',function(){})
            }

            // case 12 - Leporidae 990350
            if(FamilyRank == 990350) {
                var leporidaeIcon = new animalImages({iconUrl: 'images/animals/rabbit.png'});
                var marker57 = L.marker([-20.12660, 147.44046], {icon: leporidaeIcon}).addTo(map).bindPopup("<img src='images/animals/rabbit.png' alt='rabbit' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker58 = L.marker([-22.05356, 148.67061], {icon: leporidaeIcon}).addTo(map).bindPopup("<img src='images/animals/rabbit.png' alt='rabbit' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker59 = L.marker([-25.10599, 152.13261], {icon: leporidaeIcon}).addTo(map).bindPopup("<img src='images/animals/rabbit.png' alt='rabbit' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker60 = L.marker([-25.11395, 149.70746], {icon: leporidaeIcon}).addTo(map).bindPopup("<img src='images/animals/rabbit.png' alt='rabbit' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker61 = L.marker([-27.282460, 151.69327], {icon: leporidaeIcon}).addTo(map).bindPopup("<img src='images/animals/rabbit.png' alt='rabbit' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                var leporidae = L.layerGroup([marker57, marker58, marker59, marker60, marker61]); // create a layer to store the markers
                L.layerGroup([marker57, marker58, marker59, marker60, marker61]).addLayer(leporidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(leporidae);
                })

                $(".cover").attr('src','images/990350.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }

            // case 13 - Miniopteridae 990270
            if(FamilyRank == 990270) {
                var miniopteridaeIcon = new animalImages({iconUrl: 'images/animals/bat.png'});
                var marker62 = L.marker([-15.10235, 144.40902], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker63 = L.marker([-18.47596, 145.32285], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker64 = L.marker([-19.88710, 146.68480], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker65 = L.marker([-22.79289, 148.70576], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker66 = L.marker([-23.641001, 150.41919], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker67 = L.marker([-26.60080, 152.53681], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                var miniopteridae = L.layerGroup([marker62, marker63, marker64, marker65, marker66, marker67]); // create a layer to store the markers
                L.layerGroup([marker62, marker63, marker64, marker65, marker66, marker67]).addLayer(miniopteridae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(miniopteridae);
                })
                
                $(".cover").attr('src','images/990270.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }

            // case 14 - Muridae 990290
            if(FamilyRank == 990290) {
                var muridaeIcon = new animalImages({iconUrl: 'images/animals/mouse_1.png'});
                var marker68 = L.marker([-25.58827, 146.06025], {icon: muridaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse_1.png' alt='muridae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker69 = L.marker([-23.59041, 143.51208], {icon: muridaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse_1.png' alt='muridae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker70 = L.marker([-21.07860, 140.5333], {icon: muridaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse_1.png' alt='muridae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker71 = L.marker([-26.349052, 142.12445], {icon: muridaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse_1.png' alt='muridae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker72 = L.marker([-13.90260, 143.03828], {icon: muridaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse_1.png' alt='muridae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker73 = L.marker([-26.60080, 152.53681], {icon: muridaeIcon}).addTo(map).bindPopup("<img src='images/animals/mouse_1.png' alt='muridae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                
                var muridae = L.layerGroup([marker68, marker69, marker70, marker71, marker72, marker73]); // create a layer to store the markers
                L.layerGroup([marker68, marker69, marker70, marker71, marker72, marker73]).addLayer(muridae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(muridae);
                })

                $(".cover").attr('src','images/990290.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }

            // case - 15 Mustelidae 990332
            if(FamilyRank == 990332) {
                var mustelidaeIcon = new animalImages({iconUrl: 'images/animals/mustelidae.png'});
                var marker74 = L.marker([-22.92247, 139.04134], {icon: mustelidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mustelidae.png' alt='mustelidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker75 = L.marker([-18.69256, 139.48068], {icon: mustelidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mustelidae.png' alt='mustelidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker76 = L.marker([-24.81117, 139.12042], {icon: mustelidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mustelidae.png' alt='mustelidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker77 = L.marker([-22.91438, 140.89536], {icon: mustelidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mustelidae.png' alt='mustelidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker78 = L.marker([-17.22108, 141.85206], {icon: mustelidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mustelidae.png' alt='mustelidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker79 = L.marker([-20.53044, 143.21507], {icon: mustelidaeIcon}).addTo(map).bindPopup("<img src='images/animals/mustelidae.png' alt='mustelidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                var mustelidae = L.layerGroup([marker74, marker75, marker76, marker77, marker78, marker79]); // create a layer to store the markers
                L.layerGroup([marker74, marker75, marker76, marker77, marker78, marker79]).addLayer(mustelidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(mustelidae);
                })

                $(".cover").attr('src','images/990332.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }
            
            // case - 16 Otariidae 990310
            if(FamilyRank == 990310) {
                var otariidaoeIcon = new animalImages({iconUrl: 'images/animals/sea lion.png'});
                var marker80 = L.marker([-14.975034, 145.90212], {icon: otariidaoeIcon}).addTo(map).bindPopup("<img src='images/animals/sea lion.png' alt='sea lion' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker81 = L.marker([-13.44144, 144.67197], {icon: otariidaoeIcon}).addTo(map).bindPopup("<img src='images/animals/sea lion.png' alt='sea lion' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker82 = L.marker([-13.91114, 142.09744], {icon: otariidaoeIcon}).addTo(map).bindPopup("<img src='images/animals/sea lion.png' alt='sea lion' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker83 = L.marker([-17.42245, 146.84231], {icon: otariidaoeIcon}).addTo(map).bindPopup("<img src='images/animals/sea lion.png' alt='sea lion' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker84 = L.marker([-17.22108, 141.85206], {icon: otariidaoeIcon}).addTo(map).bindPopup("<img src='images/animals/sea lion.png' alt='sea lion' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker85 = L.marker([-15.81392, 139.17209], {icon: otariidaoeIcon}).addTo(map).bindPopup("<img src='images/animals/sea lion.png' alt='sea lion' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                var otariidae = L.layerGroup([marker80, marker81, marker82, marker83, marker84, marker85]); // create a layer to store the markers
                L.layerGroup([marker80, marker81, marker82, marker83, marker84, marker85]).addLayer(otariidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(otariidae);
                })

                $(".cover").attr('src','images/990310.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }
            
            // case 17 - Phocidae 990320
            if(FamilyRank == 990320) {
                var phocidaeIcon = new animalImages({iconUrl: 'images/animals/seal.png'});
                var marker86 = L.marker([-24.41964, 153.98662], {icon: phocidaeIcon}).addTo(map).bindPopup("<img src='images/animals/seal.png' alt='seal' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker87 = L.marker([-27.18868, 154.07449], {icon: phocidaeIcon}).addTo(map).bindPopup("<img src='images/animals/seal.png' alt='seal' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker88 = L.marker([-20.84880, 151.05550], {icon: phocidaeIcon}).addTo(map).bindPopup("<img src='images/animals/seal.png' alt='seal' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker89 = L.marker([-21.62704, 153.34006], {icon: phocidaeIcon}).addTo(map).bindPopup("<img src='images/animals/seal.png' alt='seal' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker90 = L.marker([-19.47332, 149.455076], {icon: phocidaeIcon}).addTo(map).bindPopup("<img src='images/animals/seal.png' alt='seal' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                var otariidae = L.layerGroup([marker86, marker87, marker88, marker89, marker90]); // create a layer to store the markers
                L.layerGroup([marker86, marker87, marker88, marker89, marker90]).addLayer(otariidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(otariidae);
                })
                
                $(".cover").attr('src','images/990320.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }

            // case 18 - Sciuridae 990292
            if(FamilyRank == 990292) {
                var sciuridaeIcon = new animalImages({iconUrl: 'images/animals/squirrel.png'});
                var marker91 = L.marker([-16.73383, 145.61911], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/squirrel.png' alt='squirrel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker92 = L.marker([-17.68304, 145.33751], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/squirrel.png' alt='squirrel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker93 = L.marker([-18.38609, 146.05033], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/squirrel.png' alt='squirrel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker94 = L.marker([-18.954236, 146.11637], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/squirrel.png' alt='squirrel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker95 = L.marker([-20.4329647, 148.430582], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/squirrel.png' alt='squirrel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker96 = L.marker([-23.97334, 150.65274], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/squirrel.png' alt='squirrel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker97 = L.marker([-27.331545, 152.76240], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/squirrel.png' alt='squirrel' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                var sciuridae = L.layerGroup([marker91, marker92, marker93, marker94, marker95, marker96, marker97]); // create a layer to store the markers
                L.layerGroup([marker91, marker92, marker93, marker94, marker95, marker96, marker97]).addLayer(sciuridae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(sciuridae);
                })

                $(".cover").attr('src','images/990292.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }

            // case 19 - Suidae 990370
            if(FamilyRank == 990370) {
                var sciuridaeIcon = new animalImages({iconUrl: 'images/animals/suidae.png'});
                var marker98 = L.marker([-20.47311, 145.18958], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/suidae.png' alt='suidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker99 = L.marker([-20.82521, 139.44102], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/suidae.png' alt='suidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker100 = L.marker([-15.07165, 143.17343], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/suidae.png' alt='suidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker101 = L.marker([-18.36970, 138.45147], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/suidae.png' alt='suidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker102 = L.marker([-27.93305, 149.51972], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/suidae.png' alt='suidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker103 = L.marker([-24.48942, 148.24116], {icon: sciuridaeIcon}).addTo(map).bindPopup("<img src='images/animals/suidae.png' alt='suidae' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                var sciuridae = L.layerGroup([marker98, marker99, marker100, marker101, marker102, marker103]); // create a layer to store the markers
                L.layerGroup([marker98, marker99, marker100, marker101, marker102, marker103]).addLayer(sciuridae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(sciuridae);
                })

                $(".cover").attr('src','images/990370.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }

            // case 20 - Vespertilionidae 990280
            if(FamilyRank == 990280) {
                var miniopteridaeIcon = new animalImages({iconUrl: 'images/animals/bat.png'});
                var marker104 = L.marker([-15.10235, 144.40902], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker105 = L.marker([-18.47596, 145.32285], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker106 = L.marker([-19.88710, 146.68480], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker107 = L.marker([-22.79289, 148.70576], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker108 = L.marker([-23.641001, 150.41919], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);
                var marker109 = L.marker([-26.60080, 152.53681], {icon: miniopteridaeIcon}).addTo(map).bindPopup("<img src='images/animals/bat.png' alt='bat' style='height: 50px;'>"+"<br>"+"Kingdom name: "+KingdomName+"<br>"+"Family name: "+FamilyName+"<br>"+"Family common name: "+FamilyCommonName+"<br>"+"Family Rank: "+FamilyRank);

                var vespertilionidae = L.layerGroup([marker104, marker105, marker106, marker107, marker108, marker109]); // create a layer to store the markers
                L.layerGroup([marker104, marker105, marker106, marker107, marker108, marker109]).addLayer(vespertilionidae).addTo(map);

                $(".clear").click(function(){
                    map.removeLayer(vespertilionidae);
                })

                $(".cover").attr('src','images/990280.jpg');
                (".search-button").unbind('click').on('click',function(){})
            }
        })
    });
    
}

// using map api
var map = L.map('map-container').setView([-20.917574, 145.702789], 5);

L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=BGS06YJ4dRyA4HeqYgI0', {
    attribution: 'https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=BGS06YJ4dRyA4HeqYgI0',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map)

// Create a water mark
L.Control.Watermark = L.Control.extend({
    onAdd: function() {
        var img = L.DomUtil.create('img');
        img.src = 'images/logo.png';
        img.style.width = '110px';
        return img;
    },
    onRemove: function() {},
});

L.control.Watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.Watermark().addTo(map);

var Flags = L.Icon.extend({
    options: {
        iconSize: [45, 45],
        iconUrl: 'images/flag.png',
    }
});

var flagIcon = new Flags;

map.on('click', function (e) {
  if (flagIcon) {
    map.removeLayer(flagIcon);
  }
  flagIcon = new L.Marker(e.latlng, {icon: new Flags}).addTo(map);
});

// get the location of the mouse click
map.on('click', function(e){
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    console.log(lat, lng);
    });

// get the data api from qld.gov.au
$(document).ready(function() {
    $.ajax({
        url: "https://apps.des.qld.gov.au/species/?op=getfamilynames&kingdom=animals&class=mammalia", 
        cache: true,
        success: function(data) {
            iterateRecords(data);	
        }
    });
});


