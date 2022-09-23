import { Observable, Subject } from 'rxjs';

console.clear();

const o1 = new Observable((observer) => {
  let counter = 0;

  const eventClickListener = () => {
    counter++;
    console.log('Event emitig');
    observer.next(counter);
  };
  document
    .querySelector('#event-square')
    .addEventListener('click', eventClickListener);
  /*------------------------------------------------------*/
  const errorClickListener = () => {
    console.log('Error emitig');
    observer.error('hiba történt');
  };
  document
    .querySelector('#error')
    .addEventListener('click', errorClickListener);
  /*------------------------------------------------------*/
  const completeClickListener = () => {
    console.log('Complete emitig');
    observer.complete();
  };
  document
    .querySelector('#complete')
    .addEventListener('click', completeClickListener);
  /*------------------------------------------------------*/
  return () => {
    document
      .querySelector('#event-square')
      .removeEventListener('click', eventClickListener);

    document
      .querySelector('#error')
      .removeEventListener('click', errorClickListener);

    document
      .querySelector('#complete')
      .removeEventListener('click', completeClickListener);
  };
});

const s = new Subject();
o1.subscribe(s);

const subscription = s.subscribe(
  (res) => {
    console.log('Observable emits', res);
    if (res === 5) {
      subscription.unsubscribe();
    }
  },
  (err) => {
    console.log('Observable error', err);
  },
  () => {
    console.log('Observable complete');
  }
);

const subscription2 = s.subscribe(
  (res) => {
    console.log('Observable emits', res);
    if (res === 5) {
      subscription.unsubscribe();
    }
  },
  (err) => {
    console.log('Observable error', err);
  },
  () => {
    console.log('Observable complete');
  }
);
