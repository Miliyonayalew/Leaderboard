const render = (data) => {
  data.sort((a, b) => b.score - a.score);
  const scoreList = document.querySelector('.recent-score-list');
  scoreList.innerHTML = '';
  data.forEach((player) => {
    scoreList.innerHTML += `<li><p>${player.user}: ${player.score}</p></li>`;
  });
};

export default render;