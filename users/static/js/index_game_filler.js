var game_table_html = " "
           $.ajax({

                type: 'GET',
                url: 'http://localhost:8000/games/games_json/',
                data: { get_param: 'value' },
                    dataType: 'json',
                    success: function (data) {
                            var json = data;


                    $.each(json,function(i,item){
                         game_table_html += "<div class='col-md-4 chain-grid'>" +"<a href='/users/game_detail/"+json[i].game_name+ "'/'"+">"+"<img class='img-responsive chain' src="+ json[i].game_image_url +"alt=' ' /></a>" + "<span class='star'> </span> <div class='grid-chain-bottom'> <h6><a href= "+ "/users/game_detail/Diablo3/" +json[i].game_name+"></a>"+ json[i].game_name +"</h6>" +  "<div class='star-price'> <div class='dolor-grid'>" +"<span class='actual'>"+json[i].game_money_price+"</span>" +"	</div>"+"</div>" +"<div class='clearfix'> </div> </div> </div> </div>"

                     });
                     $('#game_index_table').append(game_table_html)

                }
});
