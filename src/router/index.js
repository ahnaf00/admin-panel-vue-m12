import { createRouter, createWebHistory } from 'vue-router'
import TableView from '../views/TableView.vue'
// import ToastView from '../views/ToastView.vue'
// import ChartView from '../views/ChartView.vue'
// import RichTextView from "../views/RichTextView.vue";
// import ContentLoaderView from "../views/ContentLoaderView.vue";
// import CircleProgressView from "../views/CircleProgressView.vue";
import Product from "../components/Products/Product.vue";
import Shop from "../components/Products/Shop.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TableView
    },
    // {
    //   path: '/toast',
    //   name: 'toast',
    //   component:ToastView
    // },
    // {
    //   path: '/chart',
    //   name: 'chart',
    //   component:ChartView
    // },
    // {
    //   path: '/rich-text',
    //   name: 'rich-text',
    //   component:RichTextView
    // },
    // {
    //   path: '/loader',
    //   name: 'loader',
    //   component:ContentLoaderView
    // },
    // {
    //   path: '/circle-progress',
    //   name: 'circle-progress',
    //   component:CircleProgressView
    // },
    {
      path: '/products',
      name: 'products',
      component:Product
    },
    {
      path:"/products/:id", components:
      {
          default:Shop,

      },name: 'product'
  },
  ]
})

export default router