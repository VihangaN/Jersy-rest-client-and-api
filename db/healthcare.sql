-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2020 at 05:21 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthcare`
--

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `age` int(3) NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `nic` varchar(20) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `type` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`id`, `name`, `age`, `gender`, `nic`, `Address`, `email`, `type`) VALUES
(1, 'Caleb Flores', 30, 'male', '7654678901V', '5595 Rolling Green Rd', 'caleb.flores@example.com', 1),
(2, 'Marshall Silva', 28, 'male', '8958378651V', '4258 Washington Ave', 'marshall.silva@example.com', 0),
(3, 'Esther West', 42, 'female', '7458278867V', '1176 College St', 'esther.west@example.com', 1),
(4, 'John', 31, 'male', '855365867V', '6455 E Pecan St', 'ivan.cooper@example.com', 1),
(5, 'Riley James', 23, 'female', '975365867V', '4562 Oak Lawn Ave', 'riley.james@example.com', 0),
(8, 'Gavin Fletcher', 23, 'male', '985546861V', 'sample address', 'gavin.fletcher@example.com', 1),
(14, 'Vihanga nivarthana', 22, 'male', '9713xxxxxxxxxv', 'Blk 88 ,01-2718 Geylang Barhu 339696, Singapore', 'vihanganivarthana@gmail.com', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
