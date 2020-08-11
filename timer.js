var count = 0; //1초마다 증가하는 카운트 값
var timerID = null; //타이머 ID

onmessage = function (e) { // 워커 객체로부터 메시지 수신
	if(e.data == "start"){  // 카운트 시작
		if(timerID != null) 
			return;  //타이머 작동중이면 리턴
		timerID = setInterval(myCallback, 1000); //1초 간격 myCallback()호출
	}
	else if(e.data == "stop"){ //카운트 중지
		if(timerID == null)
			return;
		clearInterval(timerID);
		close();
	}
}

function myCallback(){ //1초 간격으로 호출. count값을 1증가시키고 워커 객체로 전송
	count++;
	postMessage(count);
}