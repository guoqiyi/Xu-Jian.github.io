---
layout: post
title: Active Directory
tags: 
categories: IT-Admin
---

## AD: Active Directory

*网络环境:*工作组 & 域  
> 工作组:  
>     每台电脑地位都是平等的.  
>     资源分散在每台电脑上

# 域作用:
> 假如公司电脑2000台,全部电脑加入域.
创建域账户: xujian 
这个账户可以在任一域电脑上登录.

一般微软服务器级别的产品:比如 Exchange 都需要域的支持.

## 域、工作组的区别

域内所有的计算机 共享一个集中式的目录数据库.
AD可以统一进行 添加 更新 等等 

它包含 域内所有的对象 用户账户/计算机账户/打印机/共享文件. 和 安全信息 等等 


大公司: 电脑1000+  
都在网上邻居显示 那就太恐怖了
于是有了工作组:  财务部  人事部 等等 
任何人想去哪个组 知道组名字就可以  不需要任何验证

共享文件可以添加访问密码,但是非常容易破解 很不安全,

域:就严格多了. 网络的严格管理 非常必要!

域控制器 Domain Controller 相当于门卫
没有登记的电脑是进不了域的 也没有办法访问域里面有权限保护的资源.
只能看 平常的通过 windows 共享出来的文件. 


### 命名空间:
 比如 电话本 就是一个 命名空间. 
 通过这个命名空间 就能找到某人的具体信息.
 命名空间 才有 DNS 架构,所以 命名空间 才有 DNS 格式来命名
 可以把域 命名成    xx.com 或者 abc.com
 
 
域 domain   是一种环境 .  是安全的最小边界
域树 domain tree  由有多个域组成的-树形结构排列.
域树内 所有域 共享一个 AD 目录

林 forest
组织单元 organization unit
  

域控制器DC
搭建域服务器的电脑.
 
 一个域  能有多台域控制器.
   最经典的做法是 做一个主辅域控 一个主要的 一个备份的.
域功能:

例如  可以统一设置ie 选项
在开关机时候 自动运行脚本 
远程安装软件


1. 对网络资源的集中控制.
如: 共享文件 打印机 的集中控制

只有授权用户能访问 ad 中的资源,


2. 集中和分散管理.
编写一个组策略. 使得某个软件的升级包 能在每个用户开机的时候自动安装, 

也可以把  销售部的打印机纳入到一个组织单元 把这个单元的权限给销售部的技术人员 减少自己的工作量.

### 域优势
与 DNS 集成.
ad 使用了 dns 一种基于 ip 的 网络服务.
虽然 ad 和 dns 是分开的两部分
但是有相同的 分级结构. 
ad 用 dns 来定位域控制器.


computer 里面 都是域下面的 计算机名字.
user 里面就是一些 用户和组了.
新建的账户 没有指定分配到哪话 也会出现在这里,



AD 账号建立.
姓名 只是描述的  不重要
最重要的数据 就是  登录名 里面的名称
这个名称是拿来登录系统用的.

密码设定
要复杂的密码  有大小写.

等等 具体熟悉详细设定.



### ad 域策略
域默认开启 2个策略
1. 域安全策略:针对整个域的 用户 计算机

2. 域控制器安全策略: 只针对域服务器的.

如果两个策略有冲突的话 域控制器为准.

策略部署:
如  对前台 禁止 c 盘.
前台 右键属性 组策略 新建 双击编辑.
刷新策略 就执行了. 如果客户端要立即生效的话 得去客户端执行一样的命令?  默认 ad 策略是90分钟自动刷新一次的.


计算机配置  命令刷新后 需要注销或者重启.
用户配置 刷新后 可立即生效  个别需要注销



# 客户端加域:
前提 知道域控制器的 IP + 域名
加域之前 要把 DNS 指向到域/ DNS 服务器上!!!

然后重启电脑 就能选择登录环境了 
一个是本机登录  一个是域登录.


# 域的日常维护

