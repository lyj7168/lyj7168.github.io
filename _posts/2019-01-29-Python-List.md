---
layout: post
title: 'Python之列表'
tags: [code]
---


# python之列表

### 列表的格式
* list = ['a', 'b', 'c']

	列表中的元素可以是不同类型的，比C语言强大
* list = [1, 'b']

> 列表可以使用下标取值


	namesList = ['xiaoWang','xiaoZhang','xiaoHua']
    print(namesList[0])
    print(namesList[1])
    print(namesList[2])
	结果：
	xiaoWang   
	xiaoZhang    
	xiaoHua

### 使用for循环遍历列表

	demo：
	list = ['a', 'b', 'c']
	for name in list:
	print(name)
	a  
	b  
	c

### 使用while循环
	demo:
	list = ['a', 'b', 'c']
	length = len(list)
	i = 0
	while i < length:
		print(list[i])
		i += 1
	结果：
	a
	b
	c

# 列表的相关操作

### 添加元素（“增”append，extend，insert）

append() 追加单个元素到listA尾部，只接受一个参数，参数可以是任何数据类型，被追加的元素在listA中保持原结构类型

	demo：
	#定义变量A，默认有3个元素
	listA = ['a', 'b', 'c']
	listA.append('d')
	print(listA)
	结果：
	['a', 'b', 'c', 'd']

extend() 将一个列表中每个元素分别添加到另一个列表中，只接受一个参数，extend相当于是将listB链接到listA中

	demo1：
	listA = ['a', 'b', 'c']
	listB = [1, 2]
	listA.extend(listB)
	print(listA)
	结果：
	['a', 'b', 'c', 1, 2]

	demo2:
	listA = ['a', 'b', 'c']
	listB = [1, 2]
	listA.append(listB)
	print(listA)
	结果：
	['a', 'b', 'c', [1, 2]]

insert() 是将一个元素插入到列表的指定坐标中，

	公式:insert(坐标, "元素") 

	demo：
	listA = ['a', 'b', 'c']
	listA.insert(1, 'e')
	print(listA)
	结果：
	['a', 'e', 'b', 'c']

加号，+可以将两个list相加，会得到一个新的list列表

	demo：
	listA = ['a', 'b', 'c']
	listB = [1, 2]
	listC = listA + listB
	print(listC)
	结果：
	['a', 'b', 'c'， 1, 2]

注意：append，extend，insert都没有返回值，是对列表的操作，不返回新的对象，加号是返回新的对象，尽量不要采用这种方法。
	
### 修改元素（根据下标修改）

	demo：
	listA = ['a', 'b', 'c']
	listA[2] = 'f'
	print(listA)
	结果：
	['a', 'b', 'f']

### 查找元素（in, not in, index, count）

in 判断元素是都在列表中，是返回True，否返回False
	
	demo：
	listA = ['a', 'b', 'c']
	if 'f' in listA:
		print('True')
	else:
		print('False')
	结果：
	False

not in判断元素是否不在列表中，与 in 的含义相反。

index和count的用法相同，但是返回值不同

> count返回的是元素出现的次数，不存在返回0

	demo：
	listA = ['a', 'b', 'c']
	A = listA.count('c')
	print(A)
	结果：
	1

> index返回的是元素下标，是元素第一次出现的位置的下标。不存在报错

	demo2:
	listA = ['c', 'a', 'b', 'c']
	A = listA.index('c')
	print(A)
	结果：
	0

> index还可以应用到切片中,存在的话返回元素在切片中出现的第一个位置的下标，不存在报错。

	demo：
	listA = ['a', 'b', 'c', 'd']
	A = listA.index('c', 0, 3)
	print(A)
	结果：
	2

### 删除元素（‘删’ del, pop, remove）

del 根据下标进行删除

	demo：
	listA = ['a', 'b', 'c']
	del listA[2]
	print(listA)
	结果：
	['a', 'b']

remove 删除指定元素，没有该元素报错

	demo：
	listA = ['a', 'b', 'c']
	listA.remove('b')
	print(listA)
	结果:
	['a', 'c']

pop 方法删除元素，当()里面没有索引值时，默认删除最后一个元素
	
	demo：
	listA = ['a', 'b', 'c']
	listA.pop(0)
	print(listA)
	listA.pop()
	print(listA)
	结果：
	['b', 'c']
	['b']

### 排序（sort， reverse）

sort方法是将list按特定顺序重新排列，默认为由小到大，参数reverse=True可改为倒序，由大到小。

reverse方法是将list逆置。

	demo：
	listA = [1, 4, 5, 2, 3, 9, 6]
	listA.reverse()
	print(listA)
	listA.sort()
	print(listA)
	listA.sort(reverse=True)
	print(listA)
	结果：
	[6, 9, 3, 2, 5, 4, 1]
	[1, 2, 3, 4, 5, 6, 9]
	[9, 6, 5, 4, 3, 2, 1]

### 列表排序拓展

sorted() 函数

简单的升序排序：调用sorted方法，返回新的list

	demo：
	listA = [1, 4, 5, 2, 3, 9, 6]
	listA = sorted(listA)
	print(listA)
	结果：
	[1, 2, 3, 4, 5, 6, 9]

> 注意：打印的listA和原listA已经不是一个对象了


key参数/函数
>key参数的值作为一个函数，此函数只有一个参数且返回一个值用来进行比较。

	demo：
	listA = [
	('wang', 'A', '25'),
	('liu', 'B', '27'),
	('zhao', 'A', '24'),
	('zhou', 'C', '28'),
	]
	
	listB = sorted(listA, key=lambda age: age[2])
	print(listB)
	结果：
	[('zhao', 'A', '24'), ('wang', 'A', '25'), ('liu', 'B', '27'), ('zhou', 'C', '28')]

Operator模块函数

	demo：
	from operator import itemgetter, attrgetter
	listA = [
    ('wang', 'A', '25'),
    ('liu', 'B', '27'),
    ('zhao', 'A', '24'),
    ('zhou', 'C', '28'),
	]
	listB = sorted(listA, key=itemgetter(2))
	print(listB)
	结果：
	[('zhao', 'A', '24'), ('wang', 'A', '25'), ('liu', 'B', '27'), ('zhou', 'C', '28')]

### 列表的嵌套

一个列表中的元素又是一个列表，这就是列表的嵌套

应用：

一个学校，有3个办公室，现在有8位老师等待工位的分配，请编写程序，完成随机的分配

	demo：
	import random

	#定义列表用来保存3个办公室
	office_list = [[], [], []]

	#定义一个列表用来存储8位老师的名字
	teacher_list = ['zhao', 'qian', 'sun', 'li', 'zhou', 'wu', 'zheng', 'wang']

	i = 0
	for name_t_l in teacher_list:
    office_index = random.randint(0, 2)
    office_list[office_index].append(name_t_l)

	print('* '*20)

	i = 1
	for office_name in office_list:
    	print('办公室%d的人数为：%d' % (i, len(office_name)))
    	i += 1
    	for name in office_name:
        	print('%s  ' % name, end='')
    	print('\n')
    	print('* '*20)

