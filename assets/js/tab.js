let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector("#tab-contents");
 
        for (let i = 0; i < tabContents.children.length; i++) {

            tabTogglers[i].parentElement.classList.remove("text-gray-100","dark:text-gray-100", "text-gray-100", "text-gray-100", "-mb-px", "bg-blue-600", "text-gray-100", "dark:text-gray-100"); tabContents.children[i].classList.remove("hidden");
            if ("#" + tabContents.children[i].id === tabName) {
                continue;
            }
            tabContents.children[i].classList.add("hidden");

        }
        e.target.parentElement.classList.add("text-gray-100", "text-gray-100", "dark:text-gray-100","text-gray-100", "-mb-px", "bg-blue-600", "text-gray-100", "dark:text-gray-100");
    });
});
