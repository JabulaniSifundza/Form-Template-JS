
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Element Selections ---
    // Adjust these selectors to match your specific HTML element IDs and classes.
    const form = document.getElementById('form');
    const modal = document.getElementById('modal');
    const closeModalButton = modal.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');

    // --- 2. Modal Control Functions ---
    /**
     * Opens the modal and sets its content.
     * @param {string} title - The title to display in the modal.
     * @param {string} message - The message to display in the modal.
     */
    const openModal = (title, message) => {
        if (modalTitle) modalTitle.textContent = title;
        if (modalMessage) modalMessage.textContent = message;
        if (modal) modal.classList.remove('hidden');
    };

    /**
     * Closes the modal.
     */
    const closeModal = () => {
        if (modal) modal.classList.add('hidden');
    };

    // --- 3. Form Submission Handler ---
    if (form) {
        form.addEventListener('submit', (event) => {
            // Prevent the default browser action (page reload).
            event.preventDefault();

            // You can optionally gather form data to display in the modal.
            const formData = new FormData(form);
            // Example: get the 'name' field value. Assumes an input with name="name".
            const name = formData.get('name');

            // Open the modal with a confirmation message.
            // You can customize the title and message as needed.
            openModal(
                'Submission Received',
                `Thank you, ${name || 'friend'}. We have received your form.`
            );

            // Optional: Reset the form fields after opening the modal.
            form.reset();
        });
    }

    // --- 4. Modal Closing Logic ---

    // Close the modal when the close button (e.g., an 'x') is clicked.
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    // Close the modal if the user clicks on the background overlay.
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // Close the modal if the user presses the 'Escape' key.
    document.addEventListener('keydown', (event) => {
        if (modal && !modal.classList.contains('hidden') && event.key === 'Escape') {
            closeModal();
        }
    });
});
