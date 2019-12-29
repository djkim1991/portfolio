// ajax
const AjaxDJ = (function () {

    /**
     * Ajax 방식으로 submit
     * @param   url             string      : 목적지
     * @param   data            Object      : 전달할 정보를 담은 Object
     * @param   successFunction function    : Ajax 호출 성공시 callback 함수
     * @param   errorFunction   function    : Ajax 호출 실패시 callback 함수
     * */
    function submit(url, data, successFunction, errorFunction) {
        $('.loading-css').show();
        $.ajax({
            url:url,
            type:'post',
            data:data,
            success: function(data) {
                const msg = data.resultMsg;

                if(!StrDJ.isEmpty(msg))
                    alert(msg);

                successFunction();
                $('.loading-css').hide();
            },
            error: function(data) {
                const msg = data.resultMsg;
                if(!StrDJ.isEmpty(msg))
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