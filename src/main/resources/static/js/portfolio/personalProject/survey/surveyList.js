const Survey = (function () {
    function init() {
        $(document).on('click', '#createRoomBtn', function () {
            createChatRoom();
        });
        // $(document).on('click', '.roomLi', function () {
        //     const url = $(this).data('url');
        //     const uid = $.trim($(this).data('uid'));
        //     const target = $.trim($(this).data('target'));
        //
        //     enterRoom(url, uid, target);
        // });
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
    Survey.init();
});