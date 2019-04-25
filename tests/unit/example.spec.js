import { shallowMount } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'

describe('ProductList.vue', () => {
  it('Matches snapshot', () => {
    const wrapper = shallowMount(ProductList)
    expect(wrapper).toMatchSnapshot()
  })
})
