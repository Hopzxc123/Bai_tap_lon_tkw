function showSection(sectionId) {
    // Ẩn tất cả các phần
    const sections = document.querySelectorAll('.news-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Hiển thị phần tương ứng
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Hiển thị phần đầu tiên mặc định khi trang tải
window.onload = function() {
    showSection('CF'); // Hiển thị phần #COFFEELOVER mặc định
};