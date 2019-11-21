
// move to url
$(document).on('click', 'button, .link-btn', function () {
    const url = $(this).data('url');
    const windowOpenUrl = $(this).data('window-open-url');
    const uid = $.trim($(this).data('uid'));

    if(windowOpenUrl != undefined && windowOpenUrl != '') {
        const target = $.trim($(this).data('target'));
        let width = parseInt($(this).data('width'));
        let height = parseInt($(this).data('height'));
        width = (width==NaN)? 0 : width;
        height = (height==NaN)? 0 : height;

        window.open(windowOpenUrl+"/"+uid, target, 'width='+width+', height='+height);
    }

    if(url != undefined && url != '')
        location.href = url+"/"+uid;
});

// ajax
const AjaxUtil = (function () {
    function submit(url, data, successFunction, errorFunction) {
        $('.loading-css').show();
        $.ajax({
            url:url,
            type:'post',
            data:data,
            success: function(data) {
                const msg = data.resultMsg;
                if(msg != undefined && msg != "")
                    alert(msg);

                successFunction();
                $('.loading-css').hide();
            },
            error: function(data) {
                const msg = data.resultMsg;
                if(msg != undefined && msg != "")
                    alert(msg);

                errorFunction();
                $('.loading-css').hide();
            }
        });
    }
    return {
        "submit": submit
    };
})();