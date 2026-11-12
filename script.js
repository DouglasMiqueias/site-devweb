/**
 * DevWeb – Código sólido. Presença que vende.
 * JavaScript Principal do Projeto
 */

/* ==========================================================================
   1. Inicialização e Tema (Modo Claro / Escuro)
   ========================================================================== */
document.documentElement.classList.add('js');
try {
  if (localStorage.getItem('dw-theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
} catch (e) {}

(function initTheme() {
  var R = document.documentElement;
  var b = document.getElementById('tg');
  var logo = document.querySelector('header .logo img');
  var ft = document.querySelector('footer .logo img');
  var dk = logo && logo.src;

  function set(t, save) {
    R.setAttribute('data-theme', t);
    if (b) {
      b.setAttribute('aria-pressed', t === 'dark');
      b.setAttribute('aria-label', t === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
    }
    if (logo && ft) {
      logo.src = t === 'dark' ? ft.src : dk;
    }
    if (save) {
      try {
        localStorage.setItem('dw-theme', t);
      } catch (e) {}
    }
  }

  set(R.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);
  if (b) {
    b.addEventListener('click', function () {
      set(R.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });
  }
})();

/* ==========================================================================
   2. Frase Rotativa (Hero)
   ========================================================================== */
(function(){
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var $=function(i){return document.getElementById(i)};
/* frase que troca */
var W=['barbearias','restaurantes','clínicas','lojas','prestadores de serviço'],wi=0,r=$('rot');
if(!rm)setInterval(function(){r.classList.add('out');setTimeout(function(){wi=(wi+1)%W.length;r.textContent=W[wi];r.classList.remove('out')},350)},2600);
})();

/* ==========================================================================
   3. Linha do Tempo / Etapas de Desenvolvimento
   ========================================================================== */
(function(){
var box=document.querySelector('.steps');if(!box)return;
var st=[].slice.call(box.children),tick=false;
function upd(){
 tick=false;
 var r=box.getBoundingClientRect(),vh=window.innerHeight,a=vh*.75,b=vh*.4;
 var p=Math.max(0,Math.min(1,(a-r.top)/((a-b)+r.height))),i=Math.min(st.length-1,Math.floor(p*st.length));
 st.forEach(function(s,k){s.classList.toggle('done',k<i);s.classList.toggle('on',k===i)});
}
function req(){if(!tick){tick=true;requestAnimationFrame(upd)}}
window.addEventListener('scroll',req,{passive:true});window.addEventListener('resize',req);window.addEventListener('hashchange',req);
upd();
})();

/* ==========================================================================
   4. Animação da Seção "Duo" (Equipe)
   ========================================================================== */
(function(){
var d=document.getElementById('duo');if(!d)return;
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){d.classList.add('in');io.disconnect()}})},{threshold:.2});io.observe(d)}else d.classList.add('in');
})();

/* ==========================================================================
   5. Portfólio / Projetos Recentes
   ========================================================================== */
