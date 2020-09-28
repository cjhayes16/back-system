/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const hiddenRouter = {
  path: '/hidden',
  component: Layout,
  redirect: '/hidden/hidden-Post',
  name: 'Hidden',
  meta: {
    title: '隐患',
    icon: 'table'
  },
  children: [
    {
      path: 'hidden-Post',
      component: () => import('@/views/hidden/hidden-Post'),
      name: 'hidden-Post',
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
