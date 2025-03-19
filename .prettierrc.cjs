module.exports = {
  // 使用alloy团队prettier规则
  ...require('eslint-config-alloy/.prettierrc.js'),
  plugins: ['prettier-plugin-packagejson'],
};
