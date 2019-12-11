
const Survey = (function(){

    // 초기화
    function init() {

        // 질문 추가
        $(document).on('click', 'div.add-survey-item > span.icono', function(){
            if($('.survey:not(.format) .survey-item').length >= 10) {
                alert('설문 항목은 최대 10개 까지만 생성 가능합니다.');
                return;
            }

            const surveyItem	= $('div.focus');
            addSurveyItem(surveyItem);
        });

        // 질문 삭제
        $(document).on('click', 'div.remove-survey-item > span.icono', function(){
            const surveyItem	= $(this).closest('div.survey-item');

            surveyItem.remove();
        });

        // 질문 옵션 추가
        $(document).on('click', 'div.bottom input[type=button]', function(){
            const surveyItem	= $(this).closest('.survey-item');
            const answers		= surveyItem.find('.answers');
            const answerType	= answers.data('answer-type');

            if(answers.find('> div') .length >= 10) {
                alert('질문 옵션은 최대 10개 까지만 생성 가능합니다.');
                return;
            }

            addAnswer(answers, answerType);
        });

        // 질문 옵션 삭제
        $(document).on('click', 'div.answers > div > span.icono', function(){
            const answerDiv	= $(this).closest('div');

            answerDiv.remove();
        });

        // 질문 유형 변경
        $(document).on('change', '.question-type select', function(){
            const surveyItem = $(this).closest('.survey-item');
            const surveyType = $(this).val();

            setAnswerType(surveyItem, surveyType);
        });

        // div focus
        $(document).on('click', 'div.survey > div', function(){
            $('.focus').removeClass('focus');
            $(this).addClass('focus');
        });

        $(document).on('click', '#save-btn', function(e){
            e.preventDefault();

            writeSurvey();
        });
    }

    // 설문 가져오기
    function getSurvey() {
        return $('div.survey:not(.format)');
    }

    // 설문 항목 생성
    function createSurveyItem(surveyType) {
        let surveyItem = $('.survey.format > .survey-item').clone();

        // set type: 단답형/라디오/체크박스
        setAnswerType(surveyItem, "shortAnswer");

        // focus
        $('.focus').removeClass('focus');
        surveyItem.addClass('focus');

        return surveyItem;
    }

    // 설문 유형 변경
    function setAnswerType(surveyItem, surveyType) {

        let answers	= surveyItem.find('.answers');
        let bottom	= surveyItem.find('.bottom');

        // 단답형
        if(surveyType == "shortAnswer")
        {
            const shortAnswerHtml = $('.survey.format > .answers.short-answers').html();

            answers.html(shortAnswerHtml);
            bottom.html('');
        }

        // 객관식
        else if(surveyType == "radio")
        {
            const radioHtml = $('.survey.format > .answers.radio-answers').html();
            const bottomHtml = $('.survey.format > .bottom').html();

            answers.html(radioHtml);
            bottom.html(bottomHtml);
        }

        // 체크박스
        else if(surveyType == "checkbox")
        {
            const checkboxHtml = $('.survey.format > .answers.checkbox-answers').html();
            const bottomHtml = $('.survey.format > .bottom').html();

            answers.html(checkboxHtml);
            bottom.html(bottomHtml);
        }

        answers.data('answer-type', surveyType);
    }

    // 질문 추가
    function addSurveyItem(surveyItem) {
        if($('.survey:not(.format) .survey-item').length >= 10) {
            console.log('설문 항목은 최대 10개 까지만 생성 가능합니다.');
            return;
        }

        const newSurveyItem = createSurveyItem();

        surveyItem.after(newSurveyItem);
    }

    // 옵션 추가
    function addAnswer(answers, surveyType) {
        if(answers.find('> div') .length >= 10) {
            alert('질문 옵션은 최대 10개 까지만 생성 가능합니다.');
            return;
        }

        // 객관식
        if(surveyType == "radio")
        {
            const radioHtml = $('.survey.format > .answers.radio-answers').html();

            answers.append(radioHtml);
        }

        // 체크박스
        else if(surveyType == "checkbox")
        {
            const checkboxHtml = $('.survey.format > .answers.checkbox-answers').html();

            answers.append(checkboxHtml);
        }
    }

    // 설문 등록
    function writeSurvey(){
        const data = getSurveyData();

        console.log(JSON.stringify(data));
    }

    // 설문 정보 추출
    function getSurveyData() {
        let data = {};

        // 설문 정보
        const surveyInfo = $('.survey-info');
        data.survey = {
            'title'			: surveyInfo.find('textarea[name=title]').val(),
            'description'	: surveyInfo.find('textarea[name=description]').val()
        };

        // 질문 정보
        const surveyQuestionList = $('.survey-item');
        data.questionList = [];
        $.each(surveyQuestionList, function(){
            const title		= $(this).find('textarea[name=title]').val();	// 질문 제목
            const type		= $(this).find('select[name=type]').val();		// 질문 유형
            let answerList	= [];											// 질문 항목들

            const answerElements = $(this).find('textarea[name=answer]');
            $.each(answerElements, function(){
                answers.push($(this).val());
            });

            data.questionList.push({
                'title'		: title,
                'type'		: type,
                'answers'	: answers
            });
        });


        return data;
    }

    return {
        "init" : init
    };
})();

$(function(){
    TextareaElement.disabledEnter();
    Survey.init();
});