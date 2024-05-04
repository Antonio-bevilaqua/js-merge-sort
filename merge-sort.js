const mergeSort = (firstSplit, lastSplit) => {
    let mergedArr = [];
    let firstIdx = 0;
    let lastIdx = 0;
    for (let i = 0; i < firstSplit.length + lastSplit.length; i++) {
        if (firstSplit.length <= firstIdx) {
            mergedArr[i] = lastSplit[lastIdx];
            lastIdx++;
            continue;
        }

        if (lastSplit.length <= lastIdx || firstSplit[firstIdx] < lastSplit[lastIdx]) {
            mergedArr[i] = firstSplit[firstIdx];
            firstIdx++;
            continue;
        }

        mergedArr[i] = lastSplit[lastIdx];
        lastIdx++;
    }
    return mergedArr;
}

const msort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);

    return mergeSort(
        msort(array.slice(0, mid)),
        msort(array.slice(mid, array.length))
    )
}

Array.prototype.msort = function () {
    return msort(this);
}

let test = [];
for (let i = 0; i < 100000; i++) {
    test[i] = Math.floor(Math.random() * 900);
}
console.log("array", test);
console.log("==================================");

console.time("mergeSort");
console.log("mergeSort result", test.msort());
console.timeEnd("mergeSort");


console.log("==================================");

console.time("Default Sort");
console.log(test.sort());
console.timeEnd("Default Sort");

const memoryUsage = process.memoryUsage();
const rssInMB = memoryUsage.rss / 1024 / 1024;
console.log(`MEM: ${rssInMB.toFixed(2)} MB`);