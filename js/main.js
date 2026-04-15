document.addEventListener("DOMContentLoaded", () => {
    if (window.emailjs) {
        emailjs.init("AN05EWZpZ-QoarlJp");
    }

    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const contactForm = document.getElementById("contact-form");
    const heroContent = document.querySelector(".hero-content");

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            mobileMenuToggle.classList.toggle("active");
        });
    }

    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu?.classList.remove("active");
            mobileMenuToggle?.classList.remove("active");
        });
    });

    function updateActiveNavLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id") || "";
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
        });
    }

    function handleScrollState() {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        }

        updateActiveNavLink();

        if (heroContent && window.pageYOffset < window.innerHeight) {
            const scrolled = window.pageYOffset;
            heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
            heroContent.style.opacity = String(1 - scrolled / (window.innerHeight / 2));
        }
    }

    window.addEventListener("scroll", handleScrollState);
    handleScrollState();

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!window.emailjs) {
                alert("Failed to send message. Please try again.");
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn?.innerHTML || "";

            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
            }

            emailjs
                .sendForm("service_7y558r8", "template_ofj18fq", this)
                .then(() => {
                    alert("Message sent successfully!");
                    contactForm.reset();
                })
                .catch((error) => {
                    alert("Failed to send message. Please try again.");
                    console.error(error);
                })
                .finally(() => {
                    if (submitBtn) {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }
                });
        });
    }

    if ("IntersectionObserver" in window) {
        const animationObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in-up");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        document.querySelectorAll(".portfolio-card, .skill-item, .stat-item").forEach((element) => {
            animationObserver.observe(element);
        });

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });

        document.querySelectorAll("img[data-src]").forEach((image) => {
            imageObserver.observe(image);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
        link.addEventListener("click", function () {
            this.style.opacity = "0.7";

            setTimeout(() => {
                this.style.opacity = "1";
            }, 1000);
        });
    });
});
