<?php

// Database connection
$servername = "localhost"; // Change as needed
$username = "username"; // Change as needed
$password = "password"; // Change as needed
$dbname = "database_name"; // Change as needed

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$localizacao = $_POST['localizacao'];
$valor_min = $_POST['valor-min'];
$valor_max = $_POST['valor-max'];
$tipo = $_POST['tipo'];
$condominio = $_POST['condominio'];
$quartos = $_POST['quartos'];
$suites = $_POST['suites'];
$banheiros = $_POST['banheiros'];
$vagas = $_POST['vagas'];
$area_min = $_POST['area-min'];
$area_max = $_POST['area-max'];
$caracteristicas = $_POST['caracteristicas'];

// Build the SQL query
$sql = "SELECT * FROM properties WHERE 1=1";

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

if (!empty($condominio)) {
    $sql .= " AND condominio = '$condominio'";
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

// Execute the query
$result = $conn->query($sql);

// Check if any results were returned
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Localização: " . $row["localizacao"]. " - Valor: " . $row["valor"]. " - Tipo: " . $row["tipo"]. "<br>";
    }
} else {
    echo "0 resultados encontrados";
}

// Close the connection
$conn->close();

?>
