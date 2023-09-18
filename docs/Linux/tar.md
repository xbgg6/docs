# tar命令

> `tar`是一个常用的命令行工具，用于在Linux和Unix系统上进行文件归档和压缩。它可以将多个文件或目录打包成一个单独的归档文件，并可选择是否进行压缩。

### 语法

```
tar [选项] [归档文件] [文件或目录...]
```

### 选项

- `-c`：创建归档文件。
- `-x`：从归档文件中提取文件。
- `-v`：显示详细信息，即在操作过程中显示文件名。
- `-f 文件`：指定归档文件的名称。
- `-z`：使用 gzip 压缩归档文件（通常使用 `.tar.gz` 或 `.tgz` 扩展名）。
- `-j`：使用 bzip2 压缩归档文件（通常使用 `.tar.bz2` 或 `.tbz` 扩展名）。
- `-x`：从压缩的归档文件中提取文件。
- `-t`：显示归档文件中的内容列表，而不提取文件。
- `-C 目录`：指定提取文件的目标目录。

### 示例

1. 创建一个名为`archive.tar`的归档文件，包含文件`file1.txt`和`file2.txt`：

   ```
   tar -cf archive.tar file1.txt file2.txt
   ```

2. 创建一个使用 gzip 压缩的归档文件`archive.tar.gz`，包含目录`directory`：

   ```
   tar -czf archive.tar.gz directory
   ```

3. 从归档文件`archive.tar`中提取所有文件：

   ```
   tar -xf archive.tar
   ```

4. 从使用 gzip 压缩的归档文件`archive.tar.gz`中提取所有文件：

   ```
   tar -xzf archive.tar.gz
   ```

5. 显示归档文件`archive.tar`中的内容列表：

   ```
   tar -tf archive.tar
   ```

6. 从归档文件`archive.tar`中提取文件到指定目录`destination`：

   ```
   tar -xf archive.tar -C destination
   ```

