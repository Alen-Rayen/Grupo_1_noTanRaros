-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: no_tan_raros
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Dragon Ball',NULL),(2,'Attack on Titan',NULL),(3,'Berserk',NULL),(4,'Death Note',NULL),(5,'Demon Slayer',NULL),(6,'Naruto',NULL),(7,'Hunter x Hunter',NULL),(8,'JoJo\'s Bizarre Adventure',NULL),(9,'My Hero Academia',NULL),(10,'One Piece',NULL),(11,'One Punch Man',NULL),(12,'Pokemon',NULL),(13,'Sailor Moon',NULL),(14,'Marvel',NULL),(15,'Full Metal Alchemist',NULL),(16,'Yu Gi Oh!',NULL),(17,'Sword Art Online',NULL),(18,'League of Legends',NULL),(19,'Los Simpsons',NULL),(20,'DC',NULL),(21,'Harry Potter',NULL),(22,'Star Wars',NULL),(23,'Evangelion',NULL),(24,'Bob Esponja',NULL),(25,'South Park',NULL),(26,'Tokyo Ghoul',NULL),(27,'Rick And Morty',NULL),(28,'Hora de Aventura',NULL),(29,'Minecraft',NULL);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Remeras'),(2,'Calzado'),(3,'Pantalones'),(4,'Abrigos'),(5,'Accesorios'),(6,'Escolar');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Rojo'),(2,'Azul'),(3,'Celeste'),(4,'Violeta'),(5,'Verde'),(6,'Amarillo'),(7,'Naranja'),(8,'Negro'),(9,'Blanco'),(10,'Rosa'),(11,'Marron'),(12,'Gris'),(13,'Salmon'),(14,'Beige');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_items` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(12) unsigned NOT NULL,
  `size_id` int(12) unsigned NOT NULL,
  `order_id` int(12) unsigned NOT NULL,
  `quantity` int(12) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_66` (`product_id`),
  KEY `FK_77` (`order_id`),
  KEY `FK_94` (`size_id`),
  CONSTRAINT `FK_64` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FK_75` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `FK_92` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(12) unsigned NOT NULL,
  `state` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_73` (`user_id`),
  CONSTRAINT `FK_71` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `color_id` int(12) unsigned NOT NULL,
  `brand_id` int(12) unsigned NOT NULL,
  `subcategory_id` int(12) unsigned NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` int(12) DEFAULT 0,
  `description` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_37` (`subcategory_id`),
  KEY `FK_59` (`brand_id`),
  KEY `FK_91` (`color_id`),
  CONSTRAINT `FK_35` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`id`),
  CONSTRAINT `FK_57` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `FK_89` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Remera Evangelion Eva-01 Blanca',9,23,2,4000.00,15,'Remera Evangelion color blanco 100% algodon original'),(2,'Remera Freezer Dragon Ball Rosa',10,1,2,2000.00,10,'morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum'),(14,'Gorro de Lana One Piece Negro Original',8,10,19,6000.00,5,'Gorro one piece excelente calidad.'),(25,'Figura Goku Kaio Ken DragonBall',1,1,26,10000.00,20,'Figura original importada linea Dragon Ball - Goku Kaio-Ken'),(26,'Zapatillas Custom Akatsuki Jutsu It',8,6,7,20000.00,15,'Zapatillas Nike Jordan custom Akatsuki Importadas Originales.'),(35,'Zapatillas Custom DragonBall Goku',9,1,7,18000.00,20,'Zapatillas Nike Jordan Originales - Diseño custom Dragon Ball Goku'),(37,'Capa Legión de Reconocimiento AOT',5,2,16,6000.00,5,'Capa original color verde Legión de Reconocimiento Attack On Titan.'),(38,'Medias \"Can I Borrow a Feeling\" Simpsons',14,19,6,800.00,5,'Medias de los simpsons/kirk van houten - \"Can I Borrow  a Feeling\" 100% algodón.'),(41,'Yu-Gi-Oh! Egyptian Gods DeckSet Original',2,16,40,7000.00,15,'Deck Set Original Importado Yu-Gi-Oh Dioses Egipcios Slifer & Obelisk');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_images`
--

DROP TABLE IF EXISTS `products_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_images` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(200) NOT NULL,
  `productId` int(12) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_52` (`productId`),
  CONSTRAINT `FK_50` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_images`
--

