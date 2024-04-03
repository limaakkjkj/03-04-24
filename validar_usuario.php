<?php

require_once('./conexao.php');

$txtLogin = $_POST['txtLogin'];
$txtSenha = $_POST['txtSenha'];

// Check if the login and password were provided
if (!empty($txtLogin) && !empty($txtSenha)) {
    echo "<br />";
    echo "Login: $txtLogin, Senha: $txtSenha";

    // Prepare a SQL statement to query the database for a user with the given login and password
    $stmt = $pdo->prepare('SELECT * FROM usuarios WHERE login = :login AND senha = :senha');
    $stmt->bindValue(':login', $txtLogin);
    $stmt->bindValue(':senha', $txtSenha);
    $stmt->execute();

    // If a user was found, log them in and redirect them to a success page
    if ($stmt->rowCount() > 0) {
        session_start();
        $_SESSION['login'] = $txtLogin;
        header('Location: success.php');
        exit;
    } else {
        // If no user was found, show an error message
        echo 'Login ou senha inválidos.';
    }
} else {
    // If the login or password were not provided, show an error message
    echo 'Por favor, preencha todos os campos.';
}
