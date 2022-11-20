<?php
    require ('database.php'); 

    $id = $_POST["id"];
    $cover = $_POST["cover"];
    $titulo = $_POST["titulo"];
    $legenda = $_POST["legenda"];
    $autor = $_POST["autor"];
    $dia = $_POST["dia"];

    try{
        $stmt = $conn->prepare("UPDATE addphoto SET cover = :cover, titulo = :titulo, legenda = :legenda, autor = :autor, dia = :dia WHERE id = :id;");
        
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':cover', $cover);
        $stmt->bindParam(':titulo', $titulo);
        $stmt->bindParam(':legenda', $legenda);
        $stmt->bindParam(':autor', $autor);
        $stmt->bindParam(':dia', $dia);

        $stmt->execute();

        $count = $stmt->rowCount();

        if ($count == 1) {
            $result["success"]["message"] = "Editado com sucesso!";

            $result["data"]["id"] = $id;
            $result["data"]["cover"] = $cover;
            $result["data"]["titulo"] = $titulo;
            $result["data"]["legenda"] = $legenda;
            $result["data"]["autor"] = $autor;
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