// script.js
async function fetchGitHubRepos() {
  const username = "fatmanuraksakal";
  const apiURL = `https://api.github.com/users/${username}/repos?sort=updated&per_page=4`;

  try {
    const response = await fetch(apiURL);
    const repos = await response.json();

    const container = document.getElementById("project-container");

    repos.forEach(repo => {
      const card = document.createElement("div");

      card.className = `
        w-full bg-white/10 backdrop-blur-lg
        shadow-[0_0_20px_rgba(193,183,221,0.6)]
        border border-white/20
        rounded-xl p-6 text-left
        transition hover:scale-105 duration-300
      `;

      card.innerHTML = `
        <h3 class="text-2xl font-bold text-[#4A4A4A] mb-2">${repo.name}</h3>
        <p class="text-sm text-gray-700 mb-4">${repo.description || "Açıklama eklenmemiş."}</p>
        <a href="${repo.html_url}" target="_blank" class="text-[#C1B7DD] hover:underline font-medium">
          GitHub'da Gör →
        </a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("GitHub verisi alınamadı:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchGitHubRepos);
//

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(window.scrollY > 50){
    nav.classList.add('py-1', 'shadow-2xl', 'bg-white/30', 'backdrop-blur-xl');
    nav.classList.remove('py-2', 'bg-gradient-to-br');
  } else {
    nav.classList.remove('py-1', 'shadow-2xl', 'bg-white/30', 'backdrop-blur-xl');
    nav.classList.add('py-2', 'bg-gradient-to-br', 'from-[#c0c0c0]', 'to-[#F5F5F5]');
  }
});
//

window.addEventListener('DOMContentLoaded', () => {
  const headerContent = document.getElementById('header-content');
  headerContent.classList.remove('opacity-0', 'scale-90');
  headerContent.classList.add('opacity-100', 'scale-100');
});
//



