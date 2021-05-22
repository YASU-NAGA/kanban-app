//Node.jsのrequireスタイルでインポ�EチE
const bodyParser = require('body-parser')

//'Express'アプリケーションインスタンスを受け取る関数をエクスポ�EチE
module.exports = app => {
    //HTTPリクエスト�E冁E��をJSONとして解析するミドルウェアをインスト�Eル
    app.use(bodyParser.json())
}
