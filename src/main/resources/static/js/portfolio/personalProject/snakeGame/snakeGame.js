// 뱀게임
const SnakeGame = (function(){
    let score = 0;	// 점수

    let LR = 0; // 좌우 방향
    let TB = 1; // 위아래 방향

    const mapSize = 21; //map size

    let gameInterval;

    // init map
    function initMap(){
        let tableCode = '';
        for(let i=0; i<mapSize; i++) {
            tableCode += '<tr>';

            let rowCode = '';
            for(let j=0; j<mapSize; j++) {
                rowCode += '<td id="block'+i+'_'+j+'"></td>';
            }

            tableCode += rowCode + '</tr>';
            $("#snakeTable").html(tableCode);
        }
    }

    //snake
    let snake = [];
    //food
    let food = [];

    // init snake
    function initSnake(){
        snake = [];
        snake.push([0,1]);
        drawSnake();
    }

    //뱀 그리기
    function drawSnake() {
        let state = '';
        $('#snakeTable td').removeClass('snake');

        for(let i=0;i<snake.length;i++) {
            let snakeBlock = $("#block"+snake[i][0]+'_'+snake[i][1]);
            snakeBlock.addClass('snake');

            // 먹이 먹었을 때
            if(snakeBlock.hasClass('food')){
                score++; // 점수 증가

                $('#score').text(score); //점수 반영

                food.pop(); // 먹이 제거
                initFood(); // 새로운 먹이 추가

                //뱀 꼬리 늘리기
                state = 'eat';
            }
        }
        return state;
    }

    // 먹이 초기화
    function initFood(){
        let x;
        let y;

        do{
            x = generateRandom(0,mapSize-1);
            y = generateRandom(0,mapSize-1);
        }while($('#block'+x+'_'+y).hasClass('snake')); // 뱀이랑 겹치면 다시

        food = [];
        food.push([x, y]);
        drawFood();
    }

    //먹이 그리기
    function drawFood() {
        $('#snakeTable td').removeClass('food');

        for(let i=0;i<food.length;i++) {
            $('#block'+food[i][0]+'_'+food[i][1]).addClass('food');
        }
    }


    // move
    function move() {
        let head = [];
        head[0] = snake[0][0];
        head[1] = snake[0][1];

        // 벽을 만난건지 체크
        let tmp = head[0]+TB;
        if(tmp >= 0 && tmp < mapSize) {
            head[0] = tmp;
        }else {
            saveScore();
            end();
            initAll();

            return;
        }

        tmp = head[1]+LR;
        if(tmp >= 0 && tmp < mapSize) {
            head[1] = tmp;
        }else {
            saveScore();
            end();
            initAll();

            return;
        }

        // 몸통을 만난건지 체크
        if($('#block'+head[0]+'_'+head[1]).hasClass('snake')){
            saveScore();
            end();
            initAll();

            return;
        }


        snake.unshift(head);

        if(drawSnake() !== 'eat') { //먹은게 아니면
            snake.pop(); //꼬리 연장 X
        }
    }


    function left() {
        if(TB === 0) return; // 반대방향으로 방향전환 불가
        LR = -1;
        TB = 0;
    }
    function right() {
        if(TB === 0) return; // 반대방향으로 방향전환 불가
        LR = 1;
        TB = 0;
    }
    function up() {
        if(LR === 0) return; // 반대방향으로 방향전환 불가
        LR = 0;
        TB = -1;
    }
    function down() {
        if(LR === 0) return; // 반대방향으로 방향전환 불가
        LR = 0;
        TB = 1;
    }

    $(document).on('click', '.btn', function(){
        let key = $(this).attr('data-key');

        if(key === "up")
            up();

        else if(key === "down")
            down();

        else if(key === "left")
            left();

        else if(key === "right")
            right();
    });

    function initEvent() {
        // KEY UP
        $(document).on('keyup', 'body', function(){
            $('.btn').removeClass('on');
        });

        // KEY DOWN
        $(document).on('keydown', 'body', function(event){
            if(event.key === 'w' || event.key === 'W') {
                $('#up_btn').addClass('on');
                up();
            }else if(event.key === 's' || event.key === 'S') {
                $('#down_btn').addClass('on');
                down();
            }else if(event.key === 'a' || event.key === 'A') {
                $('#left_btn').addClass('on');
                left();
            }else if(event.key === 'd' || event.key === 'D') {
                $('#right_btn').addClass('on');
                right();
            }
        });

        // click Start Btn
        $(document).on('click', '#startBtn', function(){
            end();
            start();
        });
    }

    function initAll() {
        score = 0;		// 점수 초기화
        initMap();		// 맵 초기화
        initFood();		// 먹이 초기화
        initSnake();	// init snake
        initEvent();	// init event
        LR = 0; 		// 좌우 방향 초기화
        TB = 1;			// 위아래 방향 초기화
    }

    function start(){
        gameInterval = setInterval(move, 70);
    }

    function end() {
        clearInterval(gameInterval);
    }

    // 난수 생성 함수
    function generateRandom (min, max) {
        return Math.floor(Math.random()*(max-min+1)) + min;
    }

    // 점수 저장
    function saveScore() {
        let nickName;
        do {
            nickName = $.trim(prompt("랭킹 등록을 원하시면 닉네임을 입력해 주세요.(15자 이내)"));

            if(nickName.length > 15)
                alert('15자 이내로 입력해 주세요.');

        }while (nickName.length > 15 );

        if(typeof nickName !== "undefined" && nickName !== "") {
            const url = "/personalProject/miniGame/saveScore";
            const data = {
                "score":score,
                "nickName":nickName
            };
            AjaxDJ.submit(url, data, function () {location.reload();},function () {});
        }
    }

    return {
        'initAll' : initAll
    };
})();

$(document).ready(function(){
    SnakeGame.initAll();
});