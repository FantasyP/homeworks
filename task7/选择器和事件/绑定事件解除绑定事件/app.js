/**
 * Created by wdd on 2017/7/10.
 */
$(document).ready(function(){
    // $('#click').click(function(){ //���ַ�����ʱ��϶�ʱ �������Ľϴ�
    //     alert('hello');
    // })
    $('#click').bind('click',clickHandler);
    $('#click').bind('click',clickHandler1);
    $('#click').unbind('click');
    $('#click').unbind('click',clickHandler);//���ĳ���¼��İ�


    //jQuert 1.7+ �汾������ôд
    $('#click').on('click',clickHandler);
    $('#click').on('click',clickHandler1);
    $('#click').off('click');
    $('#click').off('click',clickHandler);
});
function clickHandler(){
    console.log('clickhandler');
}
function clickHandler1(){
    console.log('clickhandler1');
}