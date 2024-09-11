const footballerData = {
    player1: {
        name: "Cristiano Ronaldo",
        stats: "Goals: 763, Assists: 240, Records: Highest Champions league goal scorer",
        gif: "../Dunk/images/200w.gif"
    },
    player2: {
        name: "Lionel Messi",
        stats: "Goals:735 , Assists:355 , Records: Highest Ballon D'or Winner (8)",
        gif: "../Dunk/images/tenor.gif"
    },
    player3: {
        name: "Sergio Ramos",
        stats: "Goals:117 , Assists:42 , Records: One of the Best CB",
        gif: "../Dunk/images/tumblr_nle1pf6lTF1r0vvt6o8_400.gif"
    },
    player4: {
        name: "Thomas Muller",
        stats: "Goals:286, Assists:274 , Records: World Cup winner(2014) and WC golden boot (2010)",
        gif: "../Dunk/images/muller.gif"
    },
    player5: {
        name: "Robert Lewandowski",
        stats: "Goals:571, Assists:152 , Records: 5 Goals in 9 Minutes",
        gif: "../Dunk/images/robert-lewandowski-fc-bayern-munich.gif"

    },
    player6: {
        name: "Toni Kross",
        stats: "Goals:73, Assists:166 , Records: 6 Times Champions league winner",
        gif: "../Dunk/images/toni-kroos-kroos.gif"
    },
    player7: {
        name: "David Silva",
        stats: "Goals:121, Assists:184 , Records: World Cup winner and 2xEuros winner",
        gif: "../Dunk/images/silva.gif"
        
    },
    player8: {
        name: "Kevin De Bruyne",
        stats: "Goals:150, Assists:255, Records: 2nd most Premier League assists",
        gif: "../Dunk/images/kdb.gif"
    },
    player9: {
        name: "Sergio Busquets",
        stats: "Goals:19, Assists:52, Records: World cup winner and 2xEuros winner",
        gif: "../Dunk/images/sergio.gif"
    },
    player10: {
        name: "Manuel Neuer",
        stats: "Matches:784, Clean Sheets:355, Records: World cup winner with golden glove(2014)",
        gif: "../Dunk/images/man.gif"
    },
    player11: {
        name: "Neymar Jr.",
        stats: "Goals:360, Assists:221, Records: Finished in top 10 ballan D'or rankings despite playing outside Europe",
        gif: "../Dunk/images/neymar-world-cup.gif"
    },
    player12: {
        name: "Phillip Lahm",
        stats: "Matches:660, Assists:42, Records: No red cards in his entire carrier despite playing as a LB/RB",
        gif: "../Dunk/images/CvDi.gif"
    },
    player13: {
        name: "Mohamed Salah",
        stats: "Goals:291, Assists:144, Records: Most goals in a single Premier League Season",
        gif: "../Dunk/images/salah.gif"
    },
    player14: {
        name: "Antoine Griezmann",
        stats: "Goals:269, Assists:121, Records:Griezmann is one of only three players to score in the final of the UEFA European Championship and the FIFA World Cup, along with Pele and Zinedine Zidane.",
        gif: "../Dunk/images/atleti.gif"
    },

    // Add data for other 49 footballers
};

function showStats(playerId) {
    const modal = document.getElementById('player-modal');
    const playerName = document.getElementById('player-name');
    const playerStats = document.getElementById('player-stats');
    const playerGif = document.getElementById('player-gif-img');

    const playerData = footballerData[playerId];
    playerName.innerText = playerData.name;
    playerStats.innerText = playerData.stats;
    playerGif.src = playerData.gif;
    playerGif.style.display = 'block';
    


    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('player-modal');
    modal.style.display = 'none';
    const playerGif = document.getElementById('player-gif-img');
    playerGif.style.display = 'none';

}

function goBack() {
    closeModal();
    // Implement navigation back to home page if needed
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById('player-modal');
    if (event.target == modal) {
        closeModal();
    }
}