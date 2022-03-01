


// ----------------------------------------JavaScript------------------------------------------------------




// ------------電車のアニメーション-------------------
$(document).ready(function () {
    $(".demo_wrap").on("animationend", function () {
        if ($(this).attr("data-order") == "left") {
            $(this).attr("data-order", "right");
        } else {
            $(this).attr("data-order", "left");
        }
    });
});
// ----------------------------------------------








// ---------------------------------------------jQuery----------------------------------------------------------


$(function () {

    // -----------------ローディング画面のフェードアウト--------------
    $(".load").fadeOut(5000);
    // ---------------------------------------------------------



    // ---------------Readmoreボタンのトグル-----------------------
    $(".readmore").on("click", function () {
        $(this).toggleClass("on-click");
        $(".hide-bottom").slideToggle(1000);
    });
    // ----------------------------------------------------------


    // -------------------サイコロの現在地--------------------------
    let count = 0;
    // ----------------------------------------------------------


    // ----------------イベントタグが発火した時のテキスト--------------
    const text = [
        "リニア中央新幹線の始発駅。リニアカードが貰える。",
        "120年の歴史を持つ駅。駅前再開発で土地が高騰。+20万円。",
        "主要駅へのアクセスが良い。夜は風俗に向かうサラリーマンだらけ。-8万円。",
        "おしゃれなバーと芸能人の街。バーを経営。+30万円。",
        "おしゃれなイメージ。多分居酒屋にはビールしかない。-2万円。",
        "ティンダーをフル活用。寝不足になる。-15万円。",
        "クレープを食べすぎて太る。いただきますカードが貰える。",
        "今更予備校に通い始める。周遊禁止カードが貰える。",
        "ぼったくりバーで被害に遭う。-28万円。",
        "色白になりヤンニョムチキンにハマる。-1万円。",
        "高田馬場は鉄腕アトム生誕の地。豪速球カードが貰える。",
        "タクシー運転手に目黒駅と間違られた。-2万円。",
        "IWGPのロケ地巡りのYouTubeで収益が出る。+50万円。",
        "乗り換えのない駅。屯田兵カードが貰える。",
        "お年寄りは大切にしましょう。エンジェルカードが貰える。",
        "駒込はソメイヨシノ発祥の地。+10万円。",
        "実は山手線の終点の駅。目的地変更カードが貰える。",
        "成田空港に向かうための駅。最果てカードが貰える。",
        "日本で一番多くの線路が通る駅。お殿様カードが貰える。",
        "駅前にラブホテルしか無い。-5万円。",
        "とりあえず「大統領」でモツ煮とホッピー。-1万円。",
        "上野動物園は世界で唯一世界三大珍獣が見られる。+30万円。",
        "メイドとオタクと電気の街。-5万円。",
        "スノーボードショップを経営する。持ち金ゼロカードが貰える。",
        "大都会東京。一攫千金カードが貰える。",
        "この街知りません。-8万円。",
        "おっさんの街。連帯保証人カードが貰える。",
        "羽田空港入口。キッザニア東京で子供を遊ばせる。-1万円。",
        "ボーリング場はもう無い。とっかえっこカードが貰える。",
        "Goooooaaaaaal",
    ]

    // -------------------------------------------------------------------------


    // Javascriotの場合は要素名.value;
    // jQueryの場合はval()メソッドを使用 要素名.val();
    let data = {
        "method": "getStations",
        "line": "JR山手線"
    }
    // ajaxの書き方
    $.ajax({
        url: 'http://express.heartrails.com/api/json', //アクセスするURL
        type: 'get',    //post or get
        cache: false,        //cacheを使うか使わないかを設定
        dataType: 'json',     //data type script・xmlDocument・jsonなど
        data: data,        //アクセスするときに必要なデータを記載  (連想配列で渡す)    
    })
        .done(function (response) {
            //通信成功時の処理


            let station = response.response.station

            // -------for文を回してそれぞれのstationタグに名前を入れる--------------
            for (let i = 0; i < station.length; i++) {
                $(".station").eq(i).append(station[i].name);
            }
            //  --------------------------------------------------------------


            // -------------スタートの品川駅のcss--------------
            $(".station").eq(0).css("background", "lime");
            // --------------------------------------------

            // ----------------------サイコロを振るボタンを押した時のイベント--------------------------------------------------
            $(".startbtn").on("click", function () {

                // 降ったら品川駅の背景を元に戻す
                $(".station").eq(0).css("background", "");

                $('.cube').animate({ zIndex: 1 }, {
                    //1秒かけてアニメーション
                    duration: 4000,
                    //stepは、アニメーションが進むたびに呼ばれる
                    step: function (now) {
                        //nowに現在のz-indexの値（0から1に変化しているところ）が渡してもらえる
                        //0から1に向かって変化していくnowを利用して3回転（1080度）させてみる
                        let rotate = now * 1080
                        $('.cube').css({ transform: 'rotateX(' + rotate + 'deg) rotateY(' + rotate + 'deg)' });
                    },
                    //終わったら
                    complete: function () {
                        let num = Math.floor(Math.random() * 6) + 1;
                        if (num == 6) {
                            $('.cube').css({ transform: 'rotateX(1170deg) rotateY(1080deg)' })
                        }
                        else if (num == 5) {
                            $('.cube').css({ transform: 'rotateX(990deg) rotateY(1080deg)' })
                        }
                        else if (num == 4) {
                            $('.cube').css({ transform: 'rotateX(1080deg) rotateY(1170deg)' })
                        }
                        else if (num == 3) {
                            $('.cube').css({ transform: 'rotateX(1080deg) rotateY(990deg)' })
                        }
                        else if (num == 2) {
                            $('.cube').css({ transform: 'rotateX(1080deg) rotateY(900deg)' })
                        }
                        //1の目
                        else {
                            $('.cube').css({ transform: 'rotateX(1080deg) rotateY(1080deg)' })
                        }
                        //次のために、元に戻しておく
                        $('.cube').css('zIndex', 0);

                        // ---------現在地countにサイコロの出目numを足して現在地を更新する------------
                        count = num + count;
                        // count = 29;
                        // ----------------------------------------------------------------

                        // ---------ゴールの高輪ゲートウェイのモーダル------------------------
                        if (count == 29) {
                            $(".station").eq(count).css("background", "lime");
                            $(".modal").fadeIn(2000);
                            $(".modal").css("display", "block");
                            return false;
                        }
                        // -------------------------------------------------------------

                        // ----------品川でリセット----------------------
                        if (count > 29) {
                            count = count - 30;
                        }
                        // -------------------------------------------

                        // --------現在地countの駅名を入れる-------------------------
                        $(".station-name").text(station[count].name);
                        // ------------------------------------------------------

                        // -------現在地countのテキストを配列textから取ってくる--------
                        $(".station-text").text(text[count]);
                        // ------------------------------------------------------

                        // -----------------現在地の背景色を変える---------------
                        $(".station").eq(count).css("background", "lime");
                        // -------------------------------------------------

                        // ----------イベントのフェードイン-------------------
                        $(".event").fadeIn(2000);
                        // -----------------------------------------------

                        // ----------イベントをnoneからblockで表示する---------
                        $(".event").css("display", "block");
                        // ------------------------------------------------

                        // -------ゲームに戻るボタンを押した時のフェードアウト--------
                        $(".station-button").on("click", function () {
                            $(".event").fadeOut(2000);
                        })
                        // ----------------------------------------------------


                        // -----サイコロを振った時のフェードアウトと現在地の背景を元に戻す処理-------
                        $(".startbtn").on("click", function () {
                            $(".event").fadeOut(2000);
                            $(".station").eq(count).css("background", "");
                        })
                        // ---------------------------------------------------------
        
                    }
                });
            });


            //成功したとき実行したいスクリプトを記載
        })
        .fail(function (xhr) {
            //通信失敗時の処理
            //失敗したときに実行したいスクリプトを記載
        })
        .always(function (xhr, msg) {
            //通信完了時の処理
            //結果に関わらず実行したいスクリプトを記載
        });






















})