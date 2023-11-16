let wins = 100;
let losses = 35;

rankedCalculator(wins, losses);

function rankedCalculator(wins, losses) {
    let rankingBalance = wins - losses;
    let rankingFinal = "";

    if (rankingBalance <= 10) {
        rankingFinal = "Iron";
    } else if (rankingBalance <= 20) {
        rankingFinal = "Bronze";
    } else if (rankingBalance <= 50) {
        rankingFinal = "Silver";
    } else if (rankingBalance <= 80) {
        rankingFinal = "Gold";
    } else if (rankingBalance <= 90) {
        rankingFinal = "Diamond";
    } else if (rankingBalance <= 100) {
        rankingFinal = "Legendary";
    } else {
        rankingFinal = "Immortal"
    }

    console.log("The Hero has a balance of " + rankingBalance + " is at the level of " + rankingFinal)
}
