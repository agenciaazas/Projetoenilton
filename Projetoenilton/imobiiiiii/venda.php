<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Receber dados
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
    $features = isset($_POST['features']) ? implode(", ", $_POST['features']) : "Nenhuma";

    // Manipulação de arquivos
    if (!empty($_FILES['photos']['name'][0])) {
        $pasta_destino = 'uploads/';
        if (!file_exists($pasta_destino)) {
            mkdir($pasta_destino, 0777, true);
        }

        foreach ($_FILES['photos']['tmp_name'] as $key => $tmp_name) {
            $nome_arquivo = basename($_FILES['photos']['name'][$key]);
            move_uploaded_file($tmp_name, $pasta_destino . $nome_arquivo);
        }
    }

    echo "<h2>Imóvel cadastrado com sucesso!</h2>";
    echo "<p>Título: $titulo</p>";
    echo "<p>Tipo: $tipo</p>";
    echo "<p>Preço: R$ $preco</p>";
    echo "<p>Quartos: $quartos</p>";
    echo "<p>Banheiros: $banheiros</p>";
    echo "<p>Área: $area m²</p>";
    echo "<p>Endereço: $endereco, $cidade - $estado, $cep</p>";
    echo "<p>Descrição: $descricao</p>";
    echo "<p>Características: $features</p>";
    echo "<p>Proprietário: $nome, Email: $email, Telefone: $telefone, WhatsApp: $whatsapp</p>";
} else {
    echo "Acesso inválido.";
}
?>
