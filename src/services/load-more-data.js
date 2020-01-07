// For simulating data
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const getNearest100 = (min, max) => {
    const rnd = getRndInteger(min, max);
    return Math.round(rnd/100)*100; //rounds to nearest 100
}
const buildDataValue = (i) => {
    return ({ month: `Month ${i}`, volume: getNearest100(500, 9900) });
}
const allData = new Array(25).fill(0).map((_val, i) => buildDataValue(i));
const perPage = 10; // number of records to fetch at a time


const loadMoreData = (context, _event) => {
    return (callback, _onEvent) => {
        setTimeout(() => { //Simulate an API Call
            const { data }= context;
            const newData = allData.slice(data.length, data.length + perPage);
            const hasMore = newData.length === perPage;

            if (hasMore) {
                callback({ type: "DONE_MORE", newData });
            } else {
                callback({ type: "DONE_COMPLETE", newData });
            }
        }, 1000);
    };
}

export default loadMoreData;