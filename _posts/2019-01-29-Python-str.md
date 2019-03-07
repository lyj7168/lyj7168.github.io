---
layout: post
title: 'Python字符串的常见操作'
tags: [code]
---


# python字符串常见操作

### find
  
检查str是否包含在mystr中，如果是返回开始start的索引值，否则返回-1

	mystr.find(str, start=0, end=len(mystr))

### index

跟find()方法一样，只不过如果str不在mystr中会报一个异常

	mystr.index(str, start=0, end=len(mystr))

### count

返回str在start和end之间在mystr里面出现的次数

	mystr.count(str, start=0, end=len(mystr))

### replace

把mystr中的str1替换成str2，如果count指定，则替换不超过count次
	
	mystr.replace(str1, str2, mystr.count(str1))

### split

以str为分隔符切片mystr，如果maxsplit有指定值，则仅分割maxspit个子字符串
	
	mystr.split(str=" ", 2)
	例如：
	name = "hello world ha hah"
	name.split(" ")
	['hello', 'world', 'ha', 'hah']
	name.split(" ", 2)
	['hello', 'world', 'ha', 'hah']
	
### capitalize   英 [ˈkæpɪtəlaɪz]

把字符串的第一个字符大写

	mystr.capitalize()

### title

把字符串的每个单词首字母大写

	例如：
	 a = 'hello world'
	 a.title()
	 'Hello World'

### startswith

检查字符串是否是以hello开头，是则返回True，否则返回False

	mystr.startswith(hello)

### endswith

检查字符串是否以obj结束，如果是返回True，否则返回False

	mystr.endswith(obj)

### lower

转换mystr中所有大小写字符为小写
	
	mystr.lower()

### upper

转换mystr中的小写字母为大写
	
	mystr.upper()

### ljust

返回一个原字符串左对齐，并使用空格填充至长度width的新字符串
	
	mystr.ljust(width)
	例如：
	mystr = 'hello'
	mystr.ljust(10)
	'hello     '
	
### rjust

返回一个原字符串右对齐，并使用空格填充至长度width的新字符串

	mystr.rjust(width)

### center

返回一个原字符串居中，并使用空格填充至长度为width的新字符串
	
	mystr.center(width)

### lstrip

删除mystr左边的空白字符
	
	mystr.lstrip()

### rstrip

删除mystr字符串末尾的空白字符
	
	mystr.rstrip()

### strip

删除字符串两端的空白字符
	
	mystr.strip()

### rfind

类似与find()函数，不过是从右边开始查找,找到返回start的值
	
	mystr.rfind(str, start=0, end=len(mystr))

	例如：
	mystr = "absda"
	print(mystr.find("a"))
	print(mystr.rfind("a"))
	0
	4

* find是从字符串左边开始查询子字符串匹配到的第一个索引
* rfind是从字符串右边开始查询字符串匹配到的第一个索引,索引都是从左向右开始的


### rindex

类似于index()函数，不过是从右边开始
	
	mystr.rindex(str, start=0, end=len(mystr))

### partition

把mystr以str分割成三部分，str前，str中，str后
	
	mystr.partition(str)
	例如：
	mystr = "hello world python and java"
	mystr.partition("python")
	('hello world', 'python', 'and java')

### rpartition

类似于partition()函数，不过是从右边开始的
	
	mystr.partition(str)

### splitlines

按照行分割，返回一个包含各行作为元素的列表
	
	mystr.splitlines()

### isalpha

如果所有字符都是字母，则返回True，否则返回False
	
	mystr.isalpha()

### isdigit

如果mystr只包含数字则返回True，否则返回False，
	
	mystr.isdigit()

### isalnum

如果mystr所有字符都是字母或者数字则返回True，否则返回False
	
	mystr.isalnum()

### isspace
	
如果mystr中只包含空格，则返回True，否则返回False
	
	mystr.isspace()

### join
	
mystr中每个元素后面插入str，构造出一个新的字符串

	mystr.join(str)
	例如:
	str = " "
	li = ["hello", "world", "is", "python"]
	str.join(li)
	'hello world is python'
	str = "_"
	str.join(li)
	'hello_world_is_python'