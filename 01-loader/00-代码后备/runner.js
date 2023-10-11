/**
 * loader的分类
 * loader有四种分类，它们的组合是有顺序的
 * =post(后置)+inline(内联)+normal(正常)+pre(前置)
 * = 厚脸挣钱
 */
const { runLoaders} = require('./loader-runner');
const path = require('path');
const fs = require('fs');
//这是我要使用loader处理的文件
const entryFile = path.resolve(__dirname, 'src/index.js')
//loader分类跟loader自己没有关系，跟使用时候的配置有关系
//因为我们的loader配置可以是由多个配置文件合并而来
//为了保证执行的时候按我们希望的顺序执行，所以我们可以给loader分类
//eslint-loader=pre  babel-loader=normal
//吃饭的时候 饭前洗手 饭后清理餐桌
/**
 * Auto=Normal
 * !  noAuto
 * -! noPreAuto
 * !! noPrePostAuto
 */
let request = `inline-loader1!inline-loader2!${entryFile}`;
//require(`inline-loader1!inline-loader2!${entryFile}`);
const rules = [
  {
    test: /\.js$/,
    use:['normal-loader1','normal-loader2']
  },
  {
    test: /\.js$/,
    enforce:'pre',
    use:['pre-loader1','pre-loader2']
  },
  {
    test: /\.js$/,
    enforce:'post',
    use:['post-loader1','post-loader2']
  }
]
const parts = request.replace(/^-?!+/,'').split('!');
let resource = parts.pop();//取出最后一个元素，也就是要加载的文件或者说模块
let inlineLoaders = parts;
let preLoaders = [], postLoaders = [], normalLoaders = [];
for (let i = 0; i < rules.length; i++){
  let rule = rules[i];
  if (resource.match(rule.test)) {
    if (rule.enforce == 'pre') {
      preLoaders.push(...rule.use);
    }else if (rule.enforce == 'post') {
      postLoaders.push(...rule.use);
    } else {
      normalLoaders.push(...rule.use);
    }
  }
}
let loaders = [];
if (request.startsWith('!!')) {
  loaders = inlineLoaders;
} else if (request.startsWith('-!')) {
  loaders = [...postLoaders,...inlineLoaders];
} else if (request.startsWith('!')) {
  loaders = [
    ...postLoaders,
    ...inlineLoaders,
    ...preLoaders
  ]
} else {
  loaders = [
    ...postLoaders,
    ...inlineLoaders,
    ...normalLoaders,
    ...preLoaders
  ]
}
//把loader从一个名称变成一个绝地路径
loaders = loaders.map(loader => path.resolve(__dirname, 'loader-chain', loader));
debugger
runLoaders({
  resource,//要处理的资源文件
  loaders,//资源文件需要经过发些loader的处理
  context: {age:18,author:'zhufeng'},
  readResource:fs.readFile//读文件用哪个方法
}, (err, result) => {//finalCallback
  console.log(err);
  console.log(result.result[0].toString());//转换后的结果
  //转换前源文件的内容
  console.log(result.resourceBuffer);
  console.log(result.resourceBuffer?result.resourceBuffer.toString():null);
});