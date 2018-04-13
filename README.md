# Cloudant Hack

## 準備

### サービスを作成する

```
npm run service
```

### データベース「answer_store」を作成する。

```
node createDatabase
```

## bulk 検証
23MBのデータを登録する。

```
node bulk > hahaha.log
```

* hahaha.log を見ると error が記録されているので、@cloudant/cloudant 2.1.0 なら、413エラーを投げ、キャッチできることが分かった。
* 2週間前キャッチできなかった時は cloudant 1.10 だったが現時点で 1.10.0-NOTICE (古い) を入れてもキャッチできた。サーバーモジュール毎新しくなった可能性もあるか？
