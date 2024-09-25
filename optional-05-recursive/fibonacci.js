function fibonacci(n) {
    // Base cases: fibonacci(0) is 0, fibonacci(1) is 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // Recursive case: fibonacci(n - 1) + fibonacci(n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
