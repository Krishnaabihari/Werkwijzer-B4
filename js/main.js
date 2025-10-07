// Main JavaScript for WerkWijzer website - Alleen animaties
document.addEventListener('DOMContentLoaded', function() {
   // Initialize de website met alleen animaties
   initAnimations();
   // Add hover effects to path cards
   const pathCards = document.querySelectorAll('.path-card');
   pathCards.forEach(card => {
       card.addEventListener('mouseenter', function() {
           this.style.transform = 'translateY(-10px)';
       });
       card.addEventListener('mouseleave', function() {
           this.style.transform = 'translateY(0)';
       });
   });
   // Add click effect to buttons
   const pathButtons = document.querySelectorAll('.path-btn');
   pathButtons.forEach(button => {
       button.addEventListener('click', function(e) {
           // Voorkom dat het formulier wordt verzonden
           e.preventDefault();
           // Eenvoudige klik animatie
           this.style.transform = 'scale(0.95)';
           setTimeout(() => {
               this.style.transform = 'scale(1)';
           }, 150);
       });
   });
   // Formulier animatie
   const contactForm = document.querySelector('.message-form');
   if (contactForm) {
       contactForm.addEventListener('submit', function(e) {
           e.preventDefault();
           const submitBtn = this.querySelector('.submit-btn');
           submitBtn.textContent = 'Versturen...';
           submitBtn.disabled = true;
           // Simuleer verzending
           setTimeout(() => {
               alert('Bedankt voor je bericht! We nemen snel contact met je op.');
               submitBtn.textContent = 'Verstuur bericht';
               submitBtn.disabled = false;
               contactForm.reset();
           }, 2000);
       });
   }
});
// Initialize alleen animaties
function initAnimations() {
   console.log('WerkWijzer animaties geïnitialiseerd!');
   // Animate the XP bar (puur visueel)
   animateXPBar();
   // Add floating animation to path icons
   const pathIcons = document.querySelectorAll('.path-icon');
   pathIcons.forEach((icon, index) => {
       icon.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
   });
   // Add CSS voor animaties
   const style = document.createElement('style');
   style.textContent = `
       @keyframes float {
           0% { transform: translateY(0px); }
           50% { transform: translateY(-10px); }
           100% { transform: translateY(0px); }
       }
       @keyframes pulse {
           0% { opacity: 0.8; }
           50% { opacity: 1; }
           100% { opacity: 0.8; }
       }
   `;
   document.head.appendChild(style);
}
// Animate the XP bar (puur visueel, geen functionaliteit)
function animateXPBar() {
   const xpFill = document.querySelector('.xp-fill');
   // Laat de XP bar oneindig pulseren
   setInterval(() => {
       xpFill.style.opacity = '0.7';
       setTimeout(() => {
           xpFill.style.opacity = '1';
       }, 500);
   }, 2000);
}