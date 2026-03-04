---
title: 春节Coding马拉松🏃
date: "2025-01-27"
cover: https://picgo-rockyshen.oss-cn-shanghai.aliyuncs.com/picgo/202502011608700.jpeg
categories:
  - code
tags:
  - code
---

受到Twitter上网友的启发，我打算今年春节假期开启一场Coding马拉松，计划完成两件事： <br>1、EasyAccout项目后端提交PR（第一次尝试参与开源项目！）
完善EasyAccount这个开源项目的后端部份优化。优化有两个： a)、更加明确的错误提示； b)、增加图片导入AI识别（尽力而为）。
<br>2、前端部份：我打算将原本Vue网页版的界面，用SwiftUI重写一遍。


### 计划安排
| 任务 | 时间 |
|--|--|
| 后端优化部份 | 2Days |
| 改写SwiftUI界面 | 1-2Days<br/>(1天写布局，1天联调后端数据) |

### 后端部分
2025.2.1 今天是大年初四，前几天家里客人比较多，根本没办法沉下心来Coding，今天大年初四，清净一些了。
今天我完成了后端部份优化第一点，在fork到本地的项目基础上，开辟了新分支：feature/BusinessException，
在这个分支上，我实现了全局异常拦截器、自定义业务异常处理功能，并在目前使用中发现存在错误的地方，加入了
自定义业务异常处理逻辑。这样发生错误时，用户就能更加容易理解“到底是哪一步操作导致的报错”。如下图：
![](https://picgo-rockyshen.oss-cn-shanghai.aliyuncs.com/picgo/202502011556572.png)

<br>完成业务代码的开发后，我也很有礼貌的，向开源项目提交了issue，向作者申请这个功能分配给我，静待回音：
![](https://picgo-rockyshen.oss-cn-shanghai.aliyuncs.com/picgo/202502011617606.png)
<br>如果作者同意，我就可以直接将我本地分支push到remote，然后提交Pull Request即可完成👍。
2025-2-3，作者答复了我的issue请求：
>非常感谢你的贡献，目前项目在准备一次较大的更新升级
前端框架VUE2 -> VUE3
vant2组件升级到 vant4，增加部分界面
部分界面美化调整
后端框架spring也在准备升级
增加登录功能，财务分析也进行重构
后续可能会加上检查更新等功能，拆分数据库等更新
等我升级测试完毕后会更新代码，届时如果你这边开发出来好的功能，可以提交pr，我会把你列为开发者
再次感谢，may the force be with you!

婉拒了我的PR，哈哈😂，Fine，没事，这次开源的实践很不错！我先用自己的分支推进iOS端的开发吧！

### 前端部分
接下来开始开发SwiftUI前端部份
2025.2.2 今天是大年初五，迎财神，晚上鞭炮🧨烟花不断，这个时代大家都希望发财啊！哈哈！我继续推进iOS部分。
今天完成了TabView下的四个Tab页面的初步构图...

2025.2.3 今日立春，大年初六，一年之计在于春，加油！今天完成了“总览”、“流水”两个页面按照设计稿进行调整（毕竟AI只能生成个大概）
![](https://picgo-rockyshen.oss-cn-shanghai.aliyuncs.com/picgo/202502040036759.png)

2025.2.4 今日，我完成了EasyAccounts四个主要Tab页面的SwiftUI布局开发工作，初具雏形！记录之。
明天开始梳理数据结构实体类，将页面中的数据替换成动态即可！

2025.2.8 这两天首先完成了后端API请求，能通过SwfitUI发送请求，并从后端获取到数据后，解码到SwiftUI中了👍。
遇到的难题时，对应后端实体类设计了SwiftUI的struct实体类，好像设计不太好，响应式传输过程不太正确。
接下来主要修复这部分的功能！参考一下Todo App的做法，要沉下心来好好梳理一下。
晚上夜深人静，，静下心来，好好把数据实体类及请求方式，数据传递方式梳理了一遍，现在跑通了。完成了iOS界面中
基本数据的响应式，nice👍

2025.2.10 今天复工了，春节Coding马拉松结束！总结一下EasyAccounts的iOS开发成果：
<br>✅完成后端工程增加通用异常拦截处理的代码增加，并提交了issue，但是被作者婉拒（他也在大版本的更新中...）
<br>✅完成了4个主要Tab页面的设计和代码工作；
<br>✅完成了“总览页”的向后端请求数据，并响应式iOS界面显示
<br>✅完成了“流水页”的增加一条流水数据，并构造Post请求向后端发送，最后一天跑通😄
总体还是非常开心的一次开发过程，附上最终效果：
![](https://picgo-rockyshen.oss-cn-shanghai.aliyuncs.com/picgo/202502101437123.gif)

最后，附上一张春节期间拍摄的家乡的傍晚晚霞美景，令人神往
![](https://picgo-rockyshen.oss-cn-shanghai.aliyuncs.com/picgo/202502101618883.JPG)


EasyAccounts的iOS版，我还是会持续完成并尝试上架，继续推进其他功能，主要功能跑通了，其他的应该也不会很难，加油💪
