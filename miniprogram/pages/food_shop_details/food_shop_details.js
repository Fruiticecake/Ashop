// pages/food_shop_details/food_shop_details.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seller:[
      {
        sellerId:0,
        sellerInfo:"text",
        sellerName:"波克派",
        sellerImage:"src=../../../../images/text.png",
        sellerTags:"1",
        sellerStatus:1,
        sellerTips:"公告：Fine!",
      },
      {
        sellerId:1,
        sellerInfo:"text",
        sellerName:"波克派",
        sellerImage:"src=../../../../images/text.png",
        sellerTags:"1",
        sellerStatus:1,
        sellerTips:"公告：Fine!",
      },
      {
        sellerId:2,
        sellerInfo:"text",
        sellerName:"波克派",
        sellerImage:"src=../../../../images/text.png",
        sellerTags:"1",
        sellerStatus:1,
        sellerTips:"公告：Fine!",
      },
      {
        sellerId:3,
        sellerInfo:"text",
        sellerName:"波克派",
        sellerImage:"src=../../../../images/text.png",
        sellerTags:"1",
        sellerStatus:1,
        sellerTips:"公告：Fine!",
      },
    ],
    tabs:[
      {
        id:0,
        title:"标题1",
        isActive:true,
      },
      {
        id:1,
        title:"标题2",
        isActive:false,
      },
      {
        id:2,
        title:"标题3",
        isActive:false,
      },
      {
        id:3,
        title:"标题4",
        isActive:false,
      },
   ],
    ware:[
      {
        wareId:0,
        wareName:"蟹黄堡",
        warePrice:28.8,
        wareImage:"../../images/i .png",
        wareInfo:"这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡这是蟹黄堡",
        wareNum:1,
        isShop:true,
      },
      {
        wareId:1,
        wareName:"蟹黄堡2",
        warePrice:28.8,
        wareImage:"../../images/i .png",
        wareInfo:"这是蟹黄堡",
        wareNum:0,
        isShop:false,
      },
      {
        wareId:2,
        wareName:"蟹黄堡3",
        warePrice:28.8,
        wareImage:"../../images/i .png",
        wareInfo:"这是蟹黄堡",
        wareNum:0,
        isShop:false,
      },

    ]
  },
  ware:{},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // let that=this;
    //   db.collection('tabs').where({}).get({
    //     success:function(res){
    //       console.log('标签获取成功')
    //       that.setData({
    //         tabs:res.data
    //       })
    //     },
    //     fail:function(res){
    //       console.log('标签获取失败')
    //     },
    //   }),
    //   db.collection('ware').where({}).get({
    //     success:function(res){
    //       console.log('食品获取成功',res)
    //       that.setData({
    //         ware:res.data
    //       })
    //     },
    //     fail:function(res){
    //       console.log('食品获取失败',res)
    //     },
    //   })
      
  },
  //点击加入购物车
  handleItemShop(e){
    let shop_car=wx.getStorageSync("shop_car")||[];
    let index=shop_car.findIndex(v=>v.wareId===this.ware.wareId);

    if(index===-1){
      this.ware.wareNum=1;
      shop_car.push(this.ware);
    }else{
      shop_car[index].wareNum++;
    }
    wx.setStorageSync('shop_car', shop_car);
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      mask: true,
    });
  }
  

})