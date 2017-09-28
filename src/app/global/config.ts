export const config =  {
    token : "EoNAuKmc34wpj9cTYKK1dVE3yE8=",
    pageSize : 10,
    base_api_host:"/SignManage",               //http://192.168.60.136:8080/platform
    custom_master_id:[1,464,128],//定制菜单显示人的ID集合
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
    ],
    admin_role_fun:[
        {
            "abstract": true,
            "title": "系统管理",
            "icon": "fa fa-list",
            "name": "system",
            "url": "system",
            "level-1": true,
            "submenu": [
                {
                    "url": "system.user",
                    "title": "用户管理",
                    "name": "system.user",
                    "level-2": true
                },
                {
                    "url": "system.feedback",
                    "title": "反馈信息",
                    "name": "system.feedback",
                    "level-2": true
                }
                ]
        },
        {
            "abstract": true,
            "title": "报表统计",
            "icon": "fa fa-signal",
            "name": "charts",
            "url": "charts",
            "level-1": true,
            "submenu": [
                {
                    "url": "charts.map",
                    "title": "全国分布图",
                    "name": "charts.map",
                    "level-2": true
                },
                {
                    "url": "charts.source",
                    "title": "用户来源统计",
                    "name": "charts.source",
                    "level-2": true
                }
                ]
        },
        {
            "abstract": true,
            "title": "场景管理",
            "icon": "fa fa-glass",
            "name": "scene",
            "url": "scene",
            "level-1": true,
            "submenu": [
                {
                    "url": "scene.category",
                    "title": "场景分类",
                    "name": "scene.category",
                    "level-2": true
                },
                {
                    "url": "scene.bgmusic",
                    "title": "背景音乐",
                    "name": "scene.bgmusic",
                    "level-2": true
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
                    "name": "scene.template",
                    "level-2": true
                }
                ]
        }    
    ],
    custom_role_fun:[
		{
		    "abstract": true,
		    "title": "定制信息管理",
		    "icon": "fa fa-cog",
		    "name": "custom",
		    "url": "custom",
		    "level-1": true,
		    "submenu": [
				{
				    "url": "custom.houseInfo",
				    "title": "装修信息",
				    "name": "custom.houseInfo",
				    "level-2": true
				}
		        ]
		}    
    ]
};
