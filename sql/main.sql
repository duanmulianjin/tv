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
	phone varchar(11)
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
insert into slideList values(null,"#","61","../img/sildeshow/61.jpg","祝小朋友们六一儿童节快乐");
insert into slideList values(null,"#","带着爸爸去留学","../img/sildeshow/daizhe.jpg","黄成栋（孙红雷饰）送独生儿子黄小栋（曾舜晞饰）海外留学路途中，结识了同样前往海外留学的林飒（辛芷蕾饰）和武丹丹（蒋依依饰）。一系列啼笑皆非的遭遇后，黄成栋极尽能事终留海外，陪伴儿子一起度过留学生活。剧中，三组完全不同的家庭在异国他乡相互碰撞摩擦，历经家庭关系、亲子关系、 自我成长的重重考验，每个人都最终收获了属于自己的新生。");
insert into slideList values(null,"#","画江湖","../img/sildeshow/hua.jpg","《画江湖之不良人》第三季侠影归来，再现唐末乱世风云！乾陵被毁、龙泉宝藏下落不明，前朝皇子李星云欲归隐山林，不良帅决心挟天子以令诸侯，号召江湖各大势力复辟大唐，王道与霸道将在这片权力漩涡中进行终极对垒！贵妃墓、长安城诉说着昔日盛唐的锦绣江山；苗疆巫蛊、湘西赶尸揭开了江湖中不为人知的明争暗斗《画江湖之不良人》 第三季将继续为您演绎这段充满爱恨情仇的武侠世界。");
insert into slideList values(null,"#","虎口惊魂","../img/sildeshow/hukou.png","有时候，枕边人比野兽更危险。 1925年，中俄边境小镇。东北虎在雪地中饥饿寻食。铁路工程师钱诚，从虎口中救下美女瑶华。巧的是，他俩原是大学同学。瑶华的新婚丈夫陷入恐惧，并且越来歇斯底里。对决、枪口子弹，东北虎、鲜血、汽车、构成一场漩涡，将所有人卷入其中。瑶华万万没想到的是，她温和的丈夫，彻底变了。");

insert into userlist values(null,"东东",123456,1,"1.jpg",13355555551);
insert into userlist values(null,"西西",123456,0,"1.jpg",13355555552);
insert into userlist values(null,"楠楠",123456,0,"1.jpg",13355555553);
insert into userlist values(null,"贝贝",123456,0,"1.jpg",13355555554);
insert into userlist values(null,"尚尚",123456,1,"1.jpg",13355555555);
insert into userlist values(null,"夏夏",123456,0,"1.jpg",13355555556);
insert into userlist values(null,"佐佐",123456,1,"1.jpg",13355555557);
insert into userlist values(null,"悠悠",123456,0,"1.jpg",13355555558);
insert into userlist values(null,"钉钉",123456,1,"1.jpg",13355555559);
insert into userlist values(null,"小爱",123456,0,"1.jpg",13355555550);

insert into sitcomList values(null,"更新至2集","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/德雷尔一家.png","德雷尔一家","德雷尔一家","#");
insert into sitcomList values(null,"更新至52集","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/1.jpg","浙版西游记","主演：众星","#");
insert into sitcomList values(null,"完结","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/校园哲学家.png","金装四大才子....","主演：众星","#");
insert into sitcomList values(null,"更新至30集","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/2.jpg","我爱我夫我爱子","主演：众星","#");
insert into sitcomList values(null,"更新至36集","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/3.jpg","各位国民","主演：众星","#");
insert into sitcomList values(null,"完结","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/4.jpg","陀枪师姐第二部国语","主演：众星","#");
insert into sitcomList values(null,"25集全","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/铁血保镖.jpg","铁血保镖国语","主演：众星","#");
insert into sitcomList values(null,"12集全","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/美国恐怖故事.jpg","美国恐怖故事","主演：众星","#");
insert into sitcomList values(null,"完结","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/5.jpg","阖府统清","主演：众星","#");
insert into sitcomList values(null,"更新至34集","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/6.jpg","大浴堂","主演：众星","#");
insert into sitcomList values(null,"更新至1集","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/杀死伊芙.png","杀死伊芙","主演：众星","#");
insert into sitcomList values(null,"23集全","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/7.jpg","犯罪心理第二季","主演：众星","#");

