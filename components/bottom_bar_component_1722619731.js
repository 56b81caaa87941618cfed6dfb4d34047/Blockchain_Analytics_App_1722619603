/* Summary: Contains a bar fixed at the bottom of the page with a transparent background with a blur effect.
It has two buttons: Contact button that directs to the contact page and Pay button that directs to the payment page, styled with a blue background and a shine animation effect.
*/
Vue.component("bottom_bar_component_1722619731", {
    template: `
    <section id="bottom-bar-component" class="fixed bottom-0 z-30 w-full lg:w-1/2 bg-opacity-40 backdrop-blur-lg bg-pink-300 dark:bg-purple-900 rounded-lg">
        <div id="bottom-bar-component-content" class="w-full max-w-xl mx-auto px-6 sm:px-8">
            <div id="action-buttons" class="flex py-6 md:py-8 space-x-6 justify-center">
                <a id="contact-button" class="btn flex items-center justify-center w-1/2 h-14 p-4 text-white bg-opacity-30 backdrop-filter backdrop-blur-lg bg-pink-500 dark:bg-purple-700 rounded-lg hover:bg-opacity-50 transition duration-300 ease-in-out shadow-lg" href="contact.html">Contact</a>
                <a id="pay-button" class="btn flex items-center justify-center w-1/2 h-14 p-4 animate-shine bg-[size:200%_100%] hover:bg-opacity-70 transition duration-300 ease-in-out shadow-lg text-white bg-opacity-50 backdrop-filter backdrop-blur-lg bg-purple-600 dark:bg-pink-600 rounded-lg hover:bg-purple-700 dark:hover:bg-pink-700">Pay</a>
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
