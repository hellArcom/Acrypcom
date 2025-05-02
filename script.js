// Pour le formulaire d'inscription aux newsletter
const form = document.getElementById('inscription-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
    pseudo: form.pseudo.value,
    email: form.email.value
    };

    const webhookURL = 'https://script.google.com/macros/s/AKfycbwSOuUGtfl5CygVmh1s7F_KouxMAIG317ZP96sADbEUQChzKUhxCaSDtMEXxKfynZdi/exec';

    try {
    const res = await fetch(webhookURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        alert("Inscription envoyée !");
        form.reset();
    } else {
        alert("Erreur lors de l'envoi !");
    }
    } catch (err) {
    console.error(err);
    alert("Erreur réseau");
    }
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
