function simularCompra() {
    // Preços correspondentes aos exibidos no HTML
    const precoBequer = 45.00;
    const precoSal = 28.50;
    const precoOculos = 35.00;

    // Coleta de dados via prompt e conversão para número
    let qtdBequerInput = prompt("Quantos Béquers de Vidro Borossilicato (1000ml) você deseja? (Preço unitário: R$ 45,00)");
    if (qtdBequerInput === null) return; // Cancela se o usuário apertar "Cancelar"

    let qtdSalInput = prompt("Quantas unidades de Cloreto de Sódio P.A. (500g) você deseja? (Preço unitário: R$ 28,50)");
    if (qtdSalInput === null) return;

    let qtdOculosInput = prompt("Quantos Óculos de Proteção Laboratorial você deseja? (Preço unitário: R$ 35,00)");
    if (qtdOculosInput === null) return;

    // Conversão segura para inteiros (garantindo 0 caso venha vazio ou inválido)
    let qtdBequer = Number(qtdBequerInput) || 0;
    let qtdSal = Number(qtdSalInput) || 0;
    let qtdOculos = Number(qtdOculosInput) || 0;

    // Validação se nenhum produto foi selecionado
    if (qtdBequer === 0 && qtdSal === 0 && qtdOculos === 0) {
        alert("Nenhum produto foi selecionado. A simulação foi encerrada.");
        return;
    }

    // Cálculo dos valores parciais e totais
    let totalBequer = qtdBequer * precoBequer;
    let totalSal = qtdSal * precoSal;
    let totalOculos = qtdOculos * precoOculos;
    let valorTotal = totalBequer + totalSal + totalOculos;

    // Formatação da mensagem de resumo utilizando quebras de linha (\n)
    let resumo = "=== RESUMO DA COMPRA ===\n\n";
    resumo += `• Béquer de Vidro: ${qtdBequer} un. — R$ ${totalBequer.toFixed(2)}\n`;
    resumo += `• Cloreto de Sódio P.A.: ${qtdSal} un. — R$ ${totalSal.toFixed(2)}\n`;
    resumo += `• Óculos de Proteção: ${qtdOculos} un. — R$ ${totalOculos.toFixed(2)}\n\n`;
    resumo += `VALOR TOTAL DA COMPRA: R$ ${valorTotal.toFixed(2)}`;

    // Exibição do resultado final
    alert(resumo);
}