document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
  
      fetch(contactForm.getAttribute('action'), {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          responseMessage.classList.remove('error');
          responseMessage.classList.add('success');
          responseMessage.textContent = 'Message sent successfully!';
        } else {
          responseMessage.classList.remove('success');
          responseMessage.classList.add('error');
          responseMessage.textContent = 'Error sending message. Please try again.';
        }
      })
      .catch(error => {
        responseMessage.classList.remove('success');
        responseMessage.classList.add('error');
        responseMessage.textContent = 'An error occurred. Please try again later.';
      });
    });
  });
  