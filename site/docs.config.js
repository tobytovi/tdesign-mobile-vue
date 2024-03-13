export const docs = [
  {
    title: '开始',
    titleEn: 'Start',
    type: 'document', // 普通文档
    children: [
      {
        title: '快速开始',
        titleEn: 'Getting Started',
        name: 'getting-started',
        path: '/mobile-vue/getting-started',
        component: () => import('@docs/getting-started.md'),
        componentEn: () => import('@docs/getting-started.en-US.md'),
      },
      {
        title: '更新日志',
        titleEn: 'CHANGELOG',
        name: 'changelog',
        path: '/mobile-vue/changelog',
        component: () => import('@/../CHANGELOG.md'),
      },
      {
        title: '组件概览',
        titleEn: 'Overview',
        name: 'overview',
        path: '/mobile-vue/overview',
        component: () => import('@/_common/docs/mobile/overview.md'),
        componentEn: () => import('@/_common/docs/mobile/overview.en-US.md'),
      },
    ],
  },
  {
    title: '全局配置',
    titleEn: 'Global Config',
    type: 'component',
    children: [
      {
        title: '全局特性配置',
        titleEn: 'Global Configuration',
        name: 'config-provider',
        path: '/mobile-vue/components/config-provider',
        component: () => import('@/config-provider/config-provider.md'),
        componentEn: () => import('@/config-provider/config-provider.en-US.md'),
      },
    ],
  },
  {
    title: '基础组件',
    titleEn: 'Base',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Button 按钮',
        titleEn: 'Button',
        name: 'button',
        path: '/mobile-vue/components/button',
        component: () => import('@/button/button.md'),
        componentEn: () => import('@/button/button.en-US.md'),
      },
      {
        title: 'Divider 分割符',
        titleEn: 'Divider',
        name: 'divider',
        path: '/mobile-vue/components/divider',
        component: () => import('@/divider/divider.md'),
        componentEn: () => import('@/divider/divider.en-US.md'),
      },
      {
        title: 'Fab 悬浮按钮',
        titleEn: 'Fab',
        name: 'fab',
        path: '/mobile-vue/components/fab',
        component: () => import('@/fab/fab.md'),
        componentEn: () => import('@/fab/fab.en-US.md'),
      },
      {
        title: 'Icon 图标',
        titleEn: 'Icon',
        name: 'icon',
        path: '/mobile-vue/components/icon',
        component: () => import('@/icon/icon.md'),
        componentEn: () => import('@/icon/icon.en-US.md'),
      },
      {
        title: 'Link 链接',
        titleEn: 'Link',
        name: 'link',
        path: '/mobile-vue/components/link',
        component: () => import('@/link/link.md'),
        componentEn: () => import('@/link/link.en-US.md'),
      },
    ],
  },
  {
    title: '导航',
    titleEn: 'Navigation',
    type: 'component',
    children: [
      {
        title: 'BackTop 返回顶部',
        titleEn: 'BackTop',
        name: 'back-top',
        meta: { docType: 'base' },
        path: '/mobile-vue/components/back-top',
        component: () => import('@/back-top/back-top.md'),
        componentEn: () => import('@/back-top/back-top.en-US.md'),
      },
      {
        title: 'Drawer 抽屉',
        titleEn: 'Drawer',
        name: 'drawer',
        path: '/mobile-vue/components/drawer',
        component: () => import('@/drawer/drawer.md'),
        componentEn: () => import('@/drawer/drawer.en-US.md'),
      },
      {
        title: 'Indexes 索引',
        titleEn: 'Indexes',
        name: 'indexes',
        path: '/mobile-vue/components/indexes',
        component: () => import('@/indexes/indexes.md'),
        componentEn: () => import('@/indexes/indexes.en-US.md'),
      },
      {
        title: 'Navbar 导航条',
        titleEn: 'Navbar',
        name: 'navbar',
        path: '/mobile-vue/components/navbar',
        component: () => import('@/navbar/navbar.md'),
        componentEn: () => import('@/navbar/navbar.en-US.md'),
      },
      {
        title: 'SideBar 侧边栏',
        titleEn: 'SideBar',
        name: 'side-bar',
        path: '/mobile-vue/components/side-bar',
        component: () => import('@/side-bar/side-bar.md'),
        componentEn: () => import('@/side-bar/side-bar.en-US.md'),
      },
      {
        title: 'Steps 步骤条',
        titleEn: 'Steps',
        name: 'steps',
        path: '/mobile-vue/components/steps',
        component: () => import('@/steps/steps.md'),
        componentEn: () => import('@/steps/steps.en-US.md'),
      },
      {
        title: 'TabBar 标签栏',
        titleEn: 'TabBar',
        name: 'tab-bar',
        path: '/mobile-vue/components/tabbar',
        component: () => import('@/tab-bar/tab-bar.md'),
        componentEn: () => import('@/tab-bar/tab-bar.en-US.md'),
      },
      {
        title: 'Tabs 选项卡',
        titleEn: 'Tabs',
        name: 'tabs',
        path: '/mobile-vue/components/tabs',
        component: () => import('@/tabs/tabs.md'),
        componentEn: () => import('@/tabs/tabs.en-US.md'),
      },
    ],
  },
  {
    title: '输入',
    titleEn: 'Form',
    type: 'component',
    children: [
      {
        title: 'Form 表单',
        titleEn: 'Form',
        name: 'form',
        path: '/mobile-vue/components/form',
        component: () => import('@/form/form.md'),
        componentEn: () => import('@/form/form.en-US.md'),
      },
      {
        title: 'Calendar 日历',
        titleEn: 'Calendar',
        name: 'calendar',
        path: '/mobile-vue/components/calendar',
        component: () => import('@/calendar/calendar.md'),
        componentEn: () => import('@/calendar/calendar.en-US.md'),
      },
      {
        title: 'CheckBox 复选框',
        titleEn: 'CheckBox',
        name: 'checkbox',
        path: '/mobile-vue/components/checkbox',
        component: () => import('@/checkbox/checkbox.md'),
        componentEn: () => import('@/checkbox/checkbox.en-US.md'),
      },
      {
        title: 'Input 输入框',
        titleEn: 'Input',
        name: 'input',
        path: '/mobile-vue/components/input',
        component: () => import('@/input/input.md'),
        componentEn: () => import('@/input/input.en-US.md'),
      },
      {
        title: 'Textarea 多行输入框',
        titleEn: 'Textarea',
        name: 'textarea',
        path: '/mobile-vue/components/textarea',
        component: () => import('@/textarea/textarea.md'),
        componentEn: () => import('@/textarea/textarea.en-US.md'),
      },
      {
        title: 'Picker 选择器',
        titleEn: 'Picker',
        name: 'picker',
        path: '/mobile-vue/components/picker',
        component: () => import('@/picker/picker.md'),
        componentEn: () => import('@/picker/picker.en-US.md'),
      },
      {
        title: 'DateTimePicker 时间选择器',
        titleEn: 'DateTimePicker',
        name: 'date-time-picker',
        path: '/mobile-vue/components/date-time-picker',
        component: () => import('@/date-time-picker/date-time-picker.md'),
        componentEn: () => import('@/date-time-picker/date-time-picker.en-US.md'),
      },
      {
        title: 'Radio 单选框',
        titleEn: 'Radio',
        name: 'radio',
        path: '/mobile-vue/components/radio',
        component: () => import('@/radio/radio.md'),
        componentEn: () => import('@/radio/radio.en-US.md'),
      },
      {
        title: 'Rate 评分',
        titleEn: 'Rate',
        name: 'rate',
        path: '/mobile-vue/components/rate',
        component: () => import('@/rate/rate.md'),
        componentEn: () => import('@/rate/rate.en-US.md'),
      },
      {
        title: 'Stepper 步进器',
        titleEn: 'Stepper',
        name: 'stepper',
        path: '/mobile-vue/components/stepper',
        component: () => import('@/stepper/stepper.md'),
        componentEn: () => import('@/stepper/stepper.en-US.md'),
      },
      {
        title: 'Switch 开关',
        titleEn: 'Switch',
        name: 'switch',
        path: '/mobile-vue/components/switch',
        component: () => import('@/switch/switch.md'),
        componentEn: () => import('@/switch/switch.en-US.md'),
      },
      {
        title: 'Search 搜索框',
        titleEn: 'Search',
        name: 'search',
        path: '/mobile-vue/components/search',
        component: () => import('@/search/search.md'),
        componentEn: () => import('@/search/search.en-US.md'),
      },
      {
        title: 'Slider 滑动选择器',
        titleEn: 'Slider',
        name: 'slider',
        path: '/mobile-vue/components/slider',
        component: () => import('@/slider/slider.md'),
        componentEn: () => import('@/slider/slider.en-US.md'),
      },
      {
        title: 'Upload 上传',
        titleEn: 'Upload',
        name: 'upload',
        path: '/mobile-vue/components/upload',
        component: () => import('@/upload/upload.md'),
        componentEn: () => import('@/upload/upload.en-US.md'),
      },
      {
        title: 'Cascader 级联选择器',
        titleEn: 'Cascader',
        name: 'cascader',
        path: '/mobile-vue/components/cascader',
        component: () => import('@/cascader/cascader.md'),
        componentEn: () => import('@/cascader/cascader.en-US.md'),
      },
    ],
  },
  {
    title: '数据展示',
    titleEn: 'Data Display',
    type: 'component',
    children: [
      {
        title: 'Cell 单元格',
        titleEn: 'Cell',
        name: 'cell',
        path: '/mobile-vue/components/cell',
        component: () => import('@/cell/cell.md'),
        componentEn: () => import('@/cell/cell.en-US.md'),
      },
      {
        title: 'Grid 宫格',
        titleEn: 'Grid',
        name: 'grid',
        path: '/mobile-vue/components/grid',
        component: () => import('@/grid/grid.md'),
        componentEn: () => import('@/grid/grid.en-US.md'),
      },
      {
        title: 'Footer 页脚',
        titleEn: 'Footer',
        name: 'footer',
        meta: { docType: 'data' },
        path: '/mobile-vue/components/footer',
        component: () => import('@/footer/footer.md'),
        componentEn: () => import('@/footer/footer.en-US.md'),
      },
      {
        title: 'Image 图片',
        titleEn: 'Image',
        name: 'image',
        path: '/mobile-vue/components/image',
        component: () => import('@/image/image.md'),
        componentEn: () => import('@/image/image.en-US.md'),
      },
      {
        title: 'Avatar 头像',
        titleEn: 'Avatar',
        name: 'avatar',
        path: '/mobile-vue/components/avatar',
        component: () => import('@/avatar/avatar.md'),
        componentEn: () => import('@/avatar/avatar.en-US.md'),
      },
      {
        title: 'Badge 徽标',
        titleEn: 'Badge',
        name: 'badge',
        path: '/mobile-vue/components/badge',
        component: () => import('@/badge/badge.md'),
        componentEn: () => import('@/badge/badge.en-US.md'),
      },
      {
        title: 'CountDown 倒计时',
        titleEn: 'CountDown',
        name: 'count-down',
        path: '/mobile-vue/components/count-down',
        component: () => import('@/count-down/count-down.md'),
        componentEn: () => import('@/count-down/count-down.en-US.md'),
      },
      {
        title: 'Empty 空状态',
        titleEn: 'Empty',
        name: 'empty',
        path: '/mobile-vue/components/empty',
        component: () => import('@/empty/empty.md'),
        componentEn: () => import('@/empty/empty.en-US.md'),
      },
      {
        title: 'Tag 标签',
        titleEn: 'Tag',
        name: 'tag',
        path: '/mobile-vue/components/tag',
        component: () => import('@/tag/tag.md'),
        componentEn: () => import('@/tag/tag.en-US.md'),
      },
      {
        title: 'Collapse 折叠面板',
        titleEn: 'Collapse',
        name: 'collapse',
        path: '/mobile-vue/components/collapse',
        component: () => import('@/collapse/collapse.md'),
        componentEn: () => import('@/collapse/collapse.en-US.md'),
      },
      {
        title: 'Sticky 吸顶容器',
        titleEn: 'Sticky',
        name: 'sticky',
        path: '/mobile-vue/components/sticky',
        component: () => import('@/sticky/sticky.md'),
        componentEn: () => import('@/sticky/sticky.en-US.md'),
      },
      {
        title: 'Swiper 轮播',
        titleEn: 'Swiper',
        name: 'swiper',
        path: '/mobile-vue/components/swiper',
        component: () => import('@/swiper/swiper.md'),
        componentEn: () => import('@/swiper/swiper.en-US.md'),
      },
      {
        title: 'Table 表格',
        titleEn: 'Table',
        name: 'table',
        path: '/mobile-vue/components/table',
        component: () => import('@/table/table.md'),
        componentEn: () => import('@/table/table.en-US.md'),
      },
      {
        title: 'ImageViewer 图片预览',
        titleEn: 'ImageViewer',
        name: 'image-viewer',
        path: '/mobile-vue/components/image-viewer',
        component: () => import('@/image-viewer/image-viewer.md'),
        componentEn: () => import('@/image-viewer/image-viewer.en-US.md'),
      },
      {
        title: 'Skeleton 骨架屏',
        titleEn: 'Skeleton',
        name: 'skeleton',
        path: '/mobile-vue/components/skeleton',
        component: () => import('@/skeleton/skeleton.md'),
        componentEn: () => import('@/skeleton/skeleton.en-US.md'),
      },
      {
        title: 'List 列表',
        titleEn: 'List',
        name: 'list',
        path: '/mobile-vue/components/list',
        component: () => import('@/list/list.md'),
        componentEn: () => import('@/list/list.en-US.md'),
      },
      {
        title: 'Result 结果',
        titleEn: 'Result',
        name: 'result',
        path: '/mobile-vue/components/result',
        component: () => import('@/result/result.md'),
        componentEn: () => import('@/result/result.en-US.md'),
      },
      {
        title: 'Progress 进度条',
        titleEn: 'Progress',
        name: 'progress',
        path: '/mobile-vue/components/progress',
        component: () => import('@/progress/progress.md'),
        componentEn: () => import('@/progress/progress.en-US.md'),
      },
    ],
  },
  {
    title: '反馈',
    titleEn: 'FeedBack',
    type: 'component', // 组件文档
    children: [
      {
        title: 'DropdownMenu 下拉菜单',
        titleEn: 'DropdownMenu',
        name: 'dropdown-menu',
        path: '/mobile-vue/components/dropdown-menu',
        component: () => import('@/dropdown-menu/dropdown-menu.md'),
        componentEn: () => import('@/dropdown-menu/dropdown-menu.en-US.md'),
      },
      {
        title: 'PullDownRefresh 下拉刷新',
        titleEn: 'PullDownRefresh',
        name: 'pull-down-refresh',
        path: '/mobile-vue/components/pull-down-refresh',
        component: () => import('@/pull-down-refresh/pull-down-refresh.md'),
        componentEn: () => import('@/pull-down-refresh/pull-down-refresh.en-US.md'),
      },
      {
        title: 'ActionSheet 动作面板',
        titleEn: 'ActionSheet',
        name: 'action-sheet',
        path: '/mobile-vue/components/actionsheet',
        component: () => import('@/action-sheet/action-sheet.md'),
        componentEn: () => import('@/action-sheet/action-sheet.en-US.md'),
      },
      {
        title: 'Toast 轻提示',
        titleEn: 'Toast',
        name: 'toast',
        path: '/mobile-vue/components/toast',
        component: () => import('@/toast/toast.md'),
        componentEn: () => import('@/toast/toast.en-US.md'),
      },
      {
        title: 'Message 消息',
        titleEn: 'Message',
        name: 'message',
        path: '/mobile-vue/components/message',
        component: () => import('@/message/message.md'),
        componentEn: () => import('@/message/message.en-US.md'),
      },
      {
        title: 'Dialog 对话框',
        titleEn: 'Dialog',
        name: 'dialog',
        path: '/mobile-vue/components/dialog',
        component: () => import('@/dialog/dialog.md'),
        componentEn: () => import('@/dialog/dialog.en-US.md'),
      },
      {
        title: 'Guide 引导',
        titleEn: 'Guide',
        name: 'guide',
        path: '/mobile-vue/components/guide',
        component: () => import('@/guide/guide.md'),
        componentEn: () => import('@/guide/guide.en-US.md'),
      },
      {
        title: 'Popover 弹出气泡',
        titleEn: 'Popover',
        name: 'popover',
        path: '/mobile-vue/components/popover',
        component: () => import('@/popover/popover.md'),
        componentEn: () => import('@/popover/popover.en-US.md'),
      },
      {
        title: 'Popup 弹出层',
        titleEn: 'Popup',
        name: 'popup',
        path: '/mobile-vue/components/popup',
        component: () => import('@/popup/popup.md'),
        componentEn: () => import('@/popup/popup.en-US.md'),
      },
      {
        title: 'Overlay 遮罩层',
        titleEn: 'Overlay',
        name: 'overlay',
        path: '/mobile-vue/components/overlay',
        component: () => import('@/overlay/overlay.md'),
        componentEn: () => import('@/overlay/overlay.en-US.md'),
      },
      {
        title: 'SwipeCell 滑动单元格',
        titleEn: 'SwipeCell',
        name: 'swipe-cell',
        path: '/mobile-vue/components/swipe-cell',
        component: () => import('@/swipe-cell/swipe-cell.md'),
        componentEn: () => import('@/swipe-cell/swipe-cell.en-US.md'),
      },
      {
        title: 'NoticeBar 公告栏',
        titleEn: 'NoticeBar',
        name: 'notice-bar',
        path: '/mobile-vue/components/notice-bar',
        component: () => import('@/notice-bar/notice-bar.md'),
        componentEn: () => import('@/notice-bar/notice-bar.en-US.md'),
      },
      {
        title: 'Loading 加载中',
        titleEn: 'Loading',
        name: 'loading',
        path: '/mobile-vue/components/loading',
        component: () => import('@/loading/loading.md'),
        componentEn: () => import('@/loading/loading.en-US.md'),
      },
    ],
  },
];

const enDocs = docs.map((doc) => {
  return {
    ...doc,
    title: doc.titleEn,
    children: doc?.children?.map((child) => {
      return {
        title: child.titleEn,
        name: `${child.name}-en`,
        path: `${child.path}-en`,
        meta: { lang: 'en' },
        component: child.componentEn || child.component,
      };
    }),
  };
});

export default { docs, enDocs };
