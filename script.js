$(document).ready(function() {
    // Garante que o input sempre seja visível
    $('#show_hide_password input').attr('type', 'text'); 
    
    // Previne envio do formulário ao apertar Enter
    $('#show_hide_password').closest('form').on('submit', function(event) {
        event.preventDefault(); 
    });

    // Escuta o input do usuário
    $('#show_hide_password input').on('input', function() {
        let valor = $(this).val().toLowerCase().trim(); 
        let resultado = "";
        let link = "";
        let cor = "gold"; // padrão dourado

        // Senhas que exibem "Classe Secreta"
        if (valor === "mimic") {
            resultado = "Classe Secreta";
            link = '<a href="https://www.notion.so/Ideias-254ad92a12318041bd1dc9aeddaf4c50" target="_blank">Mímico</a>';
            cor = "gold";
        } else if (valor === "onionknight") {
            resultado = "Classe Secreta";
            link = '<a href="https://www.notion.so/Ideias-254ad92a12318041bd1dc9aeddaf4c50" target="_blank">Onion Knight</a>';
            cor = "gold";
        } 
        // Senhas que exibem "Ideias descartadas" em vermelho
        else if (["geomante","orador","caçador","apostador","escudeiro","piratadoceu"].includes(valor)) {
            resultado = "Ideias Descartadas";
            link = '<a href="https://www.notion.so/Ideias-254ad92a12318041bd1dc9aeddaf4c50" target="_blank">Página esquecida</a>';
            cor = "red";
        } 
        // Caso nenhuma senha seja digitada
        else {
            resultado = "";
            link = "";
            cor = "gold";
        }

        // Atualiza o texto e aplica centralização
        $("#resultado").text(resultado).css({
            'display': 'block',
            'text-align': 'center',
            'width': $('#show_hide_password input').outerWidth() + 'px',
            'margin': '0 auto',
            'color': cor
        });

        $("#linkArea").html(link).css({
            'text-align': 'center',
            'width': $('#show_hide_password input').outerWidth() + 'px',
            'margin': '0 auto'
        });
    });
});
