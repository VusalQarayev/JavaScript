const Itemler = document.querySelectorAll('.part311');
  
      Itemler.forEach(item => {
          item.addEventListener('click', function() {
              const a = this.querySelector('h2').textContent;
              const b = this.querySelector('p').textContent;
              const c = this.querySelector('.part311div h2').textContent;
              const d = this.querySelector('.part311div p').textContent;
              const s = this.querySelector('.part311img').src;
  
              document.getElementById('basliq').textContent = a;
              document.getElementById('metn').textContent = b;
              document.getElementById('adlar').textContent = c;
              document.getElementById('adlar2').textContent = d;
              document.querySelector('.change').src = s;
  
              document.querySelector('.mb1').style.display = 'block';
          });
      });
  
      function closeProject() {
          document.querySelector('.mb1').style.display = 'none';
      }