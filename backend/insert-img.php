<?php
    require ('database.php'); 
    //Require() : a função require() importa arquivos, porém, caso o mesmo não seja encontrado, será levantado uma exceção e a execução é finalizada. Essa é uma maneira de interrompermos a execução dos scripts caso alguma anomalia ocorra.

    $cover = $_POST["cover"]; //name do input
    $titulo = $_POST["titulo"];
    $legenda = $_POST["legenda"];
    $autor = $_POST["autor"];
    $dia = $_POST["dia"];

    try {
        $stmt = $conn->prepare("INSERT INTO addphoto (cover, titulo, legenda, autor, dia)
        VALUES (:cover, :titulo, :legenda, :autor, :dia)");
        $stmt->bindParam(':cover', $cover);
        $stmt->bindParam(':titulo', $titulo);
        $stmt->bindParam(':legenda', $legenda);
        $stmt->bindParam(':autor', $autor);
        $stmt->bindParam(':dia', $dia);

        $stmt->execute();
        // echo "Cadastro com sucesso!";
        $id = $conn->lastInsertId();

        $result["success"]["message"] = "Cadastrado com sucesso!"; //criamos o array para devolver o resultado do insert numa mensagem de sucesso.

        $result["data"]["id"] = $id; //criamos o array para devolver o resultado do insert com os dados inseridos.
        $result["data"]["cover"] = $cover;
        $result["data"]["titulo"] = $titulo;
        $result["data"]["legenda"] = $legenda;
        $result["data"]["autor"] = $autor;
        $result["data"]["dia"] = $dia;

        header('Content-Type: Text/json'); //para ser enviado no formato json.
        echo json_encode($result); //exibir o resultado.

    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>