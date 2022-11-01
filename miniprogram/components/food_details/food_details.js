
// components/food_details/food_details.js
Component({
  properties: {
    myProperty:{
      type:String,
      value:'',
      observer: function() {}
    },

  },
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
        isShop:1,
      },
      {
        wareId:1,
        wareName:"蟹黄堡",
        warePrice:28.8,
        wareImage:"../../images/i .png",
        wareInfo:"这是蟹黄堡",
        isShop:0,
      },
      {
        wareId:2,
        wareName:"蟹黄堡",
        warePrice:28.8,
        wareImage:"../../images/i .png",
        wareInfo:"这是蟹黄堡",
        isShop:0,
      },

    ]
  },
  methods: {
    handleItemTap(e){
      const {index}=e.currentTarget.dataset;
      let {tabs}=this.data;
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData({tabs});
    },
    handleItemShop(e){
      console.log(e);
      const {index}=e.currentTarget.dataset;
      let {ware}=this.data;
      ware.forEach((v,i)=>i===index?v.isShop++:'');
      this.setData({ware});
    }

  },


});
