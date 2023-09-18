# cp命令

> `cp`命令用于复制文件和目录。它可以将文件或目录从一个位置复制到另一个位置，并可以选择保留文件属性和目录结构。

### 语法

```
cp [选项] 源文件 目标文件
```

### 选项

- `-r`或`-R`或`--recursive`：递归复制目录及其内容。
- `-i`或`--interactive`：交互式复制，复制前提示确认。
- `-v`或`--verbose`：显示详细的复制信息。
- `-p`或`--preserve`：保留源文件的属性，如权限、所有者和时间戳。
- `-u`或`--update`：仅复制源文件中比目标文件更新的文件。
- `-l`或`--link`：创建硬链接而不是复制文件。
- `-s`或`--symbolic-link`：创建符号链接而不是复制文件。

### 参数

- 源文件：指定要复制的源文件或目录。
- 目标文件：指定复制后的目标文件或目录。

### 示例

1. 复制文件`file.txt`到目标位置`/path/to/destination`：

   ```
   cp file.txt /path/to/destination
   ```

2. 递归复制目录`dir`及其内容到目标位置`/path/to/destination`：

   ```
   cp -r dir /path/to/destination
   ```

3. 复制目录`dir`及其内容到目标位置`/path/to/destination`，并保留文件属性：

   ```
   cp -rp dir /path/to/destination
   ```

4. 仅复制源文件中比目标文件更新的文件：

   ```
   cp -u source.txt destination.txt
   ```

