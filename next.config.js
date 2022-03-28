module.exports = {
  env: {
    contractAddress: "0xAbaf7922103BeDdbB825728B4106391AA66e3144", //Address of the Compiled Contract on the Blockchain
    tokenAddress: "0x803e78269f7F013b7D13ba13243Be10C66418a70", //Address of the NODAC Token Contract on the Blockchain
    //Titles, Labels and Taglines
    appTitle: "Double or Nothin'", //Title of the app - header.js
    tagline: "Awaiting user selection...", //Tagline displayed below coin image - dashboard.js
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
    stakeBtn: "Stake", //Button text for the stake/bet button - stakePlay.js
    myFilterIconTxt: "Displaying your result history", //Label for the icon that show your filtered results - dashBoard.js
    allFilterIconTxt: `Displaying most recent results`, //Label for the icon that shows the last {limitResults} results - dashBoard.js
  },
};
