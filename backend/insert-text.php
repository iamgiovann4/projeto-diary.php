<?php
    require ('database.php'); 
    //Require() : a função require() importa arquivos, porém, caso o mesmo não seja encontrado, será levantado uma exceção e a execução é finalizada. Essa é uma maneira de interrompermos a execução dos scripts caso alguma anomalia ocorra.

    $titulo = $_POST["titulo"]; //name do input
    $texto = $_POST["texto"];
    $dia = $_POST["dia"];

    try {
        $stmt = $conn->prepare("INSERT INTO addtext (titulo, texto, dia)
        VALUES (:titulo, :texto, :dia)");
        $stmt->bindParam(':titulo', $titulo);
        $stmt->bindParam(':texto', $texto);
        $stmt->bindParam(':dia', $dia);

        $stmt->execute();
        // echo "Cadastro com sucesso!";
        $id = $conn->lastInsertId();

        $result["success"]["message"] = "Cadastrado com sucesso!"; //criamos o array para devolver o resultado do insert numa mensagem de sucesso.

        $result["data"]["id"] = $id; //criamos o array para devolver o resultado do insert com os dados inseridos.
        $result["data"]["titulo"] = $titulo;
        $result["data"]["texto"] = $texto;
        $result["data"]["dia"] = $dia;

        header('Content-Type: Text/json'); //para ser enviado no formato json.
        echo json_encode($result); //exibir o resultado.

    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>