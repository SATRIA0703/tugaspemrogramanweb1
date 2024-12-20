document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".guestbook-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Mencegah pengiriman form ke server

        // Menampilkan notifikasi
        alert("Pesan Anda telah berhasil dikirim! Terima kasih.");

        // Opsional: Reset form setelah pengiriman
        form.reset();
    });
});
