function doFirst(){
    // 先跟HTML產生關聯, 再建立事件聆聽功能
    let canvas  = document.getElementById('canvas');
    // 建立2D繪圖環境
    let context = canvas.getContext('2d');

    //上面粉色那隻
    // context.beginPath();
    // context.moveTo(400, 15);
    // context.quadraticCurveTo(270, 18, 200, 80);
    // context.quadraticCurveTo(65, 200, 218, 328);
    // context.quadraticCurveTo(250, 285, 400, 270);
    // context.fillStyle='#FD9498';
    // context.fill();
    // context.stroke();
    // context.closePath(); 

    context.beginPath();
    context.arc(340,230,200,0, 2*Math.PI, true)
    context.fillStyle='#FD9498';
    context.fill();
    context.closePath();


    //粉色眼睛
    context.beginPath();
    context.arc(215,200,13,0, 2*Math.PI, true)
    context.fillStyle='#000';
    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(310,155,13,0, 2*Math.PI, true)
    context.fillStyle='#000';
    context.fill();
    context.stroke();
    context.closePath();


    //粉色左眉毛
    context.beginPath();
    context.moveTo(180, 190);
    context.lineTo(200, 170);
    context.lineWidth=6;
    context.stroke();
    context.closePath();


    //粉色右眉毛
    context.beginPath();
    context.moveTo(280, 130);
    context.lineTo(320, 120);
    context.stroke();
    context.closePath();





    //紅色嘴巴
    context.beginPath();
    context.moveTo(265, 200);
    context.quadraticCurveTo(285, 210, 294, 190);
    context.quadraticCurveTo(312, 200, 310, 200);
    context.quadraticCurveTo(315, 210, 300, 222);
    context.quadraticCurveTo(270, 235, 265, 200);
    context.lineWidth=4;
    context.stroke();
    context.closePath();

    //紅色腮紅
    context.beginPath();
    context.moveTo(265, 200);



   
    //藍色那隻
    // context.beginPath();
    // context.moveTo(400, 270);
    // context.quadraticCurveTo(280, 280, 240, 310);
    // context.quadraticCurveTo(165, 350, 150, 395);
    // context.quadraticCurveTo(125, 450, 140, 500);
    // context.quadraticCurveTo(150, 550, 240, 605);
    // context.quadraticCurveTo(350, 650, 400, 625);
    // context.fillStyle='#97B2FF';
    // context.fill();
    // // context.stroke();
    // context.closePath();

    context.beginPath();
    context.arc(350,500,200,0, 2*Math.PI, true)
    context.fillStyle='#97B2FF';
    context.fill();

    //藍色眼睛
    context.beginPath();
    context.arc(210,450,13,0, 2*Math.PI, true)
    context.fillStyle='#000';
    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(310,410,13,0, 2*Math.PI, true)
    context.fillStyle='#000';
    context.fill();
    context.stroke();

    //藍色嘴巴
    context.translate(5, 5);
    
    context.beginPath();
    context.moveTo(240, 455);
    context.quadraticCurveTo(255, 470, 235, 475);
    context.lineWidth=4;
    context.stroke();
    context.closePath();

  
    context.beginPath();
    context.moveTo(244, 468);
    context.quadraticCurveTo(290, 480, 305, 440);
    context.lineWidth=4;
    context.stroke();
    context.closePath();


    context.beginPath();
    context.moveTo(295, 430);
    context.quadraticCurveTo(305, 450, 324, 435);
    context.lineWidth=4;
    context.stroke();

    context.translate(-5, -5);


    
    /*
    // 來畫格線囉 ~ 
    //=================================================//
    //1. 先畫水平線 (邏輯)
    context.beginPath();
    
    for(let i = 0; i<100; i++){
        let interval = i*50
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);// context.lineTo(1000, interval);
        context.fillText(interval, 0, interval); 
    }
    context.lineWidth=5;
    context.strokeStyle='rgba(0,0,0,0.3)';
    context.stroke();

    //2. 垂直線 (邏輯)
    for(let i = 0; i<100; i++){
        let interval = i*50
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);  // context.lineTo(interval, 800);
        context.fillText(interval, interval,  10);
        context.fillText(interval, interval,  800);


    }
    context.strokeStyle='rgba(0,0,0,0.3)';
    context.stroke();
    context.closePath();

     //=======================格線結束===================//


    let pic = new Image();
    pic.src = "1.jpg";
    pic.addEventListener('load', function(){
        context.globalAlpha=0;
        
        context.drawImage(pic, 80, 0, 330, 640);
    })

    */

}
window.addEventListener('load', doFirst)
