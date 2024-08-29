<?php
// register.php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);

if (isset($input['username']) && isset($input['email']) && isset($input['password'])) {
    // Conectar ao banco de dados (exemplo usando MySQL)
    $mysqli = new mysqli('localhost', 'usuario', 'senha', 'banco_de_dados');

    if ($mysqli->connect_error) {
        echo json_encode(['message' => 'Erro de conexão com o banco de dados.']);
        exit;
    }

    $username = $mysqli->real_escape_string($input['username']);
    $email = $mysqli->real_escape_string($input['email']);
    $password = password_hash($input['password'], PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($mysqli->query($sql) === TRUE) {
        echo json_encode(['message' => 'Usuário cadastrado com sucesso.']);
    } else {
        echo json_encode(['message' => 'Erro ao cadastrar o usuário: ' . $mysqli->error]);
    }

    $mysqli->close();
} else {
    echo json_encode(['message' => 'Dados incompletos.']);
}
?>
