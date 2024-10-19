window.addEventListener('DOMContentLoaded', () => {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');

			if (entry.intersectionRatio > 0) {
        document.querySelectorAll(`#TableOfContents li a`)?.forEach((section) => section.classList.remove('text-accent-500', 'font-medium'));
				document.querySelector(`#TableOfContents li a[href="#${id}"]`)?.classList.add('text-accent-500', 'font-medium');
			}
		});
	});

	// Track all headings that have an `id` applied
	document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach((section) => {
		observer.observe(section);
	});
});
