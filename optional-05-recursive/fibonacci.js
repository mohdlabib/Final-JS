function fibonacci(n) {
    const fibArray = [0, 1];

    if (n === 0) {
        return [0];
    }

    for (let i = 2; i <= n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }

    return fibArray;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
