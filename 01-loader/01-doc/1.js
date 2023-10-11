//runSyncOrAsync里的同步异步不太懂

function normal() {
  //const callback= global.async();
  console.log('normal');
  //setTimeout(callback,3000);
}
function callback() {
  console.log('callback');
}
function runSyncOrAsync(fn, callback) {
  let sync = true;
  global.async=()=> {
    sync = false;
    return callback;
  }
  fn();
  if(sync)
    callback();
}
runSyncOrAsync(normal,callback);