(function(){
var g=['g','l','','r','g','','r','g','','l','l','','r','g','','g','l','','r','l'].map(function(c){return '<i class="'+c+'"></i>'}).join('');
var pp='<div class="pp"><u></u><s></s></div>';
var P=[
{c:'Cromática Filmes',t:'Página de apresentação',u:'cromaticafilmes.com.br',col:'#E5252A',dk:'assets/img/cromatica-desktop.webp',mb:'assets/img/cromatica-mobile.webp',ar:'1350/640',pa:'874/1600',pw:'22%',d:'Uma página única que apresenta a produtora e leva o visitante direto ao contato.',l:['Visual feito sob medida para a marca','Um caminho claro até o contato','Abre rápido e funciona no celular'],
 s:'<div class="sc s1"><div class="sp"></div><div class="h1"><span class="lg">Cromática Filmes</span><div class="b1 w70"></div><div class="b1 w45"></div><span class="cta">Fale com a gente</span></div><div class="st"><i></i><i></i><i></i><i></i></div></div>'},
{c:'Cervo Films',t:'Site completo',u:'cervofilms.com',col:'#7C3AED',dk:'assets/img/cervo-desktop.webp',mb:'assets/img/cervo-mobile.webp',ar:'1359/638',pa:'877/1600',pw:'22%',d:'Um site com os trabalhos, os serviços e a história da produtora, tudo organizado em um só lugar.',l:['Trabalhos fáceis de navegar','Páginas organizadas para o cliente achar o que procura','Funciona no celular e no computador'],
 s:'<div class="sc s2"><div class="n2"><b>Cervo Films</b><span>Trabalhos</span><span>Serviços</span><span>Sobre</span><span>Contato</span></div><div class="h2x"><div class="t2">Cervo Films</div><div class="b2 w60"></div></div><div class="g2"><i></i><i></i><i></i></div></div>'}
];
var h1=document.getElementById('hs1'),h2=document.getElementById('hs2');if(h1){h1.src=P[0].dk;h1.alt='Site da Cromática Filmes no computador'}if(h2){h2.src=P[0].mb;h2.alt='Site da Cromática Filmes no celular'}
function im(u,a){return u?'<img class="shot" src="'+u+'" alt="'+a+'">':''}
var tabs=[].slice.call(document.querySelectorAll('#pjt .pj')),stg=document.getElementById('stg');
function show(i,f){
 var p=P[i];
 tabs.forEach(function(b,j){b.setAttribute('aria-selected',j===i);b.tabIndex=j===i?0:-1});
 if(f)tabs[i].focus();
 stg.style.setProperty('--c',p.col);stg.style.setProperty('--ar',p.ar||'16/10');stg.style.setProperty('--pa',p.pa||'9/18');stg.style.setProperty('--pw',p.pw||'26%');
 stg.innerHTML='<div class="tx"><span class="pill ty">'+p.t+'</span><h3>'+p.c+'</h3><p class="ds">'+p.d+'</p><ul>'+p.l.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><div class="ac">'+(p.u?'<a class="btn btn-primary" href="https://'+p.u+'" target="_blank" rel="noopener">Visitar o site</a><a class="btn btn-ghost" href="#briefing">Quero um projeto assim</a>':'<a class="btn btn-primary" href="#briefing">Quero um projeto assim</a>')+'</div></div><div class="dv n" aria-hidden="true"><div class="lap">'+p.s+im(p.dk,'Página inicial de '+p.c+' no computador')+'</div><div class="lapb"></div><div class="ph2">'+p.s+im(p.mb,'Página inicial de '+p.c+' no celular')+'</div></div>';
 [].forEach.call(stg.querySelectorAll('.shot'),function(i){function x(){i.remove()}i.addEventListener('error',x);if(i.complete&&!i.naturalWidth)x()});
}
tabs.forEach(function(b,i){
 b.addEventListener('click',function(){show(i)});
 b.addEventListener('keydown',function(e){
  var k=e.key,n=k==='ArrowRight'||k==='ArrowDown'?(i+1)%2:k==='ArrowLeft'||k==='ArrowUp'?(i+1)%2:-1;
  if(n>-1){e.preventDefault();show(n,true)}
 });
});
show(0);
})();

/* ==========================================================================
   6. Simulador Interativo de Recursos
   ========================================================================== */