insert into varietyList values(null,"20190112期","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/8.jpg","金歌劲曲","主演:。。。。","#");
insert into varietyList values(null,"更新至1集","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/我中国少年.png","我中国少年","主演:。。。。","#");
insert into varietyList values(null,"20190528期","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/变形记.png","变形记第十八季","主演：真香王境泽","#");
insert into varietyList values(null,"120190205期","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/中国诗歌大会.jpg","中国诗歌大会第四季","主演:。。。。","#");
insert into varietyList values(null,"更新至2019-01-12","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/9.jpg","东方寻宝2018年","主演:。。。。","#");
insert into varietyList values(null,"2018期","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/10.jpg","新娱乐在线2018期","主演:。。。。","#");
insert into varietyList values(null,"更新至1集","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/12.jpg","河南脚斗士  2018期","主演:。。。。","#");
insert into varietyList values(null,"假唱大比拼","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/假唱大比拼.png","主演：何炅......","主演:。。。。","#");
insert into varietyList values(null,"完结","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/13.jpg","创意中国 第二季 2018年","主演：众星","#");
insert into varietyList values(null,"20190222期","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/摩登家族.png","摩登家族","主演:。。。。","#");
insert into varietyList values(null,"201821117期","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/大揭秘.jpg","大揭秘","主演:。。。。","#");
insert into varietyList values(null,"更新至2019-01-10","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/14.jpg","你会怎么做 2018年","主演:。。。。","#");

insert into filmList values(null,"BOOK OF EVIL","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/book.jpg","BOOK OF EVIL","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into filmList values(null,"高达战士","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/高达战士.jpg","高达战士","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into filmList values(null,"HD高清","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/查理班克斯.png","查理班克斯....","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into filmList values(null,"我们的师傅","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/我们的师傅.png","我们的师傅","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into filmList values(null,"百变达人","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/百变达人.png","百变达人","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into filmList values(null,"少年的秘密","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/少年的秘密日记.jpg","少年的秘密日记","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into filmList values(null,"快乐大本营","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/快乐大本营.jpg","快乐大本营","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into filmList values(null,"童言有计","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/童言有计.jpg","童言有计","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into filmList values(null,"极限挑战","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/极限挑战.png","极限挑战","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into filmList values(null,"进击的巨人","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/进击的巨人.jpg","进击的巨人","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into filmList values(null,"我家那小子","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/我家那小子.jpg","我家那小子","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into filmList values(null,"非你莫属","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/非你莫属.jpg","非你莫属","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");

insert into newList values(null,"百变达人","剧情：江苏卫视推出首档汇集全球顶尖达人的百变创意秀《百变达人》。每期节目，来自全球各地的选手通过声音、光影","../img/video/百变达人.png","百变达人","主演：潘玮柏 刘宇宁 侯佩岑 郦波 ","#");
insert into newList values(null,"HD高清","剧情：《德云社跨年相声北展专场》是德云社为迎接跨年举办的相声会。德云社带领着一大批优秀的青年相声演员为观众","../img/video/郭德纲1.jpg","郭德纲跨年专场","主演：郭德纲","#");
insert into newList values(null,"20190617","剧情：《德云社郭德纲从艺30周年北展开幕站 2019》是郭德纲从艺三十周年系列专场演出开幕式。郭德纲派出了德云社最强阵容，六城","../img/video/郭德纲2.png","德云社郭德纲从艺30周年","主演：","#");
insert into newList values(null,"我们的师傅","剧情：为更好地挖掘全人类的精神宝藏，激励中国青年奋发有为，湖南卫视特别打造一档纪实性文化品格传承节目《我们","../img/video/我们的师傅.png","我们的师傅","主演：于晓光 大张伟 刘宇宁 ","#");
insert into newList values(null,"德云社","剧情：《开场小唱 门柳儿》德云社全员2 《找搭档》侯震 闫云达 陶阳3","../img/video/德云社.jpg","德云社师徒父子相声大典成都站完整版","主演：","#");
insert into newList values(null,"少年的秘密","剧情：介绍介绍介绍介绍介绍介绍介绍介绍","../img/video/少年的秘密日记.jpg","少年的秘密日记","主演：暂无","#");
insert into newList values(null,"快乐大本营","剧情：《快乐大本营》是本土制造的综艺先锋，以“清新、青春、快乐、激情、八卦、生活”的娱乐风格在中国电视娱乐","../img/video/快乐大本营.jpg","快乐大本营","主演：何炅 吴昕 杜海涛 谢娜 ","#");
insert into newList values(null,"童言有计第二季","童言有计第二季","../img/video/童言有计.jpg","童言有计第二季","主演：何炅 撒贝宁","#");
insert into newList values(null,"极限挑战","剧情：东方卫视大型星素互动励志体验节目《极限挑战》第五季回归，黄磊、罗志祥、张艺兴、王迅、迪丽热巴、岳云鹏","../img/video/极限挑战.png","极限挑战","主演：众星","#");
insert into newList values(null,"进击的巨人","剧情：","../img/video/进击的巨人.jpg","进击的巨人","主演：暂无","#");
insert into newList values(null,"我家那小子","剧情：湖南卫视亲情观察成长励志节目《我家那小子》第二季将于5月2日晚十点回归，并将延续上一季节目模式，由李","../img/video/我家那小子.jpg","我家那小子","主演：陈学冬 钱枫 于小彤 武大靖 大张伟 李维嘉 刘欣然","#");
insert into newList values(null,"非你莫属","剧情：《非你莫属》由新成立的天视卫星公司顶尖团队臻金打造，专业性和娱乐性兼具、央视多档社会类节目当家主持、","../img/video/非你莫属.jpg","非你莫属","主演：未知","#");