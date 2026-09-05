/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initPreloader();

        initCodeRain();

        initMobileMenu();

        initHeader();

        initNavigation();

        initReveal();

        initSkills();

        initFloatingContact();

        initCursor();

    }
);


/* =========================================================
   PRELOADER
========================================================= */

function initPreloader() {

    const preloader =
        document.querySelector(
            ".preloader"
        );

    const percent =
        document.querySelector(
            ".loader-percent"
        );

    if (!preloader) {
        return;
    }

    let value = 0;

    const interval =
        setInterval(
            function () {

                value +=
                    Math.floor(
                        Math.random() * 12
                    ) + 4;

                if (value >= 100) {

                    value = 100;

                    clearInterval(
                        interval
                    );

                    setTimeout(
                        function () {

                            preloader.classList.add(
                                "hidden"
                            );

                        },
                        300
                    );
                }

                if (percent) {

                    percent.textContent =
                        value + "%";

                }

            },
            90
        );

}


/* =========================================================
   CODE RAIN
========================================================= */

function initCodeRain() {

    const container =
        document.querySelector(
            "#codeRain"
        );

    if (!container) {
        return;
    }

    const snippets = [

        "const html = 'HTML';",

        "const css = 'CSS';",

        "const js = 'JavaScript';",

        "const developer = true;",

        "console.log('Hello');",

        "function createWebsite() {",

        "return portfolio;",

        "let skills = [];",

        "document.querySelector();",

        "if (project.ready) {",

        "learn();",

        "build();",

        "debug();",

        "git commit -m 'update';",

        "npm run dev",

        "<section>",

        "</div>",

        "{ developer: true }",

        "while (learning) {",

        "git push origin main"

    ];

    const mobile =
        window.innerWidth < 700;

    const amount =
        mobile ? 13 : 28;

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const line =
            document.createElement(
                "div"
            );

        line.className =
            "code-line";

        line.textContent =
            snippets[
                Math.floor(
                    Math.random() *
                    snippets.length
                )
            ];

        line.style.left =
            Math.random() *
            100 +
            "%";

        line.style.animationDuration =
            8 +
            Math.random() * 14 +
            "s";

        line.style.animationDelay =
            Math.random() * 10 +
            "s";

        line.style.fontSize =
            10 +
            Math.random() * 4 +
            "px";

        container.appendChild(
            line
        );

    }

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

    const toggle =
        document.querySelector(
            ".menu-toggle"
        );

    const nav =
        document.querySelector(
            ".nav"
        );

    if (!toggle || !nav) {
        return;
    }

    toggle.addEventListener(
        "click",
        function () {

            nav.classList.toggle(
                "open"
            );

            const opened =
                nav.classList.contains(
                    "open"
                );

            toggle.setAttribute(
                "aria-expanded",
                opened
            );

        }
    );

    const links =
        nav.querySelectorAll(
            ".nav-link"
        );

    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    nav.classList.remove(
                        "open"
                    );

                    toggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );

}


/* =========================================================
   HEADER
========================================================= */

function initHeader() {

    const header =
        document.querySelector(
            ".header"
        );

    if (!header) {
        return;
    }

    function updateHeader() {

        if (
            window.scrollY > 30
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

}


/* =========================================================
   NAVIGATION
========================================================= */

function initNavigation() {

    const links =
        document.querySelectorAll(
            '.nav-link[href^="#"]'
        );

    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    const header =
                        document.querySelector(
                            ".header"
                        );

                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;

                    const position =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        headerHeight -
                        10;

                    window.scrollTo({

                        top:
                            position,

                        behavior:
                            "smooth"

                    });

                }
            );

        }
    );

    updateActiveNavigation();

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        {
            passive: true
        }
    );

}


/* =========================================================
   ACTIVE NAV
========================================================= */

function updateActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const links =
        document.querySelectorAll(
            ".nav-link"
        );

    if (
        !sections.length ||
        !links.length
    ) {
        return;
    }

    const position =
        window.scrollY + 180;

    let current =
        "";

    sections.forEach(
        function (section) {

            const top =
                section.offsetTop;

            const bottom =
                top +
                section.offsetHeight;

            if (
                position >= top &&
                position < bottom
            ) {

                current =
                    section.id;

            }

        }
    );

    links.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function initReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );

    if (!elements.length) {
        return;
    }

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        elements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

        return;
    }

    const observer =
        new IntersectionObserver(

            function (
                entries,
                observerInstance
            ) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        entry.target.classList.add(
                            "visible"
                        );

                        observerInstance.unobserve(
                            entry.target
                        );

                    }
                );

            },

            {
                threshold: 0.12
            }

        );

    elements.forEach(
        function (element) {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   SKILLS
========================================================= */

function initSkills() {

    const bars =
        document.querySelectorAll(
            ".progress-bar"
        );

    if (!bars.length) {
        return;
    }

    const observer =
        new IntersectionObserver(

            function (
                entries,
                observerInstance
            ) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        const bar =
                            entry.target;

                        const progress =
                            bar.dataset.progress;

                        if (progress) {

                            setTimeout(
                                function () {

                                    bar.style.width =
                                        progress +
                                        "%";

                                },
                                150
                            );

                        }

                        observerInstance.unobserve(
                            bar
                        );

                    }
                );

            },

            {
                threshold: 0.3
            }

        );

    bars.forEach(
        function (bar) {

            observer.observe(
                bar
            );

        }
    );

}


/* =========================================================
   FLOATING CONTACT
========================================================= */

function initFloatingContact() {

    const wrapper =
        document.querySelector(
            ".floating-contact"
        );

    const button =
        document.querySelector(
            ".floating-main"
        );

    if (!wrapper || !button) {
        return;
    }

    button.addEventListener(
        "click",
        function () {

            /*
                GitHub otwiera się w NOWEJ KARCIE.
                Twoja strona pozostaje otwarta.
            */

            window.open(
                "https://github.com/Ak1ro999",
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =========================================================
   CUSTOM CURSOR
========================================================= */

function initCursor() {

    const cursor =
        document.querySelector(
            ".custom-cursor"
        );

    if (!cursor) {
        return;
    }

    const touch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;

    if (touch) {
        return;
    }

    cursor.classList.add(
        "active"
    );

    document.addEventListener(
        "mousemove",
        function (event) {

            cursor.style.left =
                event.clientX + "px";

            cursor.style.top =
                event.clientY + "px";

        }
    );

    const interactive =
        document.querySelectorAll(
            "a, button, .project-card, .skill-card, .stat-card, .contact-card"
        );

    interactive.forEach(
        function (element) {

            element.addEventListener(
                "mouseenter",
                function () {

                    cursor.classList.add(
                        "hover"
                    );

                }
            );

            element.addEventListener(
                "mouseleave",
                function () {

                    cursor.classList.remove(
                        "hover"
                    );

                }
            );

        }
    );

    document.addEventListener(
        "mouseleave",
        function () {

            cursor.classList.remove(
                "active"
            );

        }
    );

    document.addEventListener(
        "mouseenter",
        function () {

            cursor.classList.add(
                "active"
            );

        }
    );

}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

const profileImage =
    document.querySelector(
        ".profile-image img"
    );

if (profileImage) {

    profileImage.addEventListener(
        "error",
        function () {

            this.style.display =
                "none";

            const parent =
                this.parentElement;

            if (parent) {

                const message =
                    document.createElement(
                        "div"
                    );

                message.textContent =
                    "photo.jpg";

                message.style.position =
                    "absolute";

                message.style.inset =
                    "0";

                message.style.display =
                    "flex";

                message.style.alignItems =
                    "center";

                message.style.justifyContent =
                    "center";

                message.style.color =
                    "#91a0b8";

                message.style.fontFamily =
                    "Consolas, monospace";

                parent.appendChild(
                    message
                );

            }

        }
    );

}


/* =========================================================
   ESC — CLOSE MENU
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }

        const nav =
            document.querySelector(
                ".nav"
            );

        const toggle =
            document.querySelector(
                ".menu-toggle"
            );

        if (nav) {

            nav.classList.remove(
                "open"
            );

        }

        if (toggle) {

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

        const floating =
            document.querySelector(
                ".floating-contact"
            );

        if (floating) {

            floating.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "%c< dev />",
    "font-size:24px;font-weight:bold;color:#58a6ff;"
);

console.log(
    "%cPortfolio initialized successfully.",
    "font-size:13px;"
);