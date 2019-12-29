const Chat = (function(){
    let socket;
    let stompClient;

    let nickName;
    const urlArr = location.href.split('/');
    const roomUid = urlArr[urlArr.length-1];

    // init 함수
    function init() {

        // set NickName
        setNickName();

        // websocket connect
        connect();

        // enter 키 이벤트
        $(document).on('keydown', 'div.input-div textarea', function(e){
            if(e.keyCode === 13 && !e.shiftKey) {
                e.preventDefault();
                const message = $(this).val();

                if (message.length <= 200) {
                    sendMessage(message); // 메시지 전송
                    clearTextarea();
                } else {
                    alert('메세지는 200자 이내로 입력해 주세요.');
                }
            }
        });
    }

    // setNickName
    function setNickName() {
        do{
            nickName = $.trim(prompt("닉네임을 입력해 주세요.(15자 이내)"));

            if(nickName.length > 15)
                alert('15자 이내로 입력해 주세요.');

        }while (StrDJ.isEmpty(nickName) || nickName.length > 15);
    }

    // websocket connect
    function connect() {
        socket = new SockJS("/ws");
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function () {
            stompClient.subscribe("/topic/chat/"+roomUid, function (msg) {
                receiveMessage(JSON.parse(msg.body));
            });
        });
    }

    // send Message
    function sendMessage(text) {
        stompClient.send("/app/sendMessage", {}, JSON.stringify({'roomUid':roomUid, 'message':text, 'sender':nickName}));
    }

    // 메세지 태그 생성
    function createMessageTag(LR_className, senderName, message) {
        // 형식 가져오기
        let chatLi = $("div.chat.format ul li").clone();

        // 값 채우기
        chatLi.addClass(LR_className);
        chatLi.find('.sender span').text(senderName);
        chatLi.find('.message span').text(message);

        return chatLi;
    }

    // 메세지 태그 append
    function appendMessageTag(LR_className, senderName, message) {
        const chatLi = createMessageTag(LR_className, senderName, message);

        $("div.chat:not(.format) ul").append(chatLi);

        // 스크롤바 아래 고정
        let divChat = $("div.chat");
        divChat.scrollTop(divChat.prop('scrollHeight'));
    }

    // 메세지 입력박스 내용 지우기
    function clearTextarea() {
        $('div.input-div textarea').val('');
    }

    // 메세지 수신
    function receiveMessage(data) {
        const LR = (data.sender !== nickName)? "left" : "right";
        appendMessageTag(LR, data.sender, data.message);
        document.body.scrollTop = document.body.scrollHeight;
    }

    return {
        'init': init
    };
})();

$(function(){
    Chat.init();
});