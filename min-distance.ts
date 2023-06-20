import { ITransformationResult } from './types';

const insertCharIntoWord = (word: string[], index: number, newItem: string) => [
    // part of the array before the specified index
    ...word.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...word.slice(index)
]

function replaceCharInWord(curWord: string[], newItem: string, curJ: number): string[] {
    let copyWord = [...curWord];
    if (curJ >= 0) {
        copyWord[curJ] = newItem;
    } else {
        copyWord = [newItem, ...copyWord];
    }

    return copyWord;
}

function removeCharInWord(word: string[], index: number) {
    const copyWord = [...word];
    copyWord[index] = '';
    return copyWord;
}


export const minimalDistance = (firstWord: string, secondWord: string): ITransformationResult => {
    const n = secondWord.length;
    const m = firstWord.length;
    const dp = Array(n);

    if (firstWord === '') {
        return {
            countOperations: n, resultWord: secondWord,
        }
    }

    const getDp = (i, j, dp) => {
        if (i < 0 && j < 0) return 0;
        if (i < 0) return j + 1;
        if (j < 0) return i + 1;
        return dp[i][j];
    };

    for (let i = 0; i < n; i++) {
        dp[i] = Array(m);
        for (let j = 0; j < m; j++) {
            dp[i][j] = Math.min(
                getDp(i - 1, j, dp) + 1,
                getDp(i, j - 1, dp) + 1,
                getDp(i - 1, j - 1, dp) + (secondWord[i] === firstWord[j] ? 0 : 1)
            );
        }
    }

    let distance = getDp(n - 1, m - 1, dp);
    const countOperations = distance;
    let curI = n - 1;
    let curJ = m - 1;
    let curWord = Array.from(firstWord);

    for (let operationCounter = 1; distance > 0; operationCounter++) {
        const del = getDp(curI, curJ - 1, dp);
        const insert = getDp(curI - 1, curJ, dp);
        const replace = getDp(curI - 1, curJ - 1, dp);
        if (replace < distance) {
            curWord = replaceCharInWord(curWord, secondWord[curI], curJ);
            curI -= 1;
            curJ -= 1;
            distance = replace;
        } else if (del < distance) {
            curWord = removeCharInWord(curWord, curJ);
            curJ -= 1;
            distance = del;
        } else if (insert < distance) {
            curWord = insertCharIntoWord(curWord, curJ + 1, secondWord[curI]);
            curI -= 1;
            distance = insert;
        } else {
            curI -= 1;
            curJ -= 1;
        }
    }

    return  { countOperations, resultWord: curWord.join('') };
};
