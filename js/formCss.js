const forms = document.getElementsByClassName('form');

Array.from(forms).forEach(form => {
    const input = form.querySelector('input[type="text"]')
  
    input.addEventListener('input', () => {
      const length = input.value.length || input.placeholder.length;
      const borderLength = length;
  
      input.style.width = `${borderLength}px`;
    });
  });