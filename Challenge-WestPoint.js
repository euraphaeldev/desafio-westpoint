function main () {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    function factoring(n){
        if( n > 1){
            return n * factoring(n-1);
        }
        return n;
    }
    
    const factorials = nums.map( e => {
        if (e < 0 ) {
            return 'Esta operação não é válida';
        }

        if(e === 0 || e === 1) {
            return e = 1;
        }

        if (e <= 9 ){
            return e * factoring(e -1);
        }
        return e;
    })

    const subtractingFactorials = factorials.map(e => {
        const initialValue = 500000;
        return initialValue - e;
    })

    return subtractingFactorials;
}
main();