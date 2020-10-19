package main

import (
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"github.com/unrolled/render"
	"gopkg.in/mgo.v2"
	"gopkg.in/olahol/melody.v1"
)

var (
	renderer     *render.Render
	mongoSession *mgo.Session
)

func init() {
	renderer = render.New()

	session, err := mgo.Dial("mongo:27017")
	if err != nil {
		panic(err)
	}

	mongoSession = session
}

func main() {

	engine := gin.Default()
	m := melody.New()
	// ミドルウェア
	//engine.Use(middleware.RecordUaAndTime)

	// CORS 対応
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	engine.Use(cors.New(config))

	// CRUD 書籍
	app := engine.Group("/app")
	{
		app.POST("/rooms", createRoom)
		app.GET("/rooms", retrieveRooms)
	}

	engine.GET("/ws", func(ctx *gin.Context) {
		m.HandleRequest(ctx.Writer, ctx.Request)
	})

	m.HandleMessage(func(s *melody.Session, msg []byte) {
		m.Broadcast(msg)
	})

	m.HandleConnect(func(s *melody.Session) {
		log.Printf("websocket connection open. [session: %#v]\n", s)
	})

	m.HandleDisconnect(func(s *melody.Session) {
		log.Printf("websocket connection close. [session: %#v]\n", s)
	})

	engine.Run(":3002")
}
