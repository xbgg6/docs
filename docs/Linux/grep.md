

# grep命令

> `grep`是一个强大的命令行工具，用于在文本文件中搜索指定的模式。它可以帮助您快速定位和提取包含特定内容的行。

### 语法

```
grep [选项] 模式 文件...
```

### 选项

- `-i`：忽略大小写。
- `-v`：反转匹配，显示不包含模式的行。
- `-r`：递归搜索子目录中的文件。
- `-n`：显示匹配行的行号。
- `-l`：仅显示包含模式的文件名。
- `-w`：仅匹配完整的单词。
- `-c`：仅显示匹配的行数。
- `-A num`：显示匹配行及其后`num`行的内容。
- `-B num`：显示匹配行及其前`num`行的内容。
- `-C num`：显示匹配行及其前后各`num`行的内容。

### 示例

1. 在文件`file.txt`中搜索特定模式（例如，`pattern`）：

   ```
   grep pattern file.txt
   ```

2. 在文件`file1.txt`和`file2.txt`中搜索特定模式：

   ```
   grep pattern file1.txt file2.txt
   ```

3. 在文件`file.txt`中搜索特定模式，并显示匹配行的行号：

   ```
   grep -n pattern file.txt
   ```

4. 在文件`file.txt`中搜索特定模式，并显示匹配行及其后2行的内容：

   ```
   grep -A 2 pattern file.txt
   ```

5. 在目录及其子目录中的所有文件中递归搜索特定模式：

   ```
   grep -r pattern directory
   ```

