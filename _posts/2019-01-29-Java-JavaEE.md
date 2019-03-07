---
layout: post
title: '关于Java SE、Java EE、Java ME'
tags: [code]
---


# Java SE、Java EE、Java ME
> 1998年12月Sun公司公布的Java 1.2版本，将Java 1.2版本名字改成为“Java 2软件开发工具箱1.2”。它的后续版本也通常被称为“Java 2标准版”（J2SE），在J2SE推出的同时，还推出了“Java 2微缩版（J2ME）”和“Java 2企业版（J2EE）”

* J2SE为创建和运行Java程序提供最基本环境，是Java技术的核心和基础。
* J2EE为基于服务器的分布式企业应用提供开发和运行环境，是目前Java技术应用最广泛的部分，J2EE不仅继承了J2SE中的许多优点，同时还提供了对EJB、JSP、Servlet以及XML技术的全面支持，降低了企业级开发的复杂度。
* J2ME为嵌入式应用提供开发和运行环境，例如手机程序和PDA程序等。
* 在Java 5.0（或者称为1.5）版本推出后，为了避免版本混淆，便将J2SE、J2EE和J2ME改称为Java SE 5、Java EE 5和Java ME 5,后续版本只变更相应版本号，例如Java EE 6
* Java SE（Java Platform，Standard Edition）。Java SE 以前称为 J2SE。它允许开发和部署在桌面、服务器、嵌入式环境和实时环境中使用的 Java 应用程序。Java SE 包含了支持 Java Web 服务开发的类，并为 Java Platform，Enterprise Edition（Java EE）提供基础。
* Java EE（Java Platform，Enterprise Edition）。这个版本以前称为 J2EE。企业版本帮助开发和部署可移植、健壮、可伸缩且安全的服务器端 Java 应用程序。Java EE 是在 Java SE 的基础上构建的，它提供 Web 服务、组件模型、管理和通信 API，可以用来实现企业级的面向服务体系结构（service-oriented architecture，SOA）和 Web 2.0 应用程序。
* Java ME（Java Platform，Micro Edition）。这个版本以前称为 J2ME。Java ME 为在移动设备和嵌入式设备（比如手机、PDA、电视机顶盒和打印机）上运行的应用程序提供一个健壮且灵活的环境。Java ME 包括灵活的用户界面、健壮的安全模型、许多内置的网络协议以及对可以动态下载的连网和离线应用程序的丰富支持。基于 Java ME 规范的应用程序只需编写一次，就可以用于许多设备，而且可以利用每个设备的本机功能。
* Java SE 是做电脑上运行的软件。
* Java EE 是用来做网站的-（我们常见的JSP技术）
* Java ME是做手机软件的。

* 1.JAVA SE
Java2平台标准版(Java2 Platform Standard Edition)，主要面向个人PC桌面应用程序开发，其中包括：
a、Java运行环境(Java Runtime Environment, JRE)，包含基本类库，Java虚拟机，Applet组件等；
b、Java开发工具包(Java Development Kit, JDK)，是JRE的扩展集，包含Java编译器和调试器等。

* 2.JAVA EE 
Java2平台企业版(Java2 Platform Enterprise Edition)，主要面向复杂的企业级应用，基于J2SE。

* 3.JAVA ME
Java2平台微型版(Java2 Platform Micro Edition)，主要是面向移动设备、嵌入式设备等的开发，基于J2SE。
