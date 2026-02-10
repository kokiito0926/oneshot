## oneshot

oneshotは、標準入力から流し込まれたHTMLをブラウザで表示できるコマンドラインのツールです。  
Expressのサーバーを一時的に立ち上げ、ブラウザがページを読み込むと同時にサーバーを終了します。

## インストール

```bash
$ npm install --global @kokiito0926/oneshot
```

## 使用方法

curlのコマンドでHTMLを取得して、ブラウザで一時的に確認することもできます。

```bash
$ curl -sSL https://example.com/ | oneshot
```

--portのオプションを用いれば、ポート番号を変更することができます。

```bash
$ cat example.html | oneshot --port 8080
```

## ライセンス

[MIT](LICENSE)
