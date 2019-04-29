# jx-pattern

## 工具链

- [pre-commit](https://juejin.im/entry/577637438ac247005325f705), or [husky]
- [lint-staged](https://segmentfault.com/a/1190000009546913), 把 Lint 挪到本地，并且每次提交只检查本次提交所修改的文件
-

## 知识点

- [d.ts](https://segmentfault.com/a/1190000009247663)
- [dts-gen](https://www.cnblogs.com/chenjinxinlove/p/9778609.html)

```
npm install -g dts-gen   // 先全局安装dts-gen
npm install -g yargs     // 然后在全局安装你需要生产声明文件的库
npm i dtsmake -g   // 先全局安装dtsmake
npm i tern --save-dev

dts-gen -m yargs         // 执行命令生成文件
dtsmake -s ./path/to/sourcefile.js
```

## 其他

http://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html
http://www.typescriptlang.org/docs/handbook/declaration-files/templates.html
