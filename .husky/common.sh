#!/bin/sh
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# 针对 Windows 10、Git Bash 和 Yarn 的 终端输入 解决方案
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
