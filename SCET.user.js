// ==UserScript==
// @name         SCET
// @namespace    https://github.com/Puffycheeses/SteeamCardExchangeTools
// @downloadURL  https://github.com/Puffycheeses/SteamCardExchangeTools/raw/master/SCET.user.js
// @updateURL    https://github.com/Puffycheeses/SteamCardExchangeTools/raw/master/SCET.user.js
// @version      2.0
// @description  Small tools to help improve the inventory search
// @author       Puffycheeses
// @match        *://www.steamcardexchange.net/index.php?inventory
// @grant        none
// ==/UserScript==

let $ = window.jQuery;
$('body').prepend('<div style=\'display: inline-block; position: fixed; z-index: 999; background-color: #060707; width: 12%; margin-top: 21px; color: white\'><div style=\'padding: 10px;\'><div class=\'form-group\'><label for="exampleInputEmail1">Cards in Set</label><input style=\'width: 100%;\' class="form-control cardSet" aria-describedby="CardSet" placeholder="Cards in set"></div><div class=\'form-group\'><label for="exampleInputEmail1">Price of cards</label><input style=\'width: 100%;\' class="form-control carValue" aria-describedby="CardPrice" placeholder="Price of cards"></div><br><div style=\'width: 100%; background-color: white; color: black; cursor: pointer;\' class="refresh">Submit</div><br><span style=\'color: #72ff7a\'>Perfect match</span> <span class=\'perMatch\'>0</span><br><span style=\'color: #ffc264\'>One in stock</span> <span class=\'oneStock\'>0</span><br><span style=\'color: #ff3b4d\'>No in stock</span> <span class=\'noStock\'>0</span></div></div>')
$('a:link').css("color", "white");
$('a:visited').css("color", "white");
$('.refresh').click(function () {
    let set = $(".cardSet").val();
    let value = $(".carValue").val();
    $('tbody tr td').each(function () {
        $( this ).parent().css("background-color", "");
        if( $( this ).is(`:contains("(${set} of ${set} Cards)")`) && $( this ).is(`:not(:contains("1x"))`) && $(this).parent().find('td').eq(1).text() === value){
            perfectMatch(this)
        } else if ( $( this ).is(`:contains("(${set} of ${set} Cards)")`) && $( this ).is(`:not(:contains("0x"))`) && $(this).parent().find('td').eq(1).text() === value) {
            oneStock(this)
        } else if ( $( this ).is(`:contains("(${set} of ${set} Cards)")`) && $(this).parent().find('td').eq(1).text() === value) {
            noStock(this)
        }
    })
});

function perfectMatch(body) { // Matches set and price
    $( body ).parent().css('background-color','#72ff7a').css('color', 'white');
    $( body ).parent().removeClass("odd")
    $('.perMatch').html(parseInt($('.perMatch').html(), 10)+1);
}

function oneStock(body) { // Matches set and price but only one in stock
    $( body ).parent().css('background-color','#ffc264').css('color', 'white');
    $( body ).parent().removeClass("odd");
    $('.oneStock').html(parseInt($('.oneStock').html(), 10)+1);
}

function noStock(body) { // Matches set and price but no in stock
    $( body ).parent().css('background-color','#ff3b4d').css('color', 'white');
    $( body ).parent().removeClass("odd");
    $('.noStock').html(parseInt($('.noStock').html(), 10)+1);
}