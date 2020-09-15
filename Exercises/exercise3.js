let bottle = function(n) {
    if (n == 0) {
        console.log("No bottles of water on the wall,\nno bottles of water,\nya’ can’t take one down, ya’ can’t pass it around,\n’cause there are no more bottles of water on the wall!");
    } else {
        console.log(n+ " bottles of water on the wall,\n" +n+ " bottles of water,\nya’ take one down, ya’ pass it around,\n" );
        bottle(n-1);
    }
}

bottle(99);