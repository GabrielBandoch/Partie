document.addEventListener('DOMContentLoaded', function () {
    var questions = document.querySelectorAll('.accordion__question');
  
    questions.forEach(function (question) {
      question.addEventListener('click', function () {
        var answer = this.nextElementSibling;
        var isOpen = this.classList.contains('active');
  
        // Fecha todas as respostas
        questions.forEach(function (q) {
          q.classList.remove('active');
          q.nextElementSibling.style.maxHeight = 0;
        });
  
        if (!isOpen) {
          // Abre a resposta correspondente
          this.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  });

  function enviarFormulario() {
    // Exibir a notificação de "Enviado com sucesso"
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = 'Enviado com sucesso';
    document.body.appendChild(notification);
  
    // Remover a notificação após alguns segundos
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
