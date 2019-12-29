// string 관련 함수 모음
const StrDJ = (function () {

    /**
     * 빈 문자열인지 확인
     * @param   str         : 확인할 문자열
     * @return  boolean     : 확인 결과
     * */
    function isEmpty(str) {
        return (typeof str == "undefined" || str == null || str == "");
    }

    /**
     * 빈 문자열이면 default 문자열 반환
     * @param str           : 확인할 문자열
     * @param defaultStr    : default 문자열
     * */
    function nvl(str, defaultStr) {
        return isEmpty(str)? defaultStr : str;
    }

    return {
        "isEmpty"   : isEmpty,  // 빈 문자열인지 확인
        "nvl"       : nvl       // 빈 문자열이면 default 문자열 반환
    };

})();
