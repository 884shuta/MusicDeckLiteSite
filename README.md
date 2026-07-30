# MusicDeck Lite site

## GitHub Pages への公開

1. このフォルダをGitHubリポジトリのルートとしてpushします（デフォルトブランチは`main`を想定）。
2. GitHubの **Settings → Pages** で、公開元に **GitHub Actions** を選択します。
3. `main`ブランチへのpush後、**Actions** の「Deploy to GitHub Pages」が完了するとサイトが公開されます。

`index.html`から参照する画像・CSS・JavaScriptは相対パスのため、`https://<ユーザー名>.github.io/<リポジトリ名>/` 形式のプロジェクトページでもそのまま動作します。
