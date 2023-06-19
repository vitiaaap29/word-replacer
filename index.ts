import { minimalDistance } from './min-distance';

(() => {
  const { countOperations } = minimalDistance(process.argv[2], process.argv[3]);
  console.log('Count operations: ', countOperations);
})();