远程登录到服务器 查看日志情况.
有无错误日志 或者 警告之类的信息.
发现错误警告 微软帮助主页 输入事件 ID解决.

一星期以内 重启 DNS 和 NETlogon 服务
直接开始 运行 里面 输入下面命令
net stop dns&&net start dns
net stop netlogon&&net start netlogon

第一条是重启 dns
第二条是重启 netlogon 服务

# 日志备份
策略的备份.


对象 
打印机 打印机名称 打印机位置
用户  姓 名 登录名


LDAP 轻量级目录访问协议
提供 通过制定唯一名字路径来访问活动目录的 每一个对象. 

组织党员划分 原则
基于 部门 / 项目 / 业务功能 / 管理 /对象 / 地理位置


AD 对 DNS 的要求
支持 SRV 记录
支持动态更新协议
支持 AD 集成复制


组策略功能:
设置 集中或分散策略


文件夹重新定向
不管用户在哪台电脑登录 数据总是可用的.

数据是集中存储的 便于管理及备份


常用管理工具
AD 用户和计算机
站点和服务
AD 域信任
DNS 管理器

排错工具
事件查看器
network monitor





统一的身份认证
企业有很多信息系统

协同办公系统
财务系统
人力资源系统
项目管理系统
每个系统都要维护一套用户信息 
有了域 就简单 了






# 加域步骤: 好像二选一?  


## 加计算机:
计算机名 更改 输入域名  验证域管理员账户密码.
这时候 去 ad 服务器 打开ad(本地) computer 下面就多了刚加的电脑名字.



## 加用户账号:
加完计算机 还得创建账号.

AD → 新建组织单位(相当于公司部门) → 部门 右键 新建用户 输入 姓名/登录名 等参数. 可能还需启用账户.


# 实例一.
服务器 IBM 上 共享文件夹 财务文件 读权限给QW.

1. AD 上创建 QW 的账号. 
2. 服务器 财务文件 → 右键 共享 → 权限 删除所有默认值 添加 名称哪里 输入 QW 然后检查名称.  给读取权限.

测试:  
用域管理员 访问 财务文件 : 没有访问权限!
换用户QW  访问 财务文件 : 可以访问.

为什么 QW 访问财务文件的时候 不像 FTP 服务器一样要输入密码呢. 这就是域的作用.既然已经经过了域的验证 就不用其他形式的验证了.

相当于一张 多功能通行证. 有了域账号 就能直接
访问各种共享文件, 共享打印机 , 电子邮箱.


## 额外域控制器:
备份用 + 负载平衡.


多个域控制器 会出现一个数据不一致的情况.
正常情况 任何一个控制器的修改 别的控制器会立即相应的修改.
万一有个域控制器坏了几天 这段时间别的控制器进行了修改. 就会导致 数据不一致. 这时候按住那个为准呢,

版本号
时间
GUID

版本号:
A 控制器 xujian 账户 密码改了4次
B 控制器 xujian 账户 密码改了5次
按照 B 为准. A 会复制 B 的内容 重新使得数据库一致.

还有就是时间. 按照时间靠后者 优先.


AD 碎片整理:
AD 是用于 查询的 非关系型 数据库.
使用久了 需要维护,提高查询效率.

数据库位置:
C:\Windows \NTDS

NTDS.DIT  数据库文件
EDB.LOG  日志文件 (非常重要)
记录 数据库内容的变更.

大型 AD 维护还是很重要的. 
11G 的数据库 维护后 可以变成 6G
维护 只需要执行命令 不需要人工处理.


多个域控制器. 虽然控制器的地位是平等的.
但是 第一个控制 承担更多任务.不能扔掉.会出现异常问题.



域 是共享用户账号,计算机账号 及 安全策略的一组计算机.

## 组策略
非常重要的一项技术.
组策略 对于管理的重要意义.

组策略是 一个允许执行 针对 用户或计算机 进行配置的基础架构.
通俗点说 和 注册表 类似,是可以修改用户或者计算机设置 的技术.

