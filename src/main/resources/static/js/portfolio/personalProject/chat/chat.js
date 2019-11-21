const Chat = (function(){
    let socket;
    let stompClient;

    const myName = "blue";

    // init 함수
    function init() {
        // websocket connect
        connect();

        // enter 키 이벤트
        $(document).on('keydown', 'div.input-div textarea', function(e){
            if(e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                const message = $(this).val();

                // 메시지 전송
                sendMessage(message);
                // 입력창 clear
                clearTextarea();
            }
        });
    }

    // websocket connect
    function connect() {
        socket = new SockJS("/ws");
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function () {
            stompClient.subscribe("/topic/roomId", function (msg) {

                receiveMessage(JSON.parse(msg.body).body);
            });
        });
    }

    // send Message
    function sendMessage(text) {
        stompClient.send("/app/sendMessage", {}, JSON.stringify({'content':text}));
    }

    // 메세지 태그 생성
    function createMessageTag(LR_className, senderName, message) {
        // 형식 가져오기
        let chatLi = $('div.chat.format ul li').clone();

        // 값 채우기
        chatLi.addClass(LR_className);
        chatLi.find('.sender span').text(senderName);
        chatLi.find('.message span').text(message);

        return chatLi;
    }

    // 메세지 태그 append
    function appendMessageTag(LR_className, senderName, message) {
        const chatLi = createMessageTag(LR_className, senderName, message);

        $('div.chat:not(.format) ul').append(chatLi);

        // 스크롤바 아래 고정
        $('div.chat').scrollTop($('div.chat').prop('scrollHeight'));
    }

    // 메세지 입력박스 내용 지우기
    function clearTextarea() {
        $('div.input-div textarea').val('');
    }

    // 메세지 수신
    function receiveMessage(data) {
        // const LR = (data.senderName != myName)? "left" : "right";
        appendMessageTag("left", data.sender, data.content);
    }

    return {
        'init': init
    };
})();

$(function(){
    Chat.init();
});