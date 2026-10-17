var R=[["Bahia (5 hubs)",50],["Minas Gerais",40],["Rio de Janeiro",35],["Espírito Santo",15],["Rio Grande do Sul",10],["Ceará",45],["Rio Grande do Norte",70],["Pará",15],["Piauí",15],["Maranhão",10],["Brasília",15],["Goiás",20],["Mato Grosso do Sul",15],["Amazonas",10],["Mato Grosso",5],["Goiás (segunda rota)",15],["São Paulo",15]];
document.getElementById("bars").innerHTML=R.map(function(r){return '<li><span>'+r[0]+'</span><span class="t"><i style="width:'+(r[1]/70*100)+'%"></i></span><em>'+r[1]+'/dia</em></li>'}).join("");
document.getElementById("lh").innerHTML=["Bahia","Pernambuco","Rio Grande do Norte","Ceará","Maranhão","Teresina","São Paulo","Rio de Janeiro","Espírito Santo","Brasília","Goiás","Outros estados, de acordo com a demanda"].map(function(x){return "<li>"+x+"</li>"}).join("");
document.getElementById("docs").innerHTML=["Contrato Social e alterações","Cartão de Inscrição do CNPJ","Inscrição Estadual","Alvará Municipal","RNTRC","Certificado de Responsável Técnico da ANTT","Apólice de seguro para cobertura das cargas em trânsito e depósito","Certificado de Regularidade de Situação (CRF – FGTS)","Certidão Negativa de Tributos Federais","Certidão Negativa de Tributos Estaduais","Certidão Negativa de Tributos Municipais","Certidão Negativa de Protestos","CND Trabalhista","PPRA / PCMSO","Apólice de seguro de vida em grupo para empregados e entregadores"].map(function(x){return "<li>"+x+"</li>"}).join("");
// Parceiros: cada um usa o arquivo images/parceiros/<arquivo>.
// Formato: [nome, arquivo, largura÷altura da imagem recortada, (opcional) largura máxima, (opcional) 1 = fundo escuro]
// Se o arquivo não existir, o parceiro simplesmente não aparece na faixa.
var P=[
["Loggi", "loggi.png", 2.949],
["Total Express", "total-express.png", 2.548],
["Jadlog", "jadlog.png", 3.014],
["Mercado Livre", "mercado-livre.png", 1.121],
["Shippify", "shippify.png", 3.465],
["Amazon Logistics", "amazon.png", 1.863],
["Sequoia", "sequoia.png", 5.237, 130, 1],
["FedEx Express", "fedex.png", 3.193],
["Patrus Transportes", "patrus-transportes.png", 2.664],
["J&T Express", "jt-express.png", 4.538],
["iMile", "imile.png", 1.853],
["Anjun", "anjun.png", 2.503],
["Grupo Lemos Passos", "grupo-lemos-passos.png", 0.907],
["Grupo Petrópolis", "grupo-petropolis.png", 3.349]];
(function(){var t=document.getElementById("track");
for(var k=0;k<2;k++){P.forEach(function(p){
var li=document.createElement("li");if(k)li.setAttribute("aria-hidden","true");
var r=p[2],mw=p[3]||190,mh=r<1.3?76:60,h=Math.min(mh,mw/r),i=new Image();
i.alt=k?"":p[0];i.decoding="async";i.style.height=h+"px";i.style.width=(h*r)+"px";
i.onerror=function(){li.remove()};
if(p[4])li.className="dk";
i.src="images/parceiros/"+p[1];li.appendChild(i);t.appendChild(li)})}})();
(function(){
var nav=document.getElementById("nav"),links=nav.querySelectorAll("a"),
home=[document.querySelector(".hero-block")||document.querySelector(".hero")],
secs=Array.prototype.slice.call(document.querySelectorAll("main > section"));
function show(){
var id=location.hash.slice(1),sec=secs.filter(function(s){return s.id===id})[0],inicio=!sec;
home.forEach(function(e){e.hidden=!inicio});
secs.forEach(function(s){s.hidden=s!==sec});
links.forEach(function(a){var on=a.getAttribute("href")==="#"+(inicio?"inicio":id);if(on){a.setAttribute("aria-current","page");a.scrollIntoView({block:"nearest",inline:"center"})}else a.removeAttribute("aria-current")});
window.scrollTo({top:0,behavior:"instant"})}
window.addEventListener("hashchange",show);show()})();

// ===== Hamburger menu =====
(function(){
var toggle=document.getElementById("menuToggle"),
    nav=document.getElementById("nav"),
    overlay=document.getElementById("navOverlay");
if(!toggle||!nav)return;

function openMenu(){
  toggle.setAttribute("aria-expanded","true");
  toggle.setAttribute("aria-label","Fechar menu");
  nav.classList.add("open");
  overlay.classList.add("open");
  document.body.style.overflow="hidden";
}
function closeMenu(){
  toggle.setAttribute("aria-expanded","false");
  toggle.setAttribute("aria-label","Abrir menu");
  nav.classList.remove("open");
  overlay.classList.remove("open");
  document.body.style.overflow="";
}
toggle.addEventListener("click",function(){
  var open=toggle.getAttribute("aria-expanded")==="true";
  open?closeMenu():openMenu();
});
overlay.addEventListener("click",closeMenu);
nav.querySelectorAll("a").forEach(function(a){
  a.addEventListener("click",closeMenu);
});
document.addEventListener("keydown",function(e){
  if(e.key==="Escape"&&toggle.getAttribute("aria-expanded")==="true")closeMenu();
});
})();

// ===== Hero entrance animations =====
(function(){
var els=document.querySelectorAll(".hero-anim, .brand-anim");
if(!els.length)return;
// Use rAF double-tick to ensure the initial opacity:0 is painted first
requestAnimationFrame(function(){
  requestAnimationFrame(function(){
    els.forEach(function(el){el.classList.add("visible")});
  });
});
})();

// ===== Header scroll shadow =====
(function(){
var header=document.querySelector("header");
if(!header)return;
var ticking=false;
window.addEventListener("scroll",function(){
  if(!ticking){
    ticking=true;
    requestAnimationFrame(function(){
      if(window.scrollY>10){header.classList.add("scrolled")}
      else{header.classList.remove("scrolled")}
      ticking=false;
    });
  }
},{passive:true});
})();
