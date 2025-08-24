document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');
    const sections = document.querySelectorAll('.rule-section');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.querySelector('.sidebar');

    function showSection(id) {
        sections.forEach(section => section.classList.remove('active'));
        document.querySelector(id).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            e.target.classList.add('active');
            const sectionId = e.target.getAttribute('href');
            showSection(sectionId);

            // Close sidebar after clicking (on mobile)
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Show first section by default
    if (sections.length > 0) {
        showSection(navLinks[0].getAttribute('href'));
    }
});

// Automatically add Next/Previous buttons to all rule sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.rule-section');

    sections.forEach((section, index) => {
        const navDiv = document.createElement('div');
        navDiv.classList.add('nav-buttons');

        // Previous button
        if (index > 0) {
            const prevBtn = document.createElement('button');
            prevBtn.textContent = "Previous";
            prevBtn.classList.add('prev-btn');
            prevBtn.addEventListener('click', () => {
                const targetId = '#rule' + (index);
                document.querySelectorAll('.sidebar nav ul li a').forEach(link => link.classList.remove('active'));
                document.querySelector(`.sidebar nav ul li a[href="${targetId}"]`).classList.add('active');
                sections.forEach(s => s.classList.remove('active'));
                document.querySelector(targetId).classList.add('active');
            });
            navDiv.appendChild(prevBtn);
        }

        // Next button
        if (index < sections.length - 1) {
            const nextBtn = document.createElement('button');
            nextBtn.textContent = "Next";
            nextBtn.classList.add('next-btn');
            nextBtn.addEventListener('click', () => {
                const targetId = '#rule' + (index + 2);
                document.querySelectorAll('.sidebar nav ul li a').forEach(link => link.classList.remove('active'));
                document.querySelector(`.sidebar nav ul li a[href="${targetId}"]`).classList.add('active');
                sections.forEach(s => s.classList.remove('active'));
                document.querySelector(targetId).classList.add('active');
            });
            navDiv.appendChild(nextBtn);
        }

        section.appendChild(navDiv);
    });
});

