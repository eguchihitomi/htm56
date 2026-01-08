'use strict'

// ページ読み込み時に発動
$(function () {
    // トップに戻るボタンを変数に代入 id=scrollTopを読み込む
    let top = $("#backToTop");

    // 初期状態で非表示にする（明示的に）
    top.hide();

    // ウィンドウがスクロールされたら発動 windowは今画面を写してる画面 windowが上下したとき
    $(window).on("scroll", function () {


        // スクロール値の取得
        let scroll = $(window).scrollTop();
        // トップへ戻るボタンが半部過ぎるとふわっと出てくる
        if (scroll <= 300) {
            top.fadeOut();
        } else {
            top.fadeIn();
        }

    });
    //btn(トップに戻るボタン)がクリックされたら発動
    top.on("click", function () {
        //bodyとhtmlに変化のアニメーションをつける transitionを作れるメソッド bodyとHTMLを動かしてる
        $("body,html").animate({
            // スクロール値を0にする
            scrollTop: 0
            // 0.5秒かける 0にすると一瞬で戻る、1000にすると1秒かけて戻る
        }, 500);
    });
});

// Intersection Observer を使って .inview_re を監視
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-show");
        } else {
            entry.target.classList.remove("is-show");
        }
    });
});

// 監視対象を登録
document.querySelectorAll(".inview_re").forEach(el => {
    observer.observe(el);
});


