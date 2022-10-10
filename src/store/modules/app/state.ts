/*
 * @Description: app state
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 11:24:02
 */
import { getLocale } from '@/locales';
import { getSidebarStatus, getSize } from '@/utils/cookies';

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface AppState {
  device: DeviceType
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  language: string
  size: string
}

export const state: AppState = {
  device: DeviceType.Desktop,
  sidebar: {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  },
  language: getLocale(),
  size: getSize() || 'medium'
};
