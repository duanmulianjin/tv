/*创建数据库tv98k*/
SET NAMES UTF8;
DROP DATABASE IF EXISTS tv98k;
CREATE DATABASE tv98k CHARSET=UTF8;
USE tv98k;
CREATE table userList(
	uid int primary key auto_increment,
	uname varchar(16),
	upwd varchar(16),
	gender bool,
	pic varchar(64),
	phone int
);
CREATE table slideList(
	sid int primary key auto_increment,
	href varchar(128),
	vname varchar(16),
	img varchar(64),
	brief varchar(64)
);
CREATE table newList(
	nid int primary key auto_increment,
	title varchar(32),
	brief varchar(128),
	img varchar(32),
	vname varchar(16),
	actor varchar(32),
	href varchar(128)
);
CREATE table filmList(
	vid int primary key auto_increment,
	title varchar(32),
	brief varchar(128),
	img varchar(32),
	vname varchar(16),
	actor varchar(32),
	href varchar(128)
);
CREATE table sitcomList(
	vid int primary key auto_increment,
	title varchar(32),
	brief varchar(128),
	img varchar(32),
	vname varchar(16),
	actor varchar(32),
	href varchar(128)
);
CREATE table varietyList(
	vid int primary key auto_increment,
	title varchar(32),
	brief varchar(128),
	img varchar(32),
	vname varchar(16),
	actor varchar(32),
	href varchar(128)
);