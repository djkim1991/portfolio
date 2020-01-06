// DataType check
const DataTypeDJ = (function () {

    /**
     * 숫자 확인(소숫점 포함)
     * @param   str         : 확인할 문자열
     * @return  boolean     : 확인 결과
     * */
    function isNumber(str) {
        const regex = /^[0-9]+(\.[0-9]+)?$/g;

        return regex.test(str);
    }

    /**
     * Integer 확인
     * @param   str         : 확인할 문자열
     * @return  boolean     : 확인 결과
     * */
    function isInteger(str) {
        const regex = /^[0-9]$/g;

        return regex.test(str);
    }

    /**
     * Email 확인
     * @param   str         : 확인할 문자열
     * @return  boolean     : 확인 결과
     * */
    function isEmail(str) {
        const regex=/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;

        return regex.test(str);
    }

    /**
     * 전화번호 확인
     * @param   str         : 확인할 문자열
     * @return  boolean     : 확인 결과
     * */
    function isPhoneNum(str) {
        const regex=/^\d{2,3}-\d{3,4}-\d{4}$/;

        return regex.test(str);
    }

    return {
        "isNumber"      : isNumber,     // 숫자 확인(소숫점 포함)
        "isInteger"     : isInteger,    // Integer 확인
        "isEmail"       : isEmail,      // Email 확인
        "isPhoneNum"    : isPhoneNum    // 전화번호 확인
    };

})();
