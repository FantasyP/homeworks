/**
 * Created by wdd on 2017/7/13.
 */
//parent ����һ��
// parents ������������в�
// parentsUntil ������ָ���Ĳ�����һ��

$(document).ready(function(){
    // $('a').parent().css({border:'3px solid #FF0000'})
    // $('p').parent().css({border:'3px solid #FF0000'})
    // $('p').parents().css({border:'3px solid #FF0000'});
    $('a').parentsUntil("#div1").css({border:'3px solid #FF0000'})
});