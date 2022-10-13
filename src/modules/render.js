const render = (data) => {
  data.sort((a, b) => b.score - a.score);
  const scoreList = document.querySelector('.recent-score-list');
  scoreList.innerHTML = '';
  data.forEach((player, index) => {
    scoreList.innerHTML += `<li><p>${index + 1}. ${player.user}: ${player.score}</p></li>`;
  });
};

export default render;