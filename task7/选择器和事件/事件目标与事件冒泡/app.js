/**
 * Created by wdd on 2017/7/10.
 */
$(document).ready(function () {
    $('body').bind('click',bodyHandler);
    $('div').bind('click',divHandler);
    $('div').bind('click',divHandler1);
});

function bodyHandler(event){
    event.stopImmediatePropagation();//��ֹ���е��¼�ð��
    console.log("body",event);
}

function divHandler(event){
    event.stopPropagation();//��ֹð��
    console.log("div",event);
}

function divHandler1(event){
    event.stopPropagation();//��ֹð�� ��ֹ����ð��
    console.log("div",event);
}