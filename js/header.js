/**
 * Created by Administrator on 2017/10/9.
 */
var oGzdr = $('#guanzhudr');
var oGzdrb =$('#guanzhudr-b');
//����Ƶ� ��עDR ��ʾ�����˵�
oGzdr.onmouseover = function () {
    //oGzdrb.style.display = 'block';
    startMove(oGzdrb,{opacity:100},10);
};
oGzdr.onmouseout = function () {
    //oGzdrb.style.display = 'none';
    startMove(oGzdrb,{opacity:0},10);
};
//����Ƶ� �ֻ����� ��ʾ�����˵�
var oSjgw = $('#shoujigw');
var oSjgwb = $('#sjgw-b');
oSjgw.onmouseover = function () {
    oSjgwb.style.display = 'block';
};
oSjgw.onmouseout = function () {
    oSjgwb.style.display = 'none';
};
//����Ƶ� ������ ��ʾ�����˵�
var oLang = $("#language");
var oLangb = $('#languageb');
oLang.onmouseover = function () {
    oLangb.style.display = 'block';
};
oLang.onmouseout = function () {
    oLangb.style.display = 'none';
};
//����Ƶ� ȫ������ ��ʾ�����˵�
var oQgdp = $('#qgdp');
var oAAA = $('#aaa');
var oMap = $('#map');
oAAA.onmouseover = function () {
    oMap.style.display = 'block';
    oQgdp.style.backgroundColor = '#fff';
    oQgdp.style.border = '1px solid #c57d5c';
    oQgdp.style.borderBottom = '1px solid #fff';
};
oAAA.onmouseout = function () {
    console.log(this);
    oMap.style.display = 'none';
    oQgdp.style.backgroundColor = '#f8f8f8';
    oQgdp.style.border = '1px solid #f8f8f8';
};
//============================
console.log($('#nav>li'));
console.log($('#nav>li>div'));
$('#nav>li').mouseover(function () {
    $('#nav>li>div').eq($(this).index()).show();
});
$('#nav>li').mouseout(function () {
    $('#nav>li>div').eq($(this).index()).hide();
});
//��鵼����)
$("#QHl li").mouseover(function () {
    $("#QHlimg li").eq($(this).index()).show().siblings().hide();
});
$("#QHr li").mouseover(function () {
    $("#QHrimg li").eq($(this).index()).show().siblings().hide();
})
//���ĵ�����
$("#ADl li").mouseover(function () {
    $("#ADlimg li").eq($(this).index()).show().siblings().hide();
});
$("#ADr li").mouseover(function () {
    $("#ADrimg li").eq($(this).index()).show().siblings().hide();
})
var oGzdr = $('#guanzhudr');
var oGzdrb =$('#guanzhudr-b');
//����Ƶ� ��עDR ��ʾ�����˵�
oGzdr.onmouseover = function () {
    //oGzdrb.style.display = 'block';
    startMove(oGzdrb,{opacity:100},10);
};
oGzdr.onmouseout = function () {
    //oGzdrb.style.display = 'none';
    startMove(oGzdrb,{opacity:0},10);
};
//����Ƶ� �ֻ����� ��ʾ�����˵�
var oSjgw = $('#shoujigw');
var oSjgwb = $('#sjgw-b');
oSjgw.onmouseover = function () {
    oSjgwb.style.display = 'block';
};
oSjgw.onmouseout = function () {
    oSjgwb.style.display = 'none';
};
//����Ƶ� ������ ��ʾ�����˵�
var oLang = $("#language");
var oLangb = $('#languageb');
oLang.onmouseover = function () {
    oLangb.style.display = 'block';
};
oLang.onmouseout = function () {
    oLangb.style.display = 'none';
};
//����Ƶ� ȫ������ ��ʾ�����˵�
var oQgdp = $('#qgdp');
var oAAA = $('#aaa');
var oMap = $('#map');
oAAA.onmouseover = function () {
    oMap.style.display = 'block';
    oQgdp.style.backgroundColor = '#fff';
    oQgdp.style.border = '1px solid #c57d5c';
    oQgdp.style.borderBottom = '1px solid #fff';
};
oAAA.onmouseout = function () {
    console.log(this);
    oMap.style.display = 'none';
    oQgdp.style.backgroundColor = '#f8f8f8';
    oQgdp.style.border = '1px solid #f8f8f8';
};