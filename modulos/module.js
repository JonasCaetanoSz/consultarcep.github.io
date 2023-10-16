var es = document.querySelector(".estado");
var city = document.querySelector( "p.cidade");
var rua = document.querySelector(".rua");
var area = document.querySelector(".area");
var bairro = document.querySelector(".bairro");
var cep2 = document.querySelector('.cep2');
const a1 = document.querySelector("body > nav > ul > li:nth-child(2) > a")
const a2 = document.querySelector("body > nav > ul > li:nth-child(3) > a")
var cep ;


function buscar(response){

cep = document.querySelector(".Cep").value

$.ajax({

url : 'https://api.postmon.com.br/v1/cep/' + cep,

dataType : 'json',

error: function() {
document.querySelector('.aguarde').style.color = '#ff7566'
document.querySelector(".aguarde").textContent = "O CEP INSERIDO NÃO É VALIDO."
document.querySelector(".aguarde").hidden=false},
success: function(data) { response = data
es.textContent = "ESTADO : " + response.estado_info.nome.toUpperCase()
city.textContent = "CIDADE : " + response.cidade.toUpperCase()
rua.textContent = "LOGRADOURO : " + response.logradouro.toUpperCase()
area.textContent = "ARÉA DO ESTADO : " + response.estado_info.area_km2.toUpperCase() + " Km²"
bairro.textContent = "BAIRRO : " + response.bairro.toUpperCase()
cep2.textContent = "CEP : " + response.cep.toUpperCase()

document.querySelector("body > main > div.result").hidden=false
}


})
};
function ir(){
	document.querySelector(".result").hidden=true

if (document.querySelector(".Cep").value.length < 8 || document.querySelector('.Cep').value.length > 8 )

{
document.querySelector(".aguarde").hidden=false
document.querySelector(".result").hidden=true
document.querySelector('.aguarde').style.color = '#ff7566'
document.querySelector(".aguarde").textContent = "O CEP INSERIDO NÃO É VALIDO." } 
else if (document.querySelector(".Cep").type != 'number') {alert('não altere a Pagina...'); document.querySelector(".Cep").type = 'number'  }

else

{ 
document.querySelector(".aguarde").textContent = "PESQUISANDO..." 
document.querySelector('.aguarde').style.color = 'lightgreen'
document.querySelector(".aguarde").hidden=false

setTimeout(function(){document.querySelector(".aguarde").hidden=true
buscar(); },2*1000)

 }


}

document.querySelector(".buscar").addEventListener('click' , ir)


$(document).keypress(function(e) {
    if(e.which == 13) $('.buscar').click();
});



function view_a1(){

document.querySelector('.info').style.visibility = 'visible'

document.querySelector('main').style.opacity = '0.28'

document.querySelector("body > main > div.content-input > button").disabled = true
document.querySelector("body > main > div.content-input > input").disabled = true

}

a1.addEventListener('click' , view_a1)

document.querySelector('.close').onclick = function(){

document.querySelector('.info').style.visibility = 'hidden'
document.querySelector('main').style.opacity = ''

document.querySelector(".buscar").disabled = false
document.querySelector(".Cep").disabled = false
	 }
function reload_page(){
window.location.reload()
}
document.querySelector("body > nav > ul > li:nth-child(1) > a").onclick = reload_page
