import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routes = [{
		path: "/login",
		component: () => import("./views/login")
	},
	{
		path: "/",
		component: () => import("./views/login")
	},
	{
		path: "/homePage",
		component: () => import("./views/homePage"),
		children: [{
				path: "page1",
				component: () => import("./components/page1"),
				children: [{
						path: "comType",
						component: () => import("./components/comType"),
					},
					{
						path: "brand",
						component: () => import("./components/brand"),
					},
					{
						path: "/",
						component: () => import("./components/index"),
					}, {
						path: "kucuna",
						component: () => import("./components/kucuna"),
					}, {
						path: "kucunb",
						component: () => import("./components/kucunb"),
					}, {
						path: "kucunc",
						component: () => import("./components/kucunc"),
					}, {
						path: "kucund",
						component: () => import("./components/kucund"),
					}, {
						path: "kucune",
						component: () => import("./components/kucune"),
					}, {
						path: "kucunf",
						component: () => import("./components/kucunf"),
					}, {
						path: "cuxiaoa",
						component: () => import("./components/cuxiaoa"),
					}, {
						path: "cuxiaob",
						component: () => import("./components/cuxiaob"),
					}, {
						path: "caigoua",
						component: () => import("./components/caigoua"),
					}, {
						path: "caigoub",
						component: () => import("./components/caigoub"),
					}, {
						path: "xiangqing",
						component: () => import("./components/xiangqing"),
					}, {
						path: "dela",
						component: () => import("./components/dela")
					}, {
						path: "caigouc",
						component: () => import("./components/caigouc")
					}, {
						path: "shenhe",
						component: () => import("./components/shenhe")
					}, {
						path: "xiugai",
						component: () => import("./components/xiugai")
					},{
						path: "shangpingb",
						component: () => import("./components/shangpingb")
					},{
						path: "shangpingc",
						component: () => import("./components/shangpingc")
					},{
						path: "shangpinga",
						component: () => import("./components/shangpinga")
					},{
						path: "shangpingd",
						component: () => import("./components/shangpingd")
					},{
						path: "shangpinge",
						component: () => import("./components/shangpinge")
					},{
						path: "shangpingf",
						component: () => import("./components/shangpingf")
					},{
						path: "huiyuana",
						component: () => import("./components/huiyuana")
					},{
						path: "huiyuanb",
						component: () => import("./components/huiyuanb")
					},{
						path: "lingshoua",
						component: () => import("./components/lingshoua")
					},{
						path: "lingshoub",
						component: () => import("./components/lingshoub")
					},{
						path: "lingshouc",
						component: () => import("./components/lingshouc")
					},{
						path: "lingshoud",
						component: () => import("./components/lingshoud")
					},{
						path: "lingshoue",
						component: () => import("./components/lingshoue")
					},{
						path: "lingshouf",
						component: () => import("./components/lingshouf")
					},{
						path: '/page1',
						redirect: '/page1/index'
					}
				]
			},
			{
				path: "page2",
				component: () => import("./components/page2"),
				children: [{
					path: "/",
					component: () => import("./components/index")
				}, {
					path: '/page2',
					redirect: '/page2/index'
				}]
			}, {
				path: '/homePage',
				redirect: '/homePage/page1'
			}

		]
	}, {
		path: "/top",
		component: () => import("./components/top")
	}, {
		path: "/nav",
		component: () => import("./components/nav")
	}, {
		path: "/nab",
		component: () => import("./components/nab")
	}
];
const router = new Router({
	routes
});

// router.beforeEach((to, from, next) => {
//   let abc = sessionStorage.getItem("login");
//   if (abc) {
//     next();
//   } else {
//     if (to.path === "/login") {
//       next();
//     } else {
//       next("/login");
//     }
//   }
// });
export default router;
