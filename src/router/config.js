/*
 * @Date: 2020-07-02 16:24:34
 * @LastEditTime: 2020-07-24 17:25:21
 */
// layout下的子模块
import ChildLayout from "@/pages";
import Dashboard from "@/pages/dashboard";
import Pay from "@/pages/pay";
import Car from "@/pages/car";
import Message from "@/pages/message";

import ShopHome from "@/pages/shop/home";
import ShopItem from "@/pages/shop/item";
import PurchaseOrder from "@/pages/shop/purchaseOrder";
import ServiceOrder from "@/pages/shop/serviceOrder";

import FundHome from "@/pages/fund/home";
import CashFlow from "@/pages/fund/cashFlow";
import FinancialFlow from "@/pages/fund/financialFlow";
import FinancialRec from "@/pages/fund/financialRec";
import Recharge from "@/pages/fund/recharge";
import CashOut from "@/pages/fund/cashOut";
import RechargeSuccess from "@/pages/fund/success/recharge";
import CashOutSuccess from "@/pages/fund/success/cashOut";

import module_shop_menu_icon from "@/assets/images/global/module_shop_menu_icon.png";
import module_fund_menu_icon from "@/assets/images/global/module_fund_menu_icon.png";
import module_operations_menu_icon from "@/assets/images/global/module_operations_menu_icon.png";

// 动态路由
export const asyncRoutes = [
  {
    id: 0,
    title: "首页",
    path: "/admin/dashboard",
    component: Dashboard,
  },
  {
    id: 1,
    title: "权益商城",
    component: ChildLayout,
    path: "/admin/shop",
    icon: module_shop_menu_icon,
    children: [
      {
        id: 11,
        title: "权益商城",
        path: "/admin/shop/home",
        icon: "icon-gouwuche",
        component: ShopHome,
        isLeaf: true,
        isHome: true,
      },
      {
        id: 12,
        title: "采购管理",
        icon: "icon-shujuguanli",
        children: [
          {
            id: 121,
            title: "采购订单",
            path: "/admin/shop/purchaseOrder",
            component: PurchaseOrder,
            isLeaf: true,
          },
          {
            id: 122,
            title: "售后订单",
            path: "/admin/shop/serviceOrder",
            component: ServiceOrder,
            isLeaf: true,
          },
        ],
      },
      {
        id: 13,
        title: "品牌详情页",
        path: "/admin/shop/item",
        icon: "icon-gouwuche",
        component: ShopItem,
        isLeaf: true,
        hidden: true,
      },
    ],
  },
  {
    id: 2,
    title: "运营管理",
    component: ChildLayout,
    icon: module_operations_menu_icon,
    path: "/admin/operations",
    children: [
      {
        id: 21,
        title: "交易管理",
        icon: "icon-tongji",
        children: [
          {
            id: 211,
            title: "交易订单",
            path: "/admin/operations/dashboard",
            component: Dashboard,
            isLeaf: true,
          },
          {
            id: 212,
            title: "交易对账",
            path: "/admin/operations/dashboard",
            component: Dashboard,
            isLeaf: true,
          },
        ],
      },
      {
        id: 22,
        title: "业务管理",
        path: "/dashboard",
        icon: "icon-guanli",
        children: [
          {
            id: 221,
            title: "应用信息",
            path: "/dashboard",
            component: Dashboard,
            isLeaf: true,
          },
          {
            id: 222,
            title: "实名认证",
            path: "/dashboard",
            component: Dashboard,
            isLeaf: true,
          },
          {
            id: 223,
            title: "账号信息",
            path: "/dashboard",
            component: Dashboard,
            isLeaf: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "资金管理",
    component: ChildLayout,
    path: "/admin/fund",
    icon: module_fund_menu_icon,
    children: [
      {
        id: 31,
        title: "资金总览",
        path: "/admin/fund/home",
        icon: "icon-tongji",
        component: FundHome,
        isLeaf: true,
        isHome: true,
      },
      {
        id: 32,
        title: "充值提现",
        path: "/dashboard",
        icon: "icon-qiandai",
        children: [
          {
            id: 321,
            title: "充值",
            path: "/admin/fund/recharge",
            component: Recharge,
            isLeaf: true,
          },
          {
            id: 322,
            title: "提现",
            path: "/admin/fund/cashOut",
            component: CashOut,
            isLeaf: true,
          },
          {
            id: 323,
            title: "资金流水",
            path: "/admin/fund/cashFlow",
            component: CashFlow,
            isLeaf: true,
          },
          {
            id: 324,
            title: "充值成功",
            path: "/admin/fund/rechargeSuccess",
            component: RechargeSuccess,
            isLeaf: true,
            hidden: true,
          },
          {
            id: 325,
            title: "提现成功",
            path: "/admin/fund/cashOutSuccess",
            component: CashOutSuccess,
            isLeaf: true,
            hidden: true,
          },
        ],
      },
      {
        id: 33,
        title: "财务管理",
        icon: "icon-guanli",
        children: [
          {
            id: 331,
            title: "财务流水",
            path: "/admin/fund/financialFlow",
            component: FinancialFlow,
            isLeaf: true,
          },
          {
            id: 332,
            title: "财务对账",
            path: "/admin/fund/financialRec",
            component: FinancialRec,
            isLeaf: true,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "消息",
    path: "/admin/message",
    hidden: true,
    component: Message,
  },
  {
    id: 5,
    title: "购物车",
    path: "/admin/car",
    hidden: true,
    component: Car,
  },
  {
    id: 6,
    title: "支付",
    path: "/admin/pay",
    component: Pay,
    hidden: true,
  },
];
