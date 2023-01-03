
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


//Populando a base

produtos.push(new Produto( 1 , 'Dipirona Monohidratada', 24.99));
produtos.push(new Produto( 2 , 'Dorflex', 12.54));
clientes.push(new Cliente( 1 , 'Cliente 1'));
clientes.push(new Cliente( 2 , 'Cliente 2'));
vendedores.push(new Vendedor( 1 , 'Vendedor 1'));
vendedores.push(new Vendedor( 2 , 'Vendedor 2'));




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

let = new Promocao(2, 2);
























