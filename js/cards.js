$.get('../card.html',function(card) {
    $.getJSON('js/cards.json', function(json) {
        $.each(json, function (num, item){
            var title = item.title;
            var body = item.body;
            var time = item.time;
    
            $("#cardholder").append(card);
            $("#card-title").text($("#card-title").text().replace('title', title));
            $("#card-body").text($("#card-body").text().replace('body', body));
            $("#card-time").text($("#card-time").text().replace('time', time));
            $("#card-title").attr("id","card"+num+"-title");
            $("#card-body").attr("id","card"+num+"-body");
            $("#card-time").attr("id","card"+num+"-time");
        })
      });
}, 'html')