组策略 和 注册表 区别:
注册表 只能修改一台电脑或者一个用户.
组策略 可以修改多台电脑或者多个用户.


组策略 可以配合 AD 使用,发挥最大作用.













域 书本:
为什么需要域,微软重量级服务产品基本都需要域的支持
工程师 也明确需要 精通域
域 有点复杂
技术术语: Active Directory
站点 组策略 复制拓扑 操作主机角色 全局编录


为什么工作组 不适合中大型网络.

服务器 无非就是 提供资源 分配资源

提供的资源有很多形式
共享文件夹 共享打印机 电子邮箱 数据库 等等

现在要实现 服务器 有个文件夹 只能给某人 A 访问: 实现办法
服务器 添加A用户 访问者能知道 a 的用户名密码 就能访问 文件夹.


 










































## 域下面有三种电脑
1. 域控制器 控制器上存着 Active Directory
2. 成员服务器 提供邮件 数据库 dhcp 等服务
3. 客户端(员工电脑)

DNS 服务器可以在 AD 域外面的.

## 部署域前提

- 搭建好DNS服务器. 
- 创建域控制器
- 创建计算机账号
- 创建用户账号

### DNS 前期准备

 DNS 服务器对域来说是不可或缺的.
 
-  客户端需要填写 DNS 域名: 为客户端提供域名解析服务
-  域中的计算机 需要利用DNS提供的 SRV 记录来定位 域控制器.

# 安装配置 DNS 服务器
 
 安装:
 服务器管理器 → 仪表板 → 添加角色和功能 → 基于角色或基于功能的安装
  → 从服务器池中选择服务器 → 角色选择 DNS 服务器 → 一路下一步. → 重启电脑.
 
 配置:
 服务器管理器 → 右上角 工具 → DNS 
 
 正向查找区域
 新建区域 → 主要区域 → 填写名字.创建文件  允许动态安全更新(不确定选哪个)
 
 反向查找区域
 暂时没必要??
 
 
 检查 NS 和 SOA 记录
 NS: 记录描述了 有多少个 DNS 服务器可以解析这个区域
 SOA: 记录描述了 哪个 DNS 服务器是区域的主服务器.
 
 
 
# AD域部署
 
 域控制器 是域的灵魂.
 首先 查看域服务器网卡的 tcp/ip 属性 
 ip+ 掩码 
 DNS 服务器地址 要填你自建的 DNS本地地址
 
 添加 AD 域角色
 过程类似 DNS 不重复了.
 
 安装好后 服务器管理器 会出现黄色感叹号
 点击 提升域控制器.
 添加新林:
 虽然只是简单新建了一个域 但是 逻辑上是创建了一个域林.  
 域 一定要属于 域树 域树一定要属于域林.
 我们实际上是新建了一个域林 虽然现在这个域林只有一颗域树 域树内 只有一个树根
 
 输入 根域名 adtest.com
 去掉 域名系统(DNS)服务器
 输入密码 (恢复域控制器会用到)
 
 NEtBIOS 域名 ADTEST
 
 下一步 下一步 
 重启电脑  就能用 域管理员身份登录了
 域就成功创建了
 
 现在去检查下 dns 服务器  正向查询 下应该创建了 4/5个文件夹. 如果没有就有问题了.
 
 
 
# 加入域:
 
比如 电脑 boss
 boss DNS 服务器 选择本地的 DNS 
 
 系统属性 计算机名 更改  选择域  填入 adtest.com
 弹出输入域管理员凭证的对话框  输入密码 重启电脑
 
 现在 去域控制器 打开  AD 用户和计算机 就有 boss 的账号了. 成功加入.
 
# 创建用户账号
计算机加入域后 要给员工 在 ad 中创建 关联的用户账号
选择 AD 用户和计算机 选择新建 组织单位
名称: 网络部
然后在该部门下 新建用户
输入 账号 姓名 密码 完成.


