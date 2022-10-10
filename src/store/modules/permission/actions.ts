/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-25 15:03:52
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 14:30:22
 */

import { asyncRoutes } from '@/router';
import { RootState } from '@/store';
import { RouteRecordRaw } from 'vue-router';
import { ActionContext, ActionTree } from 'vuex';
import { PermissionActionType } from './action-types';
import { PermissionMutationType } from './mutation-types';
import { Mutations } from './mutations';
import { PermissionState } from './state';

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<PermissionState, RootState>, 'commit'>

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route.meta && route.meta.roles) {
    return roles.some(role => {
      if (route.meta?.roles !== undefined) {
        return route.meta.roles.includes(role);
      }
    });
  } else {
    return true;
  }
};

export const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = [];
  routes.forEach(route => {
    const r = { ...route };
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles);
      }
      res.push(r);
    }
  });
  return res;
};

export interface Actions {
    [PermissionActionType.ACTION_SET_ROUTES](
      { commit }: AugmentedActionContext
      , roles: string[]): void
}

export const actions: ActionTree<PermissionState, RootState> & Actions = {
  [PermissionActionType.ACTION_SET_ROUTES](
    { commit }: AugmentedActionContext
    , roles: string[]) {
    let accessedRoutes;
    if (roles.includes('admin')) {
      accessedRoutes = asyncRoutes;
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
    }
    commit(PermissionMutationType.SET_ROUTES, accessedRoutes);
  }
};
