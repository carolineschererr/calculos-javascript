$(document).ready(function () {
    // Calcula o valor da parcela quando o valor financiado ou quantidade de parcelas mudar
    $("#valorFinanciado, #quantidadeParcelas").on("change", function () {
        var valorFinanciado = parseFloat($("#valorFinanciado").val());
        var quantidadeParcelas = parseInt($("#quantidadeParcelas").val());
        var taxaFinanciamento = 0.011; // 1,1%
        var valorParcela = (valorFinanciado * Math.pow(1 - taxaFinanciamento, quantidadeParcelas)) / quantidadeParcelas;
        $("#valorParcela").text(valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    });
    // Impede que o número do contrato seja inserido com espaços em branco ou caracteres inválidos
    // 
    $("#numeroContrato").on("input", function () {
        $(this).val($(this).val().replace(/\s+/g, "").replace(/[^0-9]/g, "").padStart(7, "0"));
    });

    $("#valorParcela").text("R$ 0,00");
});