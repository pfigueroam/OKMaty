function extraerDato(){
    var nproducto= document.getElementById("nproducto").value;
    var $precio = document.getElementById("nprecio").value;
    
    var calculado2 = ($precio  * 0.2).toFixed(2);
    var calculado3 = ($precio  * 0.3).toFixed(2);
    var calculado4 = ($precio  * 0.4).toFixed(2);
    var calculado5 = ($precio  * 0.5).toFixed(2);
    var calculado6 = ($precio  * 0.6).toFixed(2);
    var calculado7 = ($precio  * 0.7).toFixed(2);
    var calculado8 = ($precio  * 0.8).toFixed(2);
    var calculado9 = ($precio  * 0.9).toFixed(2);
    var calculado100 =  $precio

    
    var precioventa =  parseInt($precio) + parseInt(calculado2);
    var precioventa2 =  parseInt($precio) + parseInt(calculado3);
    var precioventa3 =  parseInt($precio) + parseInt(calculado4);
    var precioventa4 =  parseInt($precio) + parseInt(calculado5);
    var precioventa5 =  parseInt($precio) + parseInt(calculado6);
    var precioventa6 =  parseInt($precio) + parseInt(calculado7);
    var precioventa7 =  parseInt($precio) + parseInt(calculado8);
    var precioventa8 =  parseInt($precio) + parseInt(calculado9);
    var precioventa9 =  parseInt($precio) + parseInt($precio);

    // precioventa8 = precioventa8.toFixed(2);
    // var precioventa2 = precioventa2.toFixed(2);
    // return Math.round (precioventa2);


    
    console.log(nproducto);
    console.log($precio);


    document.getElementById('nproducto1').innerHTML = nproducto;
    document.getElementById('nproducto2').innerHTML = nproducto;
    document.getElementById('nproducto3').innerHTML = nproducto;
    document.getElementById('nproducto4').innerHTML = nproducto;
    document.getElementById('nproducto5').innerHTML = nproducto;
    document.getElementById('nproducto6').innerHTML = nproducto;
    document.getElementById('nproducto7').innerHTML = nproducto;
    document.getElementById('nproducto8').innerHTML = nproducto;
    document.getElementById('nproducto9').innerHTML = nproducto;

    


    document.getElementById('precioventa1').innerHTML = precioventa;
    document.getElementById('precioventa2').innerHTML = precioventa2;
    document.getElementById('precioventa3').innerHTML = precioventa3;
    document.getElementById('precioventa4').innerHTML = precioventa4;
    document.getElementById('precioventa5').innerHTML = precioventa5;
    document.getElementById('precioventa6').innerHTML = precioventa6;
    document.getElementById('precioventa7').innerHTML = precioventa7;
    document.getElementById('precioventa8').innerHTML = precioventa8;
    document.getElementById('precioventa9').innerHTML = precioventa9;


    document.getElementById('ganancia').innerHTML = calculado2;
    document.getElementById('ganancia2').innerHTML = calculado3;
    document.getElementById('ganancia3').innerHTML = calculado4;
    document.getElementById('ganancia4').innerHTML = calculado5;
    document.getElementById('ganancia5').innerHTML = calculado6;
    document.getElementById('ganancia6').innerHTML = calculado7;
    document.getElementById('ganancia7').innerHTML = calculado8;
    document.getElementById('ganancia8').innerHTML = calculado9;
    document.getElementById('ganancia9').innerHTML = calculado100;
   


}




// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
// $(window).on("load resize ", function() {
//     var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
//     $('.tbl-header').css({'padding-right':scrollWidth});
//   }).resize();