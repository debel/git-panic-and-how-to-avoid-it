var snippets = document.querySelectorAll('pre>code');

snippets.forEach(snippet => {
  snippet.innerHTML = snippet.innerHTML.replace(/          /g, '  ');
});

Reveal.initialize({
    width: 1920,
    height: 1080,
    margin: 0.01,
    minScale: 0.5,
    maxScale: 1.5,
    transition: 'random',
    transitionSpeed: 'fast',
    controls: true,
    history: true
});
hljs.initHighlightingOnLoad();
