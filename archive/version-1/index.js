const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector(".menu_dropdown");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    dropdown.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    dropdown.classList.remove("active");
}));

function openDropdown(button, dropdownNumber) {
    // Switch icons between up and down arrows
    const icon = button.querySelector("i");
    if (icon.classList.contains("fa-chevron-down")) {
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
    } else {
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
    }

    // Switch visibility of the content element
    const dropdown = document.querySelector(`#dropdown-${dropdownNumber}`);
    dropdown.style.display == "none" || dropdown.style.display == ""
        ? dropdown.style.display = "block"
        : dropdown.style.display = "none";
}