---
layout: post
title: 'Python的数据类型'
tags: [code]
---



# 要素1：python 的数据类型
python提供了几种内置的数据类型。

> int 类型：表示整数（正整数或负整数）

> str 类型：表示字符串（Unicode字符序列）

python所能表示的整数大小只受限于机器内存，而非固定数量的字节数，字符串可以使用双引号或者单引号封装————只要字符串头尾使用的符号是对称的。

python使用的是Unicode编码，因此字符串中的符号不局限于ASCII字符，比如"fhjdsahf&#*$",空字符串只使用引号，中间没有任何内容。

python的字符串可以用下标取值，下标取值方式例如
> a = "hello world"

> print(a[5])

> 取值为空，也就是hello和world中间的空字符，下标取值从0开始到4结束，不包含结束下标，为左闭右开区间。字符串的下标从第一位字符以0开始。也即是python中，索引位置是从0开始计数的。

python中，str类型与基本的数值类型（int）都是固定的————也就是一旦设定，其值就不能改变。唯一的原因是想说明：虽然可以使用方括号取回字符串中某个给定索引位置处的字符，但是不能将其设置为新字符。
> 注意：python中，字符就是指长度为1的字符串。

转换语法：datatype(item):例如：>>>int("45")
int()转换可以允许头尾处带有空格，因此，int(" 45 ")也是正确的。

#:要素2：对象引用
python中没有兵役存储某种类型数据的变量，而是使用“引用对象”。在python中，"="的作用是将对象引用与内存中的某个对象进行绑定，如果对象引用已经存在，就简单的进行重绑定，以便引用"="操作符右面的对象，如果对象引用尚未存在，就由"="操作符创建对象引用。

用于对象引用的名称（称为“标识符”），标识符不能与任何python关键字相同，并且必须以字母或者下划线引导，其后跟随0个或者多个非空格字符、下划线或数字。标识符没有长度限制，字母与数字指的是Unicode编码中的所定义的，也就是说，包含但不仅仅限于ASCII编码定义的字母与数字（"a"、"z"、"A"、"Z"、"0"、"9"）。

此外，python标识符是大小写敏感的，因此Limit、limit、LIMIT是3个不同的标识符。

python使用“动态类型”机制，也就是说，在任何时刻，只要需要，某个对象引用都可以重新引用一个不同的对象（可以是不同数据类型），使用强类型的语音（C++，Java），只允许执行与某种特定数据类型绑定的操作，python也是用于这一约束，但在python中，由于使用的是动态类型机制，因此有效的操作时可以改变的，比如：某个对象那个引用可以重新绑定到不同数据类型的对象。
例如：
route = 866  >>>print(route, type(route))
route = "North"   >>>print(route, type(route))


