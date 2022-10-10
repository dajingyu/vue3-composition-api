/*
 * @Description: axios 封装网络请求
 * @Author: ZY
 * @Date: 2020-12-28 14:45:32
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 14:13:02
 */

import networkConfig from '@/config/default/net.config';
import { useStore } from '@/store';
import HttpClient, { HttpClientConfig } from 'axios-mapper';
const https = (hasToken: Boolean = true) => {
  const config: HttpClientConfig = {
    baseURL: networkConfig.host,
    headers: {
      token: hasToken ? useStore().state.user.token : ''
    }
  };
  return new HttpClient(config);
};

export default https;
