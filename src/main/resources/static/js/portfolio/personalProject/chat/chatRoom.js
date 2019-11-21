const ChatRoom = (function () {
    function init() {
        $(document).on('click', '#createRoomBtn', function () {
            createChatRoom();
        });
    }

    function createChatRoom() {
        const roomName = $.trim(prompt("방 제목을 입력해 주세요.", ""));
        if(roomName != undefined && roomName != "") {
            const url = "/personalProject/createChatRoom";
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

    return {
        "init": init
    };
})();

$(function () {
   ChatRoom.init();
});