function bai1() {
    for (let i = 0; i < 5; i++) {
        document.write("The number is " + i);
    }
}

bai1();

function bai2() {
    var sum = 0;
    var number = parseInt(prompt("Nhap vap so bat ki"));
    if (number <= 0) {
        number = parseInt(prompt("So vua nhap nho hon 0. Hay nhap lai so lon hon 0"))
    } else {
        for (let i = 1; i < number; i++) {
            sum += i;
        }
    }
    document.write("Tong cac so tu 1 den " + number + " la " + sum);
}

bai2();
