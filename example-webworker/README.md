# RPC Support for Web Workers

## Usage
```sh
npx http-server .
```

Open browser to address specified by http-server

## Open Issues
Web workers do not support modules ([source](https://stackoverflow.com/a/60865512/2365824)), so existing webview-rpc does not work out of the box. Specifically, rpc-common is exported as a module.

As a workaround, we can remove `import` and `export` from our code and use web worker `importScripts()` in the correct order (first rpc-common, then specific implementation).

On the plus side, `RpcBrowser` fully supports web workers, because even though it's meant for use with vscode, both use the same `postMessage` and `addEventListener` method signatures.
