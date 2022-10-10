/*
 * @Description: 自定义配置
 * @Author: ZY
 * @Date: 2020-12-08 14:26:07
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 11:17:16
 */

import { NetworkConfig } from "./default/net.config";
import { Settings } from "./default/setting.config";
import { Theme } from "./default/theme.config";

type CustomConfig =
  NetworkConfig &
    Theme &
    Settings;

const customConfig: CustomConfig =
  {};

export default customConfig;
