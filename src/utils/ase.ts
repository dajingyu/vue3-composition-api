/*
 * @Description:AES加密
 * @Autor: ZY
 * @Date: 2020-11-04 13:33:44
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 14:12:53
 */
import Keys from '@/constant/key';
import { AES, enc, mode, pad } from 'crypto-ts';

export default class VAES {
  static encrypt(text: string | null): string | null {
    return AES.encrypt(text ?? '', Keys.aseKey, { mode: mode.ECB, padding: pad.PKCS7 }).toString();
  }

  static decrypt(text: string | null): string | null {
    return AES.decrypt(text ?? '', Keys.aseKey, { mode: mode.ECB, padding: pad.PKCS7 }).toString(enc.Utf8);
  }
}
