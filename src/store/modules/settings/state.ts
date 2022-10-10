/*
 * @Description: app state
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 13:23:15
 */

import layoutSettings from '@/config/default/layout';
import elementVariables from '@/styles/element-variables.scss';
export interface SettingsState {
  theme: string
  fixedHeader: boolean
  showSettings: boolean
  showTagsView: boolean
  showSidebarLogo: boolean
  sidebarTextTheme: boolean
}

export const state: SettingsState = {
  theme: elementVariables.theme,
  fixedHeader: layoutSettings.fixedHeader,
  showSettings: layoutSettings.showSettings,
  showTagsView: layoutSettings.showTagsView,
  showSidebarLogo: layoutSettings.showSidebarLogo,
  sidebarTextTheme: layoutSettings.sidebarTextTheme
};
