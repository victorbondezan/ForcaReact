//import Dica from"./dicas"
import "../App"
import "./mecanismoForcaEModal"
import palavras from "./palavraSecreta"

export default function carregaImagemForca(){

    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./public/imgForca/forca01.png')";
            var dica1=document.getElementById("dica") //tambem requer que ele pedido por id chegue ao arquivo app 
            dica1.innerHTML = palavraSecretaDica1            
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./public/imgForca/forca02.png')";
            var dica2=document.getElementById("dica")
            dica2.innerHTML = palavraSecretaDica2
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./public/imgForca/forca03.png')";
            var dica3=document.getElementById("dica")
            dica3.innerHTML = palavraSecretaDica3
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./public/imgForca/forca04.png')";
            var dica4=document.getElementById("dica")
            dica4.innerHTML = palavraSecretaDica4
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./public/imgForca/forca05.png')";
            var dica5=document.getElementById("dica")
            dica5.innerHTML = palavraSecretaDica5
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./public/imgForca/forca06.png')";
            var dica6=document.getElementById("dica")
            dica6.innerHTML = palavraSecretaDica6    
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./public/imgForca/forca.png')";
            var dica0=document.getElementById("dica")
            dica0.innerHTML = palavraSecretaDica0   
            break;
    } 
}; 

export  let palavraSecretaCategoria = palavras[indexPalavra].categoria; 
