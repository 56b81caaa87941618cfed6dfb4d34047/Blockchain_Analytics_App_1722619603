/* Summary: Contains a bar fixed at the bottom of the page with a transparent background with a blur effect.
It has two buttons: Contact button that directs to the contact page and Pay button that directs to the payment page, styled with a blue background and a shine animation effect.
*/
Vue.component("bottom_bar_component_1722619740", {
    template: `
    <section id="bottom-bar-component" class="fixed bottom-0 z-30 w-full lg:w-1/2 bg-opacity-30 backdrop-blur-lg backdrop-filter bg-pink-300 dark:bg-purple-800 rounded-lg shadow-lg">
        <div id="bottom-bar-component-content" class="w-full max-w-xl mx-auto px-6 py-4">
            <div id="action-buttons" class="flex space-x-6 justify-center">
                <a id="contact-button" class="btn flex items-center justify-center w-1/2 h-14 p-3 text-pink-800 dark:text-purple-200 bg-opacity-50 backdrop-blur-md backdrop-filter bg-pink-400 dark:bg-purple-700 rounded-lg border border-pink-500 dark:border-purple-500 hover:bg-opacity-70 hover:border-pink-600 dark:hover:border-purple-300 transition duration-300 ease-in-out shadow-lg" href="contact.html">Contact</a>
                <a id="pay-button" class="btn flex items-center justify-center w-1/2 h-14 p-3 bg-opacity-70 backdrop-blur-md backdrop-filter bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 text-white rounded-lg border border-pink-500 dark:border-purple-400 hover:border-pink-400 dark:hover:border-purple-300 transition duration-300 ease-in-out shadow-lg">Pay</a>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null
        }
    },
});
