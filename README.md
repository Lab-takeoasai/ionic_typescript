# ionic_typescript
ts


brew install ios-webkit-debug-proxy

cordovaでgeolocation
<meta http-equiv="Content-Security-Policy" content="default-src *; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src  'self' 'unsafe-inline' *">

simulatorで動かない
chromeでは動く

ionic plugin add
でplugin追加. cordovaではpackage.jsonに残らない

ionic state restore

>>> http://blog.mb.cloud.nifty.com/?p=3267
``
MonacaやWebアプリケーションでの利用について
Monacaなどに組み込んで使う場合にはこちらのミニファイされたファイルをダウンロードして使ってください。もし自分で生成する場合は、
$ browserify -r -p licensify -t [ uglifyify -x .js ] -o ncmb.min.js lib/ncmb.js
のようにしてコマンドを実行してください（要node.js/browserify）。なお、1.x系と同じく、Webブラウザ上でJavaScript SDKを使う場合にはソースコードにAPIキーが記載されてしまうことになります。そのため、適切なアクセス制限を行っているか確認するようにしてください。
node.jsでの利用について
サーバサイドやIntel Edison、Raspberry PiといったIoTデバイスで利用する際にはnpmでインストールを行ってください。
$ npm install ncmb -S
でインストールが可能です。
``
npmではIoT, 普通に使うときは.min.jsを直ダウンロードで

cordovaのdebuggerがうまく動かない -> vscodeを再起動. portがどこかで引っかかってる可能性.