LOCK TABLES `products_images` WRITE;
/*!40000 ALTER TABLE `products_images` DISABLE KEYS */;
INSERT INTO `products_images` VALUES (1,'TS809ANGE_1copy_large.png',1),(2,'TS7XSMDBZ_1copy_large.png',2),(3,'1644506771371_img_.jpg',14),(19,'1644584728394_img_.jpg',25),(20,'1644584728396_img_.jpg',25),(21,'1644584728396_img_.jpg',25),(22,'1644584728398_img_.jpg',25),(24,'1644597975424_img_.jpg',26),(25,'1644597975426_img_.jpg',26),(26,'1644597975427_img_.jpg',26),(27,'1644597975429_img_.jpg',26),(36,'1644601591002_img_.jpeg',35),(37,'1644601591006_img_.jpeg',35),(38,'1644601591032_img_.jpeg',35),(41,'1644604990391_img_.jpg',37),(42,'1644604990392_img_.jpg',37),(43,'1644604990394_img_.jpg',37),(44,'1644604990396_img_.jpg',37),(45,'1644605426560_img_.jpg',38),(48,'1646583192379_img_.jpg',41),(49,'1646583192380_img_.jpg',41),(50,'1646583192381_img_.jpg',41),(51,'1646583192381_img_.jpg',41);
/*!40000 ALTER TABLE `products_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `size` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'Extra Small'),(2,'Small'),(3,'Medium'),(4,'Large'),(5,'Extra Large');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategories` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `category_id` int(12) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_44` (`category_id`),
  CONSTRAINT `FK_42` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Musculosas',1),(2,'Manga Corta',1),(3,'Manga Larga',1),(4,'Camisas',1),(5,'Chombas',1),(6,'Medias',2),(7,'Zapatillas',2),(8,'Sin Cordones',2),(9,'Ojotas',2),(10,'Pantuflas',2),(11,'Joggins',3),(12,'Jeans',3),(13,'Shorts',3),(14,'Polleras',3),(15,'Buzos',4),(16,'Camperas',4),(17,'Chalecos',4),(18,'Llaveros',5),(19,'Gorros',5),(20,'Cubrebocas',5),(21,'Fundas',5),(22,'Aros',5),(23,'Billeteras',5),(24,'Riñoneras',5),(25,'Mochilas',5),(26,'Figuras',5),(27,'Pins',5),(28,'Tazas',5),(29,'Guantes',5),(30,'Relojes',5),(31,'Bufandas',5),(32,'Collares',5),(33,'Pulseras',5),(34,'Anillos',5),(35,'Cinturones',5),(36,'Toallones',5),(37,'Pijamas',5),(38,'Acolchados',5),(39,'Almohadas',5),(40,'Cartas',5),(41,'Cartucheras',6),(42,'Lapices',6),(43,'Gomas',6),(44,'Reglas',6),(45,'Carpetas',6),(46,'Lapiceras',6),(47,'Cuadernos',6);
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(60) NOT NULL,
  `pass` varchar(70) NOT NULL,
  `rol` varchar(12) NOT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','Admin','admin@email.com','$2a$12$OkBn6klGKa5wpM2zfk6W0u/1R08iuwT7zGSzmF3QsJ1jIs8rqGdW6','ROL_ADMIN','default-image.jpg'),(3,'Franco','Formigo','franco@email.com','$2a$12$//7MTaO0/gUFHCukRIgUiOyA7mBpAaLZsG52X5PGU/NKM5lMjWnCG','ROL_USER','1643636106788_img.png'),(4,'Usuario','Falso','mailfalso@mail.com','$2a$12$PI/JUwwyqlnUh5xWnRzUFe8cDyL1opNZkK7R7MkDaUWoqzXntPRaW','ROL_USER','default-image.jpg'),(5,'Juan','Perez','juanperez@mail.com','$2a$12$hOtPG.SDqKWUPb62YSXx6uZrypfSJaNxqrpgvyjCpHim8s9G7wSO6','ROL_USER','1644036940686_img.jpg'),(9,'Guillermina ','Formigo','formigoguillermina@gmail.com','$2a$12$8ImiUDWE1E7.CNN9u66bKO1/WnpWAG.w5CzswCeLcWdBFOMp9Ut.y','ROL_USER','1645639591936_img.jpeg'),(10,'Probando','Register','prueba@registro.com','$2a$12$QM39dzeWgtrny6RJBLOFP.//4joJ16TOwSs4kX.f3iI3Db7JyKahq','ROL_USER','default-image.jpg'),(11,'dsfgj','sdgfj','email@email.com','$2a$12$7GZOj45Sbcirb8r5tAFR6.pS4H6.UWKJSM8kRCSEdE7hUAGA6RC6a','ROL_USER','1645640155566_img.jpg'),(12,'Fief','Djeuo','jajaja@mail.com','$2a$12$6paKag6Jt6hstHx4hCFG2.yq7eTTmoNDvQNkkMGFmete3EZkOB4P6','ROL_USER','1645640252441_img.jpg'),(13,'Roberta','Martinez','robertitamartinez@gmail.com','$2a$12$mqUBimv0pA7/d.SIBzuMoeaRQEwQT3S4pX8iSWsFPjJIY3SGb0E1a','ROL_USER','1645640550531_img.jpeg'),(14,'Juan','Perez','prueba1@email.com','$2a$12$HFNHQh2V.u6pvGlm82.NPecUsO4L4/9FzKkVIOprzTO71Wi.J3peS','ROL_USER','default-image.jpg'),(15,'Franco','Formigo','francobf15@gmail.com','$2a$12$LQY8AUXJsUPC9/7aMLYzieOZOmNwYh46vPr/dTCTSEz7qYbGYt11m','ROL_USER','1646144346565_img.jpg'),(16,'Pablo','Marmol','pablomarmol@gmail.com','$2a$12$ddCTdoS.FK8XKLpSyPYdleYU6Y0D5DLtLP0Ywtph.CsuquEJ/scnu','ROL_USER','1646433742547_img.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'no_tan_raros'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-07  3:01:05