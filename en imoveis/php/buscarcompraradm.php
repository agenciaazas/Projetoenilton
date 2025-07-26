<?php
// Configurações do banco (ajuste conforme seu PostgreSQL)
$host = 'localhost';
$dbname = 'nome_do_banco';
$user = 'seu_usuario';
$pass = 'sua_senha';

try {
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro de conexão: " . $e->getMessage());
}

// Recebe os filtros do GET
$localizacao = $_GET['localizacao'] ?? '';
$valor_min = $_GET['valor-min'] ?? '';
$valor_max = $_GET['valor-max'] ?? '';
$tipo = $_GET['tipo'] ?? '';
$condominio = $_GET['condominio'] ?? '';
$quartos = $_GET['quartos'] ?? '';
$suites = $_GET['suites'] ?? '';
$banheiros = $_GET['banheiros'] ?? '';
$vagas = $_GET['vagas'] ?? '';
$area_min = $_GET['area-min'] ?? '';
$area_max = $_GET['area-max'] ?? '';
$caracteristicas = $_GET['caracteristicas'] ?? '';
$churrasqueira = isset($_GET['churrasqueira']) ? true : false;
$aceita_pet = isset($_GET['aceita-pet']) ? true : false;

// Monta a query dinâmica
$sql = "SELECT * FROM imoveis WHERE 1=1";
$params = [];

// Filtros condicionais
if ($localizacao !== '') {
    $sql .= " AND localizacao ILIKE :localizacao";
    $params[':localizacao'] = "%$localizacao%";
}

if ($valor_min !== '') {
    $sql .= " AND valor >= :valor_min";
    $params[':valor_min'] = $valor_min;
}

if ($valor_max !== '') {
    $sql .= " AND valor <= :valor_max";
    $params[':valor_max'] = $valor_max;
}

if ($tipo !== '') {
    $sql .= " AND tipo = :tipo";
    $params[':tipo'] = $tipo;
}

if ($condominio === 'sim') {
    $sql .= " AND condominio = true";
} elseif ($condominio === 'nao') {
    $sql .= " AND condominio = false";
}

if ($quartos !== '') {
    $sql .= " AND quartos >= :quartos";
    $params[':quartos'] = $quartos;
}

if ($suites !== '') {
    $sql .= " AND suites >= :suites";
    $params[':suites'] = $suites;
}

if ($banheiros !== '') {
    $sql .= " AND banheiros >= :banheiros";
    $params[':banheiros'] = $banheiros;
}

if ($vagas !== '') {
    $sql .= " AND vagas >= :vagas";
    $params[':vagas'] = $vagas;
}

if ($area_min !== '') {
    $sql .= " AND area >= :area_min";
    $params[':area_min'] = $area_min;
}

if ($area_max !== '') {
    $sql .= " AND area <= :area_max";
    $params[':area_max'] = $area_max;
}

if ($caracteristicas !== '') {
    $sql .= " AND caracteristicas ILIKE :caracteristicas";
    $params[':caracteristicas'] = "%$caracteristicas%";
}

if ($churrasqueira) {
    $sql .= " AND churrasqueira = true";
}

if ($aceita_pet) {
    $sql .= " AND aceita_pet = true";
}

$stmt = $pdo->prepare($sql);
$stmt->execute($params);

$imoveis = $stmt->fetchAll(PDO::FETCH_ASSOC);