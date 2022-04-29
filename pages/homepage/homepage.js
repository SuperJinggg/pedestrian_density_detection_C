

  Page({
    
    data: {

     canIUse: wx.canIUse('button.open-type.getUserInfo'),
     head:"",
     motto: 'Hello World',
     userInfo: {},
     hasUserInfo: false,
     canIUse: wx.canIUse('button.open-type.getUserInfo'),
     canIUseGetUserProfile: false,
     canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName')// 如需尝试获取用户信息可改为true
 
    },
   

    //请求API授权，获得用户头像和昵称
    login() {
      console.log("login")
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log("success",res)      
          this.setData({
              avatarUrl:res.userInfo.avatarUrl,
              nickName:res.userInfo.nickName,
              city:res.userInfo.city,
              hasUserInfo: true
          })
          
          wx.switchTab({
            url: '/pages/map/map',
          })
       
      } ,
       fail(err) { //接口调用失败的回调函数 用户拒绝授权登录后，出现的提示窗
            console.error(err) //打印输出错误数据
            console.error("123")
            wx.showToast({ // 拒绝登录 显示消息提示框 
              image: "/images/error.jpeg",
              title: '您拒绝了授权！', // 提示用户：'用户拒绝授权'
              duration: 1000 // 提示语出现时间延迟1s
            });
 
        },
         
     
    }) 
    }
  })