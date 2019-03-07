---
layout: post
title: 'Python组合数据类型'
tags: [code]
---


# 要素3：组合数据类型

python提供了几种组合数据类型，包括关联数组与集合等类型。
元组与列表：python元组与列表可用于存储任意数量、任意类型的数据项。元组是固定的，创建之后就能该表，列表是可变的，在需要的时候，可以插入或者移除数据项。

创建元组：使用圆括号将其封装在一起，如果某个元组只有一个数据项，就必须使用逗号，比如（"1",）,空元组则使用空的（）创建。

逗号还可以用于在函数调用时分隔参数，因此，如果需要将元组常值作为参数传递，就必须使用括号对其进行封装，以免混淆。

创建列表：使用[]创建，空列表为[].

len()函数可以对括号的对象内容进行数量统计，包括空字符。
比如：
a = len("a dfds f")   >>>print(a)  >>>8

元组、列表以及字符串等数据类型是有大小的，也即是，对这些数据类型而言，长度或者大小等度量有意义的。将这些数据类型的数据项作为参数传递给len()函数是有意义的。

python数据项都是某种特定的数据类型（也称之为“类”）的对象（也称之为“实例”）
