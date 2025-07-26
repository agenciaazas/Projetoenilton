<?php
// Inclui o arquivo de configuração
include 'config.php';

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obtém os dados do formulário
$localizacao = $_POST['localizacao'] ?? '';
$valor_min = $_POST['valor-min'] ?? '';
$valor_max = $_POST['valor-max'] ?? '';
$tipo = $_POST['tipo'] ?? '';
$quartos = $_POST['quartos'] ?? '';
$suites = $_POST['suites'] ?? '';
$banheiros = $_POST['banheiros'] ?? '';
$vagas = $_POST['vagas'] ?? '';
$area_min = $_POST['area-min'] ?? '';
$area_max = $_POST['area-max'] ?? '';
$caracteristicas = $_POST['caracteristicas'] ?? '';

// Monta a consulta SQL
$sql = "SELECT * FROM properties WHERE tipo_transacao = 'alugar'";

if (!empty($localizacao)) {
    $sql .= " AND localizacao LIKE '%$localizacao%'";
}

if (!empty($valor_min)) {
    $sql .= " AND valor >= $valor_min";
}

if (!empty($valor_max)) {
    $sql .= " AND valor <= $valor_max";
}

if (!empty($tipo)) {
    $sql .= " AND tipo = '$tipo'";
}

if (!empty($quartos)) {
    $sql .= " AND quartos >= $quartos";
}

if (!empty($suites)) {
    $sql .= " AND suites >= $suites";
}

if (!empty($banheiros)) {
    $sql .= " AND banheiros >= $banheiros";
}

if (!empty($vagas)) {
    $sql .= " AND vagas >= $vagas";
}

if (!empty($area_min)) {
    $sql .= " AND area >= $area_min";
}

if (!empty($area_max)) {
    $sql .= " AND area <= $area_max";
}

if (!empty($caracteristicas)) {
    $sql .= " AND caracteristicas LIKE '%$caracteristicas%'";
}

// Executa a consulta
$result = $conn->query($sql);

// Verifica se algum resultado foi retornado
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Localização: " . $row["localizacao"]. " - Valor: " . $row["valor"]. " - Tipo: " . $row["tipo"]. "<br>";
    }
} else {
    echo "0 resultados encontrados";
}

// Fecha a conexão
$conn->close();
?>
