<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta dos dados
    $titulo = $_POST['propertyTitle'];
    $tipo = $_POST['sellPropertyType'];
    $preco = $_POST['sellPrice'];
    $quartos = $_POST['sellBedrooms'];
    $banheiros = $_POST['sellBathrooms'];
    $area = $_POST['sellArea'];
    $endereco = $_POST['sellAddress'];
    $cidade = $_POST['sellCity'];
    $estado = $_POST['sellState'];
    $cep = $_POST['sellZipCode'];
    $descricao = $_POST['sellDescription'];
    $nome = $_POST['ownerName'];
    $email = $_POST['ownerEmail'];
    $telefone = $_POST['ownerPhone'];
    $whatsapp = $_POST['ownerWhatsapp'];
    $features = isset($_POST['features']) ? $_POST['features'] : [];

    // Exemplo de tratamento de fotos
    $fotos = $_FILES['photos'];

    // Aqui você pode salvar em banco de dados ou enviar por email
    echo "Imóvel cadastrado com sucesso!";
}
?>
