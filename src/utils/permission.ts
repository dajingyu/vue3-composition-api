/*
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-12 10:20:08
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 14:13:11
 */
import { useStore } from '@/store';

export const checkPermission = (value: string[]): boolean => {
  if (value && value instanceof Array && value.length > 0) {
    const roles = useStore().state.user.roles;
    const permissionRoles = value;
    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role);
    });
    return hasPermission;
  } else {
    console.error('need roles! Like v-permission="[\'admin\',\'editor\']"');
    return false;
  }
};
