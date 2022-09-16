import showHealth from './health';

const healthProgress = document.querySelector('.healthprogress');
const healthStatus = healthProgress.querySelector('.critical');

function showStatus() {
  const currentHealth = health;
  if (currentHealth === 'healthy') {
    healthStatus.className = 'healthy';
  } else if (currentHealth === 'wounded') {
    healthStatus.className = 'wounded';
  } else if (currentHealth === 'critical') {
    healthStatus.className = 'critical';
  } else {
    healthStatus.className = '';
    healthStatus.textContent = 'DEAD';
  }
  healthStatus.style.width = `${_health}%`;
}
const _name = 'Маг';
const _health = 70;

const health = showHealth({ name: _name, health: _health });

showStatus();
