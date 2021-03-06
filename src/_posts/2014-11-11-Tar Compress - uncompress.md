---
layout: post
title: Tar Compress / uncompress
tags: Misc
categories: 👓-Linux
---

### Tar Compress / uncompress
压缩:compress
解压:uncompress

*压缩原理:
文件是用 byte来计量的    1byte=8bits
比如 数字1   实际是00000001     
前面有7个o 这个可以通过软件去掉 这就是压缩.


还有 比如有个数据  有连续100个1    
压缩技术会用100个1  几个字 代替真的100个1字 这也是压缩

> 简单的说  文件里面有相当多的空间存在  0000001 前面的0 都是空间. 压缩就是优化这些没用的0空间


多文件 压缩的话 用 tar

**tar -j ctx v filaname.tar.bz2    **   

mkisofs  把文件变成映像 

cdrecord  光盘刻录.



**打包：**
将许多个文件和目录合并保存为一个整体的包文件，以方便传递或携带。   

**压缩：**
进一步降低打包好的包文件所占用的磁盘空间。
   
 在linux系统中比较常见的压缩工具包括gzip、bzip2，最常用的打包命令工具为tar。使用tar命令可以通过特定选项自动调用gzip或bzip2程序，以完成打包，压缩的整套流程，当然也可以完成解压，释放包文件的整套流程。
gzip和bzip2是linux系统中常用的两个压缩工具，这两个命令都可以压缩指定的文件，或者将已经压缩过的文件进行再次压缩。（不能对目录进行压缩）两者使用的压缩算法个不相同但命令使用格式基本类似，一般来所bzip2的压缩比率要好些。   
gzip ：压缩和解压缩工具，默认后缀是“.gz”。   
gzip [选项]() [目标文件]()   
-9 ：提高压缩的比率。   
-d ：解压缩，默认解压到当前目录。   
列如：一下操作将对当前目录下的file文件进行压缩，生成压缩文件file.gz（原始文件file不在保留），压缩后的文件大小变为242KB（未压缩时为892KB）

bzip2和bunzip2 ：压缩和解压缩工具，默认后缀是“.bz2”。   
bzip2 [选项]() [目标文件]()   
-9 ：提高压缩的比率。   
-d ：解压缩，默认解压到当前目录。   
列如：一下操作将对当前目录下的file文件进行压缩，生成压缩文件file.bz2（原始文件file不在保留），压缩后的文件大小变为206KB（未压缩时为892KB）

tar命令主要是对目录和文件进行打包，在实际的备份工作中，通常在打包的同时也会将包文件进行压缩（需要调用前面的gzip或bzip2），以便节省磁盘空间。使用tar命令时选项前面的“-”好可以省略。   
-c ：创建.tar格式的包文件。   
-C ：解包是制定释放的目标文件。   
-f ：表示使用归档文件。   
-j ：调用bzip2程序进行压缩或解压。   
-p ：打包时保留文件及目录的权限。   
-P ：打包时保留文件及目录的绝对路径。   
-t ：列表查看包内的文件。   
-v ：输出详细信息。   
-x ：解开.tar格式的包文件。   
-z ：调用gzip程序进行压缩或解压。
制作打包文件   
tar [选项]() [归档及压缩文件名]() [需要归档的源文件或目录]()   
如果需要对制作的归档文件进行压缩，可以通过“-z”或“-j”选项自动调用压缩工具（分别对应gzip、bzip2命令程序）进行压缩。   
列如：以下操作将/boot目录进行打包压缩，在当前目录下生成名为boot.tar.gz的包文件。

从包文件中解压数据   
tar [选项]() [归档及压缩文件名]() [-C 目标目录]()   
当从“ .tar.gz”格式的包文件中解压数据时，需要结合“-z”选项来自动调用压缩工具，而对于“ .tar.bz2”格式的归档压缩包，对应的是“-j”选项。默认情况下，解压的数据将放在当前目录，如果要恢复到指定的目录下，还需要使用“-C”选项来指定目标目录。   
列如：以下操作将上面打包的“boot.tar.gz”文件解压到根目录下。（将覆盖现有的目录）

注意：使用tar命令可以很好的结合gzip、bzip2压缩工具，所以我们很少会将gzip和bzip2单独调用。都是将“gzipb和zip2”结合到tar命令中一起使用的。





