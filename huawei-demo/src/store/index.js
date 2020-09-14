import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        ajax:[],
        ShoppingAjaxList:[
                           
    
                {
                    "id": "gouwuche1",
                    "name": "HUAWEI P40 Pro", 
                    "price": "￥6488", 
                    "avatar": require("../assets/shopping-cart/428_428_DE7F785A7E0C276D3A1F40A5C6D82B07D2AED60CE1F73795mp.png"),
                    "wholeName":"HUAWEI P40 Pro 5G 全网通 8GB+256GB(零度白)",
                    "subTitle":"零度白,5G全网通 8GB+256GB,官方标配",
                     "okSeen":true,
                     "shuliang":1,
                     "redInfo":["分期免息","赠送积分"],
                     "service":[
                         "无忧服务",
                         "碎屏保",
                         "延长保"
                     ],
                     "peiImage":require("../assets/pei/428_428_FF9B85501BF55D36F9777940BF989D4DA692B1979AB0A2C9mp.png"),
                     "peiNumber":1,
                     "peiName":"HUAWEI P40 Pro硅胶保护壳(墨蓝)",
                     "addnum":0
                }, 
                {
                    "id": "gouwuche2", 
                    "name": "荣耀30 Pro", 
                    "price": "￥3999", 
                    "avatar": require("../assets/shopping-cart/428_428_9C99CA5C6E5F7A5F813D26AA3D5B70022992EB1A4A10FC49mp.png"), 
                    "wholeName":"HUAWEI P40 Pro 5G 全网通 8GB+256GB(零度白)",
                    "subTitle":"零度白,5G全网通 8GB+256GB,官方标配",
                     "okSeen":true,
                     "shuliang":1,
                     "redInfo":["分期免息","赠送积分"],
                     "service":[
                         "无忧服务",
                         "碎屏保",
                         "延长保"
                     ],
                     "peiImage":require("../assets/pei/428_428_FF9B85501BF55D36F9777940BF989D4DA692B1979AB0A2C9mp.png"),
                     "peiNumber":1,
                     "peiName":"HUAWEI P40 Pro硅胶保护壳(墨蓝)",
                     "addnum":0
                }, 
                {
                    "id": "gouwuche3", 
                    "name": "Mate 30 Pro 5G", 
                    "price":"￥6399",
                    "avatar": require("../assets/shopping-cart/428_428_ACF04CEA5203ABB146D3CA5FBC29E737FAB3F8E8D961A164mp.png" ),
                    "wholeName":"HUAWEI P40 Pro 5G 全网通 8GB+256GB(零度白)",
                    "subTitle":"零度白,5G全网通 8GB+256GB,官方标配",
                     "okSeen":true,
                     "shuliang":1,
                     "redInfo":["分期免息","赠送积分"],
                     "service":[
                         "无忧服务",
                         "碎屏保",
                         "延长保"
                     ],
                     "peiImage":require("../assets/pei/428_428_FF9B85501BF55D36F9777940BF989D4DA692B1979AB0A2C9mp.png"),
                     "peiNumber":1,
                     "peiName":"HUAWEI P40 Pro硅胶保护壳(墨蓝)",
                     "addnum":0
                    
                },
                {
                    "id": "gouwuche4", 
                    "name": "荣耀X10", 
                    "price":"￥2199",
                    "avatar":require( "../assets/shopping-cart/428_428_F61B62BA5344C1B1973CBEF222B4697B588237E6E18B163Amp.png"),
                    "wholeName":"HUAWEI P40 Pro 5G 全网通 8GB+256GB(零度白)",
                    "subTitle":"零度白,5G全网通 8GB+256GB,官方标配",
                     "okSeen":true,
                     "shuliang":1,
                     "redInfo":["分期免息","赠送积分"],
                     "service":[
                         "无忧服务",
                         "碎屏保",
                         "延长保"
                     ],
                     "peiImage":require("../assets/pei/428_428_FF9B85501BF55D36F9777940BF989D4DA692B1979AB0A2C9mp.png"),
                     "peiNumber":1,
                     "peiName":"HUAWEI P40 Pro硅胶保护壳(墨蓝)",
                     "addnum":0
                },
                {
                    "id": "gouwuche5", 
                    "name": "HUAWEI nova 7 SE 5G", 
                    "price":"￥2399",
                    "avatar":require("../assets/shopping-cart/428_428_CA16AD0891C031C45C53FB3909E9FF609CCA6C46C2581A76mp.png" ),
                    "wholeName":"HUAWEI P40 Pro 5G 全网通 8GB+256GB(零度白)",
                    "subTitle":"零度白,5G全网通 8GB+256GB,官方标配",
                     "okSeen":true,
                     "shuliang":1,
                     "redInfo":["分期免息","赠送积分"],
                     "service":[
                         "无忧服务",
                         "碎屏保",
                         "延长保"
                     ],
                     "peiImage":require("../assets/pei/428_428_FF9B85501BF55D36F9777940BF989D4DA692B1979AB0A2C9mp.png"),
                     "peiNumber":1,
                     "peiName":"HUAWEI P40 Pro硅胶保护壳(墨蓝)",
                     "addnum":0
                },
                {
                    "id": "gouwuche6", 
                    "name": "荣耀30S", 
                    "price":"￥2399",
                    "avatar": require("../assets/shopping-cart/428_428_A1DCE56BD2CE2C267A33622E9A4E5BD013370AD11DCA09C8mp.png"),
                    "wholeName":"HUAWEI P40 Pro 5G 全网通 8GB+256GB(零度白)",
                    "subTitle":"零度白,5G全网通 8GB+256GB,官方标配",
                     "okSeen":true,
                     "shuliang":1,
                     "redInfo":["分期免息","赠送积分"],
                     "service":[
                         "无忧服务",
                         "碎屏保",
                         "延长保"
                     ],
                     "peiImage":require("../assets/pei/428_428_FF9B85501BF55D36F9777940BF989D4DA692B1979AB0A2C9mp.png"),
                     "peiNumber":1,
                     "peiName":"HUAWEI P40 Pro硅胶保护壳(墨蓝)",
                     "addnum":0
                }
                    
                ],
        shoppingList:[],
        melist:[{
        "phone":"13732623230",
        "jifen":0,
        "youhui":0,
        "daijin":"0.00",
        "login":false
        }],
        uid:0,
        token:""
        // addnum:0,
            
        },
    mutations:{
        addShop(state,id)
        {
            
            
            let index = 0;
            for(let i=0;i<this.state.ShoppingAjaxList.length;i++)
            {
                if (this.state.ShoppingAjaxList[i].id == id)
                {
                    let index = i;
                }
            };
            this.state.shoppingList.push(this.state.ShoppingAjaxList[index]);
           
            // this.state.shoppingList.push(this.state.ShoppingAjaxList[1]);
          
            // console.log(this.state.shoppingList);
        },
        deleShop(state)
        {
            console.log("delete up");
            console.log(this.state.shoppingList);
            for(let i=0;i<this.state.shoppingList.length;i++)
            {
                if (this.state.shoppingList[i].okSeen==true)
                {
                    this.state.shoppingList.splice(i,1);
                    i--;
                    
                    console.log("addnum--");
                    
                    console.log("=========")
                    
                }
            }
            
            console.log("delete")
            console.log(this.state.shoppingList);
            console.log("addnum");
            
            console.log("==========")
            
        }

    }
})

export default store;