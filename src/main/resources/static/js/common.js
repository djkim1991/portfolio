
//
$(document).on('click', 'button', function () {
    const url = $(this).data('url');
    const windowOpenUrl = $(this).data('window-open-url');

    if(windowOpenUrl != undefined && windowOpenUrl != '')
        window.open(windowOpenUrl);

    if(url != undefined && url != '')
        location.href = url;
});