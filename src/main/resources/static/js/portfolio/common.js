$(function () {
    $.noConflict();
    const pathArr = location.pathname.split('/');
    const menu1 = pathArr.length > 1 ? pathArr[1] : 'none';
    const menu2 = pathArr.length > 2 ? pathArr[2] : 'none';

    $('li.nav-item.'+menu1).addClass('active');
    $('div.collapse.'+menu1).addClass('show');
    $('a.collapse-item.'+menu2).addClass('active');
});
