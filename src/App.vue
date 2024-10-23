<script setup lang="ts">
import { ref } from 'vue';
import { SvEditor, SvPanelMain, SvPanelNode } from 'slime-view';

const radioGroupValue = ref('Normal');

const data = {
  type: 'div',
  props: {
    templateColumns: ['1fr'],
    style: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '14px',
      maxWidth: '768px',
      height: 'calc(100% - 40px)',
      overflowY: 'scroll',
      margin: '20px 0',
      padding: '15px',
      boxShadow: '0 0 10px 2px rgb(from var(--base-color-lighter-inverse) r g b / 30%)',
      borderRadius: '10px',
      backgroundColor: 'var(--base-color-lighter)',
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
          type: 'div',
          children: [
            {
              type: 'span',
              props: {
                innerHTML: '示例源代码请点击',
              },
            },
            {
              type: 'a',
              props: {
                innerHTML: '此处',
                href: 'https://github.com/lesan2d/slime-view-template/blob/main/src/App.vue',
                target: '_blank',
                style: {
                  '--s-button-padding': 0,
                  'text-decoration-line': 'underline',
                },
              },
            },
            {
              type: 'span',
              props: {
                innerHTML: '。',
              },
            },
          ],
        },
        {
          type: 'p',
          props: {
            innerHTML: '此模板采用SlimeView引擎开发，大部分内容支持拖拽编辑，仅限PC端，建议电脑浏览。',
          },
        },
        {
          type: 'p',
          props: {
            innerHTML: 'SlimeView 是用 Vue3 实现的低代码引擎，是为了用于二次开发低代码平台而设计的，提供了低代码平台该有的拖拽/编辑组件、导入/导出组件代码等基础功能。',
          },
        },
        {
          type: 'p',
          props: {
            innerHTML: '当前开发内容使用简易Markdown模拟示例介绍，此引擎已包含多数核心功能，未来将支持完整网站或系统项目构建。',
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
                innerHTML: '#文本编辑',
              },
            },
            {
              type: 'p',
              props: {
                innerHTML: '目前仅支持基础的文本属性编辑功能。',
              },
            },
            {
              type: 'p',
              props: {
                innerHTML: '点击这里，右侧操作面板将展开，您可以在输入框中编辑相应内容。',
                style: {
                  backgroundColor: 'var(--base-color-light)',
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
                innerHTML: '#JavaScript支持',
              },
            },
            {
              type: 'h4',
              props: {
                innerHTML: 'Vue v-model',
              },
            },
            {
              type: 'p',
              props: {
                innerHTML: '使用 Vue3 JSX 实现，支持大部分渲染函数语法，通过闭包访问 ref 值实现一些 JavaScript编程。',
              },
            },
            {
              type: 'p',
              props: {
                innerHTML: '下面使用 s-radio-group 组件演示 v-model 的用法，完整示例代码请查看仓库。',
              },
            },
            {
              type: 'SRadioGroup',
              props: {
                modelValue: radioGroupValue,
                'onUpdate:modelValue': (value: any) => {
                  radioGroupValue.value = value;
                  const key = radioGroupValue.value === 'Dark' ? 'add' : 'remove';
                  document.documentElement.classList[key]('dark');
                },
                class: ['flex', 'items-center'],
              },
              slots: {
                default: [
                  {
                    type: 'span',
                    props: {
                      innerHTML: '主题切换：',
                    },
                  },
                  {
                    type: 'SRadio',
                    props: {
                      value: 'Normal',
                    },
                    slots: {
                      default: {
                        type: 'span',
                        props: {
                          innerHTML: '正常主题',
                        },
                      },
                    },
                  },
                  {
                    type: 'SRadio',
                    props: {
                      value: 'Dark',
                    },
                    slots: {
                      default: {
                        type: 'span',
                        props: {
                          innerHTML: '暗黑主题',
                        },
                      },
                    },
                  },
                ]
              }
            },
            {
              type: 'p',
              children: [
                {
                  type: 'span',
                  props: {
                    innerHTML: '当前值：',
                  },
                },
                {
                  type: 'span',
                  props: {
                    innerHTML: radioGroupValue,
                  },
                }
              ],
            },
            {
              type: 'p',
              props: {
                innerHTML: '大致代码：',
              },
            },
            {
              type: 'pre',
              props: {
                style: {
                  padding: '5px 10px',
                  backgroundColor: 'var(--color-bg)',
                },
                innerHTML: `const radioGroupValue = ref('A');

const node = {
  type: 'SRadioGroup',
  props: {
    modelValue: radioGroupValue,
    'onUpdate:modelValue': (value: any) => {
      radioGroupValue.value = value;
      const key = radioGroupValue.value === 'Dark' ? 'add' : 'remove';
      document.documentElement.classList[key]('dark');
    },
    class: ['flex', 'items-center'],
  },
  slots: { default: [...] },
};
`,
              },
            },
            {
              type: 'h4',
              props: {
                innerHTML: 'Component Event',
              },
            },
            {
              type: 'p',
              props: {
                innerHTML: 'Vue3 JSX 组件事件用法示例<br/>点击下方按钮，显示当前主题模式',
              },
            },
            {
              type: 'SButton',
              props: {
                type: 'primary',
                onClick: () => {
                  window.alert(`当前主题为: {{ ${radioGroupValue.value} }}`);
                }
              },
              slots: {
                default: {
                  type: 'span',
                  props: { innerHTML: 'alert', },
                },
              }
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
                innerHTML: '目前已内置一些基础组件，未来将支持通过 JSON 外部导入自定义组件，渲染自主开发的组件。',
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  backgroundColor: 'var(--base-color-light)',
                  padding: '10px 30px',
                  width: '100%',
                  height: '100px',
                }
              },
              children: [
                {
                  type: 'p',
                  props: {
                    innerHTML: '↓点击左侧面板，把需要的组件拖拽至此处，或调整它们之间的顺序，多自己试试吧！↓',
                  },
                },
              ],
            },
            {
              type: 'p',
              props: {
                innerHTML: '此外，您还可以更改下方图片链接，替换自己喜欢的表情包。',
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
                innerHTML: '体验结束后，别忘了查看源代码，后续将支持代码的导入与导出功能！',
              },
            },
          ],
        },
      ],
    },
  ],
};
</script>

<template>
  <SvEditor :data="data" />
  <SvPanelMain />
  <SvPanelNode />
</template>

<style>
body {
  margin: 0;
}
</style>
