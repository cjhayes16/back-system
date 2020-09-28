/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const companyRouter = {
  path: '/company',
  component: Layout,
  redirect: '/company/basic-info',
  name: 'Company',
  meta: {
    title: '企业管理',
    icon: 'table'
  },
  children: [
    {
      path: 'hidden-post',
      component: () => import('@/views/hidden/hidden-post'),
      name: 'hidden-post',
      meta: { title: '隐患申报' }
    },
    {
      path: 'hidden-check',
      component: () => import('@/views/hidden/hidden-check'),
      name: 'hidden-check',
      meta: { title: '隐患审核' }
    },
    {
      path: 'hidden-reform',
      component: () => import('@/views/hidden/hidden-reform'),
      name: 'hidden-reform',
      meta: { title: '隐患整改' }
    }
  ]
}
export default hiddenRouter
