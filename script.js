
// PRODUTOS DA PADARIA

const produtos = [

    {
        id: 1,
        nome: "Pão Francês",
        categoria: "pao",
        emoji: "🥖",

        preco: 0.80,

        quantidade: 35,

        ingredientes:
            "Farinha de trigo, água, fermento biológico, sal e açúcar.",

        nutricao: {
            calorias: "135 kcal",
            carboidratos: "28 g",
            proteinas: "4 g",
            gorduras: "1 g"
        }
    },


    {
        id: 2,
        nome: "Pão de Leite",
        categoria: "pao",
        emoji: "🍞",

        preco: 2.50,

        quantidade: 18,

        ingredientes:
            "Farinha de trigo, leite, manteiga, ovos, açúcar e fermento.",

        nutricao: {
            calorias: "180 kcal",
            carboidratos: "30 g",
            proteinas: "6 g",
            gorduras: "5 g"
        }
    },


    {
        id: 3,
        nome: "Bolo de Chocolate",
        categoria: "bolo",
        emoji: "🍫",

        preco: 35.00,

        quantidade: 5,

        ingredientes:
            "Farinha de trigo, chocolate, ovos, leite, açúcar e manteiga.",

        nutricao: {
            calorias: "320 kcal",
            carboidratos: "42 g",
            proteinas: "5 g",
            gorduras: "15 g"
        }
    },


    {
        id: 4,
        nome: "Bolo de Cenoura",
        categoria: "bolo",
        emoji: "🥕",

        preco: 30.00,

        quantidade: 0,

        ingredientes:
            "Cenoura, farinha de trigo, ovos, açúcar, óleo e chocolate.",

        nutricao: {
            calorias: "290 kcal",
            carboidratos: "40 g",
            proteinas: "4 g",
            gorduras: "12 g"
        }
    },


    {
        id: 5,
        nome: "Coxinha de Frango",
        categoria: "salgado",
        emoji: "🥟",

        preco: 7.00,

        quantidade: 12,

        ingredientes:
            "Farinha de trigo, frango, requeijão, cebola, alho e temperos.",

        nutricao: {
            calorias: "250 kcal",
            carboidratos: "25 g",
            proteinas: "10 g",
            gorduras: "12 g"
        }
    },


    {
        id: 6,
        nome: "Pastel de Carne",
        categoria: "salgado",
        emoji: "🥠",

        preco: 6.50,

        quantidade: 0,

        ingredientes:
            "Massa de trigo, carne moída, cebola, tomate e temperos.",

        nutricao: {
            calorias: "280 kcal",
            carboidratos: "27 g",
            proteinas: "11 g",
            gorduras: "14 g"
        }
    },


    {
        id: 7,
        nome: "Brigadeiro",
        categoria: "doce",
        emoji: "🍫",

        preco: 3.50,

        quantidade: 20,

        ingredientes:
            "Leite condensado, chocolate em pó, manteiga e granulado.",

        nutricao: {
            calorias: "110 kcal",
            carboidratos: "18 g",
            proteinas: "2 g",
            gorduras: "4 g"
        }
    },


    {
        id: 8,
        nome: "Sonho de Creme",
        categoria: "doce",
        emoji: "🍩",

        preco: 6.00,

        quantidade: 8,

        ingredientes:
            "Farinha de trigo, leite, ovos, açúcar, fermento e creme.",

        nutricao: {
            calorias: "270 kcal",
            carboidratos: "35 g",
            proteinas: "5 g",
            gorduras: "12 g"
        }
    }

];

// CARRINHO

let carrinho = [];

// MOSTRAR PRODUTOS

function mostrarProdutos(lista) {

    const container =
        document.getElementById("listaProdutos");

    container.innerHTML = "";


    lista.forEach(produto => {

        const disponivel = produto.quantidade > 0;


        const card = document.createElement("article");

        card.className = "produto";


        card.innerHTML = `

            <div class="imagem-produto">
                ${produto.emoji}
            </div>


            <div class="informacoes">

                <h3>
                    ${produto.nome}
                </h3>


                <div class="
                    estoque
                    ${disponivel ? "disponivel" : "esgotado"}
                ">

                    ${
                        disponivel
                        ? `🟢 Disponível: ${produto.quantidade} unidades`
                        : "🔴 Esgotado"
                    }

                </div>


                <div class="preco">
                    R$ ${produto.preco.toFixed(2)}
                </div>


                <div class="ingredientes">

                    <h4>
                        🥣 Ingredientes
                    </h4>

                    <p>
                        ${produto.ingredientes}
                    </p>

                </div>


                <div class="nutricao">

                    <h4>
                        🥗 Informações nutricionais
                    </h4>

                    <p>
                        Calorias: ${produto.nutricao.calorias}
                    </p>

                    <p>
                        Carboidratos:
                        ${produto.nutricao.carboidratos}
                    </p>

                    <p>
                        Proteínas:
                        ${produto.nutricao.proteinas}
                    </p>

                    <p>
                        Gorduras:
                        ${produto.nutricao.gorduras}
                    </p>

                </div>


                <button
                    class="btn-comprar"
                    onclick="adicionarCarrinho(${produto.id})"
                    ${!disponivel ? "disabled" : ""}
                >

                    ${
                        disponivel
                        ? "Adicionar à cesta"
                        : "Produto esgotado"
                    }

                </button>

            </div>
        `;


        container.appendChild(card);

    });

}


// ==========================================
// FILTRAR CATEGORIAS
// ==========================================

function filtrarProdutos(categoria) {

    if (categoria === "todos") {

        mostrarProdutos(produtos);

        return;
    }


    const filtrados =
        produtos.filter(
            produto => produto.categoria === categoria
        );


    mostrarProdutos(filtrados);
}


// ==========================================
// BUSCAR PRODUTO
// ==========================================

function buscarProduto() {

    const texto =
        document
        .getElementById("campoBusca")
        .value
        .toLowerCase();


    const resultado =
        produtos.filter(produto =>
            produto.nome
            .toLowerCase()
            .includes(texto)
        );


    mostrarProdutos(resultado);
}


// ==========================================
// ADICIONAR À CESTA
// ==========================================

function adicionarCarrinho(id) {

    const produto =
        produtos.find(produto => produto.id === id);


    if (!produto || produto.quantidade <= 0) {

        return;

    }


    carrinho.push(produto);


    produto.quantidade--;


    document.getElementById(
        "quantidadeCarrinho"
    ).textContent = carrinho.length;


    mostrarProdutos(produtos);

}


// ==========================================
// INICIALIZAÇÃO
// ==========================================

mostrarProdutos(produtos);
