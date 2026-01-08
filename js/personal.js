"use strict";
//カードを6枚ずつ表示する
$(function () {
    //.hide()特定のHTML要素を非表示にすること
    $(".card-list__item").hide(); // 全部非表示
    //.slice(0, 6)配列の要素を6枚ずつ取り出す .show()display: none;で非表示になっている要素を表示
    $(".card-list__item").slice(0, 9).show();
    //ボタンがクリックされたとき
    $(".button").on("click", function (e) {
        e.preventDefault();
        $(".card-list__item:hidden").slice(0, 9).slideDown();
        //.slideDown();非表示になっている要素が、スライドしながら表示される
        //.card-list__item:hiddenがすべて表示されたら
        if ($(".card-list__item:hidden").length === 0) {
            //完全に非表示（画面から消える) this=ボタンをクリックすること「ボタンを押せなくする」＝「ボタンを消す」
            $(this).hide();
        }
    });
});