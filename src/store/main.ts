import { defineStore } from 'pinia'
import type { baseComponent } from '../modules/component/index'
import { baseComList } from '../modules/component/index'

export const useMain = defineStore('main', {
  state: () => {
    return {
      backColor: '#fff', // 页面背景颜色
      pageHeight: 650, // 页面高度
      template: [] as baseComponent[], // 组件数组
      moveIndex: 0, // 当前拖动类型 1-8 坐标点 9 底部高度条 10 按住元素
      acIdx: [] as number[], // 选中的页面组件
      lockCompId: [] as string[], // 锁住的元素id
      isCtrl: false, // 当前是否按下ctrl键
    }
  },
  getters: {
    acTEmpName(state) {
      return state.acIdx.length === 1 ? state.template[state.acIdx[0]].name : ''
    },
    acTempCss(state) {
      return state.acIdx.length === 1 ? state.template[state.acIdx[0]].cssModule : {}
    },
    acTempData(state) {
      return state.acIdx.length === 1 ? state.template[state.acIdx[0]].staticData : {}
    },
  },
  actions: {
    getTempData() {

    },
    addComp(name: string, data?: any) {
      const dom = baseComList(name, this.template.length + 1)
      if (dom) {
        if (data) {
          dom.cssModule.top = data.top - dom.cssModule.height / 2
          dom.cssModule.left = data.left - dom.cssModule.width / 2
        }
      }
      this.template.push({ ...dom! })
    },
    deleteComp() {
    },
    // 切换拖拽标识
    changeMoveIndex(index: number) {
      if (this.moveIndex === 0)
        this.moveIndex = index

      if (index === 0)
        this.moveIndex = 0
    },
    toggleComp(index: number) {
      // 按住ctrl就是多选
      if (this.isCtrl) {
        if (!this.acIdx.includes(index))
          this.acIdx.push(index)
      }
      else {
        this.acIdx = [index]
      }
    },

  },
})

