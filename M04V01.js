
const dataCache = new Map();

const expensiveTask = (id) =>{
    console.log("Run the expensive task for: ", id);
    return {
        id: id,
        data: `Some Data for ${id}`,
        timestamp: new Date().getTime(), 
    }
}

const getData = (id) => {
    if(dataCache.has(id)){
        console.log("cache hit FOR ID: ", id);
        return dataCache.get(id);
    }

    console.log("cache miss for id:" , id);
   const data = expensiveTask(id);

    dataCache.set(id, data);
    return data;
}

console.log(getData(123));
console.log(getData(123));
console.log(dataCache);