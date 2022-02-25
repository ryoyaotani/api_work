








$(document).ready(function(){
    $(".demo_wrap").on("animationend",function(){
        if($(this).attr("data-order") == "left"){
            $(this).attr("data-order", "right");
        }else{
            $(this).attr("data-order", "left");
        } 
    });
});










$(function(){
    
        $(".load").fadeOut(3000);

        $(".readmore").on("click",function(){
            $(this).toggleClass("on-click");
            $(".hide-bottom").slideToggle(1000);
        });

        const text = [
            "仕事で大口契約が取れる。上司からお小遣い3万円もらう。",
            "駅前再開発で土地が高騰して狙っていた土地が買えなくなる。",
            "飲んだ帰りのソープにハマった。月のカード支払い20万円。",
            "おしゃれなバーを発見。",
            "居酒屋にビールしかなかった。",
            "ティンダーをフル活用。寝不足になる。",
            "クレープを食べすぎて太る。",
            "今更予備校に通い始める。",
            "ぼったくりバーで被害に遭う。28万円のお支払い。",
            "色白になりヤンニョムチキンにハマる。",
            "馬場",
            "タクシー運転手に目黒と間違られた。1万円払う。",
            "IWGPのロケ地巡りをする。",
            "家具",
            "キャバクラの穴場",
            "駒込",
            "田端",
            "こんな街知らない。",
            "日暮里",
            "駅前にホテルしか無い。",
            "とりあえず大統領でモツ煮とホッピー。",
            "おかち",
            "メイドと電気",
            "ボードショップだらけ。",
            "大都会",
            "知らん",
            "おっさんの街",
            "羽田空港入口",
            "ボーリング場はもう無い",
            "げーとうぇい",
        ]


        // Javascriotの場合は要素名.value;
        // jQueryの場合はval()メソッドを使用 要素名.val();
        let data = {
            "method":"getStations",
            "line" : "JR山手線"
        }
        // ajaxの書き方
        $.ajax({
            url: 'http://express.heartrails.com/api/json', //アクセスするURL
            type: 'get',    //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType:'json',     //data type script・xmlDocument・jsonなど
            data:data,        //アクセスするときに必要なデータを記載  (連想配列で渡す)    
          })
          .done(function(response) { 
             //通信成功時の処理
             let station = response.response.station  
             for(let i = 0; i < station.length; i++){
                $(".station").eq(i).append(station[i].name);    
                $(".station").eq(i).on("click",function(){
                    let number = $(".station").index(this);
                    $(".station-name").text(station[number].name);
                    $(".station-text").text(text[number]);
                    $(".event").css("display","block");
                    $(".station-button").on("click",function(){
                        $(".event").css("display","none");
                   })
                })
                
             } 
             
            
             //成功したとき実行したいスクリプトを記載
          })
          .fail(function(xhr) {  
             //通信失敗時の処理
             //失敗したときに実行したいスクリプトを記載
          })
          .always(function(xhr, msg) { 
            //通信完了時の処理
            //結果に関わらず実行したいスクリプトを記載
       });   
       
        
        
       $(".startBtn").on("click", function () {
        $('.cube').animate({ zIndex: 1 }, {
            //1秒かけてアニメーション
            duration: 4000,
            //stepは、アニメーションが進むたびに呼ばれる
            step: function (now) {
                //nowに現在のz-indexの値（0から1に変化しているところ）が渡してもらえる
                //0から1に向かって変化していくnowを利用して3回転（1080度）させてみる
                let rotate = now * 1080

                $('.cube').css({ transform: 'rotateX(' + rotate + 'deg) rotateY(' + rotate + 'deg)' });
                // $('.cube').css({ transform: 'rotateY(' + (now * 1080) + 'deg)' });
                // console.log('rotate(' + (now * 1080) + 'deg,' + (now * 1080) + 'deg)');
            },
            //終わったら
            complete: function () {
                let num = Math.floor(Math.random() * 6) + 1;
                console.log(num);
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

            }
        });
    });
    

    
    














})