import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import About from '@/pages/about/about'
import GoInCogrowth from '@/pages/about/goin_cogrowth'
import JoinUs from '@/pages/about/join_us'
import MarketAnalysis from '@/pages/about/market_analysis'
import NewsList from '@/pages/about/news_list'
import NewsDetail from '@/pages/about/news_detail'
import Ai from '@/pages/lab/ai'
import Lab from '@/pages/lab/lab'
import BrainCourse from '@/pages/lab/brain_course'
import Software from '@/pages/lab/software'
import BrainProduct from '@/pages/product/brain_product'
import Down from '@/pages/down/download'


import DefaultHeader from '@/components/default-header-bar'
import IndexFooter from '@/components/index-footer-bar'
import DefaultFooter from '@/components/default-footer-bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      components: {
        default: Index,
                      },
      meta: {
        title: '首页',
        nav: 1,
      }
    }, {
      path: '/lab',
      name: '脑科学实验室',
      components: {
        default: Lab,
        header: DefaultHeader,        footer: DefaultFooter      },meta: {
        title: '脑科学实验室',
        nav: 2,
      }
    }, {
      path: '/software',
      name: '软件系统',
      components: {
        default: Software,
        header: DefaultHeader,        footer: DefaultFooter      },meta: {
        title: '软件系统',
        nav: 2,
      }
    }, {
      path: '/ai',
      name: '硬件展示',
      components: {
        default: Ai,
        header: DefaultHeader,        footer: DefaultFooter      },meta: {
        title: '硬件展示',
        nav: 2,
      }
    }, {
      path: '/braincourse',
      name: '训练教程',
      components: {
        default: BrainCourse,
        header: DefaultHeader,        footer: DefaultFooter      },meta: {
        title: '训练教程',
        nav: 2,
      }
    }, {
      path: '/brainproduct',
      name: '脑控产品',
      components: {
        default: BrainProduct,
        header: DefaultHeader,        footer: DefaultFooter      },meta: {
        title: '脑控产品',
        nav: 3,
      }
    }, {
      path: '/goincogrowth',
      name: '走进酷成长',
      components: {
        default: GoInCogrowth,
        header: DefaultHeader,        footer: DefaultFooter      },meta: {
        title: '走进酷成长',
        nav: 4,
      }
    }, {
      path: '/about',
      name: '关于我们',
      components: {
        default: About,
                      },meta: {
        title: '关于我们',
        nav: 4,
      }
    }, {
      path: '/newslist',
      name: '新闻资讯',
      components: {
        default: NewsList,
        header: DefaultHeader,        footer: DefaultFooter      },meta: {
        title: '新闻资讯',
        nav: 4,
      }
    }, {
      path: '/newsdetail/:type/:id/',
      name: '新闻详情',
      components: {
        default: NewsDetail,
        header: DefaultHeader,        footer: DefaultFooter      },meta: {
        title: '新闻详情',
        nav: 4,
      }
    }, {
      path: '/marketanalysis',
      name: '市场分析',
      components: {
        default: MarketAnalysis,
        header: DefaultHeader,        footer: DefaultFooter      },meta: {
        title: '市场分析',
        nav: 4,
      }
    }, {
      path: '/joinus',
      name: '加入我们',
      components: {
        default: JoinUs,
        header: DefaultHeader,        footer: DefaultFooter      },meta: {
        title: '加入我们',
        nav: 4,
      }
    }, {
      path: '/down',
      name: '客户端下载',
      components: {
        default: Down,
        header: DefaultHeader,        footer: DefaultFooter      },meta: {
        title: '客户端下载',
        nav: 5,
      }
    }
  ]
})
