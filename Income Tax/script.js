function calcTax() {
    const income = document.querySelector(".income").value;
    const pay = document.querySelector(".tax");
    if (income <= 250000) {
        pay.innerHTML = "0";
        console.log("Vinith"); // No tax for income up to ₹2.5 Lakh
    } else if (income > 250000 && income <= 500000) {
        // 5% tax for income from ₹2.5L to ₹5L
        pay.innerHTML = (income - 250000) * 0.05;
    } else if (income > 500000 && income <= 750000) {
        // 10% tax for income from ₹5L to ₹7.5L
        pay.innerHTML = (250000 * 0.05) + (income - 500000) * 0.10;
    } else if (income > 750000 && income <= 1000000) {
        // 15% tax for income from ₹7.5L to ₹10L
        pay.innerHTML = (250000 * 0.05) + (250000 * 0.10) + (income - 750000) * 0.15;
    } else if (income > 1000000 && income <= 1250000) {
        // 20% tax for income from ₹10L to ₹12.5L
        pay.innerHTML = (250000 * 0.05) + (250000 * 0.10) + (250000 * 0.15) + (income - 1000000) * 0.20;
    } else if (income > 1250000 && income <= 1500000) {
        // 25% tax for income from ₹12.5L to ₹15L
        pay.innerHTML = (250000 * 0.05) + (250000 * 0.10) + (250000 * 0.15) + (250000 * 0.20) + (income - 1250000) * 0.25;
    } else {
        console.log("love");// 30% tax for income above ₹15L
        pay.innerHTML = (250000 * 0.05) + (250000 * 0.10) + (250000 * 0.15) + (250000 * 0.20) + (250000 * 0.25) + (income - 1500000) * 0.30;
    }

}
