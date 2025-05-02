// Pour le formulaire d'inscription aux newsletter
const form = document.getElementById('inscription-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const pseudo = encodeURIComponent(form.pseudo.value);
  const email = encodeURIComponent(form.email.value);
  const webhookURL = `https://script.google.com/macros/s/AKfycby9nWkSuaDTyN9YaPMtbmxkM-QdZ87z1kmqKofAYn9rQ0__TH83KMeo1tFAkacRc-dO/exec?pseudo=${pseudo}&email=${email}`;

  alert("Inscription envoyez !")
});

// Pour l'animation aux scolls
const ignoredTags = ['SCRIPT', 'STYLE', 'LINK', 'META', 'HEAD', 'TITLE'];

// Sélectionner tous les éléments sauf ceux à ignorer
const elementsToReveal = Array.from(document.body.querySelectorAll('*')).filter(el => {
  return !ignoredTags.includes(el.tagName);
});

// Ajouter la classe "reveal" à chaque élément ciblé
elementsToReveal.forEach(el => el.classList.add('reveal'));

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('visible');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

elementsToReveal.forEach(element => {
  observer.observe(element);
});