(function(){
var S={
 barbearia:{l:'Barbearia',nome:'Barbearia Alinha',ac:'#E5252A',tag:'Corte e barba no centro da cidade',cta:'Quero meu horário',rec:'Galeria de trabalhos',it:[['Corte','R$ 45'],['Barba','R$ 35'],['Corte + barba','R$ 70']]},
 restaurante:{l:'Restaurante',nome:'Cantina do Zé',ac:'#0B8A4F',tag:'Comida caseira, do jeito da casa',cta:'Ver cardápio e pedir',rec:'Galeria de trabalhos',it:[['Parmegiana','R$ 42'],['Risoto de cogumelos','R$ 48'],['Tiramisù','R$ 22']]},
 clinica:{l:'Clínica',nome:'Clínica Bem Viver',ac:'#2563EB',tag:'Cuidado com a sua saúde',cta:'Falar com a clínica',rec:'Galeria de trabalhos',it:[['Clínico geral','R$ 180'],['Nutrição','R$ 150'],['Psicologia','R$ 140']]}
};
var FN={wa:'Botão de WhatsApp',rev:'Avaliações de clientes',pix:'Formulário de contato'};
var seg='barbearia',on={wa:1},ph=document.getElementById('phone'),est=document.getElementById('est');
function render(k){
 var s=S[seg],h='<div class="ph" style="--ac:'+s.ac+'"><div class="ph-top"><b>'+s.nome+'</b><span>'+s.tag+'</span></div><div class="ph-b">';
 s.it.forEach(function(r){h+='<div class="row"><span>'+r[0]+'</span><b>'+r[1]+'</b></div>'});
 h+='<button type="button" class="ph-cta" tabindex="-1">'+s.cta+'</button></div>';
 if(on.rev)h+='<div class="blk'+(k==='rev'?' n':'')+'"><b>★ 4,9</b> · 128 avaliações de clientes</div>';
 if(on.pix)h+='<div class="blk'+(k==='pix'?' n':'')+'">Deixe seu contato e retornamos em minutos</div>';
 h+='</div>';
 if(on.wa)h+='<div class="wa'+(k==='wa'?' n':'')+'">Fale no WhatsApp</div>';
 ph.innerHTML=h;
 var ks=Object.keys(on).filter(function(x){return on[x]});
 est.innerHTML='Pré-visualização: '+s.nome+(ks.length?' com '+ks.map(function(x){return FN[x].toLowerCase()}).join(', '):'')+'.<br>Prazo de referência: <b>'+(5+2*ks.length)+' dias úteis</b><small>Valor ilustrativo. O prazo real é combinado na conversa.</small>';
}
[].forEach.call(document.querySelectorAll('[data-s]'),function(b){b.addEventListener('click',function(){
 seg=b.dataset.s;[].forEach.call(document.querySelectorAll('[data-s]'),function(o){o.setAttribute('aria-selected',o===b)});render('s');
})});
[].forEach.call(document.querySelectorAll('[data-f]'),function(b){b.addEventListener('click',function(){
 var k=b.dataset.f;on[k]=on[k]?0:1;b.setAttribute('aria-pressed',!!on[k]);render(k);
})});
document.getElementById('mk').addEventListener('click',function(){
 var f=[S[seg].rec];if(on.wa)f.push(FN.wa);if(on.rev)f.push('Depoimentos de clientes');if(on.pix)f.push('Formulário de contato');
 window.devwebPrefill={func:f,tipo:'Landing page (uma página focada em uma oferta)',obs:'Segmento: '+S[seg].l+' (escolhido no simulador do site).'};
});
render();
})();

/* ==========================================================================
   7. Formulário de Briefing e Navegação Dinâmica
   ========================================================================== */
