package main

import (
	"encoding/json"
	"net/http"
	"time"
)

type timeResponse struct {
	Time string `json:"time"`
}

func main() {
	http.HandleFunc("/time", func(w http.ResponseWriter, r *http.Request) {
		// Get the current time in Almaty
		location, _ := time.LoadLocation("Asia/Almaty")
		currentTime := time.Now().In(location)

		// Create a timeResponse struct
		time := &timeResponse{
			Time: currentTime.Format("15:04:05"),
		}

		// Marshal the struct to json
		timeJSON, _ := json.Marshal(time)

		// Write the json to the response
		w.Header().Set("Content-Type", "application/json")
		w.Write(timeJSON)
	})
	http.ListenAndServe(":8080", nil)
}
