# ionic_typescript

typescriptを使ってionicをやる手順確認

+ ionicサービス
 - ionic add ionic-platform-web-client
index.htmlとかいろいろ書き換えるので最初にする.
"ionic.service.core", "ionic.service.analytics"とかいろいろ
push, user, analytics, deploy, package
See http://docs.ionic.io
+ VSCode
 - degugger
 - brew install ideviceinstaller ios-webkit-debug-proxy
+ typings
 - typings install --ambient --save
 - angular
 - cordova
 - cordova-ionic
 - cordova-ionic/plugins/keyboard
 - cordova/plugins/statusbar
 - es6-shim
 - ionic
 - jquery
+ gulp
 - npm install --save-dev XXXX
 - gulp-typescript
 - gulp-notify
 - gulp-plumber
```
gulp.task('build', function(done) {
    gulp.src(paths.ts)
    .pipe(plumber({errorHandler: notify.onError('Error: typescript')}))
    .pipe(typescript(typescriptProject))
    .pipe(concat("main.js"))
    .pipe(gulp.dest('./www/js/'))
    .on('end', done);
});
```
+ tsconfig.json
+ .gitignore
 - www/js/main.js
 - .vscode/settings.json
+ plugin
 - ionic plugin add
ionicコマンドでやればpackage.jsonに記録が残る.
ionic state restoreでplugin復元.
pluginは基本chromeでは動かない. deviceかsimulatorでやること.
+ testings

cordovaでgeolocation
<meta http-equiv="Content-Security-Policy" content="default-src *; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src  'self' 'unsafe-inline' *">

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
> bowerでもいけるらしい.

cordovaのdebuggerがうまく動かない -> vscodeを再起動. portがどこかで引っかかってる可能性.
