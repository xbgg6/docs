# head less命令

## head命令

> `head`和`less`是在Linux和Unix系统上用于查看文件内容的命令行工具。它们可以用于快速预览文件的开头部分，并允许您浏览和搜索文件内容。

### 语法

```
head [选项] [文件名]
```

### 选项

- `-n 行数`：指定显示文件的前n行，默认为10行。
- `-c 字节数`：指定显示文件的前n个字节。
- `-q`：静默模式，不显示文件名。
- `-v`：显示文件名。

### 示例

1. 显示文件`example.txt`的前10行：

   ```
   head example.txt
   ```

2. 显示文件`example.txt`的前5行：

   ```
   head -n 5 example.txt
   ```

3. 显示文件`example.txt`的前100个字节：

   ```
   head -c 100 example.txt
   ```

4. 静默模式下显示文件`example.txt`的前10行：

   ```
   head -q example.txt
   ```

## less命令

> `less`命令用于逐页查看文件的内容，并提供更多的浏览和搜索功能。

### 语法

```
less [选项] [文件名]
```

### 选项

- `-N`：显示行号。
- `-i`：忽略搜索时的大小写。
- `-F`：当只查看一个文件时，不进入交互式模式。
- `/关键词`：搜索文件中的关键词。
- `n`：跳转到下一个搜索结果。
- `N`：跳转到上一个搜索结果。

### 示例

1. 使用`less`命令查看文件`example.txt`的内容，并逐页浏览：

   ```
   less example.txt
   ```

2. 使用`less`命令查看文件`example.txt`的内容，并显示行号：

   ```
   less -N example.txt
   ```

3. 在`less`命令中搜索文件`example.txt`中的关键词`hello`：

   ```
   less example.txt
   /hello
   ```

   