# 用户权限分配
实验: boss 上一个共享文件夹 的 读权限 分配给 xx
1. boss 文件夹 属性 共享 高级共享 权限
默认权限是 任何人都只读.
删除everyone 组.
点击添加  输入对象名称来选择下面 输入 xx 确定
给予 读 权限  确定


然后 
域管理员 去访问 boss 共享文件夹试试 应该是没有权限的.

用 xx 账号 登录 就能访问. 而且 xx 不用进行身份验证. 因为xx登录的时候 已经输入密码了.


# 域控制器的备份&还原
万一控制器坏了!! 
windows 自带的备份工具 可以对 AD 进行完全备份.


服务器管理器
添加 windowsServer backup 功能
类似 DNS 不在详解.

本地备份:
一次性备份 
其他选项
自定义备份
添加项目
系统状态
下一步
备份到 远程共享文件夹.
指定文件路径
下一步 就好了.


还原的话 新电脑ip 改成和之前的 AD 保持一致 DNS 也得和之前一致,


备份 AD 这种方式有缺陷的.   还原的时候 整个公司就瘫掉了

这时 就可以 部署 额外域控制器. 
这样做好处很多.  能起到负载平衡的作用.



dns 的 区域名  要和 ad 的域名一致??

一定要允许 动态更新, 因为创建域的过程中 需要向 dns 写入 A 记录 SRV 记录 和 Cname 记录



## 检查 NS SOA 记录
NS 域 属性 名称服务器 就是

SOA 起始授权机构
负责 刷新间隔 过期间隔的










## Active Dirctory / AD 活动目录

## 网络环境:
工作组 和 域  

工作组:每台电脑地位都是平等的.资源分散在每台电脑上

## 为什么需要域:

 

## SAM 数据库:
作用: 储存+验证 用户账号.
每台工作组环境下的电脑都有自己的本机安全账户数据库.

工作组的登录验证过程:
开机 - 输入账户密码 - 电脑去 SAM 数据库验证.
如果账号存在 而且密码也对 那就能登录.

SAM 数据库默认位置:

C:\WINDOWS\system32\config


 
 
# 域

作用:
- 公司电脑2000台 可以使得 账户 xujian 相当于可以在任一电脑上登录.

一般微软服务器级别的产品 比如 Exchange 都需要域的支持.

## 域、工作组的区别

域内所有的计算机 共享一个集中式的目录数据库.AD
可以统一进行 添加 更新 等等 

它包含 域内所有的对象 用户账户/计算机账户/打印机/共享文件. 和 安全信息 等等 


大公司: 电脑1000+  
都在网上邻居显示 那就太恐怖了
于是有了工作组:  财务部  人事部 等等 
任何人想去哪个组 知道组名字就可以  不需要任何验证

共享文件可以添加访问密码,但是非常容易破解 很不安全,

域:就严格多了. 网络的严格管理 非常必要!

域控制器 Domain Controller 相当于门卫
没有登记的电脑是进不了域的 也没有办法访问域里面有权限保护的资源.
只能看 平常的通过 windows 共享出来的文件. 


### 命名空间:
 比如 电话本 就是一个 命名空间. 
 通过这个命名空间 就能找到某人的具体信息.
 命名空间 才有 DNS 架构,所以 命名空间 才有 DNS 格式来命名
 可以把域 命名成    xx.com 或者 abc.com
 
 
域 domain   是一种环境 .  是安全的最小边界
域树 domain tree  由有多个域组成的-树形结构排列.
域树内 所有域 共享一个 AD 目录

林 forest
组织单元 organization unit
  

域控制器DC
搭建域服务器的电脑.
 
 一个域  能有多台域控制器.
   最经典的做法是 做一个主辅域控 一个主要的 一个备份的.
域功能:

例如  可以统一设置ie 选项
在开关机时候 自动运行脚本 
远程安装软件


1. 对网络资源的集中控制.
如: 共享文件 打印机 的集中控制

只有授权用户能访问 ad 中的资源,


