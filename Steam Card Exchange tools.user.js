// ==UserScript==
// @name         Steam Card Exchange inventory tools
// @namespace    https://github.com/Puffycheeses/SteeamCardExchangeTools
// @downloadURL  https://github.com/Puffycheeses/SteeamCardExchangeTools/raw/master/Steam%20Card%20Exchange%20tools.user.js
// @updateURL    https://github.com/Puffycheeses/SteeamCardExchangeTools/raw/master/Steam%20Card%20Exchange%20tools.user.js
// @version      1.1
// @description  Small tools to help improve the inventory search
// @author       Puffycheeses
// @match        *://www.steamcardexchange.net/index.php?inventory
// @grant        none
// ==/UserScript==
$('body').append('<style>#settingsbox {background-color:#18191B;height:300px;width:200px;position:fixed;top:41px;left:0px;margin:0px;}</style>');
$('body').append('<div id="settingsbox"><center><br>Card value<input type="number" id="cardVal"><br><br>Cards in set<input type="number" id="cardSet"><br><br>Best matches appear in green, Average matches appear in orange, Set matches appear in pink<br><br><br>Perfect Matches: <span id="greenmatch">0</span><br></center></div>');
window.setInterval(function(){
    $('#greenmatch').html(0);
    var set = $('#cardSet').val();
    var value = $('#cardVal').val();
    var price = '';
    $('tbody tr td').each(function(){
        var row = $(this);
        $(row).parent().css("background-color", "");
        if($(row).is(':contains("('+set+' of '+set+' Cards)")')){
            $(row).parent().removeClass("odd");
            $(row).parent().css('background-color','#FF69B4');
        }
        if($(row).is(':contains("('+set+' of '+set+' Cards)")')){
            price = $(this).parent().find('td').eq(1).text();
            if(price == value){
                $(row).parent().removeClass("odd");
                $(row).parent().css('background-color','#ffa500');
            }
        }
        if($(row).is(':contains("('+set+' of '+set+' Cards)")')){
            if($(row).is(':not(:contains("1x ('+set+' of '+set+' Cards)"))')){
                price = $(this).parent().find('td').eq(1).text();
                if(price == value){
                    $(row).parent().removeClass("odd");
                    $(row).parent().css('background-color','#00ff00');
                    $('#greenmatch').html(parseInt($('#greenmatch').html(), 10)+1);
                }
            }
        }
    });
    console.log(refresh);
}, 250);
