const express=require("express");
const pool=require("./pool.js")
var router=express.Router();
router.get("/slide",(req,res)=>{
    var sql=" select * from slideList;"
    pool.query(sql,(err,result)=>{
        res.send(result);
    })
});
router.get("/new",(req,res)=>{
    var sql="SELECT * FROM newList"
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"查询新品推荐成功",result})
    })
});
router.get("/film",(req,res)=>{
    var sql="SELECT * FROM filmList"
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"查询热门电影成功",result})
    })
})
router.get("/sitcom",(req,res)=>{
    var sql="SELECT * FROM sitcomList"
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"查询热门连续剧成功",result})
    })
});
router.get("/variety",(req,res)=>{
    var sql="SELECT * FROM varietyList"
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"查询热门综艺推荐成功",result})
    })
})

module.exports=router;