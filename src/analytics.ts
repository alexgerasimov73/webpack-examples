import * as $ from 'jquery';

function createAnalytics(): object {
  let counter = 0;
  let isDestroyed: boolean;

  const listener = (): number => counter++;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
    },
    getClicks() {
      if (isDestroyed) {
        return 'Analytics is destroyed';
      }
      return counter;
    }
  }
}

window['analytics'] = createAnalytics();