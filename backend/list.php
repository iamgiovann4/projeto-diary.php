<?php
    require ('database.php'); 
    //Require() : a função require() importa arquivos, porém, caso o mesmo não seja encontrado, será levantado uma exceção e a execução é finalizada. Essa é uma maneira de interrompermos a execução dos scripts caso alguma anomalia ocorra.

    try {
        $stmt = $conn->prepare("SELECT id, cover, titulo, legenda, autor FROM addphoto;");
        $stmt->execute();

        $producoes = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $result["success"]["message"] = "Imagens listadas com sucesso!";

        $result["data"] = $producoes;

        header('Content-Type: Text/json'); //para ser enviado no formato json.
        echo json_encode($result); //exibir o resultado.

    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>