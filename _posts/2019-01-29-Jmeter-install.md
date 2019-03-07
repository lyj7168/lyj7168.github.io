---
layout: post
title: 'Jmeter的下载安装及配置'
tags: [code]
---


# Jmeter的下载安装及配置 #
## What is Jmeter？ ##

> Jmeter是一款很强大的测试工具，是Apache组织开发的给予Java的测试工具。Jmeter可以进行负载测试，对于服务器，网络或者接口模拟现实场景的负载测试，Jmeter还提供了一系列的可视化结果图供对测试结果进行分析及做结论依据。Jmeter还可以对程序进行功能或者回归测试，添加断言来验证程序是否返回了正确的结果，具有很大的灵活性，可操作性。

## Learn more about Jmeter ##

* Jmeter支持HTTP/HTTPS协议，可以发送HTTP/HTTPS的request请求；
* Jmeter支持用户场景，能够分布不同用户的比例在不同的业务上；
* Jmeter支持事务，支持参数化和关联；
* Jmeter的多线程框架允许多个线程并发取样和通过单独的线程组对于不同的功能同时取样；
* Jmeter 提供各种的统计表和计时器可供选择

## Jmeter4.0 installation and configuration ##

* 1.进入Jmeter[官方网站](http://archive.apache.org/dist/jmeter/binaries/)

图片

* 2.向下滑动，找到apache-jmeter-4.0.zip，点击进行下载，一定要看好后缀名。

图片

* 3.下载的是Jmeter4.0版本，对应jdk版本为1.8，然后进行解压
> 下载文件加压之后压缩包叫apache-jmeter-4.0.zip，如是src.zip后缀的都不对，打开之后会报错不可用，里面缺少环境变量.jar文件；
> 对应的jdk版本不可太低，一般Jmeter3.0的对应jdk1.7，Jmeter4.0对应jdk1.8以上；
> 确保环境变量配置正确（包括jdk与Jmeter）

* 4. 首先进行jdk1.8版本环境变量配置，下载jdk1.8版本，可进行官网下载，可进行百度搜索下载。这里下载的是jdk-8u91-windows-x64，进行解压。
   4.1 电脑桌面-->计算机-->鼠标右键点击属性-->点击高级系统设置-->点击高级环境变量页面。

图片

   4.2 在系统变量框，点击“新建”，建立一个变量：JAVA_HOME,值为解压的jdk安装路径。建议安装路径是在C盘，路径根据自己实际安装路径进行填写。然后点击确定保存即可。

图片


   4.3 在系统变量中查看是否有“classpath”变量，如果没有，则新建这个变量，变量名classpath  变量值为：.;%JAVA_HOME%\lib; 注意，此变量值以英文句点符号开始，以分好结束。然后点击确定，返回环境变量对话框。

图片

   4.4 在系统变量里面找到Path变量，注意，这次是点击编辑按钮，在弹出的对话框中的变量值的最后，一定是最后，添加如下字符串：
;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin。
> 注意：字符串前面第一个是分号。如下图形式可以不必添加第一个分号。如果没有Path变量，则添加Path变量，添加步骤和前面一样，不在重复。

图片

   4.5 然后确定返回到桌面，然后打开“命令提示符”（以管理员的身份运行），输入java –version ,出现下图所示输出，则说明jdk安装成功。

图片

* 5.Jmeter环境变量及相关配置
   5.1 电脑桌面计算机鼠标右键点击属性点击高级系统设置点击高级环境变量页面。

图片

   5.2 在系统变量框，点击“新建”，建立一个变量：JMETER_HOME,值为解压的jmeter安装路径。建议安装路径是在C盘，路径根据自己实际安装路径进行填写。然后点击确定保存即可。

图片

图片

   5.3 配置classpath变量，没有的话也要按照上面步骤进行新建，有的话直接进行选中，点击编辑即可。变量值固定为：
%JMETER_HOME%\lib\ext\ApacheJMeter_core.jar;%JMETER_HOME%\lib\jorphan.jar;%JMETER_HOME%\lib/logkit-2.0.jar;  
> 注意：做完之后要保存，不确定的话可以直接点击确定按钮直到退到我的电脑页面。

图片

* 6.基本配置完成，然后验证一下是否配置正确，是否可用。首先进到jmeter安装路径，找到bin文件夹，点击，Jmeter启动文件，后缀名名.jar，如图一，点击运行。如若没有则点击.bat文件，如下图二：

图片一

图片二

* 7.确认是否安装成功，Jmeter运行成功，工作面板如下：

图片

* 8.可发送快捷方式到桌面方便打开，Jmeter下载安装配置完成。