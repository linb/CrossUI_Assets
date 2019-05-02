/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50067
Source Host           : localhost:3306
Source Database       : xui_ordermanagement

Target Server Type    : MYSQL
Target Server Version : 50067
File Encoding         : 65001

Date: 2013-11-26 16:44:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tbl_companyinfo
-- ----------------------------
DROP TABLE IF EXISTS `tbl_companyinfo`;
CREATE TABLE `tbl_companyinfo` (
  `SetupID` int(11) NOT NULL auto_increment,
  `CompanyName` varchar(50) default NULL,
  `Address` varchar(255) default NULL,
  `City` varchar(50) default NULL,
  `StateOrProvince` varchar(20) default NULL,
  `ZIPCode` varchar(20) default NULL,
  `PhoneNumber` varchar(30) default NULL,
  `FaxNumber` varchar(30) default NULL,
  PRIMARY KEY  (`SetupID`),
  KEY `CompanyName` (`CompanyName`),
  KEY `PostalCode` (`ZIPCode`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_companyinfo
-- ----------------------------
INSERT INTO `tbl_companyinfo` VALUES ('1', 'Fourth Coffee', '2345 Harry Street', 'Cooperville', 'IA', '653218999', '5605550123', '5605550124');

-- ----------------------------
-- Table structure for tbl_customers
-- ----------------------------
DROP TABLE IF EXISTS `tbl_customers`;
CREATE TABLE `tbl_customers` (
  `CustomerID` int(11) NOT NULL auto_increment,
  `CompanyName` varchar(50) default NULL,
  `FirstName` varchar(30) default NULL,
  `LastName` varchar(50) default NULL,
  `BillingAddress` varchar(255) default NULL,
  `City` varchar(50) default NULL,
  `StateOrProvince` varchar(20) default NULL,
  `ZIPCode` varchar(20) default NULL,
  `Email` varchar(75) default NULL,
  `CompanyWebsite` longtext,
  `PhoneNumber` varchar(30) default NULL,
  `FaxNumber` varchar(30) default NULL,
  `ShipAddress` varchar(255) default NULL,
  `ShipCity` varchar(50) default NULL,
  `ShipStateOrProvince` varchar(50) default NULL,
  `ShipZIPCode` varchar(20) default NULL,
  `ShipPhoneNumber` varchar(30) default NULL,
  `Notes` longtext,
  PRIMARY KEY  (`CustomerID`),
  KEY `CompanyName` (`CompanyName`),
  KEY `ContactLastName` (`LastName`),
  KEY `PostalCode` (`ZIPCode`),
  KEY `ShipZIPCode` (`ShipZIPCode`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_customers
-- ----------------------------
INSERT INTO `tbl_customers` VALUES ('1', 'A. Datum Corporation', 'Terry', 'Adams', '1234 Brown Street', 'Furntree', 'WA', '680526789', null, 'http://www.adatum.com', '6065550134', '4255550144', '1234 Brown Street', 'Furntree Gulley', 'WA', '680526789', '4255550134', null);
INSERT INTO `tbl_customers` VALUES ('2', 'Contoso, Ltd', 'Jo', 'Berry', '4567 Green Road', 'Clovelly', 'CA', '863924444', null, 'http://www.contoso.com', '4255550135', '4255550145', '4567 Green Road', 'Clovelly', 'CA', '863924444', '4255550135', null);
INSERT INTO `tbl_customers` VALUES ('3', 'Trey Research', 'Kim', 'Akers', '5678 Yellow Place', 'Beecroft', 'MO', '564781234', null, 'http://www.treyresearch.net', '4255550136', '4255550146', '5678 Yellow Place', 'Beecroft', 'MO', '564781234', '4255550136', '');
INSERT INTO `tbl_customers` VALUES ('4', 'Litware, Inc', 'Robin', 'Counts', '2345 Brick Road', 'Irvine', 'AZ', '234893456', 'Robin@litwareinc.com', 'http://www.litwareinc.com', '8065550137', '8065550147', '2345 Brick Road', 'Irvine', 'AZ', '234893456', '8065550137', null);

-- ----------------------------
-- Table structure for tbl_employees
-- ----------------------------
DROP TABLE IF EXISTS `tbl_employees`;
CREATE TABLE `tbl_employees` (
  `EmployeeID` int(11) NOT NULL auto_increment,
  `FirstName` varchar(50) default NULL,
  `LastName` varchar(50) default NULL,
  `Title` varchar(50) default NULL,
  `WorkPhone` varchar(30) default NULL,
  PRIMARY KEY  (`EmployeeID`),
  KEY `LastName` (`LastName`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_employees
-- ----------------------------
INSERT INTO `tbl_employees` VALUES ('1', 'Adam', 'Barr', 'Sales Representative', '2065550123');
INSERT INTO `tbl_employees` VALUES ('2', 'Oliver', 'Cox', 'Sales Manager', '2065550126');
INSERT INTO `tbl_employees` VALUES ('3', 'Chris', 'Cannon', 'Sales Representative', '2065550125');
INSERT INTO `tbl_employees` VALUES ('4', 'Eva', 'Corets', 'Product Manager', '2065550127');
INSERT INTO `tbl_employees` VALUES ('5', 'Doris', 'Hartwig', 'Sales Representative', '2065550128');
INSERT INTO `tbl_employees` VALUES ('6', 'Jack', 'Lee', 'Product Manager', '(206)555-0982');

-- ----------------------------
-- Table structure for tbl_orderdetails
-- ----------------------------
DROP TABLE IF EXISTS `tbl_orderdetails`;
CREATE TABLE `tbl_orderdetails` (
  `OrderDetailID` int(11) NOT NULL auto_increment,
  `OrderID` int(11) default NULL,
  `ProductID` int(11) default NULL,
  `Quantity` double default NULL,
  `UnitPrice` double default '0',
  `Discount` double default '0',
  PRIMARY KEY  (`OrderDetailID`),
  KEY `OrderID` (`OrderID`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `{81885213-20D9-46EB-B2F3-83022631CF42}` FOREIGN KEY (`ProductID`) REFERENCES `tbl_products` (`ProductID`),
  CONSTRAINT `{EDA1F5D2-AB2E-42EE-B612-23F51177A175}` FOREIGN KEY (`OrderID`) REFERENCES `tbl_orders` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_orderdetails
-- ----------------------------
INSERT INTO `tbl_orderdetails` VALUES ('1', '1', '4', '15', '5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('2', '2', '7', '10', '7.5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('3', '3', '8', '5', '4', '0');
INSERT INTO `tbl_orderdetails` VALUES ('6', '5', '6', '5', '7', '0');
INSERT INTO `tbl_orderdetails` VALUES ('7', '5', '9', '30', '5', '0.05');
INSERT INTO `tbl_orderdetails` VALUES ('9', '1', '1', '9', '6', '0');
INSERT INTO `tbl_orderdetails` VALUES ('11', '13', '4', '1', '5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('12', '13', '1', '2', '2.5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('13', '13', '7', '1', '7.5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('17', '23', '8', '22', '4', '0');
INSERT INTO `tbl_orderdetails` VALUES ('21', '24', '8', '22', '4', '0');
INSERT INTO `tbl_orderdetails` VALUES ('22', '24', '4', '10', '5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('29', '25', '9', '40', '5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('30', '25', '6', '10', '7', '0');
INSERT INTO `tbl_orderdetails` VALUES ('34', '4', '6', '10', '7', '0');
INSERT INTO `tbl_orderdetails` VALUES ('35', '26', '6', '1', '7', '0');
INSERT INTO `tbl_orderdetails` VALUES ('36', '26', '6', '1', '7', '0');
INSERT INTO `tbl_orderdetails` VALUES ('37', '27', '4', '1', '5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('38', '28', '8', '100', '4', '0');
INSERT INTO `tbl_orderdetails` VALUES ('39', '29', '7', '23', '7.5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('40', '29', '2', '22', '4', '0');
INSERT INTO `tbl_orderdetails` VALUES ('41', '29', '9', '3', '5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('42', '30', '2', '22', '4', '0');
INSERT INTO `tbl_orderdetails` VALUES ('43', '31', '7', '22', '7.5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('44', '31', '5', '22', '2.5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('45', '32', '6', '22', '7', '0');
INSERT INTO `tbl_orderdetails` VALUES ('46', '32', '6', '2', '7', '0');
INSERT INTO `tbl_orderdetails` VALUES ('47', '33', '9', '22', '5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('48', '34', '4', '31', '5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('49', '35', '1', '1', '2.5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('50', '36', '4', '40', '5', '0');
INSERT INTO `tbl_orderdetails` VALUES ('51', '37', '4', '100', '5', '0');

-- ----------------------------
-- Table structure for tbl_orders
-- ----------------------------
DROP TABLE IF EXISTS `tbl_orders`;
CREATE TABLE `tbl_orders` (
  `OrderID` int(11) NOT NULL auto_increment,
  `CustomerID` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  `OrderDate` datetime NOT NULL,
  `PurchaseOrderNumber` varchar(30) NOT NULL,
  `ShipDate` datetime default NULL,
  `ShippingMethodID` int(11) default NULL,
  `PaymentMethodID` int(11) default NULL,
  `FreightCharge` double default '0',
  `Taxes` double default '0',
  `PaymentReceived` tinyint(1) default '0',
  `Comment` longtext,
  PRIMARY KEY  (`OrderID`),
  KEY `CustomerID` (`CustomerID`),
  KEY `EmployeeID` (`EmployeeID`),
  KEY `OrderDate` (`OrderDate`),
  KEY `ShippingMethodID` (`ShippingMethodID`),
  KEY `{E6AD2D33-DAEF-4124-BA86-F17F47F28308}` (`PaymentMethodID`),
  CONSTRAINT `{24B90133-48FD-46C7-A738-F3A57F1A68A2}` FOREIGN KEY (`CustomerID`) REFERENCES `tbl_customers` (`CustomerID`) ON DELETE CASCADE,
  CONSTRAINT `{4AA06063-4E6D-4B41-BB45-A39A65DDBE78}` FOREIGN KEY (`ShippingMethodID`) REFERENCES `tbl_shippingmethods` (`ShippingMethodID`),
  CONSTRAINT `{E6AD2D33-DAEF-4124-BA86-F17F47F28304}` FOREIGN KEY (`EmployeeID`) REFERENCES `tbl_employees` (`EmployeeID`) ON DELETE CASCADE,
  CONSTRAINT `{E6AD2D33-DAEF-4124-BA86-F17F47F28308}` FOREIGN KEY (`PaymentMethodID`) REFERENCES `tbl_paymentmethods` (`PaymentMethodID`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_orders
-- ----------------------------
INSERT INTO `tbl_orders` VALUES ('1', '2', '1', '2005-04-23 00:00:00', '10', '2005-04-29 00:00:00', '1', '2', '64', '5', '0', null);
INSERT INTO `tbl_orders` VALUES ('2', '1', '1', '2005-03-23 00:00:00', '11', '2005-03-29 00:00:00', '1', '1', null, '5', '0', null);
INSERT INTO `tbl_orders` VALUES ('3', '3', '3', '2005-01-21 00:00:00', '30', '2005-06-28 00:00:00', '5', '3', null, '5', '0', null);
INSERT INTO `tbl_orders` VALUES ('4', '2', '3', '2005-05-05 00:00:00', '26', '2005-09-19 00:00:00', '2', '4', '23', '5', '0', null);
INSERT INTO `tbl_orders` VALUES ('5', '4', '5', '2005-05-02 00:00:00', '32', '2005-09-27 00:00:00', '2', '3', '20.5', '5', '0', null);
INSERT INTO `tbl_orders` VALUES ('13', '1', '1', '2008-02-29 00:00:00', '1', '2005-09-29 00:00:00', '2', '1', '50', '5', '1', null);
INSERT INTO `tbl_orders` VALUES ('23', '2', '2', '2013-11-19 00:00:00', '23', null, null, null, '0', '0', '0', null);
INSERT INTO `tbl_orders` VALUES ('24', '1', '3', '2013-10-29 00:00:00', '45', '2013-11-20 00:00:00', '2', '2', '0', '0', '1', 'dsadsfasdf');
INSERT INTO `tbl_orders` VALUES ('25', '2', '2', '2013-11-27 00:00:00', '43', '2013-11-18 00:00:00', '2', '2', '10', '30', '1', '');
INSERT INTO `tbl_orders` VALUES ('26', '4', '3', '2013-11-18 00:00:00', 'ddd', null, null, '2', '0', '23', '0', '');
INSERT INTO `tbl_orders` VALUES ('27', '3', '4', '2013-11-11 00:00:00', 'we', null, null, null, '0', '23', '0', '');
INSERT INTO `tbl_orders` VALUES ('28', '4', '2', '2013-11-26 00:00:00', '323', '2013-11-30 00:00:00', '2', '2', '0', '23', '0', '');
INSERT INTO `tbl_orders` VALUES ('29', '3', '3', '2013-11-12 00:00:00', '23', '2013-11-26 00:00:00', '3', '3', '0', '23', '1', 'ds');
INSERT INTO `tbl_orders` VALUES ('30', '3', '3', '2013-11-28 00:00:00', '33', null, null, null, '0', '0', '0', null);
INSERT INTO `tbl_orders` VALUES ('31', '2', '2', '2013-11-20 00:00:00', '23', null, null, null, '0', '0', '0', null);
INSERT INTO `tbl_orders` VALUES ('32', '4', '1', '2013-11-26 00:00:00', '23', null, null, null, '0', '23', '0', null);
INSERT INTO `tbl_orders` VALUES ('33', '2', '4', '2013-11-26 00:00:00', '23', null, null, null, '0', '0', '0', null);
INSERT INTO `tbl_orders` VALUES ('34', '4', '1', '2013-11-12 00:00:00', '43', null, null, null, '0', '22', '0', null);
INSERT INTO `tbl_orders` VALUES ('35', '4', '3', '2013-11-20 00:00:00', '76', null, '2', '3', '0', '33', '0', null);
INSERT INTO `tbl_orders` VALUES ('36', '1', '5', '2013-11-12 00:00:00', '55', null, '2', '1', '0', '0', '0', null);
INSERT INTO `tbl_orders` VALUES ('37', '3', '3', '2013-11-26 00:00:00', '75', null, null, null, '0', '0', '0', null);

-- ----------------------------
-- Table structure for tbl_paymentmethods
-- ----------------------------
DROP TABLE IF EXISTS `tbl_paymentmethods`;
CREATE TABLE `tbl_paymentmethods` (
  `PaymentMethodID` int(11) NOT NULL auto_increment,
  `PaymentMethod` varchar(50) default NULL,
  PRIMARY KEY  (`PaymentMethodID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_paymentmethods
-- ----------------------------
INSERT INTO `tbl_paymentmethods` VALUES ('1', 'Check');
INSERT INTO `tbl_paymentmethods` VALUES ('2', 'Discover');
INSERT INTO `tbl_paymentmethods` VALUES ('3', 'Mastercard');
INSERT INTO `tbl_paymentmethods` VALUES ('4', 'VISA');

-- ----------------------------
-- Table structure for tbl_products
-- ----------------------------
DROP TABLE IF EXISTS `tbl_products`;
CREATE TABLE `tbl_products` (
  `ProductID` int(11) NOT NULL auto_increment,
  `ProductName` varchar(50) default NULL,
  `UnitPrice` double default NULL,
  `InStock` tinyint(1) default '0',
  PRIMARY KEY  (`ProductID`),
  KEY `ProductName` (`ProductName`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_products
-- ----------------------------
INSERT INTO `tbl_products` VALUES ('1', 'Blue Mug', '2.5', '1');
INSERT INTO `tbl_products` VALUES ('2', 'Red Mug', '4', '1');
INSERT INTO `tbl_products` VALUES ('3', 'Green Mug', '2.5', '1');
INSERT INTO `tbl_products` VALUES ('4', 'Black Mug', '5', '1');
INSERT INTO `tbl_products` VALUES ('5', 'Yellow Mug', '2.5', '1');
INSERT INTO `tbl_products` VALUES ('6', 'Silver Mug', '7', '1');
INSERT INTO `tbl_products` VALUES ('7', 'Gold Mug', '7.5', '1');
INSERT INTO `tbl_products` VALUES ('8', 'White Mug', '4', '1');
INSERT INTO `tbl_products` VALUES ('9', 'US Flag Mug', '5', '1');

-- ----------------------------
-- Table structure for tbl_shippingmethods
-- ----------------------------
DROP TABLE IF EXISTS `tbl_shippingmethods`;
CREATE TABLE `tbl_shippingmethods` (
  `ShippingMethodID` int(11) NOT NULL auto_increment,
  `ShippingMethod` varchar(20) default NULL,
  PRIMARY KEY  (`ShippingMethodID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_shippingmethods
-- ----------------------------
INSERT INTO `tbl_shippingmethods` VALUES ('1', 'Federal Express');
INSERT INTO `tbl_shippingmethods` VALUES ('2', 'UPS Ground');
INSERT INTO `tbl_shippingmethods` VALUES ('3', 'UPS Second Day');
INSERT INTO `tbl_shippingmethods` VALUES ('4', 'US Mail Overnight');
INSERT INTO `tbl_shippingmethods` VALUES ('5', 'US Certified Mail');
