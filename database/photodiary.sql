-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Dez-2022 às 03:47
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `photodiary`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `addphoto`
--

CREATE TABLE `addphoto` (
  `id` int(11) NOT NULL,
  `cover` varchar(500) NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `legenda` varchar(50) NOT NULL,
  `autor` varchar(25) NOT NULL,
  `dia` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `addphoto`
--

INSERT INTO `addphoto` (`id`, `cover`, `titulo`, `legenda`, `autor`, `dia`) VALUES
(4, 'https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg', 'Jean', 'Hello there, espero que goste da foto', 'xoxo', '2020-10-22'),
(6, 'https://www.petz.com.br/blog/wp-content/uploads/2022/10/gato-pode-comer-hortela-3.jpg', 'Giovanna', 'Hello there, espero que goste da foto', 'xoxo', '2020-10-22'),
(7, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBp3qzg4eCXMKNHE-arSbklI-yDC4kRzqp3Q&usqp=CAU', 'Coração', 'Hello there, espero que goste da foto', 'Vitor', '2004-01-10'),
(8, 'https://s3.static.brasilescola.uol.com.br/be/2020/12/girassol.jpg', 'Flores', 'Hello there, espero que goste da foto', 'Giovanna', '2022-11-20');

-- --------------------------------------------------------

--
-- Estrutura da tabela `addtext`
--

CREATE TABLE `addtext` (
  `id` int(11) NOT NULL,
  `titulo` varchar(40) NOT NULL,
  `texto` varchar(1000) NOT NULL,
  `dia` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `addtext`
--

INSERT INTO `addtext` (`id`, `titulo`, `texto`, `dia`) VALUES
(8, 'Dia triste', ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repellendus explicabo consequuntur tempora cumque aspernatur quibusdam voluptates, officia voluptas consequatur in veritatis labore unde eveniet ad. Ducimus quo odit earum!', '2013-02-01'),
(10, 'Tédio', ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repellendus explicabo consequuntur tempora cumque aspernatur quibusdam voluptates, officia voluptas consequatur in veritatis labore unde eveniet ad. Ducimus quo odit earum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repellendus explicabo consequuntur tempora cumque aspernatur quibusdam voluptates, officia voluptas consequatur in veritatis labore unde eveniet ad. Ducimus quo odit earum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repellendus explicabo consequuntur tempora cumque aspernatur quibusdam voluptates, officia voluptas consequatur in veritatis labore unde eveniet ad. Ducimus quo odit earum!', '0000-00-00'),
(11, 'Um dia mais que feliz', ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repellendus explicabo consequuntur tempora cumque aspernatur quibusdam voluptates, officia voluptas consequatur in veritatis labore unde eveniet ad. Ducimus quo odit earum!', '2022-11-20'),
(15, 'Alegria', 'Loerkjgwer asdkkja KAGSDKg dgJHDG KJGAsdjkg kgDAKJG JGDJHA', '2021-03-12');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `addphoto`
--
ALTER TABLE `addphoto`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `addtext`
--
ALTER TABLE `addtext`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `addphoto`
--
ALTER TABLE `addphoto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `addtext`
--
ALTER TABLE `addtext`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
