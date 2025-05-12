<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-column">
                <span class="footer-title-main">Clockwise</span>
                <div class="footer-socials">
                    <img src="../assets/footer/Group 10.png" alt="instagram">
                    <img src="../assets/footer/Group 11.png" alt="facebook">
                    <img src="../assets/footer/Group 12.png" alt="twitter">
                </div>
            </div>
            <div class="footer-column">
                <router-link to="/" class="footer-link" active-class="footer-link-active">Главная</router-link>
                <router-link to="/about" class="footer-link" active-class="footer-link-active">О нас</router-link>
                <router-link to="/catalog" class="footer-link" active-class="footer-link-active">Каталог</router-link>
                <router-link to="/profile" class="footer-link" active-class="footer-link-active">Личный кабинет</router-link>
                <router-link to="/cart" class="footer-link" active-class="footer-link-active">Корзина</router-link>
            </div>
            <div class="footer-column">
                <a href="mailto:support@clockwise-shop.com" class="footer-link">Email: support@clockwise-shop.com</a>
                <a href="tel:+74991234567" class="footer-link">Телефон: +7 (499) 123-45-67</a>
                <span class="footer-text">Адрес: Москва, ул. Временная, д.10</span>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    padding: 50px 80px 60px 60px;
    background-color: #000;
    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.02em;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    gap: 40px;
}

.footer-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.footer-title-main {
    color: #fff !important;
    font-size: 24px;
    line-height: 125%;
    letter-spacing: 0.02em;
}

.footer-link,
.footer-text {
    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: #8e8e8e;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #d9d9d9;
    }
}

.footer-link-active {
    color: #d9d9d9 !important;
    font-weight: 600;
}

.footer-socials {
    display: flex;
    gap: 10px;

    img {
        width: 32px;
        height: 32px;
        transition: transform 0.3s ease;
    }

    img:hover {
        transform: scale(1.1); 
    }
}


@media (max-width: 768px) {
    .footer {
        padding: 30px 20px;
        font-size: 14px;
    }

    .footer-container {
        flex-direction: column;
        gap: 30px;
    }

    .footer-column {
        gap: 15px;
    }

    .footer-title-main {
        font-size: 18px;
    }

    .footer-link,
    .footer-text {
        font-size: 14px;
    }

    .footer-socials {
        gap: 16px;

        img {
            width: 24px;
            height: 24px;
        }
    }
}
</style>
