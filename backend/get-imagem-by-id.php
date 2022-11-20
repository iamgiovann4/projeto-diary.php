<?php
    require ('database.php');

    try {
        $id = '';
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
        }

        $stmt = $conn->prepare("SELECT * FROM addphoto WHERE id = :id;");
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        $count = $stmt->rowCount();

        if ($count == 1) {
            $imagem = $stmt->fetch(PDO::FETCH_ASSOC);
            $result["success"]["message"] = "Imagem deletada com sucesso!";
            $result["data"] = $imagem;
        } else {
            $result["error"]["message"] = "ID: $id não encontrado!";
        }

        header('Content-Type: Text/json');
        echo json_encode($result);

    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>