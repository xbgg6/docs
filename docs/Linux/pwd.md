# pwd命令

> `pwd`（Print Working Directory）命令用于显示当前工作目录的绝对路径。它是一个用于查看当前所在位置的常用命令。
>

## 内建命令

### 概要

```shell
pwd [-LP]
```

### 主要用途

- 显示当前工作目录。

### 选项

```shell
-L（默认值）：打印环境变量"$PWD"的值，可能为符号链接。
-P：打印当前工作目录的物理位置。
```

### 返回值

- 成功时，返回状态为0（成功），除非给出了非法选项或当前目录无法读取。

### 注意事项

1. `pwd`命令是bash的内建命令，可以使用`help`命令查看相关的帮助信息。

## 外部命令

### 概要

```shell
pwd [OPTION]...
```

### 主要用途

- 显示当前工作目录。

### 选项

```shell
-L, --logical：打印环境变量"$PWD"的值，可能为符号链接。
-P, --physical（默认值）：打印当前工作目录的物理位置。
--help：显示帮助信息并退出。
--version：显示版本信息并退出。
```

### 返回值

- 成功时，返回状态为0（成功），除非给出了非法选项或当前目录无法读取。

### 注意事项

1. `pwd`命令是`GNU coreutils`包中的命令，可以使用`man pwd`或`info coreutils 'pwd invocation'`查看相关的帮助信息。
2. 在启用或禁用内建命令的情况下，可以使用`enable`命令进行控制。关于同名命令的优先级问题，请参考`builtin`命令的例子部分中的相关讨论。
3. 如果没有禁用内建命令并且当前环境中没有定义`pwd`函数，那么使用`/usr/bin/pwd`将指向`coreutils`包中的`pwd`命令，使用`pwd`命令将指向bash的内建`pwd`命令。

请注意，`pwd`命令的具体行为和可用选项可能因操作系统和Shell的不同而有所差异。以上提供的信息适用于常见的Linux环境，具体实现可能会有所不同。建议查阅特定系统或Shell的文档以获取准确的信息。