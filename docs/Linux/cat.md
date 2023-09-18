# cat命令

> `cat`命令用于连接文件并打印它们的内容。它是"concatenate"（连接）的缩写。`cat`命令常用于显示文件的内容、创建文件的副本以及将多个文件合并为一个文件。

## 语法

```
cat [选项] 文件...
```

### 选项

- `-n`或`--number`：显示行号。
- `-b`或`--number-nonblank`：显示非空行的行号。
- `-s`或`--squeeze-blank`：压缩连续的空行为一行。
- `-E`或`--show-ends`：在每行末尾显示`$`符号。
- `-T`或`--show-tabs`：将制表符显示为`^I`。
- `-v`或`--show-nonprinting`：显示非打印字符。

### 参数

- 文件：要连接和显示内容的文件。

### 示例

1. 显示文件`file.txt`的内容：

   ```
   cat file.txt
   ```

2. 显示文件`file1.txt`和`file2.txt`的内容：

   ```
   cat file1.txt file2.txt
   ```

3. 将文件`file1.txt`和`file2.txt`的内容合并为一个文件`merged.txt`：

   ```
   cat file1.txt file2.txt > merged.txt
   ```

4. 显示文件`file.txt`的内容，并显示行号：

   ```
   cat -n file.txt
   ```

5. 显示文件`file.txt`的内容，并将制表符显示为`^I`：

   ```
   cat -T file.txt
   ```

