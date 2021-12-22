<template>
  <div>
    <!-- 编辑模式 -->
    <!--    <img v-if="editorMode === 'edit' && items.length" :src="items[activeIndex].value"  width="100%" height="100%" />-->
    <!--    <swipe v-else :autoplay="interval" indicator-color="red">-->
    <!--      <swipe-item v-for="(item, index) in items" :key="index"><img :src="item.value" width="100%" height="100%" /></swipe-item>-->
    <!--    </swipe>-->
    <v-calendar-mobile
        :key="mode"
        :changeMode="true"
        :mode="mode">
    </v-calendar-mobile>
    日历组件
  </div>
</template>

<script>

export default {
  name: 'h5-calendar',
  // default icon
  // 默认 icon，配置文档参见：https://github.com/luban-h5/vue-cli-plugin-lbhc/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6-%E8%84%9A%E6%89%8B%E6%9E%B6%E7%AF%87%EF%BC%9Aicon-%E5%8F%82%E6%95%B0
  icon: 'thumbs-o-up',
  props: {
    /**
     * editorMode 属性文档链接：
     * https://github.com/luban-h5/vue-cli-plugin-lbhc/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6-%E5%B1%9E%E6%80%A7%E6%B3%A8%E5%85%A5%E7%AF%87:-editorMode(%E7%BC%96%E8%BE%91%E5%99%A8%E6%A8%A1%E5%BC%8F)
     *
     * #!zh: 编辑器当前模式
     *  通常用在轮播图、单选、多选、提交按钮、视频
     *  因为他们在编辑模式和预览模式下有不同的表现
     *  preview: 预览模式
     *  edit:   编辑模式
     *
     * #!en: current mode for editor
     *  preview: preview mode
     *  edit:    edit mode
     */
    editorMode: {
      type: String,
      default: 'edit'
    },
    changeMode: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'week',
      editor: {
        custom: true,
        type: 'a-radio-group',
        label: '模式',
        options: [
          {
            label: '周',
            value: 'week'
          },
          {
            label: '月',
            value: 'month'
          }
        ]
      }
    }
  },
  editorConfig: {
    components: {}
  },
  computed: {
    key () {
      return Date.now() + '_' + this.mode
    }
  },
  mounted () {
  },
  methods: {}
}
</script>
