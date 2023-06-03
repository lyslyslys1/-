Page({
  handleGetUserInfo(e:any){
      const { userInfo }=e.detail;
      wx.setStorageSync("userinfo",userInfo);
      wx.navigateBack({
        delta:1
      });
  }
})