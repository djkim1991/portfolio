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

        $.ajax({
            url:url,
            type:'post',
            data:data,
            beforeSend : function() {
                $('div.loading-css').show();
            },
            success: function(data) {
                const msg = data.resultMsg;

                if(!StrDJ.isEmpty(msg))
                    alert(msg);

                successFunction();
            },
            error: function(data) {
                const msg = data.resultMsg;
                if(!StrDJ.isEmpty(msg))
                    alert(msg);

                errorFunction();
            },
            complete: function () {
                $('div.loading-css').hide();
            }
        });
    }
    return {
        "submit": submit
    };
})();