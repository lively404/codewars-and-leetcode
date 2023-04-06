function quickSort(array) {
    function sort(array, left, right) {
        if (left < right) {
            let partitionIndex = partition(array, left, right);
            sort(array, left, partitionIndex - 1);
            sort(array, partitionIndex + 1, right);
        }
    }

    function partition(array, left, right) {
        let pivotIndex = Math.floor(Math.random() * (right - left + 1) + left);
        let partitionIndex = left;
        swap(array, pivotIndex, right);
        for (let i = left; i <= right; i++) {
            if (array[i] < array[right]) {
                swap(array, i, partitionIndex);
                partitionIndex++;
            }
        }
        swap(array, partitionIndex, right);
        return partitionIndex;
    }

    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    sort(array, 0, array.length - 1);
    return array;
}