2. 集中和分散管理.
编写一个组策略. 使得某个软件的升级包 能在每个用户开机的时候自动安装, 

也可以把  销售部的打印机纳入到一个组织单元 把这个单元的权限给销售部的技术人员 减少自己的工作量.

### 域优势
与 DNS 集成.
ad 使用了 dns 一种基于 ip 的 网络服务.
虽然 ad 和 dns 是分开的两部分
但是有相同的 分级结构. 
ad 用 dns 来定位域控制器.


computer 里面 都是域下面的 计算机名字.
user 里面就是一些 用户和组了.
新建的账户 没有指定分配到哪话 也会出现在这里,



AD 账号建立.
姓名 只是描述的  不重要
最重要的数据 就是  登录名 里面的名称
这个名称是拿来登录系统用的.

密码设定
要复杂的密码  有大小写.

等等 具体熟悉详细设定.



### ad 域策略
域默认开启 2个策略
1. 域安全策略:针对整个域的 用户 计算机

2. 域控制器安全策略: 只针对域服务器的.

如果两个策略有冲突的话 域控制器为准.

策略部署:
如  对前台 禁止 c 盘.
前台 右键属性 组策略 新建 双击编辑.
刷新策略 就执行了. 如果客户端要立即生效的话 得去客户端执行一样的命令?  默认 ad 策略是90分钟自动刷新一次的.


计算机配置  命令刷新后 需要注销或者重启.
用户配置 刷新后 可立即生效  个别需要注销



# 客户端加域:
前提 知道域控制器的 IP + 域名
加域之前 要把 DNS 指向到域/ DNS 服务器上!!!

然后重启电脑 就能选择登录环境了 
一个是本机登录  一个是域登录.


# 域的日常维护

远程登录到服务器 查看日志情况.
有无错误日志 或者 警告之类的信息.
发现错误警告 微软帮助主页 输入事件 ID解决.

一星期以内 重启 DNS 和 NETlogon 服务
直接开始 运行 里面 输入下面命令
net stop dns&&net start dns
net stop netlogon&&net start netlogon

第一条是重启 dns
第二条是重启 netlogon 服务

# 日志备份
策略的备份.


对象 
打印机 打印机名称 打印机位置
用户  姓 名 登录名


LDAP 轻量级目录访问协议
提供 通过制定唯一名字路径来访问活动目录的 每一个对象. 

组织党员划分 原则
基于 部门 / 项目 / 业务功能 / 管理 /对象 / 地理位置


AD 对 DNS 的要求
支持 SRV 记录
支持动态更新协议
支持 AD 集成复制


组策略功能:
设置 集中或分散策略


文件夹重新定向
不管用户在哪台电脑登录 数据总是可用的.

数据是集中存储的 便于管理及备份


常用管理工具
AD 用户和计算机
站点和服务
AD 域信任
DNS 管理器

排错工具
事件查看器
network monitor





统一的身份认证
企业有很多信息系统

协同办公系统
财务系统
人力资源系统
项目管理系统
每个系统都要维护一套用户信息 
有了域 就简单 了






# 加域步骤: 好像二选一?  


## 加计算机:
计算机名 更改 输入域名  验证域管理员账户密码.
这时候 去 ad 服务器 打开ad(本地) computer 下面就多了刚加的电脑名字.



## 加用户账号:
加完计算机 还得创建账号.

AD → 新建组织单位(相当于公司部门) → 部门 右键 新建用户 输入 姓名/登录名 等参数. 可能还需启用账户.


# 实例一.
服务器 IBM 上 共享文件夹 财务文件 读权限给QW.

1. AD 上创建 QW 的账号. 
2. 服务器 财务文件 → 右键 共享 → 权限 删除所有默认值 添加 名称哪里 输入 QW 然后检查名称.  给读取权限.

测试:  
用域管理员 访问 财务文件 : 没有访问权限!
换用户QW  访问 财务文件 : 可以访问.

