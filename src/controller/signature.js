import utility from 'utility';
// sign
export default new class {
  checkSignature(params) {
    const { echostr, nonce, signature, timestamp } = params;
    const arry = [];
    arry.push('123');
    arry.push(timestamp);
    arry.push(nonce);
    const tmpStr = arry.sort().join('');
    const sign = utility.sha1(tmpStr);
    logger.info('checkSignature', sign);
    if (sign === signature) {
      logger.info('checkSignature', sign === signature);
      return echostr;
    }
    return '';
  }
};
