
/* 

1) Desenvolver uma aplicação que contenha inicialmente os seguinte cadastros organizados em MENU:

    * Produto (Código, Descrição, Preço)
    * Cliente (Código, Nome)
    * Vendedor (Código, Nome)

*/

// Databases FAKE rsrs



const produtos = [];
const clientes = [];
const vendedores = [];


function Produto(codigo, descricao, preco){
    this.codigo = codigo;
    this.descricao = descricao;
    this.preco = preco
}

function Cliente(codigo, descricao){
    this.codigo = codigo;
    this.descricao = descricao;
    
}

function Vendedor(codigo, descricao){
    this.codigo = codigo;
    this.descricao = descricao;
   
}




const triggerProduto = document.querySelector('#enviarProdutos');

const cadastrarProduto = () => {

    const codProduto = document.querySelector('#codigoProduto');
    const descProduto = document.querySelector('#descricaoProduto');
    const precoProduto = document.querySelector('#precoProduto');

    produtos.push(new Produto( codProduto.value , descProduto.value, precoProduto.value));
}

triggerProduto.addEventListener('click', cadastrarProduto)





/*
2) Desenvolver rotina de cadastro de oferta “LEVE X PAGUE Y”, onde poderá ser definido qual o produto entrará na oferta e qual a quantidade a levar e a quantidade a pagar.  

*/


function Promocao(leveX, pagueY){
    if(leveX >= pagueY){
        this.leveX = leveX;
        this.pagueY = pagueY;

    } else{
        console.log(`O valor a pagar ${leveX} é maior que o valor a pagar ${pagueY}!!!`);
    }
}


//Populando a base

let = new Promocao(2, 2); // retirar





















