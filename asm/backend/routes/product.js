import express from 'express';
const router = express.Router();
router.get('/product',(req,res)=>{
    res.json({
        message:"đây là trang home"})
})
//thêm sản phẩm
router.post('.product',(req,res)=>{
    
})
module.exports = router;
