import { Observable } from 'rxjs';

console.clear();

const o1 = new Observable((observer) => {
  let counter = 0;
  document.querySelector('#event-square').addEventListener('click', () => {
    counter++;
    console.log('Event emitig');
    observer.next(counter);
  });

  document.querySelector('#error').addEventListener('click', () => {
    console.log('Error emitig');
    observer.error('hiba történt');
  });
});

const subscription = o1.subscribe(
  (res) => {
    console.log('Observable emits', res);
    if (res === 5) {
      subscription.unsubscribe();
    }
  },
  (err) => {
    console.log('Observable error', err);
  }
);
