// файлы в JS являются модулями

const privateVariable = 42; // приватная переменная в данном модуле

export const COLOR = "#bababa"; // export чтобы могли экспортировать в другие модули

export function compute(a, b) {
  return a + b;
}

// экспорт по дефолту
export default {
  log() {
    console.log(privateVariable);
  },
};
