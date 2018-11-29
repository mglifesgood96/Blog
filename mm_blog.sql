-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 29 Lis 2018, 19:51
-- Wersja serwera: 10.1.34-MariaDB
-- Wersja PHP: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `mm_blog`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modification date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `id_tag` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `description` varchar(5000) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `page_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modification_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `published_from` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `posts`
--

INSERT INTO `posts` (`id`, `id_tag`, `id_category`, `title`, `description`, `status`, `page_name`, `creation_date`, `modification_date`, `published_from`) VALUES
(2, 1, 1, 'Pzykładowy tytuł', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ultrices odio a malesuada. Suspendisse a augue a ante commodo bibendum eget blandit erat. Proin faucibus porta pretium. Fusce laoreet lacinia condimentum. Nulla suscipit ligula id dui commodo, eu efficitur urna faucibus. Nulla sit amet justo sed felis pharetra malesuada. Aliquam id quam sem. Nulla ac tincidunt urna. Sed et elit a elit ultrices condimentum vitae in ex. Phasellus consequat, ligula nec tincidunt fermentum, nulla nibh suscipit metus, eget commodo magna lorem ut metus. Vestibulum augue odio, ornare convallis tristique id, egestas id eros. Fusce at leo enim. Donec interdum efficitur turpis vitae hendrerit.', 0, 'przykladowy_tytul', '2018-11-26 10:58:28', '2018-11-26 11:00:10', '2018-11-26 10:58:28');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modification_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `tags`
--

INSERT INTO `tags` (`id`, `name`, `creation_date`, `modification_date`) VALUES
(2, 'tag1', '2018-11-28 22:56:48', '2018-11-28 22:56:48');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
