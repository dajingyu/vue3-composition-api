/*
 * @Author: tao.xu 476189779@qq.com
 * @Date: 2022-10-09 16:39:41
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 11:17:17
 * @FilePath: /v-test/src/config/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-08 09:45:01
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-09 11:18:25
 */
// 默认配置
import {
  netConfig,
  settingConfig,
  themeConfig,
} from "./default";
// 自定义配置
import customConfig from "./customConfig";

// 导出配置（自定义配置优先级高）
export default Object.assign(
  {},
  netConfig,
  settingConfig,
  themeConfig,
  customConfig
);
