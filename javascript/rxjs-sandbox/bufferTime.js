const Rx = require('rxjs');
var source = Rx.Observable.interval(300);
var example = source.bufferTime(1000);

example.subscribe({
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
});