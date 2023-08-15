class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        const cardapio = {
            "cafe": 3.00,
            "chantily": 1.50,
            "suco": 6.20,
            "sanduiche": 6.50,
            "queijo": 2.00,
            "salgado": 7.25,
            "combo1": 9.50,
            "combo2": 7.50
        }

        const metodosPagamento = ["dinheiro", "debito", "credito"]

        // 1º passo: para cada item e quantidade, calcular o valor da compra
        let totalCompra = 0

        if (metodosPagamento.includes(metodoDePagamento)) {
            if (itens.length > 0) {
                let pedido = {}

                for(let i = 0; i < itens.length; i++){
                    let itemAtual = itens[i].split(",")

                    if (itemAtual[1] < 1) {
                        return "Quantidade inválida!"
                    } else if (!(itemAtual[0] in cardapio)) {
                        return "Item inválido!"
                    } else {
                        pedido[itemAtual[0]] = itemAtual[1] 
                    }
                }

                if (("chantily" in pedido && !("cafe" in pedido)) || ("queijo" in pedido && !("sanduiche" in pedido))){
                    return "Item extra não pode ser pedido sem o principal"
                } else {
                    for (const key in pedido) {
                        totalCompra += cardapio[key] * pedido[key]
                    }

                    if (metodoDePagamento === "dinheiro") {
                        totalCompra -= (totalCompra * 5)/100
                        return `R$ ${totalCompra.toFixed(2).toString().replace('.', ',')}`
                    } else if (metodoDePagamento === "credito") {
                        totalCompra += (totalCompra * 3)/100
                        return `R$ ${totalCompra.toFixed(2).toString().replace('.', ',')}`
                    } else {
                        return `R$ ${totalCompra.toFixed(2).toString().replace('.', ',')}`
                    }
                }


            } else {
                return "Não há itens no carrinho de compra!"
            }
        } else {
            return "Forma de pagamento inválida!"
        }
    }

}

export { CaixaDaLanchonete };
