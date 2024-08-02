/* Summary: Contains a bar fixed at the bottom of the page with a transparent background with a blur effect.
It has two buttons: Contact button that directs to the contact page and Pay button that directs to the payment page, styled with a blue background and a shine animation effect.
*/
Vue.component("bottom_bar_component_1722619762", {
    template: `
    <section id="bottom-bar-component" class="fixed bottom-0 z-30 w-full lg:w-1/2 bg-opacity-30 backdrop-blur-lg bg-pink-300 dark:bg-purple-900 rounded-lg backdrop-filter">
        <div id="bottom-bar-component-content" class="w-full max-w-xl mx-auto px-6 sm:px-8">
            <div id="action-buttons" class="flex py-6 md:py-8 space-x-6 justify-center">
                <a id="contact-button" class="btn flex items-center justify-center w-1/2 h-14 p-4 text-white bg-opacity-50 backdrop-blur-md bg-pink-500 dark:bg-purple-700 rounded-lg hover:bg-opacity-70 dark:hover:bg-opacity-70 border border-pink-300 dark:border-purple-500 shadow-lg transition duration-300 ease-in-out" href="contact.html">Contact</a>
                <a id="pay-button" class="btn flex items-center justify-center w-1/2 h-14 p-4 animate-shine bg-[size:200%_100%] hover:bg-opacity-80 transition duration-300 ease-in-out shadow-lg text-white bg-opacity-60 backdrop-blur-md bg-purple-600 dark:bg-pink-600 hover:bg-purple-700 dark:hover:bg-pink-700 rounded-lg bg-[linear-gradient(100deg, rgba(147,51,234,0.7), 45%, rgba(219,39,119,0.7), 55%, rgba(147,51,234,0.7))] rounded-lg">Pay</a>
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
