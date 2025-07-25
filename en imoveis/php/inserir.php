<?php
// Conexão com banco
$pdo = new PDO("mysql:host=localhost;dbname=imobiliaria", "root", "");

// Captura os dados do formulário
$localizacao = $_POST['localizacao'] ?? '';
$valor_min = $_POST['valor-min'] ?? null;
$valor_max = $_POST['valor-max'] ?? null;
$tipo = $_POST['tipo'] ?? '';
$condominio = $_POST['condominio'] ?? '';
$quartos = $_POST['quartos'] ?? null;
$suites = $_POST['suites'] ?? null;
$banheiros = $_POST['banheiros'] ?? null;
$vagas = $_POST['vagas'] ?? null;
$area_min = $_POST['area-min'] ?? null;
$area_max = $_POST['area-max'] ?? null;
$caracteristicas = $_POST['caracteristicas'] ?? '';
$churrasqueira = isset($_POST['churrasqueira']) ? 1 : 0;
$aceita_pet = isset($_POST['aceita-pet']) ? 1 : 0;

// Prepara e executa o INSERT
$stmt = $pdo->prepare("INSERT INTO imoveis (
    localizacao, valor_min, valor_max, tipo, condominio,
    quartos, suites, banheiros, vagas, area_min, area_max,
    caracteristicas, churrasqueira, aceita_pet
) VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
)");

$stmt->execute([
    $localizacao, $valor_min, $valor_max, $tipo, $condominio,
    $quartos, $suites, $banheiros, $vagas, $area_min, $area_max,
    $caracteristicas, $churrasqueira, $aceita_pet
]);

echo "Imóvel inserido com sucesso!";
?>