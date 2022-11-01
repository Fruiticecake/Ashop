// components/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      const {index}=e.currentTarget.dataset;
      let {tabs}=this.data;
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData({tabs});
      wx.pageScrollTo({
        duration: 0,
        scrollTop:100
      })
    },
  }
})
