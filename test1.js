for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("ApaBoleh");
    } else if (i % 3 == 0) {
        console.log("Apa");
    } else if (i % 5 == 0) {
        console.log("Boleh");
    } else {
        console.log(i);
    }
}