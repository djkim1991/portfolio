// const ChatWebSocket = (function () {
//     let socket;
//     let stompClient;
//
//     function init() {
//         connect();
//     }
//
//     function connect() {
//         socket = new SockJS("/ws");
//         stompClient = Stomp.over(socket);
//         stompClient.connect({}, function () {
//             stompClient.subscribe("/topic/roomId", function (msg) {
//                 receiveMessage(JSON.parse(msg.body).content);
//             });
//         });
//     }
//
//     function receiveMessage(msg) {
//         return msg;
//     }
//
//     function sendMessage(text) {
//         stompClient.send("/sendMessage", {}, JSON.stringify({'content':text}));
//     }
//
//     return {
//         'init'              : init,
//         'receiveMessage'    : receiveMessage,
//         'sendMessage'       : sendMessage
//     };
// })();
//
// $(function () {
//     ChatWebSocket.init();
// });