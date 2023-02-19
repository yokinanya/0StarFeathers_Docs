---
title: 方舟寻访分析
---

> 查询并分析明日方舟的抽卡记录

---
## 使用方法
每个用户第一次使用时，需要设置token。<br/>
token获取方法:<br/>
在官网登录后，根据你的服务器，选择复制以下网址中的内容<br/>
官服：<https://web-api.hypergryph.com/account/info/hg><br/>
B服：<https://web-api.hypergryph.com/account/info/ak-b><br/>
请在浏览器中获取token，避免在QQ打开的网页中获取，否则可能获取无效token<br/>

token设置方法：<br/>
使用插件命令 ` #方舟抽卡token [token]` 或 `#方舟寻访token [token] ` 进行设置<br/>
如网页中内容为 `("status":0，"msg":"OK"，"data":("token":"example123456789"}}` <br/>
则使用命令 `#方舟抽卡token example123456789` <br/>
如果间隔超3天再次使用，建议重新使用上述方式设置token<br/>

寻访记录分析：<br/>
设置token后，直接使用 `#方舟抽卡分析` 或 `#方舟寻访分析` 即可<br/>
还可以使用 `#方舟抽卡分析 [数字]` 分析最近一定抽数的寻访情况<br/>
如` #方舟抽卡分析100` 分析最近100抽的情况<br/>

更新卡池信息与干员头像：<br/>
使用 `#方舟卡池更新` 命令，自动从 [ArknightsGameData](https://github.com/Kengxxiao/ArknightsGameData) 更新卡池信息及干员头像文件，该功能仅支持群主和管理员使用<br/>

导出记录：<br/>
使用 `#方舟抽卡导出` 或 `#方舟寻访导出` 或命令，可以在群聊中导出你当前关联token的储存于插件数据库中的寻访记录。请注意，目前只支持在群聊中导出

导入记录：<br/>
使用`#方舟抽卡同步` 或 `#方舟寻访同步` 命令，可以从 <https://arkgacha.kwer.top> 获取数据并保存至Bot，本命令会让网站更新一次数据<br/>

帮助：<br/>
使用 `#方舟抽卡帮助` 或 `#方舟寻访帮助` 命令查看本页面

---
插件作者：zheuziihau