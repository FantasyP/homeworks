/**
 * Created by wdd on 2017/7/7.
 */
function test(){//js�Ǻ�������������  �ڲ��ı������ܷ��� �ڲ��ܷ����ⲿ�ı���� �ⲿ���ܷ����ڲ��ı���
    if(false){
        var i =0;
    }
    console.log(i);
}
// test()

function test2(){
    var j=10;
    return function(){
        return j;
    }
}
var t = test2();