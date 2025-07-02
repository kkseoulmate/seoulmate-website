// Simple form handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Simulate form sending
    document.getElementById('form-response').innerText = 'Thank you! We will get back to you soon.';
  
    // Reset form fields
    this.reset();
  });
  