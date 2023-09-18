# rmdir命令

> `rmdir`命令用于删除空目录。如果目录中包含文件或其他子目录，则无法直接使用`rmdir`命令删除。

### 语法

```
rmdir [选项] 目录...
```

### 选项

- `-p`或`--parents`：如果删除目录后其上层目录为空，则一并删除上层目录。
- `-v`或`--verbose`：显示详细的删除信息。
- `--ignore-fail-on-non-empty`：忽略非空目录的错误，继续删除其他空目录。

### 参数

- 目录：指定要删除的空目录列表，可以同时删除多个目录，各个目录之间用空格分隔。

### 示例

1. 删除空目录`test`：

   ```
   rmdir test
   ```

2. 删除空目录`dir1`和`dir2`，并显示详细的删除信息：

   ```
   rmdir -v dir1 dir2
   ```

3. 删除空目录`dir3`，如果删除后其上层目录为空，则一并删除上层目录：

   ```
   rmdir -p dir3
   ```

**注意，`rmdir`命令只能删除空目录。如果目录中包含文件或其他子目录，将无法直接使用`rmdir`命令删除。在删除目录之前，请确保目录是空的，或者使用其他命令（如`rm -r`）来删除非空目录。**