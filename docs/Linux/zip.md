# zip命令

> `zip`和`unzip`是在Linux和Unix系统上用于创建和提取ZIP文件的命令行工具。ZIP文件是一种常见的归档格式，可以压缩和存档多个文件和目录。

### 语法

```
zip [选项] [归档文件名] [文件或目录...]
```

### 选项

- `-r`：递归地包含目录及其内容。
- `-q`：静默模式，不显示操作过程。
- `-9`：使用最高压缩级别。
- `-j`：仅压缩文件，不包含目录结构。
- `-u`：仅更新归档文件中已存在的文件。
- `-d`：从归档文件中删除指定的文件。
- `-v`：显示详细信息，即在操作过程中显示文件名。

### 示例

1. 创建一个名为`archive.zip`的ZIP文件，包含文件`file1.txt`和`file2.txt`：

   ```
   zip archive.zip file1.txt file2.txt
   ```

2. 创建一个名为`archive.zip`的ZIP文件，包含目录`directory`及其内容：

   ```
   zip -r archive.zip directory
   ```

3. 创建一个使用最高压缩级别的ZIP文件`archive.zip`，包含目录`directory`和文件`file.txt`：

   ```
   zip -9 archive.zip directory file.txt
   ```

4. 更新已存在的ZIP文件`archive.zip`，添加文件`file3.txt`：

   ```
   zip -u archive.zip file3.txt
   ```

## unzip命令

`unzip`命令用于从ZIP文件中提取文件和目录。

### 语法

```
unzip [选项] [归档文件名]
```

### 选项

- `-l`：显示归档文件中的内容列表，而不提取文件。
- `-q`：静默模式，不显示操作过程。
- `-o`：覆盖已存在的文件。
- `-d 目录`：指定提取文件的目标目录。

### 示例

1. 提取ZIP文件`archive.zip`中的所有文件到当前目录：

   ```
   unzip archive.zip
   ```

2. 提取ZIP文件`archive.zip`中的所有文件到指定目录`destination`：

   ```
   unzip archive.zip -d destination
   ```

3. 显示ZIP文件`archive.zip`中的内容列表：

   ```
   unzip -l archive.zip
   ```

4. 提取ZIP文件`archive.zip`中的单个文件`file1.txt`：

   ```
   unzip archive.zip file1.txt
   ```

