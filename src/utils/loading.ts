/*
 * @Description: 全局loading
 * @Author: ZY
 * @Date: 2021-01-20 15:02:11
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 14:13:06
 */

import { ElLoading } from 'element-plus';

export default function() {
  const loading = (title: string) => {
    const loadingInstance = ElLoading.service({ text: title });
    return loadingInstance;
  };

  return {
    loading
  };
}
