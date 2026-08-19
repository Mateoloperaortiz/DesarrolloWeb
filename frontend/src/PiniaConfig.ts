import { createPinia } from 'pinia';
import { watch } from 'vue';
import { bookSeeder } from '@/stores/bookseeder.js';
import { reviewSeeder } from '@/stores/reviewseeder.js';

export default class PiniaConfig {
  public static init() {
    const pinia = createPinia();

    const defaultState = {
      book: {
        books: bookSeeder,
      },
      review: {
        reviews: reviewSeeder,
      },
    };

    const savedState = localStorage.getItem('piniaState');
    if (savedState) {
      const parsed = JSON.parse(savedState) as {
        book?: { books: typeof bookSeeder };
        review?: { reviews: typeof reviewSeeder };
      };
      pinia.state.value = {
        book: parsed.book ?? defaultState.book,
        review: parsed.review ?? defaultState.review,
      };
    } else {
      pinia.state.value = defaultState;
      localStorage.setItem('piniaState', JSON.stringify(pinia.state.value));
    }

    watch(
      pinia.state,
      (state) => {
        localStorage.setItem('piniaState', JSON.stringify(state));
      },
      { deep: true },
    );

    return pinia;
  }
}
