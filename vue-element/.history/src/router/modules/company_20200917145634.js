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
      path: 'basic-info',
      component: () => import('@/views/company/basic-info'),
      name: 'basic-info',
      meta: { title: '企业基本信息' }
    },
    {
      path: 'organizition',
      component: () => import('@/views/company/organizition'),
      name: 'organizition',
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
