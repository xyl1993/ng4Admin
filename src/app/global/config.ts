export const config =  {
    token : "EoNAuKmc34wpj9cTYKK1dVE3yE8=",
    segmentSize : 10,
    currentPage:1,
    startFrom : 1,
    base_api_host:"/SignManage",               //http://192.168.60.136:8080/platform
    custom_master_id:[1,464,128],//定制菜单显示人的ID集合
    role_fun:[
        {
            "title": "个人中心",
            "icon": "icon-user",
            "url": "center",
            "submenu": [
                {
                    "url": "/center/personal",
                    "title": "个人资料",
                },{
                    "url": "/components/cards",
                    "title": "完善资料",
                }
            ]
        },{
            "title": "活动管理",
            "icon": "fa fa-tachometer",
            "url": "activity",
            "submenu": [
                {
                    "url": "/activity/edit",
                    "title": "发起活动",
                },
                {
                    "url": "/activity/list",
                    "title": "发起的活动",
                },
                {
                    "url": "/activity/entry",
                    "title": "参与的活动",
                }
                ]
        },{
            "title": "微信墙管理",
            "icon": "fa fa-google-wallet",
            "url": "signwall",
            "submenu": [	            
                {
                    "url": "/pages/login",
                    "title": "背景管理",
                },	             
                {
                    "url": "/pages/login",
                    "title": "签到广告语管理",
                },
                {
                    "url": "/pages/login",
                    "title": "中奖广告语管理",
                }
                ]
        },
        {
            "title": "我的场景",
            "icon": "fa fa-envelope-o",
            "url": "invitation",
            "submenu": [
                {
                    "url": "/pages/login",
                    "title": "场景市场",
                },
                {
                    "url": "/pages/login",
                    "title": "我的场景列表",
                }
            ]
        }
    ],
    admin_role_fun:[
        {
            "title": "系统管理",
            "icon": "fa fa-list",
            "url": "system",
            "submenu": [
                {
                    "url": "system.user",
                    "title": "用户管理",
                },
                {
                    "url": "system.feedback",
                    "title": "反馈信息",
                }
                ]
        },
        {
            "title": "报表统计",
            "icon": "fa fa-signal",
            "url": "charts",
            "submenu": [
                {
                    "url": "charts.map",
                    "title": "全国分布图",
                },
                {
                    "url": "charts.source",
                    "title": "用户来源统计",
                }
            ]
        },
        {
            "title": "场景管理",
            "icon": "fa fa-glass",
            "name": "scene",
            "url": "scene",
            "submenu": [
                {
                    "url": "scene.category",
                    "title": "场景分类",
                },
                {
                    "url": "scene.bgmusic",
                    "title": "背景音乐",
                },
                /*{
                    "url": "scene.templateEdit",
                    "title": "编辑模板",
                    "name": "scene.templateEdit",
                    "level-2": true
                },*/
                {
                    "url": "scene.template",
                    "title": "模板管理",
                }
            ]
        }    
    ],
    custom_role_fun:[
		{
		    "title": "定制信息管理",
		    "icon": "fa fa-cog",
		    "url": "custom",
		    "submenu": [
				{
				    "url": "custom.houseInfo",
				    "title": "装修信息",
				}
            ]
		}    
    ]
};
