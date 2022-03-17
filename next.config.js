module.exports = {
  env: {
    //Titles, Labels and Taglines
    appTitle: "Flip It!", //Title of the app - header.js
    tagline: "Try your Luck!", //Tagline displayed below coin image - dashboard.js
    heads: "You're staking HEADS!!!", //Tagline when user clicks Head Image - stakePlay.js
    tails: "You're staking TAILS!!!", //Tagline when user clicks Tail Image - stayPlay.js
    amountTxt: "How much are you willing to stake?", //Text above textfield - stakePlay.js
    streaks: "Got 1!, Scores a Double, You're Killing It!, You're on Fire!", //List of STREAK NAMES - stakeyPlay.js

    //Image File Names
    coinImg: "coin_spin_bg.gif", //Name of main coin image - dashboard.js
    headsImg: "coin_heads_white.svg", //Name of the coin image for heads - stakePlay.js
    tailsImg: "coin_tails_white.svg", //Name of the coin image for tails - stakePlay.js
    fireImg: "streakfire.gif", //Name of the fire image for streaks = stakePlay.js

    //Result Lows Limit
    limitResults: 10, //Limits the number of ALL results, does not limit the number of filtered results - dashboard.js

    //Button Label
    stakeBtn: "Come on, Lady Luck!!", //Button text for the stake/bet button - stakePlay.js
    myFilterIconTxt: "Displaying your result history", //Label for the icon that show your filtered results - dashBoard.js
    allFilterIconTxt: `Displaying most recent results`, //Label for the icon that shows the last {limitResults} results - dashBoard.js
  },
};
