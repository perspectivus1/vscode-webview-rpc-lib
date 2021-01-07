importScripts("./out.browser/rpc-common.js")
importScripts("./out.browser/rpc-browser.js")

function add(a,b) {
    return a+b;
}

const rpc = new RpcBrowser(this, this);
rpc.registerMethod({func: add, thisArg: this});

// onmessage = function (e) {
//     console.log('Worker: Message received from main script', e);
//     postMessage('OK');
// }
