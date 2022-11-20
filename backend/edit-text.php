<?php
    require ('database.php'); 

    $id = $_POST["id"];
    $titulo = $_POST["titulo"];
    $texto = $_POST["texto"];
    $dia = $_POST["dia"];

    try{
        $stmt = $conn->prepare("UPDATE addtext SET titulo = :titulo, texto = :texto, dia = :dia WHERE id = :id;");
        
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':titulo', $titulo);
        $stmt->bindParam(':texto', $texto);
        $stmt->bindParam(':dia', $dia);

        $stmt->execute();

        $count = $stmt->rowCount();

        if ($count == 1) {
            $result["success"]["message"] = "Editado com sucesso!";

            $result["data"]["id"] = $id;
            $result["data"]["titulo"] = $titulo;
            $result["data"]["texto"] = $texto;
            $result["data"]["dia"] = $dia;
        } else {
            $result["error"]["message"] = "ID: $id não encontrado!";
        }

        header('Content-Type: Text/json');
        echo json_encode($result);
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>