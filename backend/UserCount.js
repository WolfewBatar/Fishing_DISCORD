let count = 0;

async function AddCount(){
    count = count + 1;
    return count;
}

module.exports = {AddCount};