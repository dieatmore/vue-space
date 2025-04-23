import { defineAsyncComponent, h, render } from 'vue'

export const createLoading = () => {
  const loading = defineAsyncComponent(() => import('./LoadingVue.vue'))
  const vnode = h(loading)
  render(vnode, document.body)
  //close绑定vnode
  const close = () => {
    render(null, document.body)
  }
  return { close }
}
