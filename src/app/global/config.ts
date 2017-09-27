export const config =  {
    token : "EoNAuKmc34wpj9cTYKK1dVE3yE8=",
    pageSize : 10,
    base_api_host:"/SignManage",               //http://192.168.60.136:8080/platform
    role_fun:[
        {
            "abstract": true,
            "title": "个人中心",
            "icon": "icon-user",
            "name": "center",
            "url": "center",
            "level-1": true,
            "submenu": [
                {
                    "url": "/center/personal",
                    "title": "个人资料",
                    "level-2": true
                },{
                    "url": "/components/cards",
                    "title": "完善资料",
                    "name": "center.perfectdata",
                    "level-2": true
                }
            ]
        },{
            "abstract": true,
            "title": "活动管理",
            "icon": "fa fa-tachometer",
            "name": "activity",
            "url": "activity",
            "level-1": true,
            "submenu": [
                {
                    "url": "/activity/list",
                    "title": "发起的活动",
                    "name": "activity.list",
                    "level-2": true
                },
                {
                    "url": "/pages/login",
                    "title": "参与的活动",
                    "name": "activity.entry",
                    "level-2": true
                }
                ]
        },{
            "abstract": true,
            "title": "微信墙管理",
            "icon": "fa fa-google-wallet",
            "name": "signwall",
            "url": "signwall",
            "level-1": true,
            "submenu": [	            
                {
                    "url": "/pages/login",
                    "title": "背景管理",
                    "name": "signwall.bgImgList",
                    "level-2": true
                },	             
                {
                    "url": "/pages/login",
                    "title": "签到广告语管理",
                    "name": "signwall.signAdList",
                    "level-2": true
                },
                {
                    "url": "/pages/login",
                    "title": "中奖广告语管理",
                    "name": "signwall.prizeAdList",
                    "level-2": true
                }
                ]
        },
        {
            "abstract": true,
            "title": "我的场景",
            "icon": "fa fa-envelope-o",
            "name": "invitation",
            "url": "invitation",
            "level-1": true,
            "submenu": [
                {
                    "url": "/pages/login",
                    "title": "场景市场",
                    "name": "invitation.template",
                    "level-2": true
                },
                {
                    "url": "/pages/login",
                    "title": "我的场景列表",
                    "name": "invitation.list",
                    "level-2": true
                }
            ]
        }
    ]
};
