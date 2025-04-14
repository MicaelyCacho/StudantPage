
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  content.classList.toggle('shifted');
});
