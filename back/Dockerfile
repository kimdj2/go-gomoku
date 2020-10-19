FROM golang:latest

RUN go get -u github.com/oxequa/realize && \
    go get -u github.com/gorilla/mux && \
    go get -u github.com/gorilla/websocket && \
    go get -u github.com/julienschmidt/httprouter && \
    go get -u github.com/codegangsta/negroni && \
    go get -u github.com/unrolled/render && \
    go get -u github.com/mholt/binding && \
    go get -u gopkg.in/mgo.v2 && \
    go get -u gopkg.in/olahol/melody.v1 && \
    go get -u github.com/gin-gonic/gin && \
    go get -u github.com/gin-contrib/cors && \
    go get -u github.com/codegangsta/gin

RUN mkdir /go/src/app

# ワーキングディレクトリを指定する
WORKDIR /go/src/app

COPY ./app /go/src/app/
# コンテナ実行時のデフォルトを設定する
# ライブリロードを実行する
RUN go build *.go
CMD go run *.go
