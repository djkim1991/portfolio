/*
*   HTTP
*/

// move to url
$(document).on('click', 'button, .link-btn', function () {
    const url           = $(this).data('url');
    const windowOpenUrl = $(this).data('window-open-url');
    const uid           = $.trim($(this).data('uid'));

    // open popup to url
    if(!StrDJ.isEmpty(windowOpenUrl)) {
        const target    = $.trim($(this).data('target'));
        let width       = parseInt($(this).data('width'));
        let height      = parseInt($(this).data('height'));

        const left  = (window.screen.width / 2) - (width/ 2);
        const top   = (window.screen.height / 2) - (height / 2);

        window.open(windowOpenUrl+"/"+uid, target, 'width='+width+', height='+height+', left='+left+', top='+top);
    }

    // move to url
    if(!StrDJ.isEmpty(url))
        location.href = url+"/"+uid;
});

/*
*   html Element
*/

const TextareaElement = (function(){
    function init() {
        autoHeight();
    }

    // height set automatically
    function autoHeight() {
        $(document).on('input', 'textarea.auto-height', function(){
            const basicHeight = $(this).data('basic-height');
            textarea_auto(this, basicHeight);
        });

        function textarea_auto(obj, basicHeight) {
            const textEle = $(obj);
            textEle[0].style.height = basicHeight;
            const textEleHeight = textEle.prop('scrollHeight');
            textEle.css('height', textEleHeight);
        }
    }

    // press Enter Key disabled
    function disabledEnter() {
        $(document).on('keydown', 'textarea.auto-height', function (e) {
            if (e.key === "Enter")
                e.preventDefault();
        });
    }

    return {
        "init"          : init,
        "autoHeight"    : autoHeight,
        "disabledEnter" : disabledEnter
    }
})();

$(function () {
    TextareaElement.init();
});