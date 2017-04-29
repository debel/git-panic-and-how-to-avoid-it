var snippets = document.querySelectorAll('pre>code');

snippets.forEach(snippet => {
  snippet.innerHTML = snippet.innerHTML.replace(/          /g, '  ');
});

Reveal.initialize({
    width: 1024,
    height: 768,
    margin: 0.1,
    minScale: 0.1,
    maxScale: 1.3,
    transition: 'fade',
    transitionSpeed: 'fast',
    controls: true,
    history: true
});
hljs.initHighlightingOnLoad();