为什么 QW 访问财务文件的时候 不像 FTP 服务器一样要输入密码呢. 这就是域的作用.既然已经经过了域的验证 就不用其他形式的验证了.

相当于一张 多功能通行证. 有了域账号 就能直接
访问各种共享文件, 共享打印机 , 电子邮箱.



# 域备份  很重要.

## 额外域控制器:
备份用 + 负载平衡.


多个域控制器 会出现一个数据不一致的情况.
正常情况 任何一个控制器的修改 别的控制器会立即相应的修改.
万一有个域控制器坏了几天 这段时间别的控制器进行了修改. 就会导致 数据不一致. 这时候按住那个为准呢,

版本号
时间
GUID

版本号:
A 控制器 xujian 账户 密码改了4次
B 控制器 xujian 账户 密码改了5次
按照 B 为准. A 会复制 B 的内容 重新使得数据库一致.

还有就是时间. 按照时间靠后者 优先.


AD 碎片整理:
AD 是用于 查询的 非关系型 数据库.
使用久了 需要维护,提高查询效率.

数据库位置:
C:\Windows \NTDS

NTDS.DIT  数据库文件
EDB.LOG  日志文件 (非常重要)
记录 数据库内容的变更.

大型 AD 维护还是很重要的. 
11G 的数据库 维护后 可以变成 6G
维护 只需要执行命令 不需要人工处理.


多个域控制器. 虽然控制器的地位是平等的.
但是 第一个控制 承担更多任务.不能扔掉.会出现异常问题.



域 是共享用户账号,计算机账号 及 安全策略的一组计算机.

## 组策略
非常重要的一项技术.
组策略 对于管理的重要意义.

组策略是 一个允许执行 针对 用户或计算机 进行配置的基础架构.
通俗点说 和 注册表 类似,是可以修改用户或者计算机设置 的技术.

组策略 和 注册表 区别:
注册表 只能修改一台电脑或者一个用户.
组策略 可以修改多台电脑或者多个用户.


组策略 可以配合 AD 使用,发挥最大作用.













域 书本:
为什么需要域,微软重量级服务产品基本都需要域的支持
工程师 也明确需要 精通域
域 有点复杂
技术术语: Active Directory
站点 组策略 复制拓扑 操作主机角色 全局编录


为什么工作组 不适合中大型网络.

服务器 无非就是 提供资源 分配资源

提供的资源有很多形式
共享文件夹 共享打印机 电子邮箱 数据库 等等

现在要实现 服务器 有个文件夹 只能给某人 A 访问: 实现办法
服务器 添加A用户 访问者能知道 a 的用户名密码 就能访问 文件夹.


 










































## 域下面有三种电脑
1. 域控制器 控制器上存着 Active Directory
2. 成员服务器 提供邮件 数据库 dhcp 等服务
3. 客户端(员工电脑)

DNS 服务器可以在 AD 域外面的.

## 部署域前提

- 搭建好DNS服务器. 
- 创建域控制器
- 创建计算机账号
- 创建用户账号

### DNS 前期准备

 DNS 服务器对域来说是不可或缺的.
 
-  客户端需要填写 DNS 域名: 为客户端提供域名解析服务
-  域中的计算机 需要利用DNS提供的 SRV 记录来定位 域控制器.

# 安装配置 DNS 服务器
 
 安装:
 服务器管理器 → 仪表板 → 添加角色和功能 → 基于角色或基于功能的安装
  → 从服务器池中选择服务器 → 角色选择 DNS 服务器 → 一路下一步. → 重启电脑.
 
 配置:
 服务器管理器 → 右上角 工具 → DNS 
 
 正向查找区域
 新建区域 → 主要区域 → 填写名字.创建文件  允许动态安全更新(不确定选哪个)
 
 反向查找区域
 暂时没必要??
 
 
 检查 NS 和 SOA 记录
 NS: 记录描述了 有多少个 DNS 服务器可以解析这个区域
 SOA: 记录描述了 哪个 DNS 服务器是区域的主服务器.
 
 
 
