const ChatRoom = (function () {
    function init() {
        $(document).on('click', '#createRoomBtn', function () {
            createChatRoom();
        });
        $(document).on('click', '.roomLi', function () {
            const url = $(this).data('url');
            const uid = $.trim($(this).data('uid'));
            const target = $.trim($(this).data('target'));

            enterRoom(url, uid, target);
        });
    }

    // Create Room
    function createChatRoom() {
        const roomName = $.trim(prompt("방 제목을 입력해 주세요.", ""));
        if(roomName != undefined && roomName != "") {
            const url = "/personalProject/chat/createChatRoom";
            const data = {
                roomName:roomName
            };
            function successFunction() {
                location.reload();
            }
            function errorFunction() {}

            AjaxUtil.submit(url, data, successFunction, errorFunction);
        }
    }
    
    // Enter Room
    function enterRoom(url, uid, target) {

        if(url != undefined && url != '') {
            let width = 450;
            let height = 700;

            window.open(url+"/"+uid, target, 'width='+width+', height='+height);
        }
    }

    return {
        "init": init
    };
})();

$(function () {
   ChatRoom.init();
});