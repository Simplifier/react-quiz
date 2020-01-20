const sortInOrder = (arr, orderArray) => {
    let mapped = arr.map((el, i) => {
        return {i: i, val: el};
    });
    return mapped
        .sort((a, b) => orderArray.indexOf(a.i) > orderArray.indexOf(b.i) ? 1 : -1)
        .map(el => el.val);
};

export default sortInOrder;
