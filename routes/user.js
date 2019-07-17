const express = require("express");
const pool = require("./pool.js")
var router = express.Router();
router.get("/login", (req, res) => {
    var phone = req.query.phone;
    var upwd = req.query.upwd;
    var sql = "select * from userList where phone=? and upwd=?";
    pool.query(sql, [phone, upwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({ msg: "登录成功", code: 1, data: result })
        } else { res.send({ msg: "手机号或密码不对", code: -1, }) }
    })
})
router.get("/add", (req, res) => {
    //测试字符串http://127.0.0.1:3000/user/add?pic=1.jpg&upwd=123456&uname=uname&uid=uid&gender=gender&phone=13355555517
    var phone = req.query.phone;
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    var gender = req.query.gender
    var pic = req.query.pic;
    if (phone == undefined) { res.send({ code: -1, msg: "手机号必填" }); return; }
    if (uname == undefined) { res.send({ code: -1, msg: "用户名必填" }); return; }
    if (upwd == undefined) { res.send({ code: -1, msg: "密码必填" }); return; }
    gender == undefined ? gender = 0 : "";
    pic == undefined ? pic = "1.jpg" : "";
    var sql1 = "select * from userList where phone=?";
    pool.query(sql1, [phone], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({ code: -1, msg: "该手机号以被注册，请登录" });
            return;
        } else {
            var sql = "insert into userList values(null,?,?,?,?,?)"
            pool.query(sql, [uname, upwd, gender, pic, phone], (err, result) => {
                if (err) throw err;
                if (result.affectedRows > 0) {
                    res.send({ code: 1, msg: `注册成功 <br> 你的手机号:${phone}将作为你的账号  <br> 你的密码是${upwd} 请牢记` ,uname:uname});
                } else {
                    res.send({ code: -1, msg: "注册失败了，请重试" });
                }
            })
        }
    })

})

module.exports = router