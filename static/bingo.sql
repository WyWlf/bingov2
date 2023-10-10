-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: bingo1
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `match_history`
--

DROP TABLE IF EXISTS `match_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `match_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `game` int(255) NOT NULL,
  `time_finished` varchar(255) NOT NULL,
  `highest_streak` int(11) NOT NULL,
  `correct_answers` int(11) NOT NULL,
  `wrong_answers` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `mode` int(11) NOT NULL,
  `host` varchar(255) NOT NULL,
  `winner` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `rush` int(11) NOT NULL,
  `flashlight` int(11) NOT NULL,
  `hardcore` int(11) NOT NULL,
  `level` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=214 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `match_history`
--

LOCK TABLES `match_history` WRITE;
/*!40000 ALTER TABLE `match_history` DISABLE KEYS */;
INSERT INTO `match_history` VALUES (204,'qwer',309882,'1 minute(s) & 53 second(s)',12,18,1,1,1,'qwe','qwer','10/8/2023',0,0,0,''),(205,'qwe',309882,'1 minute(s) & 53 second(s)',7,9,1,0,1,'qwe','qwer','10/8/2023',0,0,0,''),(206,'qwe',349585,'0 minute(s) & 3 second(s)',0,0,5,0,0,'','','10/9/2023',0,0,0,'Easy'),(207,'qwer',309883,'1 minute(s) & 53 second(s)',122,183,14,1,1,'qwe','qwer','10/8/2023',0,0,0,''),(208,'qwe',309883,'1 minute(s) & 53 second(s)',72,92,11,0,1,'qwe','qwer','10/8/2023',0,0,0,''),(209,'qwe',598894,'0 minute(s) & 7 second(s)',0,0,1,0,0,'','','09/10/2023',1,0,1,'Hard'),(210,'qwe',139370,'0 minute(s) & 44 second(s)',6,11,2,1,1,'qwe','qwe','09/10/2023',0,0,0,''),(211,'qwe',729381,'0 minute(s) & 41 second(s)',12,12,2,1,1,'qwe','qwe','09/10/2023',0,0,0,''),(212,'qwe',770797,'0 minute(s) & 45 second(s)',4,11,5,0,1,'qwe','','09/10/2023',0,0,0,''),(213,'qwe',421569,'1 minute(s) & 19 second(s)',6,10,3,1,0,'','','09/10/2023',1,0,0,'Easy');
/*!40000 ALTER TABLE `match_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_accounts`
--

DROP TABLE IF EXISTS `user_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(55) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_accounts`
--

LOCK TABLES `user_accounts` WRITE;
/*!40000 ALTER TABLE `user_accounts` DISABLE KEYS */;
INSERT INTO `user_accounts` VALUES (3,'qwe','qwe','Student'),(4,'qwerty','qwe','Student'),(5,'qwer','qwe','Student'),(6,'qwert','qwe','Student'),(9,'carl','qwe','Teacher'),(10,'richt','qwe','Teacher'),(11,'Test account','test','Teacher'),(12,'test','test','Teacher');
/*!40000 ALTER TABLE `user_accounts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-11  7:52:38
