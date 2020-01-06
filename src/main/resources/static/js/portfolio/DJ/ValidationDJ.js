// 유효성 검사
const ValidationDJ = (function () {

    /**
     * <input> Elements 들에 대한 유효성 검사
     * @return  boolean     : 확인 결과
     * */
    function inputElementsTest() {
        const inputElements = $("input");
        $.each(inputElements, function (item) {
            const dataType = item.data("data-type");

            if(!StrDJ.isEmpty(dataType)) {
                console.log(dataType);
            }
        });
    }

    /**
     * <textarea> Elements 들에 대한 유효성 검사
     * @return  boolean     : 확인 결과
     * */
    function textareaElementsTest() {
        const textareaElements = $("textarea");
        $.each(textareaElements, function (item) {
            const dataType = item.data("data-type");

            if(!StrDJ.isEmpty(dataType)) {
                console.log(dataType);
            }
        });
    }

    return {
        "inputElementsTest"      : inputElementsTest     // <input> Elements 들에 대한 유효성 검사
    };

})();
