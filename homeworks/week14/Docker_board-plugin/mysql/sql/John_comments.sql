-- --------------------------------------------------------
-- Host:                         mentor-program.co
-- Server version:               5.6.49-cll-lve - MySQL Community Server (GPL)
-- Server OS:                    Linux
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for mtr04group2
CREATE DATABASE IF NOT EXISTS `mtr04group2` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mtr04group2`;

-- Dumping structure for table mtr04group2.John_comments
CREATE TABLE IF NOT EXISTS `John_comments` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nickname` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `is_deleted` tinyint(4) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `site_key` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=232 DEFAULT CHARSET=latin1;

-- Dumping data for table mtr04group2.John_comments: 94 rows
DELETE FROM `John_comments`;
/*!40000 ALTER TABLE `John_comments` DISABLE KEYS */;
INSERT INTO `John_comments` (`id`, `nickname`, `username`, `content`, `is_deleted`, `created_at`, `site_key`) VALUES
	(139, 'John', 'admin', '表情測試\r\n\r\n????????????????', NULL, '2020-08-18 20:30:05', 'john'),
	(138, 'John', 'admin', '留言版測試~', NULL, '2020-08-18 20:29:47', 'john'),
	(140, 'John', 'admin', '\r\n表情測試\r\n😊🥺😉😍😘😚😜😂😝😳😁😣😢😭😰🥰', NULL, '2020-08-18 20:34:54', ''),
	(141, 'John', 'admin', '# MarkDown 測試\r\n\r\n## 測試\r\n\r\n### 我是誰', NULL, '2020-08-18 20:35:56', ''),
	(142, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:41:33', ''),
	(143, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:41:39', ''),
	(144, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:41:42', ''),
	(145, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:41:45', ''),
	(146, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:41:48', ''),
	(147, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:41:52', ''),
	(148, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:41:56', ''),
	(149, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:42:00', ''),
	(150, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:42:06', ''),
	(151, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:42:08', ''),
	(152, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:42:11', ''),
	(153, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:42:13', ''),
	(154, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:42:16', ''),
	(155, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:42:20', ''),
	(156, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:42:34', ''),
	(157, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:42:36', ''),
	(158, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:42:40', ''),
	(159, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:42:45', ''),
	(160, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:50:33', ''),
	(161, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:58:45', ''),
	(162, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:58:52', ''),
	(163, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:58:56', ''),
	(164, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:58:59', ''),
	(165, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:59:04', ''),
	(166, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:59:08', ''),
	(167, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:59:11', ''),
	(168, '換nickname', 'admin', '測試分頁', NULL, '2020-08-18 20:59:15', ''),
	(169, '換nickname', 'admin', '132123', NULL, '2020-08-18 21:01:58', ''),
	(170, '換nickname', 'admin', '132123', NULL, '2020-08-18 21:02:02', ''),
	(171, '換nickname', 'admin', '1231231', NULL, '2020-08-18 21:02:06', ''),
	(172, '換nickname', 'admin', '2312312312312', NULL, '2020-08-18 21:02:12', ''),
	(173, '換nickname', 'admin', '3123123', NULL, '2020-08-18 21:02:18', ''),
	(174, '換nickname', 'admin', '13132', NULL, '2020-08-18 21:02:28', ''),
	(175, '換nickname', 'admin', '34234324', NULL, '2020-08-18 21:02:34', ''),
	(176, '換nickname', 'admin', 'FGHFGHFG', NULL, '2020-08-18 21:02:40', ''),
	(177, '換nickname', 'admin', 'FGHFGHFGFGHFGHFGFGHFGHFGFGHFGHFGFGHFGHFG', NULL, '2020-08-18 21:02:52', ''),
	(178, '換nickname', 'admin', 'FGHFGHFG', NULL, '2020-08-18 21:03:08', ''),
	(179, '千千萬萬個我', '千千', '編輯留言測試\r\n\r\n編輯後', 1, '2020-08-18 21:47:27', ''),
	(180, 'ALAN', '', '被我改了', 1, '2020-08-18 21:57:38', 'john'),
	(181, '換nickname', 'admin', '😊🥺😉😍😘😚😜😂😝😳😁😣😢😭😰🥰\r\n\r\nemoji 測試', NULL, '2020-08-18 22:04:22', ''),
	(182, 'qqq', 'qqq', '😊🥺😉😍😘😚😜😂😝😳😁😣😢😭😰🥰', 1, '2020-08-21 21:23:39', ''),
	(183, 'ian', 'ian', 'yoyo', NULL, '2020-08-27 11:38:30', ''),
	(184, '火柴人', 'heybro', '._________________.\r\n   |.---------------.|\r\n   ||     .         ||\r\n   ||   ..   O      ||\r\n   ||       \\|/     ||\r\n   ||  ...   |      ||\r\n   ||       / \\     ||\r\n   ||_______________||\r\n   /.-.-.-.-.-.-.-.-.\\\r\n  /.-.-.-.-.-.-.-.-.-.\\\r\n /.-.-.-.-.-.-.-.-.-.-.\\\r\n/______/__________\\___o_\\ \r\n\\_______________________/謝謝火柴人  ', 1, '2020-08-29 01:04:45', ''),
	(185, '火柴人', 'heybro', '修改壞了 忘記改 table 的名字 哈哈\r\n\r\nFatal error: Uncaught Error: Call to a member function bind_param() on boolean in /home/gk0bzeoh7dod/public_html/mtr04group2/John/week11/hw1-board/update_comment.php:43 Stack trace: #0 {main} thrown in /home/gk0bzeoh7dod/public_html/mtr04group2/John/week11/hw1-board/update_comment.php on line 43\r\n\r\nQQ(John)', NULL, '2020-08-29 01:10:31', ''),
	(186, '火柴人', 'heybro', '|.-.-.-.O-.-.-.|\r\n|.-.-.-\\|/.-.-.|\r\n|.-.-.-.|.-.-._|\r\n|.-.-.-/_\\.-.-.|\r\n\r\n謝謝火柴人', 1, '2020-08-29 01:12:38', ''),
	(187, '火柴人', 'heybro', '謝謝火柴人\r\n\r\n~o/    _o\r\n/|      |\\\r\n/ \\    / >', 1, '2020-08-29 01:15:28', ''),
	(188, '火柴人', 'heybro', '謝謝火柴人\r\n.._o\r\n...|\\\r\n../.>', 1, '2020-08-29 01:16:52', ''),
	(189, '火柴人', 'heybro', '謝謝火柴人\r\n_o\r\n...|\\\r\n../.>', 1, '2020-08-29 01:17:11', ''),
	(190, '火柴人', 'heybro', '謝謝火柴人\r\n\r\no+<', NULL, '2020-08-29 01:18:10', ''),
	(191, '火柴人', 'heybro', '```\r\n+--------------+\r\n   |.------------.|\r\n   ||     O      ||\r\n   ||     |/     ||\r\n   ||    /|      ||\r\n   ||    / \\     ||\r\n   |+------------+|\r\n   +-..--------..-+\r\n   .--------------.\r\n  / /============\\ \\\r\n / /==============\\ \\\r\n/____________________\\\r\n\\____________________/\r\n```', 1, '2020-08-29 01:23:36', ''),
	(192, '火柴人', 'heybro', '``` javascript\r\n+--------------+\r\n   |.------------.|\r\n   ||     O      ||\r\n   ||     |/     ||\r\n   ||    /|      ||\r\n   ||    / \\     ||\r\n   |+------------+|\r\n   +-..--------..-+\r\n   .--------------.\r\n  / /============\\ \\\r\n / /==============\\ \\\r\n/____________________\\\r\n\\____________________/\r\n```', 1, '2020-08-29 01:24:01', ''),
	(193, '火柴人', 'heybro', '``` javascript\r\n+--------------+\r\n...|.------------.|\r\n...||.....O......||\r\n...||.....|/.....||\r\n...||..../|......||\r\n...||..../.\\.....||\r\n...|+------------+|\r\n...+-..--------..-+\r\n....--------------.\r\n../ /============\\ \\\r\n./ /==============\\ \\\r\n/____________________\\\r\n\\____________________/\r\n```', 1, '2020-08-29 01:25:17', ''),
	(194, '火柴人', 'heybro', '``` javascript\r\n...+==============+\r\n...|.============.|\r\n...||.....O......||\r\n...||.....|/.....||\r\n...||..../|......||\r\n...||..../.\\.....||\r\n...|+============+|\r\n...+-==--------==-+\r\n....--------------.\r\n../ /============\\ \\\r\n./ /==============\\ \\\r\n/____________________\\\r\n\\____________________/\r\n```', 1, '2020-08-29 01:26:10', ''),
	(195, '火柴人', 'heybro', '```\r\n火柴 火柴\r\n...+==============+\r\n...|.============.|\r\n...||.....O......||\r\n...||.....|/.....||\r\n...||..../|......||\r\n...||..../.\\.....||\r\n...|+============+|\r\n...+-==--------==-+\r\n....--------------.\r\n../ /============\\ \\\r\n./ /==============\\ \\\r\n/____________________\\\r\n\\____________________/\r\n```', 1, '2020-08-29 01:26:36', ''),
	(196, '火柴人', 'heybro', '火柴 火柴\r\n...+==============+\r\n...|.============.|\r\n...||.....O......||\r\n...||.....|/.....||\r\n...||..../|......||\r\n...||..../.\\.....||\r\n...|+============+|\r\n...+-==--------==-+\r\n../ /============\\ \\\r\n./ /==============\\ \\\r\n/____________________\\\r\n\\____________________/', 1, '2020-08-29 01:27:00', ''),
	(197, '火柴人', 'heybro', '```\r\n火柴 火柴\r\n...+==============+\r\n...|.============.|\r\n...||.....O......||\r\n...||.....|/.....||\r\n...||..../|......||\r\n...||..../.\\.....||\r\n...|+============+|\r\n...+-==--------==-+\r\n../ /============\\ \\\r\n./ /==============\\ \\\r\n/____________________\\\r\n\\____________________/\r\n```', NULL, '2020-08-29 01:27:13', ''),
	(198, '火柴人', 'heybro', '\r\n![](https://i.imgur.com/Yiw5zKh.gif)', NULL, '2020-08-29 01:45:49', ''),
	(199, 'Cian', 'ccccc', '測一下～～\r\n\r\n<script>alert("Yoyoyo")</script>', NULL, '2020-08-30 23:28:16', 'john'),
	(200, 'Cian', 'ccccc', '```\r\ncode\r\n```', NULL, '2020-08-30 23:28:35', 'john'),
	(201, '早安', 'jay', '今天早餐吃些甚麼', 1, '2020-08-31 00:53:28', ''),
	(202, '早安', 'jay', '今天吃早餐了嗎', 1, '2020-08-31 00:57:11', ''),
	(203, 'Test', 'Test', '修正成功', NULL, '2020-08-31 08:03:40', ''),
	(204, 'John', 'admin', '謝謝 bngandan 同學告知我留言板有問題，讓我得以修正^_^', 1, '2020-08-31 08:53:16', ''),
	(205, '@@', '', '@@', NULL, '2020-08-31 21:45:41', 'john'),
	(206, '@@', '', '@@', NULL, '2020-08-31 21:45:45', 'john'),
	(207, '你好！ 今天的你吃早餐了嗎今天的你吃早餐了嗎今天的你吃早餐了嗎今天的你吃早餐了嗎今天的你吃早餐了嗎今天的你吃早餐了嗎今天的你吃早', '666', '早', NULL, '2020-09-01 08:42:33', ''),
	(208, '7879879878984565612948561245612348561285612894561298456129845619', '123456789123456789123456789', '123', NULL, '2020-09-01 08:45:25', 'john'),
	(209, 'rere', 'rere', '123123', NULL, '2020-09-02 23:32:38', ''),
	(210, 'rere', 'rere', '安安\r\n<script>alert(\'123\')</script>', NULL, '2020-09-02 23:32:56', ''),
	(211, '\' or \'admin', '\'or\'admin', 'qwd', NULL, '2020-09-05 20:44:31', 'john'),
	(212, 'tt', '', 'tt', NULL, '2020-09-06 14:40:55', ''),
	(213, 'aaa', '', 'aaa', NULL, '2020-09-06 23:27:07', ''),
	(214, 'yrd', '', '<h1>test</h1>', NULL, '2020-09-09 10:45:49', ''),
	(215, '<h1>test</h1>', '', '<h1>test</h1>', NULL, '2020-09-09 10:45:54', 'john'),
	(216, '123', '', '123', NULL, '2020-09-10 21:27:47', 'john'),
	(217, 'Don\'t use this code', '', 'Hey~!', NULL, '2020-09-10 21:31:26', 'john'),
	(218, '\' \'', '', '\' \'', NULL, '2020-09-10 22:12:52', 'john'),
	(219, 'tt', '', 'tt', NULL, '2020-09-10 23:00:09', ''),
	(220, 'bb', '', 'bb', NULL, '2020-09-10 23:21:11', 'huli'),
	(221, 'qq', '', 'qq', NULL, '2020-09-10 23:21:17', 'huli'),
	(222, '13', '', '13', NULL, '2020-09-12 12:21:43', 'john'),
	(223, '14', '', '14', NULL, '2020-09-12 12:21:59', 'john'),
	(224, 'tt', '', 'tt', NULL, '2020-09-12 12:33:10', 'test'),
	(225, '15', '', '15', NULL, '2020-09-12 15:28:02', 'john'),
	(226, 'q', '', 'q', NULL, '2020-09-12 15:41:04', 'huli'),
	(227, 'w', '', 'w', NULL, '2020-09-12 21:55:11', 'huli'),
	(228, 'y', '', 'y', NULL, '2020-09-12 21:55:18', 'john'),
	(229, 'aa', 'aa', '\'), (\'gg\', (select password from users limit 1))#', 1, '2020-09-13 20:05:26', ''),
	(230, '\'), (\'gg\', (select password from users limit 1))#', 'aa', '\'), (\'gg\', (select password from users limit 1))#', 1, '2020-09-13 20:06:09', ''),
	(231, '#', 'aa', '////', NULL, '2020-09-13 20:06:34', '');
/*!40000 ALTER TABLE `John_comments` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
