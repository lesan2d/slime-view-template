<script setup lang="ts">
import { ref } from 'vue';
import { SvEditor, SvPanelMain, SvPanelNode } from 'slime-view';

const data = ref({
  type: 'div',
  props: {
    templateColumns: ['1fr'],
    style: {
      fontSize: '14px',
      marginLeft: '100px',
    },
  },
  children: [
    {
      type: 'div',
      children: [
        {
          type: 'h1',
          props: {
            innerHTML: '欢迎来到SlimeView低代码平台Demo',
          },
        },
        {
          type: 'p',
          props: {
            innerHTML: '该模板使用了 SlimeView 引擎进行开发，大部分内容都可以进行拖拽编辑，但仅限PC端使用，建议使用电脑浏览',
          },
        },
        {
          type: 'p',
          props: {
            innerHTML: 'SlimeView 是用 Vue3 实现的低代码引擎，是为了用于二次开发低代码平台而设计的，提供了低代码平台该有的拖拽/编辑组件、导入/导出组件代码等基础功能。',
          },
        },
      ],
    },
    {
      type: 'div',
      children: [
        {
          type: 'h2',
          props: {
            innerHTML: '功能演示',
          },
        },
        {
          type: 'div',
          children: [
            {
              type: 'h3',
              props: {
                innerHTML: '文本编辑',
              },
            },
            {
              type: 'p',
              props: {
                innerHTML: '目前暂时只提供简单的文本类属性编辑功能',
              },
            },
            {
              type: 'p',
              props: {
                id: 'demo-text',
                innerHTML: '鼠标点击此处，即可打开右侧操作面板，在输入框内可以编辑该内容',
                style: {
                  backgroundColor: '#F4F4F4',
                  padding: '30px 0',
                  color: 'red',
                }
              },
            },
          ],
        },
        {
          type: 'div',
          children: [
            {
              type: 'h3',
              props: {
                innerHTML: 'JS编辑',
              },
            },
            {
              type: 'p',
              props: {
                innerHTML: '同时还支持js事件，但是因为编辑后会将function类型改为string，所以无法使用，后续后更新专门的Form编辑组件',
              },
            },
            {
              type: 'button',
              props: {
                innerHTML: '点击重置上方文本',
                onClick: function () {
                  const p = document.getElementById('demo-text');
                  p.innerHTML = '鼠标点击此处，即可打开右侧操作面板，在输入框内可以编辑该内容';
                }
              },
            },
          ],
        },
        {
          type: 'div',
          children: [
            {
              type: 'h3',
              props: {
                innerHTML: '组件模板',
              },
            },
            {
              type: 'p',
              props: {
                innerHTML: '目前仅内置了一些简单的垃圾组件，后续将会支持通过JSON外部引入自定义组件，让你渲染自己开发的组件',
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  backgroundColor: '#F4F4F4',
                  padding: '10px 30px',
                  width: '100%',
                  height: '100px',
                }
              },
              children: [
                {
                  type: 'p',
                  props: {
                    innerHTML: '↓打开左侧面板，将需要的组件拖拽到这个位置，或排序在其前后位置，多自己试试吧！↓',
                  },
                },
              ],
            },
            {
              type: 'p',
              props: {
                innerHTML: '此外你还可以输入在线链接，加入一些你喜欢表情包',
              },
            },
            {
              type: 'img',
              props: {
                src: 'https://welfare-1258660077.cos.ap-guangzhou.myqcloud.com/img_1691488291850.gif',
              },
            },
            {
              type: 'p',
              props: {
                innerHTML: '体验完后别忘记了打开代码查看下源码，后续将会支持代码导入导出！',
              },
            },
          ],
        },
      ],
    },
  ],
});
</script>

<template>
  <SvEditor :data="data" />
  <SvPanelMain />
  <SvPanelNode />
</template>

<style scoped></style>
