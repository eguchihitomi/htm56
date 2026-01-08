"use strict";

$(function () {
    // ボタンがクリックされたら発動
    $(".menu-btn").on("click", function () {
        // ドロワーメニュー部分のアニメーション addClassだと増える
        $(".menu").toggleClass("is-active");
        // ボタン部分のアニメーション removeClassだと消す
        $(".menu-btn").toggleClass("is-active");
        $(".menu-btn-wrap").toggleClass("is-active");
    });

    $(".menu a").on("click", function (e) {
        //クリックされたリンクのhref属性を取得してlinkHrefに代入する
        const linkHref = $(this).attr("href");
        //location.pathname 現在のページパス .split("/").pop() /で区切って.pop()で最後の要素(ファイル名)を取り出す URLから現在のパスを取得する
        const currentPath = location.pathname.split("/").pop();

        // 外部リンク（httpやhttps）やアンカーリンク（#）は除外 linkHrefリンク先がある かつ httpやhttpsで始まっていない(SNSなど外部リンクを除外) かつ ページ内リンク（アンカー）を除外(#で始まっていない) !は否定の意味
        if (linkHref && !linkHref.startsWith("http") && !linkHref.startsWith("#")) {
            //今いるページとリンク先が同じなら
            if (linkHref === currentPath) {
                //preventDefault()ページ遷移を止めて
                e.preventDefault();
                //ページの先頭にスクロールする
                $("html").animate({ scrollTop: 0 }, 500);
            }
        }

        // どちらにせよメニューは閉じる
        $(".menu").removeClass("is-active");
        $(".menu-btn").removeClass("is-active");
        $(".menu-btn-wrap").removeClass("is-active");
    });
});

const cursor = document.querySelector('.custom-cursor');
//マウスが動くたびに処理を実行
document.addEventListener('mousemove', e => {
    //Ⅹ座標 画面上のマウスの位置
    cursor.style.left = `${e.clientX}px`; // e.clientX + "px";
    //Ｙ座標 画面上のマウスの位置 カーソル要素のleftとtopでマウスを追従させる
    cursor.style.top = `${e.clientY}px`;
});

//hover-targetを持ったクラスを探す (el =>アロー関数function(el)
document.querySelectorAll('.hover-target').forEach(el => {
    //子要素にマウスポインターが入った場合
    el.addEventListener('mouseenter', () => {
        //ホバー時のアニメーションをする
        cursor.classList.add('hovered');
    });
    //マウスが離れた場合
    el.addEventListener('mouseleave', () => {
        //ホバー時の愛メーションをやめる
        cursor.classList.remove('hovered');
    });
});


//文字のちらつき防止
//setTimeoutは、指定した時間が経過した後に1度だけ関数を呼び出します。
setTimeout(function () {
    document.getElementsByTagName("html")[0].classList.add("loading-delay");
}, 100);
