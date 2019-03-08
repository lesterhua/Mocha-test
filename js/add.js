function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string' || a <= 0 || b <= 0) {
        return 'something wrong!!'
    }
    return a + b
}