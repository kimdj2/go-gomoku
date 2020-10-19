package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"gopkg.in/mgo.v2/bson"
)

type Room struct {
	ID   bson.ObjectId `bson:"_id" json:"id"`
	Name string        `bson:"name" json:"name"`
}

func createRoom(c *gin.Context) {
	room := Room{}

	err := c.Bind(&room)

	if err != nil {
		// 오류 발생 시 500 에러 반환
		c.String(http.StatusInternalServerError, "Server Error")
		return
	}

	// 몽고DB 세션 생성
	session := mongoSession.Copy()
	// 몽고DB 세션을 닫는 코드를 defer로 등록
	defer session.Close()

	// 몽고DB 아이디 생성
	room.ID = bson.NewObjectId()
	// room 정보 저장을 위한 몽고DB 컬렉션 객체 생성
	collection := session.DB("test").C("rooms")

	// rooms 컬렉션에 room 정보 저장
	if err := collection.Insert(room); err != nil {
		// 오류 발생 시 500 에러 반환
		c.String(http.StatusInternalServerError, "Server Error")
		return
	}
	// 처리 결과 반환
	c.JSON(http.StatusCreated, gin.H{
		"status": "ok",
	})
}

func retrieveRooms(c *gin.Context) {
	// 몽고DB 세션 생성
	session := mongoSession.Copy()
	// 몽고DB 세션을 닫는 코드를 defer로 등록
	defer session.Close()

	var rooms []Room
	// 모든 room 정보 조회
	err := session.DB("test").C("rooms").Find(nil).All(&rooms)
	if err != nil {
		// 오류 발생 시 500 에러 반환
		c.String(http.StatusInternalServerError, "Server Error")
		return
	}
	// room 조회 결과 반환
	c.JSONP(http.StatusOK, rooms)
}
