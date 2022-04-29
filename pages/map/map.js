const normalCallout = {
}

const customCallout1 = {
}

const customCallout2 = {
}

const customCallout3 = {
}

const customCallout4 = {
}
  const customCallout5 = {
}

const customCallout6 = {
}
      const customCallout7 = {
      }

      const customCallout8 = {
      }

      const customCallout9 = {
       }

const allMarkers = [normalCallout, customCallout1, customCallout2, customCallout3, customCallout4, customCallout5, customCallout6, customCallout7, customCallout8, customCallout9]
var ress0,ress1,ress2,ress3,ress4,ress5,ress6,ress7,ress8,ress9
Page({
  data: {
      latitude: 32.19994,
      longitude: 119.516520,
      list: [{cameraId:"", latitude:"", longitude:"", num:""}
        
  ],
      markers: [],
      customCalloutMarkerIds: [],
      num: 1
  },

  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
    const markers = allMarkers
    let flag=0

    wx.request({
      url: 'http://www.abyss.website:8081/data/getDataList',
      headers: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        if( res.data.result[0].num<0){
          res.data.result[0].num=='\n“当前设备故障”'
          ress0='\n“当前设备故障”'
         }
         else{
           ress0=res.data.result[0].num+"人"
         }

       if( res.data.result[2].num<0){
        res.data.result[2].num=='\n“当前设备故障”'
        ress1='\n“当前设备故障”'
       }
       else{
         ress1=res.data.result[2].num+"人"
       }

       if( res.data.result[3].num<0){
        res.data.result[3].num=='\n“当前设备故障”'
        ress2='\n“当前设备故障”'
       }
       else{
         ress2=res.data.result[3].num+"人"
       }

       if( res.data.result[4].num<0){
        res.data.result[4].num=='\n“当前设备故障”'
        ress3='\n“当前设备故障”'
       }
       else{
         ress3=res.data.result[4].num+"人"
       }

       if( res.data.result[5].num<0){
        res.data.result[5].num=='\n“当前设备故障”'
        ress4='\n“当前设备故障”'
       }
       else{
         ress4=res.data.result[5].num+"人"
       }

       if( res.data.result[6].num<0){
        res.data.result[6].num=='\n“当前设备故障”'
        ress5='\n“当前设备故障”'
       }
       else{
         ress5=res.data.result[6].num+"人"
       }

       if( res.data.result[7].num<0){
        res.data.result[7].num=='\n“当前设备故障”'
        ress6='\n“当前设备故障”'
       }
       else{
         ress6=res.data.result[7].num+"人"
       }
       if( res.data.result[8].num<0){
        res.data.result[8].num=='\n“当前设备故障”'
        ress7='\n“当前设备故障”'
       }
       else{
         ress7=res.data.result[8].num+"人"
       }

       if( res.data.result[9].num<0){
        res.data.result[9].num=='\n“当前设备故障”'
        ress8='\n“当前设备故障”'
       }
       else{
         ress8=res.data.result[9].num+"人"
       }

       if( res.data.result[1].num<0){
        res.data.result[1].num=='\n“当前设备故障”'
        ress9='\n“当前设备故障”'
       }
       else{
         ress9=res.data.result[1].num+"人"
       }

       const ms=1000;
       setTimeout(()=>{
                
       this.setData({
        markers:[
          {
  
            id: 1,
            latitude: 32.2054,
            longitude: 119.511520,
            iconPath: '/images/normal.png',
              callout: {
                content: " ID:1\n 一食堂 \n"+  ress0,
                padding: 10,
                display: 'ALWAYS',
                textAlign: 'center',
              },
          }
        ,  {
  
          id: 2,
          latitude: 32.19714,
          longitude: 119.524090,
          iconPath: '/images/normal.png',
            callout: {
              content: "ID:2\n  二食堂 \n"+  ress1,
              padding: 10,
              display: 'ALWAYS',
              textAlign: 'center',
            },
        },
        {
  
          id: 3,
          latitude: 32.19494,
          longitude: 119.510520,
          iconPath: '/images/normal.png',
            callout: {
              content: " ID:3\n 三食堂 \n"+  ress0,
              padding: 10,
              display: 'ALWAYS',
              textAlign: 'center',
            },
        }
      ,  

      {
  
        id: 4,
        latitude: 32.19394,
        longitude: 119.52100,
        iconPath: '/images/normal.png',
          callout: {
            content: " ID:4\n 四食堂 \n"+  ress3,
            padding: 10,
            display: 'ALWAYS',
            textAlign: 'center',
          },
      }
    ,  
    {
  
      id: 5,
      latitude: 32.196094,
      longitude: 119.51820,
      iconPath: '/images/normal.png',
        callout: {
          content: " ID:5\n 五食堂 \n"+  ress4,
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center',
        },
    }
  ,    
  {
  
    id: 6,
    latitude: 32.1984,
    longitude: 119.51390,
    iconPath: '/images/normal.png',
      callout: {
        content: " ID:6\n 六食堂 \n"+  ress5,
        padding: 10,
        display: 'ALWAYS',
        textAlign: 'center',
      },
  }
,    

{
  id: 7,
  latitude: 32.201944,
  longitude: 119.514520,
  iconPath: '/images/normal.png',
    callout: {
      content: " ID:7\n 七食堂 \n"+  ress6,
      padding: 10,
      display: 'ALWAYS',
      textAlign: 'center',
    },
}
,    

{
  id: 8,
  latitude: 32.198094,
  longitude: 119.509020,
  iconPath: '/images/normal.png',
    callout: {
      content: " ID:8\n 江大超市 \n"+  ress7,
      padding: 10,
      display: 'ALWAYS',
      textAlign: 'center',
    },
}
,    
  
{
  id: 9,
  latitude: 32.202224,
  longitude: 119.518520,
  iconPath: '/images/normal.png',
    callout: {
      content: " ID:9\n 水果店 \n"+  ress8,
      padding: 10,
      display: 'ALWAYS',
      textAlign: 'center',
    },
}
,    
{
  id: 10,
  latitude: 32.194594,
  longitude: 119.51520,
  iconPath: '/images/normal.png',
    callout: {
      content: " ID:10\n 学工书店 \n"+  ress9,
      padding: 10,
      display: 'ALWAYS',
      textAlign: 'center',
    },
}
,    
  


  
  ],
  
        customCalloutMarkerIds: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      })
     
       },ms)
        // this.setData({

        //   markers:[{
    
        //     id: 2,
        //     latitude: 32.19714,
        //     longitude: 119.524090,
        //     iconPath: '/images/normal.png',
        //       callout: {
        //         content: " 二食堂 \n"+  res.data.result[1].num
        //         +" 人",
        //         padding: 10,
        //         display: 'ALWAYS',
        //         textAlign: 'center',
        //       },
        //   }],
    
        //   customCalloutMarkerIds: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        // })
      }

    })
  },



  changeMarkerId() {
    const customCalloutMarkerIds = this.data.customCalloutMarkerIds.slice()
    const top = customCalloutMarkerIds.shift()
    customCalloutMarkerIds.push(top)

    this.setData({
      customCalloutMarkerIds
    })
  },
  markertap(e) {
    console.log('@@@ markertap', e)
  },
  callouttap(e) {
    console.log('@@@ callouttap', e)
  },
  labeltap(e) {
    console.log('@@@ labeltap', e)
  },
 
  changeContent() {
    const num = Math.floor(Math.random() * 10)
    this.setData({num})
  },
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
      }
    })
  }


})
