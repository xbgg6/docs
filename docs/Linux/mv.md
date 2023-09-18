

# mv命令

> `mv`命令用于移动文件和目录，也可以用于重命名文件和目录。它可以将文件或目录从一个位置移动到另一个位置，也可以在同一个位置下重命名文件或目录。

### 语法

```
mv [选项] 源文件 目标文件
```

### 选项

- `-i`或`--interactive`：交互式移动，移动前提示确认。
- `-v`或`--verbose`：显示详细的移动信息。
- `-u`或`--update`：仅移动源文件中比目标文件更新的文件。
- `-f`或`--force`：强制移动文件或目录，无需确认。
- `-n`或`--no-clobber`：不覆盖现有文件。

### 参数

- 源文件：指定要移动或重命名的源文件或目录。
- 目标文件：指定移动或重命名后的目标文件或目录。

### 示例

1. 移动文件`file.txt`到目标位置`/path/to/destination`：

   ```
   mv file.txt /path/to/destination
   ```

2. 将文件`file.txt`重命名为`newfile.txt`：

   ```
   mv file.txt newfile.txt
   ```

3. 移动目录`dir`到目标位置`/path/to/destination`：

   ```
   mv dir /path/to/destination
   ```

4. 仅移动源文件中比目标文件更新的文件：

   ```
   mv -u source.txt destination.txt
   ```

