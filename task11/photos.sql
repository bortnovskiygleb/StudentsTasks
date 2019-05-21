CREATE DATABASE  IF NOT EXISTS `photoloverdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `photoloverdb`;
-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: photoloverdb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `photo_post`
--

DROP TABLE IF EXISTS `photo_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `photo_post` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(200) NOT NULL,
  `createdat` date NOT NULL,
  `photolink` varchar(200) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`post_id`),
  KEY `fk_photo_post_user_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo_post`
--

LOCK TABLES `photo_post` WRITE;
/*!40000 ALTER TABLE `photo_post` DISABLE KEYS */;
INSERT INTO `photo_post` VALUES (1,'1 desc','2015-02-03','http://images.thepeoplesperson.com/wp-content/uploads/2018/02/03160539/Team-min.jpg',1),(2,'2 desc','2019-05-01','http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',2),(3,'3 desc','2019-05-01','https://www.pressball.by/news/football/320972',1),(4,'4 desc','2019-05-09','https://sport.tut.by/news/football/629103.html',3),(5,'5 desc','2019-05-09','https://www.pressball.by/news/football/320958',5),(6,'6 desc hello','2019-05-09','https://www.pressball.by/news/football/320958',4),(7,'7 desc hello','2019-05-01','https://www.1zoom.ru/big2/807/304544-Sepik.jpg',3),(8,'8 desc hello','2019-05-01','https://avatars.mds.yandex.net/get-pdb/401063/613954c5-50c8-4350-8243-87d81542b316/s1200?webp=false',1),(9,'9 desc','2019-05-09','https://avatars.mds.yandex.net/get-pdb/939428/12f68ca3-b7eb-4a55-99fb-f6e17a093c71/s1200?webp=false',2),(10,'10 desc hello','2019-05-02','https://s1.1zoom.ru/big3/21/Chocolate_Nuts_Cinnamon_436017.jpg',4),(11,'11 desc','2011-05-04','https://www.nastol.com.ua/pic/201209/1920x1200/nastol.com.ua-32997',1),(12,'12 desc','2018-05-04','https://www.nastol.com.ua/pic/201209/1920x1200/nastol.com.ua-32997',4),(13,'13 desc hello','2018-06-05','https://www.nastol.com.ua/pic/201209/1920x1200/nastol.com.ua-32897',4),(14,'14 desc','2019-05-06','lalalal',1),(15,'15 desc','2019-05-06','babab',1),(16,'16 desc','2019-05-06','lololol',1);
/*!40000 ALTER TABLE `photo_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Petrov'),(2,'Ivanov'),(3,'Snow'),(4,'Sidorov'),(5,'Dudek'),(6,'Grealish'),(7,'Brooks'),(8,'Tolisso'),(9,'Carrick'),(10,'Bartez'),(11,'Snow');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-06 19:43:51
