








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
    
        $(".load").fadeOut(10000);

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
                console.log(station[i].name);
            //     // $(".station").append(station[15].name);
            //     // console.log($(".station").text(station[0].name));
            //     // if($(".station").text() == ""){
            //     //     $(".station").text() = station[3].name;
            //     // }
             }
             $(".station").append(station[8].name);
             

             
             
            
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
       
       
   
        




    
    














})