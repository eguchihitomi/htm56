'use strict'

// 「data-filter」を持つボタンをすべて取得
const filterButtons = document.querySelectorAll('[data-filter]');

// 「data-category」を持つコンテンツをすべて取得
const categoryContents = document.querySelectorAll('[data-category]');

// ボタンがクリックされたらフィルタ関数を実行
filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', categoryFilter);
});

// ★フィルタ処理の関数
function categoryFilter() {
    // クリックされたボタンのカテゴリ名を取得 クリックされたdata-filterを取得してbuttonCategoryに格納する
    const buttonCategory = this.dataset.filter;

    // クリックしたボタンと同じ値のデータ属性をを持つコンテンツを格納 クリックしたボタンのカテゴリーだけを格納
    const targetContents = document.querySelectorAll('[data-category="' + buttonCategory + '"]');

    // 「data-category」を持つ要素（コンテンツ）に対してイベント forEach=中身を一つずつ取って関数を実行する filterButtonsの中身を一つずつ取って実行する
    categoryContents.forEach((categoryContent) => {
        // 一旦すべて非表示にする
        categoryContent.classList.remove('show');

        // .fadeIn 要素の .is-show を外す（アニメーションリセット）
        const fadeInChildren = categoryContent.querySelectorAll('.fadeIn');
        fadeInChildren.forEach((el) => {
            el.classList.remove('is-show');
        });
    });

    // クリックしたボタンがallの場合全てを表示
    if (buttonCategory === 'all') {
        categoryContents.forEach((categoryContent) => {
            categoryContent.classList.add('show');

            // .fadeIn 要素に .is-show を再付与（ふわっと表示）
            const fadeInChildren = categoryContent.querySelectorAll('.fadeIn');
            fadeInChildren.forEach((el) => {
                // ブラウザが「レイアウトを再計算する」＝再描画を強制する el.offsetWidth要素の横幅を取得（数値）
                void el.offsetWidth;
                el.classList.add('is-show');
            });
        });
        // all以外の場合はクリックしたボタンと同じデータ属性の値を持つ要素をアクティブ
    } else {
        targetContents.forEach((targetContent) => {
            targetContent.classList.add('show');

            const fadeInChildren = targetContent.querySelectorAll('.fadeIn');
            fadeInChildren.forEach((el) => {
                void el.offsetWidth;
                el.classList.add('is-show');
            });
        });
    }

    // inviewイベントの再判定（必要なら）
    window.dispatchEvent(new Event('scroll'));
}