(function(){
var WA='5500000000000',MAIL='contato@devweb.com.br';
var G=function(t){return{g:t}};
var F=[
G('Sobre você'),
{id:'nome',l:'Nome da empresa ou seu nome',t:'text',r:1,ac:'organization'},
{id:'whats',l:'Seu WhatsApp',t:'tel',r:1,ph:'(00) 00000-0000',ac:'tel'},
{id:'email',l:'Seu melhor e-mail',t:'email',r:1,ac:'email'},
{id:'tempo',l:'Há quanto tempo atua no mercado?',t:'select',o:['Ainda vou começar','Menos de 1 ano','1 a 3 anos','3 a 5 anos','Mais de 5 anos']},
{id:'faz',l:'Descreva brevemente o que você ou sua empresa faz',t:'area',r:1},
{id:'social',l:'Instagram ou outras redes sociais (opcional)',t:'text',h:'Cole o link ou o @ do perfil.'},
G('Objetivo do projeto'),
{id:'obj',l:'Qual o principal objetivo do site?',t:'radio',r:1,x:1,o:['Vender produtos ou serviços','Receber contatos e pedidos de orçamento','Ser encontrado no Google','Apresentar minha empresa com credibilidade','Divulgar um lançamento ou campanha']},
{id:'voltado',l:'O site será voltado para:',t:'radio',r:1,o:['Minha empresa','Meu trabalho como profissional autônomo','Um produto ou projeto específico']},
{id:'tipo',l:'Que tipo de projeto você precisa?',t:'radio',r:1,o:['Landing page (uma página focada em uma oferta)','Site institucional (várias páginas)','Ainda não sei, quero ajuda para decidir']},
{id:'func',l:'Quais recursos você gostaria de ter?',t:'check',x:1,h:'Marque quantos quiser.',o:['Botão de WhatsApp','Formulário de contato','Galeria de trabalhos','Depoimentos de clientes','Mapa e localização','Blog']},
{id:'siteatual',l:'Você já tem um site hoje? Qual o endereço? (opcional)',t:'text'},
G('Seu público e seu negócio'),
{id:'publico',l:'Quem é o público principal do site?',t:'area',r:1,h:'Ex.: idade, tipo de cliente, empresas ou pessoas físicas.'},
{id:'problema',l:'Qual o principal problema do seu cliente que sua empresa resolve?',t:'area',r:1},
{id:'dif',l:'O que diferencia sua empresa das outras do seu segmento?',t:'area',r:1},
{id:'lembrar',l:'Se o visitante lembrar de apenas uma coisa sobre sua empresa, o que você gostaria que fosse?',t:'area',r:1},
{id:'conc',l:'Cite até 3 concorrentes que você considera referência (opcional)',t:'area'},
G('Visual e conteúdo'),
{id:'paleta',l:'Possui paleta de cores definida?',t:'radio',r:1,o:['Sim, já tenho','Tenho só a cor principal','Não, quero sugestões de vocês']},
{id:'cores',l:'Quais são as cores? (opcional)',t:'text',h:'Nomes ou códigos, como #E5252A.'},
{id:'ref',l:'Há um site que você gosta e quer usar como referência?',t:'text',r:1,h:'Cole o link. Se não tiver, escreva "não tenho".'},
{id:'tom',l:'Qual tom você quer que o site transmita?',t:'check',r:1,x:1,o:['Profissional e confiável','Moderno e tecnológico','Descontraído e próximo','Elegante e sofisticado','Minimalista e limpo']},
{id:'conteudo',l:'Quem vai fornecer os textos e as fotos?',t:'radio',o:['Eu envio tudo','Preciso de ajuda com os textos','Preciso de ajuda com textos e fotos']},
{id:'logo',l:'Link da sua logo (opcional)',t:'text',h:'Cole um link do Drive ou Dropbox, ou envie o arquivo pelo WhatsApp depois. Se não tiver logo, ignore.'},
G('Prazo e investimento'),
{id:'dominio',l:'Você já possui um domínio?',t:'radio',r:1,h:'Exemplo: www.suaempresa.com.br',o:['Sim, já tenho','Ainda não tenho','Não sei o que é']},
{id:'data',l:'Há alguma data desejada para o lançamento do site?',t:'text',r:1,h:'Pode ser uma data ou "sem pressa".'},
{id:'invest',l:'Qual faixa de investimento você tem em mente?',t:'select',o:['Até R$ 1.500','De R$ 1.500 a R$ 3.000','De R$ 3.000 a R$ 6.000','Acima de R$ 6.000','Prefiro conversar antes']},
{id:'conheceu',l:'Como conheceu a DevWeb? (opcional)',t:'select',o:['Instagram','Indicação','Google','Outro']},
{id:'obs',l:'Algo mais que devemos saber? (opcional)',t:'area'}
];
var form=document.getElementById('bf'),h='';
F.forEach(function(f){
 if(f.g){h+='<h2 class="grp">'+f.g+'</h2>';return}
 var rq=f.r?' <span class="req" aria-hidden="true">*</span><span class="sr" style="position:absolute;left:-9999px"> obrigatório</span>':'';
 var hint=f.h?'<p class="hint" id="h-'+f.id+'">'+f.h+'</p>':'';
 var err='<p class="err" id="e-'+f.id+'" role="alert"></p>';
 var d=f.h?' aria-describedby="h-'+f.id+' e-'+f.id+'"':' aria-describedby="e-'+f.id+'"';
 if(f.t==='radio'||f.t==='check'){
  var ty=f.t==='radio'?'radio':'checkbox',os='';
  f.o.forEach(function(o){os+='<label class="opt"><input type="'+ty+'" name="'+f.id+'" value="'+o+'"><span>'+o+'</span></label>'});
  if(f.x)os+='<label class="opt"><input type="'+ty+'" name="'+f.id+'" value="__x"><span>Outro:</span><input class="ox" type="text" name="x_'+f.id+'" aria-label="Outro, especifique"></label>';
  h+='<fieldset class="fld" id="w-'+f.id+'"><legend>'+f.l+rq+'</legend>'+hint+'<div class="opts">'+os+'</div>'+err+'</fieldset>';
 }else{
  var c;
  if(f.t==='area')c='<textarea id="f-'+f.id+'" name="'+f.id+'"'+(f.r?' required':'')+d+'></textarea>';
  else if(f.t==='select'){c='<select id="f-'+f.id+'" name="'+f.id+'"'+(f.r?' required':'')+d+'><option value="">Selecione</option>';f.o.forEach(function(o){c+='<option>'+o+'</option>'});c+='</select>'}
  else c='<input type="'+f.t+'" id="f-'+f.id+'" name="'+f.id+'"'+(f.r?' required':'')+(f.ph?' placeholder="'+f.ph+'"':'')+(f.ac?' autocomplete="'+f.ac+'"':'')+d+'>';
  h+='<div class="fld" id="w-'+f.id+'"><label for="f-'+f.id+'">'+f.l+rq+'</label>'+hint+c+err+'</div>';
 }
});
h+='<button class="btn btn-primary send" type="submit">Revisar e enviar briefing</button>';
form.innerHTML=h;
function val(f){
 if(f.t==='radio'||f.t==='check'){
  var a=[].slice.call(form.querySelectorAll('input[name="'+f.id+'"]:checked')).map(function(i){return i.value==='__x'?'Outro: '+form.elements['x_'+f.id].value.trim():i.value});
  return a.join(', ');
 }
 return form.elements[f.id].value.trim();
}
form.addEventListener('submit',function(e){
 e.preventDefault();
 var first=null,txt='*Briefing de site | DevWeb*\n';
 F.forEach(function(f){
  if(f.g){txt+='\n== '+f.g+' ==\n';return}
  var v=val(f),w=document.getElementById('w-'+f.id),er=document.getElementById('e-'+f.id),m='';
  if(f.r&&!v)m='Preencha este campo para continuar.';
  else if(f.t==='email'&&v&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))m='Digite um e-mail válido.';
  else if(f.t==='tel'&&v&&v.replace(/\D/g,'').length<10)m='Digite o WhatsApp com DDD.';
  er.textContent=m;w.classList.toggle('bad',!!m);
  if(m&&!first)first=w;
  txt+=f.l.replace(/ \(opcional\)/,'')+': '+(v||'-')+'\n';
 });
 if(first){var t=first.querySelector('input,select,textarea');(t||first).focus();first.scrollIntoView({block:'center'});return}
 document.getElementById('sum').value=txt;
 document.getElementById('wa').href='https://wa.me/'+WA+'?text='+encodeURIComponent(txt);
 document.getElementById('ml').href='mailto:'+MAIL+'?subject='+encodeURIComponent('Briefing de site')+'&body='+encodeURIComponent(txt);
 document.getElementById('formbox').hidden=true;document.getElementById('revbox').hidden=false;window.scrollTo(0,0);
});
document.getElementById('ed').addEventListener('click',function(){document.getElementById('revbox').hidden=true;document.getElementById('formbox').hidden=false;window.scrollTo(0,0)});
document.getElementById('cp').addEventListener('click',function(){
 var s=document.getElementById('sum'),m=document.getElementById('cpmsg');s.select();
 try{navigator.clipboard.writeText(s.value).then(function(){m.textContent='Respostas copiadas.'},function(){m.textContent='Não foi possível copiar. Selecione o texto acima e copie manualmente.'})}catch(x){m.textContent='Não foi possível copiar. Selecione o texto acima e copie manualmente.'}
});
function pre(p){
 [].forEach.call(form.querySelectorAll('input[name="func"]'),function(i){if(p.func.indexOf(i.value)>-1)i.checked=true});
 var t=form.querySelector('input[name="tipo"][value="'+p.tipo+'"]');if(t)t.checked=true;
 if(p.obs&&!form.elements.obs.value)form.elements.obs.value=p.obs;
}
function route(){
 var hh=location.hash,v=document.getElementById('bv'),m=document.getElementById('topo');
 if(hh==='#briefing'){if(window.devwebPrefill){pre(window.devwebPrefill);window.devwebPrefill=null}m.hidden=true;v.hidden=false;window.scrollTo(0,0);return}
 m.hidden=false;v.hidden=true;
 var el=null;try{el=hh?document.querySelector(hh):null}catch(x){}
 if(el)el.scrollIntoView();else window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);route();
})();

/* ==========================================================================
   8. Animações de Entrada (Scroll Reveal) e Barra de Progresso Superior
   ========================================================================== */
(function(){
document.documentElement.classList.add('js');
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
/* aparecer ao rolar */
var sel=['.head2','.svc','.pj-tabs','.stg','.sim .wrap > div','.res > div:first-child','.m','.faq details','.final .wrap > *'],els=[];
sel.forEach(function(q){[].forEach.call(document.querySelectorAll(q),function(e){if(els.indexOf(e)<0){els.push(e);e.classList.add('rv2');e.style.setProperty('--d',Math.min(5,[].indexOf.call(e.parentNode.children,e)))}})});
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in2');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
 els.forEach(function(e){io.observe(e)});
}else els.forEach(function(e){e.classList.add('in2')});
/* barra de progresso no topo */
var R=document.documentElement,tk=false;
function sp(){tk=false;var h=R.scrollHeight-window.innerHeight;R.style.setProperty('--sp',h>0?Math.min(1,window.scrollY/h).toFixed(4):0)}
window.addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(sp)}},{passive:true});sp();
})();
