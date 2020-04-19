
import { shallowMount } from '@vue/test-utils';
import Button from '@/packages/Button/Button.vue';
import Icon from '@/packages/Icon/Icon.vue';
import { expect } from 'chai';

describe('Button.vue', () => {  //划分作用域
  it('存在.', () => {
      expect(Button).to.be.ok // 不是null,undefined
  });
  it('测试button能否正常显示slot中的内容', () => {
   const wrapper =  shallowMount(Button,{
      slots:{
        default:'y-ui'
      }
    })
    expect(wrapper.text()).to.equal('y-ui');
  });
  it('测试button能否正常设置type属性', () => {
   const wrapper =  shallowMount(Button,{
      propsData: {
        type: 'primary',
      },
    });
    expect(wrapper.classes()).to.be.an('array').that.include('y-button-primary');
  });
  it('测试button能否正常设置disabled属性', () => {
   const wrapper =  shallowMount(Button,{
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.classes()).to.be.an('array').that.include('is-disabled');
  });
  it('测试button能否正常设置round属性', () => {
   const wrapper =  shallowMount(Button,{
      propsData: {
        round: true,
      },
    });
    expect(wrapper.classes()).to.be.an('array').that.include('is-round');
  });
  it('测试button能否正常设置icon属性', () => {
   const wrapper =  shallowMount(Button,{
      propsData: {
        icon: 'settings',
      },
      stubs:{
       'y-icon':Icon
      }
    });
    const useElement = wrapper.vm.$el.querySelector('use');
    const href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-settings');
  });
  it('测试button能否正常设置iconPosition属性', () => {
   const wrapper =  shallowMount(Button,{
      attachToDocument:true, // 确保组件渲染完成可以获取到样式。
      propsData: {
        icon: 'settings',
        iconPosition:'right'
      },
      stubs:{
       'y-icon':Icon
      }
    });
    expect(wrapper.classes()).include('y-button-right');
    const icon = wrapper.vm.$el.querySelector('svg');
    expect(getComputedStyle(icon).order).to.eq('2');
  });
  it('测试button能否正常设置iconPosition属性', () => {
   const wrapper =  shallowMount(Button,{
      attachToDocument:true, // 确保组件渲染完成可以获取到样式。
      propsData: {
        icon: 'settings',
        iconPosition:'right'
      },
      stubs:{
       'y-icon':Icon
      }
    });
    expect(wrapper.classes()).include('y-button-right');
    const icon = wrapper.vm.$el.querySelector('svg');
    expect(getComputedStyle(icon).order).to.eq('2');
  });
  it('测试button能否正常触发点击事件', () => {
   const wrapper =  shallowMount(Button);
   wrapper.find('button').trigger('click');
   expect(wrapper.emitted('click').length).to.eq(1);
  });
})
