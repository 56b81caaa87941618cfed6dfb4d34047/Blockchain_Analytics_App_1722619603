/* Summary: Contains a bar fixed at the bottom of the page with a transparent background with a blur effect.
It has two buttons: Contact button that directs to the contact page and Pay button that directs to the payment page, styled with a blue background and a shine animation effect.
*/
Vue.component("bottom_bar_component_1722619756", {
    template: `
    <section id="bottom-bar-component" class="fixed bottom-0 z-30 w-full lg:w-1/2 bg-opacity-30 backdrop-blur-lg backdrop-filter bg-pink-300 dark:bg-purple-900">
        <div id="bottom-bar-component-content" class="w-full max-w-xl mx-auto px-6 py-6">
            <div id="action-buttons" class="flex space-x-6 justify-center">
                <a id="contact-button" class="btn flex items-center justify-center w-1/2 h-14 p-4 text-white bg-opacity-40 backdrop-blur-md backdrop-filter bg-pink-500 dark:bg-purple-600 rounded-lg hover:bg-opacity-60 transition duration-300 ease-in-out shadow-lg" href="contact.html">Contact</a>
                <a id="pay-button" class="btn flex items-center justify-center w-1/2 h-14 p-4 bg-opacity-40 backdrop-blur-md backdrop-filter bg-purple-500 dark:bg-pink-600 hover:bg-opacity-60 transition duration-300 ease-in-out shadow-lg text-white rounded-lg">Pay</a>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded:false,
            tab:null
        }
    },
});