# AD域部署
 
 域控制器 是域的灵魂.
 首先 查看域服务器网卡的 tcp/ip 属性 
 ip+ 掩码 
 DNS 服务器地址 要填你自建的 DNS本地地址
 
 添加 AD 域角色
 过程类似 DNS 不重复了.
 
 安装好后 服务器管理器 会出现黄色感叹号
 点击 提升域控制器.
 添加新林:
 虽然只是简单新建了一个域 但是 逻辑上是创建了一个域林.  
 域 一定要属于 域树 域树一定要属于域林.
 我们实际上是新建了一个域林 虽然现在这个域林只有一颗域树 域树内 只有一个树根
 
 输入 根域名 adtest.com
 去掉 域名系统(DNS)服务器
 输入密码 (恢复域控制器会用到)
 
 NEtBIOS 域名 ADTEST
 
 下一步 下一步 
 重启电脑  就能用 域管理员身份登录了
 域就成功创建了
 
 现在去检查下 dns 服务器  正向查询 下应该创建了 4/5个文件夹. 如果没有就有问题了.
 
 
 
# 加入域:
 
比如 电脑 boss
 boss DNS 服务器 选择本地的 DNS 
 
 系统属性 计算机名 更改  选择域  填入 adtest.com
 弹出输入域管理员凭证的对话框  输入密码 重启电脑
 
 现在 去域控制器 打开  AD 用户和计算机 就有 boss 的账号了. 成功加入.
 
# 创建用户账号
计算机加入域后 要给员工 在 ad 中创建 关联的用户账号
选择 AD 用户和计算机 选择新建 组织单位
名称: 网络部
然后在该部门下 新建用户
输入 账号 姓名 密码 完成.


# 用户权限分配
实验: boss 上一个共享文件夹 的 读权限 分配给 xx
1. boss 文件夹 属性 共享 高级共享 权限
默认权限是 任何人都只读.
删除everyone 组.
点击添加  输入对象名称来选择下面 输入 xx 确定
给予 读 权限  确定


然后 
域管理员 去访问 boss 共享文件夹试试 应该是没有权限的.

用 xx 账号 登录 就能访问. 而且 xx 不用进行身份验证. 因为xx登录的时候 已经输入密码了.


# 域控制器的备份&还原
万一控制器坏了!! 
windows 自带的备份工具 可以对 AD 进行完全备份.


服务器管理器
添加 windowsServer backup 功能
类似 DNS 不在详解.

本地备份:
一次性备份 
其他选项
自定义备份
添加项目
系统状态
下一步
备份到 远程共享文件夹.
指定文件路径
下一步 就好了.


还原的话 新电脑ip 改成和之前的 AD 保持一致 DNS 也得和之前一致,


备份 AD 这种方式有缺陷的.   还原的时候 整个公司就瘫掉了

这时 就可以 部署 额外域控制器. 
这样做好处很多.  能起到负载平衡的作用.



dns 的 区域名  要和 ad 的域名一致??

一定要允许 动态更新, 因为创建域的过程中 需要向 dns 写入 A 记录 SRV 记录 和 Cname 记录



## 检查 NS SOA 记录
NS 域 属性 名称服务器 就是

SOA 起始授权机构
负责 刷新间隔 过期间隔的





## 域 简介

信任关系



一个域   pc 根据 ad域的用户账号. 分配资源.

大企业 会有很多域 
如何把 A 域的资源 分给 B 域
两种方法: 镜像账户& 创建域信任关系.
1. 镜像账户. 
	两边各建 名字 密码 都相同的账户, 账号重复很不好管理.

2. 创建信任域:
域信任关系 是有方向性的. 也就是单向的.

信任关系的 主动权 掌握在被信任域手中.

A 域 信任 B 域 (也就是从 b 那边获取资源)
a 的资源可以给 b ,b 的资源不能给 a

如果 a 域 信任 b 域名.
a 域的 域控会把 b 的账号复制到自己的 AD 中.

























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 