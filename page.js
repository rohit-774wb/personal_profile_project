// Find the theme button on the page.
const themeToggle = document.querySelector("#theme-toggle");

// Switch themes whenever the button is clicked.
themeToggle.addEventListener("click", function () {
	document.body.classList.toggle("dark-mode");

	// Update the button label and accessibility state to match the theme.
	const darkModeEnabled = document.body.classList.contains("dark-mode");
	themeToggle.textContent = darkModeEnabled ? "Light mode" : "Dark mode";
	themeToggle.setAttribute("aria-pressed", darkModeEnabled);
});
