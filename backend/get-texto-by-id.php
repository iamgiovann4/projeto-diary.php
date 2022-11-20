<?php
    require ('database.php');

    try {
        $id = '';
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
        }

        $stmt = $conn->prepare("SELECT * FROM addtext WHERE id = :id;");
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        $count = $stmt->rowCount();

        if ($count == 1) {
            $texto = $stmt->fetch(PDO::FETCH_ASSOC);
            $result["success"]["message"] = "Texto deletado com sucesso!";
            $result["data"] = $texto;
        } else {
            $result["error"]["message"] = "ID: $id não encontrado!";
        }

        header('Content-Type: Text/json');
        echo json_encode($result);

    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>