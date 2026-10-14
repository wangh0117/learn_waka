# learn_waka

日本和歌学习笔记，VitePress 构建的电子书，部署在 GitHub Pages（wangh0117.github.io/learn_waka）。

## 安全规则（必须遵守）

- **禁止读取 `.local.env`**：不要用 Read、cat、grep、source 后 echo 等任何方式查看、输出或推断其内容。它存放用户的 GitHub Personal Access Token（变量 `GITHUB_TOKEN`）。
- 唯一允许的用法：在 shell 命令中以 `$GITHUB_TOKEN` 变量引用（如灌入 git 凭据钥匙串），由 shell 展开，命令行中只出现变量名。
- 该文件已在 `.gitignore` 中，**任何时候不得将其内容提交进 git**。
- 如果任务需要向用户展示凭据相关操作，展示命令模板，让用户自己填值。
