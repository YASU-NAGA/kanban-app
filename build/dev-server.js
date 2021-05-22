//Node.jsのrequireスタイルでインポート
const bodyParser = require('body-parser')

//'Express'アプリケーションインスタンスを受け取る関数をエクスポート
module.exports = app => {
    //HTTPリクエストの内容をJSONとして解析するミドルウェアをインストール
    app.use(bodyParser.json())
}