# vi/vim/emacs/nano文本编辑器



> `vi`, `vim`, `emacs`, 和 `nano` 是常见的文本编辑器，在 Linux 和 Unix 系统上广泛使用。它们提供了强大的编辑功能和自定义选项

## vi / vim

`vi` 是一个经典的文本编辑器，而 `vim`（Vi IMproved）是 `vi` 的增强版本，提供了更多功能和改进。

- `vi` 和 `vim` 是基于命令模式和编辑模式的编辑器。在命令模式下，您可以执行各种操作，如保存文件、复制粘贴、查找替换等。在编辑模式下，您可以输入和编辑文本。
- `vim` 支持语法高亮、多窗口编辑、插件扩展等功能，使其成为程序员和高级用户的首选编辑器。

### 常用参数

- 使用参数 `-n` 或 `--no-compatible` 可以禁用兼容模式，使 `vim` 在使用现代特性时更加灵活。
- 使用参数 `-c` 可以在启动时执行指定的命令，例如 `vim -c "set number"` 可以在启动时显示行号。
- 使用参数 `-O` 可以在垂直分割的窗口中打开多个文件，例如 `vim -O file1.txt file2.txt`。
- 使用参数 `-R` 可以以只读模式打开文件，防止误编辑文件内容。

## emacs

`emacs` 是一种可扩展的文本编辑器，提供了强大的编辑功能和丰富的插件系统。

- `emacs` 是一个完整的操作环境，它提供了很多功能，如文本编辑、文件管理、编程环境等。
- `emacs` 使用一个 Lisp 方言作为其扩展语言，允许用户编写自定义函数和脚本来扩展和定制编辑器的功能。
- `emacs` 有一个学习曲线较陡峭，但一旦掌握，它可以成为一个非常强大和高度可定制的编辑器。

### 常用参数

- 使用参数 `-nw` 可以在终端中以无图形界面的方式启动 `emacs`。
- 使用参数 `-q` 可以跳过加载用户配置文件，以便进行临时测试或避免加载过多插件。
- 使用参数 `--eval` 可以在启动时执行指定的 Emacs Lisp 表达式，例如 `emacs --eval "(message \"Hello, Emacs!\")"` 可以在启动时显示一条消息。

## nano

`nano` 是一个简单易用的文本编辑器，适合初学者和不熟悉命令行编辑器的用户。

- `nano` 提供了一个直观的用户界面，显示常用的操作命令在屏幕底部。
- `nano` 具有基本的编辑功能，如复制粘贴、查找替换、撤销重做等。
- `nano` 不像 `vi` 或 `emacs` 那样提供高级功能和扩展性，但它非常易于上手和使用。

### 常用参数

- 使用参数 `-w` 可以禁用自动换行，使文本在水平方向上不自动换行。
- 使用参数 `-S` 可以启用智能缩进，使 `nano` 根据文件类型自动缩进代码。
- 使用参数 `-m` 可以启用鼠标支持，允许使用鼠标进行文本选择和滚动。